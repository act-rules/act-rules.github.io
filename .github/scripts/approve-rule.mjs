#!/usr/bin/env zx
import 'zx/globals';
import assert from 'assert';
import moment from 'moment';

import {
  config,
  cloneWcagActRules,
  createOrCheckoutBranch,
  commitAndPush
} from './commons.mjs';

const w3cDataFormat = 'D MMMM YYYY';
const isoDateFormat = 'YYYY-MM-DD';

assert(typeof argv.ruleId === 'string', 'Expected --ruleId to be set');
assert(argv.ruleId.length === 6, 'Expected --ruleId to be 6 characters long');
assert(typeof argv.branch === 'string', 'Expected --branch to be set');

if (!argv['skip-clone']) {
  await cloneWcagActRules(config);
}

await createOrCheckoutBranch(config, argv.branch);
await generateApprovedRulePages(config, argv.ruleId);
await updateRuleVersionsYaml(config, argv.ruleId);
await approveTestCaseJson(config, argv.ruleId);
await commitAndPush(config, `Set ${argv.ruleId} to approved`);

async function generateApprovedRulePages({ tmpDir, rulesDir, glossaryDir }, ruleId) {
  await $`node ./node_modules/act-tools/dist/cli/rule-transform.js \
  --rulesDir "${rulesDir}" \
  --glossaryDir "${glossaryDir}" \
  --outDir "${tmpDir}" \
  --ruleIds "${ruleId}"
  `;
}

async function updateRuleVersionsYaml({ tmpDir }, ruleId) {
  const ruleVersionPath = `${tmpDir}_data/wcag-act-rules/rule-versions.yml`;
  let ruleVersionsStr = fs.readFileSync(ruleVersionPath, 'utf8');
  const ruleVersions = YAML.parse(ruleVersionsStr);
  assert(
    ruleVersions[ruleId] === undefined,
    `RuleID ${ruleId} should not exists in rule-versions.yml. Was this rule approved before?`
  );

  const proposedText = fs.readFileSync(`${tmpDir}content/rules/${ruleId}/proposed.md`, 'utf8');
  const proposedData = proposedText.match(/last_modified:\s+(.*)/)?.[1]
  assert(proposedData, `Unable to find last_modified data in ${ruleId}/proposed.md`);

  ruleVersions[ruleId] = [{
    file: 'proposed.md',
    url: `${ruleId}/proposed/`,
    w3cDate: proposedData,
    isoDate: moment(proposedData, w3cDataFormat).format(isoDateFormat)
  }, {
    file: 'index.md',
    url: `${ruleId}/`,
    w3cDate: moment().format(w3cDataFormat),
    isoDate: moment().format(isoDateFormat)
  }]
  
  ruleVersionsStr = YAML.stringify(ruleVersions);
  fs.writeFileSync(ruleVersionPath, ruleVersionsStr, 'utf8');
  console.log(`Added ${ruleId} to rule-versions.yml`);
}

async function approveTestCaseJson({ tmpDir }, ruleId) {
  let testCaseCount = 0;
  const testCaseJsonPath = `${tmpDir}content-assets/wcag-act-rules/testcases.json`;
  const testCaseJson = JSON.parse(fs.readFileSync(testCaseJsonPath, 'utf8'));
  testCaseJson.testcases.forEach((testCase, index) => {
    if (testCase.ruleId === ruleId) {
      // Override rather than update so that `approved` isn't at the bottom
      testCaseJson.testcases[index] = { ruleId, approved: true, ...testCase }
      testCaseCount++
    }
  });
  console.log(`Set ${testCaseCount} test cases of rule ${ruleId} to be approved in testcases.json`);
  fs.writeFileSync(testCaseJsonPath, JSON.stringify(testCaseJson, null, 2), 'utf8');
}

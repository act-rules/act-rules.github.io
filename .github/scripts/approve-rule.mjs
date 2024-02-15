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
import { getRulePages } from 'act-tools/dist/utils/get-page-data.js';
import { extractTestCases } from "act-tools/dist//build-examples/extract-test-cases.js";

const w3cDataFormat = 'D MMMM YYYY';
const isoDateFormat = 'YYYY-MM-DD';

assert(typeof argv.ruleId === 'string', 'Expected --ruleId to be set');
assert(argv.ruleId.length === 6, 'Expected --ruleId to be 6 characters long');
assert(typeof argv.branch === 'string', 'Expected --branch to be set');

if (!argv['skip-clone']) {
  await cloneWcagActRules(config);
}

await createOrCheckoutBranch(config, argv.branch);
await archiveRule(config, argv.ruleId);
await generateApprovedRulePages(config, argv.ruleId);
await updateRuleVersionsYaml(config, argv.ruleId, argv.changes);
await approveTestCaseJson(config, argv.ruleId);
await commitAndPush(config, `Set ${argv.ruleId} to approved`);

async function archiveRule({ tmpDir }, ruleId) {
  const ruleDir = `${tmpDir}content/rules/${ruleId}`;
  if (!fs.existsSync(`${ruleDir}/index.md`)) {
    return;
  }
  const ruleText = fs.readFileSync(`${ruleDir}/index.md`, 'utf8');
  const lastModified = ruleText.match(/last_modified:\s+(.*)/)?.[1]
  assert(lastModified, `Unable to find last_modified data in ${ruleId}/index.md`);

  const date = moment(lastModified, w3cDataFormat).format(isoDateFormat)
  await $`mv ${ruleDir}/index.md ${ruleDir}/${date}.md`
}

async function generateApprovedRulePages({ tmpDir, rulesDir, glossaryDir, testAssetsDir }, ruleId) {
  await $`node ./node_modules/act-tools/dist/cli/rule-transform.js \
  --rulesDir "${rulesDir}" \
  --glossaryDir "${glossaryDir}" \
  --testAssetsDir "${testAssetsDir}" \
  --outDir "${tmpDir}" \
  --ruleIds "${ruleId}"
  `;
}

async function updateRuleVersionsYaml({ tmpDir }, ruleId, changes) {
  if (typeof changes === 'string' && changes.length > 0) {
    changes = [changes]
  } else if (Array.isArray(changes)) {
    changes = changes.filter(change => change.length > 0)
  } else {
    changes = []
  }

  const ruleVersionPath = `${tmpDir}_data/wcag-act-rules/rule-versions.yml`;
  let ruleVersionsStr = fs.readFileSync(ruleVersionPath, 'utf8');
  const ruleVersions = YAML.parse(ruleVersionsStr);

  if (ruleVersions[ruleId] === undefined) {
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
  } else {
    ruleVersions[ruleId].forEach(entry => {
      if (entry.file === 'index.md') {
        entry.file = entry.isoDate + '.md';
        entry.url = `${ruleId}/${entry.isoDate}/`;
      }
    })
    // Insert the new index after 'proposed.md'
    ruleVersions[ruleId].splice(1, 0, {
      file: 'index.md',
      url: `${ruleId}/`,
      w3cDate: moment().format(w3cDataFormat),
      isoDate: moment().format(isoDateFormat),
      changes
    });
  }
  
  ruleVersionsStr = YAML.stringify(ruleVersions);
  fs.writeFileSync(ruleVersionPath, ruleVersionsStr, 'utf8');
  console.log(`Added ${ruleId} to rule-versions.yml`);
}

async function approveTestCaseJson({ tmpDir, rulesDir, testAssetsDir }, ruleId) {
  const rulePages = getRulePages(rulesDir, testAssetsDir, [ruleId]);
  const ruleTestCases = extractTestCases(rulePages[0]).map(({ metadata }) => {
    metadata.approved = true;
    return metadata;
  })

  const testCaseJsonPath = `${tmpDir}content-assets/wcag-act-rules/testcases.json`;
  const testCaseJson = JSON.parse(fs.readFileSync(testCaseJsonPath, 'utf8'));
  const testCases = testCaseJson.testcases.filter(testCase => testCase.ruleId !== ruleId);
  testCaseJson.testcases = [
    ...ruleTestCases,
    ...testCases
  ]
  console.log(`Set ${testCases.length} test cases of rule ${ruleId} to be approved in testcases.json`);
  fs.writeFileSync(testCaseJsonPath, JSON.stringify(testCaseJson, null, 2), 'utf8');
}

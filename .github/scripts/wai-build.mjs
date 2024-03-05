#!/usr/bin/env zx
import 'zx/globals';
import { config, cloneWcagActRules, commitAndPush } from './commons.mjs'

await cloneWcagActRules(config);
await generateProposedRulePages(config);
await generateTestCases(config);
const commitMessage = (await $`git log -1 --pretty=%B`).stdout;
await commitAndPush(config, commitMessage);

async function generateProposedRulePages({ tmpDir, rulesDir, glossaryDir, testAssetsDir }) {
  await $`node ./node_modules/act-tools/dist/cli/rule-transform.js \
  --rulesDir "${rulesDir}" \
  --glossaryDir "${glossaryDir}" \
  --testAssetsDir "${testAssetsDir}" \
  --outDir "${tmpDir}" \
  --proposed
  `;
}

async function generateTestCases({ tmpDir, rulesDir, testAssetsDir }) {
  await $`node ./node_modules/act-tools/dist/cli/build-examples.js \
    --rulesDir "${rulesDir}" \
    --testAssetsDir "${testAssetsDir}" \
    --outDir "${tmpDir}" \
    --proposed
  `;
}

#!/usr/bin/env zx
import 'zx/globals';
import { config} from './commons.mjs'

await generateProposedRulePages(config);
await generateTestCases(config);

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

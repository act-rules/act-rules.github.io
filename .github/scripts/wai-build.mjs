#!/usr/bin/env zx
import 'zx/globals';
import { config, cloneWcagActRules } from './commons.mjs'

const ACT_TOOLS_PATH = process.env.ACT_TOOLS_PATH || './node_modules/act-tools';

await cloneWcagActRules(config);
await generateProposedRulePages(config);
await generateexamples(config);
await generateGlossaryPage({ ...config, wcagActRulesDir: config.tmpDir });

async function generateGlossaryPage({ tmpDir, rulesDir, glossaryDir, testAssetsDir }) {
  await $`node ${ACT_TOOLS_PATH}/dist/cli/generate-glossary.js \
    --rulesDir "${rulesDir}" \
    --glossaryDir "${glossaryDir}" \
    --testAssetsDir "${testAssetsDir}" \
    --outDir "${tmpDir}"
  `;
}

async function generateProposedRulePages({ tmpDir, rulesDir, glossaryDir, testAssetsDir }) {
  await $`node ${ACT_TOOLS_PATH}/dist/cli/rule-transform.js \
    --rulesDir "${rulesDir}" \
    --glossaryDir "${glossaryDir}" \
    --testAssetsDir "${testAssetsDir}" \
    --outDir "${tmpDir}" \
    --proposed
  `;
}

async function generateexamples({ tmpDir, rulesDir, testAssetsDir }) {
  await $`node ${ACT_TOOLS_PATH}/dist/cli/build-examples.js \
    --rulesDir "${rulesDir}" \
    --testAssetsDir "${testAssetsDir}" \
    --outDir "${tmpDir}" \
    --proposed
  `;
}

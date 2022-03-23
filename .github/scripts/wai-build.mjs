#!/usr/bin/env zx
import 'zx/globals';

const config = {
  tmpDir: `./wcag-act-rules-tmp/`,
  rulesDir: `./_rules/`,
  glossaryDir: `./pages/glossary/`,
  testAssetsDir: `./test-assets/`,
}

await cloneWcagActRules(config);
await generateProposedRulePages(config);
await generateTestCases(config);
await commitAndPush(config);


async function cloneWcagActRules({ tmpDir }) {
  await $`rm -rf ${tmpDir}`;
  await $`git clone \
    --single-branch \
    --branch master \
    https://github.com/w3c/wcag-act-rules.git ${tmpDir} \
    --depth 1
  `;
}

async function generateProposedRulePages({ tmpDir, rulesDir, glossaryDir }) {
  await $`node ./node_modules/act-tools/dist/cli/rule-transform.js \
  --rulesDir "${rulesDir}" \
  --glossaryDir "${glossaryDir}" \
  --outDir "${tmpDir}" \
  --proposed \
  --matrix
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

async function commitAndPush({ tmpDir }) {
  const commitMessage = (await $`git log -1 --pretty=%B`).stdout
  cd(tmpDir);
  await $`git add .`;
  await $`git commit -m ${commitMessage}`;
  await $`git push`;
  cd(`../`);
}

#!/usr/bin/env zx
import 'zx/globals';

const tmpDir = `wcag-act-rules-tmp`;
const rulesDir = `./_rules/`;
const glossaryDir = `./pages/glossary/`;
const testAssetsDir = `./test-assets/`;

await cloneWcagActRules({ tmpDir });
await generateProposedRulePages({
  tmpDir, rulesDir, glossaryDir
});;
await generateTestCases({
  tmpDir, rulesDir, testAssetsDir
});

await commitAndPush({ tmpDir });


async function cloneWcagActRules ({ tmpDir }) {
  await $`rm -rf ./${tmpDir}`;
  await $`git clone \
    --single-branch \
    --branch automation-test \
    git@github.com:w3c/wcag-act-rules.git ${tmpDir} \
    --depth 1
  `;
}

async function generateProposedRulePages({ tmpDir, rulesDir, glossaryDir }) {
  await $`node ./node_modules/act-tools/dist/cli/rule-transform.js \
  --rulesDir "${rulesDir}" \
  --glossaryDir "${glossaryDir}" \
  --outDir "./${tmpDir}/" \
  --proposed \
  --matrix
  `;
}

async function generateTestCases({ tmpDir, rulesDir, testAssetsDir }) {
  await $`node ./node_modules/act-tools/dist/cli/build-examples.js \
    --rulesDir "${rulesDir}" \
    --testAssetsDir "${testAssetsDir}" \
    --outDir "./${tmpDir}/"
  `;
}

async function commitAndPush({ tmpDir }) {
  const commitMessage = (await $`git log -1 --pretty=%B`).stdout
  cd(`./${tmpDir}`);
  await $`git add .`;
  await $`git commit -m ${commitMessage}`;
  await $`git push`;
  cd(`../`);
}

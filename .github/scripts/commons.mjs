import 'zx/globals';
import assert from 'assert';

export const config = {
  tmpDir: `./wcag-act-rules-tmp/`,
  rulesDir: `./_rules/`,
  glossaryDir: `./pages/glossary/`,
  testAssetsDir: `./test-assets/`,
}

export async function cloneWcagActRules({ tmpDir }) {
  await $`rm -rf ${tmpDir}`;
  await $`git clone \
    --no-single-branch \
    --branch main \
    https://github.com/w3c/wcag-act-rules.git ${tmpDir} \
    --depth 1
  `;
}

export async function createOrCheckoutBranch({ tmpDir }, branchName) {
  assert(branchName, 'branchName must be defined');
  cd(tmpDir);
  try {
    await $`git checkout ${branchName}`;
  } catch {
    await $`git checkout -b ${branchName}`;
  } finally {
    cd(`../`);
  }
}

export async function commitAndPush({ tmpDir }, commitMessage) {
  cd(tmpDir);
  try {
    const diff = (await $`git diff --name-status`).stdout;
    if (diff.trim().length === 0) {
      console.log('No changes detected, skipping git commit')
      return;
    }
    await $`git add .`;
    await $`git commit -m ${commitMessage}`;
    try {
      await $`git push`;
    } catch {
      const branchName = (await $`git branch --show-current`);
      await $`git push --set-upstream origin ${branchName}`;
    }
  } finally {
    cd(`../`);
  }
}

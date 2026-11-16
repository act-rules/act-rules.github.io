# Reference: publish one ACT rule to WAI

## Inputs

### Checkouts

Sibling directories next to this repository. Do not hardcode a home directory.

- WAI clone: `../wcag-act-rules`, a clone of `https://github.com/w3c/wcag-act-rules`. If that directory is missing, ask for the path. Stop if the user has none.
- Board snapshot (optional): `../act-board/data/snapshot.json`. If that file is missing, ask once for a snapshot path. If the user has none, use the fallback below.

Fetch, then read blobs from `origin/main`. Do not read the WAI working tree. Do not read or write `./wcag-act-rules-tmp/` while drafting. A normal `approve-rule` run deletes that directory.

```bash
git -C ../wcag-act-rules fetch origin main
git -C ../wcag-act-rules show origin/main:content/rules/{ruleId}/proposed.md
git -C ../wcag-act-rules show origin/main:content/rules/{ruleId}/index.md
git -C ../wcag-act-rules show origin/main:_data/wcag-act-rules/rule-versions.yml
```

Use the path from this section in place of `../wcag-act-rules`.

`proposed.md` on `origin/main` is a precondition, not the changelog source. If that `git show` fails, stop. `approve-rule` reads `content/rules/{ruleId}/proposed.md` in its fresh clone and throws when `last_modified` is missing, before `rule-transform` runs. A missing `index.md` blob is a different case: first-time approval, covered under Changelog diff.

### Board snapshot (optional)

The file is a JSON array of classifier rows. It may be missing or `[]` on a given machine. An empty file is a fallback case, not a blocker.

When a row exists for this `ruleId`, use these fields (names match `act-tools` `src/approval-report/types.ts`):

| Field                   | Use                                                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `status`                | Must be `Approved, unpublished changes` or `Proposed, reviewable`. Any other status: stop and report it.                 |
| `approvalIsoDate`       | ISO date of the approved `index.md` snapshot, or `null` when never approved.                                             |
| `waiApproved`           | Whether `rule-versions.yml` has an `index.md` version.                                                                   |
| `changes[]`             | Raw commits since approval. Each entry has `subject`, `touchedRule`, `touchedDefinitionKeys`, plus `hash` and `dateIso`. |
| `ruleCommitCount`       | Post-approval commits that touched the rule file.                                                                        |
| `definitionCommitCount` | Post-approval commits that touched glossary paths and not the rule file.                                                 |
| `name`, `filename`      | Cross-check against `_rules/`.                                                                                           |

`changes[].subject` is raw material for understanding the history. Write new prose for `changes:`. Copying subjects into the list is out of scope for this skill.

If the snapshot row and `origin/main` disagree (for example status `Proposed, reviewable` while an `index.md` version exists, or `Approved, unpublished changes` with no `index.md` version), stop and report the mismatch.

### Fallback when the snapshot has no row

Read `origin/main:_data/wcag-act-rules/rule-versions.yml` from the WAI clone.

- A version with `file: index.md` for this id means re-approval.
- No such version means first-time approval.

Say so in the confirm message. Board status, blockers, implementation completeness, and an in-review WAI pull request were not checked. User acceptance of the draft covers that gap.

### Changelog diff

`approve-rule` publishes a fresh `rule-transform` of the current `_rules/` file onto a new clone of `main`. Draft from that pair, not from `proposed.md` in a working tree.

- Community Group rule: `_rules/*-{ruleId}.md` in this repo
- Approved baseline: `origin/main:content/rules/{ruleId}/index.md` in the WAI clone
- Version list: `origin/main:_data/wcag-act-rules/rule-versions.yml` in the WAI clone

If `index.md` is absent on `origin/main`, this is first-time approval. There is no approved page, so omit `changes:`. `proposed.md` must still exist on `origin/main`.

For a re-approval, render the approved page with the same arguments as `approve-rule` (no `--proposed`). Use a scratch directory, not `./wcag-act-rules-tmp/` and not the WAI clone:

```bash
mkdir -p /tmp/act-rule-render-{ruleId}
node ./node_modules/act-tools/dist/cli/rule-transform.js \
  --rulesDir ./_rules/ \
  --glossaryDir ./pages/glossary/ \
  --testAssetsDir ./test-assets/ \
  --outDir /tmp/act-rule-render-{ruleId} \
  --ruleIds {ruleId}
git -C ../wcag-act-rules show origin/main:content/rules/{ruleId}/index.md \
  > /tmp/act-rule-render-{ruleId}/approved-index.md
diff -u \
  /tmp/act-rule-render-{ruleId}/approved-index.md \
  /tmp/act-rule-render-{ruleId}/content/rules/{ruleId}/index.md
```

Run this from the `act-rules.github.io` root. If `rule-transform.js` is missing, stop and report it. The render writes `content/rules/{ruleId}/index.md` under the scratch directory. That diff is the changelog source.

Glossary text used by the rule is inlined under `## Glossary` in both `index.md` files. A definition-only commit (`touchedRule: false`, `touchedDefinitionKeys` set) becomes a bullet only when that inlined text, or a rule section that depends on it, changed. Phrase the bullet as the effect on **this** rule, with the glossary term in double quotes. Community Group glossary sources, when needed for context, are `pages/glossary/<key>.md` in this repo.

Ignore in the changelog:

- `last_modified` and other date-only frontmatter
- formatting-only hunks
- subjects that do not appear in the page diff

Collapse many commits that produce one user-visible effect into one bullet.

## Editorial versus substantive

Same split as `pages/design/process.md` (Call for Review), also summarized in the `review-act-rule` skill:

**Substantive** changes can change outcomes: accessibility requirements, Applicability, Expectations, or Passed / Failed / Inapplicable examples.

**Editorial** changes keep outcomes the same: wording that does not change meaning, and Assumptions, Background, or Accessibility Support when outcomes stay the same.

Keep both in the YAML list when a reader of the rule page should see them. Skip formatter noise. In the confirm message, label each bullet substantive or editorial. The YAML strings stay unlabeled prose, matching `rule-versions.yml`. The AGWG paragraph names the two classes in prose.

## Changelog voice

Short, user-facing, typically 2–6 bullets. One bullet is enough when the page diff is one effect. Above six, collapse further.

Name the effect on the rule. Published patterns (see `examples.md`):

- `Account for …` / `Add assumption …` / `Ignore …` / `Update to reference …` / `Let …` / `Editorial clarifications …`
- Definition updates quote the term: `Account for focus redirects in "focusable" definition`

Re-approval requires a non-empty list of non-empty strings. First-time approval omits the list. The script drops `changes` when there is no current `index.md`, so passing bullets on a first approval would not publish them. Omit the flags.

## AGWG pull-request paragraph

One paragraph. The script commit message stays `Set {ruleId} to approved`. This paragraph is the opening of the draft pull request body. The `## Changes` and `## Preview` sections are added after the branch is pushed, in Draft pull request.

Re-approval:

> This pull request updates the approved version of rule {ruleId} ({name}). Substantive changes {effects}. Editorial changes {effects}.

If every bullet is one class, mention that class only.

First-time:

> This pull request approves rule {ruleId} ({name}) for the first time. There is no previous approved snapshot, so the version list has no changelog.

## Confirm gate

Stop after presenting the draft. Do not create the changes file, check out a branch, or run the script until the user accepts.

Use this heading: `Publish draft for {ruleId} — confirmation required`

Include:

- Mode: `first-time approval` or `re-approval`
- Status source: `snapshot row`, or `inferred` when the snapshot is empty or has no row for this id
- Status value, or `not checked` when inferred
- Rule name and `_rules/{filename}`
- Approved snapshot: `approvalIsoDate`, or `none`
- Commits since approval: `ruleCommitCount` on the rule file and `definitionCommitCount` definition-only, or `unknown`
- A short summary of what the rendered `index.md` changes relative to `index.md` on `origin/main`. For first-time approval, say there is no approved page.
- The YAML `changes:` list. For first-time approval, write `omitted — first-time approval` and do not include a list.
- Under the list, each bullet labeled substantive or editorial
- The one-paragraph AGWG body
- The pull request title from Draft pull request. The script commit message stays `Set {ruleId} to approved`.
- The exact command for this mode (re-approval includes `--changesFile` or repeated `--change`; first-time includes neither)
- This sentence: the command commits in `./wcag-act-rules-tmp/` and pushes branch `approve-{ruleId}` to `w3c/wcag-act-rules`. After that push succeeds, open one draft pull request on that branch.
- A closing line that you will not run the script until the user accepts this text or pastes a replacement.

A reply that supplies replacement bullets or a replacement paragraph accepts **that** text. If the user asks for a change without the new wording, revise the draft and stop again.

On acceptance of a re-approval, write `/tmp/{ruleId}-changes.yml` as a YAML list of strings (a sequence, not a mapping) using the accepted bullets, then run the command. On acceptance of a first-time approval, run without `--change` and without `--changesFile`.

## Run approve-rule

From the `act-rules.github.io` repository root, after the confirm gate.

### Script precondition

Changelog flags live on `origin/develop` ([PR #2453](https://github.com/act-rules/act-rules.github.io/pull/2453)). Before invoking, confirm the working tree has them:

```bash
grep -n parseChanges .github/scripts/update-rule-versions.mjs
```

If that finds nothing, stop. The older script rejects any rule already present in `rule-versions.yml` and ignores `--change`. Do not patch the scripts as part of this skill. Tell the user the checkout is behind `origin/develop`.

The script calls `node ./node_modules/act-tools/dist/cli/rule-transform.js`. If that file is missing, stop and report it.

### What the script does

`approve-rule.mjs` (with `parseChanges` / `updateRuleVersions` from `update-rule-versions.mjs`):

1. Unless `--skip-clone`: deletes `./wcag-act-rules-tmp/` and shallow-clones `https://github.com/w3c/wcag-act-rules.git` branch `main` into it.
2. Checks out `--branch`, or creates it.
3. Reads `content/rules/{ruleId}/proposed.md` and requires `last_modified`. On re-approval, archives the current `index.md` to `{previousIsoDate}.md` and builds the new `index.md` version with `changes`. An empty list throws `Re-approval of {ruleId} requires at least one changelog entry`. On first approval, builds `proposed.md` and `index.md` versions with no `changes` key. The version object stays in memory.
4. Runs `rule-transform` for this `ruleId` (approved pages), which overwrites `index.md` after the archive step.
5. Writes `_data/wcag-act-rules/rule-versions.yml`.
6. Sets `approved: true` on this rule's entries in `examples.json`.
7. Commits `Set {ruleId} to approved` and pushes the branch. If the diff is empty, `commitAndPush` returns without committing or pushing.

`--skip-clone` still uses `./wcag-act-rules-tmp/` and still pushes. Use it only when that directory is already a clone the user is willing to commit and push. Drafting does not read that directory. The script has no flag to target the sibling WAI clone.

Default branch name: `approve-{ruleId}`, unless the user names another branch.

### Passing the changelog

`parseChanges` accepts either or both:

- repeated `--change "bullet"` (one flag becomes a string; two or more become a list)
- `--changesFile path` whose file is a YAML list of strings

File entries come first, then CLI entries. Every entry must be a non-empty string after trim.

Re-approval, file. This is the default command. It clones `main` into `./wcag-act-rules-tmp/`:

```bash
npx zx .github/scripts/approve-rule.mjs \
  --ruleId abcd12 \
  --branch approve-abcd12 \
  --changesFile /tmp/abcd12-changes.yml
```

`/tmp/abcd12-changes.yml`:

```yaml
- Account for whitespace in the applicability
- Add assumption about text containing human language
```

Re-approval, flags:

```bash
npx zx .github/scripts/approve-rule.mjs \
  --ruleId abcd12 \
  --branch approve-abcd12 \
  --change "Account for whitespace in the applicability" \
  --change "Add assumption about text containing human language"
```

First-time:

```bash
npx zx .github/scripts/approve-rule.mjs \
  --ruleId abcd12 \
  --branch approve-abcd12
```

`--skip-clone` is a separate case. It still commits and pushes `./wcag-act-rules-tmp/`. Use it only when that directory is already the clone the user is willing to push:

```bash
npx zx .github/scripts/approve-rule.mjs \
  --ruleId abcd12 \
  --branch approve-abcd12 \
  --skip-clone \
  --changesFile /tmp/abcd12-changes.yml
```

### After the script

If the script exits non-zero, or `commitAndPush` skipped the push because the diff was empty, stop. Report the branch state and the error. Do not open a pull request.

When the push succeeds, continue to Draft pull request.

## Draft pull request

One draft pull request on `w3c/wcag-act-rules`, base `main`, head `approve-{ruleId}` (or the branch the user named).

The script commit message stays `Set {ruleId} to approved`. The pull request title is separate, so the list shows the rule name and whether this is a re-approval:

- Re-approval: `Update approved rule: {name} ({ruleId})`
- First approval: `Approve rule: {name} ({ruleId})`

`{name}` is the frontmatter `name`. Example: `Update approved rule: Orientation of the page is not restricted using CSS transforms (b33eff)`.

If that head already has an open pull request, edit its body. Do not open another.

The Netlify preview URL includes the pull request number, so create the draft first, then set the body:

```bash
gh pr create --repo w3c/wcag-act-rules --base main --head approve-abcd12 --draft \
  --title "Update approved rule: Example rule name (abcd12)" \
  --body "Opening draft for abcd12."
```

Take the number from the URL `gh pr create` prints, then `gh pr edit` that number with the body below.

### Body

Start with the accepted paragraph. Then:

```markdown
## Changes

- Account for whitespace in the applicability
- Add assumption about text containing human language

## Preview

- [Updated rule (preview)](https://deploy-preview-999--wai-wcag-act-rules.netlify.app/standards-guidelines/act/rules/abcd12/)
- [Current rule](https://www.w3.org/WAI/standards-guidelines/act/rules/abcd12/)
- [Review the difference](https://services.w3.org/htmldiff?doc1=https%3A%2F%2Fwww.w3.org%2FWAI%2Fstandards-guidelines%2Fact%2Frules%2Fabcd12%2F&doc2=https%3A%2F%2Fdeploy-preview-999--wai-wcag-act-rules.netlify.app%2Fstandards-guidelines%2Fact%2Frules%2Fabcd12%2F)
```

Use the accepted changelog bullets under `## Changes`. For a first-time approval, write `No changelog. This is the first approval.` instead of a bullet list.

`## Preview` links, with `{n}` the pull request number and `{ruleId}` the id:

- Updated rule (preview): `https://deploy-preview-{n}--wai-wcag-act-rules.netlify.app/standards-guidelines/act/rules/{ruleId}/`
- Current rule: `https://www.w3.org/WAI/standards-guidelines/act/rules/{ruleId}/`
- Review the difference: `https://services.w3.org/htmldiff?doc1={current}&doc2={preview}` where `{current}` and `{preview}` are the two URLs, percent-encoded. `doc1` is the published page. `doc2` is the Netlify preview.

For a first-time approval there is no published page. Include only Updated rule (preview). Omit Current rule and Review the difference.

Report the pull request URL when the body is set. Weekly board sync must not call this skill or this script. [act-tools#67](https://github.com/act-rules/act-tools/issues/67) is the later `workflow_dispatch` path. It does not replace this draft pull request.

## Out of scope

- Weekly or on-demand act-board sync
- More than one `ruleId` in a run
- Opening more than one pull request, or opening a pull request before the branch is on `origin`
- Filling `changes:` with classifier subjects, `git log` subjects, or formatter / `last_modified` noise
- Depending on `workflow_dispatch` for the changelog (`approve-rule.yml` passes only `ruleId` and `branch` today)

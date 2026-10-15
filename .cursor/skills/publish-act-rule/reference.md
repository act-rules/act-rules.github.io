# Reference: publish one ACT rule to WAI

## Inputs

### Board snapshot (optional)

Path: `/Users/wilcofiers/Projects/act-board/data/snapshot.json`

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

If the snapshot row and the files disagree (for example status `Proposed, reviewable` while an `index.md` version exists, or `Approved, unpublished changes` with no `index.md` version), stop and report the mismatch.

### Fallback when the snapshot has no row

Read `/Users/wilcofiers/Projects/wcag-act-rules/_data/wcag-act-rules/rule-versions.yml`.

- A version with `file: index.md` for this id means re-approval.
- No such version means first-time approval.

Say so in the confirm message. Board status, blockers, implementation completeness, and an in-review WAI pull request were not checked. User acceptance of the draft covers that gap.

### Pages to diff

Draft from the persistent clone, not from the script's temporary clone:

- Community Group rule: `act-rules.github.io/_rules/*-{ruleId}.md`
- WAI proposed page: `/Users/wilcofiers/Projects/wcag-act-rules/content/rules/{ruleId}/proposed.md`
- WAI approved page: `/Users/wilcofiers/Projects/wcag-act-rules/content/rules/{ruleId}/index.md`
- Version list: `/Users/wilcofiers/Projects/wcag-act-rules/_data/wcag-act-rules/rule-versions.yml`

For a re-approval:

```bash
diff -u \
  /Users/wilcofiers/Projects/wcag-act-rules/content/rules/{ruleId}/index.md \
  /Users/wilcofiers/Projects/wcag-act-rules/content/rules/{ruleId}/proposed.md
```

Glossary text used by the rule is inlined in those pages under `## Glossary`. A definition-only commit (`touchedRule: false`, `touchedDefinitionKeys` set) becomes a bullet only when that inlined text, or a rule section that depends on it, changed. Phrase the bullet as the effect on **this** rule, with the glossary term in double quotes. Community Group glossary sources, when needed for context, are `pages/glossary/<key>.md` in `act-rules.github.io`.

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

One paragraph. The script commit message stays `Set {ruleId} to approved`. This paragraph is for the AGWG pull request, which this skill does not open.

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
- A short summary of what `proposed.md` changes relative to `index.md`. For first-time approval, say there is no approved page.
- The YAML `changes:` list. For first-time approval, write `omitted — first-time approval` and do not include a list.
- Under the list, each bullet labeled substantive or editorial
- The one-paragraph AGWG body
- The exact command for this mode (re-approval includes `--changesFile` or repeated `--change`; first-time includes neither)
- This sentence: the command commits in `./wcag-act-rules-tmp/` and pushes branch `approve-{ruleId}` to `w3c/wcag-act-rules`. It does not open a pull request.
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
3. Runs `rule-transform` for this `ruleId` (approved pages).
4. Updates `_data/wcag-act-rules/rule-versions.yml`.
5. On re-approval, archives the previous `index.md` to `{previousIsoDate}.md` and sets `changes` on the new `index.md` version. An empty list throws `Re-approval of {ruleId} requires at least one changelog entry`.
6. On first approval, writes `proposed.md` and `index.md` versions with no `changes` key.
7. Sets `approved: true` on this rule's entries in `examples.json`.
8. Commits `Set {ruleId} to approved` and pushes the branch.

`--skip-clone` still uses `./wcag-act-rules-tmp/` and still pushes. Use it only when that directory is already a clone the user is willing to commit and push. Drafting reads `/Users/wilcofiers/Projects/wcag-act-rules`. The script has no flag to target that clone.

Default branch name: `approve-{ruleId}`, unless the user names another branch.

### Passing the changelog

`parseChanges` accepts either or both:

- repeated `--change "bullet"` (one flag becomes a string; two or more become a list)
- `--changesFile path` whose file is a YAML list of strings

File entries come first, then CLI entries. Every entry must be a non-empty string after trim.

Re-approval, file:

```bash
npx zx .github/scripts/approve-rule.mjs \
  --ruleId abcd12 \
  --branch approve-abcd12 \
  --skip-clone \
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

Omit `--skip-clone` unless `./wcag-act-rules-tmp/` is already the intended clone. The examples above that include `--skip-clone` assume that directory exists.

### After the script

Report the branch, the commit result, and the confirmed paragraph. Do not run `gh pr create`. Opening the single AGWG pull request is [act-tools#67](https://github.com/act-rules/act-tools/issues/67). Weekly board sync must not call this skill or this script.

## Out of scope

- Weekly or on-demand act-board sync
- More than one `ruleId` in a run
- Opening many pull requests, or opening the AGWG pull request from this skill
- Filling `changes:` with classifier subjects, `git log` subjects, or formatter / `last_modified` noise
- Depending on `workflow_dispatch` for the changelog (`approve-rule.yml` passes only `ruleId` and `branch` today)

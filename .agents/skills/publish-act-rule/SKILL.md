---
name: publish-act-rule
description: >-
  Drafts the WAI changelog and an AGWG pull-request body for a single ACT
  rule, runs approve-rule after the user confirms, then opens one draft pull
  request. Use when the user asks to approve a rule, publish a rule to WAI or
  AGWG, draft a WAI changelog, or re-approve a rule with unpublished changes.
---

# Publish one ACT rule to WAI

One `ruleId` per run. The rule is either **Approved, unpublished changes** (re-approval) or first-time **Proposed, reviewable**.

## Out of scope

Weekly board sync, publishing more than one rule, opening a batch of AGWG pull requests, and writing `changes:` from git commit subjects alone. `workflow_dispatch` in `.github/workflows/approve-rule.yml` does not accept a changelog yet ([act-tools#67](https://github.com/act-rules/act-tools/issues/67)). After confirmation, run the local script. Issue #67 can replace that local run later.

## Workflow

1. **Resolve the rule.** `ruleId` is six characters. Find `_rules/*-{ruleId}.md` in this repo and read `name` from its frontmatter. If the user names several ids, ask which single rule to publish and stop.

2. **Gather inputs.** Follow `reference.md` (Inputs). Use a sibling `wcag-act-rules` clone and, when present, a sibling act-board snapshot. Read WAI pages from `origin/main`, not from a working tree and not from `./wcag-act-rules-tmp/`. If `snapshot.json` is missing, `[]`, or has no row for this id, infer first-time versus re-approval from `rule-versions.yml` on `origin/main` and say that board status was unavailable.

3. **Read the content diff.** Follow `reference.md` (Changelog diff). Render the current `_rules/` file with `rule-transform` and diff that `index.md` against `index.md` on `origin/main`. That diff is the changelog source. Snapshot `changes[].subject` values are context only. When the diff and a subject disagree, follow the diff. If `proposed.md` is missing on `origin/main`, stop: `approve-rule` reads it for `last_modified` before it generates pages.

4. **Draft.** Re-approval: a YAML list of strings in existing WAI voice (typically 2–6), plus a one-paragraph AGWG body that separates substantive from editorial. First-time (no `file: index.md` version in `rule-versions.yml` on `origin/main`): omit `changes:`; the paragraph states that this is the first approval. Voice and published examples are in `examples.md`.

5. **Stop for confirmation.** Present the draft with the template in `reference.md` (Confirm gate), including the exact command. Wait until the user accepts that text or supplies a replacement. Questions and vague tweaks are not confirmation: revise and stop again. Do not run `approve-rule` before an explicit accept.

6. **Run the script only after confirmation.** First-time: invoke with no `--change` and no `--changesFile`. Re-approval: pass the accepted non-empty list via repeated `--change` and/or `--changesFile`. Refuse an empty list before invoking. Preconditions and the push side effect are in `reference.md` (Run approve-rule).

7. **Open one draft pull request after the branch is on `origin`.** Follow `reference.md` (Draft pull request). If the script did not push, stop and report that. Do not open a second pull request for the same branch.

## Further detail

See `reference.md` for inputs, the confirm template, editorial versus substantive, the CLI contract, and the draft pull request body. See `examples.md` for published `rule-versions.yml` bullets and a worked draft.

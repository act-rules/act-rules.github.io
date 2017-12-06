---
title: Auto-WCAG Rule Design and Review Process
---

## Step 1: Creating the proposal in an Issue

Every rule is designed by a team of two or three people. They do their work in a github issue. This means that every activity is represented by an open issue on Github. The first post of an issue contains the proposal they are working on. In subsequent posts, discussions are held, and as they are resolved, the draft at the top of the issue is updated. Once the group is done with the proposal, a pull request is created, and the issue is closed.

## Step 2: Propose a change in a Pull Request

When a proposal in step 1 is done, a pull request is created to update the rule in `_drafts`. This gives the rest of auto-WCAG the opportunity to respond to the proposal. At this point one of three things can happen:

1. Editorial comments can be resolved immediately by updating the pull request. 

2. For any comments that can't be resolved immediately, a new issue is created. Once the review period of the pull request has passed, the pull request is merged in. The team working on this rule continues working on the new issue that was created, going back to step 1.

3. If no comments come in, the issue can be merged in after the review period. If the authors feel the rule is read for publication, after they merged the PR into draft, they can open a new PR, which must have "FINAL" in the PR name, to move the rule from `_drafts` to `_rules`. This will publish the rule. The rule needs at least **3 approved votes** before it can be merged from people who weren't the editors. If new comments come in, the PR must be closed without merging, and a new issue is created to work on the fix.

## Pruning Issues and PRs

At every auto-WCAG call, inactive issues and PRs are reviewed. If an issue / PR hasn't been updated since the last auto-WCAG call it will be closed. This is to ensure that issues and PRs don't get stale, and so that it's always clear at a glance what is being worked on. Issues closed for this reason are given the `stale` flag, and can be reopened if a new team is interested to work on it.

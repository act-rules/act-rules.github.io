---
title: Contributing
order: 20
---

## Feedback on rules

### Discussing ideas

Rule ideas and definitions (shared terms across rules) that are currently GitHub issues can be anything from just a title to an almost finished rule draft. These Issues will be prefixed with either "Rule:" or possibly "New Rule:".

The top comment on such an issue should hold the most up to date version of the rule idea or algorithm, and underneath there will be a thread of related comments and a history of actions.

Please feel free to add your own comments to these issues.

To start giving such feedback:

- See the [ideas and early drafts that might need input](https://github.com/act-rules/act-rules.github.io/issues)

- Use the [Definition of "Done"](../design/definition-of-done) to guide your review

### Reviewing proposals

Pull requests are rule drafts that are ready for peer review. You can add yourself as a reviewer and follow the rule through iterations. A rule needs three approvals, and if a rule has the label "Reviewer wanted", we need more people to review it. However, even if three people are already reviewing it, we can always use more perspectives on things.

You can add single comments to a pull request and/or do a full review.

**Only approve a rule** if you feel confident (to the best of your knowledge) that this rule is 100% ready to be a published ACT rule. Please also refer to the [Definition of "Done"](../design/definition-of-done).

If you for some reason are not so confident, you can always leave a comment for the things that you have an opinion about, without doing a full review.

To start giving feedback and doing reviews for draft rules:

- See the [draft rules and other issues that need reviews](https://github.com/act-rules/act-rules.github.io/pulls?q=is%3Aopen+is%3Apr+label%3A%22reviewers+wanted%22)
- Use the [Definition of "Done"](../design/definition-of-done) to guide your review

### Correcting published rules

We also welcome any feedback and suggestions for changes to already published rules. The published rules should be as precise as possible, limiting the number of potential false positives and false negatives. For this, it is important to draw on as many tool and methodology implementations and expert opinions as possible.

Feedback and corrections for existing rules can target any of the sections of the rule itself (Applicability, Expectations, Accessibility Support, etc.), as well as the test cases, for example to expand the edge case coverage.

You have several options for correcting existing rules:

- **Open a discussion in an Issue:** If you want to open a discussion, you can [open a new issue on the GitHub repository](https://github.com/act-rules/act-rules.github.io/issues) to discuss the issue with the existing rule.
- **Make the change yourself in a pull request:** If you know exactly what you want changed, you can do the change yourself as a [pull request on GitHub](https://github.com/act-rules/act-rules.github.io/pulls) and submit it for review.

## Rule proposals

### Suggesting an idea

For rule contributors with less GitHub experience, it is often easiest to start the rule design in a [GitHub issue](https://github.com/act-rules/act-rules.github.io/issues). This allows for easy editing and discussions with others, while the rule is taking shape.

### Submitting a draft

If you have a ready rule draft, you can submit it as a [pull request](https://github.com/act-rules/act-rules.github.io/pulls) to go into the [review process](/pages/design/process/). Be sure to use the [rule template](https://act-rules.github.io/pages/design/rule-template/) when submitting new rules.

Before contributing a new rule, we recommend you check its validity with several experienced accessibility auditors first. This helps you identify potential stumbling blocks early in the rule design.

## Using GitHub

GitHub has excellent documentation. If you are new to GitHub, please see their documentation on how to [sign up](https://help.github.com/en/github/getting-started-with-github/signing-up-for-github), [navigate](https://help.github.com/en/github/managing-files-in-a-repository/navigating-code-on-github), [edit files](https://help.github.com/en/github/managing-files-in-a-repository/editing-files-in-another-users-repository) and [review pull requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests). In addition to official GitHub documentation, there are a lot of excellent articles and videos on how to use GitHub.

For details, see the [GitHub Guidelines for ACT-Rules](https://github.com/act-rules/act-rules.github.io/blob/develop/github-guidelines.md).

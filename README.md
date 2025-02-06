# ACT-Rules Community repository

The ACT-Rules Community repository is where the ACT-Rules community group maintains the rules they designed for (semi-)automated accessibility testing. Within the rules directory you will find all the rules recommended by the ACT-Rules community group for implementation in automated test tools.

Visit the [ACT-Rules Rules community website](https://act-rules.github.io/) for the latest rules and drafts.

## Related W3C Activities

The ACT-Rules Community Group is the primary contributor of rules to the Accessibility Conformance Testing (ACT) Taskforce for the W3C. The ACT Taskforce is currently developing the standard around which rules can be created, and is planning to put together a suite of rules on how WCAG 2 (and beyond) should be tested.

For more information, see [ACT Overview - What is ACT](https://www.w3.org/WAI/GL/task-forces/conformance-testing/wiki/ACT_Overview_-_What_is_ACT).

## Write rules, not tools

An ACT rule is a unambiguous description of what the results of accessibility test tools and methodologies be when running a conformance test for the [Web Content Accessibility Guidelines][wcag22]. The rules are written without a specific implementation in mind. The goal is not to create an accessibility test tool. Instead we aim to harmonize between existing tools, and improve their transparency and the overall quality of their results.

If you want to know more about us, visit our website at: [www.w3.org/community/act-r][act-r].

## Implementing ACT Rules

Anyone developing their own accessibility testing tool or methodology is free to based this on the ACT-R Community rules. We encourage you to document any deviations from those rules if you do so, and make these changes known to your users.

## Contribute

Contributing is open to anyone. We welcome any pull requests for changes. We ask that you make changes to pull requests **only for drafts**. Before contributing new rules, we recommend you checked their validity with several experienced accessibility auditors first. This helps you identify potential stumbling blocks early in their design.

ACT-R has conference calls every 4 weeks. If you are interested in becoming an active contributor or reviewer, we ask that you join the ACT-R community group through the W3C Website. This requires setting up a W3C account, may require approval by the organization you work for if they are a W3C member.

**[Join the ACT-Rules community group now!](https://www.w3.org/community/wp-login.php?redirect_to=%2Fcommunity%2Fact-r%2Fjoin)** or visit [w3.org/community/act-r/][act-r] for more information.

For info on how to use this GitHub repository, see the [ACT-Rules GitHub Guidelines](github-guidelines.md).

## GitHub Automation

This repository automatically pushes changes to rules to the [w3c/wcag-act-rules](https://github.com/w3c/wcag-act-rules/) repository. There is an "Approve rule" action available which can be triggered manually by an ACT Task Force facilitator, which will set a proposed rule to "approved".

[wcag22]: https://www.w3.org/TR/WCAG22/
[act-r]: https://www.w3.org/community/act-r/

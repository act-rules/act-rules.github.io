# Auto-WCAG Rules repository

The Auto-WCAG Rules repository is where the Auto-WCAG community group maintains the rules they designed for (semi-)automated accessibility testing. Within the rules directory you will find all the rules recommended by the Auto-WCAG community group for implementation in automated test tools.

Visit the [Auto-WCAG Rules website](https://auto-wcag.github.io/auto-wcag/) for the latest rules and drafts.

## Related W3C Activities

The Auto-WCAG Community Group is the primary contributor of rules to the Accessibility Conformance Testing (ACT) Taskforce for the W3C. The ACT Taskforce is currently developing the standard around which rules can be created, and is planning to put together a suite of rules on how WCAG 2 (and beyond) should be tested.

For more information, see [ACT Overview - What is ACT](https://www.w3.org/WAI/GL/task-forces/conformance-testing/wiki/ACT_Overview_-_What_is_ACT).

## Write rules, not tools

An Auto-WCAG rule is a step by step description of how an accessibility test tool should run a certain conformance test for the [Web Content Accessibility Guidelines][WCAG20]. The rules are written without a specific implementation in mind. The goal is not to create an accessibility test tool. Instead we aim to harmonize between existing tools, and improve their transparency and the overall quality of their results.

If you want to know more about us, visit our website at: [www.w3.org/community/auto-wcag][Auto-WCAG].

## Implementing Auto-WCAG Rules

Anyone developing their own accessibility testing tool is free to based this on the Auto-WCAG rules. We encourage you to document any deviations from those rules if you do so, and make these changes known to your users. Also take note that the Auto-WCAG Rules come with an aggregation algorithm describing how they all fits together, and require the tool to do some pre and post processing. All of which is described in the [test methodology](https://auto-wcag.github.io/auto-wcag/pages/design/rule-design.html).

## Contribute

Contributing is open to anyone. We welcome any pull requests for changes. We ask that you make changes to pull requests **only for drafts**. Before contributing new rules, we recommend you checked their validity with several experienced accessibility auditors first. This helps you identify potential stumbling blocks early in their design.

Auto-WCAG has conference calls every 4 weeks. If you are interested in becoming an active contributor or reviewer, we ask that you join the Auto-WCAG community group through the W3C Website. This requires setting up a W3C account, may require approval by the organization you work for if they are a W3C member.

**[Join the Auto-WcAG community group now!](https://www.w3.org/community/wp-login.php?redirect_to=%2Fcommunity%2Fauto-wcag%2Fjoin)** or visit [w3.org/community/auto-wcag/][Auto-WCAG] for more information.


[WCAG20]: https://www.w3.org/TR/WCAG20/
[Auto-WCAG]: https://www.w3.org/community/auto-wcag/
---
Title: Test Case Template
---

Each rule requires to have test cases for every possible outcome of that rule. These can be put in `_rule-tests` or in `draft-tests`. Test case pages should use the following format:

```md
---
rule_id: SCx-y-z-name

success_criterion:
- x.y.z
---

<h2>inapplicable</h2>

<div data-outcome="incomplee">
    <!-- HTML code here -->
</div>

<!-- other incomplete examples if needed -->

<h2>step1-pass</h2>

<div data-outcome="passed"
  data-outcome-id="step1-pass">
    <!-- HTML code here -->
</div>

<!-- more test cases -->

<h2>step1-fail</h2>

<div data-outcome="failed"
  data-outcome-id="step1-fail">
    <!-- HTML code here -->
</div>

<h2>step#-pass/fail</h2>

<!-- Add pass / fail / incomplete examples for every step that has them -->
```

---
title: Test Cases
---

The authored rules, comes with several test cases, which are designed for easy consumption by test tools. The test cases are made available regularly & automatically on every successful commit (to the master branch).

 <a class='btn' href='/testcases.json'>
  See All Test Cases
 </a>

A test case for a given rule is represented as shown by the below excerpt, where:

- `url`: is the standalone page containing the test case.
- `expected`: is the expected outcome of the test case, pertaining to the rule.
- `ruleId`: is the unique identifier for the rule.
- `rulePage`: is the page containing a detailed rule description.

```json
 "a11y-testcases": [
    {
      "url": "//auto-wcag.github.io/auto-wcag/testcases/937e33-passed-example-1.html",
      "expected": "passed",
      "ruleId": "937e33",
      "ruleName": "ARIA attribute is valid",
      "rulePage": "//auto-wcag.github.io/auto-wcag/rules/937e33"
    },
    ...
 ]
```

---
title: Test Cases
order: 3
---

The authored rules, comes with several test cases, which are designed for easy consumption by test tools. The test cases are made available regularly at [{{site.data.package.config.testcases.url}}]({{site.data.package.config.testcases.url}}).

A test case for a given rule is represented as shown by the below excerpt, where:
- `url`: is the standalone page containing the test case.
- `expected`: is the expected outcome of the test case, pertaining to the rule.
- `ruleId`: is the unique identifier for the rule.
- `rulePage`: is the page containing a detailed rule description.

```json
 "a11y-testcases": [
    {
      "url": "https://auto-wcag.github.io/auto-wcag/auto-wcag-testcases/assets/SC1-1-1-image-has-name_passed_example_1.html",
      "expected": "passed",
      "ruleId": "SC1-1-1-image-has-name",
      "rulePage": "https://auto-wcag.github.io/auto-wcag/rules/SC1-1-1-image-has-name.html"
    },
    ...
 ]
```


## Available tooling for using Test Cases

The community has authored an open source tool, that demonstrates consumption of the test cases against a test tool. 

Contributions to the `testrunner` tool, and or other tooling of similar nature are welcome. 

Refer [contribution guide]({{ site.url }}/pages/contribute.html).

Tool Name | Tool URL | Language |  Tool Description
---|---|---|---
`testrunner` | [https://github.com/auto-wcag/testrunner](https://github.com/auto-wcag/testrunner) | JavaScript | A [puppeteer](https://github.com/GoogleChrome/puppeteer) based implementation that allows running a configurable test tool against all the above test cases on a per page basis, and returns raw results.
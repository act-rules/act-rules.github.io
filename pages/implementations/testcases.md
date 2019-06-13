---
title: Test Cases
---

All ACT rules include a number of test cases, which are designed for easy consumption by accessibility test tools and test methodologies. Test cases are updated regularly as part of rule writing. All test cases are described in a JSON file:

 <a class='btn' href='/testcases.json'>
  See the Test Cases JSON
 </a>

## Test Case Format

In the `testcases.json` file, test cases are included on the `testcases` array, each with the following properties:

- `testcaseId`: Hash of the test case, changes when the test case is updated
- `url`: Standalone page containing the test case.
- `expected`: Expected outcome of the test case (`passed`, `failed`, or `inapplicable`)
- `ruleId`: Unique identifier for the rule.
- `ruleName`: Title of the rule the test case is for
- `rulePage`: Page containing a detailed rule description.
- `requirementsMapping`: Array of success criteria and other accessibility requirements not satisfied when the rule `failed`

```json
{
  "name": "ACT-Rules Community test cases",
  "license": "https://act-rules.github.io/pages/license/",
  "count": 558,
  "testcases": [
    {
      "testcaseId": "55f3ed0ec0f324514a0d223b737bc1e4c81593c7",
      "url": "https://act-rules.github.io/testcases/5f99a7/55f3ed0ec0f324514a0d223b737bc1e4c81593c7.html",
      "expected": "passed",
      "ruleId": "5f99a7",
      "ruleName": "ARIA attribute is valid",
      "rulePage": "https://act-rules.github.io/rules/5f99a7",
      "requirementsMapping": ["wcag20:4.1.2"]
    }, ... ]
}
```

## Running The Test Cases

To run the test cases, go through each URL run the necessary tests on that page. Tools and test procedures do not need to have a one-to-one mapping to ACT-R rules. While you could run all tests in an implementation on every test case, for efficiency we recommend doing one of the following:

1. Only run tests relevant for the `requirementsMapping` (e.g. for a test case that maps to success criterion 1.1.1, only run tests related to success criterion 1.1.1)

2. Maintain a manual many-to-many mapping of rules in your implementation to ACT-R Rules

Correctness of an implementation is based on the results for test cases. See [implementation mapping](../mapping/) for more information.

## Contribute An Implementation

If you developed an accessibility tool or a testing methodology, and would like to have your implementation included in the ACT-R website, there are two ways you can do so.

1. If you have a tool that can return a data format, you will need to run your tests against the ACT-R test cases and [submit a report](../reporting/).

2. If you have a manual test methodology, where you fill results into some report template or tool, you can [Use the WCAG-EM Report Tool](../wcag-em-tool/) instead to produce implementation reports.

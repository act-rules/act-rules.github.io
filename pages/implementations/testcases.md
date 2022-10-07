---
title: Test Cases
---

All ACT rules include a number of test cases, which are designed for easy consumption by accessibility test tools and test methodologies. Test cases are updated regularly as part of rule writing. All test cases are described in a JSON file:

 <a class='btn' href='https://www.w3.org/WAI/content-assets/wcag-act-rules/testcases.json'>
	See the Test Cases JSON
 </a>

**Note**: HTML test cases are embedded in a small template which adds a `!DOCTYPE`, HTML root node with lang attribute, and head with a title. These are omitted for test cases with an HTML element or a `!DOCTYPE`.

## Test Case Format

In the `testcases.json` file, test cases are included on the `testcases` array, each with the following properties:

- `testcaseId`: Hash of the test case, changes when the test case is updated
- `url`: Standalone page containing the test case.
- `expected`: Expected outcome of the test case (`passed`, `failed`, or `inapplicable`)
- `ruleId`: Unique identifier for the rule.
- `ruleName`: Title of the rule the test case is for
- `rulePage`: Page containing a detailed rule description.
- `ruleAccessibilityRequirements`: Array of success criteria and other accessibility requirements not satisfied when the rule `failed`

```json
{
	"name": "ACT Task Force test cases",
	"website": "https://www.w3.org/WAI/standards-guidelines/act/rules/",
	"license": "https://act-rules.github.io/pages/license/",
	"count": 1132,
	"testcases": [
		{
			"ruleId": "97a4e1",
			"ruleName": "Button has non-empty accessible name",
			"ruleAccessibilityRequirements": {
				"wcag20:4.1.2": {
					"forConformance": true,
					"failed": "not satisfied",
					"passed": "further testing needed",
					"inapplicable": "further testing needed"
				}
			},
			"expected": "passed",
			"testcaseId": "a4cc71b0434f71f4ea0069c409f73e0207dfb403",
			"testcaseTitle": "Passed Example 1",
			"relativePath": "testcases/97a4e1/a4cc71b0434f71f4ea0069c409f73e0207dfb403.html",
			"url": "https://www.w3.org/WAI/content-assets/wcag-act-rules/testcases/97a4e1/a4cc71b0434f71f4ea0069c409f73e0207dfb403.html",
			"rulePage": "https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/proposed/"
		}, ... ]
}
```

## Running The Test Cases

To run the test cases, go through each URL run the necessary tests on that page. Tools and test procedures do not need to have a one-to-one mapping to ACT-R rules. While you could run all tests in an implementation on every test case, for efficiency we recommend doing one of the following:

1. Only run tests relevant for the `ruleAccessibilityRequirements` (e.g. for a test case that maps to success criterion 1.1.1, only run tests related to success criterion 1.1.1)

2. Maintain a manual many-to-many mapping of rules in your implementation to ACT-R Rules

Correctness of an implementation is based on the results for test cases. See [implementation mapping](../mapping/) for more information.

## Contribute An Implementation

If you developed an accessibility tool or a testing methodology, and would like to have your implementation included in the WAI website, there are two ways you can do so.

1. If you have a tool that can return a data format, you will need to run your tests against the ACT rule's test cases and [submit a report](../reporting/).

2. If you have a manual test methodology where you fill results into some report template or semi-automated tool, you can [use the ACT Implementor tool](https://act-implementor.netlify.app/#/) instead to produce implementation reports.

---
title: Examples
---

All ACT rules include a number of examples, which are designed for easy consumption by accessibility test tools and test methodologies. Examples are updated regularly as part of rule writing. All examples are described in a JSON file:

 <a class='btn' href='https://www.w3.org/WAI/content-assets/wcag-act-rules/testcases.json'>
	See the Examples JSON
 </a>

**Note**: HTML examples are embedded in a small template which adds a `!DOCTYPE`, HTML root node with lang attribute, and head with a title. These are omitted for examples with an HTML element or a `!DOCTYPE`.

## Example Format

In the `testcases.json` file, examples are included on the `testcases` array, each with the following properties:

- `testcaseId`: Hash of the example, changes when the example is updated
- `url`: Standalone page containing the example.
- `expected`: Expected outcome of the example (`passed`, `failed`, or `inapplicable`)
- `ruleId`: Unique identifier for the rule.
- `ruleName`: Title of the rule the example is for
- `rulePage`: Page containing a detailed rule description.
- `ruleAccessibilityRequirements`: Array of success criteria and other accessibility requirements not satisfied when the rule `failed`

```json
{
	"name": "ACT Task Force examples",
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

## Running The Examples

To run the examples, go through each URL run the necessary tests on that page. Tools and test procedures do not need to have a one-to-one mapping to ACT-R rules. While you could run all tests in an implementation on every example, for efficiency we recommend doing one of the following:

1. Only run tests relevant for the `ruleAccessibilityRequirements` (e.g. for an example that maps to success criterion 1.1.1, only run tests related to success criterion 1.1.1)

2. Maintain a manual many-to-many mapping of rules in your implementation to ACT-R Rules

Correctness of an implementation is based on the results for examples. See [implementation mapping](../mapping/) for more information.

## Contribute An Implementation

If you developed an accessibility tool or a testing methodology, and would like to have your implementation included in the WAI website, there are two ways you can do so.

1. If you have a tool that can return a data format, you will need to run your tests against the ACT rule's examples and [submit a report](../reporting/).

2. If you have a manual test methodology where you fill results into some report template or semi-automated tool, you can [use the ACT Implementor tool](https://act-implementor.netlify.app/#/) instead to produce implementation reports.

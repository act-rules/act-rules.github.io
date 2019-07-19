---
id: e38767
name: Frame title is descriptive
rule_type: atomic
description: |
  This rule checks that the title of each frame is descriptive
accessibility_requirements:
  wcag-technique:H64: # Using the title attribute of the frame and iframe elements
		forConformance: false
		failed: not satisfied
		passed: further testing needed
		inapplicable: further testing needed
input_aspects:
	- DOM Tree
	- CSS styling
	- Language
authors:
	- Jean-Yves Moyen
	- Anne Thyme Nørregard
---

## Applicability

This rule applies to any [document](#https://www.w3.org/TR/dom/#concept-document) where the [document element](#https://www.w3.org/TR/dom/#document-element) is an HTML `html` element and contains at least one `frameset` element.

**Note**: `frame` and `frameset` are deprecated in HTML5. This rule is for testing older pages which used them in the first place. It is not a good idea to add `frame` and `frameset` to pages that do not contain any.

## Expectations

The `title` attribute of each `frame` element within the test target that has one describes the content of the `frame`.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64)

## Test Cases

### Passed

### Failed

### Inapplicable

---
id: e53727
name: First focusable element is an internal link
rule_type: atomic
description: |
  This rule checks that the first focusable element is a link to within the same page
accessibility_requirements:
  wcag-technique:G1: # Adding a link at the top of each page that goes directly to the main content area
		forConformance: false
		failed: not satisfied
		passed: satisfied
		inapplicable: further testing needed
input_aspects:
	- DOM Tree
	- CSS styling
authors:
	- Jean-Yves Moyen
	- Anne Thyme Nørregard
---

## Applicability

This rule applies to any [document](#https://www.w3.org/TR/dom/#concept-document) where the [document element](#https://www.w3.org/TR/dom/#document-element) is an HTML `html` element.

## Expectations

The first [focusable][#focusable] element of the [document element](#https://www.w3.org/TR/dom/#document-element)
- has [semantic role][#semantic-role] of link; and
- has an [accessible name][#accessible-name] that is not only [whitespaces][whitespace]; and
- is [visible][visible] when [focused][#focused]; and
- refers to an element within the same [document](#https://www.w3.org/TR/dom/#concept-document).

## Assumptions

This rule assume that there any global dismissable information that only appears once per site (such as a cookie policy banner) have already been acknoledged and are not displayed any more.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G1: Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG21/Techniques/general/G1)

## Test Cases

### Passed

### Failed

### Inapplicable

---
id: e53727
name: First focusable elements are internal links
rule_type: atomic
description: |
  This rule checks that the first focusable elements are links to within the same page
accessibility_requirements:
  wcag-technique:G1: # Adding a link at the top of each page that goes directly to the main content area
		forConformance: false
		failed: not satisfied
		passed: further testing needed
		inapplicable: further testing needed
	wcag-technique:G124: # Adding links at the top of the page to each area of the content
		forConformance: false
		failed: not satisfied
		passed: further testing needed
		inapplicable: further testing needed
input_aspects:
	- DOM Tree
	- CSS styling
authors:
	- Jean-Yves Moyen
	- Anne Thyme Nørregard
---

## Applicability

This rule applies to any HTML [focusable](#focusable) element within a [document](https://www.w3.org/TR/dom/#concept-document) where the [document element](https://www.w3.org/TR/dom/#document-element) is an HTML `html` element.

## Expectation 1

The test target:
- has an [accessible name][#accessible-name] that is not only [whitespaces][whitespace]; and
- is [visible][visible] when [focused][#focused]; and
- is has a [semantic role](#semantic-role) of link; and
- refers to an element within the same [document](https://www.w3.org/TR/dom/#concept-document).

## Expectation 2

Every [focusable](#focusable) element which is before the test target in focus order is passing Expectation 1.

**Note**: This rule does not check the pertinence of the links (does it goes to the content area?) Therefore, passing this rule is not enough to satisfy WCAG technique [G1: Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG21/Techniques/general/G1) or [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124).

## Assumptions

This rule assumes that any global dismissible information that only appears once per site has already been acknowledged and is not displayed any more.

**Note**: the aim of such links is to be able to skip repeated content (headers, navigation bar, ...) when viewing several pages of the same site. Many sites display a cookies policy banner which is stealing focus until dismissed (usually be viewing and accepting cookies policy). Since that content is *not* repeated (is it only shown once for the full site), it is not a problem to have it, and it may appear on any page of the site (depending where the user first comes in).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G1: Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG21/Techniques/general/G1)
- [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124)

## Test Cases

### Passed

### Failed

### Inapplicable

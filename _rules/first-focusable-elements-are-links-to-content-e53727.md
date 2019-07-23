---
id: e53727
name: First focusable elements are links to sections of content
rule_type: atomic
description: |
  This rule checks that the first focusable elements are links referring to elements on the same page
accessibility_requirements:
	wcag-technique:G124: # Adding links at the top of the page to each area of the content
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

## Expectation 1

There is an [initial segment](#initial-segment) of the [focusable](#focusable) elements (in focus order) such that each element in that [intial segment](#initial-segment):
- is [visible][visible] when [focused][#focused]; and
- is has a [semantic role](#semantic-role) of link; and
- refers to a [section of content](#section-of-content) within the same [document](https://www.w3.org/TR/dom/#concept-document); and
- has an [accessible name][#accessible-name] that communicates that it links to that specific [section of content](#section-of-content).

## Expectation 2

Each [section of content](#section-of-content) in the test target is the target of one link from the set of [focusable](#focusable) elements that passes Expectation 1.

## Assumptions

This rule assumes that any global dismissible information that only appears once per site has already been acknowledged and is not displayed any more.

**Note**: the aim of such links is to be able to skip repeated content (headers, navigation bar, ...) when viewing several pages of the same site. Many sites display a cookies policy banner which might be stealing focus until dismissed (usually be viewing and accepting cookies policy). Since that content is *not* repeated (is it only shown once for the full site), it is not a problem to have it, and it may appear on any page of the site (depending where the user first comes in).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124)

## Test Cases

### Passed

### Failed

### Inapplicable

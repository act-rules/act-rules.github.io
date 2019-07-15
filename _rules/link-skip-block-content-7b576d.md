---
id: 7b576d
name: Link to skip block of content
rule_type: atomic
description: |
  This rule checks that blocks of content can be skipped by a link at their beginning
accessibility_requirements:
  wcag-technique:G123: # Adding a link at the beginning of a block of repeated content to go to the end of the block
		forConformance: false
		failed: not satisfied
		passed: further testing needed
		inapplicable: further testing needed
input_aspects:
	- DOM Tree
authors:
	- Jean-Yves Moyen
	- Anne Thyme Nørregard
---

## Applicability

This rule applies to any block of content in a [document](#https://www.w3.org/TR/dom/#concept-document) where the [document element](#https://www.w3.org/TR/dom/#document-element) is an HTML `<html>` element.

## Expectations

Either the last [focusable](#focusable) element before the test target, or the first [focusable](#focusable) element inside the test target has a [semantic role](#semantic-role) of `link` and:
- is [visible](#visible) when [focuse](#focused); and
- refers to an element within the same [document](https://www.w3.org/TR/dom/#concept-document) located immediately after the test target; and
- has an [accessible name](#accessible-name) that communicates that it skips the test target.

## Assumptions

This rule assumes that the block of content is repeated over several pages of the same site.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](https://www.w3.org/WAI/WCAG21/Techniques/general/G123)

## Test Cases

### Passed

### Failed

### Inapplicable

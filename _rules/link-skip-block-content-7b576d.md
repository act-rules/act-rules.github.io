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
	- CSS styling
	- Language
authors:
	- Jean-Yves Moyen
	- Anne Thyme Nørregard
---

## Applicability

This rule applies to any set of two or more [documents](#https://www.w3.org/TR/dom/#concept-document) where the [document element](#https://www.w3.org/TR/dom/#document-element) is an HTML `html` element.

## Expectations

For each [document](#https://www.w3.org/TR/dom/#concept-document) within the test target, and each [section of content](#section-of-content) repeated in all [documents](#https://www.w3.org/TR/dom/#concept-document) of the test target, either the last [focusable](#focusable) element before this [section of content](#section-of-content), or the first [focusable](#focusable) element inside it has a [semantic role](#semantic-role) of `link` and:
- is [included in the accessibility tree](#included-in-the-accessibility-tree); and
- is [visible](#visible) when [focused](#focused); and
- refers to an element within the same [document](#https://www.w3.org/TR/dom/#concept-document) located immediately after this [section of content](#section-of-content); and
- has an [accessible name](#accessible-name) that communicates that it skips this [section of content](#section-of-content).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](https://www.w3.org/WAI/WCAG21/Techniques/general/G123)

## Test Cases

### Passed

### Failed

### Inapplicable

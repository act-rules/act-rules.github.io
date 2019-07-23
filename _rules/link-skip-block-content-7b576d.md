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

This rule applies to any [document](#https://www.w3.org/TR/dom/#concept-document) where the [document element](#https://www.w3.org/TR/dom/#document-element) is an HTML `html` element.

## Expectations

For each [section of repeated content](#repeated-content) within the test target, either the last [focusable](#focusable) element before it, or the first [focusable](#focusable) element inside it has a [semantic role](#semantic-role) of `link` and:
- is [included in the accessibility tree](#included-in-the-accessibility-tree); and
- is [visible](#visible) when [focused](#focused); and
- refers to an element within the same [document](#https://www.w3.org/TR/dom/#concept-document) located immediately after this [section of content](#section-of-content); and
- has an [accessible name](#accessible-name) that communicates that it skips this [section of content](#section-of-content).

## Assumptions

This rule assume that [sections of repeated content](#repeated-content) has already be identified within the test target, for example by comparison with other test targets within the same test subject, or any other mean.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](https://www.w3.org/WAI/WCAG21/Techniques/general/G123)

## Test Cases

### Passed

### Failed

### Inapplicable

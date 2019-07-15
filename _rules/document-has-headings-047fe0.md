---
id: 047fe0
name: Document has headings
rule_type: atomic
description: |
  This rule checks that each section of content starts with a heading
accessibility_requirements:
  wcag-technique:H69: # Providing heading elements at the beginning of each section of content
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

This rule applies to any [document](#https://www.w3.org/TR/dom/#concept-document) where the [document element](#https://www.w3.org/TR/dom/#document-element) is an HTML `<html>` element.

## Expectations

Each section of content in the [document](#https://www.w3.org/TR/dom/#concept-document) starts with an element with a [semantic role](#semantic-role) of `heading`.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69)

## Test Cases

### Passed

### Failed

### Inapplicable

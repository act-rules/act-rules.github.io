---
id: cefbef
name: Block of content is expandable and collapsible
rule_type: atomic
description: |
  This rule checks that a given block of content is expandable and collapsible
accessibility_requirements:
  wcag-technique:SCR28: # Using an expandable and collapsible menu to bypass block of content
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

This rule applies to any set of two or more [documents](#https://www.w3.org/TR/dom/#concept-document) where the [document element](#https://www.w3.org/TR/dom/#document-element) is an HTML `html` element.

## Expectations

For each [document](#https://www.w3.org/TR/dom/#concept-document) within the test target, and each [section of content](#section-of-content) repeated in all [documents](#https://www.w3.org/TR/dom/#concept-document) of the test target, there exists some user interface control in the [document](#https://www.w3.org/TR/dom/#concept-document) that allows to toggle both [visibility](#visible) and [inclusion in the accessibility tree](#included-in-the-accessibility-tree) of this [section of content](#section-of-content).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [SCR28: Using an expandable and collapsible menu to bypass block of content](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28)

## Test Cases

### Passed

### Failed

### Inapplicable

---
id: cefbef
name: Block of content is expandable and collapsible
rule_type: atomic
description: |
  This rule checks that repeated blocks of content are expandable and collapsible
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

This rule applies to any [document](#https://www.w3.org/TR/dom/#concept-document) where the [document element](#https://www.w3.org/TR/dom/#document-element) is an HTML `html` element.

## Expectations

For each [section of repeated content](#repeated-content) in the test target, there exists some [user interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components) that allows to toggle both [visibility](#visible) and [inclusion in the accessibility tree](#included-in-the-accessibility-tree) of this [section of repeated content](#repeated-content).

## Assumptions

This rule assumes that [sections of repeated content](#repeated-content) have already been identified within the test target, for example by comparison with other test targets within the same website, or any other means.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [SCR28: Using an expandable and collapsible menu to bypass block of content](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28)

## Test Cases

### Passed

### Failed

### Inapplicable

---
id: 
name: HTML page has a main landmark
rule_type: atomic
description: |
  This rule checks that each page has an element with a role of main
accessibility_requirements:
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

The [document element](https://www.w3.org/TR/dom/#document-element) has at least one [descendant](https://www.w3.org/TR/dom41/#concept-tree-descendant) with a [semantic role][#semantic-role] of `main`.

**Note**: Authors SHOULD not use more than one element w%ith a [semantic role][#semantic-role] of `main`.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA11)

## Test Cases

### Passed

### Failed

### Inapplicable
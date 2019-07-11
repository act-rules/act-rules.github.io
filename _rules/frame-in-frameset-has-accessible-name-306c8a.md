---
id: 306c8a
name: Each frame in a frameset has an accessible name
rule_type: atomic
description: |
  This rule checks that each frame within a frameset has an accessible name
accessibility_requirements:
  wcag-technique:H64: # Using the title attribute of the frame and iframe elements
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

This rule applies to any `frameset` element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

**Note**: `frameset` and `frame` are deprecated in HTML5. This rule is for testing older pages which used them in the first place. It is not a good idea to add `frameset` and `frame` to pages that do not contain any.

## Expectations

Each `frame` element which is a child of the target `frameset` and is [included in the accessibility tree](#included-in-the-accessibility-tree) has an [accessible name](#accessible-name) that is not only [withespaces](#whitespace).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64)

## Test Cases

### Passed

### Failed

### Inapplicable

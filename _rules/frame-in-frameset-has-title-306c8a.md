---
id: 306c8a
name: Each frame has a title
rule_type: atomic
description: |
  This rule checks that each frame has a title attribute
accessibility_requirements:
  wcag-technique:H64: # Using the title attribute of the frame and iframe elements
		forConformance: false
		failed: not satisfied
		passed: further testing needed
		inapplicable: further testing needed
input_aspects:
	- DOM Tree
	- CSS Styling
authors:
	- Jean-Yves Moyen
	- Anne Thyme Nørregard
---

## Applicability

This rule applies to any `frame` element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

**Note**: `frame` and `frameset` are deprecated in HTML5. This rule is for testing older pages which used them in the first place. It is not a good idea to add `frame` and `frameset` to pages that do not contain any.

## Expectations

The test target:
- is [included in the accessibility tree](#included-in-the-accessibility-tree); and
- has a `title` attribute whose value is not only [withespaces](#whitespace).

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

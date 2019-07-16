---
id: 7d6735
name: SVG with non-text content has accessible name
rule_type: atomic
description: |
   This rule checks that <evg> element that has content included in the accessibility tree has an accessible name.
accessibility_requirements:
  wcag20:1.1.1: # Non-Text Content (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
authors:
  - Bryn Anderson
  - Jean-Yves Moyen
---

## Applicability

The rule applies to any `<svg>` element that has a decendent element with non-text content that is included in the accessibility tree.

**Note**: The [SVG Accessibility API Mappings (work in progress)](https://www.w3.org/TR/svg-aam-1.0/#include_elements) specifies that many elements in the SVG namespace are purely presentational and should not be included in the accessibility tree unless indicated otherwise through the use of text alternative content, an explicit WAI ARIA role, or a valid `tabindex` attribute.

## Expectation

Each decendent of the target element that is included in the accessibility tree is a decendent of an element with an [accessible name](#accessible-name) that is not only [whitespace](#whitespace) or it is marked as decorative.

## Assumptions

*There are currently no assumptions*

## Accessibility Support

Bwosers behaviour is inconsistent...

Browser and assistive technology support for SVG `<title>` and `<desc>` elements is currently inconsistent. Using WAI ARIA in combination with the `img` role for non-decorative `<svg>` elements significantly improves accessibility browser support.

## Background

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [SVG Accessibility API Mappings](https://www.w3.org/TR/svg-aam-1.0)
- [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0/)
- [ARIA4: Using a WAI-ARIA role to expose the role of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4)
- [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6)
- [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10)

## Test Cases

### Passed

#### Passed example 1

The `<svg>` has non-text content included in the accessibility tree because the <g> element has a role of `graphics-object`. The `<svg>` is marked as decorative and the `<g>` element has an `aria-label` for its accessible name that is not only whitespace.

```html
<svg xmlns="https://www.w3.org/2000/svg" width="600" height="400" role="presentation">
	<g aria-label="1 small yellow rectangle in 1 larger green rectangle"> 
		<rect role="graphics-object" fill="green" width="50" height="90"/> 
		<rect role="graphics-object" fill="yellow" x="5" y="5" width="40" height="30" />
	</g>
</svg>
```

### Failed

#### Failed example 1

The `<svg>` has non-text content included in the accessibility tree because the <rect> elements have a role of `graphics-object` but the neither the `<g>` or `<svg>` elements have an accessible name.

```html
<svg xmlns="https://www.w3.org/2000/svg" width="600" height="400">
	<g> 
		<rect role="graphics-object" fill="green" width="50" height="90"/> 
		<rect role="graphics-object" fill="yellow" x="5" y="5" width="40" height="30" />
	</g>
</svg>
```

### Inapplicable

#### Inapplicable example 1

The `svg` element does not include any non-text content in the accessibility tree. 

```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
</svg>
```

---
name: SVG image has accessible name
description: |
  This rule checks that each SVG image element that is included in the accessibility tree, has an accessible name.

success_criterion:
- 1.1.1 # Non-Text Content

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Bryn Anderson
---

## Test procedure

### Applicability

The rule applies to any [SVG](https://www.w3.org/2000/svg) element with the [semantic role](#semantic-role) of `img` or `graphics-document`, that is [included in the accessibility tree](#included-in-the-accessibility-tree).

### Expectation

Each target element has a an accessible name.

## Assumptions

*There are currently no assumptions*

## Accessibility support

Browser and assistive technology support for SVG `title` and `desc` elements is currently inconsistent. Using WAI ARIA in combination with the `img` role for non-decorative `svg` elements significantly improves accessibility browser support.

## Background

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [SVG Accessibility API Mappings](https://www.w3.org/TR/svg-aam-1.0)
- [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0/)
- [ARIA4: Using a WAI-ARIA role to expose the role of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4)
- [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6)
- [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10)

## Test Cases

### Passed

#### Pass example 1

The `<svg>` element has a role of `img` which takes its accessible name from its `<title>` element.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100" height="100">
  <title>A yellow circle</title>
	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
</svg>
```

#### Pass example 2

The `<svg>` element has a role of `img` and an `aria-label` containing the accessible name.

```html
<svg xmlns="https://www.w3.org/2000/svg" role="img" width="100" height="100" aria-label="A yellow circle">
	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
</svg>
```

#### Pass example 3

The `<svg>` element has the role of `graphics-document` which takes its accessible name from its child content, the `<text>` element.

```html

<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink" role="graphics-document">
    <title>3 circles</title>
    <desc>3 yellow circles with a green stroke horizontally adjacent to each other
    </desc>
    <g role="group">
	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
	<circle cx="150" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
	<circle cx="250" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
    </g>
</svg>
```

### Failed

#### Failed example 1

The `<svg>` element has a role of `img` but has no accessible name.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100" height="100">
	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
</svg>
```

#### Failed example 2

The `<svg>` element has an empty `title`.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" role="img">
	<title> </title>
  	<circle role="none" cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

### Inapplicable

#### Inapplicable example 1

The `svg` element does nott have a role of `img` or `graphics-document`. 

```html
<svg width="100" height="100">
<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Inapplicable example 2

The `svg` element is not included in the accessibility tree.

```html
<svg width="100" height="100">
<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```


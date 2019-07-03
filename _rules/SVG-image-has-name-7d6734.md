---
id: 7d6734
name: SVG image has accessible name
rule_type: atomic
description: |
   This rule checks that each SVG image element that renders visible content that and is included in the accessibility tree has an accessible name.
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
---

## Applicability

The rule applies to any element in the [SVG](https://www.w3.org/2000/svg) namespace with a [semantic role](#semantic-role) of either `img`, `graphics-document`, `graphics-object`, `graphics-symbol`, that is [visible](#visible), and [included in the accessibility tree](#included-in-the-accessibility-tree).

**Note**: The [SVG Accessibility API Mappings](https://www.w3.org/TR/svg-aam-1.0/#include_elements) specifies that many elements in the SVG namespace are purely presentational and should not be included in the accessibility tree unless indicated otherwise through the use of text alternative content, an explicit WAI ARIA role, or a valid `tabindex` attribute.

## Expectation

Each target element has an [accessible name](#accessible-name) that is not [whitespace](#whitespace).

## Assumptions

*There are currently no assumptions*

## Accessibility Support

The [HTML Accessibility API Mappings](https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings) specify that the `<svg>` element has an implicit role of `graphics-document`. However browser support for the `graphics-document` role and the [SVG Accessibility API Mappings](https://www.w3.org/TR/svg-aam-1.0) is inconsistent.

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

The `<svg>` element has an implicit role of `graphics-document`, has visible content rendered by the `<circle>` element and, is included in the accessibility tree by the `<title>` that does not only whitespace.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <title>A yellow circle</title>
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Passed example 2

The `<svg>` element has an explicit role of `img`, has visible content rendered by the `<circle>` element, and is included in the accessibility tree by the `<title>` that does not only whitespace.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100" height="100">
  <title>A yellow circle</title>
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Passed example 3

The `<svg>` element has an explicit role of `img`, has visible content rendered by the `<circle>` element, and is included in the accessibility tree by the `aria-label` attribute that is not only whitespace.

```html
<svg xmlns="https://www.w3.org/2000/svg" role="img" width="100" height="100" aria-label="A yellow circle">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Passed example 4

The `<svg>` child `<g>` element has visible content, is included in the accessibility tree with the `graphics-document` role, and provides an accessible name through the `aria-label` attribute that is not only whitespace.

```html
<svg xmlns="https://www.w3.org/2000/svg" width="600" height="400" viewBox="200 0 400 400" role="presentation">
	<g role="graphics-object" aria-label="small yellow rectangle in larger green rectangle" transform="translate(30,-90)"> 
		<rect fill="green" width="50" height="90"/> 
		<rect fill="yellow" x="5" y="5" width="40" height="30" />
	</g>
</svg>
```

### Failed

#### Failed example 1

The `<svg>` element is included in the accessibility tree with an explicit role of `img`, has visible content rendered by the `<circle>` element, but has no accessible name.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100" height="100">
	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
</svg>
```

#### Failed example 2

The `<svg>` element is included in the accessibility tree with an explicit role of `img`, has visible content rendered by the `<circle>` element, but has only has whitespace in the `<title>` element that is being used for the accessible name.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100" height="100" >
	<title> </title>
  	<circle role="none" cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Failed example 3

The `<svg>` element is included in the accessibility tree with an explicit role of `img`, has visible content rendered by the `<circle>` element, but has no content in the `<title>` element that is being used for the accessible name.
 
```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100" height="100">
	<title></title>
  	<circle role="none" cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Failed example 4

The `<circle>` elements have visible content, are included in the accessibility tree with the explicit role `graphics-symbol` but they have no have accessible names.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="presentation">
	<circle role="graphics-symbol" cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
	<circle role="graphics-symbol" cx="150" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
	<circle role="graphics-symbol" cx="250" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
</svg>
```

#### Failed example 5
 
The `<svg>` element has a role of `img`, has visible content rendered by the `<circle>` element, but no accessible name. The `title` attribute is not defined in the SVG namespace.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" title="previous page">
  	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Failed example 6
 
The `<circle>` element has visible content, is included in the accessibility tree with a valid `tabindex` attribute, but has no accessible name.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  	<circle tabindex="0" cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

### Inapplicable

#### Inapplicable example 1

The `svg` element does not render any visible content to the screen and is not included in the accessibility tree. 

```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
</svg>
```

#### Inapplicable example 2

The `<svg>` element has visible content rendered by the `<circle>` element but with no explicit role indicating its purpose it is not included in the accessibility tree.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Inapplicable example 3

The `svg` element has visible content rendered by the `<circle>` element, has an accessible name but the `aria-hidden` attribute removed the element from the accessibility tree.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A yellow circle" aria-hidden="true">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Inapplicable example 4

The `svg` element does not render any visible content.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A yellow circle" aria-hidden="true">
	<defs>
		<circle cx="50" cy="50" r="40" fill="yellow"></circle>
	</defs>	
</svg>
```

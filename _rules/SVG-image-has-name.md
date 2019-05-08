---
id: 7d6734
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

The rule applies to any element in the [SVG](https://www.w3.org/2000/svg) namespace with a [semantic role](#semantic-role) of either `img`, `graphics-document`, `graphics-object`, `graphics-symbol`, that is [included in the accessibility tree](#included-in-the-accessibility-tree).

### Expectation

Each target element has an [accessible name](#accessible-name) that is not only [whitespace](#whitespace).

## Assumptions

*There are currently no assumptions*

## Accessibility support

The [HTML Accessibility API Mappings](https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings) specify that the `<svg>` element has an implicit role of `graphics-document`. However browser support for `graphics-document` and the SVG Accessibility API Mappings is inconsistent.

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

#### Passed example 1

The `<svg>` has an implicit role of `graphics-document` and takes its accessible name from its `<title>` element.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <title>A yellow circle</title>
	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
</svg>
```

#### Passed example 2

The `<svg>` element has an explicit role of `img` and takes its accessible name from its `<title>` element.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100" height="100">
  <title>A yellow circle</title>
	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
</svg>
```

#### Passed example 3

The `<svg>` element has a role of `img` and an `aria-label` containing the accessible name.

```html
<svg xmlns="https://www.w3.org/2000/svg" role="img" width="100" height="100" aria-label="A yellow circle">
	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
</svg>
```

#### Passed example 4

The `<svg>` element has the role of `graphics-document` which takes its accessible name from its child `<title>` element. 

```html

<svg xmlns="http://www.w3.org/2000/svg" role="graphics-document">
    <title>3 circles</title>
    <g role="group">
	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
	<circle cx="150" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
	<circle cx="250" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
    </g>
</svg>
```

#### Passed example 5

The `<circle>` element is included in the accessibility tree and takes its accessible name from its child `<title>` element.

```html
<svg xmlns="http://www.w3.org/2000/svg">
	<circle role="graphics-symbol" cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow">
	    <title>Yellow circle</title>
	</circle>
</svg>
```

#### Passed example 6

The `<svg>` element and both descendant `<g>` elements are included in the accessibility tree with the `graphics-document` and `graphics-object` roles. The `svg` element gets its' accessible name via the `<title>` element and both `<g>` elements from their `aria-label` attributes.

```html
<svg xmlns="https://www.w3.org/2000/svg" width="600" height="400" viewBox="200 0 400 400" role="graphics-document">
	<title>3 shapes</title>
	<g role="graphics-object" aria-label="Blue rectangle" transform="translate(100,100)">
        <desc>Large blue rectangle with two other shapes inside it</desc>
		<rect fill="blue" role="graphics-object" aria-label=" large blue rectangle" width="200" height="100" y="-100" />
		<g role="graphics-object" aria-label="small yellow rectangle in larger green rectangle" transform="translate(30,-90)"> <!-- the aria-label descr -->
			<rect fill="green" width="50" height="90"/> 
			<rect fill="yellow" x="5" y="5" width="40" height="30" />
			</g>
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

The `img` role includes the `<svg>` element in the accessibility tree but the element has no accessible name because the `<title>` element contains only whitespace.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" role="img">
	<title> </title>
  	<circle role="none" cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Failed example 3

The `svg` `<circle>` elements are included in the accessibility tree but do not have accessible names.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="graphics-document">
	<title>Yellow shapes</title>
	<circle role="graphics-symbol" cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
	<circle role="graphics-symbol" cx="150" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
	<circle role="graphics-symbol" cx="250" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
</svg>
```

#### Failed example 4

The `<g>` elements are included in the accessibility tree with the `graphics-object` role but only one of the elements has an accessible name.

```html
<svg xmlns="https://www.w3.org/2000/svg" width="600" height="400" viewBox="200 0 400 400" role="graphics-document">
	<title>3 shapes</title>
	<g role="graphics-object" aria-label="Blue rectangle" transform="translate(100,100)">
        <desc>Large blue rectangle with two other shapes inside it</desc>
		<rect fill="blue" role="graphics-object" aria-label=" large blue rectangle" width="200" height="100" y="-100" />
		<g role="graphics-object" transform="translate(30,-90)">
			<rect fill="green" width="50" height="90"/>
			<rect fill="yellow" x="5" y="5" width="40" height="30" />
			</g>
		 </g>
	</svg>
```

#### Failed example 5
 
The `<svg>` element has a role of `img` but the accessible name `<title>` element has no content.
 
```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100" height="100">
	<title></title>
  	<circle role="none" cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Failed example 6
 
The `<svg>` element has a role of `img` but has no accessible name. The `title` attribute is not defined in the SVG namespace.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" title="previous page">
  	<circle role="none" cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

### Inapplicable

#### Inapplicable example 1

The `svg` element does not have a role of `img`, `graphics-document`, `graphics-object`, or `graphics-symbol`. 

```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Inapplicable example 2

The `svg` element has an accessible name but the `aria-hidden` attribute excludes the element from the accessibility tree.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" role="img" aria-label="A yellow circle" aria-hidden="true">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

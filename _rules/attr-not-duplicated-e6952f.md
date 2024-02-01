---
id: e6952f
name: Attribute is not duplicated
rule_type: atomic
description: |
  This rule checks that HTML and SVG starting tags do not contain duplicated attributes.
accessibility_requirements:
  wcag20:4.1.1: # Parsing (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:H94: # Ensuring that elements do not contain duplicate attributes
    forConformance: false
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
input_aspects:
  - Source code
acknowledgments:
  authors:
    - Emma Pratt Richens
    - Wilco Fiers
  funding:
    - WAI-Tools
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'attr-no-duplication'
deprecated: |
  This rule has been deprecated because success criterion 4.1.1 has 
  been removed in WCAG 2.2 and for WCAG 2.1 and 2.0 should be 
  considered to always pass.
---

## Applicability

This rule applies to any [starting tag](https://www.w3.org/TR/html5/syntax.html#start-tags) in an HTML or SVG document.

**Note:** This rule cannot be tested on the DOM Tree because the browser removes duplicates of any attribute that is already present on an element.

## Expectation

For each test target, there are no duplicated [attributes](https://www.w3.org/TR/html5/syntax.html#elements-attributes).

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [H94: Ensuring that elements do not contain duplicate attributes](https://www.w3.org/WAI/WCAG22/Techniques/html/H94)

## Test Cases

### Passed

#### Passed Example 1

This `img` element contains no duplicated attributes.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

#### Passed Example 2

This `br` element contains no attributes, so there is no duplicated attribute.

```html
<br />
```

#### Passed Example 3

This `input` element contains three different attributes, two of them being empty.

```html
<input type="checkbox" disabled readonly />
```

#### Passed Example 4

This `SVG` element contains no attributes.

```html
<svg>
	<line x1="0" y1="0" x2="200" y2="200" style="stroke-width:2" />
</svg>
```

#### Passed Example 5

This `script` element contains duplicated attributes, but they are ignored because they are placed within the `script` tag.

```html
<script>
	var foo = '<img src="/test-assets/shared/w3c-logo.png" alt="" alt="W3C logo" />'
</script>
```

### Failed

#### Failed Example 1

This `img` element contains a duplicated `alt` attribute.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" alt="W3C logo" />
```

#### Failed Example 2

This `input` element contains a duplicate `disabled` attribute.

```html
<input type="checkbox" disabled="disabled" disabled readonly />
```

#### Failed Example 3

This `line` element contains duplicate `x1` and duplicate `y1` attributes.

```html
<svg>
	<line x1="0" y1="0" x1="200" y1="200" style="stroke-width:2" />
</svg>
```

### Inapplicable

#### Inapplicable Example 1

This code is XML, not HTML or SVG.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:earl="http://www.w3.org/ns/earl#">
  <earl:TestResult rdf:about="#result"></earl:TestResult>
</rdf:RDF>
```

#### Inapplicable Example 2

This code is JavaScript, not HTML or SVG.

```js
var foo = '<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />'
```

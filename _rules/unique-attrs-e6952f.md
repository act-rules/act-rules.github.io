---
id: e6952f
name: attributes are not duplicated
rule_type: atomic
description: |
  This rule checks that HTML and SVG starting tags do not contain duplicated attributes.
accessibility_requirements:
  wcag20:4.1.1: # Parsing (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Source code
authors:
  - Wilco Fiers
  - Emma Pratt Richens
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint 
  # (used with `npm test` to ensure validity of code snippets)
  - 'attr-no-duplication'
---

## Applicability

The rule applies to any [starting tag](https://www.w3.org/TR/html5/syntax.html#start-tags) in an HTML or SVG document.

**Note:** This rule cannot be tested on the DOM Tree because the browser removes duplicates of any attribute that is already present on an element.

## Expectation

For each test target, there are no duplicated [attributes](https://www.w3.org/TR/html5/syntax.html#elements-attributes).

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- - [H94: Ensuring that elements do not contain duplicate attributes](https://www.w3.org/TR/WCAG20-TECHS/H94.html)

## Test Cases

### Passed

#### Passed Example 1

No attributes are duplicated.

```html
<img src="image.jpg" alt="" />
```

#### Passed Example 2

No attributes, therefore no attributes are duplicated.

```html
<br />
```

#### Passed Example 3

Empty attributes, no attributes are duplicated.

```html
<input type="checkbox" disabled readonly />
```

#### Passed Example 4

SVG, no attributes are duplicated.

```html
<svg>
	<line x1="0" y1="0" x2="200" y2="200" style="stroke-width:2" />
</svg>
```

#### Passed Example 5

Script, no attributes are duplicated. HTML or SVG code within a script should be ignored.

```html
<script>
	var foo = '<img src="image.jpg" alt="" alt="image" />'
</script>
```

### Failed

#### Failed Example 1

At least one attribute is duplicated.

```html
<img src="image.jpg" alt="" alt="image" />
```

#### Failed Example 2

Empty attributes, at least one attribute is duplicated.

```html
<input type="checkbox" disabled="disabled" disabled readonly />
```

#### Failed Example 3

SVG, at least one attribute is duplicated.

```html
<svg>
	<line x1="0" y1="0" x1="200" y1="200" style="stroke-width:2" />
</svg>
```

### Inapplicable

#### Inapplicable Example 1

Code is XML, and not HTML or SVG.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<earl:TestResult rdf:about="#result"></earl>
```

#### Inapplicable Example 2

Code is JavaScript, and not HTML or SVG.

```js
var foo = '<img src="image.jpg" alt="" alt="image" />'
```

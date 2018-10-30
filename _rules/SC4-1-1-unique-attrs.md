---
name: attributes are not duplicated
rule_type: atomic
description: |
  This rule checks that HTML and SVG starting tags do not contain duplicated attributes.

success_criterion:
- 4.1.1 # Parsing

test_aspects:
- Source code

authors:
- Wilco Fiers
- Emma Pratt Richens
---


## Applicability

The rule applies to any [starting tag](https://www.w3.org/TR/html5/syntax.html#start-tags) in an HTML or SVG file.

**Note:** This rule cannot be tested on the DOM Tree because the browser ignores duplicated attributes.

## Expectation

For each test target, there are no duplicated [attributes](https://www.w3.org/TR/html5/syntax.html#elements-attributes).

## Assumptions

*There are currently no assumptions.*

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

- - [H94: Ensuring that elements do not contain duplicate attributes](https://www.w3.org/TR/WCAG20-TECHS/H94.html)


## Test Cases

### Passed

#### Passed example 1

No attributes are duplicated.

```html
<img src="image.jpg" alt="" />
```

#### Passed example 2

No attributes, therefore no attributes are duplicated.

```html
<br />
```

#### Passed example 3

Empty attributes, no attributes are duplicated.

```html
<input type="checkbox" disabled readonly />
```

#### Passed example 4

SVG, no attributes are duplicated.

```html
<svg>
  <line x1="0" y1="0" x2="200" y2="200" style="stroke-width:2" />
</svg>
```

#### Passed example 5

Script, no attributes are duplicated. HTML or SVG code within a script should be ignored.

```html
<script>
	var foo = '<img src="image.jpg" alt="" alt="image" />'
</script>
```

### Failed

#### Failed example 1

At least one attribute is duplicated.

```html
<img src="image.jpg" alt="" alt="image" />
```

#### Failed example 2

Empty attributes, at least one attribute is duplicated.

```html
<input type="checkbox" disabled="disabled" disabled readonly />
```

#### Failed example 3

SVG, at least one attribute is duplicated.

```html
<svg>
  <line x1="0" y1="0" x1="200" y1="200" style="stroke-width:2" />
</svg>
```

### Inapplicable

#### Inapplicable example 1

Code is XML, and not HTML or SVG.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<earl:TestResult rdf:about="#result"></earl>
```

#### Inapplicable example 2

Code is JavaScript, and not HTML or SVG.

```js
var foo = '<img src="image.jpg" alt="" alt="image" />'
```

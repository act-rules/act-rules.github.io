---
name: Document title is descriptive
rule_type: atomic
description: |
  This rule checks that the document title describes the topic or purpose of the document.

success_criterion: 
- 2.4.2 # Page Titled (A)

test_aspects:
- DOM Tree

authors:
- Anne Thyme Nørregaard
- Corbb O’Connor 

---

## Test procedure

### Applicability

This rule applies to the [document title](https://www.w3.org/TR/html5/single-page.html#dom-tree-accessors) in a [document](https://www.w3.org/TR/dom/#concept-document) where the [document element](https://www.w3.org/TR/dom/#document-element) is an HTML `<html>` element **and** the `<title>` element is [non-empty](#non-empty).

**Note:** Due to the definition of [document title](https://www.w3.org/TR/html5/single-page.html#dom-tree-accessors) this rule only applies to the first `<title>` element in the document, even if there are more `<title>` elements in the document.

### Expectation

The target element describes the topic or purpose of the overall content of the [document](https://www.w3.org/TR/dom/#concept-document).

## Assumptions

_There are no assumptions for this rule._

## Accessibility Support

- This rule assumes that browsers only recognize the first `<title>` element if multiple `<title>` elements are present in the [document](https://www.w3.org/TR/dom/#concept-document). Testing shows that this in general is the case. Therefore the scope of this rule is limited to only checking the first `<title>` element in a document.

## Background

- [Understanding Success Criterion 2.4.2: Page titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)
- This rule is testing [Technique G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G88)
- A prerequisite for this rule is that [Technique H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG21/Techniques/html/H25) is used for living up to 2.4.2 Page Titled

## Test Cases

### Passed

#### Passed example 1

The `<title>` element describes the content of the document.

```html
<html>
  <head>
    <title>Clementine harvesting season</title>
  </head>
  <body>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

#### Passed example 2

Two `<title>` elements where the first one describes the content of the document.

```html
<html>
  <head>
    <title>Clementine harvesting season</title>
    <title>Apple harvesting season</title>
  </head>
  <body>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

#### Passed example 3

Even though the descriptive `<title>` element is not placed within the `<head>` element that is the context the element can be used in [according to the HTML specification](https://www.w3.org/TR/html/document-metadata.html#the-title-element), the rule still passes, since the browser fixes it, and it doesn't cause any known accessibility issues.

```html
<html>
  <head>
  </head>
  <body>
    <title>Clementine harvesting season</title>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

### Failed

#### Failed example 1

`<title>` is not descriptive of the content of the document.

```html
<html>
  <head>
    <title>Apple harvesting season</title>
  </head>
  <body>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

### Failed example 2

Even though a correct `<title>` element is put in the `<head>` of the document, this rule only looks at the first `<title>` element.

```html
<html>
  <head>
    <title>Apple harvesting season</title>
    <title>Clementine harvesting season</title>
  </head>
  <body>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```


### Inapplicable

#### Inapplicable example 1

No `<title>` element present in document.

```html
<html>
  <head>
  </head>
  <body>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

#### Inapplicable example 2

`<title>` element present in document, but is empty.

```html
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

#### Inapplicable example 3

`<title>` element present in document, but does not meet the definition for [non-empty text string](#non-empty).

```html
<html>
  <head>
    <title>;)</title>
  </head>
  <body>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

#### Inapplicable example 4

This document has a `<title>` element but is inapplicable since the document element is an SVG <svg> element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is a circle</title>
  <circle cx="150" cy="75" r="50" fill="green"></circle>
</svg>
```

### Inapplicable example 5

First `<title>` element is empty

```html
<html>
  <head>
    <title></title>
    <title>Clementine harvesting season</title>
  </head>
  <body>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

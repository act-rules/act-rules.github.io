---
name: HTML Page has a title

description: |
  This rule checks that the HTML page has a title

success_criterion:
- 2.4.2 # Page Titled

test_aspects:
- DOM Tree

authors:
- Wilco Fiers
- Stein Erik Skotkjerra
- Bryn Anderson
- Anne Thyme Nørregaard
- Jey Nandakumar
---

## Test procedure

### Applicability

The rule applies to any page where the [root](https://www.w3.org/TR/dom41/#concept-tree-root) element is an `html` element, and which is not embedded in another page.

**Note**: Pages may be embedded inside other pages through elements such as iframes and object elements.

### Expectation 1

The [root](https://www.w3.org/TR/dom41/#concept-tree-root) element has at least one [descendant](https://www.w3.org/TR/dom41/#concept-tree-descendant) that is an HTML `title` element.

**Note**: The `title` element exists in other namespaces such as SVG. These are not HTML `title` elements and should be ignored for this rule.

### Expectation 2

The first `title` element contains [letters or numbers](#letters-or-numbers).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.4.2: Page Titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)
- [WCAG 2.1 Technique H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG21/Techniques/html/H25)


## Test Cases

### Passed

#### Passed example 1

This page has a `title`.

```html
<html>
  <title>This page has a title</title>
</html>
```

#### Passed example 2

This page give a `title` to an iframe.

```html
<html>
  <title>This page gives a title to an iframe</title>
  <iframe src="../test-assets/sc2-4-2-title-page-without-title.html"></iframe>
</html>
```

#### Passed example 3

This page has a `title`.

```html
<html>
  <head>
    <title>Title of the page.</title>
  </head>
  <body>
    <title>Title of the page.</title>
  </body>
</html>
```

#### Passed example 4

Valid `title` provided.

```html
<html>
  <body>
    <title>Title of the page.</title>
  </body>
</html>
```

#### Passed example 5

Valid `title` provided.

```html
<html>
  <head>
    <title>Title of the page.</title>
  </head>
  <body>
     <title></title> 
  </body>
</html>
```

### Failed

#### Failed example 1

This page has no `title`.

```html
<html>
  <h1>this page has no title</h1>
</html>
```

#### Failed example 2

Empty `title`.

```html
<html>
  <title></title>
</html>
```

#### Failed example 3

No `title` provided.

```html
<html>
  <iframe src="../test-assets/sc2-4-2-title-page-with-title.html"></iframe>
</html>
```

#### Failed example 4

Empty first `title`.

```html
<html>
  <head>
    <title></title>
  </head>
  <body>
    <title>Title of the page.</title>
  </body>
</html>
```

### Inapplicable

#### Inapplicable example 1

Not applicable to `svg` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

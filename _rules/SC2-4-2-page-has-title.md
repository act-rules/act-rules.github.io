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

The rule applies to any page where the root element is an `html` element, and which is not embedded in another page.

**Note**: Pages may be embedded inside other pages through elements such as iframes and object elements.

### Expectation 1

The page contains at least one `title` element.

**Note**: The `title` element exists in other namespaces such as SVG. These are not `title` elements for HTML document and should be ignored.

### Expectation 2

The first `title` element has [text nodes](https://www.w3.org/TR/dom/#text) that do not only have [whitespace](#whitespace).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)
- [https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=242#qr-navigation-mechanisms-title](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=242#qr-navigation-mechanisms-title)
- [https://www.w3.org/TR/WCAG20-TECHS/G88.html](https://www.w3.org/TR/WCAG20-TECHS/G88.html)
- [https://www.w3.org/TR/WCAG20-TECHS/H25.html](https://www.w3.org/TR/WCAG20-TECHS/H25.html)
- The WCAG 2.0 Techniques already contain examples and code snippets to illustrate which content passes or fails the test. Whenever possible {{site.title}} refers to those. Another source for test cases is the W3C Before and After Demonstration.

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

First `title` element does not only contain whitespace.

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

#### Passed example 6

`title` element does not only contain whitespace.

```html
<html>
  <body>
    <title>:-)</title>
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

#### Failed example 5

`title` only consist of whitespace.

```html
<html>
  <title> </title>
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

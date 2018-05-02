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

The first `title` element contains [non-empty text][].

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html
- https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=242#qr-navigation-mechanisms-title
- https://www.w3.org/TR/WCAG20-TECHS/G88.html
- https://www.w3.org/TR/WCAG20-TECHS/H25.html
- The WCAG 2.0 Techniques already contain examples and code snippets to illustrate which content passes or fails the test. Whenever possible auto-wcag refers to those. Another source for test cases is the W3C Before and After Demonstration.

## Test Cases

### Passed

```html
<html>
  <title>This page has a title</title>
</html>
```

```html
<html>
  <title>This page gives a title to an iframe</title>
  <iframe src="../test-assets/sc2-4-2-title-page-without-title.html"></iframe>
</html>
```

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

### Failed

```html
<html>
  <h1>this page has no title</h1>
</html>
```

```html
<html>
  <title> <!-- this page has an empty title --> </title>
</html>
```

```html
<html>
  <iframe src="../test-assets/sc2-4-2-title-page-with-title.html"></iframe>
</html>
```
### Inapplicable

```html
<svg>
  <title>This is an SVG</title>
</svg>
```

[non-empty text]: ../pages/algorithms/non-empty.html

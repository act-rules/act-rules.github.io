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

The rule applies to any page where the [document element](https://www.w3.org/TR/dom/#document-element) is an `html` element, and where the page is not embedded in another page.

**Note**: Pages may be embedded inside other pages through elements such as `iframe` and `object` elements.

### Expectation 1

The [document element](https://www.w3.org/TR/dom/#document-element) has at least one [descendant](https://www.w3.org/TR/dom41/#concept-tree-descendant) that is an HTML `title` element.

**Note**: The `title` element exists in other namespaces such as SVG. These are not HTML `title` elements and should be ignored for this rule.

### Expectation 2

The [child text content]() of the first HTML `title` element that is a [descendant](https://www.w3.org/TR/dom41/#concept-tree-descendant) of the [document element](https://www.w3.org/TR/dom/#document-element) does not only consist of [Unicode separator characters](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153).

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

This page has a `title` with content.

```html
<html>
  <title>This page has a title</title>
</html>
```

#### Passed example 2

This page gives a `title` to an iframe.

```html
<html>
  <title>This page gives a title to an iframe</title>
  <iframe src="../test-assets/sc2-4-2-title-page-without-title.html"></iframe>
</html>
```

#### Passed example 3

This page has two `title` elements.

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

The `title` is in the `body`.

```html
<html>
  <body>
    <title>Title of the page.</title>
  </body>
</html>
```

#### Passed example 5

The first `title` element has content.

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

The `title` only contains characters that are not letters or numbers.

```html
<html>
  <title>#$@&%*!</title>
</html>
```

### Failed

#### Failed example 1

The page has no `title`.

```html
<html>
  <h1>This page has no title</h1>
</html>
```

#### Failed example 2

The `title` element is empty.

```html
<html>
  <title></title>
</html>
```

#### Failed example 3

The page has no `title`.

```html
<html>
  <iframe src="../test-assets/sc2-4-2-title-page-with-title.html"></iframe>
</html>
```

#### Failed example 4

The first `title` element is empty.

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

The `title` only contains a separator character.

```html
<html>
  <title> </title>
</html>
```

### Inapplicable

#### Inapplicable example 1

This rule is not applicable to `svg` elements.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

---
name: CSS orientation lock via media queries

test_type: atomic

description: |
  This rule checks that page content is not locked to any specific display orientation, using CSS media queries.

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Audrey Maniez
- Jey Nandakumar
---

## Test Procedure

### Applicability

The rule applies to any `element` that is [visible](#visible) and [included in the accessibility tree](#included-in-the-accessibility-tree) of the [page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) that is not embedded.

**Note:** Pages may be embedded inside other pages through elements such as `iframes` and `object` elements.

### Expectation

Each target element does not have any `css` applied, that locks the page content to a preferred orientation.

## Assumptions

* This test assumes that a specific display orientation is not [essential](https://www.w3.org/TR/WCAG21/#dfn-essential), which is listed as a valid exception to [SC 1.3.4]((https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)). Examples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where binary display orientation is not applicable.

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 1.3.4: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)
- [Managing screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [MDN Orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation)

## Test Cases

### Passed

#### Passed example 1

A page that has no `CSS media queries` that targets the orientation.

```html
<html lang="en">
  <head>
    <style>
      html {
        font-size: 22px;
      }
    </style>
  </head>
  <body>
    Page Content
  </body>
</html>
```

#### Passed example 2

A page, where a set of `CSS media queries` negate the `orientation` lock, given the order of CSS specificity.

```html
<html lang="en">
  <head>
    <!--
      1. The style from the relative stylesheet applies `transform: rotate(90deg)`
    -->
    <link rel="stylesheet" href="../test-assets/YK5Xgq-html-css-lock.css">
    <!--
      2. The below style negates the orientation lock
    -->
    <style>
      @media (orientation: portrait) {
        body {
          transform: rotate(-90deg);
        }
      }
    </style>
  </head>
  <body>
    <main>
      Page Content
    </main>
  </body>
</html>
```

### Failed

#### Failed example 1

A page, where orientation is locked by applying `transform` style on `portrait` media query (coming from a relative stylesheet).

```html
<html lang="en">
  <head>
    <!--
      1. The style from the relative stylesheet applies `transform: rotate(90deg)`
    -->
    <link rel="stylesheet" href="../test-assets/YK5Xgq-html-css-lock.css">
  </head>
  <body>
      Page Content
  </body>
</html>
```

#### Failed example 2

A page, where orientation is locked via `style` specified on the `head`.

```html
<html lang="en">
  <head>
    <!--
      1. The style from the stylesheet applies `transform`
    -->
    <style>
      @media (orientation: portrait) {
        body {
          transform: rotate(-90deg);
        }
      }
    </style>
  </head>
  <body>
      Page Content
  </body>
</html>
```

### Inapplicable

#### Inapplicable example 1

A page where there are no `stylesheets`, or any `styles` that can modify the base style.

```html
<html lang="en">
  <body>
    I am a simple page
  </body>
</html>
```
---
id: b33eff
name: Page has no orientation lock specified using CSS media queries
rule_type: atomic
description: |
  This rule checks that page content is not locked to any single display orientation using CSS media queries.
accessibility_requirements:
 wcag20:1.3.4: # Orientation
  forConformance: true
  failed: not satisfied
  passed: further testing needed
  inapplicable: further testing needed
input_aspects:
- DOM Tree
- CSS Styling
authors:
- Jey Nandakumar
- Audrey Maniez
---

## Applicability

The rule applies to any element that is [visible](#visible) and has a CSS `transform` property with a [rotate](https://drafts.csswg.org/css-transforms/#funcdef-transform-rotate) transform-function, set from a CSS media query with an [orientation](https://drafts.csswg.org/mediaqueries-3/#orientation) media feature (`landscape` or `portrait`).

## Expectation

Each target element is not restricted to a single display orientation using CSS rotate transform-function, whose value is a multiple of 90 degrees but not a multiple of 180 degrees.

## Assumptions

- The rule does not consider elements for which a particular display orientation is [essential](https://www.w3.org/TR/WCAG21/#dfn-essential).
- The rule does not consider the existence of any control on the page that can change the orientation on demand.

## Accessibility Support

*There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 1.3.4: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)
- [Managing screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [MDN Orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation)

## Test Cases

### Passed

#### Passed Example 1

A page, where CSS media query styles does not lock orientation. The CSS rotate transform-function value is a multiple of 180 degrees.

```html
<html lang="en">
  <head>
    <style>
      @media (orientation: portrait) {
        body {
          transform: rotate(-360deg);
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

#### Passed Example 2

A page, where CSS media query styles do not lock orientation. The CSS rotate transform-function value from the stylesheet is overridden to a value of 180 degrees.

```html
<html lang="en">
  <head>
    <!--
      1. The style from the relative stylesheet applies `transform: rotate(90deg)`
    -->
    <link rel="stylesheet" href="../test-assets/css-orientation-lock-media-queries-b33eff/html-css-lock.css">
    <!--
      2. Override the value from the stylesheet
    -->
    <style>
      @media (orientation: portrait) {
        html {
          transform: rotate(-180deg);
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

#### Failed Example 1

A page, where orientation is locked by applying `transform` property on `portrait` media query (coming from a relative stylesheet).

```html
<html lang="en">
  <head>
    <!--
      1. The style from the relative stylesheet applies `transform: rotate(90deg)`
    -->
    <link rel="stylesheet" href="../test-assets/css-orientation-lock-media-queries-b33eff/html-css-lock.css">
  </head>
  <body>
      Page Content
  </body>
</html>
```

#### Failed Example 2

A page, where orientation is locked via `style` specified in the `head`.

```html
<html lang="en">
  <head>
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

#### Inapplicable Example 1

A page where there are no styles.

```html
<html lang="en">
  <body>
    I am a page with no styles
  </body>
</html>
```

#### Inapplicable Example 2

A page that has CSS media query styles, but media feature not targeting `orientation`.

```html
<html lang="en">
  <head>
    <style>
      html {
        font-size: 22px;
      }
      @media (min-width: 30em) { 
        font-size: 100%;
      }
    </style>
  </head>
  <body>
    Page Content
  </body>
</html>
```

#### Inapplicable Example 3

A page, where CSS media query styles targeting `orientation` is applied to an element that is not visible.

```html
<html lang="en">
  <head>
    <style>
      @media (orientation: lanscape) {
        body {
          transform: rotate(270deg);
        }
      }
    </style>
  </head>
  <body style="display:none;">
    <main>
      Page Content
    </main>
  </body>
</html>
```

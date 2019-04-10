---
name: Page has no orientation lock specified using CSS media queries

rule_type: atomic

description: |
  This rule checks that page content is not locked to any specific display orientation using CSS media queries, and the content is operable in all display orientations.

success_criterion:
- 1.3.4 # (Orientation)

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Jey Nandakumar
- Audrey Maniez
---

## Test Procedure

### Applicability

The rule applies to any `element` that is [visible](#visible).

### Expectation

Each target element does not have any `CSS` media queries applied, that locks the page content to a specific display orientation.

**Note:** Examples where a particular display orientation may be [essential](https://www.w3.org/TR/WCAG21/#dfn-essential) are a bank check, a piano application, slides for a projector or television, or virtual reality content where binary display orientation is not applicable.

## Assumptions

- The rule does not take consider existence of any control on the page that can handle or change the orientation on demand.

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
    <link rel="stylesheet" href="../test-assets/html-css-lock.css">
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

#### Passed example 3 

A page where there are no `stylesheets`, or any `styles`.

```html
<html lang="en">
  <body>
    I am a page with no styles
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
    <link rel="stylesheet" href="../test-assets/html-css-lock.css">
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

A page where `body` is not visible.

```html
<html lang="en">
  <body style="display: none">
    I am hidden
  </body>
</html>
```
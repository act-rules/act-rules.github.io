---
id: b33eff
name: Page has no orientation lock specified using CSS media queries
rule_type: atomic
description: |
  This rule checks that page content is not locked to any specific display orientation using CSS media queries, and the content is operable in all display orientations.
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

The rule applies to any `element` that is [visible](#visible) and has CSS media query styles targeting the display orientation.

## Expectation

Each target element does not restrict its view and operation to a single display orientation, unless a specific display orientation is [essential](https://www.w3.org/TR/WCAG21/#dfn-essential).

**Note:** Examples where a particular display orientation may be [essential](https://www.w3.org/TR/WCAG21/#dfn-essential) are a bank check, a piano application, slides for a projector or television, or virtual reality content where binary display orientation is not applicable.

## Assumptions

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

A page, where CSS media query styles negate orientation lock, and therefore does not restrict its view or operation.

```html
<html lang="en">
  <head>
    <!--
      1. The style from the relative stylesheet applies `transform: rotate(90deg)`
    -->
    <link rel="stylesheet" href="../test-assets/css-orientation-lock-media-queries-b33eff/html-css-lock.css">
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

#### Passed Example 2

A page (piano application), where orientation lock is essential.

```html
<html lang="en">
  <head>
    <style>
      @media (orientation: portrait) {
        body {
          transform: rotate(90deg);
        }
      }
    </style>
  </head>
  <body>
    <main>
      <!-- piano application -->
    </main>
  </body>
</html>
```

### Failed

#### Failed Example 1

A page, where orientation is locked by applying `transform` style on `portrait` media query (coming from a relative stylesheet).

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

A page, where orientation is locked via `style` specified on the `head`.

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

A page that has no CSS media query styles.

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

#### Inapplicable Example 3

A page, where CSS media query styles targeting orientation lock is applied to an element that is not visible.

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

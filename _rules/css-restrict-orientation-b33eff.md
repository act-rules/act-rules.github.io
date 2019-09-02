---
id: b33eff
name: Page is not restricted to either `landscape` or `portrait` orientation using CSS transform property
rule_type: atomic
description: |
  This rule checks that page content is not restricted to either `landscape` or `portrait` orientation using CSS transform property.
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

The rule applies to any element that is [visible](#visible) and has a CSS [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) property with any of the below [transformation functions](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function)

- [rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate)
- [rotate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d)
- [rotateX](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateX)
- [rotateY](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY)
- [rotateZ](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateZ)
- [matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)
- [matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d)

that are applied conditionally on the [orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation) [media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) with a value of `landscape` or `portrait`.

**Note:** These specific [transformation functions](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) are of interest to this rule as they have the potential to affect the [rotation](https://drafts.csswg.org/css-transforms-2/#Rotate3dDefined) of a given element.

## Expectation 

The target element is neither rotated clockwise nor counter clockwise around the Z-axis at an angle corresponding to 90 degrees relative from the position of the element in `landscape` orientation to the position of the element in `portrait` orientation.

## Assumptions

- The rule does not consider elements for which a particular display orientation is [essential](https://www.w3.org/TR/WCAG21/#dfn-essential).
- The rule does not consider the existence of any control on the page that can change the orientation on demand.

## Accessibility Support

*There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 1.3.4: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)
- [Managing screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [MDN Orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation)
- [The Transform Rendering Model](https://drafts.csswg.org/css-transforms/#transform-rendering)

## Test Cases

### Passed

#### Passed Example 1

A page where CSS [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) property is conditionally applied on the [orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation) [media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features), but does not have any of the applicable [transformation functions](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) which restricts the element to either `landspace` or `portrait` orientation.

```html
<html lang="en">
  <head>
    <style>
      @media (orientation: portrait) {
        body {
          transform: translateX(100px);
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

A page where CSS [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) property has [rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate) [transform function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) conditionally applied on the [orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation) [media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) which does not restricts the element to either `portrait` or `landscape` orientation.

```html
<html lang="en">
  <head>
    <style>
      @media (orientation: portrait) {
        html {
          transform: rotate(1turn)
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

#### Passed Example 3

A page where CSS [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) property has [matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix) [transform function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) conditionally applied on the [orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation) [media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) which does not restricts the element to either `portrait` or `landscape` orientation.

```html
<html lang="en">
  <head>
    <style>
      @media (orientation: portrait) {
        html {
          transform: matrix(1, -1.22465e-15, 1.22465e-15, 1, 0, 0);
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

#### Passed Example 4

A page where CSS [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) property has [rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate) [transform function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) conditionally applied on the [orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation) [media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) which matches the default CSS [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) applied on the target element.

```html
<html lang="en">
  <head>
    <style>
      body {
        transform: rotate(90deg);
      }
      @media (orientation: portrait) {
        body {
          transform: rotate(90deg);
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

A page where CSS [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) property has [rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate) [transform function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) conditionally applied on the [orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation) [media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) which restricts the element to `landscape` orientation.

```html
<html lang="en">
  <head>
    <link rel="stylesheet" href="../test-assets/b33eff/style.css">
  </head>
  <body>
      Page Content
  </body>
</html>
```

#### Failed Example 2

A page where CSS [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) property has [matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix) [transform function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) conditionally applied on the [orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation) [media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) which restricts the element to `portrait` orientation.

```html
<html lang="en">
  <head>
    <style>
      @media (orientation: landscape) {
        body {
          transform: matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0);
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

A page where there are CSS styles.

```html
<html lang="en">
  <body>
    I am a page with no styles
  </body>
</html>
```

#### Inapplicable Example 2

A page that has no CSS [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) property specified.

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

A page where CSS [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) property is applied to an element that is not [visible](#visible).

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
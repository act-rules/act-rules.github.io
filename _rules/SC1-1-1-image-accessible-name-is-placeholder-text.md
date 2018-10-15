---
name: Image accessible name is placeholder text
description: |
  This rule checks that image elements that use generic placeholder text as their accessible name do so without loss of infomation to the user.

success_criterion:
- 1.1.1 # Non-text Content

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Bryn Anderson
---

### Applicability

The rule applies to HTML `input type="image"` or `area` elements, or any HTML element with the semantic role of `img`, where the element is [exposed to assistive technologies](#exposed-to-assistive-technologies) and has an [accessible name](#accessible-name) that exclusively uses [generic placeholder text](#generic-placeholder-text).

### Expectation

Each test target has an accessible name that can be used in place of the [non-text content](https://www.w3.org/TR/WCAG21/#dfn-non-text-content) of the element without loss of information to the user.

## Assumptions

*There are currently no assumptions.*

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

- [https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/TR/WCAG20-TECHS/F30.html)

## Test Cases

### Pass example 1

The element's accessible name uses generic placeholder text which accurately describes the image.

```html
<img alt="oage"> (need a source file)
```

### Failure example 1

The element's accessible name uses generic placeholder text which does not accurately describes the image.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg.png" alt="image">
```

### Inapplicable example 1

The image is marked decorative with `alt=""`.

```html
<img src="/background.png" alt="">
```

### Inapplicable example 2

The image is marked decorative with `role="presentation"`.

```html
<img src="/background.png" role="presentation">
```

### Inapplicable example 3

The image `alt` value uses generic placeholder but is overidden by the `aria-label` value which takes precedence in the accessible name calculation.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="image" aria-label="modanna lily">
```

---
name: Image accessible name is placeholder text
description: |
  This rule checks that the accessible name of an image is not a generic placeholder text.

success_criterion:
- 1.1.1 # Non-text Content

test_aspects
- DOM Tree
- CSS Styling

authors:
- Bryn Anderson
---

### Applicability

The rule applies to HTML `input type="image" `and `area` elements or any HTML element with the semantic role of `img` [exposed to assistive technologies](#exposed-to-assistive-technologies), with a [non-empty](#non-empty) [accessible name](#accessible-name).

### Expectation

Each test target accessible name does not use [placeholder text](#placeholder-text) to describe the purpose of the image.

## Assumptions

*There are currently no assumptions.*

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

[Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/TR/WCAG20-TECHS/F30.html)

## Test Cases

### Pass example 1

Accessible name text acurately describing the image.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/weather.png" alt="sun amd cloud weather graphic">
```

### Failure example 1

Generic accessible name text that does not describe the purpose of the image.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg.png" alt="image">
```

### Inapplicable example 1

Marked decorative with `alt=""`.

```html
<img src="/background.png" alt="">
```

### Inapplicable example 2

Marked decorative with `role="presentation"`.

```html
<img src="/background.png" role="presentation">
```

### Inapplicable example 3

The `img` alt uses generic placeholder text but is overridden by `aria-label` which accurately describes the image.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="image" aria-label="modanna lily">
```

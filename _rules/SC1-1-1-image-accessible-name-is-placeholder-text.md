---
name: Placeholder text is valid accessible name
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

he rule applies to any HTML `input` element with a [`type`](https://www.w3.org/TR/html/sec-forms.html#dom-htmlinputelement-type) of `image`, or any HTML element with the [semantic role](#semantic-role) of `img`, that has an [accessible name](#accessible-name) that uses [generic placeholder text](#generic-placeholder-text).

### Expectation

Each test target has an accessible name that serves an equivalent purpose to the [non-text content](https://www.w3.org/TR/WCAG21/#dfn-non-text-content).

## Assumptions

*There are currently no assumptions.*

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

- [https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/TR/WCAG20-TECHS/F30.html)

## Test Cases

### Passed

#### Passed example 1

The element's accessible name uses generic placeholder text which accurately describes the image.

```html
<img alt="oage"> (need a source file)
```

### Failed

#### Failed example 1

The element's accessible name uses generic placeholder text which does not accurately describes the image.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg.png" alt="image">
```

### Inapplicable

#### Inapplicable example 1

The image is marked decorative with `alt=""`.

```html
<img src="/background.png" alt="">
```

#### Inapplicable example 2

The image is marked decorative with `role="presentation"`.

```html
<img src="/background.png" role="presentation">
```

#### Inapplicable example 3

The image `alt` value uses generic placeholder but is overidden by the `aria-label` value which takes precedence in the accessible name calculation.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="image" aria-label="modanna lily">
```

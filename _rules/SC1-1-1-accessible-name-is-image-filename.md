---
name: Image accessible name is filename
description: |
  This rule checks that image elements that use their source filename as their accessible name do so without loss of infomation to the user.

success_criterion:
- 1.1.1 # Non-Text Content

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Bryn Anderson
---

## Test procedure

### Applicability

The rule applies to HTML `input type="image"` or `area` elements, or any HTML element with the semantic role of `img`, where the element is [exposed to assistive technologies](#exposed-to-assistive-technologies) and has an [accessible name](#accessible-name) that matches the filename specified in the `src` attribute.

**Note**: URL query strings, difference in letter casing, and forward and trailing whitespace should be ignored. For example `src="/foo/bar.jpg?baz "` has a filename `bar.jpg`.

### Expectation

Each test target has an accessible name that can be used in place of the [non-text content](https://www.w3.org/TR/WCAG21/#dfn-non-text-content) of the element without loss of information to the user.

## Assumptions

*There are currently no assumptions*

## Accessibility support

 *There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F30)

## Test Cases

### Pass example 1

The element's accessible name matches the image filename which accurately describes the image.

```html
<img scr="https://www.w3.org/WAI/demos/bad/img/w3c" alt="w3c">
```

### Failure example 1

The element's accessible name matches the image filename which does not acurately describe the image.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="teaser_right2.jpg">
```

### Inapplicable example 1

The image is not exposed to assistive technologies.

```html
<img role="presentation">
```
### Inapplicable example 2

The image is not exposed to assisstive technologies.

```html
<img alt="">
```

### Inapplicable example 3

The image accessible name does not contain the image filename.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="modanna lily">
```

### Inapplicable example 4

The image `alt` attribute matches the filename but is overidden by the `aria-label` value which takes precedence in the accessible name calculation.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="teaser_right2.jpg" aria-label="modanna lily">
```

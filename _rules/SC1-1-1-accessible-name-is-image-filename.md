---
name: image accessible name is image filename
description: |
  This rule checks that `img` elements that use their source filename as their accessible name, do so without loss of infomation to the user.

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

The rule applies to HTML `input type="image" `and `area` elements or any HTML element with the semantic role of `img` [exposed to assistive technologies](#exposed-to-assistive-technologies), where the [accessible name](#accessible-name) value exactly matches the filename specified in the `src` attribute.

**Note**: URL query strings, case sensitivey, forward and trailing whitespace should be ignored. For example `src="/foo/bar.jpg?baz "` has a file name "bar.jpg".

### Expectation

Each test target accessible name can be used in place of the elements non-text content without loss of information to the user.

## Assumptions

*There are currently no assumptions*

## Accessibility support

 *There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F30)

## Test Cases

### Pass example 1

The `img` element's accessible name acurately describes the image.

```html
<img scr="https://www.w3.org/WAI/demos/bad/img/w3c.png" alt="w3c">
```

### Failure example 1

The `img` element's accessible name matches the image's filename which does not acurately describe the image.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="teaser_right2.jpg">
```

### Inapplicable example 1

Mot exposed to assisstive technologies.

```html
<img role="presentation">
```
### Inapplicable example 2

Image is not exposed to assisstive technologies.

```html
<img alt="">
```

### Inapplicable example 3

Image accessible name does not contain the image filename.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="modanna lily">
```

### Inapplicable example 4

The `img` which does not accurately describe the image but is overridden by `aria-label` which does accurately describe the image.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="teaser_right2.jpg" aria-label="modanna lily">
```

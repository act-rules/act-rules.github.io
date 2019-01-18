---
name: Image accessible name is filename
description: |
  This rule checks that image elements that use their source filename as their accessible name do so without loss of information to the user.

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

The rule applies to any HTML `input` element with a [`type`](https://www.w3.org/TR/html/sec-forms.html#dom-htmlinputelement-type) of `image`, or any HTML element with the [semantic role](#semantic-role) of `img` that has a `src` attribute. Applicable elements are [non-decorative](#decorative), [included in the accessibility tree](#included-in-the-accessibility-tree), and have an [accessible name](#accessible-name) that is equivalent to the [filename](#filename) specified in the `src` attribute. Difference in letter casing, and forward and trailing whitespace should be ignored.

### Expectation

Each test target has an accessible name that serves only an equivalent purpose of the [non-text content](https://www.w3.org/TR/WCAG21/#dfn-non-text-content).

## Assumptions

*There are currently no assumptions*

## Accessibility support

 *There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F30)

## Test Cases

### Pass example 1

The `img` element's accessible name uses the filename which accurately describes the image.

```html
<img src="https://www.w3.org/WAI/demos/bad/img/w3c" alt="w3c">
```

### Pass example 2

The `input` element with a `type` of `image` has an accessible name that uses the filename which accurately describes the image.

```html
<input type="image" src="https://www.w3.org/WAI/demos/bad/img/w3c.png" alt="W3C">
```

### Failure example 1

The `img` element's accessible name matches the image filename which does not accurately describe the image.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="teaser_right2">
```

### Failure example 2

The `input` element with a `type` of `image` has an accessible name that uses the filename which does not accurately describes the image.

```html
<input type="image" src="https://www.w3.org/WAI/demos/bad/before/img/top_weather.gif" alt="top_weather">
```

### Failure example 3

The `img` element's accessible name matches the image filename. In this example the file extension is redundant and results in the accessible name not accurately describing the image.

```html
<img src="https://www.w3.org/WAI/demos/bad/img/w3c.png" alt="w3c.png">
```

### Inapplicable example 1

The `img` element is not exposed to assistive technologies.

```html
<img role="presentation">
```
### Inapplicable example 2

The `img` element is not exposed to assisstive technologies.

```html
<img alt="">
```

### Inapplicable example 3

The `img` element's accessible name does not contain the image filename.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="modanna lily">
```

### Inapplicable example 4

The `img` element's `alt` attribute matches the filename but is overidden by the `aria-label` value which takes precedence in the accessible name calculation.

```html
<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="teaser_right2.jpg" aria-label="modanna lily">
```

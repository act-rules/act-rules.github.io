---
name: accessible name is image file name
description: |
  This rule checks that the accessible name of an image is not its file name.

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
The rule applies to any HTML `img` element that is exposed to assistive technologies, where the `alt` attribute of the element contains the file name specified in the `src` attribute of the element.

### Expectation
Each test target has an `alt` attribute that serves as an appropriate text alternative as described in [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/TR/WCAG20-TECHS/F30.html).

## Assumptions

*There are currently no assumptions*

## Accessibility support

 *There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F30)

## Test Cases

### Pass example 1

Image depicting a PDF file format, uses the .pdf extension in the accessible name.

```html
<img scr="/example.pdf" alt="an example of a .pdf file">
```

### Failure example 1

The accessible name is the image file name and does not serve as an appropriate text alternative.

```html
<img src="/image.jpg" alt="image.jpg file">
```

### Inapplicable example 1

Mot exposed to assisstive technologies.

```html
<img role="presentation">
```
### Inapplicable example 1

Image is not exposed to assisstive technologies.

```html
<img src="/image.jpg" alt="">

```
### Inapplicable example 2

Image alt does not contain the image filename.

```html
<img src="/image.jpg" alt="blue sky">
```

---
name: Image accessibile name uses placeholder text
description: |
	This rule checks that a set of images with identical accessible names do not use generic placeholder text to describe the purpose of the image.

success_criterion:
- 1.1.1 # Non-text Content

test_aspects
- DOM Tree
- CSS Styling

authors:
- Bryn Anderson
---

### Applicability

The rule applies to any set of `img` elements, exposed to assistive technologies, that have an identical accessible name defined in either  the `title`, `alt`, or `aria-label` attributes.

**Note**: Leading and trailing whitespace and difference in case sensitivity should be ignored.

### Expectation

Each test target accessible name acurately describes the purpose of the image.

## Assumptions

*There are currently no assumptions*

## Accessibility support

There is a known combination of a popular browser and assistive technology that does not by default support `title` as an accessible name.

## Background

[Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/TR/WCAG20-TECHS/F30.html)

## Test Cases

### Pass example 1

Identical alt text acurately describing the purpose of the image.

```html
<img src="/twitter_largeicon.png" alt="twitter">
<img src="/twitter_smallicon.png" alt="twitter">
```

### Failure example 1

Identical generic alt text that does not describe the purpose of either image.

```html
<img src="/twitter_largeicon.png" alt="image">
<img src="/twitter_smallicon.png" alt="image">
```

### Inapplicable example 1

Marked decorative with alt attribute

```html
<img src="/background.png" alt="">
```

### Inapplicable example 2

Marked decorative with role="presentation"

```html
<img src="/background.png" role="presentation">
```

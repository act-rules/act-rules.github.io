---
name: Image accessibile name is placeholder text
description: |
	This rule checks for images that use generic placeholder text.

success_criterion:
- 1.1.1 # Non-text Content

test_aspects
- DOM Tree
- CSS Styling

authors:
- Bryn Anderson
---

### Applicability

The rule applies to any HTML `img` element that is exposed to assistive technologies, where the element has a non-empty `alt` attribute that is equal to the accessible name of the element.

### Expectation

Each test target has an `alt` attribute that does not use [placeholder text](#placeholder-text) to describe the purpose of the image.

## Assumptions

This rule assumes that an authoring tool has been used to publish image content and that image `alt` attributes of published content can be populated with generic placeholder text when not otherwise specified.

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

[Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/TR/WCAG20-TECHS/F30.html)

## Test Cases

### Pass example 1

alt text acurately describing the the image of a Twitter icon.

```html
<img src="/twitter_largeicon.png" alt="twitter">
```

### Failure example 1

Generic alt text that does not describe the purpose of the image.

```html
<img src="/twitter_largeicon.png" alt="image">
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

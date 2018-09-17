---
name: Image accessibile name uses placeholder text
description: |
	This rule checks a set of images accessible names for duplicate placholder text.

success_criterion:
- 1.1.1 # Non-text Content

test_aspects
- DOM Tree
- CSS Styling

authors:
- Bryn Anderson
---

### Applicability

The rule applies to any set of `img` elements, exposed to assistive technologies, that habe an identical accessible name defined in either  the `title`, `alt`, or `aria-label` attributes.

### Expectation

Each test target accessible name acurately describes the purpose of teh image.

**Note**: Leading and trailing whitespace and difference in case sensitivity should be ignored.

## Assumptions

*There are currently no assumptions*

## Accessibility support

There is a known combination of a popular browser and assistive technology that does not by default support `title` as an accessible name.

## Background

## Test Cases

### Pass example 1

Desc...

```html
<a href="https://twitter.com/brynanders"> <img src="/twitter_largeicon.png" alt="twitter"> </a>
<a href="https://twitter.com/brynanders"> <img src="/twitter_smallicon.png" alt="twitter"> </a>
```

### Pass example 2

Desc...

```html

```

### Failure example 1

Desc...
```html

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

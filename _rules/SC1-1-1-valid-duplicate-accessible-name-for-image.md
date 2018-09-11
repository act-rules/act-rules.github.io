---
name: Valid use of duplicate accessible names for images
description: |
	This rule checks that there is a valid reason for having a set of images with identical accessible names.

success_criterion:
- 1.1.1 # Non-text Content

test_aspects
- DOM Tree
- CSS Styling

authors:
- Bryn Anderson
---

### Applicability

The rule applies to any set of HTML or SVG element with the semantic role of `img`, in a document, exposed to assistive technologies, that have an identical [accessible name]().

### Expectation

Each test target has an identical purpose.

**Note**: Leading and trailing whitespace and difference in case sensitivity should be ignored.

## Assumptions

*There are currently no assumptions*

## Accessibility support

There is a known combination of a popular browser and assistive technology that does not by default support `title` as an accessible name.

## Background

## Test Cases

### Pass example 1

Image A and Image B are different files but have an identical purpose stated in the alt attribute and serve the same purpose linking to the same destination.

```html
<a href="https://twitter.com/brynanders"> <img src="/twitter_largeicon.png" alt="My twitter feed"> </a>
<a href="https://twitter.com/brynanders"> <img src="/twitter_smallicon.png" alt="My twitter feed"> </a>
```

### Pass example 2

Div A and B serve the same purpose but use the different image files to display a different version of the same informative image. Both files have an identical accessible name stated in the aria-label attribute.

```html
<div id="A" role="img" aria-label="blue sky" style="background-image:url('background1.jpg')"> </div>
<div id="B" role="img" aria-label="blue sky" style="background-image:url('background2.jpg')"> </div>
```

### Failure example 1

Image A and Image B are different files, have identical alt attributes but go to different destinations. 

```html
<a href="https://twitter.com/brynanders"> <img src="/twitter_largeicon.png" alt="Twitter"> </a>
<a href="https://twitter.com"> <img src="/twitter_smallicon.png" alt="twitter"> </a>
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

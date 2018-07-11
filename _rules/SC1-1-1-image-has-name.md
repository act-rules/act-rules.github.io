---
name: Image has accessible name
description: |
  Each image that is not marked as decorative, has an [accessible name](#accessible-name)

success_criterion:
- 1.1.1 # Non-Text Content

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
- Stein Erik Skotkjerra
---

## Test procedure

### Applicability

The rule applies to any HTML element with the [semantic role](#semantic-role) of `image` that is [exposed to assistive technologies](#exposed-to-assistive-technologies).

**NOTE**: Any image marked as decorative, by using either `role="presentation"`, `role="none"` or an empty `alt` attribute, does not have the role of `image` according to [ARIA in HTML](https://www.w3.org/TR/html-aria/#img-alt).

### Expectation

Each target element has an [accessible name](#accessible-name) that is [non-empty](#non-empty).

## Accessibility Support

There is a known combinations of a popular browser and assistive technology that does not by default support `title` as an [accessible name](#accessible-name).

Certain assistive technologies can be set up to ignore the `title` attribute, which means that to some users the `title` attribute will not act as an accessible name.

## Background
- [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G94)
- [G95: Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G95)
- [H37: Using alt attributes on img elements](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H37)
- [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA6)
- [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA10)
- [H67: Using null alt text and no title attribute on img elements for images that AT should ignore](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H67)
- [F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F38) 
- [F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F65)

## Test cases

### Passed

```html
<!-- accessible name -->
<img alt="W3C logo" />
```

```html
<!-- non-image element with image role and accessible name -->
<div role="image" aria-label="W3C logo"></div>
```

```html
<!-- accessible name but not always supported -->
<img title="W3C logo" />
```

### Failed
```html
<!-- no accessible name -->
<img />
```

```html
<!-- non-image element with image role but no accessible name -->
<div role="image"></div>
```

```html
<!-- image element inside a div positioned off screen with no accessible name -->
<div style="margin-left:-9999px;"><img /></div>
```

### Inapplicable

```html
<!-- decorative image -->
<img alt="" />
```

```html
<!-- decorative image -->
<img role="presentation" />
```

```html
<!-- non-image element -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

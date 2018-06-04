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

## Assumptions

_There are currently no assumptions_

## Accessibility Support

Certain assistive technologies can be set up to ignore the `title` attribute, which means that to some users the `title` attribute will not act as an [accessible name](#accessible-name).

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
<img alt="W3C logo" />
```

```html
<div role="image" aria-label="W3C logo"></div>
```

```html
<img title="W3C logo" />
```

### Failed
```html
<img />
```

```html
<div role="image"></div>
```

```html
<div style="margin-left:-9999px;"><img /></div>
```

### Inapplicable

```html
<img alt="" />
```

```html
<img alt="" title="W3C logo" />
```

```html
<img role="presentation" />
```

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```
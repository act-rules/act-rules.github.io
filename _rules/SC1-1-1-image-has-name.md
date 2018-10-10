---
name: Image has accessible name
description: |
  Each image that is not marked as decorative, has an accessible name

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

The rule applies to HTML `img` elements or any HTML element with the [semantic role](#semantic-role) of `img` that is [exposed to assistive technologies](#exposed-to-assistive-technologies).

### Expectation

Each target element has an [accessible name](#accessible-name) that is [non-empty](#non-empty) or is marked as [decorative](#decorative).

**NOTE**: An `img` element can be marked as decorative, by using either `role="presentation"`, `role="none"` or an empty alt attribute `alt=""`.

## Accessibility Support

There is a known combination of a popular browser and assistive technology that does not by default support `title` as an [accessible name](#accessible-name).

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

#### Passed example 1

Image has accessible name

```html
<img alt="W3C logo" />
```

#### Passed example 2

Non-image element with image role and accessible name

```html
<div role="img" aria-label="W3C logo"></div>
```

#### Passed example 3

Accessible name but not always supported.

```html
<img title="W3C logo" />
```

### Failed

#### Failed example 1

No accessible name

```html
<img />
```

#### Failed example 2

Non-image element with image role but no accessible name.
```html
<div role="img"></div>
```

#### Failed example 3

Image element inside a div positioned off screen with no accessible name.
```html
<div style="margin-left:-9999px;"><img /></div>
```

### Inapplicable

#### Inapplicable example 1

decorative image.

```html
<img alt="" />
```

#### Inapplicable example 2

decorative image.

```html
<img role="presentation" />
```

#### Inapplicable example 3

`img` element with no role.

```html
<img role="none" />
```

#### Inapplicable example 4

Non-image element.

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

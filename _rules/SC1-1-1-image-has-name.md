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

The rule applies to HTML `img` elements or any HTML element with the [semantic role](#semantic-role) of `img` that is [included in the accessibility tree](#included-in-the-accessibility-tree).

### Expectation

Each target element has an [accessible name](#accessible-name) that is [non-empty](#non-empty) or is marked as [decorative](#decorative).

**NOTE**: An `img` element can be marked as decorative, by using either `role="presentation"`, `role="none"` or an empty alt attribute `alt=""`.

## Assumptions 

_There are currently no assumptions._

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

HTML `img` element has accessible name

```html
<img alt="W3C logo" />
```

#### Passed example 2

Element with role of `img` and accessible name

```html
<div role="img" aria-label="W3C logo"></div>
```

#### Passed example 3

Accessible name but not always accessibility supported

```html
<img title="W3C logo" />
```

#### Passed example 4

HTML `img` element marked as [decorative](#decorative) through empty `alt` attribute

```html
<img alt="" />
```

#### Passed example 5

HTML `img` element marked as [decorative](#decorative) through `role="presentation"`

```html
<img role="presentation" />
```

#### Passed example 6

HTML `img` element marked as [decorative](#decorative) through `role="none"`

```html
<img role="none" />
```

### Failed

#### Failed example 1

HTML `img` element that is not marked as [decorative](#decorative) and does not have accessible name

```html
<img />
```

#### Failed example 2

Element with role of `img` but no accessible name

```html
<div role="img"></div>
```

#### Failed example 3

Image element inside a `div` positioned off screen with no accessible name and is not marked as [decorative](#decorative)

```html
<div style="margin-left:-9999px;"><img /></div>
```

### Inapplicable

#### Inapplicable example 1

Element is not an HTML element

```html
 <svg xmlns="http://www.w3.org/2000/svg" role="img" width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

#### Inapplicable example 2

Element with [semantic role](#semantic-role) of `img` is not [included in the accessibility tree](#included-in-the-accessibility-tree)

```html
<div role="img" aria-hidden="true"></div>
```

#### Inapplicable example 3

HTML `img` element is not [included in the accessibility tree](#included-in-the-accessibility-tree) 

```html
<img alt="W3C logo" aria-hidden="true" />
```

#### Inapplicable example 4

The element is not a `img` element

```html
<div aria-label="W3C logo"></div>
```

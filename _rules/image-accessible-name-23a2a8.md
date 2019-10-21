---
id: 23a2a8
name: Image has accessible name
rule_type: atomic
description: |
  This rule checks that each image that is not marked as decorative, has an accessible name.
accessibility_requirements:
  wcag20:1.1.1: # Non-Text Content
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
authors:
  - Anne Thyme Nørregaard
  - Stein Erik Skotkjerra
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'alt-require'
---

## Applicability

The rule applies to HTML `img` elements or any HTML element with the [semantic role][] of `img` that is [included in the accessibility tree][].

## Expectation

Each target element has an [accessible name][] that is not empty (`""`), or is marked as [decorative][].

**NOTE**: An `img` element can be marked as [decorative][], by using either `role="presentation"`, `role="none"` or an empty `alt` attribute, (`alt=""` or `alt` with no value).

## Assumptions

_There are currently no assumptions._

## Accessibility Support

- There is a known combination of a popular browser and assistive technology that does not by default support `title` as an [accessible name][].
- There are several popular browsers that do not treat images with empty `alt` attribute as having a role of `presentation` but instead add the `img` element to the accessibility tree with a [semantic role][] of either `img` or `graphic`.

## Background

- [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G94)
- [G95: Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95)
- [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37)
- [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6)
- [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10)
- [H67: Using null alt text and no title attribute on img elements for images that AT should ignore](https://www.w3.org/WAI/WCAG21/Techniques/html/H67)
- [F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them](https://www.w3.org/WAI/WCAG21/Techniques/failures/F38)
- [F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"](https://www.w3.org/WAI/WCAG21/Techniques/failures/F65)

## Test Cases

### Passed

#### Passed Example 1

The HTML `img` element has an [accessible name][] given by the `alt` attribute.

```html
<img alt="W3C logo" />
```

#### Passed Example 2

The element with a [semantic role][] of `img` has an [accessible name][] given by the `aria-label` attribute.

```html
<div role="img" aria-label="W3C logo"></div>
```

#### Passed Example 3

The element with a [semantic role][] of `img` has an [accessible name][] given by an `aria-labelledby` attribute and an element with matching `id`.

```html
<div style="display: none" id="img-label">W3C logo</div>
<div role="img" aria-labelledby="img-label"></div>
```

#### Passed Example 4

The HTML `img` element has an [accessible name][] given by a `title` attribute, though the `title` attribute is not always accessibility supported.

```html
<img title="W3C logo" />
```

#### Passed Example 5

The HTML `img` element is marked as [decorative][] through an empty `alt` attribute.

```html
<img alt="" />
```

#### Passed Example 6

The HTML `img` element is marked as [decorative][] through `role="presentation"`.

```html
<img role="presentation" />
```

#### Passed Example 7

The HTML `img` element is marked as [decorative][] through `role="none"`.

```html
<img role="none" />
```

#### Passed Example 8

The HTML `img` element has an [accessible name][] that is not empty.

```html
<img alt=":-)" />
```

### Failed

#### Failed Example 1

The HTML `img` element is not marked as [decorative][] and has an empty [accessible name][].

```html
<img />
```

#### Failed Example 2

The element with role of `img` has an empty [accessible name][].

```html
<div role="img"></div>
```

#### Failed Example 3

The `img` element inside a `div` positioned off screen has an empty [accessible name][] and is not marked as [decorative][].

```html
<div style="margin-left:-9999px;"><img /></div>
```

#### Failed Example 4

The HTML `img` element has an emtpy [accessible name][].

```html
<img alt=" " />
```

### Inapplicable

#### Inapplicable Example 1

The element does not have the [semantic role][] of `img`.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100" height="100">
	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

#### Inapplicable Example 2

The element has a [semantic role][] of `img`, but is not [included in the accessibility tree][].

```html
<div role="img" aria-hidden="true"></div>
```

#### Inapplicable Example 3

HTML `img` element is not [included in the accessibility tree][].

```html
<img alt="W3C logo" aria-hidden="true" />
```

#### Inapplicable Example 4

The element is not a `img` element.

```html
<div aria-label="W3C logo"></div>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[decorative]: #decorative 'Definition of decorative'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[semantic role]: #semantic-role 'Definition of semantic role'
[whitespace]: #whitespace 'Definition of whitespace'

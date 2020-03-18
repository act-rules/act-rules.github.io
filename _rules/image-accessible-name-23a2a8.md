---
id: 23a2a8
name: Image has accessible name
rule_type: atomic
description: |
  This rule checks that each image either has an accessible name or is marked up as decorative
accessibility_requirements:
  wcag20:1.1.1: # Non-Text Content
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G94: # Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G95: # Providing short text alternatives that provide a brief description of the non-text content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Stein Erik Skotkjerra
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'alt-require'
---

## Applicability

The rule applies to HTML `img` elements or any HTML element with the [semantic role][] of `img` that is [included in the accessibility tree][] and displays an image.

## Expectation

Each target element has an [accessible name][] that is not empty (`""`), or is [marked as decorative][].

**Note:** Testing that the [accessible name][] describes the purpose of the element is not part of this rule and must be tested separately.

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
<img alt="W3C logo" src="/test-assets/shared/w3c-logo.png" />
```

#### Passed Example 2

The element with a [semantic role][] of `img` has an [accessible name][] given by the `aria-label` attribute.

```html
<div role="img" aria-label="W3C logo" style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)" ></div>
```

#### Passed Example 3

The element with a [semantic role][] of `img` has an [accessible name][] given by an `aria-labelledby` attribute and an element with matching `id`.

```html
<div style="display: none" id="img-label">W3C logo</div>
<div role="img" aria-labelledby="img-label" style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)" ></div>
```

#### Passed Example 4

The HTML `img` element has an [accessible name][] given by a `title` attribute, though the `title` attribute is not always accessibility supported.

```html
<img title="W3C logo" src="/test-assets/shared/w3c-logo.png" />
```

#### Passed Example 5

The HTML `img` element is [marked as decorative][] through an empty `alt` attribute.

```html
<img alt="" src="https://www.w3.org/WAI/tutorials/img/topinfo_bg-42052e6c.png" />
```

#### Passed Example 6

The HTML `img` element is [marked as decorative][] through `role="presentation"`.

```html
<img role="presentation" style="width:72px; height:48px; background-image: url(https://www.w3.org/WAI/tutorials/img/topinfo_bg-42052e6c.png)" />
```

#### Passed Example 7

The HTML `img` element is [marked as decorative][] through `role="none"`.

```html
<img role="none" src="https://www.w3.org/WAI/tutorials/img/topinfo_bg-42052e6c.png" />
```


### Failed

#### Failed Example 1

The HTML `img` element is not [marked as decorative][] and has an empty [accessible name][].

```html
<img src="/test-assets/shared/w3c-logo.png" />
```

#### Failed Example 2

The element with role of `img` has an empty [accessible name][].

```html
<div role="img" style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)"></div>
```

#### Failed Example 3

The `img` element inside a `div` positioned off screen has an empty [accessible name][] and is not [marked as decorative][].

```html
<div style="margin-left:-9999px;"><img src="/test-assets/shared/w3c-logo.png" /></div>
```

#### Failed Example 4

The HTML `img` element displays a `src` image and has an empty [accessible name][].

```html
<img src="/test-assets/shared/w3c-logo.png" alt=" " />
```

#### Failed Example 5

HTML `img` element displays a CSS `background-image` and has an empty [accessible name][].

```html
<img style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)" />
```

#### Failed Example 6

HTML `img` element displays a `srcset` image and has an empty [accessible name][].

```html
<img srcset="/test-assets/shared/w3c-logo.png" />
```

#### Failed Example 7

HTML `img` element displays a `source` image and has an empty [accessible name][].

```html
<picture>
    <source srcset="/test-assets/shared/w3c-logo.png" />
    <img/>
</picture>
```

### Inapplicable

#### Inapplicable Example 1

The element does not have the [semantic role][] of `img`.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="figure" width="100" height="100">
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
<img src="/test-assets/shared/w3c-logo.png" aria-hidden="true" />
```

#### Inapplicable Example 4

The element is not an `img` element.

```html
<div aria-label="W3C logo"></div>
```

#### Inapplicable Example 5

HTML `img` element has no `src` attribute so displays no image.

```html
<img />
```

[accessible name]: #accessible-name 'Definition of accessible name'
[marked as decorative]: #marked-as-decorative 'Definition of marked as decorative'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[semantic role]: #semantic-role 'Definition of semantic role'
[whitespace]: #whitespace 'Definition of whitespace'

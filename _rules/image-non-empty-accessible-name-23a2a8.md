---
id: 23a2a8
name: Image has non-empty accessible name
rule_type: atomic
description: |
  This rule checks that each image either has a non-empty accessible name or is marked up as decorative
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
  - Accessibility Tree
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

The rule applies to HTML `img` elements and HTML elements with the [semantic role][] of `img` which render an image and are [included in the accessibility tree][].

HTML elements render an image if any of the following are true:

- The element is an `img` element where the [current request][]'s [state][image request state] is [completely available][].
- The element has a CSS `background-image` that does not [draw nothing](https://www.w3.org/TR/css-backgrounds-3/#the-background-image).

## Expectation

Each target element has an [accessible name][] that is not empty (`""`), or has a [semantic role][] of `none` or `presentation`.

## Assumptions

_There are currently no assumptions._

## Accessibility Support

- There is a known combination of a popular browser and assistive technology that does not by default support `title` as an [accessible name][].
- There are several popular browsers that do not treat images with empty `alt` attribute as having a role of `presentation` but instead add the `img` element to the accessibility tree with a [semantic role][] of either `img` or `graphic`.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `img` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.
- Images can have their role set to `presentation` through an empty `alt` attribute. [Presentational Roles Conflict Resolution][] does not specify what to do if such an image is [focusable][] (it only specifies what to do in case of explicit `role="none"` or `role="presentation"`). Some browsers expose these images and some don't. Thus, this rule may fail for technologies that expose these without creating an accessibility issue for users of other technologies.

## Background

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
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

This HTML `img` element has an [accessible name][] because of the `alt` attribute.

```html
<img alt="W3C logo" src="/test-assets/shared/w3c-logo.png" />
```

#### Passed Example 2

This element with a [semantic role][] of `img` has an [accessible name][] because of the `aria-label` attribute.

```html
<div
	role="img"
	aria-label="W3C logo"
	style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)"
></div>
```

#### Passed Example 3

This element with a [semantic role][] of `img` has an [accessible name][] because of an `aria-labelledby` attribute and an element with matching `id`.

```html
<div style="display: none" id="img-label">W3C logo</div>
<div
	role="img"
	aria-labelledby="img-label"
	style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)"
></div>
```

#### Passed Example 4

This `img` element has an [accessible name][] because of a `title` attribute.

**Note**: There are assistive technologies that do not support using the `title` attribute for an [accessible name][], or in which this feature can be disabled.

```html
<img title="W3C logo" src="/test-assets/shared/w3c-logo.png" />
```

#### Passed Example 5

This `img` element has an [implicit role][] of `presentation` because of the empty `alt` attribute.

```html
<img alt="" src="/test-assets/shared/background.png" />
```

#### Passed Example 6

This `img` element has an [explicit role][] of `presentation` because of the value of the `role` attribute.

```html
<img role="presentation" style="width:72px; height:48px; background-image: url(/test-assets/shared/background.png)" />
```

#### Passed Example 7

This `img` element has an [explicit role][] of `none` because of the value of the `role` attribute.

```html
<img role="none" src="/test-assets/shared/background.png" />
```

#### Passed Example 8

This `img` element inside a `div` positioned off screen has an [implicit role][] of `img` because of the empty `alt` attribute.

```html
<div style="margin-left:-9999px;">
	<img alt="" src="/test-assets/shared/background.png" />
</div>
```

#### Passed Example 9

This `img` element displays a CSS `background-image` and has an [accessible name][] because of the `alt` attribute.

```html
<img alt="W3C logo" style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)" />
```

#### Passed Example 10

This `img` element displays a `srcset` and has an [accessible name][] because of the `alt` attribute.

```html
<img alt="W3C logo" srcset="/test-assets/shared/w3c-logo.png" />
```

#### Passed Example 11

This `picture` element displays a `srcset` and has an [accessible name][] because of the `alt` attribute.

```html
<picture>
    <source srcset="/test-assets/shared/w3c-logo.png" />
    <img alt="W3C logo" width="72" height="48" />
</picture>
```

### Failed

#### Failed Example 1

This `img` element has an empty [accessible name][] and an [implicit role][] of `img` because it is missing an empty `alt` attribute.

```html
<img src="/test-assets/shared/w3c-logo.png" />
```

#### Failed Example 2

This element with role of `img` has an empty [accessible name][].

```html
<div role="img" style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)"></div>
```

#### Failed Example 3

This `img` element inside a `div` positioned off screen has an empty [accessible name][] and an [implicit role][] of `img`.

```html
<div style="margin-left:-9999px;"><img src="/test-assets/shared/w3c-logo.png" /></div>
```

#### Failed Example 4

This `img` element has an empty [accessible name][] because the space in the `alt` attribute is trimmed off by the [accessible name computation](https://www.w3.org/TR/accname-1.1/). Because of the space, the `alt` attribute is not empty (`""`) which gives the element the [implicit role][] of `img`.

```html
<img src="/test-assets/shared/w3c-logo.png" alt=" " />
```

#### Failed Example 5

This `img` element has an [explicit role][] of `none`. However, it is [focusable][] due to the `tabindex` attribute. Because of this it has a [semantic role][] of `img` due to [Presentational Roles Conflict Resolution][]. It does not have an accessible name.

```html
<img role="none" tabindex="0" src="/test-assets/shared/w3c-logo.png" />
```

#### Failed Example 6

This `img` element displays a CSS `background-image`, has an empty [accessible name][] and an [implicit role][] of `img` because it is missing 
an empty `alt` attribute.

```html
<img style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)" />
```

#### Failed Example 7

This `img` element displays a `srcset`, has an empty [accessible name][] and an [implicit role][] of `img` because it is missing 
an empty `alt` attribute.

```html
<img srcset="/test-assets/shared/w3c-logo.png" />
```

#### Failed Example 8

This `picture` element displays a `srcset`, has an empty [accessible name][] and an [implicit role][] of `img` because it is missing 
an empty `alt` attribute.

```html
<picture>
    <source srcset="/test-assets/shared/w3c-logo.png" />
    <img width="72" height="48" />
</picture>
```

### Inapplicable

#### Inapplicable Example 1

This `svg` element has an [implicit role][] of `graphics-document`.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

#### Inapplicable Example 2

This element has a [semantic role][] of `img`, but is not [included in the accessibility tree][].

```html
<div
	role="img"
	aria-hidden="true"
	style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)"
></div>
```

#### Inapplicable Example 3

This `img` element is not [included in the accessibility tree][].

```html
<img src="/test-assets/shared/w3c-logo.png" aria-hidden="true" />
```

#### Inapplicable Example 4

This element is neither an `img` element nor has a role of `img`.

```html
<div aria-label="W3C logo"></div>
```

#### Inapplicable Example 5

This `img` element has no `src` attribute so does not render an image.

```html
<img />
```

[accessible name]: #accessible-name 'Definition of accessible name'
[explicit role]: #explicit-role 'Definition of explicit role'
[focusable]: #focusable 'Definition of focusable'
[implicit role]: #implicit-role 'Definition of implicit role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[semantic role]: #semantic-role 'Definition of semantic role'
[current request]: https://html.spec.whatwg.org/#current-request 'HTML definition of Current request, 2020/03/06'
[image request state]: https://html.spec.whatwg.org/#img-req-state 'HTML definition of Image request state, 2020/03/06'
[completely available]: https://html.spec.whatwg.org/#img-all 'HTML definition of Completely available, 2020/03/06'


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

The rule applies to HTML `img` elements and HTML elements with the [semantic role][] of `img`, except for elements that are not [included in the accessibility tree][].

## Expectation

Each target element has an [accessible name][] that is not empty (`""`), or has a [semantic role][] of `none` or `presentation`.

**Note:** Testing that the [accessible name][] describes the purpose of the element is not part of this rule and must be tested separately.

## Assumptions

_There are currently no assumptions._

## Accessibility Support

- There is a known combination of a popular browser and assistive technology that does not by default support `title` as an [accessible name][].
- There are several popular browsers that do not treat images with empty `alt` attribute as having a role of `presentation` but instead add the `img` element to the accessibility tree with a [semantic role][] of either `img` or `graphic`.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `img` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.
- Images can have their role set to `presentation` through an empty `alt` attribute. [Presentational Roles Conflict Resolution][] does not specifies what to do if such an image is [focusable][] (it only specifies what to do in case of explicit `role="none"` or `role="presentation"`). Some browsers expose these images and some don't. Thus, this rule may fail for technologies that expose these without creating an accessibility issue for users of other technologies.

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

The HTML `img` element has a [semantic role][] of `presentation` through an empty `alt` attribute.

```html
<img alt="" />
```

#### Passed Example 6

The HTML `img` element has a [semantic role][] of `presentation` through [explicit role][].

```html
<img role="presentation" />
```

#### Passed Example 7

The HTML `img` element has a [semantic role][] of `none` through [explicit role][].

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

The HTML `img` element with [implicit role][] of `img` has an empty [accessible name][].

```html
<img />
```

#### Failed Example 2

The element with role of `img` has an empty [accessible name][].

```html
<div role="img"></div>
```

#### Failed Example 3

The `img` element inside a `div` positioned off screen has an empty [accessible name][] and an [implicit role][] of `img`.

```html
<div style="margin-left:-9999px;"><img /></div>
```

#### Failed Example 4

The HTML `img` element has an empty [accessible name][].

```html
<img alt=" " />
```

#### Failed Example 5

This `img` element has an [explicit role][] of `none`. However, it is [focusable][] due to the `tabindex` attribute. Thus it has a [semantic role][] of `img` due to [Presentational Roles Conflict Resolution][]. It does not have an accessible name.

```html
<img role="none" tabindex="0" />
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

The element is not an `img` element.

```html
<div aria-label="W3C logo"></div>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[explicit role]: #explicit-role 'Definition of explicit role'
[focusable]: #focusable 'Definition of focusable'
[implicit role]: #implicit-role 'Definition of implicit role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[semantic role]: #semantic-role 'Definition of semantic role'

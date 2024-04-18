---
id: 46ca7f
name: Element marked as decorative is not exposed
rule_type: atomic
description: |
  This rule checks that elements marked as decorative either are not included in the accessibility tree, or have a presentational role.
accessibility_requirements:
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
  funding:
    - WAI-Tools
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'alt-require'
---

## Applicability

This rule applies to any element which is [marked as decorative][].

## Expectation

Each target element either is not [included in the accessibility tree][] or has a [semantic role][] of `none` or `presentation`.

## Assumptions

There are no assumptions.

## Accessibility Support

Implementation of the [Presentational Roles Conflict Resolution][] differs slightly from one user agent to the other. Hence, some elements might be exposed by one user agent and not by another, and consequently might create accessibility issues only for some users. Nevertheless, triggering the conflict is a bad practice.

## Background

Elements are normally [marked as decorative][] to convey the intention of the author that they are [pure decoration][decorative] and thus shouldn't be exposed to assistive technologies. On the other hand, elements that are [focusable][] are important to know for anybody and should be exposed to assistive technologies; and elements that are defining any [global ARIA attribute][] indicate an intention to communicate something to the assistive technologies (through the `aria-*` attribute). When an element is both [marked as decorative][] and either [focusable][] or defining a [global ARIA attribute][], a conflict arises between these two intentions. The [conflict is resolved][presentational roles conflict resolution] by exposing the element.

Whenever such a conflict occurs, this indicates at the very least mismatching intentions. Such a conflict should be avoided.

When these conflicts arise on [decorative][] [non-text content][], this is also a failure of [Success Criterion 1.1.1: Non-text Content][sc111] because [decorative][] [non-text content][] must be implemented in a way that allows assistive technologies to ignore it. When these conflicts arise on text content, or on content which is not [decorative][], this is not a failure of WCAG. Therefore this rule is not mapping to any specific WCAG Success Criterion, and is not an accessibility requirement for WCAG.

## Test Cases

### Passed

#### Passed Example 1

This `img` element is [marked as decorative][] through its empty `alt` attribute and has [semantic role][] of `none`.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" />
```

#### Passed Example 2

This `img` element is [marked as decorative][] through its empty `alt` attribute and is not [included in the accessibility tree][] because of the `aria-hidden` attribute.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" aria-hidden="true" />
```

#### Passed Example 3

This `img` element is [marked as decorative][] through its empty `alt` attribute and is not [included in the accessibility tree][] because it is `hidden` to everyone.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" hidden />
```

#### Passed Example 4

This `nav` element is [marked as decorative][] through its `role` attribute and has a [semantic role][] of `presentation`.

```html
<nav role="presentation">
	<a href="https://act-rules.github.io/" aria-label="ACT rules">ACT rules</a>
</nav>
```

#### Passed Example 5

This `img` element is [marked as decorative][] through its `role` attribute and has a [semantic role][] of `presentation` because own attributes are not required to be exposed and thus do not trigger the [presentational roles conflict resolution][].

```html
<img src="/test-assets/shared/w3c-logo.png" role="presentation" alt="W3C logo" />
```

#### Passed Example 6

This `svg` element is [marked as decorative][] through its `role` attribute and has a [semantic role][] of `none`.

```html
<svg role="none">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

### Failed

#### Failed Example 1

This `nav` element is [marked as decorative][] through its `role` attribute but has a non-empty `aria-label` attribute causing it to be [included in the accessibility tree][] with its [implicit role][] of `navigation`.

```html
<nav role="presentation" aria-label="global">
	<a href="https://act-rules.github.io/" aria-label="ACT rules">ACT rules</a>
</nav>
```

#### Failed Example 2

This `img` element is [marked as decorative][] through its empty `alt` attribute but has a non-empty `aria-labelledby` attribute causing it to be [included in the accessibility tree][] with its [implicit role][] of `img`.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" aria-labelledby="label" /> <span hidden id="label">W3C logo</span>
```

#### Failed Example 3

This `svg` element is [marked as decorative][] through its `role` attribute but has a non-empty `aria-label` attribute causing it to be [included in the accessibility tree][] with its [implicit role][] of `graphics-document`.

```html
<svg role="none" aria-label="Yellow circle">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

### Inapplicable

#### Inapplicable Example 1

This `img` element is not [marked as decorative][].

```html
<img src="/test-assets/shared/w3c-logo.png" aria-label="W3C logo" />
```

[decorative]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure decoration'
[focusable]: #focusable 'Definition of Focusable'
[global aria attribute]: https://www.w3.org/TR/wai-aria-1.2/#global_states 'List of Global ARIA States and Properties'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as decorative'
[non-text content]: https://www.w3.org/TR/WCAG22/#dfn-non-text-content 'WCAG definition of Non-text content'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[sc111]: https://www.w3.org/TR/WCAG22/#non-text-content 'Success Criterion 1.1.1: Non-text Content'
[semantic role]: #semantic-role 'Definition of Semantic Role'

---
id: 59796f
name: Image button accessible name is descriptive
rule_type: atomic
description: |
  This rule checks that the accessible name of an image button describes its purpose.
accessibility_requirements:
  wcag20:1.1.1: # Non-Text Content (A)
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
input_aspects: # Remove what is not applicable
  - DOM Tree
  - CSS Styling
acknowledgements:
  authors:
    - Emma Pratt Richens
    - Anne Thyme Nørregaard
    - Stein Erik Skotkjerra
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'alt-require'
---

## Applicability

The rule applies to any HTML `input` element with a `type` attribute in the [`Image Button` state](<https://html.spec.whatwg.org/#image-button-state-(type=image)>), that is [included in the accessibility tree][].

**Note:** `input` elements have a `type` attribute in the `Image button` state if it is set to any case-insensitive match of `image` (most of the time, using `<input type="image">`).

**Note:** The specification of the [`type`](https://html.spec.whatwg.org/#states-of-the-type-attribute) attribute describes in detail how to map the value of the attribute to its corresponding state.

## Expectation

The [accessible name][] of the target element describes the purpose of that image button.

## Assumptions

- This rule assumes that all image buttons are [user interface components as defined by WCAG 2](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components).

## Accessibility Support

There is a known combination of a popular browser and assistive technology that does not by default support `title` as an [accessible name][].

## Background

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [WCAG Technique H36: Using alt attributes on images used as submit buttons](https://www.w3.org/WAI/WCAG21/Techniques/html/H36)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

## Test Cases

### Passed

#### Passed Example 1

This `input` element with 'type' attribute in the `Image button` state has an [accessible name][] through the `alt` attribute that describes its purpose.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" alt="Search" />
```

#### Passed Example 2

The image button has an [accessible name][] through the `title` attribute that describes its purpose.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" title="Search" />
```

#### Passed Example 3

The image button has an [accessible name][] through the `aria-label` attribute that describes its purpose.

```html
<input type="image" src="/test-assets/shared/local-search-icon.svg" aria-label="Search this page" />
```

#### Passed Example 4

The image button has an [accessible name][] through the `aria-labelledby` attribute that describes its purpose.

```html
<h1 id="id1">Interesting buttons</h1>
<input type="image" src="/test-assets/shared/share-icon.svg" name="Share" id="id2" aria-labelledby="id2 id1" />
```

### Failed

#### Failed Example 1

This `input` element with 'type' attribute in the `Image button` state has an empty [accessible name][], which cannot be descriptive. The `name` attribute does not provide an [accessible name][].

```html
<input type="image" name="search" src="/test-assets/shared/search-icon.svg" />
```

#### Failed Example 2

This image button has an `alt` attribute that is not descriptive as the [accessible name][].

```html
<input type="image" src="/test-assets/shared/search-icon.svg" alt="Share" />
```

#### Failed Example 3

The image button has an `aria-labelledby` attribute, but the referenced element does not exist. This gives the button an empty [accessible name][], which cannot be descriptive.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" aria-labelledby="non-existing" />
```

### Inapplicable

#### Inapplicable Example 1

The `button` element is not an image button. [Success Criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content) can not fail text buttons. Only non-text content is applicable.

```html
<button>My button</button>
```

#### Inapplicable Example 2

The `input` element with type with a `type` attribute in the `Button` state is not an image button. [Success Criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content) can not fail text buttons. Only non-text content is applicable.

```html
<input type="button" value="My button" />
```

#### Inapplicable Example 3

This `button` element is separate from the `img` element.

```html
<button><img src="/test-assets/shared/search-icon.svg" alt="Search" /></button>
```

#### Inapplicable Example 4

This `img` element is not button component.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

#### Inapplicable Example 5

The image button is ignored by assistive technologies because it is not [included in the accessibility tree][]. These are not required to have an accessible name.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" style="display: none;" />
```

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[accessible name]: #accessible-name 'Definition of accessible name'
[whitespace]: #whitespace 'Definition of whitespace'

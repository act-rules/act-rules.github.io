---
id: 8fc3b6
name: Object element in the accessibility tree has non-empty accessible name
rule_type: atomic
description: |
  This rule checks that each object has a non-empty accessible name.
accessibility_requirements:
  wcag20:1.1.1: # Non-text Content (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Accessibility Tree
acknowledgments:
  authors:
    - António Estriga
---

## Applicability

The rule applies to any `object` element that is [included in the accessibility tree][].

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

**Note:** Testing that the [accessible name][] describes the purpose of the element is not part of this rule and must be tested separately.

## Assumptions

There are currently no assumptions

## Accessibility Support

Non supported media formats make screen readers render the text content of the element instead of other attributes.

## Background

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html>)

## Test Cases

### Passed

#### Passed Example 1

This `object` element has a non-empty [accessible name][] through its `aria-label` attribute.

```html
<object
  aria-label="Moon speech"
  data="/test-assets/moon-audio/moon-speech.mp3"
></object>
```

#### Passed Example 2

This `object` element has a non-empty [accessible name][] through title.

```html
<object
  title="Moon speech"
  data="/test-assets/moon-audio/moon-speech.mp3"
></object>
```

#### Passed Example 3

This `object` element has a non-empty [accessible name][] through aria-labelledby.

```html
<span id="label">Moon speech</span>
<object
  aria-labelledby="label"
  data="/test-assets/moon-audio/moon-speech.mp3"
></object>
```

#### Passed Example 4

This `object` element placed off screen has a non-empty [accessible name][].

```html
<html>
  <style>
    .offScreen {
      position: absolute;
      left: -9999px;
      top: -9999px;
    }
  </style>
  <body>
    <object
      title="Moon speech"
      data="/test-assets/moon-audio/moon-speech.mp3"
      class="offScreen"
    ></object>
  </body>
</html>
```

### Failed

#### Failed Example 1

This `object` element has an empty [accessible name][].

```html
<object title="" data="/test-assets/moon-audio/moon-speech.mp3"></object>
```

#### Failed Example 2

This `object` element has an empty [accessible name][].

```html
<span id="label"></span>
<object
  aria-labelledby="label"
  data="/test-assets/moon-audio/moon-speech.mp3"
></object>
```

#### Failed Example 3

This `object` element has an empty [accessible name][] because the `aria-labelledby` attribute references a non-existing id.

```html
<object
  aria-labelledby="download"
  data="/test-assets/moon-audio/moon-speech.mp3"
></object>
```

#### Failed Example 4

This `object` element has an empty [accessible name][].

```html
<object data="/test-assets/moon-audio/moon-speech.mp3"></object>
```

### Inapplicable

#### Inapplicable Example 1

This `object` element is not [included in the accessibility tree][] due to `display:none`.

```html
<object
  title=""
  data="/test-assets/moon-audio/moon-speech.mp3"
  style="display: none;"
></object>
```

#### Inapplicable Example 2

This `object` element is not [included in the accessibility tree][] due to `visibility: hidden`.

```html
<object
  title=""
  data="/test-assets/moon-audio/moon-speech.mp3"
  style="visibility: hidden;"
></object>
```

#### Inapplicable Example 3

This `object` element is not [included in the accessibility tree][] due to `aria-hidden="true"`.

```html
<object
  title=""
  data="/test-assets/moon-audio/moon-speech.mp3"
  aria-hidden="true"
></object>
```

#### Inapplicable Example 4

This `object` element is is not [included in the accessibility tree][] because it is marked as decorative through `role="presentation"`.

```html
<object
  type="image/png"
  role="presentation"
  data="/test-assets/contrast/example.png"
>
</object>
```

[accessible name]: #accessible-name "Definition of accessible name"
[included in the accessibility tree]: #included-in-the-accessibility-tree "Definition of included in the accessibility tree"

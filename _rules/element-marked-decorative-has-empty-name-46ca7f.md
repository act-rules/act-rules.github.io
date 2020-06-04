---
id: 46ca7f
name: Element marked as decorative has empty accessible name
rule_type: atomic
description: |
  This rule checks that elements marked as decorative have an empty accessible name
accessibility_requirements: # Remove whatever is not applicable
  wcag20:1.1.1: # Non-text Content (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'alt-require'
---

## Applicability

The rule applies to any element for which all of the following are true:

- the element is [embedded content][] in the HTML or SVG namespace; and
- the element is not an `iframe` element; and
- the element is [marked as decorative][].

**Note:** The list of elements matching the first two conditions is `audio`, `canvas`, `embed`, `img`, `object`, `picture`, `svg`, and `video`. `iframe` elements and `math` elements from the MathML namespace are ignored because they often embed text content.

## Expectation

Each target element as an empty [accessible name][].

## Assumptions

- This rule assumes that the applicable elements embed [non-text content][]. If this is not the case, the rule may fails while [Success Criterion 1.1.1][sc111] is still satisfied because it is only concerned with [non-text content][]. Note that the mismatch between [marking as decorative][marked as decorative] and providing an [accessible name][] is not necessarily an accessibility issue for text content, but is nonetheless bad practice and should be avoided.
- This rule assumes that elements which are [marked as decorative][] are [pure decoration][]. If this is not the case, this rule may fail while [Success Criterion 1.1.1][sc111] is still satisfied. Note that [marking as decorative][marked as decorative] an element which is not [pure decoration][] is not necessarily an accessibility issue but is nonetheless bad practice and should be avoided.

## Accessibility Support

_No accessibility support issues known._

## Background

- [Success Criterion 1.1.1: Non-text Content][sc111]
- [Understanding Success Criterion 1.1.1: Non-text Content][usc111]
- [Technique F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them][f38]
- [Technique F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image") for images that should be ignored by assistive technology][f39]
- [Technique H67: Using null alt text and no title attribute on img elements for images that AT should ignore][h67]

## Test Cases

### Passed

#### Passed Example 1

This `img` element is [marked as decorative][] through its `role` attribute and has an empty [accessible name][].

```html
<img src="test-assets/shared/w3c-logo.png" role="none" />
```

#### Passed Example 2

This `img` element is [marked as decorative][] through its empty `alt` attribute and has an empty [accessible name][].

```html
<img src="test-assets/shared/w3c-logo.png" alt="" />
```

#### Passed Example 3

This `img` element is [marked as decorative][] through its `role` attribute and has an empty [accessible name][] because own attributes are ignored when the role is set to `none` ([step 2D of accessible name computation][]).

```html
<img src="test-assets/shared/w3c-logo.png" role="none" alt="W3C logo" />
```

#### Passed Example 4

This `svg` element is [marked as decorative][] through its `role` attribute and has an empty [accessible name][].

```html
<svg role="none">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

### Failed

#### Failed Example 1

This `img` element is [marked as decorative][] through its `role` attribute but has a non-empty [accessible name][] given by its `aria-label` attribute.

```html
<img src="test-assets/shared/w3c-logo.png" role="none" aria-label="W3C logo" />
```

#### Failed Example 2

This `img` element is [marked as decorative][] through its empty `alt` attribute but has a non-empty [accessible name][] given by its `aria-labelledby` attribute.

```html
<img src="test-assets/shared/w3c-logo.png" alt="" aria-labelledby="label" /> <span hidden id="label">W3C logo</span>
```

#### Failed Example 3

This `svg` element is [marked as decorative][] through its `role` attribute but has a non-empty [accessible name][].

```html
<svg role="none" aria-label="Yellow circle">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

### Inapplicable

#### Inapplicable Example 1

This `span` element is not [embedded content][].

```html
<span role="none">ACT rules</span>
```

#### Inapplicable Example 2

`iframe` elements are inapplicable for this rule.

```html
<iframe srcdoc="<span>ACT rules</span>" role="none" />
```

#### Inapplicable Example 3

This `img` element is not [marked as decorative][].

```html
<img src="test-assets/shared/w3c-logo.png" aria-label="W3C logo" />
```

[accessible name]: #accessible-name 'Definition of Accessible name'
[embedded content]: https://html.spec.whatwg.org/multipage/dom.html#embedded-content-category 'Definition of embedded content'
[f38]: https://www.w3.org/WAI/WCAG21/Techniques/failures/F38 'Technique F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them'
[f39]: https://www.w3.org/WAI/WCAG21/Techniques/failures/F39 'Technique F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image") for images that should be ignored by assistive technology'
[h67]: https://www.w3.org/WAI/WCAG21/Techniques/html/H67 'Technique H67: Using null alt text and no title attribute on img elements for images that AT should ignore'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as decorative'
[non-text content]: https://www.w3.org/TR/WCAG21/#dfn-non-text-content 'WCAG definition of Non-text content'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure decoration'
[sc111]: https://www.w3.org/TR/WCAG21/#non-text-content 'Success Criterion 1.1.1: Non-text Content'
[step 2d of accessible name computation]: https://www.w3.org/TR/accname-1.1/#step2D 'Step 2D of accessible name computation'
[usc111]: https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html 'Understanding Success Criterion 1.1.1: Non-text Content'

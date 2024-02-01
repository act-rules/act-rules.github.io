---
id: 5f99a7
name: ARIA attribute is defined in WAI-ARIA
rule_type: atomic
description: |
  This rule checks that each `aria-` attribute specified is defined in ARIA 1.2.
accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    secondary: This success criterion is **less strict** than this rule. This is because the rule does not ignore irrelevant ARIA properties. Some of the failed examples satisfy this success criterion.
  wcag20:4.1.2: # Name, Role, Value (A)
    secondary: This success criterion is **less strict** than this rule. This is because the rule does not ignore irrelevant ARIA properties. Some of the failed examples satisfy this success criterion.
input_aspects:
  - DOM Tree
acknowledgments:
  authors:
    - Jey Nandakumar
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any attribute that starts with `aria-`.

## Expectation

Each target attribute is defined in [WAI-ARIA Specifications][].

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

The presence of unknown ARIA attributes is often the result of a typo or other developer error. These attributes are ignored by browsers and other assistive technologies. This often means that a state or property which should exist is missing.

### Bibliography

- [ARIA in HTML](https://www.w3.org/TR/html-aria/#index-aria-global)
- [WAI ARIA Supported States and Properties](https://www.w3.org/TR/wai-aria-1.2/#supportedState)
- [G108: Using markup features to expose the name and role](https://www.w3.org/WAI/WCAG22/Techniques/general/G108)
- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [Semantics and ARIA](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/)

## Test Cases

### Passed

#### Passed Example 1

This `article` element has an `aria-atomic` attribute which is defined in [WAI-ARIA Specifications][].

```html
<article aria-atomic="true">This is a description of something cool...</article>
```

#### Passed Example 2

This `div` element with a role of `dialog` has an `aria-modal` attribute which is defined in [WAI-ARIA Specifications][].

```html
<div role="dialog" aria-modal="true">Contains modal content...</div>
```

#### Passed Example 3

This `div` element with a role of `textbox` has multiple `aria-` attributes which are defined in [WAI-ARIA Specifications][].

```html
<div
	role="textbox"
	contenteditable="true"
	aria-multiline="true"
	aria-label="Enter your hobbies"
	aria-required="true"
></div>
```

#### Passed Example 4

This `input` element with a type of `number` has multiple `aria-` attributes specified which are all defined in [WAI-ARIA Specifications][].

```html
<label for="spinbutton">Enter a number between 0 and 100:</label>
<input id="spinbutton" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" type="number" value="25" />
```

### Failed

#### Failed Example 1

This `div` element with a role of `checkbox` has an `aria-not-checked` attribute which is not defined in [WAI-ARIA Specifications][].

```html
<div role="checkbox" aria-not-checked="true">All conditions are met</div>
```

#### Failed Example 2

This `div` element with a role of `searchbox` has an `aria-labelled` attribute (instead of `aria-labelledby`) which is not defined in [WAI-ARIA Specifications][].

```html
<span id="label">Birthday:</span>
<div contenteditable role="searchbox" aria-labelled="label" aria-placeholder="MM-DD-YYYY">
	01-01-2019
</div>
```

### Inapplicable

#### Inapplicable Example 1

This `canvas` element does not have an `aria-` attribute specified.

```html
<canvas> </canvas>
```

[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'

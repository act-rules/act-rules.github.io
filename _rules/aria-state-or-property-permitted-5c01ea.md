---
id: 5c01ea
name: ARIA state or property is permitted
rule_type: atomic
description: |
  This rule checks that WAI-ARIA states or properties are allowed for the element they are specified on.
accessibility_requirements:
  aria11:state_property_processing:
    title: ARIA 1.1, 7.6 State and Property Attribute Processing
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
input_aspects:
  - Accessibility Tree
  - DOM Tree
acknowledgements:
  authors:
    - Anne Thyme Nørregaard
---

## Applicability

Any [WAI-ARIA state or property](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) that is specified on an HTML or SVG element that is [included in the accessibility tree][].

## Expectation

The attribute is either an [inherited](https://www.w3.org/TR/wai-aria/#inheritedattributes), [supported](https://www.w3.org/TR/wai-aria/#supportedState), or [required](https://www.w3.org/TR/wai-aria/#requiredState) [state](https://www.w3.org/TR/wai-aria/#dfn-state) or [property](https://www.w3.org/TR/wai-aria/#dfn-property) of the [semantic role](#semantic-role) of the element on which the attribute is specified. If the element has no semantic role, the attribute must be a [global state or property](https://www.w3.org/TR/wai-aria-1.1/#global_states).

**Note:** Assessing the value of the attribute is out of scope for this rule.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

- There exist popular web browsers and assistive technologies which do not correctly implement [Presentational Roles Conflict Resolution][].
- Some browsers expose elements which are [focusable][] but have an `aria-hidden="true"` attribute, while some hide them.

## Background

- [Understanding Success Criterion 4.1.1: Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing.html)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [WAI-ARIA 1.1, Supported States and Properties](https://www.w3.org/TR/wai-aria-1.1/#states_and_properties)
- [WAI-ARIA 1.1, Global States and Properties](https://www.w3.org/TR/wai-aria-1.1/#global_states)

## Test Cases

### Passed

#### Passed Example 1

`aria-pressed` state is supported for role `button`.

```html
<div role="button" aria-pressed="false">My button</div>
```

#### Passed Example 2

`aria-pressed` state is supported for `role=button` that is the [implicit role](#implicit-role) for `button` element.

```html
<button aria-pressed="false">My button</button>
```

#### Passed Example 3

Global state that is supported by all base markup elements.

```html
<div aria-busy="true">My busy button</div>
```

#### Passed Example 4

`aria-label` state is inherited for role `button`

```html
<div role="button" aria-label="OK"></div>
```

#### Passed Example 5

`aria-checked` state is required for role `aria-checkbox`

```html
<div role="checkbox" aria-checked="false">My checkbox</div>
```

#### Passed Example 6

`aria-controls` property is supported for role `combobox`

```html
<div role="combobox" aria-controls="id1">My combobox</div>
```

#### Passed Example 7

WAI-ARIA states and properties with empty value are also applicable to this rule

```html
<div role="combobox" aria-controls>My combobox</div>
```

#### Passed Example 8

WAI-ARIA states and properties with empty value, specified as an empty string, are also applicable to this rule

```html
<div role="combobox" aria-controls="">My combobox</div>
```

#### Passed Example 9

This `aside` element has an [explicit role][] of `none`. However, the [global][] [property][] `aria-label` is specified. Thus it has a [semantic role][] of `complementary` due to [Presentational Roles Conflict Resolution][]. The `aria-expanded` [state][] is [inherited][] for the `complementary` role.

```html
<aside role="none" aria-label="About ACT rules" aria-expanded="true">ACT rules are cool!</aside>
```

#### Passed Example 10

This `aside` element has an [explicit role][] of `none`. However, it is [focusable][] due to the `tabindex` attribute (even if it is excluded from sequential focus order). Thus it has a [semantic role][] of `complementary` due to [Presentational Roles Conflict Resolution][]. The `aria-expanded` [state][] is [supported][] for the `complementary` role.

```html
<aside role="none" tabindex="-1" aria-expanded="true">ACT rules are cool!</aside>
```

### Failed

#### Failed Example 1

`aria-sort` property is neither inherited, supported, nor required for role `button`.

```html
<div role="button" aria-sort="">Sort by year</div>
```

#### Failed Example 2

`aria-sort` attribute is neither inherited, supported, nor required for `role=button` that is the implicit role for `button` element.

```html
<button aria-sort="">Sort by year</button>
```

#### Failed Example 3

This `aside` element has an [explicit role][], and a [semantic role][], of `none`. The `aria-expanded` [state][] in neither [inherited][], [supported][] nor [required][] for this role.

```html
<aside role="none" aria-expanded="true">ACT rules are cool!</aside>
```

### Inapplicable

#### Inapplicable Example 1

No [WAI-ARIA state or property](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

```html
<div role="region">A region of content</div>
```

#### Inapplicable Example 2

`aria-sort` property is neither inherited, supported, nor required for role `button`, but the element is not [included in the accessibility tree][] because it is not rendered.

```html
<div role="button" aria-sort="" style="display:none;"></div>
```

[explicit role]: #explicit-role 'Definition of Explicit Role'
[focusable]: #focusable 'Definition of focusable'
[global]: https://www.w3.org/TR/wai-aria-1.1/#global_states 'Definition of Global ARIA States and Properties'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inherited]: https://www.w3.org/TR/wai-aria/#inheritedattributes 'Definition of Inherited ARIA States and Properties'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[property]: https://www.w3.org/TR/wai-aria/#dfn-property 'Definition of ARIA Property'
[required]: https://www.w3.org/TR/wai-aria/#requiredState 'Definition of Required ARIA States and Properties'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[supported]: https://www.w3.org/TR/wai-aria/#supportedState 'Definition of Supported ARIA States and Properties'

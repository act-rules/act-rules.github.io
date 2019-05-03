---
id: 5c01ea
name: ARIA state or property allowed
rule_type: atomic
description: |
  This rule checks that WAI-ARIA states or properties are allowed for the element they are specified on.
accessibility_requirements:
  - wcag20: 4.1.2
  - forConformance: true
  - failed: not satisfied
  - passed: further testing needed
  - inapplicable: further testing needed
input_aspects:
  - DOM Tree
authors:
  - Anne Thyme Nørregaard
---


## Applicability

Any [WAI-ARIA state or property](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) that is specified on an HTML or SVG element that is [included-in-the-accessibility-tree](#included-in-the-accessibility-tree).

## Expectation

The attribute is either an [inherited](https://www.w3.org/TR/wai-aria/#inheritedattributes), [supported](https://www.w3.org/TR/wai-aria/#supportedState), or [required](https://www.w3.org/TR/wai-aria/#requiredState) [state](https://www.w3.org/TR/wai-aria/#dfn-state) or [property](https://www.w3.org/TR/wai-aria/#dfn-property) of the [semantic role](#semantic-role) of the element on which the attribute is specified. If the element has no semantic role, the attribute must be a [global state or property](https://www.w3.org/TR/wai-aria-1.1/#global_states).

**Note:** Assessing the value of the attribute is out of scope for this rule.

## Assumptions

- ARIA roles, states and properties are used to provide new information to screen readers and other assistive technologies. If the information expressed through ARIA is already available in another way, failing this rule may not cause accessibility issues.

## Accessibility support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 4.1.1: Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing.html)
- [Understanding Success Criterion 4.1.2: Name, Role, Value
  ](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [WAI-ARIA 1.1, Supported States and Properties](https://www.w3.org/TR/wai-aria-1.1/#states_and_properties)
- [WAI-ARIA 1.1, Global States and Properties](https://www.w3.org/TR/wai-aria-1.1/#global_states)

## Test Cases

### Passed

#### Passed Example 1

`aria-pressed` state is supported for role `button`.

```html
<div role="button" aria-pressed="false"></div>
```

#### Passed Example 2

`aria-pressed` state is supported for `role=button` that is the implicit role for `button` element.

```html
<button aria-pressed="false"></button>
```

#### Passed Example 3

Global state that is supported by all base markup elements.

```html
<div aria-hidden="true"></div>
```

#### Passed Example 4

`aria-label` state is inherited for role `button`

```html
<div role="button" aria-label="OK"></div>
```

#### Passed Example 5

`aria-checked` state is required for role `aria-checkbox`

```html
<div role="checkbox" aria-checked="false"></div>
```

#### Passed Example 6

`aria-controls` property is supported for role `combobox`

```html
<div role="combobox" aria-controls="id1"></div>
```

#### Passed Example 7

WAI-ARIA states and properties with empty value are also applicable to this rule

```html
<div role="combobox" aria-controls></div>
```

#### Passed Example 8

WAI-ARIA states and properties with empty value, specified as an empty string, are also applicable to this rule

```html
<div role="combobox" aria-controls=""></div>
```

### Failed

#### Failed Example 1

`aria-sort` property is neither inherited, supported, nor required for role `button`.

```html
<div role="button" aria-sort=""></div>
```

#### Failed Example 2

`aria-sort` attribute is neither inherited, supported, nor required for `role=button` that is the implicit role for `button` element.

```html
<button aria-sort=""></button>
```

### Inapplicable

#### Inapplicable Example 1

No [WAI-ARIA state or property](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

```html
<div role="region"></div>
```

#### Inapplicable Example 2

`aria-sort` property is neither inherited, supported, nor required for role `button`, but the element is not included in the accessibility tree.

```html
<div role="button" aria-sort="" style="display:none;"></div>
```

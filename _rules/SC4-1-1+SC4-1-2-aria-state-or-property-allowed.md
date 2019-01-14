---
name: ARIA state or property allowed
description: | 
  This rule checks that WAI-ARIA states or properties are allowed for the element they are specified on.

success_criterion:
- 4.1.2 # Name, Role, Value (A)

test_aspects:
- DOM Tree

authors:
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

Any [WAI-ARIA state or property](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) that is specified on an HTML or SVG element.

### Expectation

The attribute is either an [inherited](https://www.w3.org/TR/wai-aria/#inheritedattributes), [supported](https://www.w3.org/TR/wai-aria/#supportedState), or [required](https://www.w3.org/TR/wai-aria/#requiredState) [state](https://www.w3.org/TR/wai-aria/#dfn-state) or [property](https://www.w3.org/TR/wai-aria/#dfn-property) of the [semantic role](#semantic-role) of the element on which the attribute is specified. If the element has no semantic role, the attribute must be a [global state or property](https://www.w3.org/TR/wai-aria-1.1/#global_states).

**Note:** Assessing the value of the attribute is out of scope for this rule.

## Assumptions

- The role is being used to comply to WCAG.

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 4.1.1: Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing.html)
- [Understanding Success Criterion 4.1.2: Name, Role, Value
](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [WAI-ARIA 1.1, Supported States and Properties](https://www.w3.org/TR/wai-aria-1.1/#states_and_properties)
- [WAI-ARIA 1.1, Global States and Properties](https://www.w3.org/TR/wai-aria-1.1/#global_states)

## Test Cases

### Passed

#### Passed example 1

`aria-pressed` state is supported for role `button`.

```html
<div role="button" aria-pressed="false"></div>
```

#### Passed example 2

`aria-pressed` state is supported for `role=button` that is the implicit role for `button` element.

```html
<button aria-pressed="false"></button>
```

#### Passed example 3

Global state that is supported by all base markup elements.

```html
<div aria-hidden="true"></div>
```

#### Passed example 4

`aria-label` state is inherited for role `button`

```html
<div role="button" aria-label="OK"></div>
```

#### Passed example 5

`aria-checked` state is required for role `aria-checkbox`

```html
<div role="checkbox" aria-checked="false"></div>
```

#### Passed example 6

`aria-controls` property is supported for role `combobox`

```html
<div role="combobox" aria-controls="id1"></div>
```

#### Passed example 7

WAI-ARIA states and properties with empty value are also applicable to this rule

```html
<div role="combobox" aria-controls></div>
```

#### Passed example 8

WAI-ARIA states and properties with empty value, specified as an empty string, are also applicable to this rule

```html
<div role="combobox" aria-controls=""></div>
```

### Failed

#### Failed example 1

`aria-sort` property is neither inherited, supported, nor required for role `button`.

```html
<div role="button" aria-sort=""></div>
```

#### Failed example 2

`aria-sort` attribute is neither inherited, supported, nor required for `role=button` that is the implicit role for `button` element.

```html
<button aria-sort=""></button>
```

### Inapplicable

#### Inapplicable example 1

No [WAI-ARIA state or property](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

```html
<div role="region"></div>
```

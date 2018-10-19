---
name: ARIA allowed attribute
description: | 
  This rule checks that `aria-*` attributes are allowed for the element they are specified on.

success_criterion:
- 4.1.1 # Parsing (A)
- 4.1.2 # Name, Role, Value (A)

test_aspects:
- DOM Tree

authors:
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

Any attribute that is specified on an HTML or SVG element where the attribute name starts with `aria-`.

### Expectation

The target attribute is either listed under [WAI-ARIA 1.1 Supported States and Properties](https://www.w3.org/TR/wai-aria-1.1/#states_and_properties) for the [semantic role](#semantic-role) of the element that the attribute is specified on, or it is found on the list of [WAI-ARIA 1.1 Global States and Properties](https://www.w3.org/TR/wai-aria-1.1/#global_states).

**Note:** Assessing the value of the attribute is out of scope for this rule.

## Assumptions

*There are currently no assumptions*

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

`aria-pressed` attribute is allowed for role `button`.

```html
<div role="button" aria-pressed="false"></div>
```

#### Passed example 2

`aria-pressed` attribute is allowed for `role=button` that is the implicit role for `button` element.

```html
<button aria-pressed="false"></button>
```

#### Passed example 3

Global state that is supported by all base markup elements.

```html
<div aria-hidden="true"></div>
```

### Failed

#### Failed example 1

`aria-pressed` attribute is not allowed for role `checkbox`.

```html
<div role="checkbox" aria-pressed="false"></div>
```

#### Failed example 2

`aria-pressed` attribute is not allowed for `role=checkbox` that is the implicit role for `input` elements of type `checkbox`.

```html
<input type="checkbox" aria-pressed="false">
```

### Inapplicable

#### Inapplicable example 1

No attribute that starts with `aria-`.

```html
<div role="region"></div>
```

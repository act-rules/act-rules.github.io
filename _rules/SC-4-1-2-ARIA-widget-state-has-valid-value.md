---
name: ARIA widget state has valid value
rule_type: atomic

description: |
  This rule checks that each state for an ARIA widget has a valid value.

success_criterion:
- 4.1.2 # Name, Role, Value

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
---

## Test Procedure

### Applicability

This rule applies to any [WAI-ARIA state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) that is not the empty string (""), and is specified on an HTML or SVG element that has a [WAI-ARIA widget role](https://www.w3.org/TR/wai-aria-1.1/#widget_roles) and is [included in the accessibility tree](#included-in-the-accessibility-tree).

### Expectation

Each test target has a valid value according to its [WAI-ARIA 1.1 value type](https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value).

## Assumptions

This rule assumes that the WAI-ARIA state has been specified with the intent of complying to WCAG.

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA5)
- [WAI-ARIA 1.1, Definitions of States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
- [WAI-ARIA 1.1, Characteristics of States and Properties, Value](https://www.w3.org/TR/wai-aria/#propcharacteristic_value)

## Test Cases

### Passed

#### Passed example 1

Description...

```html
<!-- code -->
```

#### Passed example 2

...

### Failed

#### Failed example 1

Description...

```html
<!-- code -->
```

#### Failed example 2

...

### Inapplicable

#### Inapplicable example 1

Description...

```html
<!-- code -->
```

#### Inapplicable example 2
...

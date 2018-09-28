---
name: Role attribute has valid value
test_type: atomic

description: |
   This rule checks that role attributes have valid values
   
success_criterion:
- 4.1.2 # Name, Role, Value

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Jey Nandakumar
---

## Test procedure

### Applicability

Any [non-empty](#non-empty) `role` attribute that is placed on an HTML or SVG element that is [exposed to assistive technologies](#exposed-to-assistive-technologies).

### Expectation

Each test target has at least one valid value as specified in the [WAI-ARIA 1.1, roles](https://www.w3.org/TR/wai-aria-1.1/#roles_categorization).

## Assumptions

*There are currently no assumptions*

## Accessibility Support

Older browsers do not support fallback roles. If multiple values are used in the role attribute, the attribute is ignored.

At the moment, none of the major assistive technologies support all roles.

## Background

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [WAI-ARIA 1.1, roles categories](https://www.w3.org/TR/wai-aria-1.1/#roles_categorization)
- [MDN: Using ARIA: Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles)

## Test Cases

### Passed

#### Passed example 1

Element with valid `role` value.

 ```html
<input type="text" role="textbox">
```

#### Passed example 2
 
Element with multiple valid `role` values.
 
```html
<span role="button link"></span>
```

#### Passed example 3
 
Element with at least one valid `role` value.
 
```html
<img role="presentation xyz" src="">
```

### Failed

#### Failed example 1

Element with invalid `role` value.

```html
<input role="invalid" value="123">
```

#### Failed example 2

Element with multiple invalid `role` value.

```html
<input type="text" role="invalid role">
```

### Inapplicable

#### Inapplicable example 1

Element with empty `role` attribute.

```html
<div role=" ">Some Content</div>
```

#### Inapplicable example 2

Element does not have `role` attribute.

```html
<div>Some Content</div>
```

#### Inapplicable example 3

Element with null `role` attribute.

```html
<div role>Some Content</div>
```

#### Inapplicable example 4

Element that is not exposed to assistive technologies.

```html
<div aria-hidden="true" role="banner">Some Content</div>
```
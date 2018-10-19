---
name: Role attribute has valid value
test_type: atomic

description: |
   This rule checks that each role attribute has a valid value
   
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

Any [non-empty](#non-empty) `role` attribute that is specified on an HTML or SVG element that is [exposed to assistive technologies](#exposed-to-assistive-technologies).

**Note:** Having a whitespace separated list of more than one token in the value of the role attribute is used for what is known as _fallback roles_. If the first token is not accessibility supported (or valid), the next one will be used for determining the [semantic role](#semantic-role) of the element, and so forth.

### Expectation

Each test target has a valid value that corresponds to a non-abstract [WAI-ARIA](https://www.w3.org/TR/wai-aria) role.

**Note:** Which specific roles to consider may depend on the type of content under test, such as web pages or digital publications, and are not limited to those defined by [WAI-ARIA](https://www.w3.org/TR/wai-aria)  alone. Roles defined in separate WAI-ARIA modules, such as the [Digital Publishing Module](https://www.w3.org/TR/dpub-aria/) or the [Graphics Module](https://www.w3.org/TR/graphics-aria/), may also be considered for this rule.

## Assumptions

*There are currently no assumptions*

## Accessibility Support

Older browsers do not support more than one token in the value for a role attribute. If multiple values are used in the role attribute, the attribute is ignored in these browsers.

## Background

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [WAI-ARIA 1.1 Categorization of Roles](https://www.w3.org/TR/wai-aria-1.1/#roles_categorization)
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
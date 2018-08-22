---
name: ARIA attributes have valid values
test_type: atomic

description: |
  This rule checks that all ARIA 1.1 attributes have valid values

success_criterion:
- 4.1.2 # Name, role, value

test_aspects:
- DOM

authors:
- Wilco Fiers
---

## Test Procedure

### Applicability

Any HTML or SVG element that has one or more [ARIA 1.1 attribute](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) starting with `aria-`.

### Expectation

Each target element must have valid values for all ARIA 1.1 attributes. What values are allowed is defined per attribute in [ARIA 1.1, Definitions of States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def). ARIA 1.1 attributes that have no value (`<p aria-expanded>`) or that are empty (`<p aria-expanded="">`) are allowed for all value types.

**Note**: ID reference and ID reference list are required to have a valid value. This rule does not require that the element(s) exists.

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html
- https://www.w3.org/TR/WCAG20-TECHS/ARIA5.html
- https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value

## Test Cases

## Test Cases

### Passed

#### Pass example 1

Element with valid true/false value

```html
<div role="textbox" aria-required="true"></div>
```

#### Pass example 2

Element with valid true/false/undefined value

```html
<div role="button" aria-expanded="undefined"></div>
```

#### Pass example 3

Element with valid tristate value

```html
<div role="button" aria-pressed="mixed"></div>
```

#### Pass example 4

Element with valid ID reference value

```html
<div role="textbox" aria-errormessage="my-error"></div>
```

#### Pass example 5

Element with valid ID reference list value

```html
<div role="combobox" aria-owns="my-textbox my-grid"></div>
```

#### Pass example 6

Element with valid integer value

```html
<div role="gridcell" aria-rowindex="2">Fred</div>
```

#### Pass example 7

Element with valid number value

```html
<div role="spinbutton" aria-valuemin="1.0" aria-valuemax="2.0" aria-valuenow="1.5"></div>
```

#### Pass example 8

Element with valid string value

```html
<div role="searchbox" aria-placeholder="MM-DD-YYYY">MM-DD-YYYY</div>
```

#### Pass example 9

Element with valid token value, attribute inappropriate for the role.

```html
<div role="button" aria-orientation="horizontal"></div>
```

#### Pass example 10

Element with valid token list value

```html
<div role="dialog" aria-dropeffect="copy move"></div>
```

#### Pass example 11

Element with empty aria attribute

```html
<div role="searchbox" aria-labelledby=""></div>
```

#### Pass example 12

Element with null aria attribute

```html
<div role="checkbox" aria-checked></div>
```

### Failed

#### Failure example 1

Element with invalid true/false value

```html
<div role="textbox" aria-required="undefined"></div>
```

#### Failure example 2

Element with invalid true/false/undefined value

```html
<div role="button" aria-expanded="mixed"></div>
```

#### Failure example 3

Element with invalid tristate value

```html
<div role="button" aria-pressed="horizontal"></div>
```

#### Failure example 4

Element with invalid ID reference value, space not allowed in a single ID

```html
<div role="textbox" aria-errormessage="error1 error2"></div>
```

#### Failure example 5

Element with invalid integer value

```html
<div role="gridcell" aria-rowindex="2.5">Fred</div>
```

#### Failure example 6

Element with invalid number value

```html
<div role="spinbutton" aria-valuemin="one" aria-valuemax="three" aria-valuenow="two"></div>
```

#### Failure example 7

Element with invalid token value

```html
<div role="main" aria-live="nope"></div>
```

#### Failure example 8

Element with valid token list value

```html
<div role="dialog" aria-dropeffect="invalid move"></div>
```

#### Failure example 9

Element with invalid empty aria attribute for token value

```html
<div role="button" aria-expanded="collapsed" aria-live="off"></div>
```

#### Failure example 10

Element with invalid empty aria attribute for custom element

```html
<my-button role="button" aria-expanded="collapsed"></my-button>
```

### Inapplicable

#### Inapplicable example 1

Element without aria-*

```html
<input type="checkbox" checked />
```

#### Inapplicable example 2

Element with a role but without aria-*

```html
<div role="button"></div>
```

#### Inapplicable example 3

Element with ARIA that isn't HTML or SVG

```html
  <math aria-hidden="true"></math>
```

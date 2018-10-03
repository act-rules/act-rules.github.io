---
name: ARIA attribute has valid value
test_type: atomic

description: |
   This rule checks that all ARIA 1.1 attributes (`aria-*`) have valid values
   
success_criterion:
- 4.1.2 # Name, Role, Value

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Wilco Fiers
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

Any [non-empty](#non-empty) attribute that is specified on an HTML or SVG element, where the attribute name starts with `aria-` and can be found in [WAI-ARIA 1.1, Definitions of States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Expectation

Each test target has a valid value according to the [value type](https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value) for that `aria-*` attribute as specified by [WAI-ARIA 1.1, Definitions of States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

**Note:** 
- For value types `ID Reference` and `ID Reference List` this rule does not require that elements with the given id(s) exists in the document, unless the attribute is a [WAI-ARIA required property](https://www.w3.org/TR/wai-aria-1.1/#requiredState) for the [semantic role](#semantic-role) of the element on which the property is specified.
- For value type `URI` ensure that the value matches the [generic URI syntax](https://www.ietf.org/rfc/rfc3986.txt). This rule does not require that the destination URL exists. 

## Assumptions

- This rule assumes that WAI-ARIA attributes on elements that are not [exposed to assistive technologies](#exposed-to-assistive-technologies)) can still impact users. For example, anything referenced through aria-labelledby does not have to be exposed to assistive technologies in order for it to become part of the accessible name. Therefore this rule is not limited to elements that are exposed to assistive technologies.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA5)
- [WAI-ARIA 1.1, Definitions of States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
- [Overview of possible ´aria-*´ attribute value types](https://www.w3.org/TR/wai-aria/#propcharacteristic_value)
- [Uniform Resource Identifier (URI): Generic Syntax (RFC 3986)](https://www.ietf.org/rfc/rfc3986.txt)

## Test Cases

### Passed

#### Passed example 1

Element with valid true/false value

 ```html
<div role="textbox" aria-required="true"></div>
```

#### Passed example 2
 
Element with valid true/false/undefined value
 
```html
<div role="button" aria-expanded="undefined"></div>
```

#### Passed example 3
 
Element with valid tristate value
 
```html
<div role="button" aria-pressed="mixed"></div>
```

#### Passed example 4
 
Element with valid ID reference value
 
```html
<div role="textbox" aria-errormessage="my-error"></div>
```

#### Passed example 5
 
Element with valid ID reference list value
 
```html
<div role="combobox" aria-owns="my-textbox my-grid"></div>
```

#### Passed example 6
 
Element with valid integer value
 
```html
<div role="gridcell" aria-rowindex="2">Fred</div>
```

#### Passed example 7
 
Element with valid number value
 
```html
<div role="spinbutton" aria-valuemin="1.0" aria-valuemax="2.0" aria-valuenow="1.5"></div>
```

#### Passed example 8
 
Element with valid string value
 
```html
<div role="searchbox" aria-placeholder="MM-DD-YYYY">MM-DD-YYYY</div>
```

#### Passed example 9
 
Element with valid token value, attribute inappropriate for the role.
 
```html
<div role="button" aria-orientation="horizontal"></div>
```

#### Passed example 10
 
Element with valid token list value
 
```html
<div role="dialog" aria-dropeffect="copy move"></div>
```

### Failed

#### Failed example 1

Element with invalid true/false value

```html
<div role="textbox" aria-required="undefined"></div>
```

#### Failed example 2

Element with invalid true/false/undefined value

```html
<div role="button" aria-expanded="mixed"></div>
```

#### Failed example 3

Element with invalid tristate value

```html
<div role="button" aria-pressed="horizontal"></div>
```

#### Failed example 4

Element with invalid ID reference value, space not allowed in a single ID

```html
<div role="textbox" aria-errormessage="error1 error2"></div>
```

#### Failed example 5

Element with invalid integer value

```html
<div role="gridcell" aria-rowindex="2.5">Fred</div>
```

#### Failed example 6

Element with invalid number value

```html
<div role="spinbutton" aria-valuemin="one" aria-valuemax="three" aria-valuenow="two"></div>
```

#### Failed example 7

Element with invalid token value

```html
<div role="main" aria-live="nope"></div>
```

#### Failed example 8

Element with invalid token list value

```html
<div role="dialog" aria-dropeffect="invalid move"></div>
```

#### Failed example 9

Element with invalid empty aria attribute for token value

```html
<div role="button" aria-expanded="collapsed" aria-live="off"></div>
```
 
#### Failed example 10
 
Element with invalid true/false/undefined value for custom element
 
```html
<my-button role="button" aria-expanded="collapsed"></my-button>
```

### Inapplicable

#### Inapplicable example 1

Element does not have any `aria-*` attributes

```html
<div>Some Content</div>
```

#### Inapplicable example 2

Element has ARIA role, but no attributes that start with `aria-`

```html
<div role="button">Some Content</div>
```

#### Inapplicable example 3

Element with null ARIA attribute
```html
<div role="checkbox" aria-checked></div>
```

#### Inapplicable example 4

Element with empty ARIA attribute

```html
<div role="searchbox" aria-labelledby=""></div>
```

#### Inapplicable example 5

Element with ARIA attribute, where element isn't HTML or SVG
  
 ```html
  <math aria-hidden="true"></math>
```

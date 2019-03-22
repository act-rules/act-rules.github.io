---
name: Required ARIA property has valid value
rule_type: atomic

description: |
   This rule checks that each required WAI-ARIA property has a valid value.
   
success_criterion:
- 1.3.1 # Info and Relationships

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Wilco Fiers
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

Any [WAI-ARIA required state or property](https://www.w3.org/TR/wai-aria-1.1/#requiredState) that 
- is specified on an HTML or SVG element 
- is one of the `aria-*` attributes included in the [accessible name computation](https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_te), or is specified on an element that is [included in the accessibility tree](#included-in-the-accessibility-tree) or is [focusable](#focusable),
- is not the empty string (""),
- does not have a default value listed under [WAI-ARIA implicit value for role](https://www.w3.org/TR/wai-aria-1.1/#implictValueForRole).

### Expectation

Each test target has a valid value according to its [WAI-ARIA 1.1 value type](https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value).

For value types `ID Reference` and `ID Reference List` at least one of the elements with the given ids exists in the same [document tree](https://www.w3.org/TR/dom41/#document-trees) or [shadow tree](https://www.w3.org/TR/dom41/#shadow-trees) as the element that specifies the target attribute. 

For value type `URI` the value matches the [generic URI syntax](https://www.ietf.org/rfc/rfc3986.txt).

**Note:** 
For value type `URI`, this rule does not require that the destination URI exists. 

## Assumptions

- This rule assumes that elements that are not [included in the accessibility tree](#included-in-the-accessibility-tree) or are [focusable](#focusable) can still impact users if they are used for the [accessible name computation](https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_te). Therefore the applicability of this rule also includes `aria-*` attributes that participate in the accessible name computation as well as [WAI-ARIA properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) that are specified on elements that are included in the accessibility tree or are focusable.
- The WAI-ARIA `property` is being used to comply to WCAG.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA5)
- [WAI-ARIA 1.1, Definitions of States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
- [WAI-ARIA 1.1, Characteristics of States and Properties, Value](https://www.w3.org/TR/wai-aria/#propcharacteristic_value)
- [Uniform Resource Identifier (URI): Generic Syntax (RFC 3986)](https://www.ietf.org/rfc/rfc3986.txt)

## Test Cases

### Passed

#### Passed example 1

`aria-required` property with valid true/false value

 ```html
<div role="textbox" aria-required="true"></div>
```

#### Passed example 2
 
`aria-expanded` state with valid true/false/undefined value
 
```html
<div role="button" aria-expanded="undefined"></div>
```

#### Passed example 3
 
`aria-pressed` state with valid tristate value
 
```html
<div role="button" aria-pressed="mixed"></div>
```

#### Passed example 4
 
`aria-errormessage` property with valid ID reference value
 
```html
<div role="textbox" aria-errormessage="my-error"></div>
```

#### Passed example 5
 
`aria-owns` property with valid ID reference list value
 
```html
<div role="combobox" aria-owns="my-textbox my-grid"></div>
```

#### Passed example 6
 
`aria-rowindex` property with valid integer value
 
```html
<div role="gridcell" aria-rowindex="2">Fred</div>
```

#### Passed example 7
 
`aria-valuemin`, `aria-valuemax` and `aria-valuenow` properties with valid number values
 
```html
<div role="spinbutton" aria-valuemin="1.0" aria-valuemax="2.0" aria-valuenow="1.5"></div>
```

#### Passed example 8
 
`aria-placeholder` property with valid string value
 
```html
<div role="searchbox" aria-placeholder="MM-DD-YYYY">MM-DD-YYYY</div>
```

#### Passed example 9
 
`aria-orientation` property with valid token value (property inappropriate for the role)
 
```html
<div role="button" aria-orientation="horizontal"></div>
```

#### Passed example 10
 
`aria-dropeffect` property with valid token list value
 
```html
<div role="dialog" aria-dropeffect="copy move"></div>
```

#### Passed example 11

`aria-controls`, which is a required property for the role `scrollbar`, has `ID Reference list` that references at least one element existing in the same document tree. 

```html
<div id="content1">Lorem ipsum...</div>
<div role="scrollbar" aria-controls="content1 content2" aria-orientation="vertical" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"></div>
```

### Failed

#### Failed example 1

`aria-required` property with invalid true/false value

```html
<div role="textbox" aria-required="undefined"></div>
```

#### Failed example 2

`aria-expanded` state with invalid true/false/undefined value

```html
<div role="button" aria-expanded="mixed"></div>
```

#### Failed example 3

`aria-pressed` state with invalid tristate value

```html
<div role="button" aria-pressed="horizontal"></div>
```

#### Failed example 4

`aria-errormessage` property with invalid ID reference value, since space is not allowed in a single ID

```html
<div role="textbox" aria-errormessage="error1 error2"></div>
```

#### Failed example 5

`aria-rowindex` property with invalid integer value

```html
<div role="gridcell" aria-rowindex="2.5">Fred</div>
```

#### Failed example 6

`aria-valuemin`, `aria-valuemax` and `aria-valuenow` property with invalid number values

```html
<div role="spinbutton" aria-valuemin="one" aria-valuemax="three" aria-valuenow="two"></div>
```

#### Failed example 7

`aria-live` property with invalid token value

```html
<div role="main" aria-live="nope"></div>
```

#### Failed example 8

Element with invalid token list value

```html
<div role="dialog" aria-dropeffect="invalid move"></div>
```
 
#### Failed example 9
 
`aria-expanded` state with invalid true/false/undefined value for custom element
 
```html
<my-button role="button" aria-expanded="collapsed"></my-button>
```

#### Failed example 10

`aria-controls`, which is a required property for the role `scrollbar`, references an element that does not exist in the same document tree.

```html
<div role="scrollbar" aria-controls="content1" aria-orientation="vertical" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"></div>
```

### Inapplicable

#### Inapplicable example 1

Element does not have any ARIA states or properties

```html
<div>Some Content</div>
```

#### Inapplicable example 2

Element has ARIA role, but no ARIA states or properties

```html
<div role="button">Some Content</div>
```

#### Inapplicable example 3

`aria-checked` state with empty value

```html
<div role="checkbox" aria-checked></div>
```

#### Inapplicable example 4

`aria-labelledby` property with empty value

```html
<div role="searchbox" aria-labelledby=""></div>
```

#### Inapplicable example 5

`aria-hidden` state on an element that is not an HTML or SVG element

 ```html
  <math aria-hidden="true"></math>
```

---
id: 6a7281
name: ARIA state or property has valid value
rule_type: atomic
description: |
  This rule checks that each ARIA state or property has a valid value.
accessibility_requirements:
  aria11:state_prop_values:
    title: ARIA 1.1, 6.3 Values for States and Properties
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Wilco Fiers
---

## Applicability

The rule applies to any [WAI-ARIA 1.1 state or property][] that is not empty (`""`), and is specified on an HTML or SVG element.

## Expectation

Each test target has a valid value according to its [WAI-ARIA 1.1 value type][].

## Assumptions

This rule assumes that the default value of the attributes do not match the author's intention. ARIA state and properties have a default value as defined in the [WAI-ARIA Specifications][], and this default is used when the provided value is invalid. In some case, the default value may happen to match the author's intention in using this attribute. In such a case, the rule will fail without creating an accessibility issue.

## Accessibility Support

Some user agents treat the value of `aria-*` attributes as case-sensitive (even when these are not ID) while some treat them as case-insensitive.

## Background

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5)
- [WAI-ARIA 1.1, Definitions of States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
- [WAI-ARIA 1.1, Characteristics of States and Properties, Value](https://www.w3.org/TR/wai-aria/#propcharacteristic_value)
- [Uniform Resource Identifier (URI): Generic Syntax (RFC 3986)](https://www.ietf.org/rfc/rfc3986.txt)

Depending on the role of an elements, certain WAI-ARIA properties are or not required. This rule considers that when such a property has a value type of `ID reference` or `ID reference list`, then an element with one of the given ids must exist. On another hand, if a property that is not required refers to an incorrect id, it is less clear that this will cause an accessibility issue (the property is not required on the first place, so the element can live without it, and maybe later interaction with the page will create the correct id and this is the intended behavior). Therefore, the rule has no extra requirement for properties with type `ID reference` or `ID reference list` that are not required.

For value type `URI`, this rule does not require that the destination URI exists. Testing that the link is not dead is out of scope for the rule and therefore ignored.

## Test Cases

### Passed

#### Passed Example 1

This `div` element has an `aria-required` property with valid `true/false` value.

```html
<div role="textbox" aria-required="true" aria-label="A required textbox"></div>
```

#### Passed Example 2

This `div` element has an `aria-expanded` state with valid `true/false/undefined` value.

```html
<div role="button" aria-expanded="undefined">A button</div>
```

#### Passed Example 3

This `div` element has an `aria-pressed` state with valid tristate value.

```html
<div role="button" aria-pressed="mixed">An other button</div>
```

#### Passed Example 4

This `div` element with the `aria-owns` property, has a valid ID reference list value.

```html
<h1>Shopping list</h1>
<div role="list" aria-owns="item1 item2"></div>
<div id="item1">Apples</div>
<div id="item2">Bananas</div>
```

#### Passed Example 5

This `div` element has an `aria-rowindex` property with valid integer value.

```html
<div role="gridcell" aria-rowindex="2">Fred</div>
```

#### Passed Example 6

This `div` element has an `aria-valuemin`, `aria-valuemax` and `aria-valuenow` properties with valid number values.

```html
<div role="spinbutton" aria-valuemin="1.0" aria-valuemax="2.0" aria-valuenow="1.5" aria-label="Select a value"></div>
```

#### Passed Example 7

This `div` element has an `aria-placeholder` property with valid string value.

```html
<div role="textbox" aria-placeholder="MM-DD-YYYY" aria-label="Your birthdate">
	MM-DD-YYYY
</div>
```

#### Passed Example 8

This `div` element has an `aria-dropeffect` property with valid token list value.

```html
<div role="dialog" aria-dropeffect="copy move"></div>
```

#### Passed Example 9

The second `div` element has an `aria-controls`, which is a required property for the role `scrollbar`, has `ID Reference list` that references at least one element existing in the same document tree.

```html
<div id="content1">Lorem ipsum...</div>
<div role="scrollbar" aria-controls="content1 content2"></div>
```

#### Passed Example 10

This `div` element has an `aria-errormessage`, which is not a required property & therefore it is not essential that the element referred by the `ID reference` exists, although this element may be added programmatically when an error is detected.

```html
<div role="textbox" aria-errormessage="my-error" aria-label="A textbox"></div>
```

### Failed

#### Failed Example 1

This `div` element has an `aria-required` property with invalid `true/false` value.

```html
<div role="textbox" aria-required="undefined" aria-label="A required textbox"></div>
```

#### Failed Example 2

This `div` element has an `aria-expanded` state with invalid `true/false/undefined` value.

```html
<div role="button" aria-expanded="mixed">A button</div>
```

#### Failed Example 3

This `div` element has an `aria-pressed` state with invalid tristate value.

```html
<div role="button" aria-pressed="horizontal">An other button</div>
```

#### Failed Example 4

This `div` element has an `aria-errormessage` property with invalid ID reference value, since space is not allowed in a single ID.

```html
<div role="textbox" aria-errormessage="error1 error2" aria-label="A textbox with an error"></div>
```

#### Failed Example 5

This `div` element has an `aria-rowindex` property with invalid integer value.

```html
<div role="gridcell" aria-rowindex="2.5">Fred</div>
```

#### Failed Example 6

This `div` element has an `aria-valuemin`, `aria-valuemax` and `aria-valuenow` property with invalid number values.

```html
<div role="spinbutton" aria-valuemin="one" aria-valuemax="three" aria-valuenow="two" aria-label="Choose a value"></div>
```

#### Failed Example 7

This `div` element has an `aria-live` property with invalid token value.

```html
<div role="main" aria-live="nope"></div>
```

#### Failed Example 8

This `div` element has an Element with invalid token list value.

```html
<div role="dialog" aria-dropeffect="invalid move"></div>
```

#### Failed Example 9

This `div` element has an `aria-expanded` state with invalid `true/false/undefined` value for custom element.

```html
<my-button role="button" aria-expanded="collapsed">My button</my-button>
```

#### Failed Example 10

This `div` element has an `aria-controls`, which is a required property for the role `scrollbar`, references an element that does not exist in the same document tree.

```html
<div role="scrollbar" aria-controls="content1"></div>
```

### Inapplicable

#### Inapplicable Example 1

This `div` element does not have any ARIA states or properties.

```html
<div>Some Content</div>
```

#### Inapplicable Example 2

This `div` element has ARIA role, but no ARIA states or properties.

```html
<div role="button">Some Content</div>
```

#### Inapplicable Example 3

This `div` element has an `aria-checked` state with empty value.

**Note**: The HTML validator flags an `aria-checked` attribute with an empty value as an issue. However WAI-ARIA 1.1 indicates `aria-checked` has a default value of `undefined`.

```html
<div role="checkbox" aria-checked>Accept terms and conditions</div>
```

#### Inapplicable Example 4

This `div` element has an `aria-hidden` state on an element that is not an HTML or SVG element.

```xml
<math aria-hidden="true"></math>
```

[wai-aria specifications]: #wai-aria-specifications 'List of WAI-ARIA Specifications'
[wai-aria 1.1 state or property]: https://www.w3.org/TR/wai-aria-1.1/#state_prop_def
[wai-aria 1.1 value type]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value

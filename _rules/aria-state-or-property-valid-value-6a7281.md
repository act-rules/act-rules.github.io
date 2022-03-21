---
id: 6a7281
name: ARIA state or property has valid value
rule_type: atomic
description: |
  This rule checks that each ARIA state or property has a valid value type.
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
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [WAI-ARIA 1.1 state or property](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) that is not empty (""), and that is specified on an [HTML or SVG element][].

## Expectation

Each test target has a valid value according to its [WAI-ARIA 1.1 value type](https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value).

For value types `ID Reference` and `ID Reference List` for [WAI-ARIA required properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState) at least one of the elements with the given ids exists in the same [document tree](https://dom.spec.whatwg.org/#document-trees) or in the same [shadow tree](https://dom.spec.whatwg.org/#shadow-trees) as the element that specifies the target attribute.

For value type `URI` the value matches the [generic URI syntax](https://www.ietf.org/rfc/rfc3986.txt).

## Assumptions

This rule catches values that are undefined in [WAI-ARIA Specifications][], and where the resulting behavior in user agents are also undefined in WAI-ARIA. This might lead to accessibility issues, if the intention was to use behavior defined in [WAI-ARIA Specifications][]. When values are used that do not have a defined behavior in [WAI-ARIA Specifications][], the HTML/SVG specification decides what default values should be used, since it is defined here what should happen when an invalid value is used for an attribute. If the default value for invalid attribute values happens to match the author's intention for the value, there will not be an accessibility issue.

## Accessibility Support

Some user agents treat the value of `aria-*` attribute as case-sensitive (even when these are not ID) while some treat them as case-insensitive.

## Background

Only for [WAI-ARIA required properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState) with value types `ID Reference` and `ID Reference List` is there a requirement that the elements with the given ids actually exists. For non-required properties, this is not a requirement. For example, the value of the `aria-errormessage` attribute on an `input` does not need to reference an `id` that exists within the same document, because an [HTML element](https://html.spec.whatwg.org/#htmlelement) with such and `id` may be created in response to an [event](https://dom.spec.whatwg.org/#event) that may or may not happen.

For value type `URI`, this rule does not require that the destination URI exists.

### Related rules

- [ARIA state or property is permitted](https://act-rules.github.io/rules/5c01ea)

### Bibliography

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5)
- [WAI-ARIA 1.1, Definitions of States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
- [WAI-ARIA 1.1, Characteristics of States and Properties, Value](https://www.w3.org/TR/wai-aria/#propcharacteristic_value)
- [Uniform Resource Identifier (URI): Generic Syntax (RFC 3986)](https://www.ietf.org/rfc/rfc3986.txt)

## Test Cases

### Passed

#### Passed Example 1

This `aria-required` property has a valid true/false value.

```html
<div role="textbox" aria-required="true" aria-label="A required textbox"></div>
```

#### Passed Example 2

This `aria-expanded` state has a valid true/false/undefined value.

```html
<div role="button" aria-expanded="undefined">A button</div>
```

#### Passed Example 3

This `aria-pressed` state has a valid tristate value.

```html
<div role="button" aria-pressed="mixed">An other button</div>
```

#### Passed Example 4

This `aria-errormessage` property has a valid ID reference value.

```html
<div role="textbox" aria-errormessage="my-error" aria-label="A textbox"></div>
```

#### Passed Example 5

This `aria-owns` property has a valid ID reference list value.

```html
<h1>Shopping list</h1>
<div role="list" aria-owns="item1 item2"></div>
<div id="item1">Apples</div>
<div id="item2">Bananas</div>
```

#### Passed Example 6

This `aria-rowindex` property has a valid integer value.

```html
<div role="gridcell" aria-rowindex="2">Fred</div>
```

#### Passed Example 7

These `aria-valuemin`, `aria-valuemax` and `aria-valuenow` properties have valid number values.

```html
<div role="spinbutton" aria-valuemin="1.0" aria-valuemax="2.0" aria-valuenow="1.5" aria-label="Select a value"></div>
```

#### Passed Example 8

This `aria-placeholder` property has a valid string value.

```html
<div role="textbox" aria-placeholder="MM-DD-YYYY" aria-label="Your birthdate">
	MM-DD-YYYY
</div>
```

#### Passed Example 9

This `aria-dropeffect` property has a valid token list value.

```html
<div role="dialog" aria-dropeffect="copy move"></div>
```

#### Passed Example 10

This `aria-controls` property, which is required for the role `scrollbar`, has an `ID Reference list` value that references at least one element existing in the same document tree.

```html
<div id="content1">Lorem ipsum...</div>
<div
	role="scrollbar"
	aria-controls="content1 content2"
	aria-orientation="vertical"
	aria-valuemax="100"
	aria-valuemin="0"
	aria-valuenow="25"
></div>
```

### Failed

#### Failed Example 1

This `aria-required` property has an invalid true/false value.

```html
<div role="textbox" aria-required="undefined" aria-label="A required textbox"></div>
```

#### Failed Example 2

This `aria-expanded` state has an invalid true/false/undefined value.

```html
<div role="button" aria-expanded="mixed">A button</div>
```

#### Failed Example 3

This `aria-pressed` state has an invalid tristate value.

```html
<div role="button" aria-pressed="horizontal">An other button</div>
```

#### Failed Example 4

This `aria-errormessage` property has an invalid ID reference value, since it must reference and single ID and space is not allowed in it.

```html
<div role="textbox" aria-errormessage="error1 error2" aria-label="A textbox with an error"></div>
```

#### Failed Example 5

This `aria-rowindex` property has an invalid integer value.

```html
<div role="gridcell" aria-rowindex="2.5">Fred</div>
```

#### Failed Example 6

These `aria-valuemin`, `aria-valuemax` and `aria-valuenow` properties have invalid number values.

```html
<div role="spinbutton" aria-valuemin="one" aria-valuemax="three" aria-valuenow="two" aria-label="Choose a value"></div>
```

#### Failed Example 7

This `aria-live` property has an invalid token value.

```html
<div role="main" aria-live="nope"></div>
```

#### Failed Example 8

This `aria-dropeffect` property has an invalid token list value.

```html
<div role="dialog" aria-dropeffect="invalid move"></div>
```

#### Failed Example 9

This `aria-expanded` state has an invalid true/false/undefined value.

```html
<my-button role="button" aria-expanded="collapsed">My button</my-button>
```

#### Failed Example 10

This `aria-controls` property, which is required for the role `scrollbar`, references an element that does not exist in the same document tree.

```html
<div
	role="scrollbar"
	aria-controls="content1"
	aria-orientation="vertical"
	aria-valuemax="100"
	aria-valuemin="0"
	aria-valuenow="25"
></div>
```

### Inapplicable

#### Inapplicable Example 1

This element does not have any ARIA states or properties

```html
<div>Some Content</div>
```

#### Inapplicable Example 2

This element has an ARIA role, but no ARIA states or properties

```html
<div role="button">Some Content</div>
```

#### Inapplicable Example 3

This `aria-checked` state has an empty value.

**Note**: The HTML validator flags an `aria-checked` attribute with an empty value as an issue. However WAI-ARIA 1.1 indicates `aria-checked` has a default value of `undefined`.

```html
<div role="checkbox" aria-checked>Accept terms and conditions</div>
```

#### Inapplicable Example 4

This `aria-hidden` state is an attribute for an element that is not an [HTML or SVG element][].

```xml
<math aria-hidden="true"></math>
```

[wai-aria specifications]: #wai-aria-specifications 'List of WAI-ARIA Specifications'
[html or svg element]: #namespaced-element

---
name: ARIA attribute has valid value
description: |
  This rule checks that `aria-*` attributes have a valid value
  
success_criterion:
- 4.1.2 # Name, Role, Value

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

Any non-empty attribute that is placed on an HTML or SVG element, and where the attribute name starts with `aria-`.

### Expectation

Each of the applicable attributes have a valid value according to the [value type](https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value) for the given state or property (`aria-*` attribute) as specified by [WAI-ARIA](https://www.w3.org/TR/wai-aria).

**Note:** 
- If the value of the `aria-*` attribute is of value type `ID Reference` or `ID Reference List` ensure that an element with the given id exists in the document. 
- If the value of the `aria-*` attribute is of value type `URI` ensure that it matches the [generic URI syntax](https://www.ietf.org/rfc/rfc3986.txt).

## Assumptions

- Checking that linked resources in `aria-*` attributes with value type `URI` are available is considered out of scope for this rule. For this rule it is considered sufficient that the value matches the [generic URI syntax](https://www.ietf.org/rfc/rfc3986.txt).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA5)
- [Overview of possible ´aria-*´ attribute value types](https://www.w3.org/TR/wai-aria/#propcharacteristic_value)
- [Uniform Resource Identifier (URI): Generic Syntax (RFC 3986)](https://www.ietf.org/rfc/rfc3986.txt)

## Test Cases // UPDATE

### Passed

Element has correct value for `aria-*` attribute

```html
<div id="someElementId">...</div>
<select role="combobox" aria-controls="someElementId"></select>
```

### Failed

Element has wrong value type for `aria-*` attribute

```html
<select role="combobox" aria-controls=""></select>
```

### Inapplicable

Element does not have any `aria-*` attributes

```html
<div>Some Content</div>
```

Element has ARIA role, but no attributes that start with `aria-`

```html
<div role="button">Some Content</div>
```

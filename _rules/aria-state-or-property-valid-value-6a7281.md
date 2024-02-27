---
id: 6a7281
name: ARIA state or property has valid value
rule_type: atomic
description: |
  This rule checks that each ARIA state or property has a valid value type.
accessibility_requirements:
  aria12:propcharacteristic_value:
    title: ARIA 1.2, 6.2.4 Value (Characteristics of States and Properties)
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
  wcag20:1.3.1: # Info and Relationships (A)
    secondary: This success criterion is **less strict** than this rule. This is because the rule does not ignore irrelevant ARIA properties. Some of the failed examples satisfy this success criterion.
  wcag20:4.1.2: # Name, Role, Value (A)
    secondary: This success criterion is **less strict** than this rule. This is because the rule does not ignore irrelevant ARIA properties. Some of the failed examples satisfy this success criterion.
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

This rule applies to any [WAI-ARIA state or property][] that has a non-empty ("") [attribute value][], and that is specified on an [HTML or SVG element][].

## Expectation

Each test target has an [attribute value][] that is valid according to its [WAI-ARIA value type][value type].

**Exception**: For value types `ID Reference` and `ID Reference List` no ID referenced elements are required.

## Assumptions

There are no assumptions.

## Accessibility Support

Some user agents treat the value of `aria-*` attribute as case-sensitive (even when these are not ID) while some treat them as case-insensitive.

## Background

Using invalid ARIA attribute values is often the result of a typo or other developer error. These attributes are then either ignored, or a default value is assumed by browsers and assistive technologies. This often means that a state or property which should exist is missing or has an unexpected value. If the default value for invalid attribute values happens to match the author's intention for the value, there will not be an accessibility issue.

This rule does not require the target of an `ID Reference` to exist. This is because referencing an element that does not exist, and not having the reference at all has the same end result. A common use case for using `ID Reference` for a non-existing ID is to use a static `aria-errormessage` on an `input` element, and to only insert the element with the error message if there is an actual error. There are some cases in which ID references are required. These are tested in a separate rule.

### Related rules

- [ARIA state or property is permitted](https://www.w3.org/WAI/standards-guidelines/act/rules/5c01ea/)
- [ARIA required ID references exist](https://www.w3.org/WAI/standards-guidelines/act/rules/in6db8/)

### Bibliography

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5)
- [WAI-ARIA 1.2, Definitions of States and Properties](https://www.w3.org/TR/wai-aria-1.2/#state_prop_def)
- [WAI-ARIA 1.2, Characteristics of States and Properties, Value](https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value)
- [Uniform Resource Identifier (URI): Generic Syntax (RFC 3986)](https://www.ietf.org/rfc/rfc3986.txt)

## Test Cases

### Passed

#### Passed Example 1

The `aria-label` [attribute value][] of `Family name` is allowed for the `string` [value type][].

```html
<div role="textbox" aria-label="Family name"></div>
```

#### Passed Example 2

The `aria-required` [attribute value][] of `true` is allowed for the `true/false` [value type][].

```html
<div role="textbox" aria-required="true" aria-label="Family name"></div>
```

#### Passed Example 3

The `aria-expanded` [attribute value][] of `undefined` is allowed for the `true/false/undefined` [value type][].

```html
<div role="button" aria-expanded="undefined">A button</div>
```

#### Passed Example 4

The `aria-pressed` [attribute value][] of `mixed` is allowed for the `tristate` [value type][].

```html
<div role="button" aria-pressed="mixed">Partially pressed button</div>
```

#### Passed Example 5

The `aria-errormessage` [attribute value][] is an `ID Reference` [value type][]. The presence of an element with a matching ID is not required by this rule.

```html
<div role="textbox" aria-errormessage="my-error" aria-label="A textbox"></div>
```

#### Passed Example 6

The `aria-owns` [attribute value][] is a valid `ID Reference List` [value type][]. Both tokens reference elements that exist in the same [DOM tree][].

```html
<h1>Shopping list</h1>
<div role="list" aria-owns="item1 item2"></div>
<div id="item1">Apples</div>
<div id="item2">Bananas</div>
```

#### Passed Example 7

The `aria-rowindex` [attribute value][] of 2 is a valid `integer` [value type][].

```html
<div role="gridcell" aria-rowindex="2">Fred</div>
```

#### Passed Example 8

The `aria-valuemin`, `aria-valuemax` and `aria-valuenow` [attribute values][attribute value] are valid for a `number` [value type][].

```html
<div role="spinbutton" aria-valuemin="1.0" aria-valuemax="2.0" aria-valuenow="1.5" aria-label="Select a value"></div>
```

#### Passed Example 9

The `aria-current` [attribute value][] of `page` is a valid `token` [value type][].

```html
<a href="/" aria-current="page">Home</a>
```

#### Passed Example 10

The `aria-relevant` [attribute value][] has a `text` and `removals` tokens. Both are valid tokens for a `aria-relevant` `token list` [value type][].

```html
<div role="alert" aria-relevant="text removals"></div>
```

### Failed

#### Failed Example 1

The `aria-required` [attribute value][] of `undefined` is not valid for a `true/false` [value type][].

```html
<div role="textbox" aria-required="undefined" aria-label="A required textbox"></div>
```

#### Failed Example 2

The `aria-expanded` [attribute value][] of `collapsed` is not valid for a `true/false/undefined` [value type][].

```html
<div role="button" aria-expanded="collapsed">A button</div>
```

#### Failed Example 3

The `aria-pressed` [attribute value][] of `horizontal` is not valid for a `tristate` [value type][].

```html
<div role="button" aria-pressed="horizontal">An other button</div>
```

#### Failed Example 4

The `aria-rowindex` [attribute value][] of `2.5` is not valid for an `integer` [value type][] because it is a decimal number.

```html
<div role="gridcell" aria-rowindex="2.5">Fred</div>
```

#### Failed Example 5

The `aria-valuemin`, `aria-valuemax` and `aria-valuenow` [attribute values][attribute value] are `strings`. These should all be of the `number` [value type][] instead.

```html
<div role="spinbutton" aria-valuemin="one" aria-valuemax="three" aria-valuenow="two" aria-label="Choose a value"></div>
```

#### Failed Example 6

The `aria-live` [attribute value][] of `page` is not a valid `token`, because `page` is not a token for `aria-live`.

```html
<div role="main" aria-live="page"></div>
```

#### Failed Example 7

The `aria-relevant` [attribute value][] has the two tokens `text` and `always`. The `always` token is not valid for the `aria-relevant` `token list`. In order to be a valid value, all tokens must be valid.

```html
<div role="alert" aria-relevant="text always"></div>
```

### Inapplicable

#### Inapplicable Example 1

Element does not have any ARIA states or properties

```html
<div>Some Content</div>
```

#### Inapplicable Example 2

Element has ARIA role, but no ARIA states or properties

```html
<div role="button">Some Content</div>
```

#### Inapplicable Example 3

The `aria-live` attribute does not have a value.

```html
<div role="alert" aria-live>Remember to be awesome!</div>
```

#### Inapplicable Example 4

The `aria-hidden` attribute is not on an [HTML or SVG element][].

```xml
<math aria-hidden="false"></math>
```

[html or svg element]: #namespaced-element
[value type]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value
[wai-aria state or property]: https://www.w3.org/TR/wai-aria-1.2/#state_prop_def
[attribute value]: #attribute-value

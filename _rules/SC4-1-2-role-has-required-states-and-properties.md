---
name: Role has required states and properties
description: |
  Elements that have an explicit role must also specify all required states and properties
  
success_criterion:
- 4.1.2 # Name, Role, Value

test_aspects:
- DOM Tree

authors:
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

Any HTML or SVG element that has an [explicit semantic role](#semantic-role), except if the element has an [implicit semantic role](#implicit-role) that is identical to the explicit semantic role. 

### Expectation

For each test target, the [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState) for the role are present, unless the state or property has a default value listed under [WAI-ARIA implicit value for role](https://www.w3.org/TR/wai-aria-1.1/#implictValueForRole). 

**Note:** This rule does not test whether the required states and properties have correct values, only that the attributes are present and are not the empty string ("").

## Assumptions

- The applicability of this rule is limited to [explicit semantic roles](#semantic-role) based on an assumption that all native HTML and SVG elements have native attributes that are mapped to all of the [required states and properties](https://www.w3.org/TR/wai-aria/#requiredState) for the [implicit semantic role](#semantic-role) of the element.

- The ARIA `role` is being used to comply to WCAG.

## Accessibility Support

This rule relies on browsers and assistive technologies to support leaving out [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState) when a [WAI-ARIA implicit value for role](https://www.w3.org/TR/wai-aria-1.1/#implictValueForRole) is specified in [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1).

**Note:** The required states and properties with implicit values can be found in the Core Accessibility API Mappings 1.1 [Overview of default values for missing required attributes](https://www.w3.org/TR/core-aam-1.1/#authorErrorDefaultValuesTable).

## Background

- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA5)
- [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState)
- [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)

## Test Cases

### Passed

#### Passed example 1

Element has required states (no properties required for this role)

```html
<div role="option" aria-selected="false"></div>
```

#### Passed example 2

Implicit value for roles: ´option´ role has an implicit value (´false´) specified for the required state ´aria-selected´

```html
<div role="option"></div>
```

#### Passed example 3

Implicit value for roles: ´option´ role has an implicit value (´false´) specified for the required state ´aria-selected´, here defined without value

```html
<div role="option" aria-selected></div>
```

#### Passed example 4

Implicit value for roles: ´option´ role has an implicit value (´false´) specified for the required state ´aria-selected´, here defined with only whitespace instead of a value

```html
<div role="option" aria-selected=" "></div>
```

#### Passed example 5

Element has required properties, and required state `aria-expanded` has an implicit value

```html
<div role="combobox" aria-controls="someElementId"></div>
```

#### Passed example 6

Element has required properties, but with incorrect value since no element with with the given id(s) exists in the document

```html
<div role="combobox" aria-controls="foo"></div>
```

### Failed

#### Failed example 1

Element does not list required states and properties (´aria-controls´ is required property for ´combobox´)

```html
<div role="combobox"></div>
```

#### Failed example 2

Required states and properties does not have non-empty value

```html
<div role="combobox" aria-controls=""></div>
```

### Inapplicable

#### Inapplicable example 1

Element does not have a semantic role

```html
<div>Some Content</div>
```

#### Inapplicable example 2

Element does not have an explicit semantic role

```html
<nav></nav>
```

#### Inapplicable example 3

Element has an implicit semantic role that is identical to the explicit semantic role

```html
<input type="checkbox" role="checkbox">
```

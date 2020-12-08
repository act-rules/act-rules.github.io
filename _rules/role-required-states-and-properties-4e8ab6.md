---
id: 4e8ab6
name: Element with `role` attribute has required states and properties
rule_type: atomic
description: |
  This rule checks that elements that have an explicit role also specify all required states and properties.
accessibility_requirements:
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:ARIA5: # Using WAI-ARIA state and property attributes to expose the state of a user interface component
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
---

## Applicability

This rule applies to any HTML or SVG element that is [included in the accessibility tree][] and has an [explicit semantic role][], except if the element has an [implicit semantic role][] that is identical to the [explicit semantic role][].

## Expectation

For each test target, the [WAI-ARIA required states and properties][] for the role are set and not empty (`""`), unless the state or property has a default value listed under [WAI-ARIA implicit value for role][].

**Note**: In [WAI-ARIA 1.2][], required states and properties will no longer have a default value.

## Assumptions

- The applicability of this rule is limited to [explicit semantic roles][explicit semantic role] based on an assumption that all native HTML and SVG elements have native attributes that are mapped to all of the [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria/#requiredState) for the [implicit semantic role][] of the element.

- The ARIA `role` is being used to comply to WCAG.

## Accessibility Support

This rule relies on browsers and assistive technologies to support leaving out [WAI-ARIA required states and properties][] when a [WAI-ARIA implicit value for role][] is specified in [WAI-ARIA Specifications](#wai-aria-specifications).

**Note:** The required states and properties with implicit values can be found in the Core Accessibility API Mappings 1.1 [Overview of default values for missing required attributes](https://www.w3.org/TR/core-aam-1.1/#authorErrorDefaultValuesTable).

## Background

- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5)
- [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState)
- [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)

## Test Cases

### Passed

#### Passed Example 1

This `checkbox` has the required property `aria-checked`.

```html
<div role="checkbox" aria-checked="false"></div>
```

#### Passed Example 2

This `scrollbar` has the required properties `aria-controls` and `aria-valuenow`. `aria-valuemin` has a default value of 0 and `aria-valuemax` of 100.

```html
<div role="scrollbar" aria-controls="content" aria-valuenow="0"></div>
<main id="content"></main>
```

#### Passed Example 3

This `combobox` has required properties `aria-controls` and `aria-expanded`. `aria-controls` references an element that does not exist, but may be added to the page when expanded.

```html
<div role="combobox" aria-controls="someElementId" aria-expanded="false"></div>
```

### Failed

#### Failed Example 1

This `combobox` is missing the required `aria-controls` property.

**Note**: In [WAI-ARIA 1.2][], `combobox` will also require `aria-expanded`.

```html
<div role="combobox" aria-expanded="true"></div>
```

#### Failed Example 2

This `combobox` has an empty value for the required `aria-controls` property.

```html
<div role="combobox" aria-controls="" aria-expanded="true"></div>
```

### Inapplicable

#### Inapplicable Example 1

This `div` does not have a [semantic role](#semantic-role).

```html
<div>Some Content</div>
```

#### Inapplicable Example 2

This `checkbox` has an [implicit semantic role](#implicit-role) that is identical to the [explicit semantic role](#explicit-role).

```html
<input type="checkbox" role="checkbox" />
```

#### Inapplicable Example 3

This `combobox` is not [included in the accessibility tree][] due to its styling, hiding it from everybody.

```html
<div role="combobox" style="display:none;"></div>
```

[explicit semantic role]: #explicit-role 'Definition of explicit semantic role'
[implicit semantic role]: #implicit-role 'Definition of implicit semantic role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in The Accessibility Tree'
[wai-aria required states and properties]: https://www.w3.org/TR/wai-aria-1.1/#requiredState
[wai-aria implicit value for role]: https://www.w3.org/TR/wai-aria-1.1/#implictValueForRole
[wai-aria 1.2]: https://www.w3.org/TR/wai-aria-1.2/

---
id: 4e8ab6
name: Element with role attribute has required states and properties
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
  aria12:requiredState: # 5.2.2 Required States and Properties
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
input_aspects:
  - DOM Tree
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [included in the accessibility tree][] and has an [explicit semantic role][], except if the element has an [implicit semantic role][] that is identical to the [explicit semantic role][].

## Expectation

For each test target, the [WAI-ARIA required states and properties][] for the role are set and not empty (`""`), unless the state or property has a default value listed under [WAI-ARIA implicit value for role][].

## Assumptions

- The applicability of this rule is limited to [explicit semantic roles][explicit semantic role] based on an assumption that all native HTML and SVG elements have native attributes that are mapped to all of the [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria/#requiredState) for the [implicit semantic role][] of the element.

- The ARIA `role` is being used to comply to WCAG.

## Accessibility Support

This rule relies on browsers and assistive technologies to support leaving out [WAI-ARIA required states and properties][] when a [WAI-ARIA implicit value for role][] is specified in [WAI-ARIA Specifications](#wai-aria-specifications).

**Note:** The required states and properties with implicit values can be found in the Core Accessibility API Mappings 1.1 [Overview of default values for missing required attributes](https://www.w3.org/TR/core-aam-1.1/#authorErrorDefaultValuesTable).

## Background

### Bibliography

- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5)
- [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria-1.2/#requiredState)
- [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)

## Test Cases

### Passed

#### Passed Example 1

This `heading` has the required `aria-level` property.

```html
<div role="heading" aria-level="1">
	My First Heading
</div>
```

#### Passed Example 2

This `checkbox` has the required `aria-checked` property.

```html
<div role="checkbox" aria-checked="false"></div>
<div id="label">Check me</div>
```

#### Passed Example 3

This `scrollbar` has the required properties `aria-controls` and `aria-valuenow`. `aria-valuemin` has a default value of 0 and `aria-valuemax` of 100.

```html
<div role="scrollbar" aria-controls="content" aria-valuenow="0"></div>
<main id="content"></main>
```

#### Passed Example 4

These `option` nodes do not need the required `aria-selected` property because it has a default value of `false`.

```html
<div id="label">Tags</div>
<ul role="listbox" aria-labelledby="label">
	<li role="option">Zebra</li>
	<li role="option">Zoom</li>
</ul>
```

#### Passed Example 5

This `separator` is not a `widget` because it is not [focusable][]. The `separator` role only requires the `aria-valuenow` property when the element is focusable.

```html
<p>My first HTML</p>
<div role="separator"></div>
<p>My last HTML</p>
```

#### Passed Example 6

This `combobox` has the required properties `aria-controls` and `aria-expanded`.

```html
<label for="tag_combo">Tag</label>
<input type="text" id="tag_combo" role="combobox" aria-expanded="true" aria-controls="popup_listbox" />
<ul role="listbox" id="popup_listbox">
	<li role="option">Zebra</li>
	<li role="option" id="selected_option">Zoom</li>
</ul>
```

### Failed

#### Failed Example 1

This `heading` does not have the required `aria-level` property. Prior to [WAI-ARIA 1.2][] the `heading` role had an implicit default `aria-level` value of `2`. As of WAI-ARIA 1.2 this property must be explicitly set.

```html
<div role="heading">
	My First Heading
</div>
```

#### Failed Example 2

This `switch` does not have the required `aria-checked` property. Prior to [WAI-ARIA 1.2][] the `switch` role had an implicit default `aria-checked` value of `false`. As of WAI-ARIA 1.2 this property must be explicitly set.

```html
<div role="switch">
	Toggle me
</div>
```

#### Failed Example 3

This `checkbox` does not have the required property `aria-checked`. Prior to [WAI-ARIA 1.2][] the `checkbox` had an implicit default `aria-checked` value of `false`. As of WAI-ARIA 1.2 this property must be explicitly set.

```html
<div role="checkbox" aria-labelledby="label"></div>
<div id="label">Check me</div>
```

#### Failed Example 4

This `separator` does not have the required `aria-valuenow` property. This is required because the `separator` is [focusable][], which makes it a `widget`.

```html
<p>My first HTML</p>
<div role="separator" tabindex="0"></div>
<p>My last HTML</p>
```

#### Failed Example 5

This `combobox` does not have the required `aria-expanded` property. Prior to [WAI-ARIA 1.2][] the `combobox` had an implicit default `aria-expanded` value of `false`. As of WAI-ARIA 1.2 this property must be explicitly set.

```html
<label for="tag_combo">Tag</label>
<input type="text" id="tag_combo" role="combobox" aria-controls="popup_listbox" />
<ul role="listbox" id="popup_listbox">
	<li role="option">Zebra</li>
	<li role="option" id="selected_option">Zoom</li>
</ul>
```

#### Failed Example 6

This `combobox` uses `aria-owns` instead of using the required `aria-controls` property.

```html
<label for="tag_combo">Tag</label>
<input type="text" id="tag_combo" role="combobox" aria-expanded="true" aria-owns="popup_listbox" />
<ul role="listbox" id="popup_listbox">
	<li role="option">Zebra</li>
	<li role="option" id="selected_option">Zoom</li>
</ul>
```

### Inapplicable

#### Inapplicable Example 1

This `div` does not have a [semantic role](#semantic-role).

```html
<div>Some Content</div>
```

#### Inapplicable Example 2

This `checkbox` has an [implicit semantic role](#implicit-role) that is identical to the [explicit semantic role](#explicit-role). This allows native HTML `checked` attribute to apply.

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
[wai-aria required states and properties]: https://www.w3.org/TR/wai-aria-1.2/#requiredState
[wai-aria implicit value for role]: https://www.w3.org/TR/wai-aria-1.2/#implictValueForRole
[wai-aria 1.2]: https://www.w3.org/TR/wai-aria-1.2/
[html or svg element]: #namespaced-element
[focusable]: #focusable

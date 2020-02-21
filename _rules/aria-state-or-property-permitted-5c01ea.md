---
id: 5c01ea
name: ARIA state or property is permitted
rule_type: atomic
description: |
  This rule checks that WAI-ARIA states or properties are allowed for the element they are specified on.
accessibility_requirements:
  aria11:state_property_processing:
    title: ARIA 1.1, 7.6 State and Property Attribute Processing
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
input_aspects:
  - DOM Tree
acknowledgements:
  authors:
    - Anne Thyme Nørregaard
    - Jean-Yves Moyen
---

## Applicability

Any [WAI-ARIA state or property][] that is specified on an HTML or SVG element that is [included in the accessibility tree][].

## Expectation

The attribute is either an [inherited][], [supported][], or [required][] [state][] or [property][] of the [semantic role][] of the element on which the attribute is specified. If the element has no [semantic role][], the attribute must be a [global state or property][global].

**Note:** Assessing the value of the attribute is out of scope for this rule.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 4.1.1: Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing.html)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [WAI-ARIA 1.1, Supported States and Properties](https://www.w3.org/TR/wai-aria-1.1/#states_and_properties)
- [WAI-ARIA 1.1, Global States and Properties](https://www.w3.org/TR/wai-aria-1.1/#global_states)

## Test Cases

### Passed

#### Passed Example 1

The `aria-pressed` [state][] is [supported][] for the [semantic role][] `button`, which is the [implicit role][] for `button` elements.

```html
<button aria-pressed="false">My button</button>
```

#### Passed Example 2

The `aria-pressed` [state][] is [supported][] for the [semantic role][] `button`, which is the [explicit role][] of this `div` element.

```html
<div role="button" aria-pressed="false">My button</div>
```

#### Passed Example 3

The `aria-busy` [state][] is a [global][] [state][] that is [supported][] by all elements, even without any [semantic role][].

```html
<div aria-busy="true">My busy button</div>
```

#### Passed Example 4

The `aria-label` [state][] is [global][] and thus [inherited][] for all [semantic role][].

```html
<div role="button" aria-label="OK"></div>
```

#### Passed Example 5

The `aria-checked` [state][] is [required][] for the [semantic role][] `aria-checkbox`.

```html
<div role="checkbox" aria-checked="false">My checkbox</div>
```

#### Passed Example 6

The `aria-controls` [property][] is [supported][] for the [semantic role][] `combobox`.

```html
<div role="combobox" aria-controls="id1">My combobox</div>
```

#### Passed Example 7

WAI-ARIA states and properties with empty value are also applicable to this rule

```html
<div role="combobox" aria-controls>My combobox</div>
```

#### Passed Example 8

WAI-ARIA states and properties with empty value, specified as an empty string, are also applicable to this rule

```html
<div role="combobox" aria-controls="">My combobox</div>
```

#### Passed Example 9

The `aria-label` [state][] is [global][] and thus [inherited][] for all [semantic role][], including the ones from the [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0). This rule is also applicable to SVG elements.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="graphics-object" width="100" height="100" aria-label="yellow circle">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

### Failed

#### Failed Example 1

The `aria-sort` [property][] is neither [inherited][], [supported][], nor [required][] for the [semantic role][] `button`, which is the [implicit role][] for the `button` element.

```html
<button aria-sort="">Sort by year</button>
```

### Inapplicable

#### Inapplicable Example 1

This `div` element has no [WAI-ARIA state or property][].

```html
<div role="region">A region of content</div>
```

#### Inapplicable Example 2

This `div` element is not [included in the accessibility tree][], hence its [WAI-ARIA state or property][] is not checked.

```html
<div role="button" aria-sort="" style="display:none;"></div>
```

[explicit role]: #explicit-role 'Definition of Explicit Role'
[global]: https://www.w3.org/TR/wai-aria-1.1/#global_states 'Definition of Global ARIA States and Properties'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inherited]: https://www.w3.org/TR/wai-aria/#inheritedattributes 'Definition of Inherited ARIA States and Properties'
[property]: https://www.w3.org/TR/wai-aria/#dfn-property 'Definition of ARIA Property'
[required]: https://www.w3.org/TR/wai-aria/#requiredState 'Definition of Required ARIA States and Properties'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[state]: https://www.w3.org/TR/wai-aria/#dfn-state 'Definition of ARIA State'
[supported]: https://www.w3.org/TR/wai-aria/#supportedState 'Definition of Supported ARIA States and Properties'
[wai-aria state or property]: https://www.w3.org/TR/wai-aria-1.1/#state_prop_def 'Definition of ARIA States and Properties'

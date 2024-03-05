---
id: 5c01ea
name: ARIA state or property is permitted
rule_type: atomic
description: |
  This rule checks that WAI-ARIA states or properties are allowed for the element they are specified on.
accessibility_requirements:
  wcag-technique:ARIA5: # Using WAI-ARIA state and property attributes to expose the state of a user interface component
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  aria12:state_property_processing:
    title: ARIA 1.2, 8.6 State and Property Attribute Processing
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
  wcag20:1.3.1: # Info and Relationships (A)
    secondary: This success criterion is **less strict** than this rule. This is because the rule does not ignore irrelevant ARIA properties. Some of the failed examples satisfy this success criterion.
  wcag20:4.1.2: # Name, Role, Value (A)
    secondary: This success criterion is **less strict** than this rule. This is because the rule does not ignore irrelevant ARIA properties. Some of the failed examples satisfy this success criterion.
input_aspects:
  - Accessibility Tree
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Jean-Yves Moyen
  funding:
    - WAI-Tools
  assets:
    - JFK's "We Choose the Moon" speech excerpt is courtesy of NASA.
---

## Applicability

This rule applies to any [WAI-ARIA state or property][] that is specified on an [HTML or SVG element][namespaced element] that is [included in the accessibility tree][].

## Expectation 1

For each test target, one of the following is true:

- **global**: the test target is a [global state or property][global]; or
- **semantic role**: the test target is an [inherited][], [supported][], or [required][] [state][] or [property][] of the [semantic role][] of the element on which the test target is specified; or
- **language feature**: the test target is specified on an [HTML element][namespaced element] and is allowed on that element. Which ARIA states or properties may be used on which element is described in [ARIA in HTML](https://w3c.github.io/html-aria/).

## Expectation 2

No test target is [prohibited][] on the [semantic role][] of the element on which it is specified.

## Assumptions

There are no assumptions.

## Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` and their attributes fail this rule with some technologies but users of other technology would not experience any accessibility issue.

## Background

The presence of prohibited ARIA attributes is often the result of a developer using an incorrect role, or a misunderstanding of the attribute. These attributes are ignored by browsers and other assistive technologies. This often means that a state or property which should exist is missing.

In HTML, there are language features that do not have corresponding implicit WAI-ARIA semantics. As per [ARIA in HTML](https://www.w3.org/TR/html-aria/), those elements can have [global states or properties][global]. Some of those elements can also have [inherited][], [supported][], or [required][] [states][state] or [properties][property] that correspond to a [WAI-ARIA role](https://www.w3.org/TR/wai-aria-1.2/#introroles). For example, the `audio` element has no corresponding ARIA semantics but it can have [inherited][], [supported][], or [required][] [states][state] or [properties][property] of the [`application` role](https://www.w3.org/TR/wai-aria-1.2/#application).

Assessing the value of the attribute is out of scope for this rule.

### Related rules

- [ARIA state or property has valid value](https://www.w3.org/WAI/standards-guidelines/act/rules/6a7281/)

### Bibliography

- [Understanding Success Criterion 4.1.1: Parsing](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [WAI-ARIA 1.2, Supported States and Properties](https://www.w3.org/TR/wai-aria-1.2/#states_and_properties)
- [WAI-ARIA 1.2, Global States and Properties](https://www.w3.org/TR/wai-aria-1.2/#global_states)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5)
- [Document conformance requirements for use of ARIA attributes in HTML](https://www.w3.org/TR/html-aria/#docconformance)

## Test Cases

### Passed

#### Passed Example 1

The `aria-pressed` [state][] is [supported][] with `button`, which is the [implicit role][] for `button` elements.

```html
<button aria-pressed="false">My button</button>
```

#### Passed Example 2

The `aria-pressed` [state][] is [supported][] with `button`, which is the [explicit role][] of this `div` element.

```html
<div role="button" aria-pressed="false">My button</div>
```

#### Passed Example 3

The `aria-busy` [state][] is a [global][] [state][] that is [supported][] by all elements, even without any [semantic role][].

```html
<div aria-busy="true">My busy div</div>
```

#### Passed Example 4

The `aria-label` [property][] is a [global][] [property][]. It is allowed on any [semantic role][].

```html
<div role="button" aria-label="OK">✓</div>
```

#### Passed Example 5

The `aria-checked` [state][] is [required][] for the [semantic][semantic role] `checkbox`.

```html
<div role="checkbox" aria-checked="false">My checkbox</div>
```

#### Passed Example 6

The `aria-controls` [property][] is [required][] for the [semantic][semantic role] `combobox`.

```html
<div role="combobox" aria-controls="id1" aria-expanded="false">My combobox</div>
```

#### Passed Example 7

The `aria-controls` [property][] is [required][] for the [semantic][semantic role] `combobox`. [WAI-ARIA states and properties][wai-aria state or property] with empty value are still applicable to this rule.

```html
<div role="combobox" aria-expanded="false" aria-controls>My combobox</div>
```

#### Passed Example 8

The `aria-controls` [property][] is [required][] for the [semantic][semantic role] `combobox`. [WAI-ARIA states and properties][wai-aria state or property] with empty value (specified as an empty string) are still applicable to this rule.

```html
<div role="combobox" aria-expanded="false" aria-controls="">My combobox</div>
```

#### Passed Example 9

The `aria-label` [property][] is [global][]. It is allowed on any [semantic role][], including roles from the [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0). This rule is applicable to SVG elements.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="graphics-object" width="100" height="100" aria-label="yellow circle">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Passed Example 10

This `button` element has an [explicit role][] of `none`. However, because it is [focusable][] (by default), it has a [semantic role][] of `button` due to [Presentational Roles Conflict Resolution][]. The `aria-pressed` [state][] is [supported][] for the `button` role.

```html
<button role="none" aria-pressed="false">ACT rules are cool!</button>
```

#### Passed Example 11

This `input` element does not have an [explicit role][] of `textbox`, but the `aria-required` property may be used on an `input` element with a `type` [attribute value][] of `password`.

```html
<label>Password<input type="password" aria-required="true"/></label>
```

### Failed

#### Failed Example 1

The `aria-sort` [property][] may not be used on a [semantic][semantic role] `button`.

```html
<button aria-sort="">Sort by year</button>
```

#### Failed Example 2

The `aria-orientation` property may not be used on `audio` element, nor can it be used on `application` (the [semantic role][] for which [inherited][], [supported][], or [required][] [states][state] or [properties][property] are also applicable to `audio` element).

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" controls aria-orientation="horizontal"></audio>
```

#### Failed Example 3

The `aria-label` property is [prohibited][] for an element with a `generic` role.

```html
<div aria-label="Bananas"></div>
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

[attribute value]: #attribute-value 'Definition of attribute value'
[explicit role]: #explicit-role 'Definition of Explicit Role'
[focusable]: #focusable 'Definition of focusable'
[global]: https://www.w3.org/TR/wai-aria-1.2/#global_states 'Definition of Global ARIA States and Properties'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inherited]: https://www.w3.org/TR/wai-aria-1.2/#inheritedattributes 'Definition of Inherited ARIA States and Properties'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[property]: https://www.w3.org/TR/wai-aria-1.2/#dfn-property 'Definition of ARIA Property'
[required]: https://www.w3.org/TR/wai-aria-1.2/#requiredState 'Definition of Required ARIA States and Properties'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[state]: https://www.w3.org/TR/wai-aria-1.2/#dfn-state 'Definition of ARIA State'
[supported]: https://www.w3.org/TR/wai-aria-1.2/#supportedState 'Definition of Supported ARIA States and Properties'
[wai-aria state or property]: https://www.w3.org/TR/wai-aria-1.2/#state_prop_def 'Definition of ARIA States and Properties'
[namespaced element]: #namespaced-element
[prohibited]: https://www.w3.org/TR/wai-aria-1.2/#prohibitedattributes 'WAI-ARIA 1.2 Definition of Prohibited States and Properties'

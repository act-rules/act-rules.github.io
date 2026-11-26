---
id: kb1m8s
name: ARIA global properties not used where prohibited
rules_format: 1.1
rule_type: atomic
description: |
  This rule checks that global WAI-ARIA properties are not on elements whose role prohibits them.
accessibility_requirements:
  aria12:prohibitedattributes:
    title: ARIA 1.2, 5.2.5 Prohibited States and Properties
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
  wcag-technique:ARIA5: # Using WAI-ARIA state and property attributes to expose the state of a user interface component
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:1.3.1: # Info and Relationships (A)
    secondary: This success criterion is **less strict** than this rule. This is because the rule does not ignore irrelevant ARIA properties. Some of the failed examples satisfy this success criterion.
input_aspects:
  - Accessibility Tree
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Wilco Fiers
  previous_authors:
    - Anne Thyme Nørregaard
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any [WAI-ARIA global state or property][global] that is specified on an [HTML or SVG element][namespaced element] that is [included in the accessibility tree][].

## Expectation

The test target is not [prohibited][] for the [semantic role][] of the element on which it is specified.

## Background

The presence of prohibited ARIA attributes is often the result of a developer using an incorrect role, or a misunderstanding of the attribute. These attributes are ignored by browsers and other assistive technologies. This often means that a state or property which should exist is missing.

In HTML, there are language features that do not have corresponding implicit WAI-ARIA semantics. As per [ARIA in HTML](https://www.w3.org/TR/html-aria/), those elements can have [global states or properties][global]. Some of those elements can also have [inherited][], [supported][], or [required][] [states][state] or [properties][property] that correspond to a [WAI-ARIA role](https://www.w3.org/TR/wai-aria-1.2/#introroles). For example, the `audio` element has no corresponding ARIA semantics but it can have [inherited][], [supported][], or [required][] [states][state] or [properties][property] of the [`application` role](https://www.w3.org/TR/wai-aria-1.2/#application).

### Assumptions

There are no assumptions.

### Accessibility Support

Browsers and assistive technologies behave differently when prohibited attributes are used. Some may assign a role so that the property is available to assistive technologies, where others ignore the attribute.

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` and their attributes fail this rule with some technologies but users of other technology would not experience any accessibility issue.

### Related rules

- [ARIA state or property is permitted](https://www.w3.org/WAI/standards-guidelines/act/rules/5c01ea/)
- [ARIA state or property has valid value](https://www.w3.org/WAI/standards-guidelines/act/rules/6a7281/)

### Bibliography

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [WAI-ARIA 1.2, Prohibited States and Properties](https://www.w3.org/TR/wai-aria/#prohibitedattributes)
- [WAI-ARIA 1.2, Global States and Properties](https://www.w3.org/TR/wai-aria-1.2/#global_states)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5)

## Examples

### Passed

#### Passed Example 1

This generic `div` element is allowed the global `aria-live` property.

```html
<div aria-live="polite">I like Bananas</div>
```

#### Passed Example 2

This `a` element with an [implicit role][] of `link` is allowed the `aria-label` property.

```html
<a href="#" aria-label="Previously 100, now 1 euro"> <s>€100</s> / <b>€1</b> </a>
```

#### Passed Example 3

This `div` element is allowed the `aria-braillelabel` property because its [explicit role][] of `heading` does not prohibit this.

```html
<div role="heading" aria-braillelabel="I like bananas">
	I ❤️ Bananas
</div>
```

### Failed

#### Failed Example 1

The `aria-label` property is [prohibited][] for an element with a `generic` role.

```html
<div aria-label="Previously 100, now 1 euro"><s>€100</s> / <b>€1</b></div>
```

#### Failed Example 2

The `aria-labelledby` property is [prohibited][] for an element with a `paragraph` role.

```html
<h1 id="bananas">I like bananas</h1>
<p aria-labelledby="Bananas">🧑 ❤️ 🍌🍌</p>
```

#### Failed Example 3

The `aria-braillelabel` property is [prohibited][] for an element with a `button` role.

```html
<p aria-braillelabel="I love Bananas">I ❤️ Bananas</p>
```

#### Failed Example 4

The `aria-roledescription` property is [prohibited][] for an element with a `generic` role.

```html
<div aria-roledescription="Banana text">I like bananas</div>
```

#### Failed Example 5

The `aria-brailleroledescription` property is [prohibited][] for an element with a `none` role.

```html
<h1 role="none" aria-brailleroledescription="Banana text">I like bananas</h1>
```

### Inapplicable

#### Inapplicable Example 1

The generic `div` element is hidden.

```html
<div aria-label="Bananas" hidden></div>
```

[explicit role]: #explicit-role 'Definition of Explicit Role'
[global]: https://www.w3.org/TR/wai-aria-1.2/#global_states 'Definition of Global ARIA States and Properties'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inherited]: https://www.w3.org/TR/wai-aria-1.2/#inheritedattributes 'Definition of Inherited ARIA States and Properties'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[property]: https://www.w3.org/TR/wai-aria-1.2/#dfn-property 'Definition of ARIA Property'
[required]: https://www.w3.org/TR/wai-aria-1.2/#requiredState 'Definition of Required ARIA States and Properties'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[state]: https://www.w3.org/TR/wai-aria-1.2/#dfn-state 'Definition of ARIA State'
[supported]: https://www.w3.org/TR/wai-aria-1.2/#supportedState 'Definition of Supported ARIA States and Properties'
[namespaced element]: #namespaced-element
[prohibited]: https://www.w3.org/TR/wai-aria-1.2/#prohibitedattributes 'WAI-ARIA 1.2 Definition of Prohibited States and Properties'

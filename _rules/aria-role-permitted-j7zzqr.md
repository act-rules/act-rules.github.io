---
id: j7zzqr
name: ARIA role is permitted.
rule_type: atomic
description: |
  This rule checks that WAI-ARIA roles are allowed for the element they are specified on.
accessibility_requirements:
  html-aria:docconformance:
    title: ARIA in HTML, 4. Document conformance requirements for use of ARIA attributes in HTML
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
  wcag20:1.3.1: # Info and Relationships (A)
    secondary: true
  wcag20:4.1.2: # Name, Role, Value (A)
    secondary: true
  wcag-technique:ARIA4: # Using a WAI-ARIA role to expose the role of a user interface component
    secondary: true
input_aspects:
  - Accessibility Tree
  - DOM Tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any [HTML element][namespaced element] that is [included in the accessibility tree][] and has an [explicit semantic role][explicit role].

## Expectation

For each test target, its [explicit semantic role][explicit role] is allowed on this element, according to [ARIA in HTML specifications][aria in html document conformance].

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

The presence of an invalid role often implies that the programmatic role do not correspond to the one that is conveyed visually, or that the interactions provided by the elements do not match the ones expected for this role. Therefore, both [Success Criterion 1.3.1 Info and Relationships][sc131] and [Success Criterion 4.1.2 Name, Role, Value][sc412] are secondary requirements for this rule.

[ARIA in HTML][aria in html document conformance] also defines the [implicit semantic role][implicit role] of each element. Setting the [explicit role][] as the same as the [implicit one][implicit role] is not recommended but nonetheless allowed. This rule doesn't use that in any of its test cases.

### Related rules

- [Role attribute has valid value](https://www.w3.org/WAI/standards-guidelines/act/rules/674b10/proposed/) checks that the value of the `role` attribute exists in ARIA, while this rule checks that it is allowed on the element using it.

### Bibliography

- [Document conformance requirements for use of ARIA attributes in HTML](https://www.w3.org/TR/html-aria/#docconformance)
- [Understanding SC 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [Technique ARIA4: Using a WAI-ARIA role to expose the role of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4)

## Test Cases

### Passed

#### Passed Example 1

This `a` element has an [explicit role][] of `button`, which is allowed.

```html
<a href="https://www.w3.org/WAI/standards-guidelines/act/rules/" role="button">All ACT rules</a>
```

#### Passed Example 2

This `h1` element has an [explicit role][] of `tab`, which is allowed

```html
<h1 role="tab">ACT rules</h1>
```

### Failed

#### Failed Example 1

This `button` element has an [explicit role][] of `heading`, which is not allowed.

```html
<button role="heading">ACT rules</button>
```

### Inapplicable

#### Inapplicable Example 1

There is no [HTML element][namespaced element].

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

#### Inapplicable Example 2

This `button` element is not [included in the accessibility tree][].

```html
<button role="list" style="display:none;">Click me</button>
```

#### Inapplicable Example 3

This `a` element does not have an [explicit semantic role][]:.

```html
<a href="https://www.w3.org/WAI/standards-guidelines/act/rules/">All ACT rules</a>
```

[aria in html document conformance]: https://www.w3.org/TR/html-aria/#docconformance 'ARIA is HTML, Document conformance requirements for use of ARIA attributes in HTML'
[explicit role]: #explicit-role 'Definition of Explicit Role'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[namespaced element]: #namespaced-element
[sc131]: https://www.w3.org/TR/WCAG21/#info-and-relationships
[sc412]: https://www.w3.org/TR/WCAG21/#name-role-value

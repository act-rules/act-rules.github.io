---
id: j7zzqr
name: ARIA role is permitted for the element.
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
input_aspects:
  - Accessibility Tree
  - DOM Tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any [HTML element][namespaced element] which has an [explicit semantic role][explicit role].

## Expectation

For each test target, its [explicit semantic role][explicit role] is allowed on this element, according to the [ARIA in HTML specification][aria in html document conformance].

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

[ARIA in HTML][aria in html document conformance] also defines the [implicit semantic role][implicit role] of each element. Setting the [explicit role][] as the same as the [implicit one][implicit role] is not recommended but nonetheless allowed. This rule doesn't use that in any of its test cases.

This rules apply to every element, even if they are not [included in the accessibility tree][]. This is because the roles of `none` or `presentation` are only allowed on certain elements. If the rule was only looking at content [included in the accessibility tree][], it wouldn't flag incorrect use of these roles. 

### Related rules

- [Role attribute has valid value](https://www.w3.org/WAI/standards-guidelines/act/rules/674b10/proposed/) checks that the value of the `role` attribute exists in ARIA, while this rule checks that it is allowed on the element using it.

### Bibliography

- [Document conformance requirements for use of ARIA attributes in HTML](https://www.w3.org/TR/html-aria/#docconformance)

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

#### Passed Example 3

These `hr` elements have an [explicit role][] of `presentation`, which is allowed

```html
Fruits:
<ul>
  <li>Apple
    <hr role="presentation"/>
  </li>
  <li>Banana
    <hr role="presentation"/>
  </li>
  <li>Orange</li>
</ul>
```

### Failed

#### Failed Example 1

This `button` element has an [explicit role][] of `heading`, which is not allowed.

```html
<button role="heading">ACT rules</button>
```

#### Failed Example 2

This `aside` element has an [explicit role][] of `navigation`, which is not allowed.

```html
<aside role="navigation">
  <a href="https://www.w3.org">W3C</a> <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a> <a href="https://www.w3.org/WAI/standards-guidelines/act/rules/"> ACT rules</a>
</aside>
```

#### Failed Example 3 

These `h1` elements have an [explicit role][] of `listitem`, which is not allowed; the `div` element has an [explicit role][] of `list`, which is allowed.

```html
Fruits:
<div role="list">
  <h1 role="listitem">Apple</h1>
  <h1 role="listitem">Banana</h1>
  <h1 role="listitem">Orange</h1>
</div>
```

#### Failed Example 4

The first `li` element has an [explicit role][] of `presentation`, which is not allowed.

```html
Fruits:
<ul>
  <li role="presentation">Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>
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
[namespaced element]: #namespaced-element 'Definition of Namespaced Element'

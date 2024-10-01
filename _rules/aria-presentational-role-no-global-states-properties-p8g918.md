---
id: p8g918
name: ARIA presentational role does not have global states or properties
rule_type: atomic
description: |
  This rule checks that elements with ARIA presentational role do not have global states or properties
accessibility_requirements:
  aria12:conflict_resolution_presentation_none:
    title: ARIA 1.2, Presentational Roles Conflict Resolution
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
  wcag20:1.3.1: # Info and Relationships (A)
    secondary: This success criterion is **related** to this rule. This is because elements assigned a presentational role, but with a global WAI-ARIA state or propert, are exposed in the accessibility tree with their implicit role, potentially leading to WCAG violations. Some of the examples that either pass or fail overlap with this success criterion.
input_aspects:
  - Accessibility Tree
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Giacomo Petri
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [included in the accessibility tree][] and has an [explicit semantic role][] of `none` or `presentation`.

## Expectation

Each target element does not have any [global WAI-ARIA state or property](https://w3c.github.io/aria/#dfn-global).

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

While user agents consistently handle elements undergoing [Presentational Roles Conflict Resolution][], authors bear the responsibility of preventing such conflicts.

If the presentational role is inherited and the element has global WAI-ARIA states or properties, user agents maintain its presentational role regardless of any global ARIA state or property.

### Bibliography

- [WAI-ARIA 1.2 - Presentational Roles Conflict Resolution][Presentational Roles Conflict Resolution]

## Test Cases

### Passed

#### Passed Example 1

The `table` element with role `presentation` does not have any [global WAI-ARIA state or property](https://w3c.github.io/aria/#dfn-global).

```html
<table role="presentation">
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
</table>
```

#### Passed Example 2

The `h1` element with role `none` has an `aria-colspan` which is a non-global role-specific WAI-ARIA property.

```html
<h1 role="none" aria-level="2">ACT Rules</h1>
```

### Failed

#### Failed Example 1

The `table` element with role `presentation` has an `aria-label` attribute, which is a [global WAI-ARIA state or property](https://w3c.github.io/aria/#dfn-global).

```html
<table role="presentation" aria-label="trend">
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
</table>
```

#### Failed Example 2

The `h1` element with role `none` has an `aria-describedby` attribute, which is a [global WAI-ARIA state or property](https://w3c.github.io/aria/#dfn-global).

```html
<h1 role="none" aria-describedby="h1-desc">ACT Rules</h1>
<div id="h1-desc">Read more about our intent</div>
```

### Inapplicable

#### Inapplicable Example 1

This `button` element doesn't have an [explicit semantic role][] of `none` or `presentation`.

```html
<button>Submit</button>
```

#### Inapplicable Example 2

This `div` element has an [explicit semantic role][] of `button`, which differs from `none` or `presentation` roles.

```html
<div role="button">Submit</div>
```

#### Inapplicable Example 3

This `button` element with role `none` is not included in the accessibility tree.

```html
<button role="none" style="display:none">Submit</button>
```

#### Inapplicable Example 4

The `li` elements inherits the presentational role from their `ul` parent element, but doesn't have an explicit semantic presentational role itself.

```html
<ul role="none">
  <li aria-description="2.2">WCAG</li>
  <li>ARIA</li>
  <li>ACT Rules</li>
</ul>
```

#### Inapplicable Example 5

The `td` element inherits the presentational role from its `table` ancestor element, but doesn't have an explicit semantic presentational role itself. Moreover, the `td` element with attribute `aria-colspan` has only a non-global role-specific WAI-ARIA property.

```html
<table role="presentation">
  <tbody>
    <tr>
      <td aria-colspan="2">2024</td>
    </tr>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
</table>
```

[explicit semantic role]: #explicit-role 'Definition of Explicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[html or svg element]: #namespaced-element

---
id: gp1889
name: ARIA allowed child element of another element with presentational role
rule_type: atomic
description: |
  This rule checks that allowed child element of another element with presentational role does not cause presentational roles conflicts
accessibility_requirements:
  aria12:conflict_resolution_presentation_none:
    title: ARIA 1.2, Presentational Roles Conflict Resolution
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
  wcag20:1.3.1: # Info and Relationships (A)
    secondary: This success criterion is **related** to this rule. This is because ancestor elements assigned a presentational role with semantic allowed child elements may prevents assistive technologies to convey relationship details, potentially leading to WCAG violations. Some of the examples that either pass or fail overlap with this success criterion.
input_aspects:
  - Accessibility Tree
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Giacomo Petri
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [included in the accessibility tree][], is an [allowed child element](https://w3c.github.io/aria/#mustContain) of another element with an [explicit semantic role][] of `none` or `presentation`.

## Expectation

For each target element one of the following is true:
- The element doesn't have any [explicit semantic role][];
- The element has an [explicit semantic role][] of `none` or `presentation`.

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

While user agents consistently handle elements undergoing [Presentational Roles Conflict Resolution][], authors bear the responsibility of preventing such conflicts.

### Bibliography

- [WAI-ARIA 1.2 - Presentational Roles Conflict Resolution][Presentational Roles Conflict Resolution]

## Test Cases

### Passed

#### Passed Example 1

The `li` elements inherit the presentational role from their `ul` parent element with an [explicit semantic role][] of `none`.

```html
<ul role="none">
  <li>WCAG</li>
  <li>ARIA</li>
  <li>ACT Rules</li>
</ul>
```

#### Passed Example 2

The `tr` and `td` elements inherit the presentational role from their `table` ancestor element with an [explicit semantic role][] of `presentation`.

```html
<table role='presentation'>
  <tbody>
    <tr>
      <td>ACT Rules</td>
      <td>WCAG</td>
    </tr>
    <tr>
      <td>ARIA</td>
      <td></td>
    </tr>
  </tbody>
</table>
```

#### Passed Example 3

The `li` elements inherit the presentational role from their `ul` parent element with an [explicit semantic role][] of `none`. The `li` have an [explicit semantic role][] of `none`.

```html
<ul role="none">
  <li role="none">WCAG</li>
  <li role="none">ARIA</li>
  <li role="none">ACT Rules</li>
</ul>
```

### Failed

#### Failed Example 1

The `li` elements inherit the presentational role from their `ul` parent element with an [explicit semantic role][] of `none`, but the author forced its [explicit semantic role][] with `listitem`.

```html
<ul role="none">
  <li role="listitem">WCAG</li>
  <li role="listitem">ARIA</li>
  <li role="listitem">ACT Rules</li>
</ul>
```

#### Failed Example 2

The `td` elements inherit the presentational role from their `table` ancestor element with an [explicit semantic role][] of `presentation`, but the author forced its [explicit semantic role][] with `cell`.

```html
<table role='presentation'>
  <tbody>
    <tr>
      <td role="cell">ACT Rules</td>
      <td role="cell">WCAG</td>
    </tr>
    <tr>
      <td role="cell">ARIA</td>
      <td role="cell"></td>
    </tr>
  </tbody>
</table>
```

### Inapplicable

#### Inapplicable Example 1

The `li` elements are no included in the accessibility tree.

```html
<ul role="none" style="display:none">
  <li role="none">WCAG</li>
  <li role="none">ARIA</li>
  <li role="none">ACT Rules</li>
</ul>
```

#### Inapplicable Example 2

The `ul` element doesn't have a role of `none` or `presentation`.

```html
<ul>
  <li role="listitem">WCAG</li>
  <li role="listitem">ARIA</li>
  <li role="listitem">ACT Rules</li>
</ul>
```

#### Inapplicable Example 3

The `a` elements with a semantic role of `link` are not [allowed child element](https://w3c.github.io/aria/#mustContain) of the `ul` element.

```html
<ul role="presentation">
  <a href="https://www.w3.org/TR/WCAG22/">WCAG</button>
  <a href="https://w3c.github.io/aria/">ARIA</button>
</ul>
```

[explicit semantic role]: #explicit-role 'Definition of Explicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[html or svg element]: #namespaced-element

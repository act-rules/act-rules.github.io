---
id: 18pg11
name: ARIA presentational role not focusable
rule_type: atomic
description: |
  This rule checks that elements with ARIA presentational role are not focusable
accessibility_requirements:
  aria12:conflict_resolution_presentation_none:
    title: ARIA 1.2, Presentational Roles Conflict Resolution
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
  wcag20:1.3.1: # Info and Relationships (A)
    secondary: This success criterion is **related** to this rule. This is because elements assigned a presentational role but are still focusable remain exposed in the accessibility tree with their implicit role, potentially leading to WCAG violations. Some of the examples that either pass or fail overlap with this success criterion.
  wcag20:2.4.3: # Focus Order (A)
    secondary: This success criterion is **related** to this rule. This is because elements assigned a presentational role but are still focusable might create unnecessary and unclear focus targets. Some of the examples that either pass or fail overlap with this success criterion.
input_aspects:
  - Accessibility Tree
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Giacomo Petri
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [included in the accessibility tree][] and has an [explicit semantic role][] or [inherited semantic role][] of `none` or `presentation`.

## Expectation

Each target element is not [focusable][].

## Assumptions

There are no assumptions.

## Accessibility Support

A common browser, even though an interactive element with explicit presentational role is not focusable, still expose the element with its implicit role.

## Background

While user agents consistently handle elements undergoing [Presentational Roles Conflict Resolution][], authors bear the responsibility of preventing such conflicts.

### Bibliography

- [WAI-ARIA 1.2 - Presentational Roles Conflict Resolution][Presentational Roles Conflict Resolution]

## Test Cases

### Passed

#### Passed Example 1

The `button` element with role `none` is not [focusable][].

```html
<button role="none" disabled>Submit</button>
```

#### Passed Example 2

The `img` element with role `presentation` is not [focusable][].

```html
<img role="presentation" src="" alt="">
```

#### Passed Example 3

The `div` element with role `img` has an [inherited semantic role][] of `none` and is not [focusable][].

```html
<button>
  <div role="img"></div>
</button>
```

### Failed

#### Failed Example 1

The `button` element with role attribute value `presentation` is [focusable][].

```html
<button role="presentation">Submit</button>
```

#### Failed Example 2

The `button` element with role attribute value `none` is not reachable via keyboard but still [focusable][].

```html
<button role="none" tabindex="-1">Submit</button>
```

#### Failed Example 3

The `button` element with an [inherited semantic role][] of `none` is [focusable][].

```html
<a href="https://www.w3.org/WAI/standards-guidelines/act/rules/">
  <button>All ACT Rules</button>
</a>
```

### Inapplicable

#### Inapplicable Example 1

This `button` element doesn't have neither an [explicit semantic role][] or [inherited semantic role][] of `none` or `presentation`.

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

[explicit semantic role]: #explicit-role 'Definition of Explicit Role'
[inherited semantic role]: https://w3c.github.io/aria/#presentational-role-inheritance
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[html or svg element]: #namespaced-element

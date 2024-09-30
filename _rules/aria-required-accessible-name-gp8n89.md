---
id: gp8n89
name: ARIA required accessible name
rule_type: atomic
description: |
  This rule checks that WAI-ARIA accessible name is available when required.
accessibility_requirements:
  aria12:accessible_name_required:
    title: ARIA 1.2, Accessible Name Required
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
  wcag20:1.1.1: # Non-text Content (A)
    secondary: This success criterion is **related** to this rule. This is because elements assigned the ARIA role of `img` or `image` necessitate an accessible name according to WCAG standards. Some of the examples that either pass or fail overlap with this success criterion.
  wcag20:1.3.1: # Info and Relationships (A)
    secondary: This success criterion is **related** to this rule. Unlike WCAG, which might not mandate accessible names for certain elements like table elements, this rule requires them. On the other hand, there are situations where information is not visually presented and is not required by WCAG, but is still required to have an accessible name according to ARIA requirements.
  wcag20:2.4.4: # Link Purpose (In Context) (A)
    secondary: This success criterion is **related** to this rule. This is because elements assigned the ARIA role of `link` necessitate an accessible name according to WCAG standards. Some of the examples that either pass or fail overlap with this success criterion.
  wcag20:2.4.9: # Link Purpose (Link Only) (AAA)
    secondary: This success criterion is **related** to this rule. This is because elements assigned the ARIA role of `link` necessitate an accessible name according to WCAG standards. Some of the examples that either pass or fail overlap with this success criterion.
  wcag20:4.1.2: # Name, Role, Value (A)
    secondary: This success criterion is **related** to this rule. This is because elements assigned an ARIA role corresponding to a user interface component necessitate an accessible name according to WCAG standards. Some of the examples that either pass or fail overlap with this success criterion.
input_aspects:
  - Accessibility Tree
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Giacomo Petri
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [included in the accessibility tree][] and has a [semantic role][] that has the "Accessible Name Required: True" [characteristic][], unless the element has a [explicit][explicit semantic role] presentational role.

[characteristic]: https://www.w3.org/TR/wai-aria-1.2/#Properties

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

There are no assumptions.

## Accessibility Support

Elements with a [semantic role][] of `heading` and with no [accessible name][] seem to be consistently ignored by assistive technologies. Nonetheless, in the context of this rule, they fail since [WAI-ARIA 1.2][wai-aria 1.2] mandates the presence of an [accessible name][].

The [accessible name and description computation][] suggests that if an `aria-labelledby` attribute refers to an existing but empty element, the computation should stop and return an empty name without defaulting to the next steps. Several user agents and assistive technologies chose to use the next step in the computation in this case (ultimately defaulting to the content).

## Background

Although this ARIA rule mandates authors to ensure an [accessible name][] for each [HTML or SVG element][] [included in the accessibility tree][] and possessing a [WAI-ARIA 1.2][wai-aria 1.2] [semantic role][] requiring an [accessible name][], it does not automatically constitute a WCAG accessibility violation.

For instance, consider a `search` landmark comprising an element with the `form` role, a search label, a search input, and a search submit button. According to ARIA specifications, the `searchbox` role necessitate an [accessible name][]. However, adhering strictly to this rule may lead to repetitive announcements by assistive technologies like screen readers, overwhelming users. Therefore, while this might technically breach ARIA specs, it does not necessarily translate to a violation of WCAG accessibility standards.

Elements subjected to the [Presentational Roles Conflict Resolution][] are not part of this rule and must be tested separately.

### Bibliography

- [WAI-ARIA 1.2][wai-aria 1.2]
- [ARIA in HTML](https://www.w3.org/TR/html-aria/#docconformance)
- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [Understanding Success Criterion 2.4.4 Link Purpose (In Context)]([https://www.w3.org/WAI/WCAG22/Understanding/name-role-value](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html))
- [Understanding Success Criterion 2.4.9 Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)

## Test Cases

### Passed

#### Passed Example 1

This `button` element with an [implicit semantic role] of `button` has an [accessible name][] provided by its content.

```html
<button>Submit</button>
```

#### Passed Example 2

The `div` element with role `button` has an [accessible name][] provided by its content.

```html
<div role="button" tabindex="0">Submit</div>
```

#### Passed Example 3

The `div` element with role `img` has an [accessible name][] provided by the `aria-label` [attribute value][].

```html
<div role="img" aria-label="Rating: 5 out of 5 stars">
  <span aria-hidden="true">★★★★★</span>
</div>
```

#### Passed Example 4

The `div` element with role `checkbox` has an [accessible name][] provided thanks to the `aria-labelledby` attribute.

```html
<div role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="pass-agree-tc"></div>
<div id="pass-agree-tc">I agree with terms and conditions</div>
```

#### Passed Example 5

The `div` element with role `dialog` has an [accessible name][] provided by the `aria-labelledby` attribute.

```html
<div role="dialog" aria-modal="true" tabindex="-1" aria-labelledby="pass-terms">
  <h1 id="pass-terms">Terms</h1>
  <p>These are our terms.</p>
</div>
```

#### Passed Example 6

The `div` element with role `heading` has an [accessible name][] provided by its content.

```html
  <div role="heading" aria-level="1">Terms</div>
```

#### Passed Example 7

This `div` element with role `heading` is not [visible][], but is still [included in the accessibility tree][]. It has a non-empty [accessible name][] provided by its content.

```html
<div role="heading" aria-level="1" style="position: absolute; left: -9999px">ACT rules</div>
```

#### Passed Example 8

The `div` element with role `link` has an [accessible name][] provided by its content.

```html
<div role="link" tabindex="0" onclick="location.href='https://act-rules.github.io/'">ACT Rules</div>
```

### Failed

#### Failed Example 1

The `div` element with role `button` doesn't have an [accessible name][].

```html
<div role="button"></div>
```

#### Failed Example 2

This `button` element with an [implicit semantic role] of `button` doesn't have an [accessible name][].

```html
<button></button>
```

#### Failed Example 3

The `div` element with role `img` doesn't have an [accessible name][].

```html
<div role="img">
  <span aria-hidden="true">★★★★★</span>
</div>
```

#### Failed Example 4

The `div` element with role `checkbox` doesn't have an [accessible name][].

```html
<div role="checkbox" aria-checked="false" tabindex="0"></div>
<div>I agree with terms and conditions</div>
```

#### Failed Example 5

The `dialog` role accepts an [accessible name][] only from the author and not from its content. Therefore, the `div` element with role `dialog` doesn't have an [accessible name][].

```html
<div role="dialog" aria-modal="true" tabindex="-1">
  <h1>Terms</h1>
  <p>These are our terms.</p>
</div>
```

#### Failed Example 6

The `div` element with role `heading` has an empty [accessible name][] due to the `display: none` CSS property set to its content.

```html
  <div role="heading" aria-level="1"><span style="display: none">Terms</span></div>
```

#### Failed Example 7

The `button` element has an empty [accessible name][] given by its `aria-labelledby` attribute.

```html
<span id="fail-heading"></span>
<button aria-labelledby="fail-heading">Submit</button>
```

#### Failed Example 8

The `div` element with role `button` has an empty [accessible name][] because the `value` attribute does not count in the computation of the [accessible name][].

```html
<div role="button" value="test"></div>
```

#### Failed Example 9

This `div` element with role `button` is not [visible][], but is still [included in the accessibility tree][]. It doesn't have an [accessible name][], therefore failing the rule.

```html
<div role="button" style="position: absolute; left: -9999px" tabindex="0"></div>
```

#### Failed Example 10

The `div` element with role `link` has an empty [accessible name][].

```html
<div role="link" tabindex="0" onclick="location.href='https://act-rules.github.io/'"></div>
```

### Inapplicable

#### Inapplicable Example 1

This `div` element is not [included in the accessibility tree][], hence its [semantic role][] is not relevant.

```html
<div role="button" style="display:none;"></div>
```

#### Inapplicable Example 2

This `div` element has an [semantic role][] of `group`, which does not require an [accessible name][].

```html
<div role="group">Some content</div>
```

#### Inapplicable Example 3

This `button` element has an [explicit semantic role][] of `none`. leading to a conflict resolved by [Presentational Roles Conflict Resolution][], which is not covered by this rule.

```html
<button role="none">submit</button>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[attribute value]: #attribute-value 'Definition of attribute value'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[implicit semantic role]: #implicit-role 'Definition of Implicit Role'
[explicit semantic role]: #explicit-role 'Definition of Explicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[wai-aria 1.2]: https://www.w3.org/TR/wai-aria-1.2/
[html or svg element]: #namespaced-element

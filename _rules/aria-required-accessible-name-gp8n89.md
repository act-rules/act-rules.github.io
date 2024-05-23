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
    secondary: This success criterion is **less strict** than this rule. Unlike WCAG, which might not mandate accessible names for certain elements like table elements, this rule requires them. Consequently, some of the failed examples satisfy this success criterion.
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

Elements subjected to the [Presentational Roles Conflict Resolution][] are not part of this rule and must be tested separately. 

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

There are no assumptions.

## Accessibility Support

Elements with [explicit semantic role][] of `heading` and with no [accessible name][] seem to be consistently ignored by assistive technologies. Nonetheless, in the context of this rule, they fail since [WAI-ARIA 1.2][wai-aria 1.2] mandates the presence of an [accessible name][].

The [accessible name and description computation][] suggests that if an `aria-labelledby` attribute refers to an existing but empty element, the computation should stop and return an empty name without defaulting to the next steps. Several user agents and assistive technologies chose to use the next step in the computation in this case (ultimately defaulting to the content).

## Background

The applicability of this rule is limited to elements that have an [explicit semantic role][] that is not identical to their [implicit semantic role][]. Both [WAI-ARIA 1.2][wai-aria 1.2] and [ARIA in HTML](https://www.w3.org/TR/html-aria/#docconformance) discourage authors from using ARIA when the host language provides a feature with equivalent role semantics and values.

An example of an element that has an [implicit semantic role][] that is identical to its [explicit semantic role][] is a `<table role="table">` element. These elements are not applicable because they have extra requirements and should thus be checked separately.

Elements subjected to the [Presentational Roles Conflict Resolution][] are not covered by this rule, since their [explicit semantic role][] of `none` or `presentation` do not require an accessible name. However, if the [Presentational Roles Conflict Resolution][] is invoked, although the rule doesn't apply, an accessible name might still be necessary.

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

The `div` element with role `button` has an [accessible name][] provided by its content.

```html
<div role="button" tabindex="0">Submit</div>
```

#### Passed Example 2

The `div` element with role `img` has an [accessible name][] provided by the `aria-label` [attribute value][].

```html
<div role="img" aria-label="Rating: 5 out of 5 stars">
  <span aria-hidden="true">★★★★★</span>
</div>
```

#### Passed Example 3

The `div` element with role `checkbox` has an [accessible name][] provided thanks to the `aria-labelledby` attribute.

```html
<div role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="pass-agree-tc"></div>
<div id="pass-agree-tc">I agree with terms and conditions</div>
```

#### Passed Example 4

The `div` element with role `dialog` has an [accessible name][] provided by the `aria-labelledby` attribute.

```html
<div role="dialog" aria-modal="true" tabindex="-1" aria-labelledby="pass-terms">
  <h1 id="pass-terms">Terms</h1>
  <p>These are our terms.</p>
</div>
```

#### Passed Example 5

The `div` element with role `heading` has an [accessible name][] provided by its content.

```html
  <div role="heading" aria-level="1">Terms</div>
```

#### Passed Example 6

This `div` element with role `heading` is not [visible][], but is still [included in the accessibility tree][]. It has a non-empty [accessible name][] provided by its content.

```html
<div role="heading" aria-level="1" style="position: absolute; left: -9999px">ACT rules</div>
```

#### Passed Example 7

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

The `div` element with role `img` doesn't have an [accessible name][].

```html
<div role="img">
  <span aria-hidden="true">★★★★★</span>
</div>
```

#### Failed Example 3

The `div` element with role `checkbox` doesn't have an [accessible name][].

```html
<div role="checkbox" aria-checked="false" tabindex="0"></div>
<div>I agree with terms and conditions</div>
```

#### Failed Example 4

The `dialog` role accepts an [accessible name][] only from the author and not from its content. Therefore, the `div` element with role `dialog` doesn't have an [accessible name][].

```html
<div role="dialog" aria-modal="true" tabindex="-1">
  <h1>Terms</h1>
  <p>These are our terms.</p>
</div>
```

#### Failed Example 5

The `div` element with role `heading` has an empty [accessible name][] due to the empty `aria-label` [attribute value][].

```html
  <div role="heading" aria-level="1" aria-label="">Terms</div>
```

#### Failed Example 6

The `div` element with role `heading` has an empty [accessible name][] given by its `aria-labelledby` attribute.

```html
<span id="fail-heading"></span>
<div role="heading" aria-level="1" aria-labelledby="fail-heading">ACT Rules</div>
```

#### Failed Example 7

The `div` element with role `button` has an empty [accessible name][] because the `value` attribute does not count in the computation of the [accessible name][].

```html
<div role="button" value="test"></div>
```

#### Failed Example 8

This `div` element with role `button` is not [visible][], but is still [included in the accessibility tree][]. It doesn't have an [accessible name][], therefore failing the rule.

```html
<div role="button" style="position: absolute; left: -9999px" tabindex="0"></div>
```

#### Failed Example 9

The `div` element with role `link` has an empty [accessible name][].

```html
<div role="link" tabindex="0" onclick="location.href='https://act-rules.github.io/'"></div>
```

### Inapplicable

#### Inapplicable Example 1

This `button` element has no [explicit semantic role][].

```html
<button>Submit</button>
```

#### Inapplicable Example 2

This `div` element is not [included in the accessibility tree][], hence its [explicit semantic role][] is not relevant.

```html
<div role="button" style="display:none;"></div>
```

#### Inapplicable Example 3

This `table` element has an [explicit semantic role][] of `table`, that is identical to its [implicit semantic role][].

```html
<table role="table">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Some content 1</td>
      <td>Some content 2</td>
    </tr>
    <tr>
      <td>Some content 3</td>
      <td>Some content 4</td>
    </tr>
  </tbody>
</table>
```

#### Inapplicable Example 4

This `div` element has an [explicit semantic role][] of `group`, which does not require an [accessible name][].

```html
<div role="group">Some content</div>
```

<!-- Boundary example for future improvement -->
<!--#### Inapplicable Example 5

This `button` element has an [explicit semantic role][] of `none`. Although the [Presentational Roles Conflict Resolution][] requires the author to provide an [accessible name][], the [explicit semantic role][] does not require an [accessible name][] for this rule.

```html
<button role="none"></button>
```-->

[accessible name]: #accessible-name 'Definition of accessible name'
[attribute value]: #attribute-value 'Definition of attribute value'
[explicit semantic role]: #explicit-role 'Definition of Explicit Role'
[implicit semantic role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[wai-aria 1.2]: https://www.w3.org/TR/wai-aria-1.2/
[html or svg element]: #namespaced-element

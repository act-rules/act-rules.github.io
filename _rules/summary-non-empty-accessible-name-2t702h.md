---
id: 2t702h
name: Summary element has non-empty accessible name
rule_type: atomic
description: |
  This rule checks that each `summary` element has a non-empty accessible name.
accessibility_requirements:
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Wilco Fiers
---

## Applicability

This rule applies to HTML `summary` elements for which all the following are true:

- the element is [included in the accessibility tree][]; and
- the element works as the [summary button for its parent `details` element][details summary]; and
- the element has no [explicit role][], or the [explicit role][] is ignored due to a [presentational role conflict][presentational roles conflict].

## Expectation

Each target element has an [accessible name][] that is not empty (`""`), nor just the name of the `::marker` pseudo element.

## Assumptions

The rule assumes that all `summary` elements are [user interface components as defined by WCAG 2](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components).

## Accessibility Support

There is a difference in how user agents expose the triangle indicating the control's expand state. As a result, some user agents include the triangle in the accessible name of the summary element.

## Background

This rule is only applicable to `summary` elements that the browser will use as controls for a `details` element. While this rule is not applicable to `summary` elements with an [explicit semantic role][], most of the time these likely do still require an [accessible name][]. This is covered by other rules, such as the [Button has non-empty accessible name][97a4e1].

If the `summary` element is not included in the accessibility tree, but is still included in sequential focus navigation, this can result in accessibility issues not tested by this rule. This is covered under [Element with aria-hidden has no content in sequential focus navigation][6cfa84].

Note that some user agents expose the `summary` element with a `button` role. This deviates from the implicit ARIA semantics described in [ARIA in HTML](https://www.w3.org/TR/html-aria/#el-summary). Because some browsers do not give `summary` elements a button role, these elements need to be tested separately from the [Button has non-empty accessible name](https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/) ACT rule.

### Bibliography

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA14)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16)
- [Summary element entry for ARIA in HTML](https://www.w3.org/TR/html-aria/#el-summary)

## Test Cases

### Passed

#### Passed Example 1

This `summary` element has an [accessible name][] because of its text content.

```html
<details>
	<summary>Opening times</summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Passed Example 2

This `summary` element has an [accessible name][] because of its `aria-label` attribute.

```html
<details>
	<summary aria-label="Opening times"></summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Passed Example 3

This `summary` element has an [accessible name][] because of its `aria-labelledby` attribute.

```html
<span id="opening-times">Opening times</span>
<details>
	<summary aria-labelledby="opening-times"></summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Passed Example 4

This `summary` element has an [accessible name][] because of its text content. It does not need to be the first child element of `details`.

```html
<details>
	<p>This is a website. We are available 24/7.</p>
	<summary>Opening times</summary>
</details>
```

#### Passed Example 5

This first `summary` element has an [accessible name][] because of its text content. The second `summary` element is inapplicable because only the first `summary` element will be used as a control for the `details` element.

```html
<details>
	<summary>Opening times</summary>
	<summary></summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

### Failed

#### Failed Example 1

This `summary` element has no [accessible name][], or an accessible name with just the `::marker` pseudo element, because it has no content or attribute that can provide it.

```html
<details>
	<summary></summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Failed Example 2

This `summary` element has an [explicit role][] of `none`. However, it is [focusable][] (by default) which causes [Presentational Roles Conflict Resolution][presentational roles conflict]. It fails because it has an empty [accessible name][].

```html
<details>
	<summary role="none"></summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Failed Example 3

This first `summary` element has no [accessible name][] because it is empty. The second `summary` element is inapplicable because only the first `summary` element will be used as a control for the `details` element.

```html
<details>
	<summary></summary>
	<summary>Opening times</summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

### Inapplicable

#### Inapplicable Example 1

This `summary` element is not a child of a `details` element and so will not be interactive.

```html
<summary></summary>
```

#### Inapplicable Example 2

This `summary` element is not a direct child of a `details` element and so will not be interactive.

```html
<details>
	<div>
		<summary></summary>
	</div>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Inapplicable Example 3

This `summary` element has an explicit semantic role of `button`. These are tested under [Button has non-empty accessible name][97a4e1] instead. Note that while this example does not fail WCAG, under [ARIA in HTML](https://www.w3.org/TR/html-aria/#dfn-no-role) it is not allowed to override the role of a [summary for its parent details][details summary].

```html
<details>
	<summary role="button">Opening hours</summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Inapplicable Example 4

This `summary` element is hidden to everyone.

```html
<details style="display:none">
	<summary></summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[explicit role]: #explicit-role 'Definition of explicit role'
[focusable]: #focusable 'Definition of focusable'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[presentational roles conflict]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[details summary]: https://html.spec.whatwg.org/multipage/interactive-elements.html#summary-for-its-parent-details ' HTML 5 definition of summary for its parent details'
[97a4e1]: https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/
[6cfa84]: https://www.w3.org/WAI/standards-guidelines/act/rules/6cfa84/

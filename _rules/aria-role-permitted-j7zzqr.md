---
id: j7zzqr
name: ARIA role is permitted for the element.
rule_type: atomic
description: |
  This rule checks that explicit WAI-ARIA roles are allowed for the element they are specified on.
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

This rule applies to any [HTML element][namespaced element] which has an [explicit semantic role][explicit role] and is not [programmatically hidden][].

## Expectation

For each test target, its [explicit semantic role][explicit role] is allowed on this element, according to the [ARIA in HTML specification][aria in html document conformance].

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

Each element also has an [implicit semantic role][implicit role] defined in the [HTML Accessibility API Mappings][html aam:roles]. Setting the [explicit role][] as the same as the [implicit role][] is not recommended but nonetheless allowed. This rule does not check that scenario.

This rule does not check specifically whether the [explicit role][] is deprecated, or whether it is the special `generic` role that should not be used by authors. These are not conformance requirement, or are checked by other rules.

This rule only check for elements that are not [programmatically hidden][]. Elements that are [programmatically hidden][], e.g. due to a CSS `display:none`, must still have valid roles in order to conform to [ARIA in HTML][aria in html document conformance]. However, these won't cause any actual accessibility issues as long as they stay hidden. This rule only checks a snapshot of a page in a given state; if interacting with the page reveals such an element without fixing its role, that could create an accessibility issue for the user. Examples only show [programmatically hidden][] element with a correct role.

### Related rules

- [Role attribute has valid value](https://www.w3.org/WAI/standards-guidelines/act/rules/674b10/proposed/) checks that the value of the `role` attribute exists in ARIA, while this rule checks that it is allowed on the element using it.

### Bibliography

- [Document conformance requirements for use of ARIA attributes in HTML](https://www.w3.org/TR/html-aria/#docconformance)

## Test Cases

### Passed

#### Passed Example 1

This `a` element with an `href` attribute has an [explicit role][] of `button`, which is allowed.

```html
<a href="https://www.w3.org/WAI/standards-guidelines/act/rules/" role="button">All ACT rules</a>
```

#### Passed Example 2

This `h1` element has an [explicit role][] of `tab`, which is allowed. The `div` element also has an allowed role (of `tablist`).

```html
<div role="tablist">
	<h1 role="tab">ACT rules</h1>
</div>
```

#### Passed Example 3

These `hr` elements have an [explicit role][] of `presentation`, which is allowed.

```html
Fruits:
<ul>
	<li>
		Apple
		<hr role="presentation" />
	</li>
	<li>
		Banana
		<hr role="presentation" />
	</li>
	<li>Orange</li>
</ul>
```

#### Passed Example 4

This `p` element has an [explicit role][] of `generic` which is allowed. Using an explicit role of `generic` for any element is globally not recommended, but not an error by itself.

```html
<p role="generic">It was a dark and stormy night.</p>
```

#### Passed Example 5

These `hr` elements have an [explicit role][] of `separator`, which is allowed. Using an explicit role which is the same as the [implicit role][] is not recommended, but not an error by itself.

```html
Fruits:
<ul>
	<li>
		Apple
		<hr role="separator" />
	</li>
	<li>
		Banana
		<hr role="separator" />
	</li>
	<li>Orange</li>
</ul>
```

#### Passed Example 6

This `h1` element has an [explicit role][] of `tab`, which is allowed. The `btn` token is not a valid role and is therefore ignored.

```html
<div role="tablist">
	<h1 role="btn tab">ACT rules</h1>
</div>
```

#### Passed Example 7

This `dialog` element has an [explicit role][] of `alertdialog`, which is allowed. Even though the `alert` role is not allowed, the first token is a valid role and is therefore used.

```html
<dialog role="alertdialog alert">This is not right.</dialog>
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
	<a href="https://www.w3.org">W3C</a> <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a>
	<a href="https://www.w3.org/WAI/standards-guidelines/act/rules/"> ACT rules</a>
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

This `a` element with an `href` attribute has an [explicit role][] of `presentation`, which is not allowed. Note that since the element is focusable, the [presentational roles conflict resolution][] would trigger, and the explicit role is ignored.

```html
<a href="https://www.w3.org/WAI/standards-guidelines/act/rules/" role="presentation">All ACT rules</a>
```

#### Failed Example 5

The first `li` element has an [explicit role][] of `presentation`, which is not allowed when its parent has an [implicit role][] of `list`.

```html
Fruits:
<ul>
	<li role="presentation">Apple</li>
	<li>Banana</li>
	<li>Orange</li>
</ul>
```

#### Failed Example 6

This `label` element has an [explicit role][] of `generic`, which is not allowed.

```html
<label role="generic"> Name: <input /> </label>
```

#### Failed Example 7

This `dialog` element has an [explicit role][] of `alert`, which is not allowed. Even though the `alertdialog` role is allowed, the first token is a valid role and is therefore used.

```html
<dialog role="alert alertdialog">This is not right.</dialog>
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

This `a` element does not have an [explicit semantic role][]:.

```html
<a href="https://www.w3.org/WAI/standards-guidelines/act/rules/">All ACT rules</a>
```

#### Inapplicable Example 3

This `button` element is [programmatically hidden][].

```html
<button role="link" style="display:none;">Click me</button>
```

#### Inapplicable Example 4

This `h1` element is [programmatically hidden][].

```html
<h1 role="heading" aria-hidden="true">ACT rules</h1>
```

[aria in html document conformance]: https://www.w3.org/TR/html-aria/#docconformance 'ARIA in HTML, Document conformance requirements for use of ARIA attributes in HTML'
[explicit role]: #explicit-role 'Definition of Explicit Role'
[html aam:roles]: https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings 'HTML Accessibility API Mappings, Element Role Mappings'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[namespaced element]: #namespaced-element 'Definition of Namespaced Element'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution in ARIA 1.2'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'

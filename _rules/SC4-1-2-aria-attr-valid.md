---
id: 5f99a7
name: ARIA attribute is valid
description: |
  This rule checks that each aria- attribute specified is defined in ARIA 1.1
success_criterion:
  - 4.1.2
test_aspects:
  - DOM Tree
authors:
  - Jey Nandakumar
---

## Test procedure

### Applicability

Any attribute that starts with `aria-`.

### Expectation

Each target attribute is defined in [WAI ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/).

## Assumptions

The ARIA `attribute` is being used to comply to WCAG.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [ARIA in HTML](https://www.w3.org/TR/html-aria/#index-aria-global)
- [WAI ARIA Supported States and Properties](http://www.w3.org/TR/wai-aria/#states_and_properties)
- [G108: Using markup features to expose the name and role](http://www.w3.org/TR/WCAG20-TECHS/G108)
- [WCAG 2.0 - Name, Role, Value: Understanding SC 4.1.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)
- [Semantics and ARIA](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/)
- [WAI ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/)

## Test cases

### Passed

#### Passed example 1

A valid ARIA 1.1 attribute `aria-atomic` is used on element `article`.

```html
<article aria-atomic>This is a decription of something cool...</article>
```

#### Passed example 2

A valid ARIA 1.1 attribute `aria-modal` on element `div` with role `dialog`

```html
<div role="dialog" aria-modal>Contains modal content...</div>
```

#### Passed example 3

A valid ARIA 1.1 attribute `aria-live` on element `div` with role `alert`

```html
<div role="alert" aria-live="assertive">
	Your session will expire in 60 seconds.
</div>
```

#### Passed example 4

Muliple valid ARIA 1.1 attributes `aria-*` are specified on element `input` with role `spinbutton`

```html
<input
	role="spinbutton"
	aria-valuemax="100"
	aria-valuemin="0"
	aria-valuenow="25"
	type="number"
	value="25"
/>
```

### Failed

#### Failed example 1

`aria-not-checked` is not a defined attribute in ARIA 1.1.

```html
<li role="menuitemcheckbox" aria-not-checked="true">List Item</li>
```

#### Failed example 2

`aria-labelled` is not a defined attribute in ARIA 1.1.

```html
<span id="label">Birthday:</span>
<div
	contenteditable
	role="searchbox"
	aria-labelled="label"
	aria-placeholder="MM-DD-YYYY"
>
	01-01-2019
</div>
```

### Inapplicable

#### Inapplicable example 1

Element without `aria-*` attribute.

```html
<canvas> </canvas>
```

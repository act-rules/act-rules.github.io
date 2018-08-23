---
name: Validity of ARIA attribute specified

description: |
 This rule checks that the `aria-*` attribute specified is valid.

success_criterion:
- 4.1.1

test_aspects:
- DOM Tree

authors:
- Jey Nandakumar
---

## Test procedure

### Applicability

Any DOM element within the `body` of a webpage with an `aria-*` attribute.

### Expectation

The `aria-*` attribute specified is a valid attribute.

## Assumptions

*There are currently no assumptions*

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [https://www.w3.org/TR/html-aria/#index-aria-global](https://www.w3.org/TR/html-aria/#index-aria-global)
- [http://www.w3.org/TR/wai-aria/#states_and_properties](http://www.w3.org/TR/wai-aria/#states_and_properties)
- [http://www.w3.org/TR/WCAG20-TECHS/G108](http://www.w3.org/TR/WCAG20-TECHS/G108)
- [http://oaa-accessibility.org/examples/](http://oaa-accessibility.org/examples/)
- [http://www.w3.org/TR/WCAG20/#ensure-compat-rsv](http://www.w3.org/TR/WCAG20/#ensure-compat-rsv)
-[https://developers.google.com/web/fundamentals/accessibility/semantics-aria/](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/)

## Test cases

### Passed

#### Pass example 1

Valid attribute `aria-atomic` on element `article`

```html
<article aria-atomic>This is a decription of something cool...</article>
```

#### Pass example 2

Valid attribute `aria-modal` on element `div` with role `dialog`

```html
<div role="dialog" aria-modal>Contains modal content...</div>
```

#### Pass example 3

Valid attribute `aria-live` on element with role `alert`

```html
<div role="alert" aria-live="assertive">Your session will expire in 60 seconds.</div>
```

#### Pass example 4

Valid `aria-*` attributes on element `input` with role `spinbutton`

```html
<input
  role="spinbutton"
  aria-valuemax="100"
  aria-valuemin="0"
  aria-valuenow="25"
  type="number"
  value="25">
```

### Failed

#### Fail example 1

`aria-not-checked` is not a valid attribute.

```html
<li role="menuitemcheckbox" aria-not-checked="true">List Item</li>
```

#### Fail example 2

`aria-labelled` is not a valid attribute.

```html
<span id="label">Birthday:</span>
<div contenteditable role="searchbox" aria-labelled="label" aria-placeholder="MM-DD-YYYY">01-01-2019</div>
```

### Inapplicable

#### Inapplicable example 1

`aria-rowcount` not applicable to element `canvas`.

```html
<canvas aria-rowcount="2000">
<canvas>
```
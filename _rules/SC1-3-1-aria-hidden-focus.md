---
name: aria-hidden with focusable content
rule_type: atomic

description: |
  This rule checks that elements with an `aria-hidden` attribute do not contain focusable elements

success_criterion:
- 1.3.1 # Info and Relationships
- 4.1.2 # Name, Role, Value

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Wilco Fiers
---

## Test Procedure

### Applicability

The rule applies to any element with an `aria-hidden="true"` attribute.

**Note**: Using `aria-hidden="false"` on a descendent of an element with `aria-hidden="true"` **does not** expose that element. `aria-hidden="true"` hides itself and all its content from assistive technologies.

### Expectation

None of the target elements are [focusable](#focusable), nor do they contain a [focusable element](#focusable).

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

By adding `aria-hidden="true"` to an element, content authors ensure that assistive technologies will ignore the element. This can be used to hide decorative parts of a web page, such as icon fonts - that are not meant to be read by assistive technologies.

A focusable element with `aria-hidden="true"` is ignored as part of the reading order, but still part of the focus order, making it's state of visible or hidden unclear.

- https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html
- https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html
- https://www.w3.org/TR/wai-aria-1.1/#aria-hidden
- https://www.w3.org/TR/html/editing.html#can-be-focused

## Test Cases

### Passed

#### Passed example 1

Content not focusable by default.

```html
<p aria-hidden="true">Some text</p>
```

#### Passed example 2

Content hidden through CSS.

```html
<div aria-hidden="true">
	<a href="/" style="display:none">Link</a>
</div>
```

#### Passed example 3

Content made unfocusable through tabindex.

```html
<div aria-hidden="true">
	<button tabindex="-1">Some button</button>
</div>
```

#### Passed example 4

Content made unfocusable through disabled.

```html
<input disabled aria-hidden="true" />
```

#### Passed example 5

`aria-hidden` can't be reset once set to true on an ancestor.

```html
<div aria-hidden="true">
    <div aria-hidden="false">
        <button tabindex="-1">Some button</button>
    </div>
</div>
```

### Failed

#### Failed example 1

Focusable off screen link.

```html
<div aria-hidden="true">
	<a href="/" style="position:absolute; top:-999em">Link</a>
</div>
```

#### Failed example 2

Focusable form field, incorrectly disabled.

```html
<div aria-hidden="true">
	<input aria-disabled="true" />
</div>
```

#### Failed example 3

`aria-hidden` can't be reset once set to true on an ancestor.

```html	
<div aria-hidden="true">
    <div aria-hidden="false">
        <button>Some button</button>
    </div>
</div>
```

#### Failed example 4

Focusable content through `tabindex`.

```html
<p tabindex="0" aria-hidden="true">Some text</p>
```

#### Failed example 5

Focusable summary element

```html
<details aria-hidden="true">
    <summary>Some button</summary>
    <p>Some details</p>
</details>
```

### Inapplicable

#### Inapplicable example 1

Ignore `aria-hidden` with null value.

```html
<button tabindex="-1" aria-hidden>Some button</button>
```

#### Inapplicable example 2

Ignore `aria-hidden` false.

```html
<p aria-hidden="false">Some text</p>
```

#### Inapplicable example 3

Incorrect value of `aria-hidden`.

```html
<div aria-hidden="yes">
	<p>Some text</p>
</div>
```

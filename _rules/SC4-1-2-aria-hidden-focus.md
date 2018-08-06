---
name: aria-hidden with focusable content
description: |
  This rule checks `aria-hidden` elements do not contain focusable elements

success_criterion:
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

**Note**: Using `aria-hidden="false"` on a decendent of an element with `aria-hidden="true"` **does not** expose that element. `aria-hidden="true"` hides itself and all its content from assistive technologies.

### Expectation

None of the target elements are [focusable](#focusable), nor do they contain a [focusable element](#focusable).

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

By adding `aria-hidden="true"` to an element, content authors ensure that assistive technologies will ignore the element. This can be used to hide decorative parts of a web page, such as icon fonts - that are not meant to be read by assistive technologies.

A focusable element with `aria-hidden="true"` is ignored as part of the reading order, but still part of the focus order, making it's state of visible or hidden unclear.

- https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html
- https://www.w3.org/TR/wai-aria-1.1/#aria-hidden
- https://www.w3.org/TR/html/editing.html#can-be-focused

## Test Cases

### Passed

```html
<!-- Content not focusable by default -->
<p aria-hidden="true">Some text</p>
```

```html
<!-- Content hidden through CSS -->
<div aria-hidden="true">
    <a href="/" style="display:none">Link</a>
</div>
```

```html
<!-- Content made unfocusable through tabindex -->
<div aria-hidden="true">
    <button tabindex="-1">Some button</button>
</div>
```

```html
<!-- Content made unfocusable through disabled -->
<input disabled aria-hidden="true" />
```

### Failed

```html
<!-- Focusable off screen link -->
<div aria-hidden="true">
    <a href="/" style="position:absolute; top:-999em">Link</a>
</div>
```

```html
<!-- Focusable form field, incorrectly disabled -->
<div aria-hidden="true">
    <input aria-disabled="true" />
</div>
```

```html
<!-- aria-hidden=false does not negate aria-hidden true -->
<div aria-hidden="true">
    <div aria-hidden="false">
        <button tabindex="-1">Some button</button>
    </div>
</div>
```

```html
<!-- Focusable content through tabindex -->
<p tabindex="0" aria-hidden="true">Some text</p>
```

```html
<!-- Focusable summary element -->
<details aria-hidden="true">
    <summary>Some button</summary>
    <p>Some details</p>
</details>
```

### Inapplicable

```html
<!-- Ignore aria-hidden with null value -->
<button tabindex="-1" aria-hidden>Some button</button>
```

```html
<!-- Ignore aria-hidden false -->
<p aria-hidden="false">Some text</p>
```

```html
<!-- Incorrect value of aria-hidden -->
<div aria-hidden="yes">
    <p>Some text</p>
</div>
```

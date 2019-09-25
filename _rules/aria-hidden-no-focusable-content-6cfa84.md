---
id: 6cfa84
name: Element with `aria-hidden` has no focusable content
rule_type: atomic
description: |
  This rule checks that elements with an `aria-hidden` attribute do not contain focusable elements.
accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
authors:
  - Wilco Fiers
---

## Applicability

The rule applies to any element with an `aria-hidden="true"` attribute.

**Note**: Using `aria-hidden="false"` on a descendant of an element with `aria-hidden="true"` **does not** expose that element. `aria-hidden="true"` hides itself and all its content from assistive technologies.

## Expectation

None of the target elements are part of [sequential focus navigation](https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation), nor do they have [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress) that are part of [sequential focus navigation](https://html.spec.whatwg.org/#sequential-focus-navigation).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

By adding `aria-hidden="true"` to an element, content authors ensure that assistive technologies will ignore the element. This can be used to hide [decorative](#decorative) parts of a web page, such as icon fonts - that are not meant to be read by assistive technologies.

A [focusable][] element with `aria-hidden="true"` is ignored as part of the reading order, but still part of the focus order, making it's state of [visible](#visible) or hidden unclear.

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [`aria-hidden` (state)](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden)

## Test Cases

### Passed

#### Passed Example 1

Content not [focusable][] by default.

```html
<p aria-hidden="true">Some text</p>
```

#### Passed Example 2

Content hidden through CSS.

```html
<div aria-hidden="true">
	<a href="/" style="display:none">Link</a>
</div>
```

#### Passed Example 3

Content taken out of sequential focus order using `tabindex`.

```html
<div aria-hidden="true">
	<button tabindex="-1">Some button</button>
</div>
```

#### Passed Example 4

Content made [unfocusable][focusable] through `disabled` attribute.

```html
<input disabled aria-hidden="true" />
```

#### Passed Example 5

`aria-hidden` can't be reset once set to true on an ancestor.

```html
<div aria-hidden="true">
	<div aria-hidden="false">
		<button tabindex="-1">Some button</button>
	</div>
</div>
```

#### Passed Example 6

Content taken out of sequential focus order using `tabindex`.

```html
<div aria-hidden="true">
	<button tabindex="-2">Some button</button>
</div>
```

### Failed

#### Failed Example 1

[Focusable][] off screen link.

```html
<div aria-hidden="true">
	<a href="/" style="position:absolute; top:-999em">Link</a>
</div>
```

#### Failed Example 2

[Focusable][] form field, incorrectly disabled.

```html
<div aria-hidden="true">
	<input aria-disabled="true" />
</div>
```

#### Failed Example 3

`aria-hidden` can't be reset once set to true on an ancestor.

```html
<div aria-hidden="true">
	<div aria-hidden="false">
		<button>Some button</button>
	</div>
</div>
```

#### Failed Example 4

[Focusable][] content through `tabindex`.

```html
<p tabindex="0" aria-hidden="true">Some text</p>
```

#### Failed Example 5

[Focusable][] `summary` element.

```html
<details aria-hidden="true">
	<summary>Some button</summary>
	<p>Some details</p>
</details>
```

### Inapplicable

#### Inapplicable Example 1

Ignore `aria-hidden` with null value.

```html
<button tabindex="-1" aria-hidden>Some button</button>
```

#### Inapplicable Example 2

Ignore `aria-hidden` false.

```html
<p aria-hidden="false">Some text</p>
```

#### Inapplicable Example 3

Incorrect value of `aria-hidden`.

```html
<div aria-hidden="yes">
	<p>Some text</p>
</div>
```

[focusable]: #focusable 'Definition of focusable'

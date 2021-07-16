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
  using-aria:fourth:
    title: Fourth rule of ARIA use
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Wilco Fiers
---

## Applicability

This rule applies to any element with an `aria-hidden` [attribute value][] of `true`.

## Expectation

None of the target elements can be [focused][], nor do they have [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) that can be [focused][].

## Assumptions

Interacting with the page to [focus][focused] an element does not result in changing the `aria-hidden` [attribute value][] of target elements. An example of such a situation would be when closing a modal dialog would make previously hidden and not [focusable][] elements to become [focusable][].

## Accessibility Support

Some user agents treat the value of `aria-hidden` attribute as case-sensitive.

## Background

Using `aria-hidden="false"` on a descendant of an element with `aria-hidden="true"` **does not** expose that element. `aria-hidden="true"` hides itself and all its content from assistive technologies.

By adding `aria-hidden="true"` to an element, content authors ensure that assistive technologies will ignore the element. This can be used to hide parts of a web page that are [pure decoration](https://www.w3.org/TR/WCAG21/#dfn-pure-decoration), such as icon fonts - that are not meant to be read by assistive technologies.

A [focusable][] element with `aria-hidden="true"` is ignored as part of the reading order, but still part of the focus order, making its state of [visible](#visible) or hidden unclear.

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [`aria-hidden` (state)](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden)
- [Fourth rule of ARIA use (work in progress)](https://www.w3.org/TR/using-aria/#fourth)

## Test Cases

### Passed

#### Passed Example 1

This `<p>` element cannot be focused by default.

```html
<p aria-hidden="true">Some text</p>
```

#### Passed Example 2

This `a` element cannot be focused because it is hidden through CSS.

```html
<div aria-hidden="true">
	<a href="/" style="display:none">Link</a>
</div>
```

#### Passed Example 3

This `input` element cannot be focused because of the `disabled` attribute.

```html
<input disabled aria-hidden="true" />
```

### Failed

#### Failed Example 1

This `a` element positioned off screen can still be focused through keyboard.

```html
<div aria-hidden="true">
	<a href="/" style="position:absolute; top:-999em">Link</a>
</div>
```

#### Failed Example 2

This `input` element can still be focused because it was incorrectly disabled.

```html
<div aria-hidden="true">
	<input aria-disabled="true" />
</div>
```

#### Failed Example 3

This `button` element can be still be focused because `aria-hidden` can't be reset once set to true on an ancestor.

```html
<div aria-hidden="true">
	<div aria-hidden="false">
		<button>Some button</button>
	</div>
</div>
```

#### Failed Example 4

This `p` can be focused because of the `tabindex` attribute.

```html
<p tabindex="0" aria-hidden="true">Some text</p>
```

#### Failed Example 5

This `p` can still be focused through pointer or touch because of the `tabindex` attribute.

```html
<div aria-hidden="true">
	<button tabindex="-1">Some button</button>
</div>
```

#### Failed Example 6

This `summary` element can be focused.

```html
<details aria-hidden="true">
	<summary>Some button</summary>
	<p>Some details</p>
</details>
```

### Inapplicable

#### Inapplicable Example 1

This `aria-hidden` attribute is ignored with null value.

```html
<button tabindex="-1" aria-hidden>Some button</button>
```

#### Inapplicable Example 2

This `aria-hidden` attribute is ignored with value `false`.

```html
<p aria-hidden="false">Some text</p>
```

#### Inapplicable Example 3

This `aria-hidden` attribute has an incorrect value.

```html
<div aria-hidden="yes">
	<p>Some text</p>
</div>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[focusable]: #focusable 'Definition of focusable'
[focused]: #focused 'Definition of focused'

---
id: 6cfa84
name: Element with aria-hidden has no content in sequential focus navigation
rule_type: atomic
description: |
  This rule checks that elements with an `aria-hidden` attribute do not contain elements that are part of the sequential focus navigation and focusable.
accessibility_requirements:
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
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any element with an `aria-hidden` [attribute value][] of `true`.

## Expectation

None of the target elements has an [inclusive descendant][] in the [flat tree][] that are [focusable][] and part of the [sequential focus navigation][].

## Assumptions

Interacting with the page does not result in changing the `aria-hidden` [attribute value][] of target elements. An example of such a situation would be when closing a modal dialog makes previously hidden elements that were not [focusable][] or part of the [sequential focus navigation][] become [focusable][] and part of the [sequential focus navigation][].

## Accessibility Support

Some user agents treat the value of `aria-hidden` attribute as case-sensitive.

## Background

Using `aria-hidden="false"` on a descendant of an element with `aria-hidden="true"` [**does not** expose that element](https://www.w3.org/TR/wai-aria-1.2/#aria-hidden). `aria-hidden="true"` hides itself and all its content from assistive technologies.

By adding `aria-hidden="true"` to an element, content authors ensure that assistive technologies will ignore the element. This can be used to hide parts of a web page that are [pure decoration](https://www.w3.org/TR/WCAG22/#dfn-pure-decoration), such as icon fonts - that are not meant to be read by assistive technologies.

An element with an `aria-hidden` attribute set to `true` that is also part of the [sequential focus navigation][] may cause confusion for users of assistive technologies because the element can be reached via [sequential focus navigation][], but it should be hidden and not [included in the accessibility tree][].

The 1 second time span introduced in the exception of the definition of [focusable][] is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focused state of an element consistently would be impractical without a time limit.

### Related rules

- [Element with presentational children has no focusable content](https://www.w3.org/WAI/standards-guidelines/act/rules/307n5z/)

### Bibliography

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [`aria-hidden` (state)](https://www.w3.org/TR/wai-aria-1.2/#aria-hidden)
- [Fourth rule of ARIA use](https://www.w3.org/TR/using-aria/#fourth)
- [Element with presentational children has no focusable content](presentational-children-no-focusable-content-307n5z.md)

## Test Cases

### Passed

#### Passed Example 1

This `p` element is not part of the [sequential focus navigation][].

```html
<p aria-hidden="true">Some text</p>
```

#### Passed Example 2

This `a` element is not part of the [sequential focus navigation][] because it is hidden through CSS.

```html
<div aria-hidden="true">
	<a href="/" style="display:none">Link</a>
</div>
```

#### Passed Example 3

This `input` element is not part of the [sequential focus navigation][] because of the `disabled` attribute.

```html
<input disabled aria-hidden="true" />
```

#### Passed Example 4

This `a` element is not [focusable][] because it moves focus to the `input` element whenever it receives focus. These elements
are sometimes referred to as 'focus sentinel' or 'bumper'. They are typically found before and after a modal / dialog in
order to contain focus within the modal. Page authors do not want the sentinel to be visible, nor do they want them to be read by
a screen reader. But, they do want the element to be part of the [sequential focus navigation][]. This allows the page author
to detect that focus has left the dialog in order to wrap it to the top/bottom as appropriate.

```html
<div
	id="sampleModal"
	role="dialog"
	aria-label="Sample Modal"
	aria-modal="true"
	style="border: solid black 1px; padding: 1rem;"
>
	<label>First and last name <input id="dialogFirst"/></label><br />
	<button id="closeButton">Close button</button>
</div>
<div aria-hidden="true">
	<a href="#" id="sentinelAfter" style="position:absolute; top:-999em"
		>Upon receiving focus, this focus sentinel should wrap focus to the top of the modal</a
	>
</div>
<script>
	document.getElementById('sentinelAfter').addEventListener('focus', () => {
		document.getElementById('dialogFirst').focus()
	})
	document.getElementById('closeButton').addEventListener('click', () => {
		document.getElementById('sampleModal').style.display = 'none'
	})
</script>
```

#### Passed Example 5

This `button` element is [focusable][], but not part of the [sequential focus navigation][] because of the `tabindex` attribute.

```html
<div aria-hidden="true">
	<button tabindex="-1">Some button</button>
</div>
```

#### Passed Example 6

This `svg` element with `aria-hidden` does not have a focusable descendant, focusable ancestors are not a problem for this rule.

```html
<a href="#">
	<svg width="16" height="16" aria-hidden="true">
		<circle cx="8" cy="11" r="4" stroke="black" stroke-width="2" fill="transparent" />
	</svg>
	Hello ACT
</a>
```

### Failed

#### Failed Example 1

This `a` element positioned off screen is part of the [sequential focus navigation][] using the keyboard.

```html
<div aria-hidden="true">
	<a href="/" style="position:absolute; top:-999em">Link</a>
</div>
```

#### Failed Example 2

This `input` element is part of the [sequential focus navigation][] because it was incorrectly disabled.

```html
<div aria-hidden="true">
	<input aria-disabled="true" />
</div>
```

#### Failed Example 3

This `button` element is part of the [sequential focus navigation][] and a descendant of an element with an `aria-hidden` [attribute value][] of `true` because `aria-hidden` can't be reset once set to true on an ancestor.

```html
<div aria-hidden="true">
	<div aria-hidden="false">
		<button>Some button</button>
	</div>
</div>
```

#### Failed Example 4

This `p` element is part of the [sequential focus navigation][] because of the `tabindex` attribute.

```html
<p tabindex="0" aria-hidden="true">Some text</p>
```

#### Failed Example 5

This `summary` element is part of the [sequential focus navigation][].

```html
<details aria-hidden="true">
	<summary>Some button</summary>
	<p>Some details</p>
</details>
```

#### Failed Example 6

This `a` element is [focusable][] because it fails to move focus when it receives focus. This is in contrast to a focus sentinel that
immediately jumps focus to a valid location. Focus sentinels are typically used before and after a modal dialog in order to contain
and wrap focus. In this case, the `focus` event was removed, but the sentinel was not.

```html
<div
	id="sampleModal"
	role="dialog"
	aria-label="Sample Modal"
	aria-modal="true"
	style="border: solid black 1px; padding: 1rem;"
>
	<label>First and last name <input id="dialogFirst"/></label><br />
	<button id="closeButton">Close button</button>
</div>
<div aria-hidden="true">
	<a href="#" id="sentinelAfter" style="position:absolute; top:-999em"
		>Upon receiving focus, this focus sentinel should wrap focus to the top of the modal</a
	>
</div>
<script>
	document.getElementById('closeButton').addEventListener('click', () => {
		document.getElementById('sampleModal').style.display = 'none'
	})
</script>
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
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of focusable'
[inclusive descendant]: https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant 'DOM definition of Inclusive Descendant'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation

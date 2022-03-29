---
id: 6cfa84
name: Element with `aria-hidden` has no focusable content
rule_type: atomic
description: |
  This rule checks that elements with an `aria-hidden` attribute do not contain focusable elements.
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

None of the target elements are [focusable][], nor do they have [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) that are [focusable][].

## Assumptions

Interacting with the page does not result in changing the `aria-hidden` [attribute value][] of target elements. An example of such a situation would be when closing a modal dialog makes previously hidden and not [focusable][] elements become [focusable][].

## Accessibility Support

Some user agents treat the value of `aria-hidden` attribute as case-sensitive.

## Background

Using `aria-hidden="false"` on a descendant of an element with `aria-hidden="true"` [**does not** expose that element](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden). `aria-hidden="true"` hides itself and all its content from assistive technologies.

By adding `aria-hidden="true"` to an element, content authors ensure that assistive technologies will ignore the element. This can be used to hide parts of a web page that are [pure decoration](https://www.w3.org/TR/WCAG21/#dfn-pure-decoration), such as icon fonts - that are not meant to be read by assistive technologies.

A [focusable][] element with `aria-hidden="true"` is ignored as part of the reading order, but still part of the focus order, making its state of [visible](#visible) or hidden unclear.

The 1 second time span introduced in the exception of the definition of [focusable][] is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focused state of an element consistently would be impractical without a time limit.

### Related rules

- [Element with presentational children has no focusable content](https://act-rules.github.io/rules/307n5z)

### Bibliography

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [`aria-hidden` (state)](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden)
- [Fourth rule of ARIA use](https://www.w3.org/TR/using-aria/#fourth)
- [Element with presentational children has no focusable content](presentational-children-no-focusable-content-307n5z.md)

## Test Cases

### Passed

#### Passed Example 1

This `p` element is not [focusable][].

```html
<p aria-hidden="true">Some text</p>
```

#### Passed Example 2

This `a` element is not [focusable][] because it is hidden through CSS.

```html
<div aria-hidden="true">
	<a href="/" style="display:none">Link</a>
</div>
```

#### Passed Example 3

This `input` element is not [focusable][] because of the `disabled` attribute.

```html
<input disabled aria-hidden="true" />
```

#### Passed Example 4

This `a` element is not [focusable][] because it moves focus to the `input` element whenever it receives focus.

```html
<div id="sampleModal" role="dialog" aria-label="Sample Modal" aria-modal="true" style="border: solid black 1px; padding: 1rem;">
    <label>Some input <input id="dialogFirst"></label><br />
    <button id="closeButton">Close button</button>
</div>
<div aria-hidden="true">
    <a href="#" id="sentinelAfter" style="position:absolute; top:-999em">Focus sentinel</a>
</div>
<script>
    document.getElementById("sentinelAfter").addEventListener("focus", () => {
        document.getElementById("dialogFirst").focus();
    });
    document.getElementById("sampleModal").addEventListener("click", () => {
        document.getElementById("sampleModal").style.display = "none";
    });
</script>
```

### Failed

#### Failed Example 1

This `a` element positioned off screen is [focusable][] using the keyboard.

```html
<div aria-hidden="true">
	<a href="/" style="position:absolute; top:-999em">Link</a>
</div>
```

#### Failed Example 2

This `input` element is [focusable][] because it was incorrectly disabled.

```html
<div aria-hidden="true">
	<input aria-disabled="true" />
</div>
```

#### Failed Example 3

This `button` element is [focusable][] and a descendant of an element with an `aria-hidden` [attribute value][] of `true` because `aria-hidden` can't be reset once set to true on an ancestor.

```html
<div aria-hidden="true">
	<div aria-hidden="false">
		<button>Some button</button>
	</div>
</div>
```

#### Failed Example 4

This `p` element is [focusable][] because of the `tabindex` attribute.

```html
<p tabindex="0" aria-hidden="true">Some text</p>
```

#### Failed Example 5

This `button` element is [focusable][] because of the `tabindex` attribute.

```html
<div aria-hidden="true">
	<button tabindex="-1">Some button</button>
</div>
```

#### Failed Example 6

This `summary` element is [focusable][].

```html
<details aria-hidden="true">
	<summary>Some button</summary>
	<p>Some details</p>
</details>
```

#### Failed Example 7

This `a` element is [focusable][] because it fails to move focus when it receives focus. This is in contrast to Passed Example 4.

```html
<div id="sampleModal" role="dialog" aria-label="Sample Modal" aria-modal="true" style="border: solid black 1px; padding: 1rem;">
    <label>Some input <input id="dialogFirst"></label><br />
    <button id="closeButton">Close button</button>
</div>
<div aria-hidden="true">
    <a href="#" id="sentinelAfter" style="position:absolute; top:-999em">Focus sentinel</a>
</div>
<script>
    document.getElementById("sampleModal").addEventListener("click", () => {
        document.getElementById("sampleModal").style.display = "none";
    });
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
[focusable]: #focusable 'Definition of focusable'

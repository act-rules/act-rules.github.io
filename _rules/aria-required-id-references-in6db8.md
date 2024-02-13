---
id: in6db8
name: ARIA required ID references exist
rule_type: atomic
description: |
  This rule checks that every ID reference required by WAI-ARIA exists
accessibility_requirements:
  aria12:propcharacteristic_value:
    title: ARIA 1.2, 6.2.4 Value (Characteristics of States and Properties)
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
  wcag20:1.3.1: # Info and Relationships (A)
    secondary: This success criterion is **less strict** than this rule. This is because the rule does not check for alternatives which may be accessible. Some of the failed examples satisfy this success criterion.
  wcag20:4.1.2: # Name, Role, Value (A)
    secondary: This success criterion is **less strict** than this rule. This is because the rule does not check for alternatives which may be accessible. Some of the failed examples satisfy this success criterion.
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Wilco Fiers
---

## Applicability

This rule applies to any `aria-controls` attribute defined on an [HTML element][namespaced element] for which one of the following is true:

- <dfn>expanded combobox</dfn>: the element is a [semantic][] `combobox` with an `aria-expanded` [attribute value][] of `true`; or
- <dfn>scrollbar</dfn>: the element is a [semantic][] `scrollbar`.

## Expectation

Each test target's [attribute value][] is a space-separated list of one or more IDs. At least one of those IDs must match an `id` [attribute value][] in the same [shadow tree][] or, if not within a [shadow tree][], within the same [document][document tree].

## Assumptions

There are no assumptions.

## Accessibility Support

Some user agents treat the value of `aria-*` attribute as case-sensitive (even when these are not IDs) while some treat them as case-insensitive.

## Background

This rule is written specifically for `aria-controls`, because it is the only [ID Reference List][] property that is [required by WAI-ARIA][]. The `aria-controls` property is only required by the `scrollbar` role and by an expanded `combobox`. There are no [ID Reference][] properties that are required by WAI-ARIA for any role.

### Bibliography

- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5)
- [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria-1.2/#requiredState)
- [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)

## Test Cases

### Passed

#### Passed Example 1

The `aria-controls` [attribute value][] of this `scrollbar` matches the `id` of the `main` element in the same document.

```html
<main id="content">Lorem ipsum...</main>
<div
	role="scrollbar"
	aria-controls="content"
	aria-orientation="vertical"
	aria-valuemax="100"
	aria-valuemin="0"
	aria-valuenow="25"
></div>
```

#### Passed Example 2

The `aria-controls` [attribute value][] of this expanded `combobox` matches the `id` of the `ul` element in the same document.

```html
<label for="tag_combo">Tag</label>
<input
	type="text"
	id="tag_combo"
	role="combobox"
	aria-expanded="true"
	aria-controls="popup_listbox"
	aria-activedescendant="selected_option"
/>
<ul role="listbox" id="popup_listbox">
	<li role="option">Zebra</li>
	<li role="option" id="selected_option">Zoom</li>
</ul>
```

#### Passed Example 3

The `aria-controls` [attribute value][] of this `scrollbar` has two IDs. The `content-2` ID matches the `id` of the `main` element in the same document.

```html
<main id="content-2">Lorem ipsum...</main>
<div
	role="scrollbar"
	aria-controls="content-1 content-2"
	aria-orientation="vertical"
	aria-valuemax="100"
	aria-valuemin="0"
	aria-valuenow="25"
></div>
```

### Failed

#### Failed Example 1

The `aria-controls` attribute of this expanded `combobox` references an ID of `popup_listbox` which does not exist in the document.

```html
<label>
	Tag
	<input role="combobox" aria-expanded="true" aria-controls="popup_listbox" />
</label>
```

#### Failed Example 2

The `aria-controls` attribute of this `scrollbar` references IDs of `content-1` and `content-2`. Neither of these IDs exist in the document.

```html
<main>Lorem ipsum...</main>
<div
	role="scrollbar"
	aria-controls="content-1 content-2"
	aria-orientation="vertical"
	aria-valuemax="100"
	aria-valuemin="0"
	aria-valuenow="25"
></div>
```

#### Failed Example 3

The `aria-controls` attribute of this expanded `combobox` references a `popup_listbox` ID. This `id` exists, but in a different DOM tree as the `combobox`.

```html
<div id="aria-listbox">
	<label for="tag_combo">Tag</label>
	<input
		type="text"
		id="tag_combo"
		role="combobox"
		aria-expanded="true"
		aria-controls="popup_listbox"
		aria-activedescendant="selected_option"
	/>
</div>
<script>
	const ariaListbox = document.querySelector('#aria-listbox')
	const shadowRoot = ariaListbox.attachShadow({ mode: 'open' })
	shadowRoot.innerHTML = `
		<slot></slot>
		<ul role="listbox" id="popup_listbox">
			<li role="option">Zebra</li>
			<li role="option" id="selected_option">Zoom</li>
		</ul>
	`
</script>
```

### Inapplicable

#### Inapplicable Example 1

The `aria-controls` attribute is defined on a `combobox` which does not have an `aria-expanded` [attribute value][] of `true`.

```html
<label for="tag_combo">Tag</label>
<input type="text" id="tag_combo" role="combobox" aria-expanded="false" aria-controls="popup_listbox" />
```

#### Inapplicable Example 2

This `aria-controls` attribute is not defined on a [semantic][] `scrollbar` nor `combobox`.

```html
<button aria-controls="my-modal">Open the modal</button>
```

#### Inapplicable Example 3

There is no `aria-controls` attribute.

```html
<button>Open the modal</button>
```

[semantic]: #semantic-role 'Definition of Semantic Role'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[document tree]: https://dom.spec.whatwg.org/#document-trees 'DOM Definition of Document tree'
[shadow tree]: https://dom.spec.whatwg.org/#shadow-trees 'DOM Definition of Shadow tree'
[required by wai-aria]: https://www.w3.org/TR/wai-aria-1.2/#requiredState 'WAI-ARIA Required States and Properties'
[id reference list]: https://www.w3.org/TR/wai-aria-1.2/#valuetype_idref_list 'WAI-ARIA definition of ID Reference List'
[id reference]: https://www.w3.org/TR/wai-aria-1.2/#valuetype_idref 'WAI-ARIA definition of ID Reference'

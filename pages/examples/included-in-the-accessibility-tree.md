---
title: Examples of Included in the accessibility tree
---

These are examples of the [Included in the accessibility tree][] definition. The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

## Default inclusion

This `h3` element is included in the accessibility tree (by default, elements are included in the accessibility tree).

```html
<h3>ACT rules</h3>
```

## Removed with CSS display

This `h3` element is not included in the accessibility tree because it is hidden to everybody by the CSS property.

```html
<h3 style="display:none">ACT rules</h3>
```

## Removed with aria-hidden

This `h3` element is not included in the accessibility tree because it is explicitly removed by the `aria-hidden` attribute.

```html
<h3 aria-hidden="true">ACT rules</h3>
```

## Included but off screen

This `h3` element is positioned off screen, hence is not [visible][], but is nonetheless included in the accessibility tree.

```html
<h3 style="position: absolute; top:-9999em">ACT rules</h3>
```

## Removed but not ignored

Although this `h2` element with an `id` of "label" is not itself included in the accessibility tree, it still provides an [accessible name][] to the `h3` via the `aria-labelledby` attribute. Thus, it is still indirectly exposed to users of assistive technologies. Removing an element from the accessibility tree is not enough to remove all accessibility concerns from it since it can still be indirectly exposed.

```html
<h2 id="label" style="display:none">ACT rules</h2>
<h3 aria-labelledby="label">Accessibility Conformance Testing rules</h3>
```

## Removed but focusable

Although this `input` element is not included in the accessibility tree, it is still [focusable][], hence users of assistive technologies can still interact with it by sequential keyboard navigation. This may result in confusing situations for such users (and is in direct violation of [the fourth rule of ARIA (working draft)](https://www.w3.org/TR/using-aria/#fourth)).

```html
<span aria-hidden="true">
	<input type="text" name="fname" />
</span>
```

[accessible name]: /glossary/#accessible-name
[focusable]: /glossary/#focusable
[included in the accessibility tree]: /glossary/#included-in-the-accessibility-tree
[visible]: /glossary/#visible

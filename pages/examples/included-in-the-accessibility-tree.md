---
title: Examples of Included in the accessibility tree
---

These are examples of the [Included in the accessibility tree][] definition. The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

## Default inclusion

This `span` element is included in the accessibility tree (by default, elements are included in the accessibility tree).

```html
<span>ACT rules</span>
```

## Removed with CSS display

This `span` element is not included in the accessibility tree because it is hidden to everybody by the CSS property.

```html
<span style="display:none">ACT rules</span>
```

## Removed with aria-hidden

This `span` element is not included in the accessibility tree because it is explicitly removed by the `aria-hidden` attribute.

```html
<span aria-hidden="true">ACT rules</span>
```

## Included but off screen

This `span` element is positioned off screen, hence is not [visible][], but is nonetheless included in the accessibility tree.

```html
<span style="position: absolute; top:-9999em">ACT rules</span>
```

## Removed but not ignored

Although the `span` element with an `id` of "label" is not itself included in the accessibility tree, it still provides an [accessible name][] to the other `span`, via the `aria-labelledby` attribute. Thus, it is still indirectly exposed to users of assistive technologies. Removing an element from the accessibility tree is not enough to remove all accessibility concerns from it since it can still be indirectly exposed.

```html
<span id="label" style="display:none">ACT rules</span>
<span aria-labelledby="label">Accessibility Conformance Testing rules</span>
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

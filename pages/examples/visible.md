---
title: Examples of Visible
---

These are examples of the [visible][] definition. The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

## Default visibility

This `span` element is visible (by default, elements are visible).

```html
<span>Now you can see me!</span>
```

## Hidden with CSS visibility

This `span` element is not visible because of the CSS `visibility` property.

```html
<span style="visibility: hidden">I'm the invisible man</span>
```

## Hidden with CSS display

This `span` element is not visible because of the CSS `display` property.

```html
<span style="display: none">I'm the invisible man</span>
```

## Hidden with CSS position

This `span` element is not visible because it is positioned off-screen

```html
<span style="position: absolute; top: -9999px; left: -9999px;">Incredible how you can</span>
```

## Hidden due to a lack of content

This `span` element is not visible because it contains only whitespace and line breaks.

```html
<span>
	<br />
	&nbsp;
</span>
```

## Hidden due to matching colors

This `span` element is not visible because it has the exact same color as its background.

```html
<span style="color: #00F; background: #00F;">See right through me</span>
```

[visible]: /glossary/#visible

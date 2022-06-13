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

This `span` element is not visible because of the CSS `visibility` property.

```html
<span style="visibility: hidden">I'm the invisible man</span>
```

## Hidden with CSS display

This `span` element is not visible because of the CSS `display` property.

```html
<span style="display: none">I'm the invisible man</span>
```

## Hidden with CSS position

These `span` elements are not visible because they are positioned off-screen. Note that depending on device size and actual position of the `span` elements, they might be visible on some larger device or long pages.

```html
<span style="position: absolute; top: -9999px; left: -9999px;">Incredible how you can</span>
```

```html
<span style="position: absolute; top: -9999px">See right through me</span>
```

```html
<span style="position: absolute; left: -9999px;">When you hear a sound</span>
```

## Hidden due to a lack of content

This `span` element is not visible because it contains only whitespace and line breaks.

```html
<span>
	<br />
	&nbsp;
</span>
```

This `span` element is not visible because its text content has size 0.

```html
<span style="font-size: 0px">That you just can't place</span>
```

## Hidden due to matching colors

This `span` element is not visible because it has the exact same color as its background.

```html
<span style="color: #00F; background: #00F;">Feel something move</span>
```

## Hidden due to transparency

This `span` element is not visible because it has no opacity.

```html
<span style="opacity: 0">That you just can't trace</span>
```

This `span` element is not visible because it's text is fully transparent.

```html
<span style="color: transparent">When something sits</span>
```

## Hidden due to clipping

This `span` element is not visible because it's size is reduced to zero, and any overflow is hidden.

```html
<span style="height: 0px; width: 0px; overflow: hidden">On the end of your bed</span>
```

This `span` element is not visible because its content is fully indented out of it, and any overflow is hidden.

```html
<span style="text-indent: -200%; overflow: hidden">Don't turn around</span>
```

This `span` element is not visible because it is clipped to zero size.

```html
<span style="clip-path: inset(50%)">When you hear me tread</span>
```

## Hidden due to transformation

This `div` element is not visible because it is scaled to 0%.

```html
<div style="transform: scale(0%)">I'm the invisible man</div>
```

This `div` element is not visible because it is translated out of screen.

```html
<div style="transform: translate(-100%)">I'm the invisible man</div>
```

[visible]: /glossary/#visible

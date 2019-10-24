---
title: Visible
key: visible
---

Content perceivable through sight.

Content is considered visible if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

#### Examples

This `span` element is visible (by default, elements are visible).

```html
<span>Now you can see me!</span>
```

This `span` element is not visible because of the CSS `visibility` property.

```html
<span style="visibility: hidden">I'm the invisible man!</span>
```

This `span` element is not visible because of the CSS `display` property.

```html
<span style="display: none">I'm the invisible man!</span>
```

This `span` element is not visible because it is positioned off-screen

```html
<span style="position: absolute; top: -9999px; left: -9999px;">I'm the invisible man!</span>
```

This `span` element is not visible because it contains only whitespace and line breaks.

```html
<span>
	<br />
	&nbsp;
</span>
```

This `span` element is not visible because it has the exact same color as its background.

```html
<span style="color: #00F; background: #00F;">I'm the invisible man!</span>
```

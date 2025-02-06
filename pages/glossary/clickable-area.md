---
title: Clickable area
key: clickable-area
unambiguous: true
objective: false
input_aspects:
  - CSS styling
  - DOM tree
---

The _directly clickable area_ of an element is the set of all viewport coordinates for which the element is the [topmost event target][]

The _clickable area_ of an element is the union of its _directly clickable area_ and that of its [implicit][implicit label] or [explicit label][]. Clickable areas may contain several disconnected parts.

An element has a <dfn id="clickable-area:empty">totally empty clickable area</dfn> if its clickable area is empty and cannot be made non-empty through scrolling.

#### Examples of totally empty clickable areas

This button has a totally empty clickable area because it is moved off-screen.

```html
<style>
	#target {
		width: 44px;
		height: 44px;
		border-radius: 0;
		position: absolute;
		left: -9999px;
	}
</style>
<button id="target" onclick="alert('hello')">Hello</button>
```

This `button` does not have a totally empty clickable area; its clickable area can be made non-empty through vertical scrolling.

```html
<style>
	#target {
		width: 35px;
		height: 35px;
		border-radius: 0;
		position: absolute;
		top: 200vh;
	}
</style>
<button id="target" onclick="alert('hello')">Hi</button>
```

[explicit label]: #programmatic-label:explicit 'Definition of Explicit Label'
[implicit label]: #programmatic-label:implicit 'Definition of Implicit Label'
[topmost event target]: https://w3c.github.io/uievents/#topmost-event-target 'CSS definition of Topmost Event Target'

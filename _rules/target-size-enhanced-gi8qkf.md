---
id: gi8qkf
name:
rule_type: atomic
description: |
  This rule checks that elements that can receive pointer events have a size of at least 44×44 pixels.
accessibility_requirements:
  wcag21:2.5.5: # Target size (enhanced) (AAA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag22:2.5.8: # Target Size (Minimum)
    secondary: true
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Jean-Yves Moyen
    - Wilco Fiers
  test_assets: Map Image by <a href="https://www.freepik.com/free-vector/black-white-town-navigation-map_5663353.htm#query=map%20background&position=27&from_view=keyword&track=ais">Freepik</a>
---

## Applicability

This rule applies to any [HTML element][namespaced element] which [can be targeted by a pointer event][].

Exception: not for `area` (due to weird shapes + often essential suze).
Exception: not if a descendant is focusable (hard to define the clickable area).
Exception: the target is a [User Agent controlled component][].
Exception: the target is a [shape-shifted element][] (weird shape)

> comment: This is for the "User Agent Control" exception. The Understanding doc mentions days in a calendar widget. I somewhat intend to have this as a list of elements (or their descendants) which are known to correspond (e.g. `<input type="date">`) as it is fairly flexible and easy to define. This would, however let out cases where these components are re-sized by the author. But this is only false negatives, so I guess it's OK.

> comment: Actually, "UA control" definition might be "one of these elements (`button`, …) (widgets elements); and none of these CSS property has a cascaded value with Author origin (`width`, `height`, …)"

## Expectation

For each test target, at least one of the following is true:

- the target element has a [clickable area][] width and height of at least 44 CSS pixels; or
- though scrolling, the element can be brought into viewport with a [clickable area][] width and height of at least 44 CSS pixels; or
- the element has an empty [clickable area][], and its [clickable area][] cannot be made non-empty through scrolling; or
  > Note: this is mostly for totally covered or off-screen elements. This should probably rather be handled in the Applicabilty and make these Inapplicable, but I'm not sure it can be done with the current definition…
- the target is part of [inline text][]; or
  > comment: I feel this is going to be difficult to define objectively, so it is better in Expectation for now. #1010 has some work in that direction that we can probably reuse: https://github.com/act-rules/act-rules.github.io/pull/1010/files#diff-32079a0602a5a909b242b4e0961e7c5ddd6b6f5c9906b216d5bf21cf2ba13a77R28-R29 > https://github.com/act-rules/act-rules.github.io/blob/4b64bba6cb77a8d4dc0649c83c55372f513d979f/pages/glossary/rendered-on-a-line.md
- The size is [essential target size][]
  > comment: this is always a bit tricky. I guess we can do as in #1916 and list cases that are considered essential (list can grow).
- There is an [instrument][] to achieve an equivalent goal, with a 44×44px [clickable area][].

## Assumptions

- This rule assumes that [focusable][] `widget` are effectively clickable.

## Accessibility Support

Hit testing isn't properly defined, and this has been an [issue in the CSS specification](https://github.com/w3c/csswg-drafts/issues/2325) for years. Therefore, different User Agents may perform it differently, resulting in different [clickable areas][clickable area] for the same element.

## Background

### Bibliography

- [Understanding Success Criterion](#)
- [Technique](#)

## Test Cases

> **Note:** Several examples draw borders around some of the elements or texts. This is purely for aesthetic purpose and to clearly show the [clickable areas][clickable area] that are not obvious. These borders are solid green when showing good cases, or relevant areas; and dashed red when showing bad cases, or irrelevant areas.

### Passed

#### Passed Example

This `link` has a [clickable area][] of approximately 210×55 pixels.

```html
<style>
	#target {
		font-size: 50px;
	}
</style>
<a id="target" href="https://www.w3.org/WAI/standards-guidelines/act/rules/">ACT rules</a>
```

#### Passed Example

This button has a [clickable area][] of exactly 44×44 pixels.

```html
<style>
	#target {
		width: 44px;
		height: 44px;
		border-radius: 0;
	}
</style>
<button id="target" onclick="alert('hello')">Hello</button>
```

#### Passed Example

This `input` element, combined with its [implicit label][] and its padding, has a [clickable area][] containing a rectangle of approximately 81×48px. Note that this rectangle has to intersect both the `input` element itself, and the text of the label (within the solid green border), as none of the individual components are enough.

```html
<head>
	<title>Passed Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/highlight.css" />
	<script src="/test-assets/target-size/highlight-rect.js"></script>
</head>
<label id="label" style="padding: 6px 0;" class="highlightable">
	Given Name<br />
	<input id="input" />
</label>
<script>
	highlightRect(document.getElementById('label').firstChild)
</script>
```

#### Passed Example

This `input` element, combined with its [explicit label][] and its padding, has a [clickable area][] containing a rectangle of approximately 81×45px. Note that this rectangle has to intersect both the `input` element itself, and the text of the label (within the solid green border), as none of the individual components are enough.

```html
<head>
	<title>Passed Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/highlight.css" />
	<script src="/test-assets/target-size/highlight-rect.js"></script>
</head>
<label for="input" id="label" style="padding: 6px 0;" class="highlightable"> Given Name<br /> </label>
<input id="input" />
<script>
	highlightRect(document.getElementById('label').firstChild)
</script>
```

#### Passed Example

This button has a clickable area of approximately 212×54px due to the overflowing text being clickable. The `div` element is only here to visually display the clickable area of the text.

```html
<head>
	<title>Passed Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/highlight.css" />
	<style>
		#target {
			width: 20px;
			font-size: 50px;
			overflow: visible;
			white-space: nowrap;
		}
	</style>
	<script src="/test-assets/target-size/highlight-rect.js"></script>
</head>
<body>
	<button id="target" class="highlightable" onclick="alert('hello')">
		Say Hello
	</button>

	<script>
		highlightRect(document.getElementById('target').firstChild)
	</script>
</body>
```

#### Passed Example

This button, together with its padding and border, has a [clickable area][] of more than 44×44px. The solid green border shows the [clickable area][] while the dashed red one shows the inner text (without sizing nor padding).

> **Comment:** The size here should be 45×45 (35 + 4*2 (padding) + 1*2 (borders)). However, when inspecting the element with Chrome, I only get a size of 44.87px. That's why I put the dimensions at 35px instead of the theoretical minimum of 34px.

```html
<head>
	<title>Passed Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/highlight.css" />
	<style>
		#target {
			width: 35px;
			height: 35px;
			border-radius: 0;
			padding: 4px;
		}
	</style>
	<script src="/test-assets/target-size/highlight-rect.js"></script>
</head>
<body>
	<div role="button" id="target" class="good highlightable" onclick="alert('hello')">Hi</div>
	<script>
		highlightRect(document.getElementById('target').firstChild, ['bad'])
	</script>
</body>
```

#### Passed Example

These links are part [inlined text][].

```html
<p style="font-size: 15px">
	The size of the <a href="https://www.w3.org/TR/WCAG21/#dfn-target">target</a> for <a href="https://www.w3.org/TR/WCAG21/#dfn-pointer-inputs">pointer inputs</a> is at least 44 by 44 <a href="https://www.w3.org/TR/WCAG21/#dfn-css-pixels">CSS pixels.
</p>
```

> **Comment:** The `font-size` is needed to avoid making them User Agent Controlled…

#### Passed Example

The `#small` button has a [clickable area][] of only 35×35px, but there is an [instrument][] to achieve the same function with a 44×44px [clickable area][] (namely, the `#large` button).

```html
<style>
	#small {
		width: 35px;
		height: 35px;
		border-radius: 0;
	}
	#large {
		width: 44px;
		height: 44px;
		border-radius: 0;
	}
</style>
<button id="small" onclick="alert('Hello')">Hi</button>
<button id="large" onclick="alert('Hello')">Hello</button>
```

#### Passed Example

This button has a [clickable area][] containing a 44×44px rectangle. Even though it is partially obscured by the dashed red `div`, its remaining [clickable area][] contains a 44×44px rectangle delimited by prolonging the solid green lines.

```html
<head>
	<title>Passed Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/highlight.css" />
	<style>
		.cover {
			position: absolute;
			z-index: 6;
			top: 0;
			left: 55px;
			height: 100px;
			width: 100px;
		}
		#target {
			height: 50px;
			border-radius: 0;
		}
		.hlines {
			top: 10px;
			left: -10px;
			width: 100px;
			height: 44px;
			border-left: none;
			border-right: none;
		}
		.vlines {
			top: -10px;
			left: 9px;
			width: 44px;
			height: 100px;
			border-top: none;
			border-bottom: none;
		}
	</style>
</head>
<button id="target" class="highlightable" onclick="alert('Hello')">
	Say Hello
</button>

<div class="cover bad"></div>
<div class="hlines good highlight"></div>
<div class="vlines good highlight"></div>
```

#### Passed Example

This rotated button has a [clickable area][] of exactly 44×44px.

```html
<style>
	#target {
		width: 44px;
		height: 44px;
		border-radius: 0;
		rotate: 45deg;
	}
</style>
<button id="target" onclick="alert('Hello')">Hello</button>
```

> **Comment:** I'm not sure this is actually passing (or whether the target needs to be aligned with the axis). This might end up being a nightmare to check (because the bounding box, or the `getBoundingClientRect` is 61×61px). Do we want the rule to somehow exclude this as "weird shape"?

### Passed Example

This button has a [clickable area][] of roughly 73×50px. The `div` element with a dashed red border does not obscure it because of its `pointer-events: none` CSS property that let the clicks go through.

```html
<head>
	<title>Passed Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/highlight.css" />
	<style>
		.cover {
			top: 0;
			height: 60px;
			width: 500px;
			pointer-events: none;
		}
	</style>
</head>
<button onclick="alert('hello')" style="height: 50px">
	Say Hello
</button>

<div class="cover bad highlight"></div>
```

#### Passed Example

The pin (red circle) on this map has [essential size][] because it is important to pinpoint the exact location.

```html
<style>
	.map {
		background-image: url('/test-assets/target-size/map-background.jpg');
		width: 1250px;
		height: 1250px;
	}
	.dot {
		height: 15px;
		width: 15px;
		background-color: red;
		border-radius: 50%;
		display: inline-block;
	}
</style>

Location of ACT rules headquarters:
<div class="map"></div>
<a
	class="dot"
	style="position: absolute; top: 597px; left: 818px"
	href="https://www.w3.org/WAI/standards-guidelines/act/rules/"
></a>
```

#### Passed Example

This button has a 50×50px [clickable area][]. The `div` with a dashed red border is not obscuring it because it can be scrolled out of the way. The solid green lines hint at a 44×44px area inside the button.

```html
<head>
	<title>Passed Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/highlight.css" />
	<style>
		.cover {
			position: relative;
			left: 30px;
			height: 100px;
			width: 100px;
			pointer-events: all;
		}
		#target {
			height: 50px;
			border-radius: 0;
		}
		.hlines {
			top: 10px;
			left: -10px;
			width: 100px;
			height: 44px;
			border-left: none;
			border-right: none;
		}
		.vlines {
			top: -10px;
			left: 9px;
			width: 44px;
			height: 100px;
			border-top: none;
			border-bottom: none;
		}
		.scroller {
			z-index: 6;
			position: absolute;
			top: 0;
			overflow-y: scroll;
			height: 80px;
			pointer-events: none;
		}
		.spacer {
			height: 100px;
		}
	</style>
</head>

<div class="scroller">
	<div class="cover bad"></div>
	<div class="spacer"></div>
</div>

<button id="target" class="highlightable" onclick="alert('Hello')">
	Say Hello
</button>
<div class="hlines good highlight"></div>
<div class="vlines good highlight"></div>
```

### Failed

#### Failed Example

This `button` has a [clickable area][] of only 35×35 pixels.

```html
<style>
	#target {
		width: 35px;
		height: 35px;
		border-radius: 0;
	}
</style>
<button id="target" onclick="alert('hello')">Hi</button>
```

#### Failed Example

This link only has a [clickable area][] of approximately 66×18 pixels, as shown by its border.

```html
<head>
	<title>Passed Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/highlight.css" />
	<style>
		#target {
			line-height: 50px;
		}
	</style>
</head>
<body>
	<a id="target" class="bad" href="https://www.w3.org/WAI/standards-guidelines/act/rules/">ACT rules</a>
</body>
```

#### Failed Example

The [clickable area][] of this button only contains an approximately 35×35 pixels rectangle, due to its rounded corners.

```html
<style>
	#target {
		width: 44px;
		height: 44px;
		border-radius: 30%;
	}
</style>
<button id="target" onclick="alert('hello')">Hello</button>
```

#### Failed Example

This custom button has a [clickable area][] of approximately 18×20px, as shown by its dashed red border. Since it is not a native `button` element, it is not a [User Agent Controlled][] element.

```html
<head>
	<title>Failed Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/highlight.css" />
</head>
<span class="highlight bad" role="button" onclick="alert('Hello')">Hi</span>
```

#### Failed Example

This input, together with its [implicit label][] and its padding has a [clickable area][] whose height is below 41px.

```html
<label id="label" style="padding: 2px 0;">
	Given Name<br />
	<input id="input" />
</label>
```

#### Failed Example

The `#small` button has a [clickable area][] of only 35×35px. The `#large` button has a [clickable area][] of 44×44px, but it does not achieve the same objective.

```html
<style>
	#small {
		width: 35px;
		height: 35px;
		border-radius: 0;
	}
	#large {
		width: 44px;
		height: 44px;
		border-radius: 0;
	}
</style>
<button id="small" onclick="alert('Hello')">Hi</button>
<button id="large" onclick="alert('Good-bye')">Bye</button>
```

#### Failed Example

This rotated button has a [clickable area][] of exactly 40×40px.

```html
<style>
	#target {
		width: 40px;
		height: 40px;
		border-radius: 0;
		rotate: 45deg;
	}
</style>
<button id="target" onclick="alert('Hello')">Hello</button>
```

> **Comment:** This might end up being a nightmare to check (because the bounding box, or the `getBoundingClientRect` is 56×56px). Do we want the rule to somehow exclude this as "weird shape"?

#### Failed Example

This button only has a [clickable area][] of approximately 20×45px, because it is obscured by the `div` with a dashed red border. The solid green lines hint at how a 44×44px area would fit inside the button, but not inside the non-obscured part.

```html
<head>
	<title>Failed Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/highlight.css" />
	<style>
		.cover {
			position: absolute;
			z-index: 6;
			top: 0;
			left: 30px;
			height: 100px;
			width: 100px;
		}
		#target {
			height: 50px;
			border-radius: 0;
		}
		.hlines {
			top: 10px;
			left: -10px;
			width: 100px;
			height: 44px;
			border-left: none;
			border-right: none;
		}
		.vlines {
			top: -10px;
			left: 9px;
			width: 44px;
			height: 100px;
			border-top: none;
			border-bottom: none;
		}
	</style>
</head>
<button id="target" class="highlightable" onclick="alert('Hello')">
	Say Hello
</button>

<div class="cover bad"></div>
<div class="hlines good highlight"></div>
<div class="vlines good highlight"></div>
```

#### Failed Example

This button only has a [clickable area][] of approximately 20×45px, because it is obscured by the `div` with a dashed red border. Even though the `div` is scrollable, it is not scrollable fully out of the way and always obscures the button. The solid green lines hint at how a 44×44px area would fit inside the button, but not inside the never obscured part.

```html
<head>
	<title>Failed Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/highlight.css" />
	<style>
		.cover {
			position: relative;
			left: 30px;
			height: 100px;
			width: 100px;
			pointer-events: all;
		}
		#target {
			height: 50px;
			border-radius: 0;
		}
		.hlines {
			top: 10px;
			left: -10px;
			width: 100px;
			height: 44px;
			border-left: none;
			border-right: none;
		}
		.vlines {
			top: -10px;
			left: 9px;
			width: 44px;
			height: 100px;
			border-top: none;
			border-bottom: none;
		}
		.scroller {
			z-index: 6;
			position: absolute;
			top: 0;
			overflow-y: scroll;
			height: 80px;
			pointer-events: none;
		}
		.spacer {
			height: 30px;
		}
	</style>
</head>

<div class="scroller">
	<div class="cover bad"></div>
	<div class="spacer"></div>
</div>

<button id="target" class="highlightable" onclick="alert('Hello')">
	Say Hello
</button>
<div class="hlines good highlight"></div>
<div class="vlines good highlight"></div>
```

#### Failed Example

This button has a [clickable area][] (in light blue) of only 40×40px due to being clipped by the `clip-path` property.

```html
<head>
	<title>Failed Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/highlight.css" />
	<style>
		#target {
			height: 50px;
			width: 80px;
			text-align: center;
			clip-path: polygon(20px 0px, 20px 40px, 60px 40px, 60px 0px);
			background-color: #0074d9;
		}
	</style>
</head>
<div id="target" role="button" onclick="alert('Hello')">
	Hello
</div>
```

> **Comment:** This is also going to be annoying to test. The bounding box / `getBoundingClientRect` is at 80×50px. And `clip-path` could have virtually any shape, making detecting a 44×44px rectangle inside very tricky (even more if the rectangles are allowed to be rotated…)

- Link has insufficient size
- This radio button with insufficient size has its size modified by the author

### Inapplicable

#### Inapplicable Example

These `input` elements and `button` are `disabled`.

```html
<fieldset disabled>
	<label>First name <input /></label><br />
	<label>Last name <input /></label><br />
	<button>submit</button>
</fieldset>
```

#### Inapplicable Example

This checkbox does not have its size adjusted by the author

```html
<p id="accept">
	<input aria-labelledby="accept" type="checkbox" />
	I agree with the terms and conditions.
</p>
```

#### Inapplicable Example

This checkbox cannot be [targeted by a pointer event][] because it is hidden. It is replaced with an on-screen clickable SVG.

```html

```

#### Inapplicable Example

This checkbox cannot be [targeted by a pointer event][] because it is obscured by the modal.

```html

```

#### Inapplicable Example

This button cannot be [targeted by a pointer event][] because it is entirely obscured by the `div` element with a dashed red border.

```html
<head>
	<title>Inapplicable Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/highlight.css" />
	<style>
		.cover {
			top: 0;
			height: 50px;
			width: 500px;
		}
	</style>
</head>
<button onclick="alert('hello')">
	Say Hello
</button>

<div class="cover bad highlight"></div>
```

#### Inapplicable Example

This button has a [clickable area][] a bit below 29×22px (due to its rounded corners), but it is a [User Agent Controlled component][].

```html
<button onclick="alert('Hello')">Hi</button>
```

#### Inapplicable Example

This input and its [programmatic label][] is a [User Agent Controlled component][]. The height of its [clickable area][] is only 37px.

```html
<label id="label">
	Given Name<br />
	<input id="input" />
</label>
```

[can be targeted by a pointer event]: #can-be-targeted-by-pointer-event 'Definition of Can be Targeted by a Pointer Event'
[clickable area]: #clickable-area 'Definition of Cliclkable Area'
[essential target size]: #essential-target-size ' Definition of Essential Target Size'
[explicit label]: #explicit-label 'Definition of Explicit Label'
[focusable]: #focusable 'Definition of Focusable'
[implicit label]: #implicit-label 'Definition of Implicit Label'
[inheriting semantic]: #inheriting-semantic 'Definition of Inheriting Semantic Role'
[inline text]: #inline-text 'Definition of Inline Text'
[instrument]: #instrument 'Definition of Instrument'
[namespaced element]: #namespaced-element 'Definition of Namespaced Element'
[programmatic label]: #programmatic-abel 'Definition of Programmatic Label'
[targeted by a pointer event]: #can-be-targeted-by-pointer-event 'Definition of Can be Targeted by a Pointer Event'
[user agent controlled component]: #ui-controlled-component 'Definition of UI Controlled Component'

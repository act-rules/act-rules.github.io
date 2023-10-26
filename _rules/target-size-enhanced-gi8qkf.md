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
---

## Applicability

This rule applies ta any [HTML element][namespaced element] for which all the following are true:

- the element is an [inheriting semantic][] `widget`; and
  > comment: role may be incorrectly set.
- the element [can be targeted by a pointer event][].

Exception: not for `area` (due to weird shapes).
Exception: not if a descendant is focusable (hard to define the clickable area).
Exception: the target is a [UI controlled component][].

> comment: This is for the "User Agent Control" exception. The Understanding doc mentions days in a calendar widget. I somewhat intend to have this as a list of elements (or their descendants) which are known to correspond (e.g. `<input type="date">`) as it is fairly flexible and easy to define. This would, however let out cases where these components are re-sized by the author. But this is only false negatives, so I guess it's OK.

> comment: Actually, "UA control" definition might be "one of these elements (`button`, …) (widgets elements); and none of these CSS property has a cascaded value with Author origin (`width`, `height`, …)"

## Expectation

For each test target, at least one of the following is true:

- the target element has a [clickable area][] width and height of at least 44 CSS pixels; or
- the target is part of [inline text][]; or
  > comment: I feel this is going to be difficult to define objectively, so it is better in Expectation for now. #1010 has some work in that direction that we can probably reuse: https://github.com/act-rules/act-rules.github.io/pull/1010/files#diff-32079a0602a5a909b242b4e0961e7c5ddd6b6f5c9906b216d5bf21cf2ba13a77R28-R29 > https://github.com/act-rules/act-rules.github.io/blob/4b64bba6cb77a8d4dc0649c83c55372f513d979f/pages/glossary/rendered-on-a-line.md
- The size is [essential target size][]
  > comment: this is always a bit tricky. I guess we can do as in #1916 and list cases that are considered essential (list can grow).
- There is an [instrument][] to achieve an equivalent goal, with a 44×44px [clickable area][].
  > comment: I think we can go in line of "there is no [instrument][] to achieve the same goal". That does leave quite a lot of fluffyness around the goal (which should normally be unambiguosly defined), but that is maybe OK for an Assumption?

## Assumptions

## Accessibility Support

## Background

### Bibliography

- [Understanding Success Criterion](#)
- [Technique](#)

## Test Cases

> **Note:** Several examples draw borders around some of the elements or texts. This is purely for aesthetic purpose and to clearly show the [clickable areas][clickable area] that are not obvious. These borders are solid green when showing good cases, or relevant areas; and dashed red when showing bad cases, or irrelevant areas.

### Passed

#### Passed Example 1

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

#### Passed Example 2

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

#### Passed Example 2

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

> **Comment:** The size here should be 45×45 (35 + 4*2 (padding) + 1*2 (borders)). However, when inspecting an element with Chrome, I only get a size of 44.87px. That's why I put the dimensions at 35px instead of the theoretical minimum of 34px.

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
	<title>Inapplicable Example</title>
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

> **Comment:** I'm not sure this is actually passing (or whether the target needs to be aligned with the axis). This might end up being a nightmare to check (because the bounding box, or the`getBoundingClientRect` is 61×61px). Do we want the rule to somehow exclude this as "weird shape"?

#### Passed Example

These pins on the map have [essential size][]

> **Comment:** This example is going to be a bit annoying to write from scratch.

#### Passed Example

TODO: obscured by a scrollable element.

### Failed

#### Failed Example 1

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

> **Comment:** This might end up being a nightmare to check (because the bounding box, or the`getBoundingClientRect` is 56×56px). Do we want the rule to somehow exclude this as "weird shape"?

#### Failed Example

This button only has a [clickable area][] of approximately 20×45px, because it is obscured by the `div` with a dashed red border. The solid green lines hint at how a 44×44px area would fit inside the button, but not inside the non-obscured part.

```html
<head>
	<title>Inapplicable Example</title>
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

This button has a [clickable area][] (in light blue) of only 40×40px due to being clipped by the `clip-path` property.

```html
<head>
	<title>Inapplicable Example</title>
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

#### Inapplicable Example 4

This checkbox cannot be [targeted by a click event][] because it is hidden. It is replaced with an on-screen clickable SVG.

```html

```

#### Inapplicable Example 5

This checkbox cannot be [targeted by a click event][] because it is obscured by the modal.

```html

```

#### Inapplicable Example

This button cannot be [targeted by a click event][] because it is entirely obscured by the `div` element with a dashed red border.

```html
<head>
  <title>Inapplicable Example</title>
  <link rel="stylesheet" href="/test-assets/target-size/highlight.css"
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

This button has a [clickable area][] a bit below 29×22px (due to its rounded corners), but it is a [User Agent Controlled][] element.

```html
<button onclick="alert('Hello')">Hi</button>
```

#### Inapplicable Example

This input and its [programmatic label][] is a [User Agent Controlled][] element. The height of its [clickable area][] is only 37px.

```html
<label id="label">
	Given Name<br />
	<input id="input" />
</label>
```

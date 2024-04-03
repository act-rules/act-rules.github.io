---
id: 5awcwe
name: Interactive component has minimum size
rule_type: composite
description: |
  This rule checks that elements that can receive pointer events have a size of at least 24×24 pixels, have enough spacing, are inline, are user agent controlled, or have essential size.
accessibility_requirements:
  wcag21:2.5.5: # Target size (enhanced) (AAA)
    secondary: 'This success criterion is **more strict** than this rule. This is because this criterion has a larger size requirement. Some of the passed examples do not satisfy this success criterion.'
  wcag22:2.5.8: # Target Size (Minimum) (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - 8lzn42
  - dppn1b
  - kj4tr0
  - rvh4wa
  - ssehdh
  - vcup8d
  - yb5y5l
acknowledgments:
  authors:
    - Jean-Yves Moyen
  test_assets: Map Image by <a href="https://www.freepik.com/free-vector/black-white-town-navigation-map_5663353.htm">Freepik</a>
---

## Applicability

This rule applies to any [HTML element][namespaced element] which [can be targeted by a pointer event][].

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [Interactive component has strict minimum size][target size minimum]; or
- [Interactive component has no clickable area][target size empty]; or
- [Interactive component has minimum spacing][target size spacing]; or
- [Interactive component is inline][target size inline]; or
- [Interactive component has size controlled by User Agent][target size user agent]; or
- [Interactive component has essential size][target size essential]; or
- [Interactive component has equivalent control with minimum size][target size equivalent minimum].

## Assumptions

- This rule assumes that [focusable][] `widget` are effectively clickable. If a widget is [focusable][] without being clickable, it may fail this rule while [Success Criterion 2.5.5 Target Size (enhanced)][sc255] is satisfied.

## Accessibility Support

Hit testing isn't properly defined, and this has been an [issue in the CSS specification](https://github.com/w3c/csswg-drafts/issues/2325) for years. Therefore, different User Agents may perform it differently, resulting in different [clickable areas][clickable area] for the same element. As of February 2024, the ACT rules Community Group is not aware of actual cases resulting in significantly different [clickable areas][clickable area].

## Background

While the rule, and [Success Criterion 2.5.8 Target Size (minimum)][sc258], apply to targets of any shape, the test cases mostly focus on targets whose [clickable area][] is itself an [horizontal rectangle][]. This acknowledges the fact that the [border box][] of an element can easily be queried by automated tools (e.g., through the `getBoundingClientRect` function), and therefore it is expected that most automated tools will perform better on such elements. For elements with "weird" clickable shape, including `area` elements, nested targets, or elements that have been rotated or clipped, the actual [clickable area][] is much harder to determine and may be much smaller than the [border box][]. These elements could fail the rule while their [border box][] contain a large enough [horizontal rectangle][]. In order to allow automated tools to have a consistent implementation of this rule, it does not contain such test cases, notably all Failed test cases have a [border box][] which is too small.

When the target passes [Interactive component has strict minimum size][target size minimum] and has a [clickable area][] which is nearly an [horizontal rectangle][], it also passes [Interactive component has minimum spacing][target size spacing] (because any 24px square contains a 24px diameter circle). However, when their shape is greatly different, notable concave, [Interactive component has minimum spacing][target size spacing] forces the center of the circle, possibly not in the center of the square, and thus may fail. Since test cases are mostly restricted to [clickable areas][clickable area] that are [horizontal rectangles][horizontal rectangle], Passed test cases that satisfy the [Interactive component has strict minimum size][target size minimum] are also expected to satisfy the [Interactive component has minimum spacing][target size spacing].

### Bibliography

- [Understanding Success Criterion 2.5.8: Target Size (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

## Test Cases

> **Note:** Several examples draw borders around some of the elements or texts. This is purely for aesthetic purpose and to clearly show the [clickable areas][clickable area] that are not obvious. These borders are solid green when showing good cases, or relevant areas; and dashed red when showing bad cases, or irrelevant areas.

> **Note:** Several examples illustrate overlapping and partially obscured content with fully transparent `div` (with a dashed red border), in order to still show the underlying target. This often results in very "artificial" examples where in real page the overlapping element would not be transparent and would actually hide the target.

> **Note:** Several test cases have `.placeholder` buttons whose only role is to ensure that [Interactive component has minimum spacing][target size spacing] fails for the true targets. These `.placeholder` buttons pass [Interactive component has strict minimum size][target size minimum]. These `.placeholder` buttons are irrelevant to the examples and never mentioned in the descriptions.

> **Note:** Several test cases show the circle relevant for [Interactive component has minimum spacing][target size spacing]. These circles are solid green when that rule passes, and dashed red when it fails. The circles are not part of the actual test cases, and are only shown to help understand spacing.

### Passed

#### Passed Example 1

This `link` has a [clickable area][] of approximately 91×24 pixels and thus passes [Interactive component has strict minimum size][target size minimum].

```html
<style>
	#target {
		font-size: 22px;
	}
</style>
<a id="target" href="https://www.w3.org/WAI/standards-guidelines/act/rules/">ACT rules</a>
```

#### Passed Example 2

This button has a [clickable area][] of exactly 24×24 pixels and thus passes [Interactive component has strict minimum size][target size minimum].

```html
<style>
	#target {
		width: 24px;
		height: 24px;
		border-radius: 0;
	}
</style>
<button id="target" onclick="alert('hello')">Hello</button>
```

#### Passed Example 3

This `input` element, combined with its [implicit label][] and its padding, has a [clickable area][] containing a rectangle of approximately 81×48px and thus passes [Interactive component has strict minimum size][target size minimum]. Note that this rectangle has to intersect both the `input` element itself, and the text of the label (within the solid green border), as none of the individual components are enough.

```html
<head>
	<title>Passed Example 3</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-rect.js"></script>
</head>
<body>
	<label id="label" style="padding: 6px 0;" class="highlightable">
		Given Name<br />
		<input id="input" style="width: 200px" />
	</label>
	<script>
		highlightRect(document.getElementById('label').firstChild)
	</script>
</body>
```

#### Passed Example 4

This `input` element, combined with its [explicit label][] and its padding, has a [clickable area][] containing a rectangle of approximately 50×44px and thus passes [Interactive component has strict minimum size][target size minimum]. Note that this rectangle has to intersect both the `input` element itself, and the text of the label (within the solid green border), as none of the individual components are enough.

```html
<head>
	<title>Passed Example 4</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-rect.js"></script>
</head>
<body>
	<label for="input" id="label" style="padding: 6px 0;" font-size: 10px class="highlightable"> Given Name<br /> </label>
	<input id="input" style="width: 200px" />
	<script>
		highlightRect(document.getElementById('label').firstChild)
	</script>
</body>
```

#### Passed Example 5

This button has a clickable area of approximately 93×24px due to the overflowing text being clickable, and thus passes [Interactive component has strict minimum size][target size minimum]. The `div` element is only here to visually display the clickable area of the text.

```html
<head>
	<title>Passed Example 5</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<style>
		#target {
			width: 20px;
			font-size: 22px;
			overflow: visible;
			white-space: nowrap;
			border-radius: 0;
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

#### Passed Example 6

This button, together with its padding and border, has a [clickable area][] of more than 24×24px and thus passes [Interactive component has strict minimum size][target size minimum]. The solid green border shows the [clickable area][] while the dashed red one shows the inner text (without sizing nor padding).

```html
<head>
	<title>Passed Example 6</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<style>
		#target {
			width: 15px;
			height: 15px;
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

#### Passed Example 7

Both buttons have a [clickable area][] with [spacing][] of at least 24px to the other button's [clickable area][] and thus pass [Interactive component has minimum spacing][target size spacing].

```html
<head>
	<title>Passed Example 7</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-circle.js"></script>
	<style>
		button {
			background-color: transparent;
			border: 1px solid black;
		}
	</style>
</head>
<body>
	<button id="button1" class="highlightable" onclick="alert('Hello')">
		Hello world
	</button>
	<button id="button2" class="highlightable" onclick="alert('Good bye')">
		Farewell
	</button>
	<script>
		highlightCircle(document.getElementById('button1'))
		highlightCircle(document.getElementById('button2'))
	</script>
</body>
```

#### Passed Example 8

Since there is only one test target, it doesn't require to be spaced from anything else and automatically passes [Interactive component has minimum spacing][target size spacing].

```html
<head>
	<title>Passed Example 8</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-circle.js"></script>
	<style>
		button {
			background-color: transparent;
			border: 1px solid black;
		}
	</style>
</head>
<body>
	<button id="button" class="highlightable" onclick="alert('Hello')">
		Hello world
	</button>
	<script>
		highlightCircle(document.getElementById('button'))
	</script>
</body>
```

#### Passed Example 9

These links are [rendered on a line][] and thus pass [Interactive component is inline][target size inline].

```html
<p>
	The size of the <a href="https://www.w3.org/TR/WCAG21/#dfn-target">target</a> for
	<a href="https://www.w3.org/TR/WCAG21/#dfn-pointer-inputs">pointer inputs</a> is at least 44 by 44
	<a href="https://www.w3.org/TR/WCAG21/#dfn-css-pixels">CSS pixels</a>.
</p>
```

#### Passed Example 10

This checkbox is an [User Agent controlled component][] and thus passes [Interactive component has size controlled by User Agent][target size user agent].

```html
<head>
	<title>Passed Example 10</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-circle.js"></script>
</head>
<body>
	<p id="accept">
		<input aria-labelledby="accept" type="checkbox" />
		I agree with the terms and conditions.
	</p>

	<button
		class="placeholder"
		style="top:27px; left: 8px; width: 24px; height: 24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent button')"
	></button>
</body>
```

#### Passed Example 11

The pin (red square) on this map has [essential size][] because it is important to pinpoint the exact location. Thus it passes [Interactive component has essential size][target size essential].

```html
<head>
	<title>Passed Example 11</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
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
			display: inline-block;
		}
	</style>
</head>
<body>
	Location of ACT rules headquarters:
	<div class="map"></div>
	<a
		class="dot"
		style="position: absolute; top: 597px; left: 818px"
		href="https://www.w3.org/WAI/standards-guidelines/act/rules/"
	></a>

	<button
		class="placeholder"
		style="top: 597px; left: 833px; width: 24px; height: 24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent link')"
	></button>
</body>
```

#### Passed Example 12

The `#small` button has a [clickable area][] of only 20×20px, but there is an [instrument][] to achieve the same function with a 44×44px [clickable area][] (namely, the `#large` button). Thus, the `#small` button passes [Interactive component has equivalent control with minimum size][target size equivalent minimum].

```html
<head>
	<title>Passed Example 12</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<style>
		#small {
			width: 20px;
			height: 20px;
			border-radius: 0;
			padding: 0;
		}
		#large {
			width: 44px;
			height: 44px;
			border-radius: 0;
		}
	</style>
</head>
<body>
	<button id="small" onclick="alert('Hello')">Hi</button>
	<button id="large" onclick="alert('Hello')">Hello</button>

	<button
		class="placeholder"
		style="top: 40px; left: 8px; width: 24px; height: 24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent button')"
	></button>
</body>
```

#### Passed Example 13

Both buttons have a [clickable area][] of only 20×20px. The `#spaced` one passes [Interactive component has minimum spacing][target size spacing]. Since it is an [instrument][] to achieve the same function as the `#cramped` button, the `#cramped` button passes [Interactive component has equivalent control with minimum size][target size equivalent minimum].

```html
<head>
	<title>Passed Example 13</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-circle.js"></script>
	<style>
		.target {
			width: 20px;
			height: 20px;
			border-radius: 0;
			padding: 0;
		}
	</style>
</head>
<body>
	<button class="target highlightable" id="cramped" onclick="alert('Hello')">Hi</button>
	<span style="min-width: 50px; display: inline-block"></span>
	<button class="target highlightable" id="spaced" onclick="alert('Hello')" aria-label="Hello">&#x1F44B;</button>

	<button
		class="placeholder"
		style="top: 30px; left: 8px; width: 24px; height: 24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent button')"
	></button>
	<script>
		highlightCircle(document.getElementById('cramped'), ['bad'])
		highlightCircle(document.getElementById('spaced'), ['good'])
	</script>
</body>
```

#### Passed Example 14

Both links pass [Interactive component has equivalent control with minimum size][target size equivalent minimum].

```html
<head>
	<title>Passed Example 14</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
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
			display: inline-block;
		}
	</style>
</head>
<body>
	Find the <a href="https://www.w3.org/WAI/standards-guidelines/act/rules/">ACT rules headquarters</a> on the map below:
	<div class="map"></div>
	<a
		class="dot"
		style="position: absolute; top: 597px; left: 818px"
		href="https://www.w3.org/WAI/standards-guidelines/act/rules/"
	></a>
	<button
		class="placeholder"
		style="top: 597px; left: 833px; width: 24px; height: 24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent link')"
	></button>
	<button
		class="placeholder"
		style="top: 25px; left: 65px; width: 150px; height: 24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent link')"
	></button>
</body>
```

#### Passed Example 15

The checkbox passes [Interactive component has size controlled by User Agent][target size user agent]. Since it is an [instrument][] to achieve the same function is the link, the link passes [Interactive component has equivalent control with minimum size][target size equivalent minimum].

```html
<head>
	<title>Passed Example 15</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-circle.js"></script>
</head>
<body>
	<div style="margin-top: 30px">
		<a href="#" id="link" class="highlightable">I agree with the following terms and conditions.</a><br />
		<p><b>Terms and conditions:</b> We reserve the right to delete your account without notice.</p>
		<input type="checkbox" /> I agree with the previous terms and conditions.
	</div>

	<button
		class="placeholder"
		style="top: 10px; left: 150px; width: 24px; height:24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent link')"
	></button>
	<script>
		highlightCircle(document.getElementById('link'), ['bad'])
	</script>
</body>
```

#### Passed Example 16

This button has a [clickable area][] containing a 24×24px rectangle. Even though it is partially obscured by the dashed red `div`, its remaining [clickable area][] contains a 24×24px rectangle delimited by prolonging the solid green lines. Thus, it passes [Interactive component has strict minimum size][target size minimum].

```html
<head>
	<title>Passed Example 16</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<style>
		.cover {
			position: absolute;
			z-index: 6;
			top: 0;
			left: 35px;
			height: 100px;
			width: 100px;
		}
		#target {
			height: 30px;
			border-radius: 0;
		}
		.hlines {
			top: 10px;
			left: -10px;
			width: 100px;
			height: 24px;
			border-left: none;
			border-right: none;
		}
		.vlines {
			top: -10px;
			left: 9px;
			width: 24px;
			height: 100px;
			border-top: none;
			border-bottom: none;
		}
	</style>
</head>
<body>
	<button id="target" class="highlightable" onclick="alert('Hello')">
		Say Hello
	</button>

	<div class="cover bad"></div>
	<div class="hlines good highlight"></div>
	<div class="vlines good highlight"></div>
</body>
```

#### Passed Example 17

This button has a [clickable area][] of roughly 73×50px. The `div` element with a dashed red border does not obscure it because of its `pointer-events: none` CSS property that let the clicks go through. Thus, it passes [Interactive component has strict minimum size][target size minimum].

```html
<head>
	<title>Passed Example 17</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<style>
		.cover {
			top: 0;
			height: 60px;
			width: 500px;
			pointer-events: none;
		}
	</style>
</head>
<body>
	<button onclick="alert('hello')" style="height: 30px">
		Say Hello
	</button>

	<div class="cover bad highlight"></div>
</body>
```

#### Passed Example 18

This button has a 30×30px [clickable area][]. The `div` with a dashed red border is not obscuring it because it can be scrolled out of the way. The solid green lines hint at a 24×24px area inside the button.Thus, it passes [Interactive component has strict minimum size][target size minimum].

```html
<head>
	<title>Passed Example 18</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<style>
		.cover {
			position: relative;
			left: 10px;
			height: 100px;
			width: 100px;
			pointer-events: all;
		}
		#target {
			height: 30px;
			border-radius: 0;
		}
		.hlines {
			top: 10px;
			left: -10px;
			width: 100px;
			height: 24px;
			border-left: none;
			border-right: none;
		}
		.vlines {
			top: -10px;
			left: 9px;
			width: 24px;
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
<body>
	<div class="scroller">
		<div class="cover bad"></div>
		<div class="spacer"></div>
	</div>

	<button id="target" class="highlightable" onclick="alert('Hello')">
		Say Hello
	</button>
	<div class="hlines good highlight"></div>
	<div class="vlines good highlight"></div>
</body>
```

#### Passed Example 19

The [clickable area][] of this button contains a 24×24px [horizontal rectangle][]. Thus, it passes [Interactive component has strict minimum size][target size minimum]. Note that the actual [border box][] has to be much larger to account for the rounded corners.

```html
<style>
	#target {
		width: 35px;
		height: 35px;
		border-radius: 30%;
	}
</style>
<button id="target" onclick="alert('hello')">Hi</button>
```

#### Passed Example 20

This button has been clipped, leaving a [clickable area][] containing a 45×45px [horizontal rectangle][]. Thus, it passes [Interactive component has strict minimum size][target size minimum].

```html
<head>
	<title>Passed Example 20</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<style>
		#target {
			height: 30px;
			width: 60px;
			text-align: center;
			clip-path: polygon(20px 0px, 20px 25px, 45px 25px, 45px 0px);
			background-color: #0074d9;
		}
	</style>
</head>
<body>
	<div id="target" role="button" onclick="alert('Hello')">
		Hi
	</div>
</body>
```

### Failed (TODO, add .placeholder to avoid spacing.)

#### Failed Example 1

This `button` has a [clickable area][] of only 20×20 pixels.

```html
<head>
	<title>Failed Example 1</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-circle.js"></script>
	<style>
		#target {
			width: 20px;
			height: 20px;
			border-radius: 0;
			padding: 0;
		}
	</style>
</head>
<body>
	<button id="target" class="highlightable" onclick="alert('hello')">Hi</button>

	<button
		class="placeholder"
		style="top: 28px; left: 8px; width: 24px; height: 24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent button')"
	></button>
	<script>
		highlightCircle(document.getElementById('target'), ['bad'])
	</script>
</body>
```

#### Failed Example 2

This link only has a [clickable area][] of approximately 66×18 pixels, as shown by its border.

```html
<head>
	<title>Failed Example 2</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-circle.js"></script>
	<style>
		#target {
			line-height: 50px;
		}
	</style>
</head>
<body>
	<a id="target" class="bad highlightable" href="https://www.w3.org/WAI/standards-guidelines/act/rules/">ACT rules</a>

	<button
		class="placeholder"
		style="top: 42px; left: 30px; width: 24px; height: 24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent button')"
	></button>
	<script>
		highlightCircle(document.getElementById('target'), ['bad'])
	</script>
</body>
```

#### Failed Example 3

This custom button has a [clickable area][] of approximately 18×20px, as shown by its dashed red border.

```html
<head>
	<title>Failed Example 3</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-circle.js"></script>
</head>
<body>
	<span id="target" class="bad highlightable" role="button" onclick="alert('Hello')">Hi</span>

	<button
		class="placeholder"
		style="top: 27px; left: 8px; width: 24px; height: 24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent button')"
	></button>
	<script>
		highlightCircle(document.querySelector('#target'), ['bad'])
	</script>
</body>
```

#### Failed Example 4

The `#small` button has a [clickable area][] of only 18×18px. The `#large` button has a [clickable area][] of 30×30px, but it does not achieve the same objective.

```html
<head>
	<title>Failed Example 4</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-circle.js"></script>
	<style>
		#small {
			width: 18px;
			height: 18px;
			border-radius: 0;
			padding: 0;
		}
		#large {
			width: 30px;
			height: 30px;
			border-radius: 0;
			padding: 0;
		}
	</style>
</head>
<body>
	<button id="small" class="highlightable" onclick="alert('Hello')">Hi</button>
	<button id="large" onclick="alert('Good-bye')">Bye</button>

	<button
		class="placeholder"
		style="top: 30px; left: 5px; width: 24px; height: 24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent button')"
	></button>
	<script>
		highlightCircle(document.querySelector('#small'), ['bad'])
	</script>
</body>
```

#### Failed Example 5

This button only has a [clickable area][] smaller than 24×24px, because it is obscured by the `div` with a dashed red border. The solid green lines hint at how a 24×24px area would fit inside the button, but not inside the non-obscured part.

```html
<head>
	<title>Failed Example 5</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<style>
		.cover {
			position: absolute;
			z-index: 6;
			top: 0;
			left: 1px;
			height: 100px;
			width: 60px;
		}
		#target {
			height: 50px;
			border-radius: 0;
		}
		.hlines {
			top: 10px;
			left: -10px;
			width: 100px;
			height: 24px;
			border-left: none;
			border-right: none;
		}
		.vlines {
			top: -10px;
			left: 54px;
			width: 24px;
			height: 100px;
			border-top: none;
			border-bottom: none;
		}
	</style>
</head>
<body>
	<button id="target" class="highlightable" onclick="alert('Hello')">
		Say Hello
	</button>

	<div class="cover bad"></div>
	<div class="hlines good highlight"></div>
	<div class="vlines good highlight"></div>
	<button
		class="placeholder"
		style="top: 8px; left: 82px; width: 24px; height: 50px"
		onclick="alert('Placeholder button blocking the spacing of adjacent button')"
	></button>
</body>
```

#### Failed Example 6

This button only has a [clickable area][] of approximately 20×45px, because it is obscured by the `div` with a dashed red border. Even though the `div` is scrollable, it is not scrollable fully out of the way and always obscures the button. The solid green lines hint at how a 44×44px area would fit inside the button, but not inside the never obscured part.

```html
<head>
	<title>Failed Example 6</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<style>
		.cover {
			position: relative;
			left: 0;
			height: 100px;
			width: 50px;
			pointer-events: all;
		}
		#target {
			height: 40px;
			border-radius: 0;
		}
		.hlines {
			top: 10px;
			left: -10px;
			width: 100px;
			height: 24px;
			border-left: none;
			border-right: none;
		}
		.vlines {
			top: -10px;
			left: 54px;
			width: 24px;
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
			width: 200px;
			pointer-events: none;
		}
		.spacer {
			height: 30px;
		}
	</style>
</head>
<body>
	<div class="scroller">
		<div class="cover bad"></div>
		<div class="spacer"></div>
	</div>

	<button id="target" class="highlightable" onclick="alert('Hello')">
		Say Hello
	</button>
	<div class="hlines good highlight"></div>
	<div class="vlines good highlight"></div>
	<button
		class="placeholder"
		style="top: 8px; left: 82px; width: 24px; height: 40px"
		onclick="alert('Placeholder button blocking the spacing of adjacent button')"
	></button>
</body>
```

#### Failed Example 7

These radio buttons have their size modified by the author and are therefore not [User Agent controlled components][user agent controlled component]. Their [clickable area][] is too small.

```html
<head>
	<title>Failed Example 7</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<style>
		input[type='radio'] {
			width: 1em;
			height: 1em;
		}
	</style>
</head>
<body>
	<fieldset>
		<legend>Pick a color (required)</legend>
		<label id="blue"><input type="radio" name="color" value="blue" />Blue</label><br />
		<label id="yellow"><input type="radio" name="color" value="yellow" />Yellow</label>
	</fieldset>
</body>
```

#### Failed Example 8

The [clickable area][] of this button does not contain a 24×24px [horizontal rectangle][].

```html
<head>
	<title>Failed Example 8</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-circle.js"></script>
	<style>
		#target {
			width: 15px;
			height: 15px;
			font-size: 10px;
			border-radius: 0;
			rotate: 45deg;
			padding: 0;
		}
	</style>
</head>
<body>
	<button id="target" class="highlightable" onclick="alert('Hello')">Hi</button>

	<script>
		highlightCircle(document.getElementById('target'), ['bad'])
	</script>
	<button
		class="placeholder"
		style="top: 20px; left: 21px; width: 24px; height: 24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent button')"
	></button>
</body>
```

#### Failed Example 9

The [clickable area][] of this button does not contain a 24×24px [horizontal rectangle][].

```html
<head>
	<title>Failed Example 9</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-circle.js"></script>
	<style>
		#target {
			width: 20px;
			height: 20px;
			border-radius: 30%;
			padding: 0;
		}
	</style>
</head>
<body>
	<button id="target" class="highlightable" onclick="alert('hello')">Hi</button>

	<script>
		highlightCircle(document.getElementById('target'), ['bad'])
	</script>
	<button
		class="placeholder"
		style="top: 28px; left: 7px; width: 24px; height: 24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent button')"
	></button>
</body>
```

#### Failed Example 10

The [clickable area][] of this button only contains a 20×20px [horizontal rectangle][].

```html
<head>
	<title>Failed Example 10</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-circle.js"></script>
	<style>
		#target {
			height: 20px;
			width: 40px;
			text-align: center;
			clip-path: polygon(10px 0px, 10px 45px, 30px 45px, 30px 0px);
			background-color: #0074d9;
		}
	</style>
</head>
<body>
	<div id="target" class="highlightable" role="button" onclick="alert('Hello')">
		Hi
	</div>

	<script>
		highlightCircle(document.getElementById('target'), ['bad'])
	</script>
	<button
		class="placeholder"
		style="top: 6px; left: 38px; width: 24px; height: 24px"
		onclick="alert('Placeholder button blocking the spacing of adjacent button')"
	></button>
</body>
```

### Inapplicable

#### Inapplicable Example 1

These `input` elements and `button` are `disabled` and therefore not [focusable][].

```html
<fieldset disabled>
	<label>First name <input /></label><br />
	<label>Last name <input /></label><br />
	<button>submit</button>
</fieldset>
```

#### Inapplicable Example 2

This button cannot be [targeted by a pointer event][] because it is entirely covered by the `div` element with a dashed red border.

```html
<head>
	<title>Inapplicable Example</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<style>
		.cover {
			top: 0;
			height: 50px;
			width: 500px;
		}
	</style>
</head>
<body>
	<button onclick="alert('hello')">
		Say Hello
	</button>

	<div class="cover bad highlight"></div>
</body>
```

[border box]: https://www.w3.org/TR/css-box-3/#border-box 'CSS definition of Border Box'
[can be targeted by a pointer event]: #can-be-targeted-by-pointer-event 'Definition of Can be Targeted by a Pointer Event'
[clickable area]: #clickable-area 'Definition of Clickable Area'
[essential size]: #essential-target-size 'Definition of Essential Target Size'
[explicit label]: #programmatic-label:explicit 'Definition of Explicit Label'
[focusable]: #focusable 'Definition of Focusable'
[horizontal rectangle]: #horizontal-rectangle 'Definition of Horizontal Rectangle'
[implicit label]: #programmatic-label:implicit 'Definition of Implicit Label'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[namespaced element]: #namespaced-element 'Definition of Namespaced Element'
[rendered on a line]: #rendered-on-a-line 'Definition of Rendered on a Line'
[sc258]: https://www.w3.org/TR/WCAG22/#target-size-minimum 'Success Criterion 2.5.8 Target Size (minimum)'
[target size minimum]: https://www.w3.org/WAI/standards-guidelines/act/rules/yb5y5l/ 'Rule Interactive component has strict minimum size'
[target size empty]: https://www.w3.org/WAI/standards-guidelines/act/rules/kj4tr0/ 'Rule Interactive component has no clickable area'
[target size equivalent minimum]: https://www.w3.org/WAI/standards-guidelines/act/rules/8lzn42/ 'Rule Interactive component has equivalent control with minimum size'
[target size essential]: https://www.w3.org/WAI/standards-guidelines/act/rules/dppn1b/ 'Rule Interactive component has essential size'
[target size inline]: https://www.w3.org/WAI/standards-guidelines/act/rules/ssehdh/ 'Rule Interactive component is inline'
[target size spacing]: https://www.w3.org/WAI/standards-guidelines/act/rules/rvh4wa/ 'Rule Interactive component has minimum spacing'
[target size user agent]: https://www.w3.org/WAI/standards-guidelines/act/rules/vcup8d/ 'Rule Interactive component has size controlled by User Agent'
[targeted by a pointer event]: #can-be-targeted-by-pointer-event 'Definition of Can be Targeted by a Pointer Event'
[user agent controlled component]: #user-agent-controlled-component 'Definition of UI Controlled Component'

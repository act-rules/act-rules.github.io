---
id: 8lzn42
name: Interactive component has equivalent control with minimum size
rule_type: atomic
description: |
  This rule checks that elements that can receive pointer events have an equivalent control which have a size of at least 24×24 pixels, have enough spacing, are inline, are user agent controlled, or have essential size.
accessibility_requirements:
  wcag21:2.5.5: # Target size (enhanced) (AAA)
    secondary: 'This success criterion is **related** to this rule. This is because the rule does not consider exceptions of the criterion; at the same time the success criterion has a larger size requirements. Some of the failed examples may satisfy this success criterion; some of the passed examples do not satisfy it.'
  wcag22:2.5.8: # Target Size (Minimum) (AA)
    secondary: 'This success criterion is **less strict** than this rule.  This is because the rule does not consider the size of the elements. Some of the failed examples may satisfy this success criterion.'
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any [HTML element][namespaced element] which [can be targeted by a pointer event][].

## Expectation

For each test target, there is an [instrument][] to achieve an equivalent goal on the same page, and at least one of the following is true for this [instrument][]:

- <dfn id="8lzn42:size">size</dfn>: through scrolling, the [instrument][] can be brought into viewport with a [clickable area][] containing an [horizontal rectangle][] with width and height of at least 24 CSS pixels; or
- <dfn id="8lzn42:spacing">spacing</dfn>: the [instrument][] has a [clickable area][] with [spacing][] of at least 24px to the [clickable area][] of every other test target; or
- <dfn id="8lzn42:inline">inline</dfn>: the [instrument][] is [rendered on a line][]; or
- <dfn id="8lzn42:ua">user agent</dfn>: the [instrument][] is a [User Agent controlled component][]; or
- <dfn id="8lzn42:essential">essential</dfn>: the [instrument][] has [essential target size][].

## Assumptions

- This rule assumes that [focusable][] `widget` are effectively clickable. If a widget is [focusable][] without being clickable, it may fail this rule while [Success Criterion 2.5.8 Target Size (minimum)][sc258] is satisfied.

- This rule assumes that the "equivalent" exception in [Success Criterion 2.5.8 Target Size (minimum)][sc258] is about equivalent control either with enough size or meeting any of the listed exception. If [Success Criterion 2.5.8 Target Size (minimum)][sc258] requires the equivalent control to have sufficient size, it is possible to pass this rule while failing the criterion.

## Accessibility Support

Hit testing isn't properly defined, and this has been an [issue in the CSS specification](https://github.com/w3c/csswg-drafts/issues/2325) for years. Therefore, different User Agents may perform it differently, resulting in different [clickable areas][clickable area] for the same element. As of February 2024, the ACT rules Community Group is not aware of actual cases resulting in significantly different [clickable areas][clickable area].

## Background

While the rule, and [Success Criterion 2.5.8 Target Size (minimum)][sc258], consider targets of any shape, the test cases mostly focus on targets whose [clickable area][] is itself an [horizontal rectangle][]. This acknowledges the fact that the [border box][] of an element can easily be queried by automated tools (e.g., through the `getBoundingClientRect` function), and therefore it is expected that most automated tools will perform better on such elements. For elements with "weird" clickable shape, including `area` elements, nested targets, or elements that have been rotated or clipped, the actual [clickable area][] is much harder to determine and may be much smaller than the [border box][]. These elements could fail the rule while their [border box][] contain a large enough [horizontal rectangle][]. In order to allow automated tools to have a consistent implementation of this rule, it does not contain such test cases, notably all Failed test cases have a [border box][] which is too small.

When the equivalent [instrument][] satisfies the [size condition][] and has a [clickable area][] which is nearly an [horizontal rectangle][], it also satisfies the [spacing condition][] (because any 24px square contains a 24px diameter circle). However, when their shape is greatly different, notable concave, the [spacing condition][] forces the center of the circle, possibly not in the center of the square, and thus may be not satisfied. Since test cases are mostly restricted to [clickable areas][clickable area] that are [horizontal rectangles][horizontal rectangle], Passed test cases that satisfy the [size condition][] are also expected to satisfy the [spacing condition][].

### Bibliography

- [Understanding Success Criterion 2.5.8: Target Size (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

## Test Cases

> **Note:** Several test cases have `.placeholder` buttons whose only role is to ensure the [spacing condition][] is not met for the true targets. These `.placeholder` buttons pass the rule (by having another `.placeholder` button with sufficient size to pass the rule). These `.placeholder` buttons are irrelevant to the examples and never mentioned in the descriptions.

> **Note:** Several test cases show the circle relevant for the [spacing condition][]. These circles are solid green when the [spacing condition][] is satisfied, and dashed red when it is not. The circles are not part of the actual test cases, and are only shown to help understand the [spacing condition][].

### Passed

#### Passed Example 1

Both buttons have an [instrument][] to achieve the same function with a 24×24px [clickable area][] (namely, the other button), i.e. satisfying the [size condition][].

```html
<style>
	.target {
		width: 24px;
		height: 24px;
		border-radius: 0;
		padding: 0;
	}
</style>
<button class="target" onclick="alert('Hello')">Hi</button>
<button class="target" onclick="alert('Hello')">Hi</button>
```

#### Passed Example 2

Both buttons have an [instrument][] to achieve the same function satisfying the [spacing condition][] (namely, the other button).

```html
<head>
	<title>Passed Example 2</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<script src="/test-assets/target-size/highlight-circle.js"></script>
</head>
<style>
	.target {
		width: 20px;
		height: 20px;
		border-radius: 0;
		padding: 0;
		margin: 10px;
	}
</style>
<button id="btn1" class="target highlightable" onclick="alert('Hello')">Hi</button>
<button id="btn2" class="target highlightable" onclick="alert('Hello')">Hi</button>
<script>
	highlightCircle(document.getElementById('btn1'))
	highlightCircle(document.getElementById('btn2'))
</script>
```

#### Passed Example 3

The first link has an equivalent [instrument][] that satisfies the [essential condition][] (namely, the second link). The second link has an equivalent [instrument][] that satisfies the [inline condition][] (namely, the first link).

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
		display: inline-block;
	}
	.placeholder {
		background-color: transparent;
		border: dashed 2px black;
		padding: 0;
		position: absolute;
	}
</style>

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
```

#### Passed Example 4

```html
<input type="checkbox" /> I agree with the following terms and conditions.
<p><b>Terms and conditions:</b> We reserve the right to delete your account without notice.</p>
<input type="checkbox" /> I agree with the previous terms and conditions.
```

### Failed

#### Failed Example 1

None of these buttons has an [instrument][] to achieve the same objective.

```html
<style>
	#small {
		width: 22px;
		height: 22px;
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
<button id="small" onclick="alert('Hello')">Hi</button>
<button id="large" onclick="alert('Good-bye')">Bye</button>
```

#### Failed Example 2

Both buttons have an [instrument][] to achieve the same function, but not with a large enough [clickable area][].

```html
<style>
	.target {
		width: 20px;
		height: 20px;
		border-radius: 0;
		padding: 0;
	}
</style>
<button class="target" onclick="alert('Hello')">Hi</button>
<button class="target" onclick="alert('Hello')">Hi</button>
```

#### Failed Example 3

The `#small` button has an [instrument][] to achieve the same objective with a 44×44px [clickable area][] (namely, the `#large` button). The `#large` button doesn't.

```html
<style>
	#small {
		width: 24px;
		height: 24px;
		border-radius: 0;
		padding: 0;
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

#### Failed Example 4

This `button` does not have any [instrument][] to achieve the same objective.

```html
<style>
	#target {
		width: 24px;
		height: 24px;
		border-radius: 0;
		padding: 0;
	}
</style>
<button id="target" onclick="alert('hello')">Hi</button>
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
<button onclick="alert('hello')">
	Say Hello
</button>

<div class="cover bad highlight"></div>
```

[border box]: https://www.w3.org/TR/css-box-3/#border-box 'CSS definition of Border Box'
[can be targeted by a pointer event]: #can-be-targeted-by-pointer-event 'Definition of Can be Targeted by a Pointer Event'
[clickable area]: #clickable-area 'Definition of Clickable Area'
[essential condition]: #8lzn42:essential 'The Essential Condition'
[focusable]: #focusable 'Definition of Focusable'
[horizontal rectangle]: #horizontal-rectangle 'Definition of Horizontal Rectangle'
[inline condition]: #8lzn42:inline 'The Inline Condition'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[namespaced element]: #namespaced-element 'Definition of Namespaced Element'
[sc258]: https://www.w3.org/TR/WCAG22/#target-size-minimum 'Success Criterion 2.5.8 Target Size (minimum)'
[size condition]: #8lzn42:size 'The Size Condition'
[spacing]: #spacing 'Definition of Spacing'
[spacing condition]: #8lzn42:spacing 'The Spacing Condition'
[targeted by a pointer event]: #can-be-targeted-by-pointer-event 'Definition of Can be Targeted by a Pointer Event'
[user agent condition]: #8lzn42:ua 'The User Agent Condition'

---
id: rvh4wa
name: Interactive component has minimum spacing
rule_type: atomic
description: |
  This rule checks that elements that can receive pointer events have a spacing of at least 24 pixels.
accessibility_requirements:
  wcag21:2.5.5: # Target size (enhanced) (AAA)
    secondary: 'This success criterion is **related** to this rule. This is because the rule does not consider exceptions of the criterion; at the same time the success criterion has a larger size requirements. Some of the failed examples may satisfy this success criterion; some of the passed examples do not satisfy it.'
  wcag22:2.5.8: # Target Size (Minimum) (AA)
    secondary: 'This success criterion is **less strict** than this rule. This is because the rule does not consider exceptions of the criterion. Some of the failed examples may satisfy this success criterion.'
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

Each test target has a [clickable area][] with [spacing][] of at least 24px to the [clickable area][] of every other test target.

## Assumptions

- This rule assumes that [focusable][] `widget` are effectively clickable. If a widget is [focusable][] without being clickable, it may fail this rule while [Success Criterion 2.5.8 Target Size (minimum)][sc258] is satisfied.

## Accessibility Support

Hit testing isn't properly defined, and this has been an [issue in the CSS specification](https://github.com/w3c/csswg-drafts/issues/2325) for years. Therefore, different User Agents may perform it differently, resulting in different [clickable areas][clickable area] for the same element. As of February 2024, the ACT rules Community Group is not aware of actual cases resulting in significantly different [clickable areas][clickable area].

## Background

While the rule, and [Success Criterion 2.5.8 Target Size (minimum)][sc258], apply to targets of any shape, the test cases mostly focus on targets whose [clickable area][] is itself an [horizontal rectangle][]. This acknowledges the fact that the [border box][] of an element can easily be queried by automated tools (e.g., through the `getBoundingClientRect` function), and therefore it is expected that most automated tools will perform better on such elements. For elements with "weird" clickable shape, including `area` elements, nested targets, or elements that have been rotated or clipped, the actual [clickable area][] is much harder to determine and may be much smaller than the [border box][]. In order to allow automated tools to have a consistent implementation of this rule, it does not contain such test cases.

### Bibliography

- [Understanding Success Criterion 2.5.8: Target Size (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

## Test Cases

> **Note:** All example draw a [spacing][] circle of 24px diameter below the target to visually show it. These circles are solid green for good cases, and dashed red for bad cases.

> **Note:** Several examples draw borders around some of the elements or texts. This is purely for aesthetic purpose and to clearly show the [clickable areas][clickable area] that are not obvious. These borders are solid green when showing good cases, or relevant areas; and dashed red when showing bad cases, or irrelevant areas.

### Passed

#### Passed Example 1

Both buttons have a [clickable area][] with [spacing][] of at least 24px to the other button's [clickable area][].

```html
<head>
	<title>Failed Example</title>
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

#### Passed Example 2

Since there is only one test target, it doesn't require to be spaced from anything else and automatically passes this rule.

```html
<head>
	<title>Failed Example</title>
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

### Failed

#### Failed Example 1

None of these button has [spacing][] of at least 24px to the other. Both of the 24px diameter circles (dashed red) intersect the other button's [clickable area][].

```html
<head>
	<title>Failed Example</title>
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
	<br />
	<button id="button2" class="highlightable" onclick="alert('Good bye')">
		Bye
	</button>
	<script>
		highlightCircle(document.getElementById('button1'), ['bad'])
		highlightCircle(document.getElementById('button2'), ['bad'])
	</script>
</body>
```

#### Failed Example 2

None of these button has [spacing][] of at least 24px to the other. The two 24px diameter circles (dashed red) intersect each other.

```html
<head>
	<title>Failed Example</title>
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
		Hello
	</button>
	<div style="height: 2.5px"></div>
	<button id="button2" class="highlightable" onclick="alert('Good bye')">
		Bye
	</button>
	<script>
		highlightCircle(document.getElementById('button1'), ['bad'])
		highlightCircle(document.getElementById('button2'), ['bad'])
	</script>
</body>
```

#### Failed Example 3

The second button has [spacing][] of less than 24px to the first button. The 24px diameter circle (dashed red) intersects the other button's [clickable area][]. The first button does have enough [spacing][].

```html
<head>
	<title>Failed Example</title>
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
		Hello World
	</button>
	<br />
	<button id="button2" class="highlightable" onclick="alert('Hello')">
		Hi
	</button>
	<script>
		highlightCircle(document.getElementById('button1'))
		highlightCircle(document.getElementById('button2'), ['bad'])
	</script>
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
	<button onclick="alert('hello')">Say Hello</button>

	<div class="cover bad highlight"></div>
</body>
```

[border box]: https://www.w3.org/TR/css-box-3/#border-box 'CSS definition of Border Box'
[can be targeted by a pointer event]: #can-be-targeted-by-pointer-event 'Definition of Can be Targeted by a Pointer Event'
[clickable area]: #clickable-area 'Definition of Clickable Area'
[explicit label]: #programmatic-label:explicit 'Definition of Explicit Label'
[focusable]: #focusable 'Definition of Focusable'
[horizontal rectangle]: #horizontal-rectangle 'Definition of Horizontal Rectangle'
[implicit label]: #programmatic-label:implicit 'Definition of Implicit Label'
[namespaced element]: #namespaced-element 'Definition of Namespaced Element'
[sc258]: https://www.w3.org/TR/WCAG22/#target-size-minimum 'Success Criterion 2.5.8 Target Size (minimum)'
[spacing]: #area-spacing 'Definition of Spacing'
[targeted by a pointer event]: #can-be-targeted-by-pointer-event 'Definition of Can be Targeted by a Pointer Event'

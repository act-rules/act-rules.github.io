---
id: yb5y5l
name: Interactive component has strict minimum size
rule_type: atomic
description: |
  This rule checks that elements that can receive pointer events have a size of at least 24×24 pixels.
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

Each test target can be brought into viewport though scrolling and have a [clickable area][] containing an [horizontal rectangle][] with width and height of at least 24 CSS pixels.

## Assumptions

- This rule assumes that [focusable][] `widget` are effectively clickable. If a widget is [focusable][] without being clickable, it may fail this rule while [Success Criterion 2.5.8 Target Size (minimum)][sc258] is satisfied.

## Accessibility Support

Hit testing isn't properly defined, and this has been an [issue in the CSS specification](https://github.com/w3c/csswg-drafts/issues/2325) for years. Therefore, different User Agents may perform it differently, resulting in different [clickable areas][clickable area] for the same element. As of February 2024, the ACT rules Community Group is not aware of actual cases resulting in significantly different [clickable areas][clickable area].

## Background

While the rule, and [Success Criterion 2.5.8 Target Size (minimum)][sc258], apply to targets of any shape, the test cases mostly focus on targets whose [clickable area][] is itself an [horizontal rectangle][]. This acknowledges the fact that the [border box][] of an element can easily be queried by automated tools (e.g., through the `getBoundingClientRect` function), and therefore it is expected that most automated tools will perform better on such elements. For elements with "weird" clickable shape, including `area` elements, nested targets, or elements that have been rotated or clipped, the actual [clickable area][] is much harder to determine and may be much smaller than the [border box][]. These elements could fail the rule while their [border box][] contain a large enough [horizontal rectangle][]. In order to allow automated tools to have a consistent implementation of this rule, it does not contain such test cases, notably all Failed test cases have a [border box][] which is too small.

### Bibliography

- [Understanding Success Criterion 2.5.8: Target Size (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

## Test Cases

> **Note:** Several examples draw borders around some of the elements or texts. This is purely for aesthetic purpose and to clearly show the [clickable areas][clickable area] that are not obvious. These borders are solid green when showing good cases, or relevant areas; and dashed red when showing bad cases, or irrelevant areas.

> **Note:** Several examples illustrate overlapping and partially obscured content with fully transparent `div` (with a dashed red border), in order to still show the underlying target. This often results in very "artificial" examples where in real page the overlapping element would not be transparent and would actually hide the target.

### Passed

#### Passed Example 1

This `link` has a [clickable area][] of approximately 91×24 pixels.

```html
<style>
	#target {
		font-size: 22px;
	}
</style>
<a id="target" href="https://www.w3.org/WAI/standards-guidelines/act/rules/">ACT rules</a>
```

#### Passed Example 2

This button has a [clickable area][] of exactly 24×24 pixels.

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

This `input` element, combined with its [implicit label][] and its padding, has a [clickable area][] containing a rectangle of approximately 81×48px. Note that this rectangle has to intersect both the `input` element itself, and the text of the label (within the solid green border), as none of the individual components are enough.

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

This `input` element, combined with its [explicit label][] and its padding, has a [clickable area][] containing a rectangle of approximately 50×44px. Note that this rectangle has to intersect both the `input` element itself, and the text of the label (within the solid green border), as none of the individual components are enough.

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

This button has a clickable area of approximately 93×24px due to the overflowing text being clickable. The `div` element is only here to visually display the clickable area of the text.

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

This button, together with its padding and border, has a [clickable area][] of more than 24×24px. The solid green border shows the [clickable area][] while the dashed red one shows the inner text (without sizing nor padding).

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

This button has a [clickable area][] containing a 24×24px rectangle. Even though it is partially obscured by the dashed red `div`, its remaining [clickable area][] contains a 24×24px rectangle delimited by prolonging the solid green lines.

```html
<head>
	<title>Passed Example 7</title>
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

#### Passed Example 8

This button has a [clickable area][] of roughly 73×30px. The `div` element with a dashed red border does not obscure it because of its `pointer-events: none` CSS property that let the clicks go through.

```html
<head>
	<title>Passed Example 8</title>
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

#### Passed Example 9

This button has a 30×30px [clickable area][]. The `div` with a dashed red border is not obscuring it because it can be scrolled out of the way. The solid green lines hint at a 24×24px area inside the button.

```html
<head>
	<title>Passed Example 9</title>
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

#### Passed Example 10

The [clickable area][] of this button contains a 24×24px [horizontal rectangle][]. Note that the actual [border box][] has to be larger to account for the rounded corners.

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

#### Passed Example 11

This button has been clipped, leaving a [clickable area][] containing a 25×25px [horizontal rectangle][].

```html
<head>
	<title>Passed Example 11</title>
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

### Failed

#### Failed Example 1

This `button` has a [clickable area][] of only 20×20 pixels.

```html
<style>
	#target {
		width: 20px;
		height: 20px;
		border-radius: 0;
		padding: 0;
	}
</style>
<button id="target" onclick="alert('hello')">Hi</button>
```

#### Failed Example 2

This link only has a [clickable area][] of approximately 66×18 pixels, as shown by its border.

```html
<head>
	<title>Failed Example 2</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
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

#### Failed Example 3

This custom button has a [clickable area][] of approximately 18×20px, as shown by its dashed red border.

```html
<head>
	<title>Failed Example 3</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
</head>
<body>
	<span class="bad" role="button" onclick="alert('Hello')">Hi</span>
</body>
```

#### Failed Example 4

The `#small` button has a [clickable area][] of only 18×18px. The `#large` button has a [clickable area][] of 30×30px, but it does not achieve the same objective.

```html
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
<button id="small" onclick="alert('Hello')">Hi</button>
<button id="large" onclick="alert('Good-bye')">Bye</button>
```

#### Failed Example 5

This button only has a [clickable area][] of approximately 20×45px, because it is obscured by the `div` with a dashed red border. The solid green lines hint at how a 24×24px area would fit inside the button, but not inside the non-obscured part.

```html
<head>
	<title>Failed Example 5</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
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

#### Failed Example 6

This button only has a [clickable area][] of approximately 20×40px, because it is obscured by the `div` with a dashed red border. Even though the `div` is scrollable, it is not scrollable fully out of the way and always obscures the button. The solid green lines hint at how a 24×24px area would fit inside the button, but not inside the never obscured part.

```html
<head>
	<title>Failed Example 6</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
	<style>
		.cover {
			position: relative;
			left: 20px;
			height: 100px;
			width: 100px;
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
</body>
```

#### Failed Example 7

The [clickable area][] of this button does not contain a 24×24px [horizontal rectangle][].

```html
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
<button id="target" onclick="alert('Hello')">Hi</button>
```

#### Failed Example 8

The [clickable area][] of this button does not contain a 24×24px [horizontal rectangle][].

```html
<style>
	#target {
		width: 20px;
		height: 20px;
		border-radius: 30%;
		padding: 0;
	}
</style>
<button id="target" onclick="alert('hello')">Hi</button>
```

#### Failed Example 9

The [clickable area][] of this button only contains a 20×20px [horizontal rectangle][].

```html
<head>
	<title>Failed Example 9</title>
	<link rel="stylesheet" href="/test-assets/target-size/shared-styles.css" />
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
	<div id="target" role="button" onclick="alert('Hello')">
		Hi
	</div>
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
[targeted by a pointer event]: #can-be-targeted-by-pointer-event 'Definition of Can be Targeted by a Pointer Event'

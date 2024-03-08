---
id: yvb1xu
name: Interactive component has equivalent control with enhanced size
rule_type: atomic
description: |
  This rule checks that elements that can receive pointer events have an equivalent control with a size of at least 44×44 pixels.
accessibility_requirements:
  wcag21:2.5.5: # Target size (enhanced) (AAA)
    secondary: 'This success criterion is **less strict** than this rule. This is because the rule does not consider the size of the elements. Some of the failed examples may satisfy this success criterion.'
  wcag22:2.5.8: # Target Size (Minimum) (AA)
    secondary: 'This success criterion is **less strict** than this rule. This is because this criterion has a lower size requirement. Some of the failed examples may satisfy this success criterion.'
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

For each test target, there is an [instrument][] to achieve an equivalent goal on the same page, and through scrolling this [instrument][] can be brought into viewport with a [clickable area][] containing an [horizontal rectangle][] with width and height of at least 44 CSS pixels.

## Assumptions

- This rule assumes that [focusable][] `widget` are effectively clickable. If a widget is [focusable][] without being clickable, it may fail this rule while [Success Criterion 2.5.5 Target Size (enhanced)][sc255] is satisfied.

## Accessibility Support

Hit testing isn't properly defined, and this has been an [issue in the CSS specification](https://github.com/w3c/csswg-drafts/issues/2325) for years. Therefore, different User Agents may perform it differently, resulting in different [clickable areas][clickable area] for the same element. As of February 2024, the ACT rules Community Group is not aware of actual cases resulting in significantly different [clickable areas][clickable area].

## Background

While the rule, and [Success Criterion 2.5.5 Target Size (enhanced)][sc255], consider targets of any shape, the test cases mostly focus on targets whose [clickable area][] is itself an [horizontal rectangle][]. This acknowledges the fact that the [border box][] of an element can easily be queried by automated tools (e.g., through the `getBoundingClientRect` function), and therefore it is expected that most automated tools will perform better on such elements. For elements with "weird" clickable shape, including `area` elements, nested targets, or elements that have been rotated or clipped, the actual [clickable area][] is much harder to determine and may be much smaller than the [border box][]. These elements could fail the rule while their [border box][] contain a large enough [horizontal rectangle][]. In order to allow automated tools to have a consistent implementation of this rule, it does not contain such test cases, notably all Failed test cases have a [border box][] which is too small.

### Bibliography

- [Understanding Success Criterion 2.5.5: Target Size (enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)

## Test Cases

> **Note:** In order for a page to pass this rule, all targets need a large enough equivalent [instrument][], including the targets that are large enough themselves.

### Passed

#### Passed Example 1

Both buttons have an [instrument][] to achieve the same function with a 44×44px [clickable area][] (namely, the other button).

```html
<style>
	.target {
		width: 44px;
		height: 44px;
		border-radius: 0;
	}
</style>
<button class="target" onclick="alert('Hello')">Hi</button>
<button class="target" onclick="alert('Hello')">Hello</button>
```

### Failed

#### Failed Example 1

None of these buttons has an [instrument][] to achieve the same objective.

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

#### Failed Example 2

Both buttons have an [instrument][] to achieve the same function, but not with a large enough [clickable area][].

```html
<style>
	.target {
		width: 40px;
		height: 40px;
		border-radius: 0;
	}
</style>
<button class="target" onclick="alert('Hello')">Hi</button>
<button class="target" onclick="alert('Hello')">Hello</button>
```

#### Failed Example 3

The `#small` button has an [instrument][] to achieve the same objective with a 44×44px [clickable area][] (namely, the `#large` button). The `#large` button doesn't. Note that this case satisfies [Success Criterion 2.5.5 Target Size (enhanced)][sc255] because the `#large` button is already large enough and doesn't require an equivalent [instrument][].

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

#### Failed Example 4

This `button` does not have any [instrument][] to achieve the same objective.

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

[border box]: https://www.w3.org/TR/css-box-3/#border-box 'CSS definition of Border Box'
[can be targeted by a pointer event]: #can-be-targeted-by-pointer-event 'Definition of Can be Targeted by a Pointer Event'
[clickable area]: #clickable-area 'Definition of Clickable Area'
[focusable]: #focusable 'Definition of Focusable'
[horizontal rectangle]: #horizontal-rectangle 'Definition of Horizontal Rectangle'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[namespaced element]: #namespaced-element 'Definition of Namespaced Element'
[sc255]: https://www.w3.org/TR/WCAG22/#target-size-enhanced 'Success Criterion 2.5.5 Target Size (enhanced)'
[targeted by a pointer event]: #can-be-targeted-by-pointer-event 'Definition of Can be Targeted by a Pointer Event'

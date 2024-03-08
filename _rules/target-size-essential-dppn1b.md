---
id: dppn1b
name: Interactive component has essential size
rule_type: atomic
description: |
  This rule checks that elements that can receive pointer events have essential size.
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
  test_assets: <a href="https://www.freepik.com/free-vector/black-white-town-navigation-map_5663353.htm">Map Image by Freepik</a>; <a href="https://www.flaticon.com/free-icons/zoom" title="zoom icons">Zoom icon created by Freepik - Flaticon</a>
---

## Applicability

This rule applies to any [HTML element][namespaced element] which [can be targeted by a pointer event][].

## Expectation

Each test target has [essential target size][].

## Assumptions

- This rule assumes that [focusable][] `widget` are effectively clickable. If a widget is [focusable][] without being clickable, it may fail this rule while [Success Criterion 2.5.5 Target Size (enhanced)][sc255] and [Success Criterion 2.5.8 Target Size (minimum)][sc258] are satisfied.

## Accessibility Support

Hit testing isn't properly defined, and this has been an [issue in the CSS specification](https://github.com/w3c/csswg-drafts/issues/2325) for years. Therefore, different User Agents may perform it differently, resulting in different [clickable areas][clickable area] for the same element. As of February 2024, the ACT rules Community Group is not aware of actual cases resulting in significantly different [clickable areas][clickable area].

## Background

### Bibliography

- [Understanding Success Criterion 2.5.5: Target Size (enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)
- [Understanding Success Criterion 2.5.8: Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

## Test Cases

### Passed

#### Passed Example 1

The pin (red square) on this map has [essential size][] because it is important to pinpoint the exact location.

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
</style>

Location of ACT rules headquarters:
<div class="map"></div>
<a
	class="dot"
	style="position: absolute; top: 597px; left: 818px"
	href="https://www.w3.org/WAI/standards-guidelines/act/rules/"
></a>
```

### Failed

#### Failed Example 1

The "Zoom in" image button in the top-right corner of this map does not have [essential size][].

```html
<style>
	.map {
		background-image: url('/test-assets/target-size/map-background.jpg');
		width: 1250px;
		height: 1250px;
	}
</style>

Location of ACT rules headquarters:
<div class="map"></div>
<input
	type="image"
	src="/test-assets/target-size/zoom.png"
	style="position: absolute; top: 35px; left: 1230px; height: 20px; width: 20px;"
	alt="Zoom in"
	onclick="alert('Zooming…')"
/>
```

#### Failed Example 2

This `button` does not have [essential size][].

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

[can be targeted by a pointer event]: #can-be-targeted-by-pointer-event 'Definition of Can be Targeted by a Pointer Event'
[clickable area]: #clickable-area 'Definition of Clickable Area'
[essential target size]: #essential-target-size 'Definition of Essential Target Size'
[focusable]: #focusable 'Definition of Focusable'
[namespaced element]: #namespaced-element 'Definition of Namespaced Element'
[sc255]: https://www.w3.org/TR/WCAG22/#target-size-enhanced 'Success Criterion 2.5.5 Target Size (enhanced)'
[sc258]: https://www.w3.org/TR/WCAG22/#target-size-minimum 'Success Criterion 2.5.8 Target Size (minimum)'
[targeted by a pointer event]: #can-be-targeted-by-pointer-event 'Definition of Can be Targeted by a Pointer Event'

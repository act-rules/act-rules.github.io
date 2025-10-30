---
id: oj04fd
name: Element in sequential focus order has visible focus
rules_format: 1.1
rule_type: atomic
description: |
  This rule checks that each element in sequential focus order has some visible focus indication.
accessibility_requirements:
  wcag20:2.4.7: # Focus Visible (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - CSS styling
  - DOM tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
  funding:
    - WAI-Tools
---

## Applicability

The rule applies to any element which is part of [sequential focus navigation][] in an [HTML document](https://html.spec.whatwg.org/#document).

## Expectation

For each target element, there is at least one device pixel inside the [scrolling area][] of the [viewport][] whose [HSL color value](https://www.w3.org/TR/css-color-3/#hsl-color) is different when the element is [focused][] from when it is not.

## Background

Default styling in user agents provides a focus indication for focusable elements (even those that are not focusable by default), as shown in Passed Examples 1 and 2. Many examples in this rule need to **remove** that indicator in order to illustrate various situations. This is bad practice and should normally be avoided.

WCAG 2.0 and 2.1 do not have any requirement of how big or small focus indicator should be, or how far or near from the [focusable][] element it should be. Thus it is possible to pass this rule and [Success Criterion 2.4.7 Focus Visible][sc247] with barely perceptible changes at the other end of the page. That would however still be an accessibility issue. WCAG 2.2 includes [Success Criterion 2.4.11 Focus Appearance][sc2411] and [Success Criterion 2.4.12 Focus Not Obscured (Minimum)][sc2412] specifying how big the focus indicator should be. All Passed Examples in this rule satisfy those success criteria.

WCAG does not require that the focus indicator for each [focusable][] element is unique in appearance. Therefore, this rule can pass even if several focus indicators are identical. Such a situation may nonetheless cause confusion and all examples in this rule avoid it.

### Assumptions

There are no assumptions.

### Accessibility Support

There are no accessibility support issues known.

### Other Resources

- [Success Criterion 2.4.7 Focus Visible][sc247]
- [Success Criterion 2.4.11 Focus Appearance][sc2411]
- [Success Criterion 2.4.12 Focus Not Obscured (Minimum)][sc2412]
- [Understanding Success Criterion 2.4.7: Focus Visible][usc247]
- [Understanding Success Criterion 2.4.11: Focus Appearance][usc2411]
- [Understanding Success Criterion 2.4.12: Focus Not Obscured (Minimum)][usc2412]

## Examples

### Passed

#### Passed Example 1

The [focusable][] element is part of [sequential focus navigation][]. It has an outline when it is [focused][] (due to default User Agent's styling). The outline has a different `hsl` value compared to the `hsl` value of the background over which the outline appears (the exact values depend on the type of browser being used).

```html
<a href="https://act-rules.github.io/">ACT rules</a>
```

#### Passed Example 2

The [focusable][] element is part of [sequential focus navigation][]. It has an outline when it is [focused][] (due to default User Agent's styling). The outline has a different `hsl` value compared to the `hsl` value of the background over which the outline appears (the exact values depend on the type of browser being used).

```html
<span tabindex="0">Act rules</span>
```

#### Passed Example 3

The [focusable][] element is part of [sequential focus navigation][]. Its parent `span` puts a border around it when it is [focused][] (the border of the `span` element). The border's `hsl` value (`hsl(240, 100%, 25%)`) is different to the `hsl` value of the background (`hsl(0, 0%, 100%)`) over which the border appears.

```html
<link rel="stylesheet" href="/test-assets/focus-visible-oj04fd/styles.css" />
<script src="/test-assets/focus-visible-oj04fd/script.js"></script>

<span id="indicator" class="border">
	<a
		id="act"
		class="no-focus-default"
		onfocus="toggleActivation('indicator')"
		onblur="toggleActivation('indicator')"
		href="https://act-rules.github.io/"
		>ACT rules</a
	>
</span>
```

#### Passed Example 4

Each of these three [focusable][] elements has a blue square in front of it when it is [focused][]. The square's `hsl` value (`hsl(240, 100%, 25%)`) is different to the `hsl` value of the background (`hsl(0, 0%, 100%)`) over which the square appears.

```html
<link rel="stylesheet" href="/test-assets/focus-visible-oj04fd/styles.css" />
<script src="/test-assets/focus-visible-oj04fd/script.js"></script>

<span id="indicator-act" class="indicator solid"></span>
<a
	id="act"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-act'); toggleActivation('indicator-wcag')"
	onblur="toggleActivation('indicator-act'); toggleActivation('indicator-wcag')"
	href="https://act-rules.github.io/"
	>ACT rules</a
>
<span id="indicator-wcag" class="indicator solid"></span>
<a
	id="wcag"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-wcag'); toggleActivation('indicator-w3c')"
	onblur="toggleActivation('indicator-wcag'); toggleActivation('indicator-w3c')"
	href="https://www.w3.org/TR/WCAG22/"
	>WCAG</a
>
<span id="indicator-w3c" class="indicator solid"></span>
<a
	id="w3c"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-w3c'); toggleActivation('indicator-final')"
	onblur="toggleActivation('indicator-w3c'); toggleActivation('indicator-final')"
	href="https://www.w3.org/"
	>WCAG</a
>
<span id="indicator-final" class="indicator solid"></span>
```

#### Passed Example 5

Each of these three [focusable][] elements uses a `::before` pseudo-element with a black arrow as its `content`, which appears in front of the element when it is [focused][]. The arrow's `hsl` value (`hsl(0, 0%, 0%)`) is different to the `hsl` value of the background (`hsl(0, 0%, 100%)`) over which the arrow appears.

```html
<style>
	body {
		background: white;
	}
	ul {
		list-style-type: none;
	}
	a {
		display: inline-block;
	    color: black;
	    text-decoration: none;
	    padding: 4px 6px;
		outline: none;
	}
	
	a:focus::before {
		content: "→ ";
	}
</style>
<ul>
	<li>
		<a href="#">ACT Rules</a>
	</li>
	<li>
		<a href="#">WCAG</a>
	</li>
	<li>
		<a href="#">WAI-ARIA</a>
	</li>
</ul>
```

### Failed

#### Failed Example 1

The [focusable][] element does not have any pixel changing color when it is [focused][] because the default styling has been overwritten by a style that removes the outline.

```html
<link rel="stylesheet" href="/test-assets/focus-visible-oj04fd/styles.css" />
<a class="no-focus-default" href="https://act-rules.github.io/">ACT rules</a>
```

#### Failed Example 2

The [focusable][] element does not have any pixel changing color when it is [focused][] because the focus indicator's color matches the background's color, making the outline imperceptible.

```html
<style>
	body {background: white;}
	a:focus {outline-color: white;}
</style>
<a href="https://act-rules.github.io/">ACT rules</a>
```

#### Failed Example 3

The [focusable][] element does not have any pixel changing color when it is [focused][] because the focus indicator's is covered by another element.

```html
<style>
    body {
		background: white;
		box-sizing: border-box;
    }
    body * {
		box-sizing: border-box;
    }
	ul {
		list-style-type: none;
	}
    ul.nav {
		background: #ccc;
		list-style-type: none;
		position: relative;
		margin: 0;
		padding: 0;
		position: relative
    }
    ul.nav > li {
		display: inline-block;
    }
    a {
		display: inline-block;
		color: black;
		text-decoration: none;
		padding: 20px 20px;
		outline: none;
		border-bottom: 2px solid #ccc;
    }
    a:focus {
		border-bottom: 2px solid #000;
    }
    .fly-out {
		display: none;
		position: absolute;
		top: calc(100% - 2px);
		left: 0;
		background: #f4f4f4;
		border: 1px solid #ccc;
		padding: 0.5rem;
		width: 100%;
    }
	li:focus-within .fly-out {
		display: block;
    }
</style>

<ul class="nav">
	<li>
		<a href="#">ACT Rules</a>
		<div class="fly-out">
			<ul>
				<li>Link 1</li>
				<li>Link 2</li>
				<li>Link 3</li>
			</ul>
		</div>
	</li>
	<li>
		<a href="#">WCAG</a>
		<div class="fly-out">
			<ul>
				<li>Link 1</li>
				<li>Link 2</li>
				<li>Link 3</li>
			</ul>
		</div>
	</li>
	<li>
		<a href="#">WAI-ARIA</a>
		<div class="fly-out">
			<ul>
				<li>Link 1</li>
				<li>Link 2</li>
				<li>Link 3</li>
			</ul>
		</div>
	</li>
</ul>
```

#### Failed Example 4

The [focusable][] element does not have any pixel changing color when it is [focused][] because the element size is equal to the [scrolling area][] of the [viewport][].

```html
<div tabindex="0" style="width: 100vw; height: 100vh;">ACT rules</div>
```

### Inapplicable

#### Inapplicable Example 1

This document contains no [focusable][] element.

```html
<span>ACT rules</span>
```

#### Inapplicable Example 2

None of the [focusable][] elements in this document are part of [sequential focus navigation][].

```html
<a tabindex="-1" href="https://act-rules.github.io/">ACT rules</a>
<a tabindex="-1" href="https://www.w3.org/TR/WCAG22/">WCAG</a>
```

[focusable]: #focusable 'Definition of Focusable'
[focused]: #focused 'Definition of Focused'
[sc247]: https://www.w3.org/TR/WCAG22/#focus-visible 'Success Criterion 2.4.7 Focus Visible'
[sc2411]: https://www.w3.org/TR/WCAG22/#focus-appearance 'Success Criterion 2.4.11 Focus Appearance'
[sc2412]: https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum 'Success Criterion 2.4.12 Focus Not Obscured (Minimum)'
[scrolling area]: https://drafts.csswg.org/cssom-view/#scrolling-area 'CSS specification of Scrolling Area'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML specification of Sequential focus navigation'
[usc247]: https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html 'Understanding Success Criterion 2.4.7: Focus Visible'
[usc2411]: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html 'Understanding Success Criterion 2.4.11: Focus Appearance'
[usc2412]: https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html 'Understanding Success Criterion 2.4.12: Focus Not Obscured (Minimum)'
[viewport]: https://drafts.csswg.org/css2/#viewport 'CSS definition of Viewport'

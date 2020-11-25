---
id: ep1s13
name: Additional content triggered on hover is hoverable
rule_type: atomic
description: |
  This rule checks that any additional content that was triggered by hovering an element remains available to the user while the mouse pointer is over the element or the additional content
accessibility_requirements:
  wcag21:1.4.13: # Content on Hover or Focus (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Mouse pointer
acknowledgments:
  authors:
    - Carlos Duarte
---

## Applicability

The rule applies to any element that when [hovered][] causes [visible changes in content][] and for the [area affected by the visible changes][area affected by visible changes], determined after 5 seconds of [hovering][hovering] the element, all the following are true:

- the area is [adjacent][adjacent areas] or [overlaps][overlapping areas] the [bounding box][] of the target element; and
- the area is not [contained][] inside the [bounding box][] of the target element; and
- the area is the same every time the target element is [hovered][] while no element is [activated][] in the same [HTML document][].

## Expectation 1

There are no [visible changes in content][] in the [area affected by the changes][area affected by visible changes] while the target element is [hovered][] or the mouse pointer remains inside that area.

## Expectation 2

Expectation 1 holds for at least 1 minute.

## Assumptions

- The user does not dismiss the tooltip causing the changes in content by pressing a key on the keyboard. In this instance the rule will fail while [success criterion 1.4.13: Content on Hover or Focus][sc1.4.13] might be satisfied.
- The content displayed on the rectangle with the changes in content does not become irrelevant. In this instance the rule will fail while [success criterion 1.4.13: Content on Hover or Focus][sc1.4.13] might be satisfied.
- Additional changes in content, triggered by hovering an element which appeared because of the initial hovering, happen outside the originally affected area (e.g. cascading menus that are triggered on successive hovering actions). If the new changes happen inside the originally affected area this rule will fail, while [success criterion 1.4.13: Content on Hover or Focus][sc1.4.13] might be satisfied.
- This rule assumes that the additional content does not disappear after 1 minute of being triggered by the hovering event. If the content disappears after this time span the rule may pass but [Success Criterion 1.4.13: Content on Hover or Focus][sc1.4.13] is not satisfied. The arbitrary 1 minute time span, selected so that testing this rule would not be impractical, is not included in WCAG.

## Accessibility Support

_No accessibility support issues known._

## Background

Animations triggered on hover are common on the web. To ensure consistent testing of the rule, an arbitrary time span of 5 seconds is used before determining the area affected by the changes. This time span, not included in WCAG, is included so that animations can end before assessing the changes in content.

- [Understanding Success Criterion 1.4.13: Content on Hover or Focus][sc1.4.13]
- [F95: Failure of Success Criterion 1.4.13 due to content shown on hover not being hoverable](https://www.w3.org/WAI/WCAG21/Techniques/failures/F95)

## Test Cases

### Passed

#### Passed Example 1

This button element causes [visible changes in content][] by presenting a tooltip when [hovered][]. The tooltip remains displayed, resulting in no further [visible changes in content][] while the mouse pointer does not leave its boundaries or the button's boundaries.

```html
<link rel="stylesheet" type="text/css" href="/test-assets/ep1s13/styles.css" />
<script src="/test-assets/ep1s13/scripts.js"></script>

<body onload="bindEvents({tooltipRemains: true})">
	<div class="tooltip-container">
		<button aria-labelledby="tooltip">
			<span>WCAG</span>
		</button>
		<p id="tooltip" role="tooltip" hidden>Web Content Accessibility Guidelines</p>
	</div>
</body>
```

#### Passed Example 2

This list item element causes [visible changes in content][] by presenting a menu item when [hovered][]. The menu item remains displayed, resulting in no further [visible changes in content][] to the area originally affected, even if further [visible changes in content][] happen outside this area when a submenu item is displayed.

```html
<link rel="stylesheet" type="text/css" href="test-assets/ep1s13/styles_menu.css" />
<script src="test-assets/ep1s13/scripts.js"></script>

<body onload="bindEvents({tooltipRemains: true})">
	<div>
		<ul class="tooltip-container">
			<li>menu</li>
			<div role="tooltip" hidden>
				<ul class="tooltip-container">
					<li>submenu</li>
					<div role="tooltip" hidden>
						<ul>
							<li>subsubmenu</li>
						</ul>
					</div>
				</ul>
			</div>
		</ul>
	</div>
</body>
```

### Failed

#### Failed Example 1

This button element causes [visible changes in content][] by presenting a tooltip when [hovered][]. When the mouse pointer leaves the button's boundaries the tool is removed resulting in [visible changes in content][].

```html
<link rel="stylesheet" type="text/css" href="/test-assets/ep1s13/styles.css" />
<script src="/test-assets/ep1s13/scripts.js"></script>

<body onload="bindEvents({tooltipRemains: false})">
	<div class="tooltip-container">
		<button aria-labelledby="tooltip">
			<span>WCAG</span>
		</button>
		<p id="tooltip" role="tooltip" hidden>Web Content Accessibility Guidelines</p>
	</div>
</body>
```

### Inapplicable

#### Inapplicable Example 1

This element does not cause [visible changes in content][] when [hovered][].

```html
<button>WCAG</button>
```

#### Inapplicable Example 2

This button element causes [visible changes in content][] by presenting a tooltip when [hovered][]. However, the tooltip is not adjacent neither overlaps the button.

```html
<link rel="stylesheet" type="text/css" href="/test-assets/ep1s13/stylesbad.css" />
<script src="/test-assets/ep1s13/scripts.js"></script>

<body onload="bindEvents({tooltipRemains: true})">
	<div class="tooltip-container">
		<button aria-labelledby="tooltip">
			<span>WCAG</span>
		</button>
		<p id="tooltip" role="tooltip" hidden>Web Content Accessibility Guidelines</p>
	</div>
</body>
```

#### Inapplicable Example 3

This element causes [visible changes in content][] when [hovered][] (due to default user agent styling). However, all the visible changes are inside the element's bounding box.

```html
<a href="https://www.w3.org/WAI/">WAI</a>
```

[activated]: https://html.spec.whatwg.org/#activation
[adjacent areas]: #adjacent-areas 'Definition of adjacent areas'
[area affected by visible changes]: #area-affected-visible-changes 'Definition of area affected by visible changes'
[bounding box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-border-box
[contained]: #contained-area 'Definition of contained area'
[hovered]: #hovered 'Definition of hovered'
[html document]: https://dom.spec.whatwg.org/#concept-document
[overlapping areas]: #overlapping-areas 'Definition of overlapping areas'
[sc1.4.13]: https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html 'Understanding Success Criterion 1.4.13: Content on Hover or Focus, July 24, 2020'
[visible changes in content]: #visible-changes-in-presentation-or-content 'Definition of visible changes in presentation or content'

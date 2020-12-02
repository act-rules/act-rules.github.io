---
id: ep1s13
name: Additional content triggered on hover is hoverable
rule_type: atomic
description: |
  This rule checks that any additional content that was triggered by hovering an element can be reached from that element and remains available to the user while the mouse pointer is over the element or the additional content
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

The rule applies to any element that when [hovered][] causes [content to become visible][content that becomes visible] and when it stops being [hovered][] causes the same [content to become invisible][content that becomes invisible].

## Expectation 1

The target element's [bounding box][] is [adjacent][] or [overlaps][] the [bounding box][] of the [content that becomes visible][] when the target element is [hovered][].

## Expectation 2

The [content that becomes visible][] remains [visible][] while the pointer is in the [center][] of the [bounding box][] of that content for at least 1 minute.

## Assumptions

- The user does not dismiss the content causing the changes in content by pressing a key on the keyboard. In this instance the rule will fail while [success criterion 1.4.13: Content on Hover or Focus][sc1.4.13] might be satisfied.
- The content that becomes visible does not become irrelevant. In this instance the rule will fail while [success criterion 1.4.13: Content on Hover or Focus][sc1.4.13] might be satisfied.
- This rule assumes that the additional content that becomes visible does not disappear after 1 minute of being triggered by the hovering event. If the content disappears after this time span the rule may pass but [Success Criterion 1.4.13: Content on Hover or Focus][sc1.4.13] is not satisfied. The arbitrary 1 minute time span, selected so that testing this rule would not be impractical, is not included in WCAG.

## Accessibility Support

_No accessibility support issues known._

## Background

- [Understanding Success Criterion 1.4.13: Content on Hover or Focus][sc1.4.13]
- [F95: Failure of Success Criterion 1.4.13 due to content shown on hover not being hoverable](https://www.w3.org/WAI/WCAG21/Techniques/failures/F95)

## Test Cases

### Passed

#### Passed Example 1

This button element causes [content to become visible][content that becomes visible] by presenting a tooltip when [hovered][]. The tooltip is [adjacent][] to the button element and remains displayed while the mouse pointer does not leave its boundaries.

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

This list item element causes [content to become visible][content that becomes visible] by presenting a menu item when [hovered][]. The menu item is [adjacent][] to the list item element and remains displayed while the mouse pointer does not leave its boundaries.

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

This button element causes [content to become visible][content that becomes visible] by presenting a tooltip when [hovered][]. However, the tooltip is not [adjacent][] neither [overlaps][] the button.

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

#### Failed Example 2

This button element causes [content to become visible][content that becomes visible] by presenting a tooltip when [hovered][]. The tooltip is [adjacent[] to the button element but does not remain visible when the mouse pointer is inside its boundaries.

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

This element does not cause [content to become visible][content that becomes visible] when [hovered][].

```html
<button>WCAG</button>
```

[adjacent]: #adjacent 'Definition of adjacent'
[bounding box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-border-box
[center]: #center 'Definition of center of a bounding box'
[content that becomes invisible]: #content-that-becomes-invisible 'Definition of content that becomes invisible'
[content that becomes visible]: #content-that-becomes-visible 'Definition of content that becomes visible'
[hovered]: #hovered 'Definition of hovered'
[overlaps]: #overlap 'Definition of overlap'
[sc1.4.13]: https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html 'Understanding Success Criterion 1.4.13: Content on Hover or Focus, July 24, 2020'
[visible]: #visible 'Definition of visible'
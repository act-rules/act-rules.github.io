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

The rule applies to any element that when [hovered][] causes [visible changes in content][] and for the [area affected by the changes][area affected by visible changes] all the following are true:

- the area is [adjacent][adjacent areas] or [overlaps][overlapping areas] the [bounding box][] of the target element; and
- the area is not [contained][] inside the [bounding box][] of the target element.

## Expectation

There are no [visible changes in content][] while the target element is [hovered][] or the mouse pointer remains inside the [area affected by the changes][area affected by visible changes].

## Assumptions

- The user does not dismiss the tooltip causing the changes in content by pressing a key on the keyboard. In this instance the rule will fail while [success criterion 1.4.13: Content on Hover or Focus][sc1.4.13] might be satisfied.
- The content displayed on the rectangle with the changes in content does not become irrelevant. In this instance the rule will fail while [success criterion 1.4.13: Content on Hover or Focus][sc1.4.13] might be satisfied.
- The changes in content resulting from the hovering are
- The additional content displayed on hover does not include animations. An animation would cause visible changes to the content of the page and therefore fail this rule. However, if the animation is displayed only while the mouse pointer hovers above the target element or the rectangle with the changes [success criterion 1.4.13: Content on Hover or Focus][sc1.4.13] might be satisfied.

## Accessibility Support

_No accessibility support issues known._

## Background

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
			<span aria-hidden>WCAG</span>
		</button>
		<p id="tooltip" role="tooltip" hidden>
			Web Content Accessibility Guidelines
		</p>
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
			<span aria-hidden>WCAG</span>
		</button>
		<p id="tooltip" role="tooltip" hidden>
			Web Content Accessibility Guidelines
		</p>
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
			<span aria-hidden>WCAG</span>
		</button>
		<p id="tooltip" role="tooltip" hidden>
			Web Content Accessibility Guidelines
		</p>
	</div>
</body>
```

#### Inapplicable Example 3

This element causes [visible changes in content][] when [hovered][] (due to default user agent styling). However, all the visible changes are inside the element's bounding box.

```html
<a href="https://www.w3.org/WAI/">WAI</a>
```


[adjacent areas]: #adjacent-areas 'Definition of adjacent areas'
[area affected by visible changes]: #area-affected-visible-changes 'Definition of area affected by visible changes'
[bounding box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-border-box
[contained]: #contained-area 'Definition of contained area'
[hovered]: #hovered 'Definition of hovered'
[overlapping areas]: #overlapping-areas 'Definition of overlapping areas'
[sc1.4.13]: https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html 'Understanding Success Criterion 1.4.13: Content on Hover or Focus, July 24, 2020'
[visible changes in content]: #visible-changes-in-content 'Definition of visible changes in content'

---
id: oj04fd
name: Element in sequential focus order has visible focus
rule_type: atomic
description: |
  This rule checks that each element in sequential focus order has some visible focus indication.
accessibility_requirements:
  wcag20:2.4.7: # Focus Visible (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag22:2.4.11: # Focus Appearance (Minimum) (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag22:2.4.12: # Focus Appearance (Enhanced) (AAA)
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
---

## Applicability

The rule applies to any element which is part of [sequential focus navigation][] in a document with at least two [focusable][] elements.

## Expectation 1

For each target element, there is at least one pixel inside the [scrolling area][] of the [viewport][] whose color is different when the element is [focused][] from when it is not.

## Expectation 2

For each target element and each other [focusable][] element in the document, the set of pixels whose color is different when the test target is [focused][] and when it is not, and the set of pixels whose color is different when the other element is [focused][] and when it is not, are different.

**Note:** Some pixels might be the same, but the sets have to be unique for each test target.

## Assumptions

This rule assumes that documents with only one focusable element automatically satisfies [Success Criterion 2.4.7 Focus Visible][sc247], as stated in [Understanding Success Criterion 2.4.7: Focus Visible][usc247]: "if there is only one keyboard actionable control on the screen, the success criterion would be met".

This rule assumes that it is not possible to satisfy [Success Criterion 2.4.7 Focus Visible][sc247] if two or more focusable elements have the exact same focus indication area. If this is not the case, it is possible to fail Expectation 2 while still satisfying [Success Criterion 2.4.7 Focus Visible][sc247].

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

Default styling in most user agents is providing perfectly valid focus indication for focusable elements (even those that are not focusable by default), as shown in Passed Examples 1 and 2. Many examples in this rule need to **remove** that indicator in order to illustrate various situations. This is bad practice and should normally be avoided.

WCAG does not have any requirement of how big or small focus indicator should be, or how far or near from the [focusable][] element it should be. Thus it is possible to pass this rule and [Success Criterion 2.4.7 Focus Visible][sc247] with barely perceptible changes at the other end of the page. That would however still be an accessibility issue. WCAG 2.2 includes [Success Criterion 2.4.11 Focus Appearance (Minimum)][sc2411] and [Success Criterion 2.4.12 Focus Appearance (Enhanced)][sc2412] specifying how big the focus indicator should be. All Examples in this rule avoid focus indications that are too small, too far away, too weak, …

- [Success Criterion 2.4.7 Focus Visible][sc247]
- [Success Criterion 2.4.11 Focus Appearance (Minimum)][sc2411]
- [Success Criterion 2.4.12 Focus Appearance (Enhanced)][sc2412]
- [Understanding Success Criterion 2.4.7: Focus Visible][usc247]
- [Understanding Success Criterion 2.4.11: Focus Appearance (Minimum)][usc2411]
- [Understanding Success Criterion 2.4.12: Focus Appearance (Enhanced)][usc2412]

## Test Cases

### Passed

#### Passed Example 1

The first [focusable][] element is part of [sequential focus navigation][]. The set of pixels that change color when it is [focused][] (due to default User Agent's styling) is unique. The second [focusable][] element is not applicable because it has been removed from [sequential focus navigation][] due to the negative value for the `tabindex` attribute. Its presence is nonetheless enough to make the first one applicable.

```html
<a href="https://act-rules.github.io/">ACT rules</a> <button tabindex="-1">Dummy button</button>
```

#### Passed Example 2

The first [focusable][] element is part of [sequential focus navigation][]. The set of pixels that change color when it is [focused][] (due to default User Agent's styling) is unique. The second [focusable][] element is not applicable because it has been removed from [sequential focus navigation][] due to the negative value for the `tabindex` attribute. Its presence is nonetheless enough to make the first one applicable.

```html
<span tabindex="0">Act rules</span> <button tabindex="-1">Dummy button</button>
```

#### Passed Example 3

The first [focusable][] element, is part of [sequential focus navigation][]. The set of pixels that change color when it is [focused][] (the border of the `span` element) is unique (it does not change when any other element is [focused][]). The second [focusable][] element is also part of [sequential focus navigation][] and has a unique focus indicator due to default styling.

```html
<link rel="stylesheet" href="../test-assets/focus-visible/styles.css" />
<script src="../test-assets/focus-visible/script.js"></script>

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
<button tabindex="-1">Dummy button</button>
```

#### Passed Example 4

For each of these three [focusable][] elements, the set of pixels changing color when it is [focused][] is unique. For the element with `id` "wcag", each of these pixels also change color when another element is [focused][], but they do not all change color for the same other element. Thus, the set of pixels changing color is also unique for this one.

```html
<link rel="stylesheet" href="../test-assets/focus-visible/styles.css" />
<script src="../test-assets/focus-visible/script.js"></script>

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
	href="https://www.w3.org/TR/WCAG21/"
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

### Failed

#### Failed Example 1

The first [focusable][] element does not have any pixel changing color when it is [focused][] because the default styling has been overwritten by a style that removes the outline.

```html
<link rel="stylesheet" href="../test-assets/focus-visible/styles.css" />

<a class="no-focus-default" href="https://act-rules.github.io/">ACT rules</a>
<button tabindex="-1">Dummy button</button>
```

#### Failed Example 2

Both of these [focusable][] elements have the exact same set of pixels changing color when they
are [focused][].

```html
<link rel="stylesheet" href="../test-assets/focus-visible/styles.css" />
<script src="../test-assets/focus-visible/script.js" />

<a
	id="act"
	class="no-focus-default"
	onfocus="toggleActivation('indicator')"
	onblur="toggleActivation('indicator')"
	href="https://act-rules.github.io/"
	>ACT rules</a
>
<span id="indicator" class="indicator solid"></span>
<a
	id="wcag"
	class="no-focus-default"
	onfocus="toggleActivation('indicator')"
	onblur="toggleActivation('indicator')"
	href="https://www.w3.org/TR/WCAG21/"
	>WCAG</a
>
```

### Inapplicable

#### Inapplicable Example 1

This document contains no [focusable][] element.

```html
<span>ACT rules</span>
```

#### Inapplicable Example 2

This document contains only one [focusable][] element.

```html
<a href="https://act-rules.github.io/">ACT rules</a>
```

#### Inapplicable Example 3

None of the [focusable][] elements in this document is part of [sequential focus navigation][].

```html
<a tabindex="-1" href="https://act-rules.github.io/">ACT rules</a>
<a tabindex="-1" href="https://www.w3.org/TR/WCAG21/">WCAG</a>
```

[focusable]: #focusable 'Definition of Focusable'
[focused]: #focused 'Definition of Focused'
[sc247]: https://www.w3.org/TR/WCAG21/#focus-visible 'Success Criterion 2.4.7 Focus Visible'
[sc2411]: https://www.w3.org/TR/WCAG22/#focus-appearance-minimum 'Success Criterion 2.4.11 Focus Appearance (Minimum)'
[sc2412]: https://www.w3.org/TR/WCAG22/#focus-appearance-enhanced 'Success Criterion 2.4.12 Focus Appearance (Enhanced)'
[scrolling area]: https://drafts.csswg.org/cssom-view/#scrolling-area 'CSS specification of Scrolling Area'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML specification of Sequential focus navigation'
[usc247]: https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html 'Understanding Success Criterion 2.4.7: Focus Visible'
[usc2411]: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum.html 'Understanding Success Criterion 2.4.11: Focus Appearance (Minimum)'
[usc2412]: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced.html 'Understanding Success Criterion 2.4.12: Focus Appearance (Enhanced)'
[viewport]: https://drafts.csswg.org/css2/#viewport 'CSS definition of Viewport'

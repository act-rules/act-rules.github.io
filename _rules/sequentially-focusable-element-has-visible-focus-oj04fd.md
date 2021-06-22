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
input_aspects:
  - CSS styling
  - DOM tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
---

## Applicability

The rule applies to any element which is part of [sequential focus navigation][] in an [HTML document](https://html.spec.whatwg.org/#document) with at least two elements in its [sequential focus navigation order][sequential focus navigation].

## Expectation

For each target element, there is at least one device pixel inside the [scrolling area][] of the [viewport][] whose [HSL color value](https://www.w3.org/TR/css-color-3/#hsl-color) is different when the element is [focused][] from when it is not.

## Assumptions

This rule assumes that documents with only one focusable element automatically satisfy [Success Criterion 2.4.7 Focus Visible][sc247], as stated in [Understanding Success Criterion 2.4.7: Focus Visible][usc247]: "if there is only one keyboard actionable control on the screen, the success criterion would be met".

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

Default styling in most user agents is providing perfectly valid focus indication for focusable elements (even those that are not focusable by default), as shown in Passed Examples 1 and 2. Many examples in this rule need to **remove** that indicator in order to illustrate various situations. This is bad practice and should normally be avoided.

WCAG does not have any requirement of how big or small focus indicator should be, or how far or near from the [focusable][] element it should be. Thus it is possible to pass this rule and [Success Criterion 2.4.7 Focus Visible][sc247] with barely perceptible changes at the other end of the page. That would however still be an accessibility issue. WCAG 2.2 includes [Success Criterion 2.4.11 Focus Appearance (Minimum)][sc2411] and [Success Criterion 2.4.12 Focus Appearance (Enhanced)][sc2412] specifying how big the focus indicator should be. All Examples in this rule avoid focus indications that are too small, too far away, have low contrast, …

WCAG has no clear requirement of unicity of the focus indicator for each [focusable][] element. Therefore, this rule can pass even if several focus indicators are identical. Such a situation may nonetheless cause confusion and all Examples in this rule avoid it.

- [Success Criterion 2.4.7 Focus Visible][sc247]
- [Success Criterion 2.4.11 Focus Appearance (Minimum)][sc2411]
- [Success Criterion 2.4.12 Focus Appearance (Enhanced)][sc2412]
- [Understanding Success Criterion 2.4.7: Focus Visible][usc247]
- [Understanding Success Criterion 2.4.11: Focus Appearance (Minimum)][usc2411]
- [Understanding Success Criterion 2.4.12: Focus Appearance (Enhanced)][usc2412]

Due to the Applicability of this rule, test cases must have at least two elements in their [sequential focus navigation order][sequential focus navigation]. In order to keep the test case focused on one aspect of the rule, most of them include a button labeled "Dummy button" whose sole purpose is to make the other element applicable. This dummy button is passing the rule (due to default User Agent's styling) for the Passed test cases, and failing it for the Failed test cases; and it is never mentioned further in the test cases descriptions.

## Test Cases

### Passed

#### Passed Example 1

The first [focusable][] element is part of [sequential focus navigation][]. It has an outline when it is [focused][] (due to default User Agent's styling). The outline has a different `hsl` value compared to the `hsl` value of the background over which the outline appears (the exact values depend on the type of browser being used).

```html
<a href="https://act-rules.github.io/">ACT rules</a> <button>Dummy button</button>
```

#### Passed Example 2

The first [focusable][] element is part of [sequential focus navigation][]. It has an outline when it is [focused][] (due to default User Agent's styling). The outline has a different `hsl` value compared to the `hsl` value of the background over which the outline appears (the exact values depend on the type of browser being used).

```html
<span tabindex="0">Act rules</span> <button>Dummy button</button>
```

#### Passed Example 3

The first [focusable][] element is part of [sequential focus navigation][]. Its parent `span` puts a border around it when it is [focused][] (the border of the `span` element). The border's `hsl` value (`hsl(240, 100%, 25%)`) is different to the `hsl` value of the background (`hsl(0, 0%, 100%)`) over which the border appears.

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
<button>Dummy button</button>
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
<link rel="stylesheet" href="/test-assets/focus-visible-oj04fd/styles.css" />

<a class="no-focus-default" href="https://act-rules.github.io/">ACT rules</a>
<button class="no-focus-default">Dummy button</button>
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

None of the [focusable][] elements in this document are part of [sequential focus navigation][].

```html
<a tabindex="-1" href="https://act-rules.github.io/">ACT rules</a>
<a tabindex="-1" href="https://www.w3.org/TR/WCAG21/">WCAG</a>
```

#### Inapplicable Example 4

The [sequential focus navigation order][sequential focus navigation] of this document contains only one element.

```html
<a href="https://act-rules.github.io/">ACT rules</a> <a tabindex="-1" href="https://www.w3.org/TR/WCAG21/">WCAG</a>
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

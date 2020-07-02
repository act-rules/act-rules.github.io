---
id: oj04fd
name: Element in sequential focus order has visible focus
rule_type: atomic
description: |
  This rule checks that each element in sequential focus order has some visible focus indication.
accessibility_requirements:
  wcag20:2.4.7: # Focus Visible (A)
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

The rule applies to any element which is part of [sequential focus navigation][] in a document with several [focusable][] elements.

## Expectation 1

For each target element, there is at least one pixel whose color is different when the element is [focused][] and when it is not.

## Expectation 2

For each target element, and each other [focusable][] element in the document, the set of pixels whose color is different when the test target is [focused][] and when it is not, and the set of pixels whose color is different when the other element is [focused][] and when it is not, are different.

**Note:** Some of the pixels might be the same, but the sets have to be unique for each test target.

## Assumptions

_There are currently no assumptions._

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

WCAG does not have any requirement of how big or small focus indicator should be, or how far or near from the [focusable][] element it should be. Thus it is possible to pass this rule and [Success Criterion 2.4.7 Focus Visible][sc247] with barely perceptible changes at the other end of the page. That would however still be an accessibility issue. WCAG 2.2 is working on an extended Success Criterion 2.4.11 specifying how big the focus indicator should be. See the [Understanding Success Criterion 2.4.11: Focus Visible (Enhanced)][usc2411] proposal. All Examples in this rule are voluntarily avoiding very bad practices and thus avoid focus indications that are too small, too far away, too weak, …

WCAG [Understanding Success Criterion 2.4.7: Focus Visible][usc247] explicitly states that "if there is only one keyboard actionable control on the screen, the success criterion would be met". Therefore, this rule only consider documents with several [focusable][] elements.

- [Success Criterion 2.4.7 Focus Visible][sc247]
- [Understanding Success Criterion 2.4.7: Focus Visible][usc247]
- [Understanding Success Criterion 2.4.11: Focus Visible (Enhanced) (WCAG 2.2 proposal)][usc2411]

## Test Cases

**Note:** Default styling in most user agents is providing perfectly valid focus indication for focusable elements (even those that are not focusable by default), as shown in Passed Example 1. Many examples in this rule need to **remove** that indicator in order to illustrate various situations. This is bad practice and should normally be avoided.

### Passed

#### Passed Example 1

All the [focusable][] elements in this document are part of [sequential focus navigation][]. The set of pixels that change color when they are [focused][] (due to default User Agent's styling) is unique for each of them.

```html
<a href="https://act-rules.github.io/">ACT rules</a><br />
<form>
	<input type="text" name="address" placeholder="address" /><br />
	<input type="checkbox" id="checkbox" /><label for="checkbox">I love WCAG!</label><br />

	<label for="principles">Select a WCAG principle:</label>
	<select id="principles">
		<option value="perceivable">Perceivable</option>
		<option value="operable">Operable</option>
		<option value="understandable">Understandable</option>
		<option value="robust">Robust</option> </select
	><br />

	<label for="level">Select a compliance level:</label>
	<input type="radio" name="level" value="A" id="a" /> <label for="a">A</label><br />
	<input type="radio" name="level" value="AA" id="aa" /> <label for="aa">AA</label><br />
	<input type="radio" name="level" value="AAA" id="aaa" /> <label for="aaa">AAA</label>
</form>
<button type="submit">Submit</button><br />
<span tabindex="0">Act rules</span>
```

#### Passed Example 2

The first [focusable][] element is part of [sequential focus navigation]. The set of pixels that change color when it is [focused][] (due to default User Agent's styling) is unique. The second [focusable][] element is not applicable because it has been removed from [sequential focus navigation][] due to the `tabindex` attribute. Its presence is nonetheless enough to make the first one applicable.

```html
<a href="https://act-rules.github.io/">ACT rules</a> <button tabindex="-1">Dummy button</button>
```

#### Passed Example 3

The first [focusable][] element, is part of [sequential focus navigation][]. The set of pixels that change color when it is [focused][] (the borrder of the `span` element) is unique (it does not change when any other element is [focused][]).

```html
<link rel="stylesheet" href="../test-assets/focus-visible/styles.css" />
<script src="../test-assets/focus-visible/script.js" />

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

For each of these three [focusable][] elements, the set of pixels changing color when it is [focused][] is unique. For the element with `id` "wcag", each of these pixels also change color when another element is [focused][], but they do not all change color for the same other element. Thus, the set of pixels changing color is also unique for this one.

```html
<link rel="stylesheet" href="../test-assets/focus-visible/styles.css" />
<script src="../test-assets/focus-visible/script.js" />

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

None of these [focusable][] elements have any pixel changing color when they are [focused][] because the default styling has been overwritten.

```html
<a class="no-focus-default" href="https://act-rules.github.io/">ACT rules</a>
<a class="no-focus-default" href="https://www.w3.org/TR/WCAG21/">WCAG</a>
```

#### Failed Example 2

The first [focusable][] element is part of [sequential focus navigation][] and has no pixel changing color when it is [focused][]. The second [focusable][] element is not applicable because it has been removed from [sequential focus navigation][] due to the `tabindex` attribute. Its presence is nonetheless enough to make the first one applicable.

```html
<a class="no-focus-default" href="https://act-rules.github.io/">ACT rules</a>
<button tabindex="-1">Dummy button</button>
```

#### Failed Example 3

Both of these [focusable][] elements have the exact same set of pixels changing color when they are [focused][].

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
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML specification of Sequential focus navigation'
[usc247]: https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html 'Understanding Success Criterion 2.4.7: Focus Visible'
[usc2411]: https://w3c.github.io/wcag/understanding/focus-visible-enhanced.html 'Understanding Success Criterion 2.4.11: Focus Visible (Enhanced) (WCAG 2.2 proposal)'

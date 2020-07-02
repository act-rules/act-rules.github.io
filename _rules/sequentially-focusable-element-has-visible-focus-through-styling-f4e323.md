---
id: f4e323
name: Element in sequential focus order has visible focus though styling
rule_type: atomic
description: |
  This rule checks that each element in sequential focus order has some visible focus indication through styling of elements in close proximity.
accessibility_requirements:
input_aspects:
  - CSS styling
  - DOM tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
---

## Applicability

The rule applies to any element which is part of [sequential focus navigation][].

## Expectation

For each target element, there exists a set of [focus indicators][focus indicator] which are not all also [focus indicators][focus indicator] for another [focusable][] element (the same for all the indicators).

## Assumptions

This rule assumes that the DOM proximity of the [focus indicator][] and the elements it relates to results in visual proximity of the elements. The definition of [focus indicator][] is based on the tree order but users are likely to perceive relationship based on position on the rendered page. If these are different, the rule may produce incorrect results. Notably, if styling is used to mimic a table layout where focus indicators are located in the same "column", the definition won't detect these as [focus indicators][focus indicator] and the rule will produce incorrect results. Similarly, positioning can be used to "move" elements that are far away in the DOM and render them in close proximity. These won't be detected as [focus indicators][focus indicator] but could be perceived as such, thus the rule would produce incorrect result. Note that

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

WCAG does not have any requirement of how big or small focus indicator should be, and it is possible to pass [Success Criterion 2.4.7 Focus Visible][sc247] with barely perceptible changes that would thus still be an accessibility issue. This rule is a stricter check considering that in order to be useful, the focus indicator has to be in close logical (DOM order) proximity of the [focusable][] element. Therefore, it does not map to [Success Criterion 2.4.7 Focus Visible][sc247] and is only best practice. Additionally, WCAG 2.2 is working on an extended Success Criterion 2.4.11 specifying how big the focus indicator should be. See the [Understanding Success Criterion 2.4.11: Focus Visible (Enhanced)][usc2411] proposal. This rule has no specification on how big the focus indicator should be, thus it is possible to pass this rule without satisfying the proposed Success Criterion 2.4.11.

This rule considers that the [focus indicator][] should be located in proximity with the related [focusable][] element. Thus, a page with, say, a line of circles at the top lighting up to indicate that various elements have focus (and no other indication) would fail this rule but could arguably not be an accessibility issue (and would certainly satisfy [Success Criterion 2.4.7 Focus Visible][sc247]). Note that doing so is nonetheless likely to be an accessibility issue as it would become difficult to remember which indicator corresponds to which element.

This rule considers that the same set of [focus indicators][focus indicator] cannot be to indicate focus for different [focusable][] elements in different ways. Thus, a page with, say, a circle with filling to indicate focus of one element and border to indicate focus of another element would fail this rule but could arguably not be an accessibility issue (and would certainly satisfy [Success Criterion 2.4.7 Focus Visible][sc247]). Note that doing so is nonetheless likely to be an accessibility issue as it would become difficult to remember which indication corresponds to which element.

WCAG [Understanding Success Criterion 2.4.7: Focus Visible][usc247] explicitly states that "if there is only one keyboard actionable control on the screen, the success criterion would be met". However, a page with a single [focusable][] element will still benefit from having an indication whether it is focused or blurred. Therefore this rule also consider [focusable][] elements alone on a page.

- [Success Criterion 2.4.7 Focus Visible][sc247]
- [Understanding Success Criterion 2.4.7: Focus Visible][usc247]
- [Understanding Success Criterion 2.4.11: Focus Visible (Enhanced) (WCAG 2.2 proposal)][usc2411]

## Test Cases

**Note:** Default styling in most user agents is providing perfectly valid focus indication for focusable elements (even those that are not focusable by default), as shown in Passed Example 1. Many examples in this rule need to **remove** that indicator in order to illustrate various situations. This is bad practice and should normally be avoided.

### Passed

#### Passed Example 1

All the [focusable][] elements in this document are part of [sequential focus navigation][]. They are [focus indicator][] for themselves as default User Agent's styling makes the focus visible (this may depend on user agents). They are not [focus indicator][] for any other [focusable][] element.

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

The first [focusable][] element is part of [sequential focus navigation] and is a [focus indicator][] for itself due to default User Agent's styling. The second [focusable][] element is not applicable because it has been removed from [sequential focus navigation][] due to the `tabindex` attribute. Its presence is nonetheless enough to make the first one applicable.

```html
<a href="https://act-rules.github.io/">ACT rules</a> <button tabindex="-1">Dummy button</button>
```

#### Passed Example 3

The first [focusable][] element, part of [sequential focus navigation][] due to its `tabindex`, has a [focus indicator][]. The element with `id` "indicator" is a [focus indicator][] for it (due to the (**neighbors**) condition).

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

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

The [focusable][] `p` element is a [potential focus indicator][] for itself despite being an ancestor of another [focusable][] element (the link), because that other [focusable][] is a descendant of the `p` element. Thus, the `p` element matches the (**ancestor**) condition. Default styling makes it a [focus indicator][] for itself and no other [focusable][] element. Similarly, the `a` element is a [focus indicator][] for itself.

```html
<p tabindex="0">
	<a href="https://act-rules.github.io/">ACT rules</a>
</p>
```

#### Passed Example 5

The first [focusable][] element has a [focus indicator][]. The element with `id` "indicator" is a [focus indicator][] for it (due to the (**neighbors**) condition), and for no other.

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

<span id="indicator" class="indicator solid"></span>
<a
	id="act"
	class="no-focus-default"
	onfocus="toggleActivation('indicator')"
	onblur="toggleActivation('indicator')"
	href="https://act-rules.github.io/"
	>ACT rules</a
>
<button>Dummy button</button>
```

#### Passed Example 6

Both these [focusable][] elements have a [focus indicator][]. The element with `id` "indicator-wcag" is a [potential focus indicator][] for both of them, but a [focus indicator][] only for the element with "id` "wcag".

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

<span id="indicator-act" class="indicator solid"></span>
<a
	id="act"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-act')"
	onblur="toggleActivation('indicator-act')"
	href="https://act-rules.github.io/"
	>ACT rules</a
>
<span id="indicator-wcag" class="indicator solid"></span>
<a
	id="wcag"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-wcag')"
	onblur="toggleActivation('indicator-wcag')"
	href="https://www.w3.org/TR/WCAG21/"
	>WCAG</a
>
```

#### Passed Example 7

Each of these three [focusable][] elements has a set of [focus indicators][focus indicator] which are not all [focus indicator][] for the same other element. The element with `id` "wcag" has two [focus indicators][focus indicator] (with `id`s "indicator-wcag" and "indicator-w3c"). Both of them are also [focus indicator][] for another [focusable][] element, but each for a different element. Thus, the set composed of these two [focus indicator][] passes the expectation.

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

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

#### Passed Example 8

Both these [focusable][] elements have a [focus indicator][] in the cell above their, due to the (**table neighbors**) condition.

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

<table>
	<tr>
		<td><span id="indicator-act" class="indicator solid"></span></td>
		<td><span id="indicator-wcag" class="indicator solid"></span></td>
	</tr>
	<tr>
		<td>
			<a
				id="act"
				class="no-focus-default"
				onfocus="toggleActivation('indicator-act')"
				onblur="toggleActivation('indicator-act')"
				href="https://act-rules.github.io/"
				>ACT rules</a
			>
		</td>
		<td>
			<a
				id="wcag"
				class="no-focus-default"
				onfocus="toggleActivation('indicator-wcag')"
				onblur="toggleActivation('indicator-wcag')"
				href="https://www.w3.org/TR/WCAG21/"
				>WCAG</a
			>
		</td>
	</tr>
</table>
```

### Failed

#### Failed Example 1

None of these [focusable][] elements have a [focus indicator][] because the default styling has been overwritten.

```html
<a class="no-focus-default" href="https://act-rules.github.io/">ACT rules</a>
<a class="no-focus-default" href="https://www.w3.org/TR/WCAG21/">WCAG</a>
```

#### Failed Example 2

The first [focusable][] element is part of [sequential focus navigation][] and has no [focus indicator][]. The second [focusable][] element is not applicable because it has been removed from [sequential focus navigation][] due to the `tabindex` attribute. Its presence is nonetheless enough to make the first one applicable.

```html
<a class="no-focus-default" href="https://act-rules.github.io/">ACT rules</a>
<button tabindex="-1">Dummy button</button>
```

#### Failed Example 3

None of these [focusable][] elements have a [focus indicator][]. The `p` element is not a [potential focus indicator][] for any of the `span` elements; it does not match the (**ancestor**) due to being ancestor to both of them.

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

<p id="indicator border">
	<a
		id="act"
		class="no-focus-default"
		onfocus="toggleActivation('indicator')"
		onblur="toggleActivation('indicator')"
		href="https://act-rules.github.io/"
		>ACT rules</span
	>
	<a id="wcag" class="no-focus-default" href="https://www.w3.org/TR/WCAG21/">WCAG</a>
</p>
```

#### Failed Example 4

None of these [focusable][] elements have a [focus indicator][]. The element with `id` "indicator-wcag" is not a [potential focus indicator][] for the element with `id` "wcag"; it does not match the (**neighbors**) condition due to the presence of another [focusable][] element between them.

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

<span id="indicator-wcag" class="indicator solid"></span>
<a id="act" class="no-focus-default" href="https://act-rules.github.io/">ACT rules</a>
<a
	id="wcag"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-wcag')"
	onblur="toggleActivation('indicator-wcag')"
	href="https://www.w3.org/TR/WCAG21/"
	>WCAG</a
>
```

#### Failed Example 5

None of these [focusable][] elements have a set of [focus indicators][focus indicator] which are not all also [focus indicator][] for another element. The element with `id` "indicator" is a [focus indicator][] for both of them and they have no other [focus indicator][].

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

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

#### Failed Example 6

None of these [focusable][] elements have a [focus indicator][]. The element with `id` "indicator-wcag" is not a [potential focus indicator][] for the element with `id` "wcag" due to the presence of another focusable element in the same column between them.

```html
<table>
	<tr>
		<td><span id="indicator-wcag" class="indicator solid"></span></td>
	</tr>
	<tr>
		<td><a id="act" class="no-focus-default" href="https://act-rules.github.io/">ACT rules</a></td>
	</tr>
	<tr>
		<td>
			<a
				id="wcag"
				class="no-focus-default"
				onfocus="toggleActivation('indicator-wcag')"
				onblur="toggleActivation('indicator-wcag')"
				href="https://www.w3.org/TR/WCAG21/"
				>WCAG</a
			>
		</td>
	</tr>
</table>
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
[focus indicator]: #focus-indicator 'Definition of Focus Indicator'
[potential focus indicator]: #potential-focus-indicator 'Definition of Potential focus Indicator'
[sc247]: https://www.w3.org/TR/WCAG21/#focus-visible 'Success Criterion 2.4.7 Focus Visible'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML specification of Sequential focus navigation'
[usc247]: https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html 'Understanding Success Criterion 2.4.7: Focus Visible'
[usc2411]: https://w3c.github.io/wcag/understanding/focus-visible-enhanced.html 'Understanding Success Criterion 2.4.11: Focus Visible (Enhanced) (WCAG 2.2 proposal)'

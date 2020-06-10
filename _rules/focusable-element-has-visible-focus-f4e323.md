---
id: f4e323
name: Focusable element has visible focus
rule_type: atomic
description: |
  This rule checks that each focusable element has visible focus indication
accessibility_requirements: # Remove whatever is not applicable
  wcag20:2.4.7: # Focus Visible (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: satisfied
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

The definition of [focus indicator][] is based on the tree order but users are likely to perceive relationship based on position on the rendered page. If these are different, the rule may produce incorrect results. Notably, if styling is used to mimic a table layout where focus indicators are located in the same "column", the definition won't detect these as [focus indicators][focus indicator] and the rule will produce incorrect results.

## Accessibility Support

WCAG does not have any requirement of how big or small focus indicator should be and it is possible to pass this rule and [Success Criterion 2.4.7: Focus Visible][sc247] with barely perceptible changes that would thus still be an accessibility issue. WCAG 2.2 is working on an extended Success Criterion 2.4.11 specifying how big the focus indicator should be. See the [Understanding Success Criterion 2.4.11: Focus Visible (Enhanced)][usc2411] proposal.

## Background

- [Success Criterion 2.4.7: Focus Visible][sc247]
- [Understanding Success Criterion 2.4.7: Focus Visible][usc247]
- [Understanding Success Criterion 2.4.11: Focus Visible (Enhanced) (WCAG 2.2 proposal)][usc2411]

## Test Cases

**Note:** Default styling in most user agents is providing perfectly valid focus indication for focusable elements (even those that are not focusable by default), as shown in Passed Example 1. Many examples in this rule need to **remove** that indicator in order to illustrate various situations. This is bad practice and should normally be avoided.

### Passed

#### Passed Example 1

All the [focusable][] elements in this document are [focus indicator][] for themselves as default User Agent's styling makes the focus visible (this depends on user agents). They are not [focus indicator][] for any other [focusable][] element.

**Note to reviewers:** The default blinking cursor of focused `<input type="text" />` is not a [distinguishing style][distinguishing styles]. Thus, the rule currently fail on that element, which is clearly not good. I am not sure how to handle that visual cue, quite clearly by adding something to the [focus indicator][] definition, but not sure what ("blinking cursor" seems a bit too specific…)

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

This [focusable][] element has a [focus indicator][]. The element with `id` "indicator" is a [focus indicator][] for it (due to the (**isolating common ancestor**) condition).

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

<span id="indicator" class="border">
	<span
		id="act"
		class="no-focus-default"
		onfocus="toggleActivation('indicator')"
		onblur="toggleActivation('indicator')"
		tabindex="0"
		>ACt rules</span
	>
</span>
```

#### Passed Example 3

This [focusable][] `p` element is a [potential focus indicator][] for itself despite being an ancestor of another [focusable][] element (the link), because that other [focusable][] is a descendant of the `p` element. Thus, the `p` element matches the (**isolating common ancestor**) condition. Default styling makes it a [focus indicator][] for itself and no other [focusable][] element. Similarly, the `a` element is a [focus indicator][] for itself.

```html
<p tabindex="0">
	<a href="https://act-rules.github.io/">ACT rules</a>
</p>
```

#### Passed Example 4

This [focusable][] element has a [focus indicator][]. The element with `id` "indicator" is a [focus indicator][] for it (due to the (**neighbors**) condition), and for no other.

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

<span id="indicator" class="indicator solid"></span>
<span
	id="act"
	class="no-focus-default"
	onfocus="toggleActivation('indicator')"
	onblur="toggleActivation('indicator')"
	tabindex="0"
	>ACT rules</span
>
```

#### Passed Example 5

Both these [focusable][] elements have a [focus indicator][]. The element with `id` "indicator-wcag" is a [potential focus indicator][] for both of them, but a [focus indicator][] only for the element with "id` "wcag".

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

<span id="indicator-act" class="indicator solid"></span>
<span
	id="act"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-act')"
	onblur="toggleActivation('indicator-act')"
	tabindex="0"
	>ACT rules</span
>
<span id="indicator-wcag" class="indicator solid"></span>
<span
	id="wcag"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-wcag')"
	onblur="toggleActivation('indicator-wcag')"
	tabindex="0"
	>WCAG</span
>
```

#### Passed Example 6

Each of these three [focusable][] elements has a set of [focus indicators][focus indicator] which are not all [focus indicator][] for the same other element. The element with `id` "wcag" has two [focus indicators][focus indicator] (with `id`s "indicator-wcag" and "indicator-w3c"). Both of them are also [focus indicator][] for another [focusable][] element, but each for a different element. Thus, the set composed of these two [focus indicator][] passes the expectation.

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

<span id="indicator-act" class="indicator solid"></span>
<span
	id="act"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-act'); toggleActivation('indicator-wcag')"
	onblur="toggleActivation('indicator-act'); toggleActivation('indicator-wcag')"
	tabindex="0"
	>ACT rules</span
>
<span id="indicator-wcag" class="indicator solid"></span>
<span
	id="wcag"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-wcag'); toggleActivation('indicator-w3c')"
	onblur="toggleActivation('indicator-wcag'); toggleActivation('indicator-w3c')"
	tabindex="0"
	>WCAG</span
>
<span id="indicator-w3c" class="indicator solid"></span>
<span
	id="w3c"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-w3c'); toggleActivation('indicator-final')"
	onblur="toggleActivation('indicator-w3c'); toggleActivation('indicator-final')"
	tabindex="0"
	>WCAG</span
>
<span id="indicator-final" class="indicator solid"></span>
```

#### Passed Example 7

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
			<span
				id="act"
				class="no-focus-default"
				onfocus="toggleActivation('indicator-act')"
				onblur="toggleActivation('indicator-act')"
				tabindex="0"
				>ACT rules</span
			>
		</td>
		<td>
			<span
				id="wcag"
				class="no-focus-default"
				onfocus="toggleActivation('indicator-wcag')"
				onblur="toggleActivation('indicator-wcag')"
				tabindex="0"
				>WCAG</span
			>
		</td>
	</tr>
</table>
```

### Failed

#### Failed Example 1

This [focusable][] element has no [focus indicator][] because the default styling has been overwritten.

```html
<span class="no-focus-default" tabindex="0">ACT rules</span>
```

#### Failed Example 2

None of these [focusable][] elements have a [focus indicator][]. The `p` element is not a [potential focus indicator][] for any of the `span` elements; it does not match the (**isolating common ancestor**) due to being ancestor to both of them.

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

<p id="indicator border">
	<span
		id="act"
		class="no-focus-default"
		onfocus="toggleActivation('indicator')"
		onblur="toggleActivation('indicator')"
		tabindex="0"
		>ACT rules</span
	>
	<span id="wcag" class="no-focus-default" tabindex="0">WCAG</span>
</p>
```

#### Failed Example 3

None of these [focusable][] elements have a [focus indicator][]. The element with `id` "indicator-wcag" is not a [potential focus indicator][] for the element with `id` "wcag"; it does not match the (**neighbors**) condition due to the presence of another [focusable][] element between them.

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

<span id="indicator-wcag" class="indicator solid"></span>
<span id="act" class="no-focus-default" tabindex="0">ACT rules</span>
<span
	id="wcag"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-wcag')"
	onblur="toggleActivation('indicator-wcag')"
	tabindex="0"
	>WCAG</span
>
```

#### Failed Example 4

None of these [focusable][] elements have a [focus indicator][] which is not also [focus indicator][] for another element. The element with `id` "indicator" is a [focus indicator][] for both of them and they have no other [focus indicator][].

```html
<link rel="stylesheet" href="test-assets/focus-visible-f4e323/styles.css" />
<script src="test-assets/focus-visible-f4e323/script.js" />

<span
	id="act"
	class="no-focus-default"
	onfocus="toggleActivation('indicator')"
	onblur="toggleActivation('indicator')"
	tabindex="0"
	>ACT rules</span
>
<span id="indicator" class="indicator solid"></span>
<span
	id="wcag"
	class="no-focus-default"
	onfocus="toggleActivation('indicator')"
	onblur="toggleActivation('indicator')"
	tabindex="0"
	>WCAG</span
>
```

#### Failed Example 5

None of these [focusable][] elements have a [focus indicator][]. The element with `id` "indicator-wcag" is not a [potential focus indicator][] for the element with `id` "wcag" due to the presence of another focusable element in the same column between them.

```html
<table>
	<tr>
		<td><span id="indicator-wcag" class="indicator solid"></span></td>
	</tr>
	<tr>
		<td><span id="act" class="no-focus-default" tabindex="0">ACT rules</span></td>
	</tr>
	<tr>
		<td>
			<span
				id="wcag"
				class="no-focus-default"
				onfocus="toggleActivation('indicator-wcag')"
				onblur="toggleActivation('indicator-wcag')"
				tabindex="0"
				>WCAG</span
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

[distinguishing styles]: #distinguishing-styles 'Definition of Distinguishing styles'
[focusable]: #focusable 'Definition of Focusable'
[focus indicator]: #focus-indicator 'Definition of Focus Indicator'
[potential focus indicator]: #potential-focus-indicator 'Definition of Potential focus Indicator'
[sc247]: https://www.w3.org/TR/WCAG21/#focus-visible 'Success Criterion 2.4.7: Focus Visible'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML specification of Sequential focus navigation'
[usc247]: https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html 'Understanding Success Criterion 2.4.7: Focus Visible'
[usc2411]: https://w3c.github.io/wcag/understanding/focus-visible-enhanced.html 'Understanding Success Criterion 2.4.11: Focus Visible (Enhanced) (WCAG 2.2 proposal)'

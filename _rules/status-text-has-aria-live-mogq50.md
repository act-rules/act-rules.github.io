---
id: mogq50
name: 'Status text update has `aria-live` property'
rule_type: atomic
description: |
  This rule checks that any text update that meets the definition of a status message has `aria-live` property.
accessibility_requirements:
  wcag21:4.1.3: # Status Messages (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:ARIA19: # Using ARIA role=alert or Live Regions to Identify Errors
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:ARIA22: # Using role=status to present status messages
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:ARIA23: # Using role=log to identify sequential information updates
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Accessibility Tree
acknowledgments:
  authors:
    - Aron Janecki
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any [HTML element][] that has a [text node][] as a direct [descendant][] in the [flat tree][] if:

- **changed**: the `innerText` property of the element changes; and
- **available**: the [text node][] is [included in the accessibility tree][].

## Expectation

Each test target has an implicit or explicit `aria-live` value of "assertive" or "polite".

## Assumptions

The text changes meet the definition of [status message][]. If this is not the case, success criterion [4.1.3 Status Messages][success criterion 4.1.3 status messages] may be satisfied even if this rule failed.

This rule assumes that the [explicit role][] of the elements does not need to be appropriate to satisfy success criterion [4.1.3 Status Messages][success criterion 4.1.3 status messages]. For example, using `role="alert"` on elements with score updates may be of concern for success criterion [1.3.1 Info and Relationships][success criterion 1.3.1 info and relationships] because the `role="status"` appears to be more appropriate in such a context. However, the inappropriate role does not prevent the `aria-live` property from being programmatically identifiable .

## Accessibility Support

There exists a known combination of operating system and browsers that do not specify the implicit `aria-live` property.

## Background

- [ARIA19: Using ARIA role=alert or Live Regions to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19.html)
- [ARIA21: Using role=status to present status messages](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22.html)
- [ARIA23: Using role=log to identify sequential information updates](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA23.html)

## Test Cases

### Passed

#### Passed Example 1

This `div` element with `role="alert"` has an implicit `aria-live` value of "assertive".

```html
<label>First name:<input /></label>
<div role="alert">Error: First name field must not be blank</div>
```

#### Passed Example 2

This `div` element with `role="status"` has an implicit `aria-live` value of "polite".

```html
<div role="status">10 results out of 20</div>
```

#### Passed Example 3

This `div` element with `role="timer"` has an explicit `aria-live` value of "polite". The `aria-live="polite"` overwrites the implicit value of "off" for elements with `role="timer"`.

```html
<h1>Download time in seconds</h1>
<span role="timer" aria-live="polite">10</span>
```

#### Passed Example 4

This `div` element with `role="log"` has an implicit `aria-live` value of "polite". The `aria-live="polite"` overwrites the implicit value of "off" for elements with `role="timer"`.

```html
<div role="log" aria-labelledby="mainHeading">
	<h1 id="mainHeading">Notifications panel</h1>

	<ul>
		<li>Notification 2 out of 2</li>
		<li>Notification 1 out of 2</li>
	</ul>
</div>
```

#### Passed Example 5

This `div` element with `role="marquee"` has an implicit `aria-live` value of "off". Pressing the Activate Updates control changes the implicit value to "polite".

```html
<h1 id="mainHeading">Stock tickers website</h1>

<p>Press Activate Updates to receive live updates of stock values</p>
<button>Activate Updates</button>

<div role="marquee" aria-labelledby="mainHeading">
	<table>
		<thead>
			<tr>
				<th scope="col">Company symbol</th>
				<th scope="col">Last price</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">Comp1</th>
				<td>0.675</td>
			</tr>
			<tr>
				<th scope="row">Comp2</th>
				<td>0.543</td>
			</tr>
		</tbody>
	</table>
</div>
```

#### Passed Example 6

This `p` element has explicit `aria-live` value of "polite".

```html
<p>Press Receive update to see if the button works</p>
<button>Receive update</button>
<p aria-live="polite">The button works!</p>
```

### Failed

#### Failed Example 1

This `div` element does not have implicit or explicit `aria-live` value of "polite" or "assertive" because the `role` attribute value is not a valid semantic role.

```html
<label>First name:<input /></label>
<div role="alerts">Error: First name field must not be blank</div>
```

#### Failed Example 2

This `p` element does not have an implicit or explicit `aria-live` value of "polite" or "assertive".

```html
<p>10 results out of 20</p>
```

#### Failed Example 3

This `div` element with `role="timer"` has an implicit `aria-live` value of "off". The `aria-live="politeness"` is not a valid ARIA attribute which means that `aria-live` value of the test target defaults to "off".

```html
<h1>Download time in seconds</h1>
<span role="timer" aria-live="politeness">10</span>
```

#### Failed Example 4

This `p` element does not have an implicit or explicit `aria-live` value of "polite" or "assertive".

```html
<p>Press Receive update to see if the button works</p>
<button>Receive update</button>
<p aria-live="off">The button works!</p>
```

### Inapplicable

#### Inapplicable Example 1

The `innerText` property of this `p` element does not change.

```html
<p>This is static text</p>
```

#### Inapplicable Example 2

This `p` element is not included in the accessibility tree through the `display: none` property.

```html
<p style="display:none;">10 results out of 20</p>
```

[alert]: https://www.w3.org/TR/wai-aria-1.1/#alert 'Definition of alert'
[ascii lowercase]: https://infra.spec.whatwg.org/#ascii-lowercase 'Definition of ASCII lowercase'

[timer][https://www.w3.org/tr/wai-aria-1.1/#timer]
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[HTML element]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[semantic role]: #semantic-role 'Definition of semantic role'
[status]: https://www.w3.org/TR/wai-aria-1.1/#status 'Definition of status'
[status message]: https://www.w3.org/TR/WCAG21/#dfn-status-messages
[success criterion 1.3.1 Info and Relationships]: https://www.w3.org/TR/WCAG21/#info-and-relationships
[success criterion 4.1.3 Status Messages]: https://www.w3.org/TR/WCAG21/#status-messages
[text node]: https://dom.spec.whatwg.org/#text
[timer]: https://www.w3.org/TR/wai-aria-1.1/#timer 'Definition of timer'
[valid time string]: https://html.spec.whatwg.org/#valid-time-string 'Definition of valid time string'

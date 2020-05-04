---
id: efbfc7
name: Text content that updates automatically can be paused, stopped or hidden
rule_type: atomic
description: |
  This rule checks that there are instruments to pause, stop or hide the auto-updating of text content.
accessibility_requirements: # Remove whatever is not applicable
  wcag20:2.2.2: # Pause, Stop, Hide (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Carlos Duarte
---

## Applicability

The rule applies to any [HTML element][] that has a [visible][] [text node][] as a [descendant][] in the [flat tree][] if:

- **changed:** The `innerText` property of the [element][html element] changes multiple times within a 10 minute time span where there is no [user interaction][]; and
- **no child changed:** the [element][html element] does not have [children][child] in the [flat tree][] whose `innerText` property also changes; and
- **not alone:** the [element][html element] has an [ancestor][] element in the [flat tree][] with a non-empty `innerText` property whose value is different from the `innerText` of the test target.

**Note:** The test targets for this rule are elements that have their text content change multiple times, on a page with further content, if that change happens without user intervention.

**Note:** The 10 minute time span is an arbitrary limit which is not included in WCAG. Content that updates less frequently, or that doesn't update on a regular interval, will be inapplicable for this rule but may nonetheless fail [Success Criterion 2.2.2: Pause, Stop, Hide][sc 2.2.2]. It is however a much lesser accessibility issue, and without any time limit this rule would be virtually untestable.

## Expectation 1

For each test target there exists a set of [instruments][instrument] to achieve one of the following objectives:

- pause and resume the change of the [visible text content][]; or
- stop the change of the [visible text content][]; or
- hide the content that changes; or
- alter the frequency of the changes of the [visible text content][].

**Note:** If there is more than one test target, the same [instrument][] may be used to pause, stop, hide or alter the frequency of several or even all test targets.

## Expectation 2

Each [instrument][] in the set of [instruments][instrument] from Expectation 1 is in one of the following:

- the same [web page](#web-page-html) of the test target; or
- the same [web page](#web-page-html) of the test target as a result of an action from the user; or
- another [web page](#web-page-html) that is [linked][hyperlink] from the [web page](#web-page-html) of the test target.

**Note:** If the set of instruments has more than one instrument, not all instruments of the set need to be located in the same location.

## Assumptions

- The auto-updating of the content is not [essential][], which is listed as valid exception to [Success Criterion 2.2.2: Pause, Stop, Hide][sc 2.2.2]. When the auto-updating of content is [essential][] this rule may produce incorrect results.
- The content being auto-updated is information. If the auto-update is not information (for example, an ASCII rendered spinning icon that does not provide information on what time is left for a process to end or how much progress has been made) the rule might fail but the success criterion might still be satisfied.
- Any [content][] changes are enabled by the content of [HTML document][] the test target belongs to. Changes originated by any other sources (e.g. browser shortcuts, browser extensions, browser settings, user agents, external browser applications) are not considered.
- All user actions are transmitted by the user agent to the [HTML document][]. If there are other event sources that result from a user action this rule might fail but the success criterion might still be satisfied.
- Available mechanisms for controlling the update of content rely on [activation][]. If there are other mechanisms that do not really on [activation][] the rule might fail but the success criterion might still be satisfied.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.2.2: Pause, Stop, Hide][sc 2.2.2]
- [G186: Using a control in the Web page that stops moving, blinking, or auto-updating content][g186]
- [F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content][f16]

## Test Cases

### Passed

#### Passed Example 1

This `span` element has text content that automatically updates multiple times without user intervention and there is a button available to stop the automatic updates. The rule is not applicable to the `p` element because it has a child (the `span` element) whose content updates.

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="stopUpdates()" value="Stop updates" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 2

This `span` element has text content that automatically updates multiple times without user intervention and there is a button available to pause and resume the automatic updates. The rule is not applicable to the `p` element because it has a child (the `span` element) whose content updates.

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" id="control" onclick="toggleUpdates()" value="Pause updates" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 3

This `span` element has text content that automatically updates multiple times without user intervention and there is a button available to hide the automatically updating content. The rule is not applicable to the `p` element because it has a child (the `span` element) whose content updates.

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="hide()" value="Hide updating content" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 4

This `span` element has text content that automatically updates multiple times without user intervention and there is an [instrument][] available to change the update frequency. The rule is not applicable to the `p` element because it has a child (the `span` element) whose content updates.

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<label for="interval">Content update frequency (seconds):</label>
	<input type="text" id="interval" />
	<input type="button" onclick="changeFrequency(document.getElementById('interval').value)" value="Change frequency" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 5

This `span` element has text content that automatically updates multiple times without user intervention and there is an [instrument][] to control the updates available in the same window after the user activates the "Control updates" `button`.

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="openModal()" value="Control updates" />

	<div
		style="
      display: none;
      position: fixed;
      top: 2em;
      left: 10em;
      background-color: #505050;
      color: white;
      padding: 1em;
      padding-top: 0em;
    "
		id="overlay"
	>
		<p>Control updates</p>
		<input type="button" id="control" onclick="toggleUpdates()" value="Pause updates" />
		<input type="button" onclick="hide()" value="Hide updates" />
		<button onclick="closeModal();">Dismiss</button>
	</div>

	<script type="text/javascript">
		function openModal() {
			document.getElementById('overlay').style.display = 'block'
		}
		function closeModal() {
			document.getElementById('overlay').style.display = 'none'
		}
	</script>
	<script type="text/javascript" src="test-assets/efbfc7/script.js"></script>
</body>
```

### Failed

#### Failed Example 1

This `span` element has text content that automatically updates multiple times without user intervention and there is no [instrument][] available to stop, pause, hide or alter the frequency of the automatic updates.

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Failed Example 2

This `span` element has text content that automatically updates multiple times without user intervention and there is a button available to stop the automatic updates, but the button only stops the updates while it is focused.

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" onfocus="stopUpdates()" onblur="startUpdates()" value="Stop updates" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

### Inapplicable

#### Inapplicable Example 1

This `span` element has text content that automatically updates multiple times but only as a result of the user activating a button on the page.

```html
<body>
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" id="control" onclick="toggleUpdates()" value="Start updates" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Inapplicable Example 2

This `span` element with text content that automatically updates multiple times is the only content in the document.

```html
<body onload="startUpdates()">
	<span id="target">1</span>

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Inapplicable Example 3

This document does not have text content that updates automatically.

```html
<body>
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>
</body>
```

#### Inapplicable Example 4

This `span` element has updated color but not its `innerText` property.

```html
<body onload="startColorUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Number: <span id="target">1</span></p>
	<input type="button" onclick="stop()" value="Stop color changes" />

	<script>
		const myColors = ['red', 'green', 'blue', 'black']
		let updates

		function startColorUpdates() {
			updates = setInterval(change, 1000)
		}

		function change() {
			let randomColor = myColors[Math.floor(Math.random() * myColors.length)]
			var target = document.getElementById('target')
			target.style.color = randomColor
		}

		function stop() {
			clearInterval(updates)
		}
	</script>
</body>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor
[activation]: https://html.spec.whatwg.org/#activation
[child]: https://dom.spec.whatwg.org/#concept-tree-child
[content]: https://www.w3.org/TR/WCAG21/#dfn-content
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[document readiness]: https://www.w3.org/TR/html53/dom.html#current-document-readiness
[essential]: https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html#dfn-essential
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[f16]: https://www.w3.org/WAI/WCAG21/Techniques/failures/F16
[g186]: https://www.w3.org/WAI/WCAG21/Techniques/general/G186
[html document]: https://dom.spec.whatwg.org/#html-document
[html element]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[hyperlink]: https://html.spec.whatwg.org/#hyperlink
[last activation timestamp]: https://html.spec.whatwg.org/#last-activation-timestamp
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[sc 2.2.2]: https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide
[sibling]: https://dom.spec.whatwg.org/#concept-tree-sibling
[text node]: https://dom.spec.whatwg.org/#text
[user interaction]: #user-interaction 'Definition of user interaction'
[visible text content]: #visible-text-content 'Definition of visible text content'
[visible]: #visible 'Definition of visible'
[window]: https://html.spec.whatwg.org/#window

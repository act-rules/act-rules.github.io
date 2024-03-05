---
id: efbfc7
name: Text content that changes automatically can be paused, stopped or hidden
rule_type: atomic
description: |
  This rule checks that for any text content that regularly changes automatically, there are instruments to pause, stop, or hide it or to control its changing frequency.
accessibility_requirements: # Remove whatever is not applicable
  wcag20:2.2.2: # Pause, Stop, Hide (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-text:cc5: # Non-interference due to mapping to 2.2.2
    title: WCAG Non-Interference
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
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML element][] that has a [visible][] [text node][] as a [descendant][] in the [flat tree][], for which all the following is true:

- **changed:** the `innerText` property of the element changes multiple times within a 10 minute time span where there is no [user interaction][]; and
- **no child changed:** the element does not have [children][child] in the [flat tree][] whose `innerText` property also changes; and
- **not alone:** the element has an [ancestor][] element in the [flat tree][] with a non-empty `innerText` property whose value is different from the `innerText` of the test target.

## Expectation

For each test target there is at least one set of [instruments][instrument], where each [instrument][] is in the same [web page][] as the test target or can be found in a [clearly labeled location][] from that [web page][], to achieve at least one of the following objectives:

- pause and resume the change of the [visible text content][]; or
- stop the change of the [visible text content][]; or
- hide the changing [visible text content][]; or
- control the frequency of the changes of the [visible text content][].

**Note:** If there is more than one test target, the same [instrument][] may be used to pause (or stop, or hide or alter the frequency) of several or even all test targets.

## Assumptions

- The auto-updating of the content is not [essential][], which is listed as valid exception to [Success Criterion 2.2.2: Pause, Stop, Hide][sc 2.2.2]. When the auto-updating of content is [essential][] this rule may produce incorrect results.
- The content being changed automatically is information. If the automatically changing content is not information (for example, an ASCII rendered spinning icon that does not provide information on what time is left for a process to end or how much progress has been made) the rule might fail but the success criterion might still be satisfied.
- Any [content][] changes are enabled by the content of the [HTML document][] the test target belongs to. Changes originating from any other sources (e.g. browser shortcuts, browser extensions, browser settings, user agents, external browser applications) are not considered.
- All user actions are transmitted by the user agent to the [HTML document][]. If there are other event sources that result from a user action this rule might fail but the success criterion might still be satisfied.
- Available [instruments][instrument] for controlling the content changes rely on [activation][]. If there are other [instruments][instrument] that do not rely on [activation][] then the rule might fail but the success criterion might still be satisfied.
- If there are other ways to control the automatically changing content that do not require the user to interact with the web page, failing this rule might not be a failure of the success criterion.
- This rule does not check that the pausing instrument does not tie up the user focus. If that happens, then this rule might pass but the success criterion would not be satisfied.

## Accessibility Support

There are no accessibility support issues known.

## Background

The 10 minute time span in the applicability is arbitrary. It is selected so that testing this rule would not become impractical. This 10 minute constraint is not included in WCAG. Content that changes less frequently may fail success criteria 2.2.2 without failing this rule.

The [instruments][instrument] used to pass this rule (if any), must meet all level A Success Criteria in order to fully satisfy [Success Criterion 2.2.2: Pause, Stop, Hide][sc 2.2.2]. These extra requirements are left out of this rule, and should be tested separately.

### Bibliography

- [Understanding Success Criterion 2.2.2: Pause, Stop, Hide][sc 2.2.2]
- [G186: Using a control in the Web page that stops moving, blinking, or auto-updating content][g186]
- [F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content][f16]

## Test Cases

### Passed

#### Passed Example 1

This `span` element contains text content that is automatically **changed** multiple times without user intervention and there is a button available to stop the automatic changes. The rule is not applicable to the second `p` element because it has a **child changed** (the `span` element).

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="stopUpdates()" value="Stop changes" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 2

This `span` element contains text content that is automatically **changed** multiple times without user intervention and there is a button available to pause and resume the automatic changes. The rule is not applicable to the second `p` element because it has a **child changed** (the `span` element).

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" id="control" onclick="toggleUpdates()" value="Pause changes" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 3

This `span` element contains text content that is automatically **changed** multiple times without user intervention and there is a button available to hide the automatically updating content. The rule is not applicable to the second `p` element because it has a **child changed** (the `span` element).

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="hide()" value="Hide changing content" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 4

This `span` element contains text content that is automatically **changed** multiple times without user intervention and there is an [instrument][] available to modify the frequency of the changes. The rule is not applicable to the second `p` element because it has a **child changed** (the `span` element).

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<label for="interval">Content change frequency (seconds):</label>
	<input type="text" id="interval" />
	<input type="button" onclick="changeFrequency(document.getElementById('interval').value)" value="Change frequency" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 5

This `span` element contains text content that is automatically **changed** multiple times without user intervention and the location of an [instrument][] to control the changes is clearly available.

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<p>To control the random number updates activate the "Control changes" button.</p>
	<input type="button" onclick="openModal()" value="Control changes" />

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
		<p>Control changes</p>
		<input type="button" id="control" onclick="toggleUpdates()" value="Pause changes" />
		<input type="button" onclick="hide()" value="Hide changes" />
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
	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

### Failed

#### Failed Example 1

This `span` element contains text content that is automatically **changed** multiple times without user intervention and there is no [instrument][] available to stop, pause, hide or alter the frequency of the automatic changes.

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

### Inapplicable

#### Inapplicable Example 1

This document does not have any visible text node.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
<p style="display: none">
	The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
	implement accessibility.
</p>
```

#### Inapplicable Example 2

This document does not have text content that is automatically **changed**.

```html
<p>
	The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
	implement accessibility.
</p>
```

#### Inapplicable Example 3

This `span` element changes color but not its `innerText` property.

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

#### Inapplicable Example 4

This `span` element contains text content that is automatically **changed** but only as a result of the user activating a button on the page.

```html
<body>
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" id="control" onclick="toggleUpdates()" value="Start changes" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Inapplicable Example 5

This `span` element with text content that automatically changes multiple times is **alone** in the document.

```html
<body onload="startUpdates()">
	<span id="target">1</span>

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor
[activation]: https://html.spec.whatwg.org/#activation
[child]: https://dom.spec.whatwg.org/#concept-tree-child
[clearly labeled location]: #clearly-labeled-location 'Definition of clearly labeled location'
[content]: https://www.w3.org/TR/WCAG22/#dfn-content
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[essential]: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html#dfn-essential
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[f16]: https://www.w3.org/WAI/WCAG22/Techniques/failures/F16
[g186]: https://www.w3.org/WAI/WCAG22/Techniques/general/G186
[html document]: https://dom.spec.whatwg.org/#html-document
[html element]: #namespaced-element
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[sc 2.2.2]: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide
[text node]: https://dom.spec.whatwg.org/#text
[user interaction]: #user-interaction 'Definition of user interaction'
[visible text content]: #visible-text-content 'Definition of visible text content'
[visible]: #visible 'Definition of visible'
[web page]: #web-page-html 'Definition of web page'

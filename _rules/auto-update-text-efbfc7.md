---
id: efbfc7
name: Text content that updates automatically can be paused, stopped or hidden
rule_type: atomic
description: |
  This rule checks that there are mechanisms to pause, stop or hide the auto-updating of text content.
accessibility_requirements: # Remove whatever is not applicable
  wcag20:2.2.2: # Pause, Stop, Hide (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgements:
  authors:
    - Carlos Duarte
---

## Applicability

The rule applies to any [visible][] [HTML element][] in an [HTML document][] if:

- **(not alone)** it is not the only [content][] in the [HTML document][]; and
- **(changed)** the `innerText` property of the [element][html element] changes; and
- **(no child changed)** the [element][html element] does not have [children][child] whose `innerText` property also changes; and
- the [document][html document] the [element][html element] belongs to:
  - **(ready)** has [readiness][document readiness] equal to "complete" before the change happens; and
  - **(inactive)** is associated with a [window][] that has the [last activation timestamp][] equal to "positive infinity".

## Expectation 1

For the test target there exists a [mechanism][] that might be used to:

- pause, stop or hide the change of the [visible text content][]; or
- alter the frequency of the changes of the [visible text content][].

**Note**: If there is more than one test target, a single [mechanism][] may be used to pause, stop, hide or alter the frequency for all test targets.

## Expectation 2

The existing [mechanism][] is [visible][], has an [accessible name][] that is not only [whitespace][], and is [included in the accessibility tree][].

## Assumptions

- This rule assumes that the auto-updating of the content is not [essential][], which is listed as valid exception to [Success Criterion 2.2.2: Pause, Stop, Hide][sc 2.2.2]. When the auto-updating of content is [essential][] this rule may produce incorrect results.
- This rule assumes that any [content][] changes are enabled by the content of [HTML document][] the test target belongs to. Changes originated by any other sources (e.g. browser shortcuts, browser extensions, browser settings, user agents, external browser applications) are not considered.

## Accessibility Support

[Activation triggering](https://html.spec.whatwg.org/#activation-triggering-input-event) is not consistently supported across browsers. The same event may or may not change the value of the [last activation timestamp][] depending on the browser.

## Background

- [Understanding Success Criterion 2.2.2: Pause, Stop, Hide][sc 2.2.2]
- [G186: Using a control in the Web page that stops moving, blinking, or auto-updating content][g186]
- [F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content][f16]

## Test Cases

### Passed

#### Passed Example 1

The text content of the `span` element automatically updates after the page completes loading. A button is available to stop the automatic updates. The rule is not applicable to the first `p` element because it has a child (the `span` element) whose content updates.

```html
<body onload="startUpdates()">
	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="stopUpdates()" value="Stop updates" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 2

The text content of the `span` element automatically updates after the page completes loading. A button is available to pause and resume the automatic updates. The rule is not applicable to the first `p` element because it has a child (the `span` element) whose content updates.

```html
<body onload="startUpdates()">
	<p>Random number: <span id="target">1</span></p>
	<input type="button" id="control" onclick="toggleUpdates()" value="Pause updates" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 3

The text content of the `span` element automatically updates after the page completes loading. A button is available to hide the automatically updating content. The rule is not applicable to the first `p` element because it has a child (the `span` element) whose content updates.

```html
<body onload="startUpdates()">
	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="hide()" value="Hide updating content" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 4

The text content of the `span` element automatically updates after the page completes loading. A [mechanism][] is available to change the update frequency. The rule is not applicable to the first `p` element because it has a child (the `span` element) whose content updates.

```html
<body onload="startUpdates()">
	<p>Random number: <span id="target">1</span></p>
	<label for="interval">Content update frequency (seconds):</label>
	<input type="text" id="interval" />
	<input type="button" onclick="changeFrequency(document.getElementById('interval').value)" value="Change frequency" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

### Failed

#### Failed Example 1

The text content of the `span` element automatically updates after the page completes loading. There is no [mechanism][] to stop, pause, hide or alter the frequency of the automatic updates.

```html
<body onload="startUpdates()">
	<p>Random number: <span id="target">1</span></p>

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Failed Example 2

The text content of the `span` element automatically updates after the page completes loading. A button is available to stop the automatic updates, but the button is not visible.

```html
<body onload="startUpdates()">
	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="stopUpdates()" value="Stop updates" style="display:none" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Failed Example 3

The text content of the `span` element automatically updates after the page completes loading. A button is available to stop the automatic updates, but the button does not have an accessible name.

```html
<body onload="startUpdates()">
	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="stopUpdates()" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Failed Example 4

The text content of the `span` element automatically updates after the page completes loading. A button is available to stop the automatic updates, but the button is not included in the accessibility tree.

```html
<body onload="startUpdates()">
	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="stopUpdates()" aria-hidden="true" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

### Inapplicable

#### Inapplicable Example 1

The text content automatically updates but the change happens before the [readiness][document readiness] is equal to "complete".

```html
<body>
	<p>Random number: <span id="target">1</span></p>

	<script type="text/javascript">
		document.addEventListener('DOMContentLoaded', () => {
			document.getElementById('target').innerText = 'Changed content'
		})
	</script>
</body>
```

#### Inapplicable Example 2

The text content automatically updates but only as a result of the user activating a button on the page, making the [last activation timestamp][] different from "positive infinity".

```html
<body>
	<p>Random number: <span id="target">1</span></p>
	<input type="button" id="control" onclick="startUpdates()" value="Start updates" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Inapplicable Example 3

The automatically updating text content is the only content in the document.

```html
<body onload="startUpdates()">
	<span id="target">1</span>

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Inapplicable Example 4

The document does not have text content that updates automatically.

```html
<body>
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>
</body>
```

#### Inapplicable Example 5

The color of the element is updated, but not its `innerText` property.

```html
<body onload="startColorUpdates()">
	<p>Number: <span id="target">1</span></p>

	<script>
		const myColors = ['red', 'green', 'blue', 'black']

		function startColorUpdates() {
			setInterval(change, 1000)
		}

		function change() {
			let randomColor = myColors[Math.floor(Math.random() * myColors.length)]
			var target = document.getElementById('target')
			target.style.color = randomColor
		}
	</script>
</body>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[child]: https://dom.spec.whatwg.org/#concept-tree-child
[content]: https://www.w3.org/TR/WCAG21/#dfn-content
[document readiness]: https://www.w3.org/TR/html53/dom.html#current-document-readiness
[essential]: https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html#dfn-essential
[f16]: https://www.w3.org/WAI/WCAG21/Techniques/failures/F16
[g186]: https://www.w3.org/WAI/WCAG21/Techniques/general/G186
[html document]: https://dom.spec.whatwg.org/#html-document
[html element]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[last activation timestamp]: https://html.spec.whatwg.org/#last-activation-timestamp
[mechanism]: https://www.w3.org/TR/WCAG21/#dfn-mechanism
[sc 2.2.2]: https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide
[visible text content]: #visible-text-content 'Definition of visible text content'
[visible]: #visible 'Definition of visible'
[whitespace]: #whitespace 'Definition of whitespace'
[window]: https://html.spec.whatwg.org/#window

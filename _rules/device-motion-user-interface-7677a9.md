---
id: 7677a9
name: Device motion based changes to the content can also be created from the user interface
rule_type: atomic
description: |
  This rule checks that changes to the content of a web page that result from device motion events can also be caused by user interface components.
accessibility_requirements:
  wcag21:2.5.4: # Motion Actuation (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Accessibility tree
acknowledgments:
  authors:
    - Carlos Duarte
    - João Vicente
  funding:
    - WAI-Tools
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'attr-lowercase'
---

## Applicability

This rule applies to any [HTML document][] with an associated [Window object][] that has an [event listener list][] with one or more [event listeners][event listener] for [device orientation events][device orientation] or [device motion events][device motion].

## Expectation

For each registered [device orientation event][device orientation] or [device motion event][device motion] in the test target at least one of the following is true:

- **no changes:** The registered event does not cause [changes to the content][changes in content] of the [web page][]; or
- **same result:** There is at least one set of [instruments][instrument], where each [instrument][] is in the same [web page][] of the registered event or can be found in a [clearly labeled location][] from that [web page][], causing the same [changes in content][] as the event.

## Assumptions

- The motion to operate the device is not used through an [accessibility supported][] interface, which is listed as a valid exception to [Success Criterion 2.5.4: Motion Actuation][sc2.5.4].
- The motion is not [essential][] for the functionality it triggers, which is listed as a valid exception to [Success Criterion 2.5.4: Motion Actuation][sc2.5.4].
- This rule assumes that there are no changes in the content of the [web page][] caused by another [event][]. If this is not the case, changes may be attributed to the wrong [event][] and the rule may fail while [Success Criterion 2.5.4: Motion Actuation][sc2.5.4] is still satisfied.
- This rule assumes that the changes happen within a 1 minute time span after the [event][] [firing][] and therefore the comparison between the page before and after the [event][] [firing][] can be made at any time after that time span elapses. If there are changes after this time span, they may not be detected as [changes in content][] and the rule may pass but [Success Criterion 2.5.4: Motion Actuation][sc2.5.4] is not satisfied. The arbitrary 1 minute time span, selected so that testing this rule would not be impractical, is not included in WCAG.

## Accessibility Support

There are no accessibility support issues known.

## Background

The [instruments][instrument] used to pass this rule (if any), must meet all level A Success Criteria in order to fully satisfy [Success Criterion 2.5.4: Motion Actuation][sc2.5.4]. These extra requirements are left out of this rule, and should be tested separately.

### Bibliography

- [Understanding Success Criterion 2.5.4: Motion Actuation][sc2.5.4]
- [G213: Provide conventional controls and an application setting for motion activated input](https://www.w3.org/WAI/WCAG22/Techniques/general/G213.html)
- [DeviceOrientation Event Specification](https://www.w3.org/TR/orientation-event/)

## Test Cases

### Passed

#### Passed Example 1

This [HTML document][] has device orientation events that cause **no changes** to the content of the web page.

```html
<html>
	<head>
		<title>Passed Example 1</title>
		<script>
			function activateEvent() {
				let counter = 0
				window.addEventListener('deviceorientation', () => {
					counter++
				})
			}
		</script>
	</head>

	<body onload="activateEvent();">
		<p>ACT-R</p>
		<p>Note: This example may not work across all browsers.</p>
	</body>
</html>
```

#### Passed Example 2

This [HTML document][] that can be operated through the device's orientation to increase and decrease the value of a slider has the **same result** available through `button` elements.

```html
<html>
	<head>
		<title>Passed Example 2</title>
		<script src="/test-assets/7677a9/slider.js"></script>
		<script>
			function activateSlider() {
				document.getElementById('decreaseSlider').addEventListener('click', decreaseSlider)
				document.getElementById('increaseSlider').addEventListener('click', increaseSlider)
				window.addEventListener('deviceorientation', handleOrientation)
			}
		</script>
	</head>

	<body onload="activateSlider();">
		<pre class="output"></pre>

		<h1>Slider Motion Sensor Example</h1>

		<p>
			Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the right
			and left to adjust the slider value. The decrease and increase buttons also adjust the value.
		</p>
		<p>Note: This example may not work across all browsers.</p>

		<div>
			<button id="decreaseSlider" type="button">Decrease Value</button>
			<input type="range" min="1" max="100" value="50" id="motionSlider" disabled />
			<button id="increaseSlider" type="button">Increase Value</button>
			<p aria-live="polite">Slider Value: <span id="output">50</span></p>
		</div>
	</body>
</html>
```

#### Passed Example 3

This [HTML document][] that can be operated by rotating the device to increase and decrease the value of a slider has the **same result** available through `button` elements.

```html
<html>
	<head>
		<title>Passed Example 3</title>
		<script src="/test-assets/7677a9/slider.js"></script>
		<script>
			function activateSlider() {
				document.getElementById('decreaseSlider').addEventListener('click', decreaseSlider)
				document.getElementById('increaseSlider').addEventListener('click', increaseSlider)
				window.addEventListener('devicemotion', handleMotion)
			}
		</script>
	</head>

	<body onload="activateSlider();">
		<pre class="output"></pre>

		<h1>Slider Motion Sensor Example</h1>

		<p>
			Open this slider on a device with a motion sensor, such as a smart phone or tablet. Rotate the device to adjust
			the slider value. The decrease and increase buttons also adjust the value.
		</p>
		<p>Note: This example may not work across all browsers.</p>

		<div>
			<button id="decreaseSlider" type="button">Decrease Value</button>
			<input type="range" min="1" max="100" value="50" id="motionSlider" disabled />
			<button id="increaseSlider" type="button">Increase Value</button>
			<p aria-live="polite">Slider Value: <span id="output">50</span></p>
		</div>
	</body>
</html>
```

#### Passed Example 4

This [HTML document][] can be operated by rotating the device to increase and decrease the value of a slider and the location of an [instrument][] to support the **same results** is clearly available.

```html
<html>
	<head>
		<title>Passed Example 4</title>
		<script src="/test-assets/7677a9/slider.js"></script>
		<script>
			function activateSlider() {
				document.getElementById('decreaseSlider').addEventListener('click', decreaseSlider)
				document.getElementById('increaseSlider').addEventListener('click', increaseSlider)
				window.addEventListener('devicemotion', handleMotion)
			}
			function openModal() {
				document.getElementById('overlay').style.display = 'block'
			}
			function closeModal() {
				document.getElementById('overlay').style.display = 'none'
			}
		</script>
	</head>

	<body onload="activateSlider();">
		<pre class="output"></pre>

		<h1>Slider Motion Sensor Example</h1>

		<p>
			Open this slider on a device with a motion sensor, such as a smart phone or tablet. Rotate the device to adjust
			the slider value. Activate the control panel to access decrease and increase buttons that also adjust the value.
		</p>
		<input type="button" onclick="openModal()" value="Control panel" />
		<p>Note: This example may not work across all browsers.</p>

		<input type="range" min="1" max="100" value="50" id="motionSlider" disabled />
		<p aria-live="polite">Slider Value: <span id="output">50</span></p>

		<div
			style="
        display: none;
        position: fixed;
        top: 17em;
        left: 1em;
        background-color: #505050;
        color: white;
        padding: 0.5em;
      "
			id="overlay"
		>
			<button id="decreaseSlider" type="button">Decrease Value</button>
			<button id="increaseSlider" type="button">Increase Value</button>
			<button onclick="closeModal();">Dismiss</button>
		</div>
	</body>
</html>
```

### Failed

#### Failed Example 1

This [HTML document][] that can be operated through the device's orientation to increase and decrease the value of a slider has not other way to achieve the **same result**.

```html
<html>
	<head>
		<title>Failed Example 1</title>
		<script src="/test-assets/7677a9/slider.js"></script>
		<script>
			function activateSlider() {
				window.addEventListener('deviceorientation', handleOrientation)
			}
		</script>
	</head>

	<body onload="activateSlider();">
		<pre class="output"></pre>

		<h1>Slider Motion Sensor Example</h1>

		<p>
			Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the right
			and left to adjust the slider value.
		</p>
		<p>Note: This example may not work across all browsers.</p>

		<div>
			<input type="range" min="1" max="100" value="50" id="motionSlider" disabled />
			<button id="increaseSlider" type="button">Increase Value</button>
			<p aria-live="polite">Slider Value: <span id="output">50</span></p>
		</div>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This [HTML document][] is not operable by device motion.

```html
<p>ACT-Rules</p>
```

[accessibility supported]: https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation#dfn-accessibility-supported
[changes in content]: #changes-in-content 'Definition of changes in content'
[clearly labeled location]: #clearly-labeled-location 'Definition of clearly labeled location'
[device motion]: https://www.w3.org/TR/orientation-event/#devicemotion 'Definition of device motion event'
[device orientation]: https://www.w3.org/TR/orientation-event/#deviceorientation 'Definition of device orientation event'
[essential]: https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html#dfn-essential
[event]: https://dom.spec.whatwg.org/#concept-event 'Definition of event'
[event listener]: https://dom.spec.whatwg.org/#concept-event-listener
[event listener list]: https://dom.spec.whatwg.org/#eventtarget-event-listener-list
[firing]: https://dom.spec.whatwg.org/#concept-event-fire 'Definition of event firing'
[html document]: https://dom.spec.whatwg.org/#concept-document
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[sc2.5.4]: https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html
[web page]: #web-page-html 'Definition of web page'
[window object]: https://html.spec.whatwg.org/multipage/window-object.html#dom-window

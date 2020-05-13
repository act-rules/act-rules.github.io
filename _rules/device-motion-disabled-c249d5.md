---
id: c249d5
name: Device motion based functionality can be disabled
rule_type: atomic
description: |
  This rule checks that it is possible to disable functionality that can be operated by device motion.
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
    - João Vicente
    - Carlos Duarte
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'attr-lowercase'
---

## Applicability

The rule applies to an [HTML document][] with an associated [Window object][] that has an [event listener list][] with one or more [event listeners][event listener] for [device orientation events][device orientation] or [device motion events][device motion].

## Expectation 1

For each registered [device orientation event][device orientation] or [device motion event][device motion] in the test target there exists a set of one or more [instruments][instrument] to prevent any results of the event.

**Note:** The same [instrument][] can be used to disable more than one event.

**Note:** Preventing results of the event can be done in multiple ways (e.g. removing the event listener; handling the event in a different manner; ...) but the way in which it is done is not relevant for this rule.

## Expectation 2

For each [instrument][] in the set of [instruments][instrument] from Expectation 1, one of the following is true:

- the [instrument][] is in the same [web page][] of the test target; or
- instructions for the user to locate the [instrument][] are in the same [web page][] of the test target.

**Note:** If the set of instruments has more than one instrument, not every instrument of the set needs to be in the same location.

## Assumptions

- The motion to operate the device is not used through an [accessibility supported][] interface, which is listed as a valid exception to SC 2.5.4.
- The motion is not [essential][] for the functionality it triggers, which is listed as a valid exception to SC 2.5.4.
- The event listeners listening to device motion events trigger a functionality in the web page. If they do not trigger any such functionality failing this rule might not be a failure of the success criterion.
- If there are ways to disable the device motion based functionality that do not require the user to interact with the web page (e.g. a setting at the operating system level), failing this rule might not be a failure of the success criterion.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.5.4: Motion Actuation](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html)
- [G213: Provide conventional controls and an application setting for motion activated input](https://www.w3.org/WAI/WCAG21/Techniques/general/G213.html)
- [DeviceOrientation Event Specification](https://www.w3.org/TR/orientation-event/)

## Test Cases

### Passed

#### Passed Example 1

This [HTML document][] that can be operated through the device's orientation to increase and decrease the value of a slider has a control to disable that functionality.

```html
<html>
	<head>
		<title>Passed Example 1</title>
		<script src="/test-assets/7677a9/slider.js"></script>
		<script>
			function activateSlider() {
				window.addEventListener('deviceorientation', handleOrientationCanBeDisabled)
			}
		</script>
	</head>

	<body onload="activateSlider();">
		<h1>Slider Motion Sensor Example</h1>

		<p>
			Open this slider on a device with a motion sensor, such as a smartphone or tablet. Tilt the device to the right
			and left to adjust the slider value. The check box disables the motion sensing adjustment.
		</p>
		<p>Note: This example may not work across all browsers.</p>

		<div>
			<input type="range" min="1" max="100" value="50" id="motionSlider" disabled />
			<p aria-live="polite">Slider Value: <span id="output">50</span></p>
		</div>
		<div>
			<input type="checkbox" id="disableMotion" />
			<label for="disableMotion">Disable Motion Actuation</label>
		</div>
	</body>
</html>
```

#### Passed Example 2

This [HTML document][] that can be operated by rotating the device to increase and decrease the value of a slider has a control to disable that functionality.

```html
<html>
	<head>
		<title>Passed Example 1</title>
		<script src="/test-assets/7677a9/slider.js"></script>
		<script>
			function activateSlider() {
				window.addEventListener('devicemotion', handleMotionCanBeDisabled)
			}
		</script>
	</head>

	<body onload="activateSlider();">
		<h1>Slider Motion Sensor Example</h1>

		<p>
			Open this slider on a device with a motion sensor, such as a smart phone or tablet. Rotate the device to adjust
			the slider value. The check box disables the motion sensing adjustment.
		</p>
		<p>Note: This example may not work across all browsers.</p>

		<div>
			<input type="range" min="1" max="100" value="50" id="motionSlider" disabled />
			<p aria-live="polite">Slider Value: <span id="output">50</span></p>
		</div>
		<div>
			<input type="checkbox" id="disableMotion" />
			<label for="disableMotion">Disable Motion Actuation</label>
		</div>
	</body>
</html>
```

### Failed

#### Failed Example 1

This [HTML document][] that can be operated through the device's orientation to increase and decrease the value of a slider but has no way to disable this functionality.

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
			Open this slider on a device with a motion sensor, such as a smartphone or tablet. Tilt the device to the right
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

[accessibility supported]: https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation#dfn-accessibility-supported
[device motion]: https://www.w3.org/TR/orientation-event/#devicemotion 'Definition of device motion event'
[device orientation]: https://www.w3.org/TR/orientation-event/#deviceorientation 'Definition of device orientation event'
[essential]: https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-essential
[event listener]: https://dom.spec.whatwg.org/#concept-event-listener
[event listener list]: https://dom.spec.whatwg.org/#eventtarget-event-listener-list
[html document]: https://dom.spec.whatwg.org/#concept-document
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[web page]: #web-page-html 'Definition of web page'
[window object]: https://html.spec.whatwg.org/multipage/window-object.html#dom-window

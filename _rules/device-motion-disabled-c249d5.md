---
id: c249d5
name: Device motion can be disabled
rule_type: atomic

description: |
  This rule checks that functionality that can be operated by device motion, responding to the motion can be disabled to prevent accidental actuation.

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

authors:
  - João Vicente
  - Carlos Duarte
---

## Applicability

The rule applies to any [HTML document][] that has [functionality][] that can be operated by [device motion][].

## Expectation

For the test target, [device motion][] [can be disabled][] and the control for disabling it must be a [user interface component][] and it should be visible and included in the accessibility tree.

## Assumptions

- This test assumes that the motion to operate [functionality][] is not used through an [accessibility supported][] interface
- This test assumes that motion is not [essential][] for the [functionality][]

## Accessibility Support

- Device [orientation events][] may include sensitive data. Implementations must fire events only on [secure browsing contexts][]

## Background

- [Understanding Success Criterion 2.5.4: Motion Actuation](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html)
- [G213: Provide conventional controls and an application setting for motion activated input](https://www.w3.org/WAI/WCAG21/Techniques/general/G213.html)
- [DeviceOrientation Event Specification](https://www.w3.org/TR/orientation-event/)

## Test Cases

### Passed

#### Passed Example 1

The [HTML document][] has [functionality][] that can be operated by [device motion][] and [can be disabled][], and the control for disabling is visible and is included in the accessibility tree.

```html
<html>
  <head>
    <title>Passed Example 1</title>
    <script>
      function activateSlider() {
        const slider = document.getElementById('motionSlider');
        const output = document.getElementById('output');

        function handleOrientation(event) {
          const disableMotion = document.getElementById('disableMotion');
          const gamma = !disableMotion.checked ? event.gamma : 0;

          if (gamma > 20) {
            slider.value++;
          } else if (gamma < -20) {
            slider.value--;
            output.innerHTML = slider.value;
          }
          output.innerHTML = slider.value;
        }

        window.addEventListener('deviceorientation', handleOrientation);
      }
    </script>
  </head>

  <body onload="activateSlider();">
    <h1>Slider Motion Sensor Example </h1>

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the right and left to adjust the slider value. The check box disables the motion sensing adjustment.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div>
      <input type="range" min="1" max="100" value="50" id="motionSlider" disabled>
      <p aria-live="polite">Slider Value: <span id="output">50</span></p>
    </div>
    <div>
      <input type="checkbox" id="disableMotion">
      <label for="disableMotion">Disable Motion Actuation</label>
    </div>
  </body>
</html>
```

### Failed

#### Failed Example 1

The [HTML document][] has [functionality][] that can be operated by [device motion][] and [can't be disabled][].

```html
<html>
  <head>
    <title>Failed Example 1</title>
    <script>
      function activateSlider() {
        const slider = document.getElementById('motionSlider');
        const output = document.getElementById('output');

        function handleOrientation(event) {
          if (event.gamma > 20) {
            slider.value++;
          } else if (event.gamma < -20) {
            slider.value--;
          }
          output.innerHTML = slider.value;
        }

        window.addEventListener('deviceorientation', handleOrientation);
      }
    </script>
  </head>

  <body onload="activateSlider();">
    <h1>Slider Motion Sensor Example </h1>

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the right and left to adjust the slider value.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div>
      <input type="range" min="1" max="100" value="50" id="motionSlider" disabled>
      <p aria-live="polite">Slider Value: <span id="output">50</span></p>
    </div>
  </body>
</html>
```

#### Failed Example 2

The [HTML document][] has [functionality][] that can be operated by [device motion][] and [can be disabled][], and the control for disabling is visible but is not included in the accessibility tree.

```html
<html>
  <head>
    <title>Failed Example 2</title>
    <script>
      function activateSlider() {
        const slider = document.getElementById('motionSlider');
        const output = document.getElementById('output');

        function handleOrientation(event) {
          const disableMotion = document.getElementById('disableMotion');
          const gamma = !disableMotion.checked ? event.gamma : 0;

          if (gamma > 20) {
            slider.value++;
          } else if (gamma < -20) {
            slider.value--;
            output.innerHTML = slider.value;
          }
          output.innerHTML = slider.value;
        }

        window.addEventListener('deviceorientation', handleOrientation);
      }
    </script>
  </head>

  <body onload="activateSlider();">
    <h1>Slider Motion Sensor Example </h1>

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the right and left to adjust the slider value. The check box disables the motion sensing adjustment.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div>
      <input type="range" min="1" max="100" value="50" id="motionSlider" disabled>
      <p aria-live="polite">Slider Value: <span id="output">50</span></p>
    </div>
    <div aria-hidden="true">
      <input type="checkbox" id="disableMotion">
      <label for="disableMotion">Disable Motion Actuation</label>
    </div>
  </body>
</html>
```

#### Failed Example 3

The [HTML document][] has [functionality][] that can be operated by [device motion][] and [can be disabled][], and the control for disabling is included in the accessibility tree but is not visible.

```html
<html>
  <head>
    <title>Failed Example 3</title>
    <script>
      function activateSlider() {
        const slider = document.getElementById('motionSlider');
        const output = document.getElementById('output');

        function handleOrientation(event) {
          const disableMotion = document.getElementById('disableMotion');
          const gamma = !disableMotion.checked ? event.gamma : 0;

          if (gamma > 20) {
            slider.value++;
          } else if (gamma < -20) {
            slider.value--;
            output.innerHTML = slider.value;
          }
          output.innerHTML = slider.value;
        }

        window.addEventListener('deviceorientation', handleOrientation);
      }
    </script>
  </head>

  <body onload="activateSlider();">
    <h1>Slider Motion Sensor Example </h1>

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the right and left to adjust the slider value. The check box disables the motion sensing adjustment.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div>
      <input type="range" min="1" max="100" value="50" id="motionSlider" disabled>
      <p aria-live="polite">Slider Value: <span id="output">50</span></p>
    </div>
    <div style="position: absolute;margin-left: -9999px;">
      <input type="checkbox" id="disableMotion">
      <label for="disableMotion">Disable Motion Actuation</label>
    </div>
  </body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The [HTML document][] does not have [functionality][] that can be operated by [device motion][].

```html
<html>
  <div>document content</div>
</html>
```

#### Inapplicable Example 2

The document is not an [HTML document][].

```html
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  Sorry, your browser does not support inline SVG.  
</svg>
```

[orientation events]: https://www.w3.org/TR/orientation-event/
[HTML document]: https://dom.spec.whatwg.org/#concept-document
[essential]: https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-essential
[functionality]: https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-functionality
[secure browsing contexts]: https://www.w3.org/TR/secure-contexts/
[can be disabled]: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#concept-fe-disabled
[can't be disabled]: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#concept-fe-disabled
[user interface component]: https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-user-interface-component
[accessibility supported]: https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation#dfn-accessibility-supported
[device motion]: https://www.w3.org/TR/orientation-event/#devicemotion

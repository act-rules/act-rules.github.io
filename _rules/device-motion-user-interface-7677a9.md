---
id: 7677a9
name: Device motion can be operated by user interface
rule_type: atomic
description: |
  This rule checks that functionality that can be operated by device motion can also be operated by user interface components.
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
acknowledgements:
  authors:
    - João Vicente
    - Carlos Duarte
---

## Applicability

The rule applies to an [HTML document][] with an associated [Window object][] that has a registered [device motion event][device motion].

## Expectation 1

For each test target, an [instrument][] supporting the same outcome of the registered [device motion event][device motion] is available.

## Expectation 2

The [instrument][] is [visible][].

## Expectation 3

The [instrument][] is [included in the accessibility tree][] with an [accessible name][] that is not empty ("").

## Assumptions

- The motion to operate the device is not used through an [accessibility supported][] interface.
- The motion is not [essential][] for the functionality it triggers.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.5.4: Motion Actuation](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html)
- [G213: Provide conventional controls and an application setting for motion activated input](https://www.w3.org/WAI/WCAG21/Techniques/general/G213.html)
- [DeviceOrientation Event Specification](https://www.w3.org/TR/orientation-event/)

## Test Cases

### Passed

#### Passed Example 1

The [HTML document][] has [functionality][] that can be operated by [device motion][] and can also be operated by [user interface components][] and they are [visible][] and [included in the accessibility tree][] with an [accessible name][] that is not empty ("").

```html
<html>
  <head>
    <title>Passed Example 1</title>
    <script>
      function activateSlider() {
        const slider = document.getElementById('motionSlider');
        const output = document.getElementById('output');

        function increaseSlider() {
          slider.value++;
          output.innerHTML = slider.value;
        }

        function decreaseSlider() {
          slider.value--;
          output.innerHTML = slider.value;
        }

        function handleOrientation(event) {
          if (event.gamma > 20) {
            slider.value++;
          } else if (event.gamma < -20) {
            slider.value--;
          }
          output.innerHTML = slider.value;
        }

        document.getElementById('decreaseSlider').addEventListener('click', decreaseSlider);
        document.getElementById('increaseSlider').addEventListener('click', increaseSlider);
        window.addEventListener('deviceorientation', handleOrientation);
      }
    </script>
  </head>

  <body onload="activateSlider();">

    <pre class="output"></pre>

    <h1>Slider Motion Sensor Example </h1>

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the right and left to adjust the slider value. The decrease and increase buttons also adjust the value.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div>
      <button id="decreaseSlider" type="button">Decrease Value</button>
      <input type="range" min="1" max="100" value="50" id="motionSlider" disabled>
      <button id="increaseSlider" type="button">Increase Value</button>
      <p aria-live="polite">Slider Value: <span id="output">50</span></p>
    </div>
  </body>
</html>
```

### Failed

#### Failed Example 1

The [HTML document][] has [functionality][] that can be operated by [device motion][] but cannot be operated by [user interface components][].

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

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the 
    right and left to adjust the slider value.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div>
      <input type="range" min="1" max="100" value="50" id="motionSlider" disabled>
      <p aria-live="polite">Slider Value: <span id="output">50</span></p>
    </div>
  </body>
</html>
```

#### Failed Example 2

The [HTML document][] has [functionality][] that can be operated by [device motion][] and can also be operated by [user interface components][] and they are [visible][] but are not [included in the accessibility tree][].

```html
<html>
  <head>
    <title>Failed Example 2</title>
    <script>
      function activateSlider() {
        const slider = document.getElementById('motionSlider');
        const output = document.getElementById('output');

        function increaseSlider() {
          slider.value++;
          output.innerHTML = slider.value;
        }

        function decreaseSlider() {
          slider.value--;
          output.innerHTML = slider.value;
        }

        function handleOrientation(event) {
          if (event.gamma > 20) {
            slider.value++;
          } else if (event.gamma < -20) {
            slider.value--;
          }
          output.innerHTML = slider.value;
        }

        document.getElementById('decreaseSlider').addEventListener('click', decreaseSlider);
        document.getElementById('increaseSlider').addEventListener('click', increaseSlider);
        window.addEventListener('deviceorientation', handleOrientation);
      }
    </script>
  </head>

  <body onload="activateSlider();">

    <pre class="output"></pre>

    <h1>Slider Motion Sensor Example </h1>

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the 
    right and left to adjust the slider value. The decrease and increase buttons also adjust the value.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div>
      <button id="decreaseSlider" type="button" aria-hidden="true">Decrease Value</button>
      <input type="range" min="1" max="100" value="50" id="motionSlider" disabled>
      <button id="increaseSlider" type="button" aria-hidden="true">Increase Value</button>
      <p aria-live="polite">Slider Value: <span id="output">50</span></p>
    </div>
  </body>
</html>
```

#### Failed Example 3

The [HTML document][] has [functionality][] that can be operated by [device motion][] and can also be operated by [user interface components][] and they are [included in the accessibility tree][] but are not [visible][].

```html
<html>
  <head>
    <title>Failed Example 3</title>
    <script>
      function activateSlider() {
        const slider = document.getElementById('motionSlider');
        const output = document.getElementById('output');

        function increaseSlider() {
          slider.value++;
          output.innerHTML = slider.value;
        }

        function decreaseSlider() {
          slider.value--;
          output.innerHTML = slider.value;
        }

        function handleOrientation(event) {
          if (event.gamma > 20) {
            slider.value++;
          } else if (event.gamma < -20) {
            slider.value--;
          }
          output.innerHTML = slider.value;
        }

        document.getElementById('decreaseSlider').addEventListener('click', decreaseSlider);
        document.getElementById('increaseSlider').addEventListener('click', increaseSlider);
        window.addEventListener('deviceorientation', handleOrientation);
      }
    </script>
  </head>

  <body onload="activateSlider();">
    <h1>Slider Motion Sensor Example </h1>

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the 
    right and left to adjust the slider value. The decrease and increase buttons also adjust the value.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div>
      <button id="decreaseSlider" type="button" style="position: absolute; margin-left: -9999px;">Decrease Value</button>
      <input type="range" min="1" max="100" value="50" id="motionSlider" disabled>
      <button id="increaseSlider" type="button" style="position: absolute; margin-left: -9999px;">Increase Value</button>
      <p aria-live="polite">Slider Value: <span id="output">50</span></p>
    </div>
  </body>
</html>
```

#### Failed Example 4

The [HTML document][] has [functionality][] that can be operated by [device motion][] and can also be operated by [user interface components][] and they are [visible][] and [included in the accessibility tree][] but with an [accessible name][] that is empty ("").

```html
<html>
  <head>
    <title>Failed Example 4</title>
    <script>
      function activateSlider() {
        const slider = document.getElementById('motionSlider');
        const output = document.getElementById('output');

        function increaseSlider() {
          slider.value++;
          output.innerHTML = slider.value;
        }

        function decreaseSlider() {
          slider.value--;
          output.innerHTML = slider.value;
        }

        function handleOrientation(event) {
          if (event.gamma > 20) {
            slider.value++;
          } else if (event.gamma < -20) {
            slider.value--;
          }
          output.innerHTML = slider.value;
        }

        document.getElementById('decreaseSlider').addEventListener('click', decreaseSlider);
        document.getElementById('increaseSlider').addEventListener('click', increaseSlider);
        window.addEventListener('deviceorientation', handleOrientation);
      }
    </script>
  </head>

  <body onload="activateSlider();">
    <h1>Slider Motion Sensor Example </h1>

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the 
    right and left to adjust the slider value. The decrease and increase buttons also adjust the value.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div>
      <button id="decreaseSlider" type="button"></button>
      <input type="range" min="1" max="100" value="50" id="motionSlider" disabled>
      <button id="increaseSlider" type="button"></button>
      <p aria-live="polite">Slider Value: <span id="output">50</span></p>
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

[accessible name]: #accessible-name 'Definition of accessible name'
[device motion]: https://www.w3.org/TR/orientation-event/#devicemotion 'Definition of device motion event'
[essential]: https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-essential
[functionality]: https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-functionality
[HTML document]: https://dom.spec.whatwg.org/#concept-document
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[user interface components]: https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-user-interface-component
[visible]: #visible 'Definition of visible'
[Window object]: https://html.spec.whatwg.org/multipage/window-object.html#dom-window

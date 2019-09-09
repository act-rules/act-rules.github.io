---
id: bf0de1
name: No functions are exclusively operated through device motion
rule_type: composite
description: |
  This rule checks that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation

accessibility_requirements: # Remove whatever is not applicable
  wcag21:2.5.4: # Motion Actuation (A)
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed

input_rules:
  - 5d9784
  - de951c

authors:
  - João Vicente
  - Carlos Duarte
---

## Applicability

The rule applies to any [HTML document](https://dom.spec.whatwg.org/#concept-document).

## Expectation

For each test target, the outcome of all of the following rules is passed:

- [Motion can be replaced by user interface components](https://act-rules.github.io/rules/5d9784)
- [Motion can be disabled](https://act-rules.github.io/rules/de951c)

## Assumptions

- This test assumes that motion is not [essential](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-essential) for the function

## Accessibility Support

- Device orientation events may include sensitive data. Implementations must fire events only on [secure browsing contexts](https://www.w3.org/TR/secure-contexts/)

## Background

- [Understanding Success Criterion 2.5.4: Motion Actuation](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html)
- [G213: Provide conventional controls and an application setting for motion activated input](https://www.w3.org/WAI/WCAG21/Techniques/general/G213.html)
- [DeviceOrientation Event Specification](https://www.w3.org/TR/orientation-event/)
- [Detecting device orientation](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation)
- [DeviceMotionEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)

## Test Cases

### Passed

#### Passed Example 1

[HTML document](https://dom.spec.whatwg.org/#concept-document) does not have [functionality](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-functionality) that can be operated by device motion or user motion

```html
<div>document content</div>
```

#### Passed Example 2

[HTML document](https://dom.spec.whatwg.org/#concept-document) has [functionality](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-functionality) that can be operated by device motion or user motion and can also be operated by [user interface components](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-user-interface-component) and can be disabled

```html
<html>
  <head>
    <script>
      function load() {
        //slider behavior
        var slider = document.getElementById("motionSlider");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;
        slider.oninput = function () {
          output.innerHTML = this.value;
        }

        document.getElementById('increase').addEventListener('click', function() {
          slider.value++;
          output.innerHTML = slider.value;
        });

        document.getElementById('decrease').addEventListener('click', function() {
          slider.value--;
          output.innerHTML = slider.value;
        });

        //slider motion detection
        function handleOrientation(event) {

          var z = document.getElementById("disable");
          if (z.checked == false) {
            var x = event.gamma;
          } else {
            x = 0;
          }

          if (x > 20) {
            slider.value++;
            output.innerHTML = slider.value;
          } else if (x < -20) {
            slider.value--;
            output.innerHTML = slider.value;
          }
        }

        window.addEventListener('deviceorientation', handleOrientation);
      }
    </script>
  </head>

  <body onload="load();">

    <pre class="output"></pre>

    <h1>Slider Motion Sensor Example </h1>

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the right
      and left to adjust the slider value. The decrease and increase buttons also adjust the value. The check box disables
      the motion sensing adjustment.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div class="slidecontainer">
      <button id="decrease" type="button" name="decrease">Decrease Value</button>
      <input type="range" min="1" max="100" value="50" class="slider" id="motionSlider">
      <button id="increase" type="button" name="increase">Increase Value</button>
      <p aria-live="polite">Slider Value: <span id="demo"></span></p>
    </div>
    <p><input type="checkbox" id="disable"><label for="disable">Disable Motion Actuation</label>
  </body>
</html>
```

### Failed

#### Failed Example 1

[HTML document](https://dom.spec.whatwg.org/#concept-document) has [functionality](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-functionality) that can be operated by device motion or user motion and can also be operated by [user interface components](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-user-interface-component) but cannot be disabled

```html
<html>
  <head>
    <script>
      function load() {
        //slider behavior
        var slider = document.getElementById("motionSlider");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;
        slider.oninput = function () {
          output.innerHTML = this.value;
        }

        document.getElementById('increase').addEventListener('click', function() {
          slider.value++;
          output.innerHTML = slider.value;
        });

        document.getElementById('decrease').addEventListener('click', function() {
          slider.value--;
          output.innerHTML = slider.value;
        });

        //slider motion detection
        function handleOrientation(event) {

          var x = event.gamma;

          if (x > 20) {
            slider.value++;
            output.innerHTML = slider.value;
          } else if (x < -20) {
            slider.value--;
            output.innerHTML = slider.value;
          }
        }

        window.addEventListener('deviceorientation', handleOrientation);
      }
    </script>
  </head>
  <body onload="load();">

    <pre class="output"></pre>

    <h1>Slider Motion Sensor Example </h1>

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the right
      and left to adjust the slider value. The decrease and increase buttons also adjust the value.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div class="slidecontainer">
      <button id="decrease" type="button" name="decrease">Decrease Value</button>
      <input type="range" min="1" max="100" value="50" class="slider" id="motionSlider">
      <button id="increase" type="button" name="increase">Increase Value</button>
      <p aria-live="polite">Slider Value: <span id="demo"></span></p>
    </div>
  </body>
</html>
```

#### Failed Example 2

[HTML document](https://dom.spec.whatwg.org/#concept-document) has [functionality](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-functionality) that can be operated by device motion or user motion, can be disabled, but cannot be operated by [user interface components](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-user-interface-component)

```html
<html>
  <head>
    <script>
      function load() {
        //slider behavior
        var slider = document.getElementById("motionSlider");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;
        slider.oninput = function () {
          output.innerHTML = this.value;
        }

        //slider motion detection
        function handleOrientation(event) {

          var z = document.getElementById("disable");
          if (z.checked == false) {
            var x = event.gamma;
          } else {
            x = 0;
          }

          if (x > 20) {
            slider.value++;
            output.innerHTML = slider.value;
          } else if (x < -20) {
            slider.value--;
            output.innerHTML = slider.value;
          }
        }

        window.addEventListener('deviceorientation', handleOrientation);
      }
    </script>
  </head>

  <body onload="load();">

    <pre class="output"></pre>

    <h1>Slider Motion Sensor Example </h1>

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the right
      and left to adjust the slider value. The check box disables the motion sensing adjustment.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div class="slidecontainer">
      <input type="range" min="1" max="100" value="50" class="slider" id="motionSlider" disabled>
      <p aria-live="polite">Slider Value: <span id="demo"></span></p>
    </div>
    <p><input type="checkbox" id="disable"><label for="disable">Disable Motion Actuation</label>
  </body>
</html>
```

#### Failed Example 3

[HTML document](https://dom.spec.whatwg.org/#concept-document) has [functionality](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-functionality) that can be operated by device motion or user motion but cannot be operated by [user interface components](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-user-interface-component) and disabled

```html
<html>
  <head>
    <script>
      function load() {
        //slider behavior
        var slider = document.getElementById("motionSlider");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;
        slider.oninput = function () {
          output.innerHTML = this.value;
        }

        //slider motion detection
        function handleOrientation(event) {

          var x = event.gamma;

          if (x > 20) {
            slider.value++;
            output.innerHTML = slider.value;
          } else if (x < -20) {
            slider.value--;
            output.innerHTML = slider.value;
          }
        }

        window.addEventListener('deviceorientation', handleOrientation);
      }
    </script>
  </head>
  <body onload="load();">

    <pre class="output"></pre>

    <h1>Slider Motion Sensor Example </h1>

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the right
      and left to adjust the slider value.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div class="slidecontainer">
      <input type="range" min="1" max="100" value="50" class="slider" id="motionSlider" disabled>
      <p aria-live="polite">Slider Value: <span id="demo"></span></p>
    </div>
  </body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The document is not an [HTML document](https://dom.spec.whatwg.org/#concept-document)

```html
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  Sorry, your browser does not support inline SVG.  
</svg>
```

---
id: bf0de1
name: Motion actuation can be disabled and be operated by user interface components
rule_type: composite

description: |
  This rule checks that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation.

accessibility_requirements: # Remove whatever is not applicable
  wcag21:2.5.4: # Motion Actuation (A)
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed

input_rules:
 - c249d5
 - 7677a9
 - ed12b1
 - 9d42d6

authors:
  - João Vicente
  - Carlos Duarte
---

## Applicability

The rule applies to any [HTML document][] that has [functionality][] that can be operated by [device motion][] or user motion.

## Expectation (1)

For the test target, [device motion][] and user motion [can be disabled][] and the control for disabling them must be a [user interface component][] and it should be visible and included in the accessibility tree.

## Expectation (2)

For the test target, [device motion][] and user motion can also be operated by [user interface components][] and they should be visible and included in the accessibility tree.

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

The [HTML document][] has [functionality][] that can be operated by [device motion][] and [can be disabled][] and can also be operated by [user interface components][] and both the control for disabling, and the [user interface components][] are visible and included in the accessibility tree.

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
          const disableMotion = document.getElementById('disableMotion');
          const gamma = !disableMotion.checked ? event.gamma : 0;

          if (gamma > 20) {
            slider.value++;
          } else if (gamma < -20) {
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

    <p>Open this slider on a device with a motion sensor, such as a smart phone or tablet. Tilt the device to the right and left to adjust the slider value. The decrease and increase buttons also adjust the value. The check box disables the motion sensing adjustment.</p>
    <p>Note: This example may not work across all browsers.</p>

    <div>
      <button id="decreaseSlider" type="button">Decrease Value</button>
      <input type="range" min="1" max="100" value="50" id="motionSlider" disabled>
      <button id="increaseSlider" type="button">Increase Value</button>
      <p aria-live="polite">Slider Value: <span id="output">50</span></p>
    </div>
    <div>
      <input type="checkbox" id="disableMotion">
      <label for="disableMotion">Disable Motion Actuation</label>
    </div>
  </body>
</html>
```

#### Passed Example 2

The [HTML document][] has [functionality][] that can be operated by user motion and [can be disabled][] and can also be operated by [user interface components][] and both the control for disabling, and the [user interface components][] are visible and included in the accessibility tree.

```html
<html>
  <head>
    <title>Passed Example 2</title>
    <style>
      div:first-child {
        font-size: 1.5em;
        text-align: center;
        vertical-align: middle;
        display: table-cell;
        height: 50vh;
        width: 100vw;
      }
      #target {
        background: white;
        border: 1px solid black;
      }
    </style>
    <script>
      let eventCache = new Array();
      let prevDiff = -1;

      function init() {
        const target = document.getElementById('target');
        target.onpointerdown = pointerdown_handler;
        target.onpointermove = pointermove_handler;

        target.onpointerup = pointerup_handler;
        target.onpointercancel = pointerup_handler;
        target.onpointerout = pointerup_handler;
        target.onpointerleave = pointerup_handler;
      }

      function pointerdown_handler(event) {
        eventCache.push(event);
      }

      function pointermove_handler(event) {
        event.target.style.border = 'dashed';
        for (let i = 0; i < eventCache.length; i++) {
          if (event.pointerId === eventCache[i].pointerId) {
            eventCache[i] = event;
            break;
          }
        }

        if (eventCache.length === 2) {
          const curDiff = Math.abs(eventCache[0].clientX - eventCache[1].clientX);

          if (prevDiff > 0) {
            if (curDiff > prevDiff) {
              const disable = document.getElementById('disable');
              if (!disable.checked) {
                event.target.style.background = 'pink';
              }
            }
            if (curDiff < prevDiff) {
              const disable = document.getElementById('disable');
              if (!disable.checked) {
                event.target.style.background = 'lightblue';
              }
            }
          }

          prevDiff = curDiff;
        }
      }

      function pointerup_handler(event) {
        remove_event(event);
        event.target.style.background = 'white';
        event.target.style.border = '1px solid black';

        if (eventCache.length < 2) {
          prevDiff = -1;
        }
      }

      function remove_event(event) {
        for (let i = 0; i < eventCache.length; i++) {
          if (eventCache[i].pointerId === event.pointerId) {
            eventCache.splice(i, 1);
            break;
          }
        }
      }

      function changeBackgroundColor(color) {
        const target = document.getElementById('target');
        target.style.background = color;
      }
    </script>
  </head>
  <body onload='init();' style='touch-action:none'>
    <div id='target'>Touch and Hold with 2 pointers, then pinch in or out horizontally.<br/>
        The background color will change to pink if the pinch is opening (Zoom In) 
        or changes to lightblue if the pinch is closing (Zoom out).</div>
    <div>
      <button onclick="changeBackgroundColor('lightblue');">Change background color to lightblue</button>
      <button onclick="changeBackgroundColor('pink');">Change background color to pink</button>
      <button onclick="changeBackgroundColor('white');">Reset color</button>
      <label for='disable'>Disable pinching color change</label>
      <input type='checkbox' id='disable'>
    </div>
  </body>
</html>
```

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
      <label for="disableMotion">Disable pinching color change</label>
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
      <label for="disableMotion">Disable pinching color change</label>
    </div>
  </body>
</html>
```

#### Failed Example 4

The [HTML document][] has [functionality][] that can be operated by user motion and [can't be disabled][].

```html
<html>
  <head>
    <title>Failed Example 4</title>
    <style>
      div {
        font-size: 1.5em;
        text-align: center;
        vertical-align: middle;
        display: table-cell;
        height: 50vh;
        width: 100vw;
      }
      #target {
        background: white;
        border: 1px solid black;
      }
    </style>
    <script>
      let eventCache = new Array();
      let prevDiff = -1;

      function init() {
        const target = document.getElementById('target');
        target.onpointerdown = pointerdown_handler;
        target.onpointermove = pointermove_handler;

        target.onpointerup = pointerup_handler;
        target.onpointercancel = pointerup_handler;
        target.onpointerout = pointerup_handler;
        target.onpointerleave = pointerup_handler;
      }

      function pointerdown_handler(event) {
        eventCache.push(event);
      }

      function pointermove_handler(event) {
        event.target.style.border = 'dashed';
        for (let i = 0; i < eventCache.length; i++) {
          if (event.pointerId === eventCache[i].pointerId) {
            eventCache[i] = event;
            break;
          }
        }

        if (eventCache.length === 2) {
          if (prevDiff > 0) {
            const curDiff = Math.abs(eventCache[0].clientX - eventCache[1].clientX);

            if (curDiff > prevDiff) {
              event.target.style.background = 'pink';
            } else if (curDiff < prevDiff) {
              event.target.style.background = 'lightblue';
            }
          }

          prevDiff = curDiff;
        }
      }

      function pointerup_handler(event) {
        remove_event(event);
        event.target.style.background = 'white';
        event.target.style.border = '1px solid black';

        if (eventCache.length < 2) {
          prevDiff = -1;
        }
      }

      function remove_event(event) {
        for (let i = 0; i < eventCache.length; i++) {
          if (eventCache[i].pointerId === event.pointerId) {
            eventCache.splice(i, 1);
            break;
          }
        }
      }
    </script>
  </head>
  <body onload='init();' style='touch-action:none'>
    <div id='target'>Touch and Hold with 2 pointers, then pinch in or out horizontally.<br/>
        The background color will change to pink if the pinch is opening (Zoom In) 
        or changes to lightblue if the pinch is closing (Zoom out).</div>
  </body>
</html>
```

#### Failed Example 5

The [HTML document][] has [functionality][] that can be operated by user motion and [can be disabled][], and the control for disabling is visible but is not included in the accessibility tree.

```html
<html>
  <head>
    <title>Failed Example 5</title>
    <style>
      div:first-child {
        font-size: 1.5em;
        text-align: center;
        vertical-align: middle;
        display: table-cell;
        height: 50vh;
        width: 100vw;
      }
      #target {
        background: white;
        border: 1px solid black;
      }
    </style>
    <script>
      let eventCache = new Array();
      let prevDiff = -1;

      function init() {
        const target = document.getElementById('target');
        target.onpointerdown = pointerdown_handler;
        target.onpointermove = pointermove_handler;

        target.onpointerup = pointerup_handler;
        target.onpointercancel = pointerup_handler;
        target.onpointerout = pointerup_handler;
        target.onpointerleave = pointerup_handler;
      }

      function pointerdown_handler(event) {
        eventCache.push(event);
      }

      function pointermove_handler(event) {
        event.target.style.border = 'dashed';
        for (let i = 0; i < eventCache.length; i++) {
          if (event.pointerId === eventCache[i].pointerId) {
            eventCache[i] = event;
            break;
          }
        }

        if (eventCache.length === 2) {
          if (prevDiff > 0) {
            const curDiff = Math.abs(eventCache[0].clientX - eventCache[1].clientX);
            const disable = document.getElementById('disable');

            if (curDiff > prevDiff && !disable.checked) {
              event.target.style.background = 'pink';
            } else if (curDiff < prevDiff && !disable.checked) {
              event.target.style.background = 'lightblue';
            }
          }

          prevDiff = curDiff;
        }
      }

      function pointerup_handler(event) {
        remove_event(event);
        event.target.style.background = 'white';
        event.target.style.border = '1px solid black';

        if (eventCache.length < 2) {
          prevDiff = -1;
        }
      }

      function remove_event(event) {
        for (let i = 0; i < eventCache.length; i++) {
          if (eventCache[i].pointerId === event.pointerId) {
            eventCache.splice(i, 1);
            break;
          }
        }
      }
    </script>
  </head>
  <body onload='init();' style='touch-action:none'>
    <div id='target'>Touch and Hold with 2 pointers, then pinch in or out horizontally.<br/>
        The background color will change to pink if the pinch is opening (Zoom In) 
        or changes to lightblue if the pinch is closing (Zoom out).
    </div>
    <div aria-hidden="true">
      <label for='disable'>Disable pinching color change</label>
      <input type='checkbox' id='disable'>
    </div>  
  </body>
</html>
```

#### Failed Example 6

The [HTML document][] has [functionality][] that can be operated by user motion and [can be disabled][], and the control for disabling is included in the accessibility tree but is not visible.

```html
<html>
  <head>
    <title>Passed Example 6</title>
    <style>
      div:first-child {
        font-size: 1.5em;
        text-align: center;
        vertical-align: middle;
        display: table-cell;
        height: 50vh;
        width: 100vw;
      }
      #target {
        background: white;
        border: 1px solid black;
      }
    </style>
    <script>
      let eventCache = new Array();
      let prevDiff = -1;

      function init() {
        const target = document.getElementById('target');
        target.onpointerdown = pointerdown_handler;
        target.onpointermove = pointermove_handler;

        target.onpointerup = pointerup_handler;
        target.onpointercancel = pointerup_handler;
        target.onpointerout = pointerup_handler;
        target.onpointerleave = pointerup_handler;
      }

      function pointerdown_handler(event) {
        eventCache.push(event);
      }

      function pointermove_handler(event) {
        event.target.style.border = 'dashed';
        for (let i = 0; i < eventCache.length; i++) {
          if (event.pointerId === eventCache[i].pointerId) {
            eventCache[i] = event;
            break;
          }
        }

        if (eventCache.length === 2) {
          if (prevDiff > 0) {
            const curDiff = Math.abs(eventCache[0].clientX - eventCache[1].clientX);
            const disable = document.getElementById('disable');

            if (curDiff > prevDiff && !disable.checked) {
              event.target.style.background = 'pink';
            } else if (curDiff < prevDiff && !disable.checked) {
              event.target.style.background = 'lightblue';
            }
          }

          prevDiff = curDiff;
        }
      }

      function pointerup_handler(event) {
        remove_event(event);
        event.target.style.background = 'white';
        event.target.style.border = '1px solid black';

        if (eventCache.length < 2) {
          prevDiff = -1;
        }
      }

      function remove_event(event) {
        for (let i = 0; i < eventCache.length; i++) {
          if (eventCache[i].pointerId === event.pointerId) {
            eventCache.splice(i, 1);
            break;
          }
        }
      }
    </script>
  </head>
  <body onload='init();' style='touch-action:none'>
    <div id='target'>Touch and Hold with 2 pointers, then pinch in or out horizontally.<br/>
        The background color will change to pink if the pinch is opening (Zoom In) 
        or changes to lightblue if the pinch is closing (Zoom out).
    </div>
    <div style="position: absolute;margin-left: -9999px;">
      <label for='disable'>Disable pinching color change</label>
      <input type='checkbox' id='disable'>
    </div>  
  </body>
</html>
```

#### Failed Example 7

The [HTML document][] has [functionality][] that can be operated by [device motion][] but cannot be operated by [user interface components][].

```html
<html>
  <head>
    <title>Failed Example 7</title>
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

#### Failed Example 8

The [HTML document][] has [functionality][] that can be operated by [device motion][] and can also be operated by [user interface components][] and they are visible but are not included in the accessibility tree.

```html
<html>
  <head>
    <title>Failed Example 8</title>
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
      <button id="decrease" type="button" name="decrease" aria-hidden="true">Decrease Value</button>
      <input type="range" min="1" max="100" value="50" id="motionSlider" disabled>
      <button id="increase" type="button" name="increase" aria-hidden="true">Increase Value</button>
      <p aria-live="polite">Slider Value: <span id="output">50</span></p>
    </div>
  </body>
</html>
```

#### Failed Example 9

The [HTML document][] has [functionality][] that can be operated by [device motion][] and can also be operated by [user interface components][] and they are included in the accessibility tree but are not visible.

```html
<html>
  <head>
    <title>Failed Example 9</title>
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
      <button id="decrease" type="button" name="decrease" style="position: absolute; margin-left: -9999px;">Decrease Value</button>
      <input type="range" min="1" max="100" value="50" id="motionSlider" disabled>
      <button id="increase" type="button" name="increase" style="position: absolute; margin-left: -9999px;">Increase Value</button>
      <p aria-live="polite">Slider Value: <span id="output">50</span></p>
    </div>
  </body>
</html>
```

#### Failed Example 10

The [HTML document][] has [functionality][] that can be operated by user motion but cannot be operated by [user interface components][].

```html
<html>
  <head>
    <title>Failed Example 10</title>
    <style>
      div {
        font-size: 1.5em;
        text-align: center;
        vertical-align: middle;
        display: table-cell;
        height: 50vh;
        width: 100vw;
      }
      #target {
        background: white;
        border: 1px solid black;
      }
    </style>
    <script>
      let eventCache = new Array();
      let prevDiff = -1;

      function init() {
        const target = document.getElementById('target');
        target.onpointerdown = pointerdown_handler;
        target.onpointermove = pointermove_handler;

        target.onpointerup = pointerup_handler;
        target.onpointercancel = pointerup_handler;
        target.onpointerout = pointerup_handler;
        target.onpointerleave = pointerup_handler;
      }

      function pointerdown_handler(event) {
        eventCache.push(event);
      }

      function pointermove_handler(event) {
        event.target.style.border = 'dashed';
        for (let i = 0; i < eventCache.length; i++) {
          if (event.pointerId === eventCache[i].pointerId) {
            eventCache[i] = event;
            break;
          }
        }

        if (eventCache.length === 2) {
          if (prevDiff > 0) {
            const curDiff = Math.abs(eventCache[0].clientX - eventCache[1].clientX);

            if (curDiff > prevDiff) {
              event.target.style.background = 'pink';
            } else if (curDiff < prevDiff) {
              event.target.style.background = 'lightblue';
            }
          }

          prevDiff = curDiff;
        }
      }

      function pointerup_handler(event) {
        remove_event(event);
        event.target.style.background = 'white';
        event.target.style.border = '1px solid black';

        if (eventCache.length < 2) {
          prevDiff = -1;
        }
      }

      function remove_event(event) {
        for (let i = 0; i < eventCache.length; i++) {
          if (eventCache[i].pointerId === event.pointerId) {
            eventCache.splice(i, 1);
            break;
          }
        }
      }
    </script>
  </head>
  <body onload='init();' style='touch-action:none'>
    <div id='target'>Touch and Hold with 2 pointers, then pinch in or out horizontally.<br/>
        The background color will change to pink if the pinch is opening (Zoom In) 
        or changes to lightblue if the pinch is closing (Zoom out).</div>
  </body>
</html>
```

#### Failed Example 11

The [HTML document][] has [functionality][] that can be operated by user motion and can also be operated by [user interface components][] and they are visible but are not included in the accessibility tree.

```html
<html>
  <head>
    <title>Failed Example 11</title>
    <style>
      div:first-child {
        font-size: 1.5em;
        text-align: center;
        vertical-align: middle;
        display: table-cell;
        height: 50vh;
        width: 100vw;
      }
      #target {
        background: white;
        border: 1px solid black;
      }
    </style>
    <script>
      let eventCache = new Array();
      let prevDiff = -1;

      function init() {
        const target = document.getElementById('target');
        target.onpointerdown = pointerdown_handler;
        target.onpointermove = pointermove_handler;

        target.onpointerup = pointerup_handler;
        target.onpointercancel = pointerup_handler;
        target.onpointerout = pointerup_handler;
        target.onpointerleave = pointerup_handler;
      }

      function pointerdown_handler(event) {
        eventCache.push(event);
      }

      function pointermove_handler(event) {
        event.target.style.border = 'dashed';
        for (let i = 0; i < eventCache.length; i++) {
          if (event.pointerId === eventCache[i].pointerId) {
            eventCache[i] = event;
            break;
          }
        }

        if (eventCache.length === 2) {
          if (prevDiff > 0) {
            const curDiff = Math.abs(eventCache[0].clientX - eventCache[1].clientX);

            if (curDiff > prevDiff) {
              event.target.style.background = 'pink';
            } else if (curDiff < prevDiff) {
              event.target.style.background = 'lightblue';
            }
          }

          prevDiff = curDiff;
        }
      }

      function pointerup_handler(event) {
        remove_event(event);
        event.target.style.background = 'white';
        event.target.style.border = '1px solid black';

        if (eventCache.length < 2) {
          prevDiff = -1;
        }
      }

      function remove_event(event) {
        for (let i = 0; i < eventCache.length; i++) {
          if (eventCache[i].pointerId === event.pointerId) {
            eventCache.splice(i, 1);
            break;
          }
        }
      }

      function changeBackgroundColor(color) {
        const target = document.getElementById('target');
        target.style.background = color;
      }
    </script>
  </head>
  <body onload='init();' style='touch-action:none'>
    <div id='target'>Touch and Hold with 2 pointers, then pinch in or out horizontally.<br/>
        The background color will change to pink if the pinch is opening (Zoom In) 
        or changes to lightblue if the pinch is closing (Zoom out).
    </div>
    <div aria-hidden="true">
      <button onclick="changeBackgroundColor('lightblue');">Change background color to lightblue</button>
      <button onclick="changeBackgroundColor('pink');">Change background color to pink</button>
      <button onclick="changeBackgroundColor('white');">Reset color</button>
    </div>  
  </body>
</html>
```

#### Failed Example 12

The [HTML document][] has [functionality][] that can be operated by user motion and can also be operated by [user interface components][] and they are included in the accessibility tree but are not visible.

```html
<html>
  <head>
    <title>Failed Example 12</title>
    <style>
      div:first-child {
        font-size: 1.5em;
        text-align: center;
        vertical-align: middle;
        display: table-cell;
        height: 50vh;
        width: 100vw;
      }
      #target {
        background: white;
        border: 1px solid black;
      }
    </style>
    <script>
      let eventCache = new Array();
      let prevDiff = -1;

      function init() {
        const target = document.getElementById('target');
        target.onpointerdown = pointerdown_handler;
        target.onpointermove = pointermove_handler;

        target.onpointerup = pointerup_handler;
        target.onpointercancel = pointerup_handler;
        target.onpointerout = pointerup_handler;
        target.onpointerleave = pointerup_handler;
      }

      function pointerdown_handler(event) {
        eventCache.push(event);
      }

      function pointermove_handler(event) {
        event.target.style.border = 'dashed';
        for (let i = 0; i < eventCache.length; i++) {
          if (event.pointerId === eventCache[i].pointerId) {
            eventCache[i] = event;
            break;
          }
        }

        if (eventCache.length === 2) {
          if (prevDiff > 0) {
            const curDiff = Math.abs(eventCache[0].clientX - eventCache[1].clientX);

            if (curDiff > prevDiff) {
              event.target.style.background = 'pink';
            } else if (curDiff < prevDiff) {
              event.target.style.background = 'lightblue';
            }
          }

          prevDiff = curDiff;
        }
      }

      function pointerup_handler(event) {
        remove_event(event);
        event.target.style.background = 'white';
        event.target.style.border = '1px solid black';

        if (eventCache.length < 2) {
          prevDiff = -1;
        }
      }

      function remove_event(event) {
        for (let i = 0; i < eventCache.length; i++) {
          if (eventCache[i].pointerId === event.pointerId) {
            eventCache.splice(i, 1);
            break;
          }
        }
      }

      function changeBackgroundColor(color) {
        const target = document.getElementById('target');
        target.style.background = color;
      }
    </script>
  </head>
  <body onload='init();' style='touch-action:none'>
    <div id='target'>Touch and Hold with 2 pointers, then pinch in or out horizontally.<br/>
        The background color will change to pink if the pinch is opening (Zoom In) 
        or changes to lightblue if the pinch is closing (Zoom out).
    </div>
    <div style="position: absolute; margin-left: -9999px;">
      <button onclick="changeBackgroundColor('lightblue');">Change background color to lightblue</button>
      <button onclick="changeBackgroundColor('pink');">Change background color to pink</button>
      <button onclick="changeBackgroundColor('white');">Reset color</button>
    </div>  
  </body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The [HTML document][] does not have [functionality][] that can be operated by [device motion][] or user motion.

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
[user interface components]: https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-user-interface-component
[user interface component]: https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#dfn-user-interface-component
[accessibility supported]: https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation#dfn-accessibility-supported
[device motion]: https://www.w3.org/TR/orientation-event/#devicemotion

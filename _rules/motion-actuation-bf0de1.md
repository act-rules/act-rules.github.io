---
id: bf0de1
name: Motion actuation can be disabled and be operated by user interface components
rule_type: atomic

description: |
  This rule checks that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation.

accessibility_requirements: # Remove whatever is not applicable
  wcag21:2.5.4: # Motion Actuation (A)
    forConformance: true
    failed: not satisfied
    passed: satisfied
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

The rule applies to any [HTML document][] that has [functionality][] that can be operated by device motion or user motion.

## Expectation (1)

For each test target, device motion or user motion [can be disabled][].

**Note:** the control for disabling should be visible and included in the accessibility tree.

## Expectation (2)

For each test target, device motion or user motion can also be operated by [user interface components][].

## Assumptions

- This test assumes that motion is not [essential][] for the [functionality][]

## Accessibility Support

- Device [orientation events][] may include sensitive data. Implementations must fire events only on [secure browsing contexts][]

## Background

- [Understanding Success Criterion 2.5.4: Motion Actuation](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html)
- [G213: Provide conventional controls and an application setting for motion activated input](https://www.w3.org/WAI/WCAG21/Techniques/general/G213.html)
- [DeviceOrientation Event Specification](https://www.w3.org/TR/orientation-event/)
- [Detecting device orientation](https://www.w3.org/TR/orientation-event/#deviceorientation)
- [DeviceMotionEvent](https://www.w3.org/TR/orientation-event/#devicemotion)

## Test Cases

### Passed

#### Passed Example 1

The [HTML document][] has [functionality][] that can be operated by device motion and can also be operated by [user interface components][] and [can be disabled][].

```html
<html>
  <head>
    <script>
      function activateSlider() {
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

  <body onload="activateSlider();">

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

#### Passed Example 2

The [HTML document][] has [functionality][] that can be operated by user motion and can also be operated by [user interface components][] and [can be disabled][].

```html
<html>
  <head>
    <style>
      div {
        margin: 0em;
        padding: 2em;
      }
      #target {
        background: white;
        border: 1px solid black;
      }
    </style>
    <script>
      var evCache = new Array();
      var prevDiff = -1;

      function init() {
        var el=document.getElementById("target");
        el.onpointerdown = pointerdown_handler;
        el.onpointermove = pointermove_handler;

        el.onpointerup = pointerup_handler;
        el.onpointercancel = pointerup_handler;
        el.onpointerout = pointerup_handler;
        el.onpointerleave = pointerup_handler;
      }

      function pointerdown_handler(ev) {
        evCache.push(ev);
      }

      function pointermove_handler(ev) {
        ev.target.style.border = "dashed";
        for (var i = 0; i < evCache.length; i++) {
          if (ev.pointerId == evCache[i].pointerId) {
            evCache[i] = ev;
            break;
          }
        }

        if (evCache.length == 2) {
          var curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

          if (prevDiff > 0) {
            if (curDiff > prevDiff) {
              var disable = document.getElementById("disable");
              if (disable.checked == false) {
                ev.target.style.background = "pink";
              }
            }
            if (curDiff < prevDiff) {
              var disable = document.getElementById("disable");
              if (disable.checked == false) {
                ev.target.style.background = "lightblue";
              }
            }
          }

          prevDiff = curDiff;
        }
      }

      function pointerup_handler(ev) {
        remove_event(ev);
        ev.target.style.background = "white";
        ev.target.style.border = "1px solid black";

        if (evCache.length < 2) {
          prevDiff = -1;
        }
      }

      function remove_event(ev) {
        for (var i = 0; i < evCache.length; i++) {
          if (evCache[i].pointerId == ev.pointerId) {
            evCache.splice(i, 1);
            break;
          }
        }
      }

      function changeBackgroundColor(color) {
        var el=document.getElementById("target");
        el.style.background = color;
      }
    </script>
  </head>
  <body onload="init();" style="touch-action:none">
    <div id="target">Touch and Hold with 2 pointers, then pinch in or out.<br/>
        The background color will change to pink if the pinch is opening (Zoom In) 
        or changes to lightblue if the pinch is closing (Zoom out).</div>
    <button onclick="changeBackgroundColor('lightblue');">Change background color to lightblue</button>
    <button onclick="changeBackgroundColor('pink');">Change background color to pink</button>
    <button onclick="changeBackgroundColor('white');">reset color</button>
    <input type="checkbox" id="disable"><label for="disable">Disable Motion Actuation</label>
  </body>
</html>
```

### Failed

#### Failed Example 1

The [HTML document][] has [functionality][] that can be operated by device motion and can also be operated by [user interface components][] but cannot be disabled.

```html
<html>
  <head>
    <script>
      function activateSlider() {
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
  <body onload="activateSlider();">

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

The [HTML document][] has [functionality][] that can be operated by device motion, [can be disabled][], but cannot be operated by [user interface components][].

```html
<html>
  <head>
    <script>
      function activateSlider() {
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

  <body onload="activateSlider();">

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

The [HTML document][] has [functionality][] that can be operated by device motion but cannot be operated by [user interface components][] and cannot be disabled.

```html
<html>
  <head>
    <script>
      function activateSlider() {
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
  <body onload="activateSlider();">

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

#### Failed Example 4

The [HTML document][] has [functionality][] that can be operated by user motion and can also be operated by [user interface components][] but cannot be disabled.

```html
<html>
  <head>
    <style>
      div {
        margin: 0em;
        padding: 2em;
      }
      #target {
        background: white;
        border: 1px solid black;
      }
    </style>
    <script>
      var evCache = new Array();
      var prevDiff = -1;

      function init() {
        var el=document.getElementById("target");
        el.onpointerdown = pointerdown_handler;
        el.onpointermove = pointermove_handler;

        el.onpointerup = pointerup_handler;
        el.onpointercancel = pointerup_handler;
        el.onpointerout = pointerup_handler;
        el.onpointerleave = pointerup_handler;
      }

      function pointerdown_handler(ev) {
        evCache.push(ev);
      }

      function pointermove_handler(ev) {
        ev.target.style.border = "dashed";
        for (var i = 0; i < evCache.length; i++) {
          if (ev.pointerId == evCache[i].pointerId) {
            evCache[i] = ev;
            break;
          }
        }

        if (evCache.length == 2) {
          var curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

          if (prevDiff > 0) {
            if (curDiff > prevDiff) {
              ev.target.style.background = "pink";
            }
            if (curDiff < prevDiff) {
              ev.target.style.background = "lightblue";
            }
          }

          prevDiff = curDiff;
        }
      }

      function pointerup_handler(ev) {
        remove_event(ev);
        ev.target.style.background = "white";
        ev.target.style.border = "1px solid black";

        if (evCache.length < 2) {
          prevDiff = -1;
        }
      }

      function remove_event(ev) {
        for (var i = 0; i < evCache.length; i++) {
          if (evCache[i].pointerId == ev.pointerId) {
            evCache.splice(i, 1);
            break;
          }
        }
      }

      function changeBackgroundColor(color) {
        var el=document.getElementById("target");
        el.style.background = color;
      }
    </script>
  </head>
  <body onload="init();" style="touch-action:none">
    <div id="target">Touch and Hold with 2 pointers, then pinch in or out.<br/>
        The background color will change to pink if the pinch is opening (Zoom In) 
        or changes to lightblue if the pinch is closing (Zoom out).</div>
    <button onclick="changeBackgroundColor('lightblue');">Change background color to lightblue</button>
    <button onclick="changeBackgroundColor('pink');">Change background color to pink</button>
    <button onclick="changeBackgroundColor('white');">reset color</button>
  </body>
</html>
```

#### Failed Example 5

The [HTML document][] has [functionality][] that can be operated by user motion, [can be disabled][], but cannot be operated by [user interface components][].

```html
<html>
  <head>
    <style>
      div {
        margin: 0em;
        padding: 2em;
      }
      #target {
        background: white;
        border: 1px solid black;
      }
    </style>
    <script>
      var evCache = new Array();
      var prevDiff = -1;

      function init() {
        var el=document.getElementById("target");
        el.onpointerdown = pointerdown_handler;
        el.onpointermove = pointermove_handler;

        el.onpointerup = pointerup_handler;
        el.onpointercancel = pointerup_handler;
        el.onpointerout = pointerup_handler;
        el.onpointerleave = pointerup_handler;
      }

      function pointerdown_handler(ev) {
        evCache.push(ev);
      }

      function pointermove_handler(ev) {
        ev.target.style.border = "dashed";
        for (var i = 0; i < evCache.length; i++) {
          if (ev.pointerId == evCache[i].pointerId) {
            evCache[i] = ev;
            break;
          }
        }

        if (evCache.length == 2) {
          var curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

          if (prevDiff > 0) {
            if (curDiff > prevDiff) {
              var disable = document.getElementById("disable");
              if (disable.checked == false) {
                ev.target.style.background = "pink";
              }
            }
            if (curDiff < prevDiff) {
              var disable = document.getElementById("disable");
              if (disable.checked == false) {
                ev.target.style.background = "lightblue";
              }
            }
          }

          prevDiff = curDiff;
        }
      }

      function pointerup_handler(ev) {
        remove_event(ev);
        ev.target.style.background = "white";
        ev.target.style.border = "1px solid black";

        if (evCache.length < 2) {
          prevDiff = -1;
        }
      }

      function remove_event(ev) {
        for (var i = 0; i < evCache.length; i++) {
          if (evCache[i].pointerId == ev.pointerId) {
            evCache.splice(i, 1);
            break;
          }
        }
      }
    </script>
  </head>
  <body onload="init();" style="touch-action:none">
    <div id="target">Touch and Hold with 2 pointers, then pinch in or out.<br/>
        The background color will change to pink if the pinch is opening (Zoom In) 
        or changes to lightblue if the pinch is closing (Zoom out).</div>

    <input type="checkbox" id="disable"><label for="disable">Disable Motion Actuation</label>
  </body>
</html>
```

#### Failed Example 6

The [HTML document][] has [functionality][] that can be operated by user motion but cannot be operated by [user interface components][] and cannot be disabled.

```html
<html>
  <head>
    <style>
      div {
        margin: 0em;
        padding: 2em;
      }
      #target {
        background: white;
        border: 1px solid black;
      }
    </style>
    <script>
      var evCache = new Array();
      var prevDiff = -1;

      function init() {
        var el=document.getElementById("target");
        el.onpointerdown = pointerdown_handler;
        el.onpointermove = pointermove_handler;

        el.onpointerup = pointerup_handler;
        el.onpointercancel = pointerup_handler;
        el.onpointerout = pointerup_handler;
        el.onpointerleave = pointerup_handler;
      }

      function pointerdown_handler(ev) {
        evCache.push(ev);
      }

      function pointermove_handler(ev) {
        ev.target.style.border = "dashed";
        for (var i = 0; i < evCache.length; i++) {
          if (ev.pointerId == evCache[i].pointerId) {
            evCache[i] = ev;
            break;
          }
        }

        if (evCache.length == 2) {
          var curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

          if (prevDiff > 0) {
            if (curDiff > prevDiff) {
              ev.target.style.background = "pink";
            }
            if (curDiff < prevDiff) {
              ev.target.style.background = "lightblue";
            }
          }

          prevDiff = curDiff;
        }
      }

      function pointerup_handler(ev) {
        remove_event(ev);
        ev.target.style.background = "white";
        ev.target.style.border = "1px solid black";

        if (evCache.length < 2) {
          prevDiff = -1;
        }
      }

      function remove_event(ev) {
        for (var i = 0; i < evCache.length; i++) {
          if (evCache[i].pointerId == ev.pointerId) {
            evCache.splice(i, 1);
            break;
          }
        }
      }
    </script>
  </head>
  <body onload="init();" style="touch-action:none">
    <div id="target">Touch and Hold with 2 pointers, then pinch in or out.<br/>
        The background color will change to pink if the pinch is opening (Zoom In) 
        or changes to lightblue if the pinch is closing (Zoom out).</div>
  </body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The [HTML document][] does not have [functionality][] that can be operated by device motion or user motion.

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

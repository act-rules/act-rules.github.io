---
id: ffbc54
name: No keyboard shortcuts use only printable characters
rule_type: atomic
description: |
  This rule checks that if keyboard shortcuts are implemented using only printable characters, then there is a mechanism to disable the shortcut, or to remap the shortcut to use one or more non-printable characters keys, or the shortcut for a user interface component is only available when that component has focus.
accessibility_requirements:
  wcag21:2.1.4: # Character Key Shortcuts (A)
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
acknowledgements:
  authors:
    - João Vicente
    - Carlos Duarte
---

## Applicability

The rule applies to any [keyboard event][]: 
 - where the attribute `key` is a [printable character][] key; and
 - the method `getModifierState` returns `false`; and
 - is [dispatched][] to an [event target][] within a [HTML document][].

## Expectation 1

For each test target:
 - an [instrument][] to prevent any result of the [keyboard event][] is available; or
 - if the [event target][] doesn't have [focus][], any result of the event is prevented; or
 - an [instrument][] is available to prevent any result of the [keyboard event][] when the [keyboard event][] method `getModifierState` returns `false`.

**Note:** The same [instrument][] can be used to disable/force more than one event.

**Note:** Preventing results of the event can be done in multiple ways (e.g. removing the event listener; handling the event in a different manner; ...) but the way in which it is done is not relevant for this rule.

## Expectation 2

For each [instrument][] in the set of [instruments][instrument] from Expectation 1, one of the following is true:

- the [instrument][] is in the same [web page][] of the test target; or
- the [instrument][] can be found in a [clearly labeled location][].

**Note:** If the set of instruments has more than one instrument, not every instrument of the set needs to be in the same location.

## Assumptions

- The event listeners listening to device motion events trigger a functionality in the web page. If they do not trigger any such functionality failing this rule might not be a failure of the success criterion.
- If there are ways to disable the device motion based functionality that do not require the user to interact with the web page (e.g. a setting at the operating system level), failing this rule might not be a failure of the success criterion.

## Accessibility Support

Currently [keyboard events][keyboard event] only support the types `keydown` and `keyup`. [Keyboard events][keyboard event] of type `keypressed` are considered [legacy keyboard events][].

## Background

- [Understanding Success Criterion 2.1.4: Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html)
- [G217 Providing a mechanism to allow users to remap or turn off character key shortcuts](https://www.w3.org/WAI/WCAG21/Techniques/general/G217)
- [F99 Failure of Success Criterion 2.1.4 due to implementing character key shortcuts that cannot be turned off or remapped](https://www.w3.org/WAI/WCAG21/Techniques/failures/F99)

## Test Cases

### Passed

#### Passed Example 1

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and exists an [instrument][] to prevent any result of the [keyboard event][].

```html
<html>
  <head>
    <title>Passed Example 1</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
    <label for="target">Add to list (press "+" to add):</label>
    <input type="text" id="target" />
    <label>
      <input type="checkbox" onclick="toggleDisabled('singleShortcut', !this.checked)" checked>
      Toggle single character keyboard shortcut
    </label>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Passed Example 2

This [HTML document][] has two [keyboard events][keyboard event] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and for each [keyboard event][] exists an [instrument][] to prevent any result of the [keyboard event][].

```html
<html>
  <head>
    <title>Passed Example 2</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'firstShortcut', shortcutKey: '+'}); registerShortcut({id: 'secondShortcut', shortcutKey: 'a'}); activateShortcuts();">
    <label for="target">Add to list (press "+" or "a" to add):</label>
    <input type="text" id="target" />
    <label>
      <input type="checkbox" onclick="toggleDisabled('firstShortcut', !this.checked)" checked>
      Toggle "+" single character keyboard shortcut
    </label>
    <label>
      <input type="checkbox" onclick="toggleDisabled('secondShortcut', !this.checked)" checked>
      Toggle "a" single character keyboard shortcut
    </label>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Passed Example 3

This [HTML document][] has two [keyboard events][keyboard event] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and exists an [instrument][] to prevent any result of the [keyboard event][]. In this case, the same [instrument][] is used to prevent the result of both [keyboard events][keyboard event].

```html
<html>
  <head>
    <title>Passed Example 3</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'firstShortcut', shortcutKey: '+'}); registerShortcut({id: 'secondShortcut', shortcutKey: 'a'}); activateShortcuts();">
    <label for="target">Add to list (press "+" or "a" to add):</label>
    <input type="text" id="target" />
    <label>
      <input type="checkbox" onclick="toggleDisabled('firstShortcut', !this.checked); toggleDisabled('secondShortcut', !this.checked)" checked>
      Toggle single character keyboard shortcuts
    </label>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Passed Example 4

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and exists an [instrument][] to prevent any result of the [keyboard event][] when the [keyboard event][] method `getModifierState` returns `false`.

```html
<html>
  <head>
    <title>Passed Example 4</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
    <label for="target">Add to list (press "+" to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div>
        <label>
          <input id="remap" type="checkbox" onclick="toggleModifier('singleShortcut', this.checked)">
          Use "ctrl" key together with the "+" key
        </label>
      </div>
    </div>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Passed Example 5

This [HTML document][] has two [keyboard events][keyboard event] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and for each [keyboard event][] exists an [instrument][] to prevent any result of the [keyboard event][] when the [keyboard event][] method `getModifierState` returns `false`.

```html
<html>
  <head>
    <title>Passed Example 5</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'firstShortcut', shortcutKey: '+'}); registerShortcut({id: 'secondShortcut', shortcutKey: 'a'}); activateShortcuts();">
    <label for="target">Add to list (press "+" or "a" to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div>
        <label>
          <input id="remap" type="checkbox" onclick="toggleModifier('firstShortcut', this.checked)">
          Use "ctrl" key together with the "+" key
        </label>
        <label>
          <input id="remap" type="checkbox" onclick="toggleModifier('secondShortcut', this.checked)">
          Use "ctrl" key together with the "a" key
        </label>
      </div>
    </div>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Passed Example 6

This [HTML document][] has two [keyboard events][keyboard event] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and exists an [instrument][] to prevent any result of the [keyboard event][] when the [keyboard event][] method `getModifierState` returns `false`. In this case, the same [instrument][] is used to prevent the result of both [keyboard events][keyboard event]

```html
<html>
  <head>
    <title>Passed Example 6</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'firstShortcut', shortcutKey: '+'}); registerShortcut({id: 'secondShortcut', shortcutKey: 'a'}); activateShortcuts();">
    <label for="target">Add to list (press "+" or "a" to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div>
        <label>
          <input id="remap" type="checkbox" onclick="toggleModifier('firstShortcut', this.checked); toggleModifier('secondShortcut', this.checked);">
          Use "ctrl" key together with the "+" or "a" key
        </label>
      </div>
    </div>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Passed Example 7

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and the result is not prevented because the [event target][] has [focus][].

```html
<html>
  <head>
    <title>Passed Example 7</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>

  <body onload="registerShortcut({shortcutKey: '+', focusOnly: true}); activateShortcuts();">
    <label for="target">Add to list (press "+" to add):</label>
    <input type="text" id="target" />
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

### Failed

#### Failed Example 1

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and:
 - doesn't exist any [instrument][] to prevent any result of the [keyboard event][]; nor
 - the result of the [keyboard event][] is prevented when the [event target][] doesn't have [focus][]; nor
 - exists any any [instrument][] to prevent any result of the [keyboard event][] when the [keyboard event][] method `getModifierState` returns `false`.

```html
<html>
  <head>
    <title>Failed Example 1</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({shortcutKey: '+', disabled: false}); activateShortcuts();">
    <label for="target">Add to list (press "+" to add):</label>
    <input type="text" id="target" />
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This document is not an [HTML document][].

```html
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  Sorry, your browser does not support inline SVG.  
</svg>
```

#### Inapplicable Example 2

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returns `true`.

```html
<html>
  <head>
    <title>Inapplicable Example 2</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>

  <body onload="registerShortcut({shortcutKey: '+', ctrlKey: true}); activateShortcuts();">
    <label for="target">Add to list (press "ctrl" and "+" to add):</label>
    <input type="text" id="target" />
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Inapplicable Example 3

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [non-printable character][].

```html
<html>
  <head>
    <title>Inapplicable Example 3</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>

  <body onload="registerShortcut({ctrlKey: true}); activateShortcuts();">
    <label for="target">Add to list (press "ctrl" and "+" to add):</label>
    <input type="text" id="target" />
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Inapplicable Example 4

This [HTML document][] has a [keyboard event][] that is not [dispatched][] to an [event target][].

```html
<html>
  <head>
    <title>Inapplicable Example 4</title>
    <script>
      function shortcut() {
        const event = new KeyboardEvent('keydown');
      }
    </script>
  </head>

  <body>
    <button onload="shortcut()">Add item to the list</button>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Inapplicable Example 5

This [HTML document][] has an element with the attribute `accesskey`. Accesskeys use [non-printable characters][].

```html
<html>
  <head>
    <title>Inapplicable Example 5</title>
    <script>
      function shortcut() {
        const button = document.querySelector("button");

        button.addEventListener("click", function() {
          document.getElementById("list").innerHTML +=
            "<li>Item</li>";
          event.preventDefault();
        });

        button.textContent = button.accessKeyLabel
          ? "Add item to list (" + button.accessKeyLabel + ")"
          : "Add item to list (accesskey +" + button.accessKey + ")";
      }
    </script>
  </head>

  <body onload="shortcut()">
    <button type="button" accesskey="+"></button>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

[HTML document]: https://dom.spec.whatwg.org/#concept-document
[focus]: https://html.spec.whatwg.org/#focusable-area
[event target]: https://dom.spec.whatwg.org/#eventtarget 
[keyboard event]: https://www.w3.org/TR/uievents/#events-keyboardevents
[legacy keyboard events]: https://www.w3.org/TR/uievents/#legacy-keyboardevent-events
[dispatched]: https://dom.spec.whatwg.org/#dispatching-events
[clearly labeled location]: #clearly-labeled-location 'Definition of clearly labeled location'
[web page]: #web-page-html 'Definition of web page'
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[printable character]: #printable-characters 'Definition of printable characters'
[non-printable characters]: #non-printable-characters 'Definition of non-printable characters'
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
input_aspects:
  - DOM Tree
acknowledgments:
  authors:
    - João Vicente
    - Carlos Duarte
---

## Applicability

The rule applies to any [keyboard event][] for which all is true: 
- the event's attribute `key` is a [printable character][] key; and
- the event's method `getModifierState` returns `false` for any of the [valid modifier keys][]; and
- the event is [dispatched][] to an [event target][] within a [HTML document][].

## Expectation

For each test target at least one of the following is true:
 - **Remap**: there is at least one [set of clearly labeled instruments][] to [block events][blocked event] that use the [same key][same key events] as the test target and whose `getModifierState` method returns `false` for any of the [valid modifier keys][]; or
 - **Focus**: if the [event target][] doesn't have [focus][] the event does not cause [changes in content][] of the [HTML document][].

## Assumptions

- The event listeners listening to [keyboard events][keyboard event] trigger a functionality in the web page. If they do not trigger any such functionality failing this rule might not be a failure of the success criterion.
- If there are ways to disable the result of [keyboard events][keyboard event] that do not require the user to interact with the web page (e.g. a setting at the operating system level), failing this rule might not be a failure of the success criterion.

## Accessibility Support

Currently [keyboard events][keyboard event] only support the types `keydown` and `keyup`. [Keyboard events][keyboard event] of type `keypressed` are considered [legacy keyboard events][] and are thus ignored by this rule.

## Background

- [Understanding Success Criterion 2.1.4: Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html)
- [G217 Providing a mechanism to allow users to remap or turn off character key shortcuts](https://www.w3.org/WAI/WCAG21/Techniques/general/G217)
- [F99 Failure of Success Criterion 2.1.4 due to implementing character key shortcuts that cannot be turned off or remapped](https://www.w3.org/WAI/WCAG21/Techniques/failures/F99)

## Test Cases

### Passed

#### Passed Example 1

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and exists an [instrument][] to **remap** the [keyboard event][] so that it requires that the method `getModifierState` returns `true`.

```html
<html>
  <head>
    <title>Passed Example 1</title>
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

#### Passed Example 2

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and exists an [instrument][] to disable the [keyboard event][]. A disabled event implies that the event is disabled when the `getModifierState` method returns `false`, therefore meeting the **remap** expectation.

```html
<html>
  <head>
    <title>Passed Example 2</title>
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

#### Passed Example 3

This [HTML document][] has two [keyboard events][keyboard event] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and for each [keyboard event][] exists an [instrument][] to **remap** the [keyboard event][] so that it requires that the method `getModifierState` returns `true`.

```html
<html>
  <head>
    <title>Passed Example 3</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'firstShortcut', shortcutKey: '+'}); registerShortcut({id: 'secondShortcut', shortcutKey: 'a'}); activateShortcuts();">
    <label for="target">Add to list (press "+" or "a" to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div>
        <label>
          <input id="remap1" type="checkbox" onclick="toggleModifier('firstShortcut', this.checked)">
          Use "ctrl" key together with the "+" key
        </label>
        <label>
          <input id="remap2" type="checkbox" onclick="toggleModifier('secondShortcut', this.checked)">
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

#### Passed Example 4

This [HTML document][] has two [keyboard events][keyboard event] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and exists an [instrument][] to **remap** the [keyboard event][] so that it requires that the method `getModifierState` returns `true`. In this example, the same [instrument][] is used to **remap** both [keyboard events][keyboard event]

```html
<html>
  <head>
    <title>Passed Example 4</title>
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

#### Passed Example 5

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, but the [event is blocked][blocked event] when the [event target][] doesn't have [focus][].

```html
<html>
  <head>
    <title>Passed Example 5</title>
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

#### Passed Example 6

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and there is an [instrument][] to disable the [keyboard event][] and another [instrument][] to **remap** the [keyboard event][] so that it requires that the method `getModifierState` returns `true`. The [instruments][instrument] can be found from a [clearly labeled location][].

```html
<html>
  <head>
    <title>Passed Example 6</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
    <script>
      function openModal() {
        document.getElementById('overlay').style.display = 'block'
      }
      function closeModal() {
        document.getElementById('overlay').style.display = 'none'
      }
    </script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
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
      <p>Disable/remap shortcut</p>
      <label>
        <input type="checkbox" onclick="toggleDisabled('singleShortcut', !this.checked)" checked>
        Toggle single character keyboard shortcut
      </label>
      <br>
      <label>
        <input id="remap" type="checkbox" onclick="toggleModifier('singleShortcut', this.checked)">
        Use "ctrl" key together with the "+" key
      </label>
      <br>
      <button onclick="closeModal();">Dismiss</button>
    </div>
    <p>To control the shortcuts activate the "Control shortcuts" button.</p>
    <input type="button" onclick="openModal()" value="Control shortcuts" />
    
    <label for="target">Add to list (press "+" to add):</label>
    <input type="text" id="target" />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

### Failed

#### Failed Example 1

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, but there is no [instrument][] to **remap** the [keyboard event][] and the [keyboard event][] is not [blocked][blocked event] when the [event target][] does not have [focus][].

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

#### Failed Example 2

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `false`, and there is an [instrument][] to disable the [keyboard event][] and another [instrument][] to **remap** the [keyboard event][] so that it requires that the method `getModifierState` returns `true`, but the [instruments][instrument] are not in a [clearly labeled location][].

```html
<html>
  <head>
    <title>Failed Example 2</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
    <script>
      function openModal() {
        document.getElementById('overlay').style.display = 'block'
      }
      function closeModal() {
        document.getElementById('overlay').style.display = 'none'
      }
    </script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
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
      <p>Disable/remap shortcut</p>
      <label>
        <input type="checkbox" onclick="toggleDisabled('singleShortcut', !this.checked)" checked>
        Toggle single character keyboard shortcut
      </label>
      <br>
      <label>
        <input id="remap" type="checkbox" onclick="toggleModifier('singleShortcut', this.checked)">
        Use "ctrl" key together with the "+" key
      </label>
      <br>
      <button onclick="closeModal();">Dismiss</button>
    </div>
    
    <input type="button" onclick="openModal()" value="Open modal" />
    
    <label for="target">Add to list (press "+" to add):</label>
    <input type="text" id="target" />
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

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] and the method `getModifierState` returning `true`.

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

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [non-printable character][non-printable characters].

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
        window.addEventListener('keydown', function(event) {
          const target = document.getElementById("target");

          if (event.key === "+") {
            document.getElementById("list").innerHTML += "<li>" + target.value + "</li>";
            target.value = "";
            event.preventDefault();
          }
        });
      }
    </script>
  </head>

  <body onload="shortcut()">
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
[changes in content]: #changes-in-content 'Definition of changes in content'
[clearly labeled location]: #clearly-labeled-location 'Definition of clearly labeled location'
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[set of clearly labeled instruments]: #set-of-clearly-labeled-instruments 'Definition of set of clearly labeled instruments'
[blocked event]: #blocked-event 'Definition of blocked event'
[printable character]: #printable-characters 'Definition of printable characters'
[non-printable characters]: #non-printable-characters 'Definition of non-printable characters'
[valid modifier keys]: https://www.w3.org/TR/uievents-key/#keys-modifier 'Definition of modifier keys'
[same key events]: #same-key-events 'Definition of same key events'

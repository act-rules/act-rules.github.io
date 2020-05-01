---
id: ffbc54
name: No keyboard shortcuts use only printable characters
rule_type: composite
description: |
  This rule checks that if keyboard shortcuts are implemented using only printable characters, then there is a mechanism to disable the shortcut, or to remap the shortcut to use one or more non-printable characters keys, or the shortcut for a user interface component is only available when that component has focus.
accessibility_requirements:
  wcag21:2.1.4: # Character Key Shortcuts (A)
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
input_rules:
  - 670a30
  - aa8b52
  - 1e9941
acknowledgements:
  authors:
    - João Vicente
    - Carlos Duarte
---

## Applicability

The rule applies to any [keyboard shortcut][] that requires pressing only [printable character][] keys to trigger within a [HTML document][].

## Expectation

For the test target, the outcome of at least one of the following rules is passed:

- [Printable keys only shortcut can be disabled](https://act-rules.github.io/rules/670a30)
- [Printable keys only shortcut can be remapped](https://act-rules.github.io/rules/aa8b52) 
- [Printable key shortcut is only active when component has focus](https://act-rules.github.io/rules/1e9941)

## Assumptions

This rule assumes as applicable [keyboard shortcuts][keyboard shortcut] those implemented by the [HTML document][] [content][]. Any other means (e.g. browser extensions, browser settings, user agents, external browser applications) are not considered.
This rule assumes as applicable [keyboard shortcuts][keyboard shortcut], those who result in an outcome.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.1.4: Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html)
- [G127 Providing a mechanism to allow users to remap or turn off character key shortcuts](https://www.w3.org/WAI/WCAG21/Techniques/general/G217)
- [F99 Failure of Success Criterion 2.1.4 due to implementing character key shortcuts that cannot be turned off or remapped](https://www.w3.org/WAI/WCAG21/Techniques/failures/F99)

## Test Cases

### Passed

#### Passed Example 1

This [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that can be disabled by an [instrument][] which is [visible][], [included in the accessibility tree][], and has a non-empty [accessible name][].

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

This [HTML document][] has two [keyboard shortcuts][keyboard shortcut] using only a [printable character][] and each one of them can be disabled by a [instrument][] which is [visible][], [included in the accessibility tree][], and has a non-empty [accessible name][]. In this case, each [keyboard shortcut][] is disabled by a different [instrument][].

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

This [HTML document][] has two [keyboard shortcuts][keyboard shortcut] using only a [printable character][] that can be disabled by a [instrument][] which is [visible][], [included in the accessibility tree][], and has a non-empty [accessible name][]. In this case, both [keyboard shortcuts][keyboard shortcut] are disabled by the same [instrument][].

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

This [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that can be remapped to a shortcut with a [non-printable character][non-printable characters].

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

This [HTML document][] has two [keyboard shortcuts][keyboard shortcut] using only a [printable character][], and each one of them can be remapped to a shortcut with a [non-printable character][non-printable characters].

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

This [HTML document][] has two [keyboard shortcuts][keyboard shortcut] using only a [printable character][] that can be remapped to a shortcut with a [non-printable character][non-printable characters].

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

This [HTML document][] has a single [printable character][] [keyboard shortcut][] for a [event target][] (using the `+` character), which is only available when that [event target][] has [focus][].

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

This [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that cannot be disabled.

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

This [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be disabled, but the disabling [instrument][] is not [visible][].

```html
<html>
  <head>
    <title>Failed Example 2</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+', disabled: false}); activateShortcuts();">
    <label for="target">Add to list (press "+" to add):</label>
    <input type="text" id="target" />
    <div style="position: absolute; margin-left: -9999px;">
      <label>
        <input type="checkbox" onclick="toggleDisabled('singleShortcut', !this.checked)" checked>
        Toggle single character keyboard shortcut
      </label>
    </div>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Failed Example 3

This [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be disabled, but the disabling [instrument][] is not [included in the accessibility tree][].

```html
<html>
  <head>
    <title>Failed Example 3</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+', disabled: false}); activateShortcuts();">
    <label for="target">Add to list (press "+" to add):</label>
    <input type="text" id="target" />
    <div aria-hidden="true">
      <label>
        <input type="checkbox" onclick="toggleDisabled('singleShortcut', !this.checked)" checked>
        Toggle single character keyboard shortcut
      </label>
    </div>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Failed Example 4

This [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be disabled, but the disabling [instrument][] has an empty (`""`) [accessible name][].

```html
<html>
  <head>
    <title>Failed Example 4</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
    <label for="target">Add to list (press "+" to add):</label>
    <input type="text" id="target" />
    <div>
      <label>
        <input type="checkbox" onclick="toggleDisabled('singleShortcut', !this.checked)" checked>
      </label>
    </div>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Failed Example 5

This [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that cannot be remapped.

```html
<html>
  <head>
    <title>Failed Example 5</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({shortcutKey: '+'}); activateShortcuts();">
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

#### Failed Example 6

This [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be remapped, but the remapping [instrument][] is not [visible][].

```html
<html>
  <head>
    <title>Failed Example 6</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
    <label for="target">Add to list (press "+" to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div style="position: absolute; margin-left: -9999px;">
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

#### Failed Example 7

This [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be remapped, but the remapping [instrument][] is not [included in the accessibility tree][].

```html
<html>
  <head>
    <title>Failed Example 7</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
    <label for="target">Add to list (press "+" to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div aria-hidden="true">
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

#### Failed Example 8

This [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be remapped, but the remapping [instrument][] has an empty (`""`) [accessible name][].

```html
<html>
  <head>
    <title>Failed Example 8</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
    <label for="target">Add to list (press "+" to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <input id="remap" type="checkbox" onclick="toggleModifier('singleShortcut', this.checked)">
    </div>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Failed Example 9

This [HTML document][] has a [keyboard shortcut][] using only a [printable character][] for a [event target][] which is available even when the [event target][] does not have [focus][].

```html
<html>
  <head>
    <title>Failed Example 9</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>

  <body onload="registerShortcut({shortcutKey: '+', focusOnly: false}); activateShortcuts();">
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

This [HTML document][] has a [keyboard shortcut][] that requires pressing one [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Inapplicable Example 2</title>
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

#### Inapplicable Example 3

This [HTML document][] has an element with the attribute `accesskey`. Accesskeys use [non-printable characters][].

```html
<html>
  <head>
    <title>Inapplicable Example 3</title>
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
[keyboard shortcut]: #keyboard-shortcut 'Keyboard shortcut'
[content]: https://www.w3.org/TR/WCAG21/#dfn-content
[focus]: https://html.spec.whatwg.org/#focusable-area
[event target]: https://dom.spec.whatwg.org/#eventtarget 
[event]: https://dom.spec.whatwg.org/#events
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[printable character]: #printable-characters 'Definition of printable characters'
[non-printable characters]: #non-printable-characters 'Definition of non-printable characters'
[visible]: #visible 'Definition of visible'
[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
---
id: 670a30
name: Printable keys only shortcut can be disabled
rule_type: atomic
description: |
  This rule checks that if keyboard shortcuts are implemented using only printable characters, a mechanism to disable the shortcut exists.
accessibility_requirements: # Remove whatever is not applicable
  wcag21:2.1.4: # Character Key Shortcuts (A)
    forConformance: true
    failed: further testing needed
    passed: satisfied
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgements:
  authors:
    - João Vicente
    - Carlos Duarte
---

## Applicability

The rule applies to any [keyboard shortcut][] that requires pressing only [printable character][] keys to trigger an [event][] within a [HTML document][].

## Expectation 1

For each test target, an [instrument][] to disable it is available.

**Note:** If multiple single [printable character][] [shortcuts][keyboard shortcut] exist, they all can be disabled by a single [instrument][].

## Expectation 2

The [instrument][] used to disable the [shortcut][keyboard shortcut] is [visible][] and [included in the accessibility tree][] with an [accessible name][] that is not empty (`""`).

## Assumptions

This rule assumes as applicable [keyboard shortcuts][keyboard shortcut] those implemented by the [HTML document][] [content][]. Any other means (e.g. browser extensions, browser settings, user agents, external browser applications) are not considered.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.1.4: Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html)
- [G127 Providing a mechanism to allow users to remap or Toggle character key shortcuts](https://www.w3.org/WAI/WCAG21/Techniques/general/G217)
- [F99 Failure of Success Criterion 2.1.4 due to implementing character key shortcuts that cannot be turned off or remapped](https://www.w3.org/WAI/WCAG21/Techniques/failures/F99)

## Test Cases

### Passed

#### Passed Example 1

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that can be disabled by an [instrument][] which is [visible][], [included in the accessibility tree][], and has a non-empty [accessible name][].

```html
<html>
  <head>
    <title>Passed Example 1 for rule 670a30</title>
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

The [HTML document][] has two [keyboard shortcuts][keyboard shortcut] using only a [printable character][] and each one of them can be disabled by a [instrument][] which is [visible][], [included in the accessibility tree][], and has a non-empty [accessible name][]. In this case, each [keyboard shortcut][] is disabled by a different [instrument][].

```html
<html>
  <head>
    <title>Passed Example 2 for rule 670a30</title>
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

The [HTML document][] has two [keyboard shortcuts][keyboard shortcut] using only a [printable character][] that can be disabled by a [instrument][] which is [visible][], [included in the accessibility tree][], and has a non-empty [accessible name][]. In this case, both [keyboard shortcuts][keyboard shortcut] are disabled by the same [instrument][].

```html
<html>
  <head>
    <title>Passed Example 3 for rule 670a30</title>
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

### Failed

#### Failed Example 1

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that cannot be disabled.

```html
<html>
  <head>
    <title>Failed Example 1 for rule 670a30</title>
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be disabled, but the disabling [instrument][] is not [visible][].

```html
<html>
  <head>
    <title>Failed Example 2 for rule 670a30</title>
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be disabled, but the disabling [instrument][] is not [included in the accessibility tree][].

```html
<html>
  <head>
    <title>Failed Example 3 for rule 670a30</title>
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be disabled, but the disabling [instrument][] has an empty (`""`) [accessible name][].

```html
<html>
  <head>
    <title>Failed Example 4 for rule 670a30</title>
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

### Inapplicable

#### Inapplicable Example 1

The document is not an [HTML document][].

```html
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  Sorry, your browser does not support inline SVG.  
</svg>
```

#### Inapplicable Example 2

This [HTML document][] has no [keyboard shortcut][] that requires pressing only [printable character][printable characters] (the only [keyboard shortcut][] requires pressing one [non-printable character][non-printable characters]).

```html
<html>
  <head>
    <title>Inapplicable Example 2 for rule 1e9941</title>
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

This [HTML document][] has no [keyboard shortcut][] that requires pressing only [printable character][printable characters] (the only [keyboard shortcut][] uses the attribute `accesskey` and accesskeys use [non-printable characters][]).

```html
<html>
  <head>
    <title>Inapplicable Example 3 for rule 670a30</title>
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
[keyboard shortcut]: https://www.w3.org/TR/WCAG21/#dfn-keyboard-shortcuts
[content]: https://www.w3.org/TR/WCAG21/#dfn-content
[event]: https://dom.spec.whatwg.org/#events
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[printable character]: #printable-characters 'Definition of printable characters'
[visible]: #visible 'Definition of visible'
[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[non-printable characters]: #non-printable-characters 'Definition of non-printable characters'

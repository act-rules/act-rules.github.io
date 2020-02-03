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

The rule applies to any [HTML document][] with at least one [keyboard shortcut][] that requires pressing only [printable character][] keys to trigger an action on a [user interface component][].

## Expectation

For the test target, the outcome of at least one of the following rules is passed:

- [Printable keys only shortcut can be disabled](https://act-rules.github.io/rules/670a30)
- [Printable keys only shortcut can be remapped](https://act-rules.github.io/rules/aa8b52) 
- [Printable key shortcut is only active when component has focus](https://act-rules.github.io/rules/1e9941)

## Assumptions

This rule assumes as applicable [keyboard shortcuts][keyboard shortcut] those implemented by the test target [content][]. Any other means (e.g. browser extensions, browser settings, user agents, external browser applications) are not considered.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.1.4: Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html)
- [G127 Providing a mechanism to allow users to remap or turn off character key shortcuts](https://www.w3.org/WAI/WCAG21/Techniques/general/G217)
- [F99 Failure of Success Criterion 2.1.4 due to implementing character key shortcuts that cannot be turned off or remapped](https://www.w3.org/WAI/WCAG21/Techniques/failures/F99)

## Test Cases

### Passed

#### Passed Example 1

The [HTML document][] has a single [printable character][] [keyboard shortcut][] for a [user interface component][], which is only available when that component has focus.

```html
<html>
  <head>
    <title>Passed Example 1</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>

  <body onload="shortcut({focusOnly: true})">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Passed Example 2

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that can be disabled by a [user interface component][] which is [visible][], [included in the accessibility tree][], and has a non-empty [accessible name][].

```html
<html>
  <head>
    <title>Passed Example 2</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut({reference: 'singleShortcut'})">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <label>
      <input type="checkbox" onclick="changeSetting('singleShortcut', 'disabled', this.checked)">
      Turn off single character keyboard shortcut
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that can be remapped to use a shortcut with a [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Passed Example 1 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut({reference: 'singleShortcut'})">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div>
        <label>
          <input id="remap" type="checkbox" onclick="changeSetting('singleShortcut', 'ctrlKey', this.checked)" />
          Use <strong>ctrl</strong> key together with the <strong>+</strong> key
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

The [HTML document][] has a single [printable character][] [keyboard shortcut][] for a [user interface component][], which is only available when that component has focus, and another [keyboard shortcut][] that requires pressing one [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Passed Example 4</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>

  <body onload="shortcut({focusOnly: true}, {shortcutKey: '«' , ctrlKey: true})">
    <label for="text">Add to list (press + or ctrl+« to add):</label>
    <input type="text" id="target" />
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Passed Example 5

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that can be disabled by a [user interface component][] which is [visible][], [included in the accessibility tree][], and has a non-empty [accessible name][], and another [keyboard shortcut][] that requires pressing one [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Passed Example 5</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut({reference: 'singleShortcut'}, {shortcutKey: '«' , ctrlKey: true})">
    <label for="text">Add to list (press + or ctrl+« to add):</label>
    <input type="text" id="target" />
    <label>
      <input type="checkbox" onclick="changeSetting('singleShortcut', 'disabled', this.checked)">
      Turn off single character keyboard shortcut
    </label>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Passed Example 6

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][], and it can be remapped to use a shortcut with a [non-printable character][non-printable characters], and another [keyboard shortcut][] that requires pressing one [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Passed Example 6</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut({reference: 'singleShortcut'}, {shortcutKey: '«' , ctrlKey: true})">
    <label for="text">Add to list (press + or ctrl+« to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div>
        <label>
          <input id="remap" type="checkbox" onclick="changeSetting('singleShortcut', 'ctrlKey', this.checked)" />
          Use <strong>ctrl</strong> key together with the <strong>+</strong> key
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

### Failed

#### Failed Example 1

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that cannot be disabled.

```html
<html>
  <head>
    <title>Failed Example 1</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut()">
    <label for="text">Add to list (press + to add):</label>
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that cannot be disabled, and another [keyboard shortcut][] using only a [printable character][] that can be disabled by a [user interface component][].

```html
<html>
  <head>
    <title>Failed Example 2</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut({}, {reference: 'singleShortcut', shortcutKey: '«'})">
    <label for="text">Add to list (press + or « to add):</label>
    <input type="text" id="target" />
    <label>
      <input type="checkbox" onclick="changeSetting('singleShortcut', 'disabled', this.checked)">
      Turn off « single character keyboard shortcut
    </label>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Failed Example 3

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be disabled, but the disabling [user interface component][] is not [visible][].

```html
<html>
  <head>
    <title>Failed Example 3</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut({reference: 'singleShortcut'})">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <div style="position: absolute; margin-left: -9999px;">
      <label>
        <input type="checkbox" onclick="changeSetting('singleShortcut', 'disabled', this.checked)">
        Turn off single character keyboard shortcut
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be disabled, but the disabling [user interface component][] is not [included in the accessibility tree][].

```html
<html>
  <head>
    <title>Failed Example 4</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut({reference: 'singleShortcut'})">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <div aria-hidden="true">
      <label>
        <input type="checkbox" onclick="changeSetting('singleShortcut', 'disabled', this.checked)">
        Turn off single character keyboard shortcut
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be disabled, but the disabling [user interface component][] has an empty (`""`) [accessible name][].

```html
<html>
  <head>
    <title>Failed Example 5</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut({reference: 'singleShortcut'})">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <div>
      <label>
        <input type="checkbox" onclick="changeSetting('singleShortcut', 'disabled', this.checked)">
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

#### Failed Example 6

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that cannot be remapped.

```html
<html>
  <head>
    <title>Failed Example 6</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut()">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Failed Example 7

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that cannot be remapped, and another [keyboard shortcut][] using only a [printable character][] that can be remapped to use a shortcut with a [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Failed Example 7</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut({}, {reference: 'singleShortcut', shortcutKey: '«'})">
    <label for="text">Add to list (press + or « to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div>
        <label>
          <input id="remap" type="checkbox" onclick="changeSetting('singleShortcut', 'ctrlKey', this.checked)" />
          Use <strong>ctrl</strong> key together with the <strong>«</strong> key
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be remapped, but the remapping [user interface component][] is not [visible][].

```html
<html>
  <head>
    <title>Failed Example 8</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut({reference: 'singleShortcut'})">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div style="position: absolute; margin-left: -9999px;">
        <label>
          <input id="remap" type="checkbox" onclick="changeSetting('singleShortcut', 'ctrlKey', this.checked)" />
          Use <strong>ctrl</strong> key together with the <strong>+</strong> key
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

#### Failed Example 9

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be remapped, but the remapping [user interface component][] is not [included in the accessibility tree][].

```html
<html>
  <head>
    <title>Failed Example 9</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut({reference: 'singleShortcut'})">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div aria-hidden="true">
        <label>
          <input id="remap" type="checkbox" onclick="changeSetting('singleShortcut', 'ctrlKey', this.checked)" />
          Use <strong>ctrl</strong> key together with the <strong>+</strong> key
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

#### Failed Example 10

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be remapped, but the remapping [user interface component][] has an empty (`""`) [accessible name][].

```html
<html>
  <head>
    <title>Failed Example 10</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="shortcut({reference: 'singleShortcut'})">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <input id="remap" type="checkbox" onclick="changeSetting('singleShortcut', 'ctrlKey', this.checked)" />
    </div>
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Failed Example 11

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] for a [user interface component][] which is available even when the component does not have focus.

```html
<html>
  <head>
    <title>Failed Example 11</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>

  <body onload="shortcut()">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <br />
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

#### Failed Example 12

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] for a [user interface component][] which is available even when the component does not have focus, and another [keyboard shortcut][] using only a [printable character][] for a [user interface component][] which is only available when that component has focus.

```html
<html>
  <head>
    <title>Failed Example 12</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>

  <body onload="shortcut({}, {focusOnly: true, shortcutKey: '«'})">
    <label for="text">Add to list (press + or « to add):</label>
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

The [HTML document][] does not use [keyboard shortcuts][keyboard shortcuts].

```html
<html>
  <div>Document content</div>
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

#### Inapplicable Example 3

The [HTML document][] has a [keyboard shortcut][] that requires pressing one [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Inapplicable Example 3</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>

  <body onload="shortcut({focusOnly: true, shortcutKey: '+' , ctrlKey: true})">
    <label for="text">Add to list (press ctrl and + to add):</label>
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

The [HTML document][] has an element with the attribute `accesskey`. Accesskeys use [non-printable characters][].

```html
<html>
  <head>
    <title>Inapplicable Example 4</title>
    <script>
      function shortcut(params) {
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

#### Inapplicable Example 5

The [HTML document][] has a [keyboard shortcut][] that requires pressing a single [printable character][] and doesn't trigger an action on a [user interface component][].

```html
<html>
  <head>
    <title>Inapplicable Example 5</title>
  </head>
  <script>
    function goToShortcut() {
      document.body.addEventListener("keydown", function(event) {
        if (event.key === "+") {
          document.getElementById('text').scrollIntoView();
        }
      });
    }
  </script>
  <body onload="goToShortcut();">
    <p>Press "+" key to go to the text at the bottom of the page.</p>
    <div style="height: 2000px;"></div>
    <p id="text">Some text at the bottom of the page.</p>
  </body>
</html>
```

[HTML document]: https://dom.spec.whatwg.org/#concept-document
[keyboard shortcut]: https://www.w3.org/TR/WCAG21/#dfn-keyboard-shortcuts
[content]: https://www.w3.org/TR/WCAG21/#dfn-content
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components
[printable character]: #printable-characters 'Definition of printable characters'
[non-printable characters]: #non-printable-characters 'Definition of non-printable characters'
[visible]: #visible 'Definition of visible'
[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'

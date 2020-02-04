---
id: aa8b52
name: Printable keys only shortcut can be remapped
rule_type: atomic
description: |
  This rule checks that if keyboard shortcuts are implemented using only printable characters, a mechanism to remap the shortcut to use one or more non-printable characters exists.
accessibility_requirements: 
  wcag21:2.1.4: # Character Key Shortcuts (A)
    forConformance: true
    failed: not satisfied
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

The rule applies to any [HTML document][] with at least one [keyboard shortcut][] that requires pressing only [printable character][] keys to trigger an action on a [user interface component][].

## Expectation 1

For each [user interface component][] that is a [descendant][] of the root node of the test target, each [printable character][] [shortcut][keyboard shortcut] that triggers the action of that [user interface component][] can be remapped to use one or more [non-printable characters][].

**Note:** If multiple single [printable character][] [shortcuts][keyboard shortcut] exist, they all can be remapped by a single [user interface component][].

## Expectation 2

The [user interface component][] used to disable the [shortcut][keyboard shortcut] must be [visible][] and [included in the accessibility tree][] with an [accessible name][] that is not empty (`""`).

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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that can be remapped to use a shortcut with a [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Passed Example 1 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut'}); activateShortcuts();">
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][], and it can be remapped to use a shortcut with a [non-printable character][non-printable characters], and another [keyboard shortcut][] that requires pressing one [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Passed Example 2 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut'}); registerShortcut({shortcutKey: 'a' , ctrlKey: true}); activateShortcuts();">
    <label for="target">Add to list (press "+" or "ctrl+a" to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div>
        <label>
          <input id="remap" type="checkbox" onclick="toggleModifier('singleShortcut', this.checked)" />
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

#### Passed Example 3

The [HTML document][] has two [keyboard shortcut][] using only a [printable character][], and each one of them can be remapped to use a shortcut with a [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Passed Example 3 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'firstShortcut'}); registerShortcut({id: 'secondShortcut', shortcutKey: 'a'}); activateShortcuts();">
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

#### Passed Example 4

The [HTML document][] has two [keyboard shortcut][] using only a [printable character][] that can be remapped to use a shortcut with a [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Passed Example 4 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'firstShortcut'}); registerShortcut({id: 'secondShortcut', shortcutKey: 'a'}); activateShortcuts();">
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

### Failed

#### Failed Example 1

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that cannot be remapped.

```html
<html>
  <head>
    <title>Failed Example 1 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut(); activateShortcuts();">
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] that cannot be remapped, and another [keyboard shortcut][] using only a [printable character][] that can be remapped to use a shortcut with a [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Failed Example 2 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut(); registerShortcut({id: 'singleShortcut', shortcutKey: 'a'}); activateShortcuts();">
    <label for="target">Add to list (press "+" or "a" to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div>
        <label>
          <input id="remap" type="checkbox" onclick="toggleModifier('singleShortcut', this.checked)">
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

#### Failed Example 3

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be remapped, but the remapping [user interface component][] is not [visible][].

```html
<html>
  <head>
    <title>Failed Example 3 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut'}); activateShortcuts();">
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

#### Failed Example 4

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be remapped, but the remapping [user interface component][] is not [included in the accessibility tree][].

```html
<html>
  <head>
    <title>Failed Example 5 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut'}); activateShortcuts();">
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

#### Failed Example 5

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be remapped, but the remapping [user interface component][] has an empty (`""`) [accessible name][].

```html
<html>
  <head>
    <title>Failed Example 5 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/shortcut.js"></script>
  </head>
  <body onload="registerShortcut({id: 'singleShortcut'}); activateShortcuts();">
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

### Inapplicable

#### Inapplicable Example 1

The [HTML document][] does not use [keyboard shortcuts][keyboard shortcut].

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
    <title>Inapplicable Example 3 for rule 1e9941</title>
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

The [HTML document][] has an element with the attribute `accesskey`. Accesskeys use [non-printable characters][].

```html
<html>
  <head>
    <title>Inapplicable Example 4 for rule aa8b52</title>
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

#### Inapplicable Example 5

The [HTML document][] has a [keyboard shortcut][] that requires pressing a single [printable character][] and doesn't trigger an action on a [user interface component][].

```html
<html>
  <head>
    <title>Inapplicable Example 5 for rule aa8b52</title>
  </head>
  <style>
    div {
      height: 2000px;
    }
  </style>
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
    <div></div>
    <p id="text">Some text at the bottom of the page.</p>
  </body>
</html>
```

[HTML document]: https://dom.spec.whatwg.org/#concept-document
[keyboard shortcut]: https://www.w3.org/TR/WCAG21/#dfn-keyboard-shortcuts
[content]: https://www.w3.org/TR/WCAG21/#dfn-content
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components
[printable character]: #printable-characters 'Definition of printable characters'
[non-printable characters]: #non-printable-characters 'Definition of non-printable characters'
[visible]: #visible 'Definition of visible'
[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'

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

The rule applies to any [HTML document][] with at least one [keyboard shortcut][] that requires pressing only [printable character][] keys.

## Expectation

For each [user interface component][] that is a [descendent][] of the root node of the test target, if a [printable character][] [shortcut][keyboard shortcut] exists to trigger the action of that [user interface component][], it can be remapped to use one or more [non-printable characters][].

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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][], and it can be remapped to use a shortcut with a [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Passed Example 1 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/script.js"></script>
  </head>
  <body onload="shortcut({focusOnly: false, shortcutKey: '+' , ctrlKey: false})">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div>
        <label>
          <input id="remap" type="checkbox" onclick="globalParams.ctrlKey = this.checked" />
          Use <strong>ctrl</strong> key
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][], and it cannot be remapped.

```html
<html>
  <head>
    <title>Failed Example 1 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/script.js"></script>
  </head>
  <body onload="shortcut({focusOnly: false, shortcutKey: '+' , ctrlKey: false})">
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be remapped, but the remapping [user interface component][] is not [visible][].

```html
<html>
  <head>
    <title>Failed Example 2 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/script.js"></script>
  </head>
  <body onload="shortcut({focusOnly: false, shortcutKey: '+' , ctrlKey: false})">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div style="position: absolute; margin-left: -9999px;">
        <label>
          <input id="remap" type="checkbox" onclick="globalParams.ctrlKey = this.checked" />
          Use <strong>ctrl</strong> key
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be remapped, but the remapping [user interface component][] is not [included in the accessibility tree][].

```html
<html>
  <head>
    <title>Failed Example 3 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/script.js"></script>
  </head>
  <body onload="shortcut({focusOnly: false, shortcutKey: '+' , ctrlKey: false})">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <div aria-hidden="true">
        <label>
          <input id="remap" type="checkbox" onclick="globalParams.ctrlKey = this.checked" />
          Use <strong>ctrl</strong> key
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] which can be remapped, but the remapping [user interface component][] has an empty (`""`) [accessible name][].

```html
<html>
  <head>
    <title>Failed Example 4 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/script.js"></script>
  </head>
  <body onload="shortcut({focusOnly: false, shortcutKey: '+' , ctrlKey: false})">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="target" />
    <div>
      <div>Remap shortcut</div>
      <input id="remap" type="checkbox" onclick="globalParams.ctrlKey = this.checked" />
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
    <title>Inapplicable Example 3 for rule aa8b52</title>
    <script src="/test-assets/ffbc54/script.js"></script>
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
    <title>Inapplicable Example 4 for rule aa8b52</title>
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

[HTML document]: https://dom.spec.whatwg.org/#concept-document
[keyboard shortcut]: https://www.w3.org/TR/WCAG21/#dfn-keyboard-shortcuts
[content]: https://www.w3.org/TR/WCAG21/#dfn-content
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components
[printable character]: #printable-characters 'Definition of printable characters'
[non-printable characters]: #non-printable-characters 'Definition of non-printable characters'
[visible]: #visible 'Definition of visible'
[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'

---
id: 1e9941
name: Printable key shortcut is only active when component has focus
rule_type: atomic
description: |
  This rule checks that if keyboard shortcuts for a user interface component are implemented using only printable characters, then they are only available when that component has focus.
accessibility_requirements: # Remove whatever is not applicable
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

## Expectation

For each [user interface component][] that is a [descendant][] of the root node of the test target, the [printable character][] [shortcut][keyboard shortcut] that triggers the action of that [user interface component][] can only be triggered when that component has [focus][].

## Assumptions

This rule assumes as applicable [keyboard shortcuts][keyboard shortcut] those implemented by the test target [content][]. Any other means (e.g. browser extensions, browser settings, user agents, external browser applications) are not considered.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.1.4: Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html)

## Test Cases

### Passed

#### Passed Example 1

The [HTML document][] has a single [printable character][] [keyboard shortcut][] for a [user interface component][], which is only available when that component has focus.

```html
<html>
  <head>
    <title>Passed Example 1 for rule 1e9941</title>
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

The [HTML document][] has a single [printable character][] [keyboard shortcut][] for a [user interface component][], which is only available when that component has focus, and another [keyboard shortcut][] that requires pressing one [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Passed Example 2 for rule 1e9941</title>
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

### Failed

#### Failed Example 1

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] for a [user interface component][] which is available even when the component does not have focus.

```html
<html>
  <head>
    <title>Failed Example 1 for rule 1e9941</title>
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] for a [user interface component][] which is available even when the component does not have focus, and another [keyboard shortcut][] using only a [printable character][] for a [user interface component][] which is only available when that component has focus.

```html
<html>
  <head>
    <title>Failed Example 2 for rule 1e9941</title>
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

  <body onload="shortcut({ctrlKey: true})">
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
    <title>Inapplicable Example 4 for rule 1e9941</title>
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
    <title>Inapplicable Example 5 for rule 1e9941</title>
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
    <div style="height: 2000px"></div>
    <p id="text">Some text at the bottom of the page.</p>
  </body>
</html>
```

[html document]: https://dom.spec.whatwg.org/#concept-document
[keyboard shortcut]: https://www.w3.org/TR/WCAG21/#dfn-keyboard-shortcuts
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[content]: https://www.w3.org/TR/WCAG21/#dfn-content
[printable character]: #printable-characters 'Definition of printable characters'
[non-printable characters]: #non-printable-characters 'Definition of non-printable characters'
[focus]: https://html.spec.whatwg.org/#focusable-area

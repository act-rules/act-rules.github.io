---
id: 1e9941
name: Printable key shortcut is only active when component has focus
rule_type: atomic
description: |
  This rule checks that keyboard shortcuts for user interface components using only printable characters are only available when the component has focus.
accessibility_requirements: # Remove whatever is not applicable
  wcag21:2.1.4: # Character Key Shortcuts (A)
    forConformance: false
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

The rule applies to any [keyboard shortcut][] that requires pressing only [printable character][] keys within an [HTML document][] and whose [event target][] can receive [focus][].

## Expectation

For each test target, if its [event target][] does not have [focus][] the outcome of the event is prevented.

## Assumptions

This rule assumes as applicable [keyboard shortcuts][keyboard shortcut] those implemented by the [HTML document][] [content][]. Any other means (e.g. browser extensions, browser settings, user agents, external browser applications, ...) are not considered.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.1.4: Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html)

## Test Cases

### Passed

#### Passed Example 1

This [HTML document][] has a single [printable character][] [keyboard shortcut][] for a [event target][] (using the `+` character), which is only available when that [event target][] has [focus][].

```html
<html>
  <head>
    <title>Passed Example 1 for rule 1e9941</title>
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

This [HTML document][] has a [keyboard shortcut][] using only a [printable character][] for a [event target][] which is available even when the [event target][] does not have [focus][].

```html
<html>
  <head>
    <title>Failed Example 1 for rule 1e9941</title>
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

This [HTML document][] has a [keyboard shortcut][] by means of the attribute `accesskey` and accesskeys use [non-printable characters][].

```html
<html>
  <head>
    <title>Inapplicable Example 3 for rule 1e9941</title>
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

[html document]: https://dom.spec.whatwg.org/#concept-document
[keyboard shortcut]: #keyboard-shortcut 'Keyboard shortcut'
[content]: https://www.w3.org/TR/WCAG21/#dfn-content
[focus]: https://html.spec.whatwg.org/#focusable-area
[event]: https://dom.spec.whatwg.org/#events
[event target]: https://dom.spec.whatwg.org/#eventtarget 
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[printable character]: #printable-characters 'Definition of printable characters'
[non-printable characters]: #non-printable-characters 'Definition of non-printable characters'

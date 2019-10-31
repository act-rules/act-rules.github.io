---
id: 1e9941
name: Keyboard shortcut is only active when component has focus
rule_type: atomic
description: |
  This rule checks that if keyboard shortcuts are implemented using only printable characters for a user interface component, then they are only available when that component has focus.
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

The rule applies to any [HTML document][] with [keyboard shortcuts][].

## Expectation

For each [user interface component][] that is a [descendent][] of the root node of the test target, if [keyboard shortcuts][] are implemented using only [printable characters][], then they are only available when that component has focus.

## Assumptions

This rule assumes as applicable [keyboard shortcuts][] those implemented by the test target [content][]. Any other means (e.g. browser extensions, user agents, external browser applications) are not considered.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.1.4: Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html)
- [G127 Providing a mechanism to allow users to remap or turn off character key shortcuts](https://www.w3.org/WAI/WCAG21/Techniques/general/G217)
- [F99 Failure of Success Criterion 2.1.4 due to implementing character key shortcuts that cannot be turned off or remapped](https://www.w3.org/WAI/WCAG21/Techniques/failures/F99)

## Test Cases

### Passed

#### Passed Example 1

The [HTML document][] has a [keyboard shortcut][] that uses one [printable][printable characters] and one [non-printable characters][].

```html
<html>
  <head>
    <title>Passed Example 1</title>
    <script>
      function shortcut(event) {
        if (event.key === 'i' && event.ctrlKey) {
          const text = document.getElementById('text');
          text.className = text.className === 'italic' ? '' : 'italic';
        }
      }
      document.body.addEventListener('keydown', shortcut);
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <div>Press <strong>ctrl+i</strong> to toggle italic format</div>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Passed Example 2

The [HTML document][] has an element with the attribute `accesskey`. Accesskeys use [non-printable characters][].

```html
<html>
  <head>
    <title>Passed Example 2</title>
    <script>
      function shortcut() {
        const button = document.getElementById('italic');

        button.addEventListener('click', function() {
          const text = document.getElementById('text');
          text.className = text.className === 'italic' ? '' : 'italic';
        });

        button.textContent +=
          button.accessKeyLabel ? ' (' + button.accessKeyLabel + ')' : ' (accesskey +' + button.accessKey + ')';
      }
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body onload="shortcut();">
    <button id="italic" type="button" accessKey="i">Toggle italic format</button>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Passed Example 3

The [HTML document][] has a single [printable character][printable characters] [keyboard shortcut][] for a [user interface component][], which is only available when that component has focus.

```html
<html>
  <head>
    <title>Passed Example 3</title>
    <script>
      function shortcut(event) {
        const text = document.getElementById('text');

        if (event.key === '+' && document.activeElement === text) {
          document.getElementById('list').innerHTML += '<li>' + text + '</li>';
          document.getElementById('text').value = '';
          event.preventDefault();
        }
      }
      document.body.addEventListener('keydown', shortcut);
    </script>
  </head>
  <body>
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="text">
    <br>
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

### Failed

#### Failed Example 1

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][printable characters] for a [user interface component][], and it's available even when the component does not have focus.

```html
<html>
  <head>
    <title>Failed Example 1</title>
    <script>
      function shortcut(event) {
        if (event.key === '+') {
          event.preventDefault();

          const text = document.getElementById('text');
          document.getElementById('list').innerHTML += '<li>' + text.value + '</li>';
          document.getElementById('text').value = '';
        }
      }
      document.body.addEventListener('keydown', shortcut);
    </script>
  </head>
  <body>
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="text"></input>
    <br>
    <div>
      To do list
    </div>
    <ul id="list"></ul>
  </body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The [HTML document][] does not use [keyboard shortcuts][].

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

[HTML document]: https://dom.spec.whatwg.org/#concept-document
[keyboard shortcuts]: https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-keyboard-shortcut
[keyboard shortcut]: https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-keyboard-shortcut
[user interface component]: https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-user-interface-component
[descendent]: https://dom.spec.whatwg.org/#concept-tree-descendant
[content]: https://www.w3.org/TR/WCAG21/#dfn-content
[printable characters]: #printable-characters 'Printable characters'
[non-printable characters]: #non-printable-characters 'Non-printable characters'

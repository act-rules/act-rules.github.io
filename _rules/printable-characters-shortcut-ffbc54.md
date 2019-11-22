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

The rule applies to any [HTML document][] with at least one [keyboard shortcut][] that requires pressing only [printable character][] keys.

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

The [HTML document][] has a [keyboard shortcut][keyboard shortcuts] that uses one [printable][printable characters] and one [non-printable characters][].

```html
<html>
  <head>
    <title>Passed Example 1</title>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(event) {
          if (event.key === 'i' && event.ctrlKey) {
            const text = document.getElementById('text');
            text.className = text.className === 'italic' ? '' : 'italic';
          }
        });
      }
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body onload="shortcut();">
    <div>Press <strong>ctrl+i</strong> to toggle italic format</div>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Passed Example 2

The [HTML document][] has a [keyboard shortcut][keyboard shortcuts] using only a [printable character][printable characters], and it can be disabled.

```html
<html>
  <head>
    <title>Passed Example 2</title>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(event) {
          if (event.key === 'i' && !document.getElementById('turn_off').checked) {
            const text = document.getElementById('text');
            text.className = text.className === 'italic' ? '' : 'italic';
          }
        });
      }
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body onload="shortcut();">
    <div>Press <strong>i</strong> to toggle italic format</div>
    <label>
      <input id="turn_off" type="checkbox">
      Turn off shortcut
    </label>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Passed Example 3

The [HTML document][] has a [keyboard shortcut][keyboard shortcuts] using only a [printable character][printable characters], and it can be remapped to use a shortcut with a [non-printable character][non-printable characters].

```html
<html>
  <head>
    <title>Passed Example 3</title>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(event) {
          if ((document.getElementById('remap').checked && event.key === 'i' && event.ctrlKey) ||
              (!document.getElementById('remap').checked && event.key === 'i' && !event.ctrlKey)) {

            const text = document.getElementById('text');
            text.className = text.className === 'italic' ? '' : 'italic';
          }
        });
      }
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body onload="shortcut();">
    <div>Press <strong>i</strong> to toggle italic format</div>
    <div>
      <div>Remap shortcut</div>
      <div>
        <label>
          <input id="remap" type="checkbox">
          Use <strong>ctrl</strong> key
        </label>
      </div>
    </div>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Passed Example 4

The [HTML document][] has an element with the attribute `accesskey`. Accesskeys use [non-printable characters][].

```html
<html>
  <head>
    <title>Passed Example 4</title>
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

#### Passed Example 5

The [HTML document][] has an element with the attribute `accesskey`. Accesskeys use [non-printable characters][].

```html
<html>
  <head>
    <title>Passed Example 5</title>
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

### Failed

#### Failed Example 1

The [HTML document][] has a [keyboard shortcut][keyboard shortcuts] using only a [printable character][printable characters], and it cannot be disabled.

```html
<html>
  <head>
    <title>Failed Example 1</title>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(event) {
          if (event.key === 'i') {
            const text = document.getElementById('text');
            text.className = text.className === 'italic' ? '' : 'italic';
          }
        });
      }
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body onload="shortcut();">
    <div>Press <strong>i</strong> to toggle italic format</div>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Failed Example 2

The [HTML document][] has a [keyboard shortcut][keyboard shortcuts] using only a [printable character][printable characters], and it can be disabled, but the disable [mechanism][] is not [visible][].

```html
<html>
  <head>
    <title>Failed Example 2</title>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(event) {
          if (event.key === 'i' && !document.getElementById('turn_off').checked) {
            const text = document.getElementById('text');
            text.className = text.className === 'italic' ? '' : 'italic';
          }
        });
      }
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body onload="shortcut();">
    <div>Press <strong>i</strong> to toggle italic format</div>
    <div style="position: absolute; margin-left: -9999px;">
      <label>
        <input id="turn_off" type="checkbox">
        Turn off shortcut
      </label>
    </div>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Failed Example 3

The [HTML document][] has a [keyboard shortcut][keyboard shortcuts] using only a [printable character][printable characters], and it can be disabled, but the disable [mechanism][] is not is not [included in the accessibility tree][].

```html
<html>
  <head>
    <title>Failed Example 3</title>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(event) {
          if (event.key === 'i' && !document.getElementById('turn_off').checked) {
            const text = document.getElementById('text');
            text.className = text.className === 'italic' ? '' : 'italic';
          }
        });
      }
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body onload="shortcut();">
    <div>Press <strong>i</strong> to toggle italic format</div>
    <div aria-hidden="true">
      <label>
        <input id="turn_off" type="checkbox">
        Turn off shortcut
      </label>
    </div>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Failed Example 4

The [HTML document][] has a [keyboard shortcut][keyboard shortcuts] using only a [printable character][printable characters], and it can be disabled, but the disable [mechanism][] has an empty ("") [accessible name][].

```html
<html>
  <head>
    <title>Failed Example 4</title>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(event) {
          if (event.key === 'i' && !document.getElementById('turn_off').checked) {
            const text = document.getElementById('text');
            text.className = text.className === 'italic' ? '' : 'italic';
          }
        });
      }
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body onload="shortcut();">
    <div>Press <strong>i</strong> to toggle italic format</div>
    <span>Turn off shortcut</span>
    <div>
      <label>
        <input id="turn_off" type="checkbox">
      </label>
    </div>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Failed Example 5

The [HTML document][] has a [keyboard shortcut][keyboard shortcuts] using only a [printable character][printable characters], and it cannot be remapped.

```html
<html>
  <head>
    <title>Failed Example 5</title>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(event) {
          if (event.key === 'i') {
            const text = document.getElementById('text');
            text.className = text.className === 'italic' ? '' : 'italic';
          }
        });
      }
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body onload="shortcut();">
    <div>Press <strong>i</strong> to toggle italic format</div>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Failed Example 6

The [HTML document][] has a [keyboard shortcut][keyboard shortcuts] using only a [printable character][printable characters], and it can be remapped to use a shortcut with a [non-printable character][non-printable characters], but the remap [mechanism][] is not [visible][].

```html
<html>
  <head>
    <title>Failed Example 6</title>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(event) {
          if ((document.getElementById('remap').checked && event.key === 'i' && event.ctrlKey) ||
              (!document.getElementById('remap').checked && event.key === 'i' && !event.ctrlKey)) {

            const text = document.getElementById('text');
            text.className = text.className === 'italic' ? '' : 'italic';
          }
        });
      }
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body onload="shortcut();">
    <div>Press <strong>i</strong> to toggle italic format</div>
    <div>
      <div>Remap shortcut</div>
      <div style="position: absolute; margin-left: -9999px;">
        <label>
          <input id="remap" type="checkbox">
          Use <strong>ctrl</strong> key
        </label>
      </div>
    </div>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Failed Example 7

The [HTML document][] has a [keyboard shortcut][keyboard shortcuts] using only a [printable character][printable characters], and it can be remapped to use a shortcut with a [non-printable character][non-printable characters], but the remap [mechanism][] is not [included in the accessibility tree][].

```html
<html>
  <head>
    <title>Failed Example 7</title>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(event) {
          if ((document.getElementById('remap').checked && event.key === 'i' && event.ctrlKey) ||
              (!document.getElementById('remap').checked && event.key === 'i' && !event.ctrlKey)) {

            const text = document.getElementById('text');
            text.className = text.className === 'italic' ? '' : 'italic';
          }
        });
      }
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body onload="shortcut();">
    <div>Press <strong>i</strong> to toggle italic format</div>
    <div>
      <div>Remap shortcut</div>
      <div aria-hidden="true">
        <label>
          <input id="remap" type="checkbox">
          Use <strong>ctrl</strong> key
        </label>
      </div>
    </div>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Failed Example 8

The [HTML document][] has a [keyboard shortcut][keyboard shortcuts] using only a [printable character][printable characters], and it can be remapped to use a shortcut with a [non-printable character][non-printable characters], but the remap [mechanism][] has an empty ("") [accessible name][].

```html
<html>
  <head>
    <title>Failed Example 8</title>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(event) {
          if ((document.getElementById('remap').checked && event.key === 'i' && event.ctrlKey) ||
              (!document.getElementById('remap').checked && event.key === 'i' && !event.ctrlKey)) {

            const text = document.getElementById('text');
            text.className = text.className === 'italic' ? '' : 'italic';
          }
        });
      }
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body onload="shortcut();">
    <div>Press <strong>i</strong> to toggle italic format</div>
    <div>
      <div>Use <strong>ctrl</strong> key</div>
      <input id="remap" type="checkbox">
    </div>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Failed Example 9

The [HTML document][] has a [keyboard shortcut][keyboard shortcuts] using only a [printable character][printable characters] for a [user interface component][], and it's available even when the component does not have focus.

```html
<html>
  <head>
    <title>Failed Example 9</title>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(event) {
          if (event.key === '+') {
            event.preventDefault();

            const text = document.getElementById('text');
            document.getElementById('list').innerHTML += '<li>' + text.value + '</li>';
            text.value = '';
          }
        });
      }
    </script>
  </head>
  <body onload="shortcut();">
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

[HTML document]: https://dom.spec.whatwg.org/#concept-document
[keyboard shortcut]: https://www.w3.org/TR/WCAG21/#dfn-keyboard-shortcuts
[mechanism]: https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-mechanism
[content]: https://www.w3.org/TR/WCAG21/#dfn-content
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components
[printable character]: #printable-characters 'Definition of printable characters'
[non-printable characters]: #non-printable-characters 'Definition of non-printable characters'
[visible]: #visible 'Definition of visible'
[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'

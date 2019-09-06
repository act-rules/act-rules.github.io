---
id: 1e9941
name: Keyboard shortcut is only active when component has focus
rule_type: atomic

description: |
  This rule checks that if keyboard shortcuts using only letter, number, sign or punctuation keys for a user interface component are implemented are only active when that component has focus

accessibility_requirements: # Remove whatever is not applicable
  wcag21:2.1.4: # Character Key Shortcuts (A)
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed

input_aspects:
  - DOM Tree
  - CSS Styling

authors:
  - João Vicente
  - Carlos Duarte
---

## Applicability

The rule applies to any [HTML document](https://dom.spec.whatwg.org/#concept-document).

## Expectation

For each target element if [keyboard shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-keyboard-shortcut) using only letter, number, sign or punctuation keys for a [user interface component](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-user-interface-component) are implemented by the target's content are only active when that component has focus

**Note:** [keyboard shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-keyboard-shortcut) implemented by other means (e.g. browser extensions) are not considered

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.1.4: Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html)
- [G127 Providing a mechanism to allow users to remap or turn off character key shortcuts](https://www.w3.org/WAI/WCAG21/Techniques/general/G217)
- [F99 Failure of Success Criterion 2.1.4 due to implementing character key shortcuts that cannot be turned off or remapped](https://www.w3.org/WAI/WCAG21/Techniques/failures/F99)

## Test Cases

### Passed

#### Passed Example 1

[HTML document](https://dom.spec.whatwg.org/#concept-document) does not use keyboard shortcuts

```html
<div>document content</div>
```

#### Passed Example 2

[HTML document](https://dom.spec.whatwg.org/#concept-document) with [keyboard shortcut](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-keyboard-shortcut) but not using only letter, number, sign or punctuation keys

```html
<html>
  <head>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(key) {
          if (key.key === 'i' && key.ctrlKey) {
            var text = document.getElementById('text');
            if (text.className === 'italic') {
              text.className = '';
            } else {
              text.className = 'italic';
            }
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
    <div>press <strong>ctrl+i</strong> to format the text to italic</div>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Passed Example 3

[HTML document](https://dom.spec.whatwg.org/#concept-document) with [keyboard shortcut](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-keyboard-shortcut) using only letter keys for a [user interface component](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-user-interface-component) is only available when the component has focus

```html
<label for="topping">Choose your favorite ice cream topping:</label>
<select id="topping">
  <option>Chocolate</option>
  <option>Strawberry</option>
  <option>Vanilla</option>
</select>
```

#### Passed Example 4

[HTML document](https://dom.spec.whatwg.org/#concept-document) with an element with the attribute accesskey

```html
<html>
  <head>
    <script>
      function load() {
        var button = document.getElementById('italic');
        button.addEventListener('click', function() {
          var text = document.getElementById('text');
          if (text.className === 'italic') {
            text.className = '';
          } else {
            text.className = 'italic';
          }
        });

        if (button.accessKeyLabel) {
          button.textContent += ' (' + button.accessKeyLabel + ')';
        } else {
          button.textContent += ' (accesskey +' + button.accessKey + ')';
        }
      }
    </script>
    <style>
      .italic {
        font-style: italic;
      }
    </style>
  </head>
  <body onload="load();">
    <button id="italic" type="button" accessKey="i">italic</button>
    <div id="text">Some text inside the document content</div>
  </body>
</html>
```

#### Passed Example 5

[HTML document](https://dom.spec.whatwg.org/#concept-document) with [keyboard shortcut](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-keyboard-shortcut) using only a sign key for a [user interface component](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-user-interface-component) is only available when the component has focus

```html
<html>
  <head>
    <script>
      function italic() {
        document.body.addEventListener('keydown', function(key) {
          if (key.key === '+' && document.getElementById('text') === document.activeElement) {
            var text = document.getElementById('text');
            addToList(text.value);
            key.preventDefault();
          }
        });
      }

      function addToList(text) {
        document.getElementById('list').innerHTML += '<li>' + text + '</li>';
        document.getElementById('text').value = '';
      }
    </script>
  </head>
  <body onload="italic();">
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

### Failed

#### Failed Example 1

[HTML document](https://dom.spec.whatwg.org/#concept-document) with [keyboard shortcut](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-keyboard-shortcut) using only a sign key for a [user interface component](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-user-interface-component) is available even when the component does not have focus

```html
<html>
  <head>
    <script>
      function italic() {
        document.body.addEventListener('keydown', function(key) {
          if (key.key === '+') {
            var text = document.getElementById('text');
            addToList(text.value);
            key.preventDefault();
          }
        });
      }

      function addToList(text) {
        document.getElementById('list').innerHTML += '<li>' + text + '</li>';
        document.getElementById('text').value = '';
      }
    </script>
  </head>
  <body onload="italic();">
    <label for="text">Add to list (press + to add):</label>
    <input type="text" id="text"></input>
    <br>
    <div>
      To do list
    </div>
    <ul id="list">

    </ul>
  </body>
</html>
```

#### Failed Example 2

[HTML document](https://dom.spec.whatwg.org/#concept-document) with [keyboard shortcut](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-keyboard-shortcut) using only a sign key for a [user interface component](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#dfn-user-interface-component) is available even when the component does not have focus

```html
<html>
  <head>
    <script>
      function changeTopping() {
        document.body.addEventListener('keydown', function(key) {
          switch(key.key) {
            case 'c':
              document.getElementById('topping').value = 'chocolate';
              break;
            case 's':
            document.getElementById('topping').value = 'strawberry';
              break;
            case 'v':
            document.getElementById('topping').value = 'vanilla';
              break;
          }
        });
      }
    </script>
  </head>
  <body onload="changeTopping();">
    <label for="topping">Choose your favorite ice cream topping:</label>
    <select id="topping">
      <option value="chocolate">Chocolate</option>
      <option value="strawberry">Strawberry</option>
      <option value="vanilla">Vanilla</option>
    </select>
  </body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The document is not an [HTML document](https://dom.spec.whatwg.org/#concept-document)

```html
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  Sorry, your browser does not support inline SVG.  
</svg>
```

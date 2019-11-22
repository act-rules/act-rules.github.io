---
id: 1e9941
name: Printable key shortcut is only active when component has focus
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

The rule applies to any [HTML document][] with at least one [keyboard shortcut][] that requires pressing only [printable character][] keys.

## Expectation

For each [user interface component][] that is a [descendent][] of the root node of the test target, a [printable character][] [shortcut][keyboard shortcut] is only available when that component has [focus][].

## Assumptions

This rule assumes as applicable [keyboard shortcuts][keyboard shortcuts] those implemented by the test target [content][]. Any other means (e.g. browser extensions, browser settings, user agents, external browser applications) are not considered.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.1.4: Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html)
- [G127 Providing a mechanism to allow users to remap or turn off character key shortcuts](https://www.w3.org/WAI/WCAG21/Techniques/general/G217)

## Test Cases

### Passed

#### Passed Example 1

The [HTML document][] has a [keyboard shortcut][] that uses one [printable][printable character] and one [non-printable characters][].

```html
<html>
<head>
	<title>Passed Example 1 for rule 1e9941</title>
	<script>
		function shortcut() {
			document.body.addEventListener('keydown', function (event) {
				if (event.key === 'i' && event.ctrlKey) {
					italic();
				}
			});
		}
		function italic() {
			const text = document.getElementById('text');
			text.className = text.className === 'italic' ? '' : 'italic';
		}
	</script>
	<style>
		.italic {
			font-style: italic;
		}
	</style>
</head>
<body onload="shortcut();">
	<button onclick="italic()">Italic (ctrl+i)</button>
	<div id="text">Some text inside the document content</div>
</body>
</html>
```

#### Passed Example 2

The [HTML document][] has an element with the attribute `accesskey`. Accesskeys use [non-printable characters][].

```html
<html>
  <head>
    <title>Passed Example 2 for rule 1e9941</title>
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

The [HTML document][] has a single [printable character][] [keyboard shortcut][] for a [user interface component][], which is only available when that component has focus.

```html
<html>
  <head>
    <title>Passed Example 3 for rule 1e9941</title>
    <script>
      function shortcut() {
        document.body.addEventListener('keydown', function(event) {
          const text = document.getElementById('text');

          if (event.key === '+' && document.activeElement === text) {
            document.getElementById('list').innerHTML += '<li>' + text.value + '</li>';
            text.value = '';
            event.preventDefault();
          }
        });
      }
    </script>
  </head>
  <body onload="shortcut();">
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

The [HTML document][] has a [keyboard shortcut][] using only a [printable character][] for a [user interface component][] which is available even when the component does not have focus.

```html
<html>
  <head>
    <title>Failed Example 1 for rule 1e9941</title>
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
    <input type="text" id="text">
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

[html document]: https://dom.spec.whatwg.org/#concept-document
[keyboard shortcut]: https://www.w3.org/TR/WCAG21/#dfn-keyboard-shortcuts
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components
[descendent]: https://dom.spec.whatwg.org/#concept-tree-descendant
[content]: https://www.w3.org/TR/WCAG21/#dfn-content
[printable character]: #printable-characters 'Definition of printable characters'
[non-printable characters]: #non-printable-characters 'Definition of non-printable characters'
[focus]: https://html.spec.whatwg.org/#focusable-area

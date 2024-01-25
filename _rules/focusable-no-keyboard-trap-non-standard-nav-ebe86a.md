---
id: ebe86a
name: Focusable element has no keyboard trap via non-standard navigation
rule_type: atomic
description: |
  This rule checks if it is possible to use non-standard keyboard navigation to navigate through content where focus is trapped when using standard ways of keyboard navigation.
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Carlos Duarte
    - Dagfinn Rømen
    - Geir Sindre Fossøy
    - Malin Øvrebø
    - Shadi Abou-Zahra
    - Stein Erik Skotkjerra
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [focusable](#focusable) where focus cannot cycle to the browser UI by using [standard keyboard navigation](#standard-keyboard-navigation).

## Expectation 1

For each target element help information is [visible](#visible) and [included in the accessibility tree](#included-in-the-accessibility-tree) or can be accessed from within the keyboard trap.

**Note:** As per WCAG 2.0 Success Criterion 2.1.1 Keyboard the help information should be accessible through a keyboard interface.

## Expectation 2

The help information explains how to cycle to the browser UI, or on how to get to a point from where it is possible to cycle to the browser UI, using [standard keyboard navigation](#standard-keyboard-navigation).

## Expectation 3

For each target element focus can cycle to the browser UI by using the method advised in the help information.

**Note:** Cycling back to the browser UI can be done both by moving forward through the tab order and by moving backwards. It is not possible to fulfill this expectation by using browser specific shortcuts to return to the browser UI.

## Assumptions

- It is not possible to use unmodified arrow or tab keys, or other standard exit methods to move focus away.
- The focus order in keyboard navigation is cyclical, not linear, meaning that the focus order will cycle to the first/last element when it moves away from the last/first element.

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [Understanding Success Criterion 2.1.2: No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [G21: Ensuring that users are not trapped in content](https://www.w3.org/WAI/WCAG22/Techniques/general/G21)
- [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](https://www.w3.org/WAI/WCAG22/Techniques/failures/F10)

## Test Cases

### Passed

#### Passed Example 1

These focusable `button` elements have scripts that create a keyboard trap. The document includes help information in a paragraph before the `button` elements and the method advised works to escape the keyboard trap.

```html
<script src="/test-assets/focusable-no-keyboard-trap/keyboard.js"></script>

<p>Press Ctrl+M to Exit</p>
<a id="link1" href="#">Link 1</a>
<button id="btn1" onfocus="trapOn = true" onblur="moveFocusToButton('btn2')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 1
</button>
<button id="btn2" onfocus="trapOn = true" onblur="moveFocusToButton('btn1')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Passed Example 2

These focusable `button` elements have scripts that create a keyboard trap. The document includes help information within the trap and the method advised works to escape the keyboard trap.

```html
<script src="/test-assets/focusable-no-keyboard-trap/keyboard.js"></script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onfocus="trapOn = true" onblur="moveFocusToButton('btn2')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 1
</button>
<p>Press Ctrl+M to Exit</p>
<button id="btn2" onfocus="trapOn = true" onblur="moveFocusToButton('btn1')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Passed Example 3

These focusable `button` elements have scripts that create a keyboard trap. The document includes help information in a "help" link that once clicked exposes the instructions to escape the keyboard trap.

```html
<script src="/test-assets/focusable-no-keyboard-trap/keyboard.js"></script>

<div onkeydown="escapeTrapOnCtrlM(event)">
	<a id="link1" href="#">Link 1</a>
	<button id="btn1" onfocus="trapOn = true" onblur="moveFocusTo('helpLink')">
		Button 1
	</button>
	<a id="helpLink" href="#" onclick="showHelpText()">How to go the next element</a>
	<div id="helptext"></div>
	<button id="btn2" onblur="moveFocusTo('btn1')">
		Button 2
	</button>
</div>
<a id="link2" href="#">Link 2</a>
```

### Failed

#### Failed Example 1

These focusable `button` elements create a keyboard trap with no instructions.

```html
<script src="/test-assets/focusable-no-keyboard-trap/keyboard.js"></script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onfocus="trapOn = true" onblur="moveFocusToButton('btn2')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 1
</button>
<button id="btn2" onfocus="trapOn = true" onblur="moveFocusToButton('btn1')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Failed Example 2

These focusable `button` elements create a keyboard trap with instructions that don't give advice on the method for proceeding.

```html
<script src="/test-assets/focusable-no-keyboard-trap/keyboard.js"></script>

<p>Go to the next element</p>
<a id="link1" href="#">Link 1</a>
<button id="btn1" onfocus="trapOn = true" onblur="moveFocusToButton('btn2')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 1
</button>
<button id="btn2" onfocus="trapOn = true" onblur="moveFocusToButton('btn1')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Failed Example 3

These focusable `button` elements create a keyboard trap with help text, where the method advised doesn't work.

```html
<script src="/test-assets/focusable-no-keyboard-trap/keyboard.js"></script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onfocus="trapOn = true" onblur="moveFocusToButton('btn2')">
	Button 1
</button>
<p>Press Ctrl+M to Exit</p>
<button id="btn2" onfocus="trapOn = true" onblur="moveFocusToButton('btn1')">
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

### Inapplicable

#### Inapplicable Example 1

This focusable `button` elements do not create a keyboard trap.

```html
<a id="link1" href="#">Link 1</a>
<button id="btn1">Button 1</button>
<button id="btn2">Button 2</button>
<a id="link2" href="#">Link 2</a>
```

[html or svg element]: #namespaced-element

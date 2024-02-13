---
id: 80af7b
name: Focusable element has no keyboard trap
rule_type: composite
description: |
  This rule checks for keyboard traps. This includes use of both standard and non-standard keyboard navigation to navigate through all content without becoming trapped.
accessibility_requirements:
  wcag20:2.1.2: # No keyboard trap (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-text:cc5: # Non-interference due to mapping to 2.1.2
    title: WCAG Non-Interference
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G21: # Ensuring that users are not trapped in content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - a1b64e
  - ebe86a
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Dagfinn Rømen
    - Geir Sindre Fossøy
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [focusable][].

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is "passed":

- [Focusable Element Has No Keyboard Trap Via Standard Navigation](https://www.w3.org/WAI/standards-guidelines/act/rules/a1b64e/)
- [Focusable Element Has No Keyboard Trap Via Non-Standard Navigation](https://www.w3.org/WAI/standards-guidelines/act/rules/ebe86a/)

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

This rule only requires navigation in one direction (either forward or backward), not both, and not a specific one. It is clear that not being able to escape a focus trap in any direction is a failure of [Success Criterion 2.1.2 No keyboard trap][sc212]. However, it is less clear that being able to escape in only one direction is enough to satisfy it. If [Success Criterion 2.1.2 No keyboard trap][sc212] requires the possibility to escape the trap in a specific way (e.g. forward [standard keyboard navigation](#standard-keyboard-navigation)) or in both directions, this rule may pass while the criterion is not satisfied.

### Bibliography

- [Understanding Success Criterion 2.1.2: No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [G21: Ensuring that users are not trapped in content](https://www.w3.org/WAI/WCAG22/Techniques/general/G21)
- [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](https://www.w3.org/WAI/WCAG22/Techniques/failures/F10)

## Test Cases

### Passed

#### Passed Example 1

These [focusable][] elements do not create a trap for keyboard navigation.

```html
<a href="#">Link 1</a> <button>Button1</button>
```

#### Passed Example 2

This element is made [focusable][] by the `tabindex` attribute. It does not create a trap for keyboard navigation.

```html
<div tabindex="1">Text</div>
```

#### Passed Example 3

This element is made [focusable][] by the `tabindex` attribute, even if it is not part of the sequential focus navigation. It does not create a trap for keyboard navigation.

```html
<div tabindex="-1">Text</div>
```

#### Passed Example 4

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

#### Passed Example 5

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

#### Passed Example 6

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

This [focusable][] element creates a keyboard trap bringing focus to the `button`. Note that if one of the links is removed, the focus may jump to the browser UI before the timeout expires, at which point the `this.focus()` trap cannot trigger anymore.

```html
<a href="#">Link 1</a>
<button onblur="setTimeout(() => this.focus(), 10)">
	Button1
</button>
<a href="#">Link 2</a>
```

#### Failed Example 2

These [focusable][] `button` elements create a keyboard trap preventing the last `button` to be reached using the keyboard.

```html
<button onblur="setTimeout(() => this.nextElementSibling.focus(), 10)">
	Button1
</button>
<button onblur="setTimeout(() => this.previousElementSibling.focus(), 10)">
	Button2
</button>
<button>
	Button3
</button>
```

#### Failed Example 3

This `button` element is between other `button` elements creating a keyboard trap.

```html
<button onblur="setTimeout(() => this.focus(), 10)">Button 1</button>
<button>Button 2</button>
<button onblur="setTimeout(() => this.focus(), 10)">Button 3</button>
```

#### Failed Example 4

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

#### Failed Example 5

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

#### Failed Example 6

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

There is no [focusable][] element.

```html
<h1>Page 1</h1>
```

#### Inapplicable Example 2

There is no [focusable][] element.

```html
<button type="button" disabled>Click Me!</button>
```

#### Inapplicable Example 3

There is no [focusable][] element.

```html
<button type="button" style="display:none;">Click Me!</button>
```

#### Inapplicable Example 4

There is no [focusable][] element.

```html
<a href="#" style="visibility:hidden;">Link 1</a> <button style="visibility:hidden;">Button1</button>
```

[focusable]: #focusable 'Definition of focusable'
[html or svg element]: #namespaced-element
[sc212]: https://www.w3.org/TR/WCAG22/#no-keyboard-trap 'Success Criterion 2.1.2 No Keyboard Trap'

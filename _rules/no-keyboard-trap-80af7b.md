---
id: 80af7b
name: No keyboard trap
rule_type: composite
description: |
  This rule checks for keyboard traps. This includes use of both standard and non-standard keyboard navigation to navigate through all content without becoming trapped.
accessibility_requirements:
  wcag20:2.1.2: # No keyboard trap (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - a1b64e
  - ebe86a
authors:
  - Geir Sindre Fossøy
  - Dagfinn Rømen
  - Anne Thyme Nørregaard
---

## Applicability

The rule only applies to any HTML or SVG element that is [focusable](#focusable).

**Note**: This rule only applies to HTML and SVG. Thus, it is a partial check for WCAG 2.0 success criterion 2.1.2, which applies to all content.

## Expectation

For each test target, the outcome of one of the following rules is "passed":

- [No keyboard trap standard navigation](https://act-rules.github.io/rules/a1b64e)
- [No keyboard trap non-standard navigation](https://act-rules.github.io/rules/ebe86a)

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.1.2: No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html)
- [G21: Ensuring that users are not trapped in content](https://www.w3.org/WAI/WCAG21/Techniques/general/G21)
- [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](https://www.w3.org/WAI/WCAG21/Techniques/failures/F10)

## Test Cases

### Passed

#### Passed Example 1

No trap for keyboard navigation.

```html
<a href="#">Link 1</a> <button class="target">Button1</button>
```

#### Passed Example 2

Using `tabindex="1"`.

```html
<div tabindex="1">Text</div>
```

#### Passed Example 3

Using `tabindex="-1"`.

```html
<div tabindex="-1">Text</div>
```

#### Passed Example 4

Keyboard trap with help information in a paragraph before, and where the method advised works.

```html
<script>
	var trapOn = false
</script>

<p>Press the M-key to Exit</p>
<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">
	Button 1
</button>
<button
	id="btn2"
	class="target"
	onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)"
	onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)"
>
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Passed Example 5

Keyboard trap with help information within the trap, and where the method advised works.

```html
<script>
	var trapOn = false
</script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">
	Button 1
</button>
<p>Press the M-key to Exit</p>
<button
	id="btn2"
	class="target"
	onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)"
	onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)"
>
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Passed Example 6

Keyboard trap with "help" link that once clicked exposes the instructions.

```html
<script>
	var trapOn = false

	function showHelpText() {
		document.getElementById('helptext').innerHTML = '<p>Press the M-key to Exit</p>'
	}
</script>

<div onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)">
	<a id="link1" href="#">Link 1</a>
	<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('helpLink').focus();})(event)">
		Button 1
	</button>
	<a id="helpLink" href="#" onclick="showHelpText()">How to go the next element</a>
	<div id="helptext"></div>
	<button id="btn2" class="target" onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)">
		Button 2
	</button>
</div>
<a id="link2" href="#">Link 2</a>
```

### Failed

#### Failed Example 1

Keyboard trap one element.

```html
<a href="#">Link 1</a>
<button class="target" onblur="setTimeout(() => this.focus(), 10)">
	Button1
</button>
```

#### Failed Example 2

Keyboard trap group.

```html
<button class="target" onblur="setTimeout(() => this.nextSibling.focus(), 10)">
	Button1
</button>
<button class="target" onblur="setTimeout(() => this.previousSibling.focus(), 10)">
	Button2
</button>
```

#### Failed Example 3

A focusable element inbetween to keyboard traps.

```html
<button onblur="setTimeout(() => this.focus(), 10)">Button 1</button>
<button class="target">Button 2</button>
<button onblur="setTimeout(() => this.focus(), 10)">Button 3</button>
```

#### Failed Example 4

Keyboard trap with no instructions.

```html
<script>
	var trapOn = false
</script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">
	Button 1
</button>
<button
	id="btn2"
	class="target"
	onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)"
	onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)"
>
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Failed Example 5

Keyboard trap with instructions that doesn't give advise on the method for proceeding.

```html
<script>
	var trapOn = false
</script>

<p>Go to the next element</p>
<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">
	Button 1
</button>
<button
	id="btn2"
	class="target"
	onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)"
	onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)"
>
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Failed Example 6

Keyboard trap with help text, where the method advised doesn't work.

```html
<script>
	var trapOn = false
</script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">
	Button 1
</button>
<p>Press the M-key to Exit</p>
<button id="btn2" class="target" onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)">
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

### Inapplicable

#### Inapplicable Example 1

No focusable element.

```html
<h1>Page 1</h1>
```

#### Inapplicable Example 2

Disabled element.

```html
<button type="button" disabled>Click Me!</button>
```

#### Inapplicable Example 3

Hidden element using `display:none`.

```html
<button type="button" style="display:none;">Click Me!</button>
```

#### Inapplicable Example 4

Hidden element using `visibility:hidden`.

```html
<a href="#" style="visibility:hidden;">Link 1</a> <button class="target" style="visibility:hidden;">Button1</button>
```

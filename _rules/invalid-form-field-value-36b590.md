---
id: 36b590
name: Invalid form field value
rule_type: atomic
description: |
  This rule checks that text descriptions are provided when the user completes a form field with information that is not an allowed value or using a not allowed format.
accessibility_requirements:
  wcag20:3.3.1: # Error Identification (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G84: # Providing a text description when the user provides information that is not in the list of allowed values
    forConformance: false
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
  wcag-technique:G85: # Providing a text description when user input falls outside the required format or values
    forConformance: false
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Language
acknowledgements:
  authors:
    - Carlos Duarte
    - João Vicente
---

## Applicability

The rule applies to each HTML [input element][] with the [type attribute][] in one of the following [states][]: "Text", "Telephone", "URL", "E-mail", "Password", "Date", "Month", "Week", "Time", "Local Date and Time", and "Number";

**Note**: The list of applicable [states][] includes those where the [input element][] can be rendered by the user agent as a text control.

## Expectation 1

For each test target the user [interacted with][], either after the interaction or after triggering the submission of a form if the target element belongs to one, a message is presented to the user for each [automatically detected error][].

## Expectation 2

The content of the message is [visible][], [included in the accessibility tree][], and identifies the [automatically detected error][].

**Note**: Information to identify an input error must include information about the element or elements in which the error occurred, and assist the user in understanding what was the cause of the error.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

The support for the different [states][] of the [type attribute][] is not consistent across different user agents.

## Background

- [Understanding Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification)
- [G84: Providing a text description when the user provides information that is not in the list of allowed values](https://www.w3.org/WAI/WCAG21/Techniques/general/G84)
- [G85: Providing a text description when user input falls outside the required format or values](https://www.w3.org/WAI/WCAG21/Techniques/general/G85)

## Test Cases

### Passed

#### Passed Example 1

The error message provided in the vicinity of the `input` element identifies the [automatically detected error][]. Instructions are provided in the vicinity of the `input` element.

```html
<script>
	function processForm() {
		document.getElementById('error').innerText = ''
		var age = document.getElementById('age').value
		console.log(isNaN(age))
		if (!age || isNaN(age)) {
			document.getElementById('error').innerText = 'Age must be a number'
		} else if (age < 1) {
			document.getElementById('error').innerText = 'Age must be at least 1'
		}
	}
</script>

<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" />
	<span id="error"></span><br />
	<input type="button" value="Submit" onclick="processForm()" />
</form>
```

### Failed

#### Failed Example 1

No error message is provided.

```html
<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" />
	<input type="button" value="Submit" />
</form>
```

#### Failed Example 2

The error message does not identify the [automatically detected error][].

```html
<script>
	function processForm() {
		document.getElementById('error').innerText = ''
		var age = document.getElementById('age').value
		if (!age || isNaN(age) || age < 1) {
			document.getElementById('error').innerText = 'Please fill the field correctly.'
		}
	}
</script>

<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" />
	<span id="error"></span><br />
	<input type="button" value="Submit" onclick="processForm()" />
</form>
```

#### Failed Example 3

The error message is not visible.

```html
<script>
	function processForm() {
		document.getElementById('error').innerText = ''
		var age = document.getElementById('age').value
		console.log(isNaN(age))
		if (!age || isNaN(age)) {
			document.getElementById('error').innerText = 'Age must be a number'
		} else if (age < 1) {
			document.getElementById('error').innerText = 'Age must be at least 1'
		}
	}
</script>

<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" />
	<span id="error" style="position: absolute; top: -9999px; left: -9999px;"></span><br />
	<input type="button" value="Submit" onclick="processForm()" />
</form>
```

#### Failed Example 4

The error message is not included in the accessibility tree.

```html
<script>
	function processForm() {
		document.getElementById('error').innerText = ''
		var age = document.getElementById('age').value
		console.log(isNaN(age))
		if (!age || isNaN(age)) {
			document.getElementById('error').innerText = 'Age must be a number'
		} else if (age < 1) {
			document.getElementById('error').innerText = 'Age must be at least 1'
		}
	}
</script>

<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" />
	<span id="error" aria-hidden="true"></span><br />
	<input type="button" value="Submit" onclick="processForm()" />
</form>
```

### Inapplicable

#### Inapplicable Example 1

No input elements with the required [type attribute][].

```html
<form>
	<p>Pick a color</p>
	<label><input type="radio" name="color" value="blue" />Blue</label>
	<label><input type="radio" name="color" value="yellow" />Yellow</label>
	<input type="button" value="Submit" />
</form>
```

[automatically detected error]: #automatic-error-detection 'Definition of automatic error detection'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[input element]: https://html.spec.whatwg.org/multipage/input.html#the-input-element
[interacted with]: #interacted-with 'Definition of interacted with'
[states]: https://html.spec.whatwg.org/#states-of-the-type-attribute
[type attribute]: https://html.spec.whatwg.org/multipage/input.html#attr-input-type
[visible]: #visible 'Definition of visible'

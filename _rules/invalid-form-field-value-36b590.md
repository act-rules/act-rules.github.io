---
id: 36b590
name: Invalid form field value
rule_type: atomic
description: |
  This rule checks that text descriptions are provided when the user completes a form field with information that is not an allowed value or using a not allowed format.
accessibility_requirements:
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

The rule applies to each HTML or SVG element:

- that has one of the following [semantic roles](#semantic-role): `checkbox`, `combobox`, `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch` and `textbox`;
- for which [input errors](https://www.w3.org/TR/WCAG21/#dfn-input-error) are [automatically detected](#automatic-error-detection).

**Note**: The list of applicable [semantic roles](#semantic-role) is derived by taking all the [ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/) roles that:

- inherit from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and
- do not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

## Expectation 1

After [user completion](#completed-input-field) of the target element or triggering the submission of the form if the target element belongs to one, a message is presented to the user for each [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error) that has been [automatically detected](#automatic-error-detection).

## Expectation 2

The content of the message is [visible](#visible), [included in the accessibility tree](#included-in-the-accessibility-tree), and identifies the [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error).

**Note**: Information to identify an input error must include information about the element or elements in which the error occurred, and assist the user in understanding what was the cause of the error.

**Note**: If the input error was caused by the user entering a value that falls outside the list of possible values, the message must indicate the possible values.

**Note**: If the input error was caused by the user entering a value that does not follow the required format, the message must indicate the correct format for the input value.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G84: Providing a text description when the user provides information that is not in the list of allowed values](https://www.w3.org/WAI/WCAG21/Techniques/general/G84)
- [G85: Providing a text description when user input falls outside the required format or values](https://www.w3.org/WAI/WCAG21/Techniques/general/G85)

## Test Cases

### Passed

#### Passed Example 1

The error message provided in the vicinity of the `input` element identifies the [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error). Instructions are provided in the vicinity of the `input` element.

```html
<script>
	function processForm() {
		document.getElementById('error').innerText = ''
		var age = document.getElementById('age').value
		console.log(isNaN(age))
		if (!age || isNaN(age)) {
			document.getElementById('error').innerText = 'Age must be a number'
		} else if (age < 1) {
			document.getElementById('error').innerText = 'Age must be positive'
		}
	}
</script>

<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" required />
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
	<input type="number" id="age" required />
	<span id="error"></span><br />
	<input type="button" value="Submit" />
</form>
```

#### Failed Example 2

The error message does not identify the [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error).

```html
<script>
	function processForm() {
		document.getElementById('error').innerText = ''
		var age = document.getElementById('age').value
		console.log(isNaN(age))
		if (!age || isNaN(age) || age < 1) {
			document.getElementById('error').innerText = 'Please fill the field correctly.'
		}
	}
</script>

<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" required />
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
			document.getElementById('error').innerText = 'Age must be positive'
		}
	}
</script>

<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" required />
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
			document.getElementById('error').innerText = 'Age must be positive'
		}
	}
</script>

<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" required />
	<span id="error" aria-hidden="true"></span><br />
	<input type="button" value="Submit" onclick="processForm()" />
</form>
```

### Inapplicable

#### Inapplicable Example 1

The `input` element is not inside a `form` element

```html
<input type="text" />
```

#### Inapplicable Example 2

Form that does not include automatic detection of input errors.

```html
<form>
	<label for="text_field">Name (required)</label>
	<input type="text" id="text_field" />
	<input type="button" value="Submit" />
	<div id="error"></div>
</form>
```

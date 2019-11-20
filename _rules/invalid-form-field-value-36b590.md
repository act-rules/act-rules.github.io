---
id: 36b590
name: Error message describes invalid form field value
rule_type: atomic
description: |
  This rule checks that text descriptions are provided when the user completes a form field with invalid values or using an invalid format.
accessibility_requirements:
  wcag20:3.3.1: # Error Identification (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
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

The rule applies to each HTML element with a [semantic role][] that inherits from the [abstract][] `input` or `select` roles.

## Expectation

For each test target, if an [error is automatically detected][automatically detected error], a message that identifies the test target, and describes the error is [visible][] and [included in the accessibility tree][].

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

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

No input elements with the required [semantic roles][semantic role].

```html
<form>
	<p>Pick a color</p>
	<label><input type="radio" name="color" value="blue" />Blue</label>
	<label><input type="radio" name="color" value="yellow" />Yellow</label>
	<input type="button" value="Submit" />
</form>
```

[abstract]: https://www.w3.org/TR/wai-aria/#abstract_roles
[automatically detected error]: #automatic-error-detection 'Definition of automatic error detection'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'

---
id: 334972
name: Required form fields not completed
rule_type: atomic
description: |
  This rule checks that text error messages identify required form fields that were not completed.
accessibility_requirements:
  wcag-technique:G83: # Providing text descriptions to identify required fields that were not completed
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree # (e.g. HTTP Messages, DOM Tree, CSS Styling, Accessibility Tree, Language, etc.,)
  - CSS Styling
  - Language
acknowledgements:
  authors:
    - Carlos Duarte
    - João Vicente
---

## Applicability

The rule applies to each [form element](https://www.w3.org/TR/html52/sec-forms.html#the-form-element) that includes at least one [required](#required-input-field) HTML or SVG element:

- that has one of the following [semantic roles][semantic role]: `checkbox`, `combobox`, `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch` and `textbox`.
- for which [input errors](https://www.w3.org/TR/WCAG21/#dfn-input-error) are [automatically detected](#automatic-error-detection).

**Note**: The list of applicable [semantic roles](#semantic-role) is derived by taking all the [ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/) roles that:

- inherit from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and
- do not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

## Expectation 1

After triggering the submission of the target element, each [required](#required-input-field) [input element](https://www.w3.org/TR/html52/sec-forms.html#the-input-element) that was not [completed](#completed-input-field) is identified by a text message.

**Note**: A text message may identify an [input element](https://www.w3.org/TR/html52/sec-forms.html#the-input-element) in several ways, including:

- By referring to its label or accessible name
- By being visually placed in the vicinity of the element

## Expectation 2

The content of the text message is [visible](#visible), [included in the accessibility tree](included-in-the-accessibility-tree) and indicates that the [input element](https://www.w3.org/TR/html52/sec-forms.html#the-input-element) is [required](#required-input-field).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G83: Providing text descriptions to identify required fields that were not completed](https://www.w3.org/WAI/WCAG21/Techniques/general/G83)

## Test Cases

### Passed

#### Passed Example 1

The error message that shows near the `input` element when it is not filled indicates the field must be filled.

```html
<script>
	function processForm() {
		if (document.getElementById('text_field').value.length === 0) {
			document.getElementById('error').innerText = 'You must fill the name field'
		}
	}
</script>

<form>
	<label for="text_field">Name (required)</label>
	<input type="text" id="text_field" required />
	<input type="button" value="Submit" onclick="processForm()" />
	<div id="error"></div>
</form>
```

#### Passed Example 2

The error message identifies any required `input` element that has not been filled. The error message refers to the `input` elements by their labels.

```html
<script>
	function processForm() {
		document.getElementById('error').innerText = ''
		if (document.getElementById('name').value.length === 0) {
			document.getElementById('error').innerText += 'You must fill the name field. '
		}
		var color = document.forms[0].color.value
		if (color.length === 0) {
			document.getElementById('error').innerText += 'You must pick a color.'
		}
	}
</script>

<form>
	<h2 id="error"></h2>
	<label for="name">Name (required)</label>
	<input type="text" id="name" />
	<br />
	<label for="address">Address</label>
	<input type="text" id="address" />
	<p>Pick a color (required)</p>
	<label><input type="radio" name="color" value="blue" />Blue</label>
	<label><input type="radio" name="color" value="yellow" />Yellow</label>
	<br />
	<input type="button" value="Submit" onclick="processForm()" />
</form>
```

### Failed

#### Failed Example 1

No error message is provided.

```html
<form>
	<label for="text_field">Name (required)</label>
	<input type="text" id="text_field" required />
	<input type="button" value="Submit" />
	<div id="error"></div>
</form>
```

#### Failed Example 2

The error message does not identify which form fields need to be filled.

```html
<script>
	function processForm() {
		document.getElementById('error').innerText = ''
		if (document.getElementById('name').value.length === 0) {
			document.getElementById('error').innerText = 'You must fill all required fields.'
		}
		var color = document.forms[0].color.value
		if (color.length === 0) {
			document.getElementById('error').innerText = 'You must fill all required fields.'
		}
	}
</script>

<form>
	<h2 id="error"></h2>
	<label for="name">Name (required)</label>
	<input type="text" id="name" required />
	<br />
	<label for="address">Address</label>
	<input type="text" id="address" />
	<p>Pick a color (required)</p>
	<label><input type="radio" name="color" value="blue" required />Blue</label>
	<label><input type="radio" name="color" value="yellow" />Yellow</label>
	<br />
	<input type="button" value="Submit" onclick="processForm()" />
</form>
```

#### Failed Example 3

The error message is not visible.

```html
<script>
	function processForm() {
		if (document.getElementById('text_field').value.length === 0) {
			document.getElementById('error').innerText = 'You must fill the name field'
		}
	}
</script>

<form>
	<label for="text_field">Name (required)</label>
	<input type="text" id="text_field" required />
	<input type="button" value="Submit" onclick="processForm()" />
	<div id="error" style="position: absolute; top: -9999px; left: -9999px;"></div>
</form>
```

#### Failed Example 4

The error message is not included in the accessibility tree.

```html
<script>
	function processForm() {
		if (document.getElementById('text_field').value.length === 0) {
			document.getElementById('error').innerText = 'You must fill the name field'
		}
	}
</script>

<form>
	<label for="text_field">Name (required)</label>
	<input type="text" id="text_field" required />
	<input type="button" value="Submit" onclick="processForm()" />
	<div id="error" aria-hidden="true"></div>
</form>
```

### Inapplicable

#### Inapplicable Example 1

The `input` element is not required.

```html
<form>
	<input type="text" />
	<input type="button" value="Submit" />
</form>
```

#### Inapplicable Example 2

The `input` element is not inside a `form` element

```html
<input type="text" />
```

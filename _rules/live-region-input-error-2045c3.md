---
id: 2045c3
name: alert role or live region identify input error
rule_type: atomic

description: |
  This rule checks that a container with `role=alert` or a live region are used to identify input errors.

accessibility_requirements:
  wcag-technique:ARIA19: # Using ARIA role=alert or Live Regions to Identify Errors
    forConformance: false
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed

input_aspects:
  - DOM Tree
  - CSS Styling
  - Language

authors:
  - Carlos Duarte
  - João Vicente
---

## Applicability

This rule applies to any [document](https://www.w3.org/TR/dom/#concept-document) where the [document element](https://www.w3.org/TR/dom/#document-element) is an HTML `html` element that:

- has at least one HTML or SVG element that has one of the following [semantic roles](#semantic-role): `checkbox`, `combobox` (`select` elements), `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch` and `textbox` and for which [input errors](https://www.w3.org/TR/WCAG21/#dfn-input-error) are [automatically detected](#automatic-error-detection)
- contains an HTML element with either `role=alert` or `aria-live=assertive` attributes that is present in the [document](https://www.w3.org/TR/dom/#concept-document) at the time it [completes loading](https://www.w3.org/TR/html52/dom.html#dom-documentreadystate-complete).

**Note**: The list of applicable [semantic roles](#semantic-role) is derived by taking all the [ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/) roles that:

- inherit from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and
- do not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

## Expectation 1

The HTML element with either `role=alert` or `aria-live=assertive` attributes displays a message when an [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error) is [automatically detected](#automatic-error-detection) as a consequence of an [input element](https://www.w3.org/TR/html52/sec-forms.html#the-input-element) being [completed](#completed-input-field).

## Expectation 2

The content of the message is [included in the accessibility tree](#included-in-the-accessibility-tree) and identifies the [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error).

**Note**: Information to identify an input error must include the element or elements in which the error occurred and to assist the user in understanding what was the cause of the error.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [ARIA19: Using ARIA role=alert or Live Regions to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19)

## Test Cases

### Passed

#### Passed Example 1

Element with `role="alert"` displays a message on [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error).

```html
<html>
	<head>
		<meta charset="UTF-8" />
		<script src="http://code.jquery.com/jquery.js"></script>
		<script>
			$(document).ready(function(e) {
				$('#name').focusout(function() {
					$('#errors').html('')
					if ($('#name').val() === '') {
						$('#errors').append('<p>Please enter your name.</p>')
					}
				})

				$('#email').focusout(function() {
					$('#errors').html('')
					if ($('#email').val() === '') {
						$('#errors').append('<p>Please enter your email address.</p>')
					}
				})
			})
		</script>
	</head>

	<body>
		<form name="signup" id="signup" method="post" action="">
			<p id="errors" role="alert" aria-atomic="true"></p>
			<p>
				<label for="name">Name (required)</label><br />
				<input type="text" name="name" id="name" />
			</p>
			<p>
				<label for="email">Email (required)</label><br />
				<input type="text" name="email" id="email" />
			</p>
			<p>
				<input type="submit" name="button" id="button" value="Submit" />
			</p>
		</form>
	</body>
</html>
```

#### Passed Example 2

Element with `aria-live="assertive"` displays a message on [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error).

```html
<html>
	<head>
		<meta charset="UTF-8" />
		<script src="http://code.jquery.com/jquery.js"></script>
		<script>
			$(document).ready(function(e) {
				$('#name').focusout(function() {
					$('#errors').html('')
					if ($('#name').val() === '') {
						$('#errors').append('<p>Please enter your name.</p>')
					}
				})

				$('#email').focusout(function() {
					$('#errors').html('')
					if ($('#email').val() === '') {
						$('#errors').append('<p>Please enter your email address.</p>')
					}
				})
			})
		</script>
	</head>

	<body>
		<form name="signup" id="signup" method="post" action="">
			<p id="errors" aria-live="assertive" aria-atomic="true"></p>
			<p>
				<label for="name">Name (required)</label><br />
				<input type="text" name="name" id="name" />
			</p>
			<p>
				<label for="email">Email (required)</label><br />
				<input type="text" name="email" id="email" />
			</p>
			<p>
				<input type="submit" name="button" id="button" value="Submit" />
			</p>
		</form>
	</body>
</html>
```

### Failed

#### Failed Example 1

Document does not present a message on [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error).

```html
<form name="signup" id="signup" method="post" action="">
	<p id="errors" aria-live="assertive" aria-atomic="true"></p>
	<p>
		<label for="name">Name (required)</label><br />
		<input type="text" name="name" id="name" required />
	</p>
	<p>
		<label for="email">Email (required)</label><br />
		<input type="text" name="email" id="email" required />
	</p>
	<p>
		<input type="button" name="button" id="button" value="Submit" />
	</p>
</form>
```

#### Failed Example 2

The message is not included in the accessibility tree.

```html
<html>
	<head>
		<meta charset="UTF-8" />
		<script src="http://code.jquery.com/jquery.js"></script>
		<script>
			$(document).ready(function(e) {
				$('#name').focusout(function() {
					$('#errors').html('')
					if ($('#name').val() === '') {
						$('#errors').append('<p>Please enter your name.</p>')
					}
				})

				$('#email').focusout(function() {
					$('#errors').html('')
					if ($('#email').val() === '') {
						$('#errors').append('<p>Please enter your email address.</p>')
					}
				})
			})
		</script>
	</head>

	<body>
		<form name="signup" id="signup" method="post" action="">
			<p id="errors" aria-live="assertive" aria-atomic="true" aria-hidden="true"></p>
			<p>
				<label for="name">Name (required)</label><br />
				<input type="text" name="name" id="name" />
			</p>
			<p>
				<label for="email">Email (required)</label><br />
				<input type="text" name="email" id="email" />
			</p>
			<p>
				<input type="submit" name="button" id="button" value="Submit" />
			</p>
		</form>
	</body>
</html>
```

#### Failed Example 3

The message does not identify the [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error).

```html
<html>
	<head>
		<meta charset="UTF-8" />
		<script src="http://code.jquery.com/jquery.js"></script>
		<script>
			$(document).ready(function(e) {
				$('#name').focusout(function() {
					$('#errors').html('')
					if ($('#name').val() === '') {
						$('#errors').append('<p>Please fix the error.</p>')
					}
				})

				$('#email').focusout(function() {
					$('#errors').html('')
					if ($('#email').val() === '') {
						$('#errors').append('<p>Please fix the error.</p>')
					}
				})
			})
		</script>
	</head>

	<body>
		<form name="signup" id="signup" method="post" action="">
			<p id="errors" aria-live="assertive" aria-atomic="true"></p>
			<p>
				<label for="name">Name (required)</label><br />
				<input type="text" name="name" id="name" />
			</p>
			<p>
				<label for="email">Email (required)</label><br />
				<input type="text" name="email" id="email" />
			</p>
			<p>
				<input type="submit" name="button" id="button" value="Submit" />
			</p>
		</form>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

No input element.

```html
<div></div>
```

#### Inapplicable Example 2

[Document](https://www.w3.org/TR/dom/#concept-document) where the [document element](https://www.w3.org/TR/dom/#document-element) is not an HTML `html` element.

```html
<svg height="100" width="100">
	<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
	Sorry, your browser does not support inline SVG.
</svg>
```

#### Inapplicable Example 3

Document does not have an element with `role="alert"` or a live region.

```html
<html>
	<head>
		<meta charset="UTF-8" />
		<script src="http://code.jquery.com/jquery.js"></script>
		<script>
			$(document).ready(function(e) {
				$('#name').focusout(function() {
					$('#errors').html('')
					if ($('#name').val() === '') {
						$('#errors').append('<p>Please enter your name.</p>')
					}
				})

				$('#email').focusout(function() {
					$('#errors').html('')
					if ($('#email').val() === '') {
						$('#errors').append('<p>Please enter your email address.</p>')
					}
				})
			})
		</script>
	</head>

	<body>
		<form name="signup" id="signup" method="post" action="">
			<p id="errors" aria-atomic="true"></p>
			<p>
				<label for="name">Name (required)</label><br />
				<input type="text" name="name" id="name" />
			</p>
			<p>
				<label for="email">Email (required)</label><br />
				<input type="text" name="email" id="email" />
			</p>
			<p>
				<input type="submit" name="button" id="button" value="Submit" />
			</p>
		</form>
	</body>
</html>
```

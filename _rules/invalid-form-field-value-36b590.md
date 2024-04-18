---
id: 36b590
name: Error message describes invalid form field value
rule_type: atomic
description: |
  This rule checks that text error messages provided when the user completes a form field with invalid values or using an invalid format, identify the cause of the error or how to fix the error.
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
acknowledgments:
  authors:
    - Carlos Duarte
    - João Vicente
    - Wilco Fiers
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to each [HTML element][] that has one of the following [semantic roles][semantic role]:

- `checkbox`,
- `combobox`,
- `listbox`,
- `menuitemcheckbox`,
- `menuitemradio`,
- `radio`,
- `searchbox`,
- `slider`,
- `spinbutton`,
- `switch` or
- `textbox`.

## Expectation 1

Each test target either has no [form field error indicators][form field error indicator], or at least one of the [form field error indicators][form field error indicator] allows the identification of the related test target, through [text][], or through [non-text content][], or through [presentation][].

## Expectation 2

Each test target either has no [form field error indicators][form field error indicator], or at least one of the [form field error indicators][form field error indicator] describes:

- the cause of the error, or
- how to resolve it,

in [text][] that is [visible][].

## Expectation 3

Each test target either has no [form field error indicators][form field error indicator], or at least one of the [form field error indicators][form field error indicator] describes:

- the cause of the error, or
- how to resolve it,

in [text][] that is [included in the accessibility tree][] or included in the [accessible name][] or [accessible description][] of the test target.

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

The list of applicable [semantic roles][semantic role] is derived by taking all the [ARIA 1.2][] roles that:

- inherit from the `input`, `menuitem` or `select` role, and
- are form field controls (this notably excludes `menu`, `option` or `tree`).

This rule does not test [form field error indicators][form field error indicator] shown on a different page than that of the test target.

A single [form field error indicator][] can be related to multiple test targets. For example, an error message at the top of a form can list all the form fields that are required and are empty.

A single test target can be related to multiple [form field error indicators][form field error indicator]. For example, a text field can have a red border around it, an error icon adjacent to it, an error message below it, and another error message at the top of the form. All of these are error indicators for the same form field.

### Bibliography

- [Understanding Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification)
- [G84: Providing a text description when the user provides information that is not in the list of allowed values](https://www.w3.org/WAI/WCAG22/Techniques/general/G84)
- [G85: Providing a text description when user input falls outside the required format or values](https://www.w3.org/WAI/WCAG22/Techniques/general/G85)

## Test Cases

### Passed

#### Passed Example 1

This `input` element has a [form field error indicator][] that identifies it (by referencing its label), describes the cause of the error and how to resolve it.

```html
<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" aria-describedby="error" value="0" />
	<span id="error">Invalid value for age. Age must be at least 1.</span><br />
	<input type="button" value="Submit" />
</form>
```

#### Passed Example 2

These multiple `input` elements share a [form field error indicator][] that identifies the elements unfilled (by referencing their labels), describes the cause of the error and how to resolve it.

```html
<form>
	<p id="error">
		<strong>
			Name and color cannot be empty. Please complete all required fields.
		</strong>
	</p>
	<fieldset>
		<legend>Shipping</legend>
		<label for="name">Name (required)</label>
		<input type="text" id="name" required />
		<br />
		<label for="address">Address</label>
		<input type="text" id="address" />
	</fieldset>
	<fieldset>
		<legend>Pick a color (required)</legend>
		<label><input type="radio" name="color" value="blue" required />Blue</label>
		<label><input type="radio" name="color" value="yellow" />Yellow</label>
	</fieldset>
	<input type="button" value="Submit" aria-describedby="error" />
</form>
```

#### Passed Example 3

This `input` element does not have a [form field error indicator][].

```html
<form>
	<label for="filter">Product filter</label>
	<input type="text" id="filter" />
	<input type="button" value="filter" />
	<p>To see all products, leave the field empty.</p>
</form>
```

### Failed

#### Failed Example 1

These multiple `input` elements share a [form field error indicator][] but its message does not identify the elements that caused the error nor describes the cause of the error.

```html
<form>
	<div id="error">Please fill the field correctly.</div>
	<label for="age">Age (years)</label>
	<input type="number" id="age" />
	<label for="name">Name</label>
	<input type="text" id="name" />
	<input type="button" value="Submit" />
</form>
```

#### Failed Example 2

This `input` element has a [form field error indicator][] but its message does not describe the cause of the error.

```html
<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" />
	<span id="error">Invalid value for age.</span><br />
	<input type="button" value="Submit" />
</form>
```

#### Failed Example 3

This `input` element has a [form field error indicator][] that identifies it (by referencing its label) and describes the cause of the error but the message is not [visible][].

```html
<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" value="0" />
	<span id="error" style="display: none;">Invalid value for age. Age must be at least 1.</span><br />
	<input type="button" value="Submit" aria-describedby="error" />
</form>
```

#### Failed Example 4

This `input` element has a [form field error indicator][] that identifies it (by referencing its label) and describes the cause of the error but the message is not [included in the accessibility tree][].

```html
<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" value="0" />
	<span id="error" aria-hidden="true">Invalid value for age. Age must be at least 1.</span><br />
	<input type="button" value="Submit" />
</form>
```

#### Failed Example 5

These multiple `input` elements share a [form field error indicator][]. The message describes the cause of the error but does not allow to identify the elements that caused the error because the same label is used in different `fieldset`s.

```html
<form>
	<fieldset>
		<legend>Shipping</legend>
		<label for="shippingName">Name</label>
		<input type="text" id="shippingName" required />
		<label for="shippingAddress">Address</label>
		<input type="text" id="shippingAddress" required />
	</fieldset>
	<fieldset>
		<legend>Billing</legend>
		<label for="billingName">Name</label>
		<input type="text" id="billingName" />
		<label for="billingAddress">Address</label>
		<input type="text" id="billingAddress" />
	</fieldset>
	<span id="error">All required fields must be filled.<br />Please fill Name.<br />Please fill Address</span><br />
	<input type="button" value="Submit" />
</form>
```

### Inapplicable

#### Inapplicable Example 1

There are no elements with any of the required [semantic roles][semantic role].

```html
<p>This is a paragraph.</p>
```

[accessible description]: https://www.w3.org/TR/accname/#dfn-accessible-description
[accessible name]: #accessible-name 'Definition of accessible name'
[aria 1.2]: https://www.w3.org/TR/wai-aria-1.2/
[form field error indicator]: #form-field-error-indicator
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[non-text content]: https://www.w3.org/TR/WCAG22/#dfn-non-text-content
[presentation]: https://www.w3.org/TR/WCAG22/#dfn-presentation
[semantic role]: #semantic-role 'Definition of semantic role'
[text]: https://www.w3.org/TR/WCAG22/#dfn-text
[visible]: #visible 'Definition of visible'
[html element]: #namespaced-element

---
id: i3z4v8
name: Error field is not identified using color differences only
rule_type: atomic
description: |
  This rule checks that error fields can be identified not only by color differences but through another visual means.
accessibility_requirements:
  wcag21:1.4.1: # Use of Color (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  -  DOM Tree
  -  CSS Styling
acknowledgments:
  authors:
    -  Giacomo Petri
---

## Description

This rule checks that errors are not identified only through color differences.

## Applicability

This rule applies to any [visible][] [input error][] together with its visual context.

## Expectation

Each test target, together with its visual context, identify the presence of errors not only through color differences.

If the presence of errors is conveyed through the use of colors that differ not only in their hue, but that also have a difference in lightness and the difference in relative luminance between the colors leads to a contrast ratio of 3:1 or greater, then this counts as an additional visual mean.

## Assumptions

There are currently no assumptions

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 1.4.1: Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)
- [F81 - Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only](https://www.w3.org/WAI/WCAG21/Techniques/failures/F81.html)

It is possible for an error field to be distinguishable from adjacent fields but still not have a meaningful error message. In that case, it would pass Success Criterion 1.4.1: Use of Color but still fail [Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html) and, if applicable, [Scuccess Criterion 3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html).

## Test Cases

### Passed

#### Passed Example 1

The "first name" `input` value is empty. Its error message (the `p` element) conveys the presence of an error through its text.

```html
<label for="first_name">First Name</label>
<input type="text" id="first_name" autocomplete="given-name" required style="border:1px solid #dd0000" aria-invalid="true" aria-errormessage="first_name_error_msg">
<p id="first_name_error_msg" class="error_msg" style="color:#dd0000">This field is empty. Enter your first name.</p>
<label for="last_name" style="color:#333333">Last Name</label>
<input type="text" id="last_name" autocomplete="family-name" required style="border:1px solid #b0b0b0" value="Doe">
```

#### Passed Example 2

The "phone number" `input` value doesn't match the `type` value. Its visual error indicator (the first couple of `label` and `input` elements) conveys the presence of an error through its CSS properties:
- `font-weight: bold`; and
- `border-width: 3px`.

```html
<label for="phone_number" style="color:#dd0000; font-weight:bold">Phone number</label>
<input type="tel" id="phone_number" autocomplete="tel" required style="border:3px solid #dd0000" aria-invalid="true" value="John Doe">
<label for="email" style="color:#333333">Email</label>
<input type="email" id="email" autocomplete="email" required style="border:1px solid #b0b0b0" value="john.doe@example.com">
```

#### Passed Example 3

The email `input` value is missing the "@" symbol. Its visual error indicator (the first couple of `label` and `input` elements) conveyed the presence of an error through its CSS properties:
- lightness (difference in relative luminance between the colors leads to a contrast ratio greater than 3:1) AND;
- font-weight: bold.

```html
<label for="email" style="color:#dd0000; font-weight:bold;">Email</label>
<input type="email" id="email" autocomplete="email" required style="border:1px solid #dd0000" aria-invalid="true" value="john.doeexample.com">
<label for="address" style="color:#000">Address</label>
<input type="text" id="address" autocomplete="address-line1" required style="border:1px solid #000" value="5th Example Street">
```

### Failed

#### Failed Example 1

The "first name" `input` value is empty. Its visual error indicator (the red border color of the first `input` element) conveys the presence of an error through color (hue) differences only.

```html
<label for="first_name" style="color:#333333">First Name</label>
<input type="text" id="first_name" autocomplete="given-name" required style="border:1px solid #dd0000" aria-invalid="true">
<label for="last_name" style="color:#333333">Last Name</label>
<input type="text" id="last_name" autocomplete="family-name" required style="border:1px solid #b0b0b0" value="Doe">
```

#### Failed Example 2

The "phone number" `input` value doesn't match the `type` value. Its visual error indicator (the red color of the first `label` element) conveys the presence of an error through color (hue) differences only.

```html
<label for="phone_number" style="color:#dd0000">Phone number</label>
<input type="tel" id="phone_number" autocomplete="tel" required style="border:1px solid #b0b0b0" aria-invalid="true" value="John Doe">
<label for="email" style="color:#333333">Email</label>
<input type="email" id="email" autocomplete="email" required style="border:1px solid #b0b0b0" value="john.doe@example.com">
```

#### Failed Example 3

The email `input` value is missing the "@" symbol. Its visual error indicator (for the first couple of `label` and `input` elements, respectively the red text color and the red border color) conveys the presence of an error through color (hue) differences only.

```html
<label for="email" style="color:#dd0000">Email</label>
<input type="email" id="email" autocomplete="email" required style="border:1px solid #dd0000" aria-invalid="true" value="john.doeexample.com">
<label for="address" style="color:#333333">Address</label>
<input type="text" id="address" autocomplete="address-line1" required style="border:1px solid #b0b0b0" value="5th Example Street">
```

### Inapplicable

#### Inapplicable Example 1

There are no error fields.

```html
<p>This is a paragraph.</p>
```

#### Inapplicable Example 2

There are no error fields.

```html
<label for="first_name" style="color:#000;">First Name</label>
<input type="text" id="first_name" autocomplete="given-name" required style="border:1px solid #000" value="John">
<label for="last_name" style="color:#000">Last Name</label>
<input type="text" id="last_name" autocomplete="family-name" required style="border:1px solid #000" value="Doe">
```

#### Inapplicable Example 3

The error field is not visible.

```html
<div style="display:none">
<label for="phone_number" style="color:#dd0000">Phone number</label>
<input type="tel" id="phone_number" autocomplete="tel" required style="border:1px solid #b0b0b0" aria-invalid="true" value="John Doe">
<label for="email" style="color:#333333">Email</label>
<input type="email" id="email" autocomplete="email" required style="border:1px solid #b0b0b0" value="john.doe@example.com">
</div>
```

[input error]: https://www.w3.org/TR/WCAG21/#dfn-input-error 'Definition of input error from WCAG 2.1 success criterion 3.3.1 Error Identification'
[visible]: #visible 'Definition of Visible'

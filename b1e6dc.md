---
id: b1e6dc
name: Error message is descriptive
rule_type: composite
description: |
  This rule checks that when an input error is automatically detected the error is identified and described to the user in text

accessibility_requirements: # Remove whatever is not applicable
  wcag20:3.1.1: # Error Identification (A)
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed

input_rules:
  - 334972
  - 36b590
  - 6f484a
  - 2045c3
  - 54621b

authors:
  -  Carlos Duarte
  -  João Vicente
---

## Applicability

This rule applies to any [document](#https://www.w3.org/TR/dom/#concept-document) where the [document element](#https://www.w3.org/TR/dom/#document-element) is an HTML `html` element that has at least one [input element](https://www.w3.org/TR/html52/sec-forms.html#the-input-element).

## Expectation (1)

For each [input element](https://www.w3.org/TR/html52/sec-forms.html#the-input-element) in the test target, the outcome of at least one of the following rules is passed:

- [Required form fields not completed](https://act-rules.github.io/rules/334972)
- [Invalid form field value](https://act-rules.github.io/rules/36b590)
- [aria-alertdialog Identifies Input Error](https://act-rules.github.io/rules/6f484a)
- [alert Role or Live Region Identify Input Error](https://act-rules.github.io/rules/2045c3)
- [aria-invalid Identifies Input Error](https://act-rules.github.io/rules/54621b)

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification)
- If the form contains required fields
    - [G83: Providing text descriptions to identify required fields that were not completed](https://www.w3.org/WAI/WCAG21/Techniques/general/G83)
    - [ARIA21: Using Aria-Invalid to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21)
    - [SCR18: Providing client-side validation and alert](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18)
- If the form requires the information to be in a specific format or of certain values
    - [G84: Providing a text description when the user provides information that is not in the list of allowed values](https://www.w3.org/WAI/WCAG21/Techniques/general/G84)
    - [G85: Providing a text description when user input falls outside the required format or values](https://www.w3.org/WAI/WCAG21/Techniques/general/G85)
    - [ARIA18: Using aria-alertdialog to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA18)
    - [ARIA19: Using ARIA role=alert or Live Regions to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19)
    - [ARIA21: Using Aria-Invalid to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21)
    - [SCR18: Providing client-side validation and alert](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18)
    - [SCR32: Providing client-side validation and adding error text via the DOM](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR32)

## Test Cases

### Passed

#### Passed Example 1

Description...

```html
<!-- code -->
```

#### Passed Example 2

...

### Failed

#### Failed Example 1

Description...

```html
<!-- code -->
```

#### Failed Example 2

...

### Inapplicable

#### Inapplicable Example 1

Description...

```html
<!-- code -->
```

#### Inapplicable Example 2

...
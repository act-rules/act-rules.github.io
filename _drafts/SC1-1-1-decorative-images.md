---
rule_id: SC1-1-1-decorative-images
name: Alternatives for decorative images
test_mode: semi-automatic
Environment: Web Browser

success_criterion:
- 1.1.1

authors:
- Wilco Fiers
- Mark Rogers
---

## Description

This rule checks images that are marked as decorative, do not require a text alternative.

*Editor note*: This rule is designed to replace (parts of) [/rules/SC1-1-1-text-alternative]

## Assumptions

*There are currently no assumptions*

## Background

- https://www.w3.org/WAI/tutorials/images/decorative/
- https://www.w3.org/TR/WCAG20-TECHS/H67.html

## Test procedure

### Selector

Select all elements that matches the following CSS selector:

    img[alt=""]:not([title]),
    img[alt=""][title=""],
    img[role="presentation"],
    img[role="none"]

Exclude elements from the list of selected elements if it is a descended of an element that matches the following CSS selector:

    a[href]:not([tabindex=-1]),
    button:not([tabindex=-1]),
    *[role=link][tabindex][:not([tabindex=-1]),
    *[role=button][tabindex]:not([tabindex=-1])


*Editor note:* We should test if `*[role=link]` is picked up as a link if it does not have tabindex on it. If so we might want to remove the `[tabindex]` part of the selector.

### Step 1

Check that the selected node does not match the following CSS selector:

    [aria-describedby]:not([aria-describedby=""]),
    [longdesc]:not([longdesc=""])

If the node does match, go to [Step 2](#step-2).

Else, return [step1-fail1](#step1-fail1)

### Step 2

Give the user the following question:

| Property             | Value
|----------------------|---------
| Presented item       | Selected element
| Question             | Is this element solely for decorative purposes?
| Help                 | Answer with 'Yes', if it is a decorative element such as a spacer, line or menu-background solely used for layout purposes or an eyecatching element that don't convey information useful for understanding the content of the page.
| User profile         | Requires sight
| Context              | yes

if yes, return [step2-pass](#step2-pass)

else, return [step2-fail](#step2-fail)

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | {{ page.rule_id }}
| mode     | semi-automatic
| subject  | << The tested page >>
| result   | << one of the following >>

### step1-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | The image has markup of both a complex image (`aria-labelledby` or `longdesc`) and a decorative image (`alt=""`, `role=presentation` or `role=none`).

### step2-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | The image is marked up as decorative, even though it has an informative function.

### step2-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description | The image is correctly marked as decorative.

## Implementation Tests

Implementation tests are available at: [{{ page.rule_id}} tests](../draft-tests/{{ page.rule_id }}.md)

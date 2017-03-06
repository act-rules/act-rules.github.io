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

This rule checks images that are marked as decorative, do not require a text alternative. Images that are the only content of an interactive element are not covered by this rule, as they are tested by [SC1-1-1+SC-4-1-2-interactive-images](SC1-1-1+SC-4-1-2-interactive-images.html).

*Editor note*: This rule is designed to replace (parts of) [/rules/SC1-1-1-text-alternative]

## Assumptions

- The `contenteditable` attribute is not used in such a way that it impacts which element is, and which is not interactive.

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

**Exclude** the image if it is the only [content](../pages/algorithms/content.html) of an [Interactive element](../pages/algorithms/interactive.html) (ignoring `select`, `textarea` and `input` as those would be invalid).

### Step 1

Give the user the following question:

| Property             | Value
|----------------------|---------
| Presented item       | Selected element
| Question             | Is this element solely for decorative purposes?
| Help                 | Answer with 'Yes', if it is a decorative element such as a spacer, line or menu-background solely used for layout purposes or an eye-catching element that don't convey information useful for understanding the content of the page.
| User profile         | Requires sight
| Context              | yes

if yes, return [step1-pass](#step1-pass)

else, return [step1-fail](#step1-fail)

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
| description | The image is marked up as decorative, even though it has an informative function.

### step1-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description | The image is correctly marked as decorative.

## Implementation Tests

Implementation tests are available at: [{{ page.rule_id}} tests](../draft-tests/{{ page.rule_id }}.html)

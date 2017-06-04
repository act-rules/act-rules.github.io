---
rule_id: SC1-1-1-informative-images
name: Alternatives for informative images
test_mode: semi-automatic
Environment: Web Browser

success_criterion:
- 1.1.1

authors:
- Wilco Fiers
- Mark Rogers
---

## Description

This rule checks that images are given a description, and that the description given to an image contains equivalent information.

*Editor note*: This rule is designed to replace (parts of) [SC1-1-1-text-alternative](/rules/SC1-1-1-text-alternative.html)

## Background

-

## Assumptions

- The `contenteditable` attribute is not used in such a way that it impacts which element is, and which is not interactive.

## Test procedure

### Selector

Select all elements that matches the following CSS selector:

    img:not([alt=""]):not([title]),
    img[title=""]:not([alt=""]),
    img:not([role="presentation"]),
    img:not([role="none"])

**Exclude** the image if it is the only [content](../pages/algorithms/content.html) of an [Interactive element](../pages/algorithms/interactive.html) (ignoring `select`, `textarea` and `input` as those would be invalid).

### Step 1

Find, using the [accessible name calculation algorithm](../pages/algorithms/anc.html), the *text alternative* of the selected element.

If the *text alternative* is [non-empty](../pages/algorithms/non-text.html), continue with [Step 2](#step-2).

Else, return [step1-fail](#step1-fail)

### Step 2

Give the user the following question:

| Property             | Value
|----------------------|---------
| Presented item       | Current element
| Question             | Does the textual alternative "*<< text alternative >>*" sufficiently describe the element?
| Help                 | If the element contributes meaning to the page or provides any functionality or conveys information additional to the pages text, this must be described. Please refer to the [explanations concerning sufficient short text alternatives](https://www.w3.org/community/auto-wcag/wiki/Sufficient_short_text_description) for further information.
| Repair               | If no, could you suggest a sufficient textual alternative?
| Requires context     | yes
| Requires Interaction | yes

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
| description | The image must have an accessible name.

### step2-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | The accessible name insufficiently describes the image.

### step2-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description | The accessible name sufficiently describes the image.

## Implementation Tests

Implementation tests are available at: [{{ page.rule_id}} tests](../draft-tests/{{ page.rule_id }}.html)

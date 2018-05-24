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

- https://www.w3.org/WAI/tutorials/images/informative/
- https://www.w3.org/TR/WCAG20-TECHS/H37.html
- https://www.w3.org/TR/WCAG20-TECHS/G94.html

## Assumptions

- The `contenteditable` attribute is not used in such a way that it impacts which element is, and which is not interactive.

## Test procedure

### Selector

Select any `img` element that has text as it's accessible name, following the [Text Alternative Computation](https://www.w3.org/TR/accname-aam-1.1/#mapping_additional_nd_te).

**Exclude** the image if it is the only [content](../pages/algorithms/content.html) of an [Interactive element](../pages/algorithms/interactive.html) that gets its [name from contents](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent) (ignoring such elements as `select`, `textarea` and `input`, as well as roles such as `textbox` and `scrollbar`).

Note: The text alternative of an img element is empty if it does not have text in the `alt`, `title` or `aria-label` attribute, and if `aria-labelledby` isn't used. If the role is set to `none` or `presentation` the element is also considered decorative.

For each selected item, go through the following steps:

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
| Help                 | If the element contributes meaning to the page or provides any functionality or conveys information complementary to the content of the page, this must be described. Please refer to the [explanations concerning sufficient short text alternatives](https://www.w3.org/community/auto-wcag/wiki/Sufficient_short_text_description) for further information.
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

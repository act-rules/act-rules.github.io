---
rule_id: SC1-1-1-aria-describedby
name: Proper use of aria-describedby
test_mode: semi-automatic
environment: Web Browser

success_criterion:
- 1.1.1 # Non-text Content (level A)

authors:
- Frank Berker
---

## Description

This test checks the sufficient provision of a long text description for elements using the `aria-describedby` attribute.

## Background

- [ARIA15: Using aria-describedby to provide descriptions of images](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/ARIA15)
- [G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G73)
- [G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G74)
- [G92: Providing long description for non-text content that serves the same purpose and presents the same information](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G92)
- [F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F67)
- The proper provision of a short text alternative is checked in [SC1-1-1-text-alternative](SC1-1-1-text-alternative.html).

## Assumptions

- It is not checked for references to long text descriptions within short text alternatives such as "The image is described in text below".
- If the `aria-describedby` attribute is provided, a long description was intended and is needed for the element.
- This test assumes that `role="image"` is properly used.

## Test procedure

### Selector

Select all elements that match the following CSS selector:

    img[aria-describedby],
    input[type="image"][aria-describedby],
    [role="image"][aria-describedby]

### Step 1

Check if at least one of the `aria-describedby` attribute values is a valid identifier.

if yes, continue with [step 2](#step-2)

else, return [step1-fail](#step1-fail)

### Step 2

Check if at least one of the elements referenced by the valid `aria-describedby` attribute values exists.

if yes, continue with [step 3](#step-3)

else, return [step2-fail](#step2-fail)

### Step 3

Concatenate the results of [Text Alternative Computation][TXTALT] Algorithm run on the element itself and assign it to variable T1 and on all elements referenced by the `aria-describedby` attribute and assign it to variable T2.

**User Input Question:**

| Property     | Value
|--------------|---------
| highlight    | Element with T1 and T2
| question     | Does T2 provide an extended description of the image additionally to T1?
| help         | If the image contributes meaning to the page or provide any functionality or conveys information additional to the pages text, this must be described.
| repair       | If no, could you suggest an long text alternative, which would sufficiently describe the image?
| user_profile | Requires sight
| context      | yes
| interaction  | yes

if yes, return [step3-pass](#step3-pass)

else return [step3-fail](#step3-fail)

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:{{ page.rule_id }}
| subject  | *the selected element*
| mode     | auto-wcag:{{ page.test_mode }}
| result   | <One TestResult from below>

### step1-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | None of the aria-describedby attribute values is a valid identifier.

### step2-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | None of the elements referenced by aria-describedby exists.

### step3-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step3-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | The long description provided using aria-describedby is not sufficiently descriptive.

[TXTALT]: ../pages/algorithms/text-alternative-compute.html
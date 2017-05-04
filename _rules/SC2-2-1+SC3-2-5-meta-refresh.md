---
rule_id: SC2-2-1+SC3-2-5-meta-refresh
name: Meta refresh and redirect is not used
test_mode: automatic
environment: DOM Structure

success_criterion:
- 2.2.1 # Timing Adjustable (Level A)
- 3.2.5 # Change on Request (Level AAA)

author:
- Wilco Fiers
---

## Description

This test checks if meta element is not used for delayed redirecting or refreshing.

## Background

- [H76: Using meta refresh to create an instant client-side redirect](http://www.w3.org/TR/WCAG20-TECHS/H76.html)
- [F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit](http://www.w3.org/TR/WCAG20-TECHS/F40.html)
- [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh with a time-out](http://www.w3.org/TR/WCAG20-TECHS/F41.html)

## Assumptions

- This test assumes no functionality was provided by the website for the user to adjust the timer.

## Test procedure

### Selector

Select all elements that match the following CSS selector:

    meta[http-equiv="refresh"][content]

### Step 1

Take the value of the content attribute of the selected element.

Remove any characters starting after the first comma or semicolon from the value.

Parse the remainder to an integer.

If the integer is invalid or 0, return [step1-pass](#step1-pass)

Else return [step1-fail](#step1-fail)

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:{{ page.rule_id }}
| subject  | *the selected element*
| mode     | auto-wcag:{{ page.test_mode }}
| result   | <One TestResult from below>

### step1-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step1-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Meta refresh should not be used unless it is instantaneous.

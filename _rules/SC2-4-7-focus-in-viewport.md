---
rule_id: SC2-4-7-focus-in-viewport
name: Focused element visible in viewport
test_mode: automatic
environment: WebDriver

success_criterion:
- 2.4.7 # Focus Visible (Level AA)

author:
- Wilco Fiers
---

## Description

This test checks that all elements that receive focus are visible in the viewport.

## Background

- [G149: Using user interface components that are highlighted by the user agent when they receive focus](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G149)
- [C15: Using CSS to change the presentation of a user interface component when it receives focus](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/C15)

## Assumptions

- Focus styles are only applied when the focus of browser viewport has the focus of the operating system. Scripts that give focus to elements do not update the style of that element unless the user is focused on this particular viewport in the OS.

## Test procedure

### Selector

Select all elements that match the following CSS selector:

- `a[href]:not([tabindex=-1])`,
- `button:not([tabindex=-1])`,
- `select:not([tabindex=-1])`,
- `textarea:not([tabindex=-1])`,
- `input:not([tabindex=-1]):not([type=hidden])`,
- `*[tabindex]:not([tabindex=-1])`

### Step 1

Give focus to the selected element.

Check that the offsetTop is equal or greater than 0 AND that the offset left minus the textIndent is equal or greater than 0

If yes, return [step1-pass](#step1-pass)

If no, return [step1-fail](#step1-fail)

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
| description | The element should be inside the viewport when it receives focus

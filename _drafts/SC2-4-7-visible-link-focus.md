---
rule_id: SC2-4-7-visible-link-focus 
name: 
test_mode: automatic

criteria:
- 2.4.7 # Focus Visible

authors:

---

## Description

This test checks that if links receive focus their style is changed in such a way that focus is recognized by the user.

## Background

- Links to Techniques for WCAG 2.0
- Link to other methodologies, test specifications or tools
- Links to test cases, test suites, unit tests
- Other references

## Assumptions

- The tool used to test can is capable of giving focus to the browser, in addition to being able to move focus within the browser. If the focus of the operating system is not inside the web browser most web browsers do not change the focus style.
- Outline, color, background, border and box-shadow are assumed to be the only types of style changes that clearly communicate focus to users.
- This test assumes styles to change back to their none-focus variations when the link is blurred.

## Test properties

| Property          | Value
|-------------------|----
| Success Criterion | 2.4.7 Focus Visible
| Test mode         | Automatic
| Test environment  | Rendered page
| Test subject      | Single web page

## Test procedure

### Selector

Test mode: [automatic][AUTO]

Select each visible anchor element on the page which does not have a negative tabindex attribute set

For each selected item, go through the following steps:

### Step 1: Outline visibility

Test mode: [automatic][AUTO]

Set OUTLINE_NO_FOCUS to be the CSS outline of the selected element.

Move focus to the selected element.

If the CSS outline of the selected element differs from OUTLINE1, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-7-visible-link-focus
| ID       | SC2-4-7-visible-link-focus-pass-1

Move focus away from selected element

### Step 2:

As in step 1, set variables for the following CSS properties of the selected element: border, color, box-shadow, background

Move focus to the selected element.

If any of the CSS properties border, color, box-shadow or background is different from its previously set variable, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-7-visible-link-focus
| ID       | SC2-4-7-visible-link-focus-pass-2

Else, return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-7-visible-link-focus
| ID       | SC2-4-7-visible-link-focus-fail
| Error    | The focus of the link is not visible

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
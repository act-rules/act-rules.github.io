---
rule_id: SC2-4-7-focus-in-viewport
name: Focused element visible in viewport
test_mode: automatic

criteria:
- 2.4.7 # Focus Visible (Level AA)

author:

---

## Description

This test checks that all elements that receive focus are visible in the viewport.

## Background

- [G149: Using user interface components that are highlighted by the user agent when they receive focus](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G149)
- [C15: Using CSS to change the presentation of a user interface component when it receives focus](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/C15)

## Assumptions

- Focus styles are only applied when the focus of browser viewport has the focus of the operating system. Scripts that give focus to elements do not update the style of that element unless the user is focused on this particular viewport in the OS.

## Test properties

| Property          | Value
|-------------------|----
| Test name         | Focused element visible in viewport
| Success Criterion | 2.4.7 Focus Visible
| Test mode         | Automatic
| Test environment  | Remote Controlled User Agent
| Test subject      | Single web page

## Test procedure

### Selector

Test mode: [automatic][AUTO]

Each element that matches one of the following CSS selectors

- `a[href]:not([tabindex=-1])`,
- `button:not([tabindex=-1])`,
- `select:not([tabindex=-1])`,
- `textarea:not([tabindex=-1])`,
- `input:not([tabindex=-1]):not([type=hidden])`,
- `*[tabindex]:not([tabindex=-1])`

### Step 1

Test mode: [automatic][AUTO]

Give focus to the selected element.

Check that the offsetTop is equal or greater than 0 AND that the offset left minus the textIndent is equal or greater than 0

If yes, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-7-focus-in-viewport
| ID       | SC2-4-7-focus-in-viewport-passed1

If no, return:

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-7-focus-in-viewport
| ID       | SC2-4-7-focus-in-viewport-failed
| Error    | The element should be inside the viewport when it receives focus

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
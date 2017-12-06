---
rule_id: SC3-2-2-input-select
name: 
test_mode: semi-automatic

criteria:
- 3.2.2 # On Input

authors:

---

## Description

This test checks form controls outside form elements.

## Background

- [G13: Describing what will happen before a change to a form control that causes a change of context to occur is made](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G13)
- [H84: Using a button with a select element to perform an action](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/H84)
- [eGovMon test for G13](http://wiki.egovmon.no/wiki/SC3.2.2#Element_input.5B.40type.3D.27radio.27.5D.2C_input.5B.40type.3D.27checkbox.27.5D.2C_or_select_not_contained_in_a_form_element)

## Assumptions

- This test case assumes that forms controls outside `<form>` elements use another way to submit the form data.

## Test properties

| Property          | Value
|-------------------|----
| Success Criterion | 3.2.2 On Input
| Test mode         | SemiAuto
| Test environment  | DOM (+ server connection ???)
| Test subject      | Single web page
| User expertise and skills | Basic understanding of HTML and WCAG

## Test procedure

### Selector

Test mode: [automatic][AUTO]

Select `input[@type='radio']`, `input[@type='checkbox']`, or select not contained in a form element.

For each selected item, go through the following steps:

### Step 1

Test mode: [automatic][AUTO]

Does the form control have a non-empty event-handler attribute?

If no, return

| Outcome  | Passed
|----------|-----
| Testcase | SC3-2-2-input-select
| ID       | SC3-2-2-input-select-pass1

If yes, continue with [Step 2](#step-2).

### Step 2

Test mode: [manual][MANUAL]

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | selected form controls
| Requires context     | yes
| Requires Interaction | no
| Question             | Is there an explanation of what will happen when the control is changed available prior to the controls activation?
| Help                 | Changing a control means checking a checkbox or changing the selected option in a list control. If the web page contains an explanation what will happen when a control is changed *before the form*, please answer "yes". Else, answer "no".

If no, return

| Outcome  | Failed
|----------|-----
| Testcase | SC3-2-2-input-select
| ID       | SC3-2-2-form-input-select-fail1
| Error    | Explanation about context change missing.

Else, return

| Outcome  | Passed
|----------|-----
| Testcase | SC3-2-2-input-select
| ID       | SC3-2-2-input-select-pass2

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
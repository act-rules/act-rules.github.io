This test belongs to [[3.2.2 On Input]].

## Status
{{status|For review|1073}}

## Description

This test checks form controls outside form elements.

## Background

- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G13 G13: Describing what will happen before a change to a form control that causes a change of context to occur is made]
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/H84 H84: Using a button with a select element to perform an action]
- [http://wiki.egovmon.no/wiki/SC3.2.2#Element_input.5B.40type.3D.27radio.27.5D.2C_input.5B.40type.3D.27checkbox.27.5D.2C_or_select_not_contained_in_a_form_element eGovMon test for G13]

## Assumptions

- This test case assumes that forms controls outside `<form>` elements use another way to submit the form data.

## Test properties

| Property         | Value
|------------------|----
|Success Criterion |[[3.2.2 On Input]]
|Test mode         |SemiAuto
|Test environment  |DOM (+ server connection ???)
|Test subject      |single web page
|User expertise and skills | basic understanding of HTML and WCAG


## Test procedure

### Selector
Test method: [semi-automatic]
Select input[@type='radio'], input[@type='checkbox'], or select not contained in a form element.


### Step 1
Test method: [semi-automatic]

Does the form control have a non-empty event-handler attribute?

If no,
return
{{Passed
|testcase = SC3-2-2-input-select
|id = SC3-2-2-input-select-pass1
}}

If yes,
continue with [[#Step 2]].
### Step 2
Test method: [manual]

{{UserInput
 |presented-item = selected form controls
 |requires-context = yes
 |requires-interaction = no
 |question = Is there an explanation of what will happen when the control is changed available prior to the controls activation?
 |help = Changing a control means checking a checkbox or changing the selected option in a list control. If the web page contains an explanation what will happen when a control is changed *before the form*, please answer "yes". Else, answer "no".
 }}

If no,
return
{{Failed
|testcase = SC3-2-2-input-select
|id = SC3-2-2-form-input-select-fail1
|error = Explanation about context change missing.
}}

Else,
return
{{Passed
|testcase = SC3-2-2-input-select
|id = SC3-2-2-input-select-pass2
}}

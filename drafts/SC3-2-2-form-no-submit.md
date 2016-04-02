
# SC3-2-2-form-no-submit 

This test belongs to [[3.2.2 On Input]].


## Description
This test checks forms that initiate a change of context without submit button.


## Background
- [G13: Describing what will happen before a change to a form control that causes a change of context to occur is made](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G13)
- [H84: Using a button with a select element to perform an action](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/H84)
- [eGovMon test for G13 and H84](http://wiki.egovmon.no/wiki/SC3.2.2#Element_form)


## Assumptions
- This test case assumes that forms without submit buttons use another way to submit the form data. Form controls that are used for other purposes and that are never submitted, might produce an incorrect failed result (false positive).


## Test properties
| Property          | Value
|-------------------|----
| Success Criterion | [[3.2.2 On Input]]
| Test mode         | SemiAuto
| Test environment  | DOM (+ server connection ???)
| Test subject      | Single web page
| User expertise and skills | Basic understanding of HTML and WCAG


## Test procedure

### Selector
Test method: [automatic]
Select `form` element without submit button (input[@type='submit'] or input[@type='image'] or button[@type='submit']).

### Step 1
Test method: [automatic]

Does the form contain only one form control from the following list:
- one group of radio buttons (input[@type='radio'][@name=name])
- one checkbox (input[@type='checkbox'])
- one select element
and not other form controls?

If no, return

| Outcome  | Failed
|----------|-----
| Testcase | SC3-2-2-form-no-submit
| ID       | SC3-2-2-form-no-submit-fail1
| Error    | The form has several fields and no submit button.

If yes, continue with [[#Step 2]].

### Step 2
Test method: [manual]

**User Input Question:**
| Property             | Value
|----------------------|---------
| Presented item       | selected form including all form controls
| Requires context     | yes
| Requires Interaction | no
| Question             | Is there an explanation of what will happen when the control is changed available prior to the controls activation?
| Help                 | Changing a control means checking a checkbox, entering text into a text field, or changing the selected option in a list control. If the web page contains an explanation what will happen when a control is changed *before the form*, please answer "yes". Else, answer "no".

If no, return

| Outcome  | Failed
|----------|-----
| Testcase | SC3-2-2-form-no-submit
| ID       | SC3-2-2-form-no-submit-fail2
| Error    | Explanation about context change missing.

Else, return

| Outcome  | Passed
|----------|-----
| Testcase | SC3-2-2-form-no-submit
| ID       | SC3-2-2-form-no-submit-pass1

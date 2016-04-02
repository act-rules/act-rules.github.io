
# SC3-2-2-form-submit

This test belongs to [[3.2.2 On Input]].


## Description
This test checks that forms with submit button initiate a change of context only when submit is used. Any other behavior must be explained to the user at the beginning of the form.


## Background
- [F36: Failure of Success Criterion 3.2.2 due to automatically submitting a form and presenting new content without prior warning when the last field in the form is given a value](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F36)
- [F37: Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the selection of a radio button, check box or select list is changed](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F37)
- [G13: Describing what will happen before a change to a form control that causes a change of context to occur is made](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G13)
- WCAG 2.0 Glossary entry for [change of context](http://www.w3.org/TR/WCAG20/#context-changedef)


## Assumptions


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
Select form element with submit button (input[@type='submit'] or input[@type='image'] or button[@type='submit']).

### Step 1
Test method: [manual]

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | selected form including all form controls
| Requires context     | no
| Requires Interaction | yes
| Question             | Fill in the form. Does any of the form controls cause a change of context when its value is changed?
| Help                 | Changing a control means checking a checkbox, entering text into a text field, or changing the selected option in a list control or set of radio buttons. Examples for change of context are: Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.

if no, return

| Outcome  | Passed
|----------|-----
| Testcase | SC3-2-2-form-submit
| ID       | SC3-2-2-form-submit-pass1

else continue with [[#Step 2]]

### Step 2
Test method: [manual]

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | *(same as in Step 1)*
| Requires context     | yes
| Requires Interaction | no
| Question             | Is there an explanation of the change of context before the form?
| Help                 | If the web page contains an explanation what will happen when the control is changed *before the form*, please answer "yes". Else, answer "no".

If no, return

| Outcome  | Failed
|----------|-----
| Testcase | SC3-2-2-form-submit
| ID       | SC3-2-2-form-no-submit-fail1
| Error    | Explanation about context change missing.

Else, return

| Outcome  | Passed
|----------|-----
| Testcase | SC3-2-2-form-submit
| ID       | SC3-2-2-form-no-submit-pass2

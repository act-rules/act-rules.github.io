# SC2-2-1+SC3-2-5-meta-refresh

## Description
This test checks if meta element is not used for delayed redirecting or refreshing.


## Background
- [H76: Using meta refresh to create an instant client-side redirect](http://www.w3.org/TR/WCAG20-TECHS/H76.html)
- [F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit](http://www.w3.org/TR/WCAG20-TECHS/F40.html)
- [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh with a time-out](http://www.w3.org/TR/WCAG20-TECHS/F41.html)


## Assumptions
- This test assumes no functionality was provided by the website for the user to adjust the timer.


## Test properties
| Property          | Value
|-------------------|----
| Test name         | Meta refresh and redirect is not used
| Success Criterion | 2.2.1 Timing Adjustable, 3.2.5 Change on Request
| Test mode         | Automatic
| Test environment  | DOM
| Test subject      | Single web page


## Test procedure

### Selector
Test mode: [automatic][earl:automatic]

Select each element matching: `meta[http-equiv="refresh"][content]`

### Step 1
Test mode: [automatic][earl:automatic]

Take the value of the content attribute of the selected element.

Remove any characters starting after the first comma or semicolon from the value.

Parse the remainder to an integer.

If the integer is invalid or 0, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC2-2-1+SC3-2-5-meta-refresh
| ID       | SC2-2-1+SC3-2-5-meta-refresh-passed
| Pointer  | Selected element

Else return:

| Outcome  | Failed
|----------|-----
| Testcase | SC2-2-1+SC3-2-5-meta-refresh
| ID       | SC2-2-1+SC3-2-5-meta-refresh-failed
| Error    | Meta refresh should not be used unless it is instantaneous.
| Pointer  | Selected element



[earl:automatic]: ../earl/automatic.md
[earl:semiauto]: ../earl/semiauto.md
[earl:manual]: ../earl/manual.md
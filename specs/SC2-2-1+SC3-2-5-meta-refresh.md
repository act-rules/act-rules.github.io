This test belongs to [[2.2.1 Timing Adjustable]], and to [[3.2.5 Change on Request]]

## Status
{{status|1.0: Completed|2080}}
[[Category:Completed‏‎]]

## Description
This test checks if meta element is not used for delayed redirecting or refreshing.

## Background
- [http://www.w3.org/TR/WCAG20-TECHS/H76.html H76: Using meta refresh to create an instant client-side redirect]
- [http://www.w3.org/TR/WCAG20-TECHS/F40.html F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit]
- [http://www.w3.org/TR/WCAG20-TECHS/F41.html F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh with a time-out]


## Assumptions

- This test assumes no functionality was provided by the website for the user to adjust the timer.

## Test properties

| Property         | Value
|------------------|----
|Test name         |Meta refresh and redirect is not used
|Success Criterion |[[2.2.1 Timing Adjustable]], [[3.2.5 Change on Request]]
|Test mode         |automatic
|Test environment  |DOM
|Test subject      |single web page


## Test procedure

### Selector
Test method: [semi-automatic]

Select each element matching: `meta[http-equiv="refresh"][content]`

### Step 1
Test method: [semi-automatic]

Take the value of the content attribute of the selected element.

Remove any characters starting after the first comma or semicolon from the value.

Parse the remainder to an integer.

If the integer is invalid or 0, return:
{{Passed
 |testcase = SC2-2-1+SC3-2-5-meta-refresh
 |id = SC2-2-1+SC3-2-5-meta-refresh-passed
 |pointer = Selected element
 }}

Else return:
{{Failed
 |testcase = SC2-2-1+SC3-2-5-meta-refresh
 |id = SC2-2-1+SC3-2-5-meta-refresh-failed
 |error = Meta refresh should not be used unless it is instantaneous.
 |pointer = Selected element
 }}

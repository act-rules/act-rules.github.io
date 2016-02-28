
## Description
This test checks whether or not fieldset elements have been used above a certain number of elements.

## Background
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H71| H71: Providing a description for groups of form controls using fieldset and legend elements]
- [http://wiki.egovmon.no/wiki/SC3.3.2#ID:_H71-1|eGovMon test H71-1]

## Assumptions

- There is no other valid way to divide forms other then fieldset elements

## Test properties

| Property         | Value
|------------------|----
|Success Criterion | [[1.3.1 Info and Relationships]]
|Test mode         |automatic
|Test environment  | DOM
|Test subject      | single web page


## Test procedure

### Selector
Test method: [semi-automatic]

Select any form element.

### Step 1
Test method: [semi-automatic]

- Create an empty “amount” integer;
- Fill “amount” with: the amount of input elements in the selected form element. (elements: input[@type='text'], input[@type='password'], input[@type='file'], select, textarea);
- IF “amount” is higher than 8 AND no element in the selected element is a fieldset element:
** Return SC131-form-division-possiblefail;
- ELSE:
**  Return SC131-form-division-pass;


{{TestResult
|testcase = SC131-form-division
|outcome = cantTell
|error = human input required.
|info = More than 8 input element but no fieldset element.
|id =  SC131-form-division-possiblefail
}}

{{Passed
|testcase = SC131-form-division
|outcome = passed
|id =  SC131-form-division-pass
}}

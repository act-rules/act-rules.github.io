
## Description
This test checks to see if all radio buttons and check boxes with the same name are grouped in a fieldset element.

## Background
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H71| H71: Providing a description for groups of form controls using fieldset and legend elements]
- [http://wiki.egovmon.no/wiki/SC3.3.2#ID:_H71-2|eGovMon test H71-2]

## Assumptions

*no known assumptions*

## Test properties

| Property         | Value
|------------------|----
|Success Criterion |[[1.3.1 Info and Relationships]]
|Test mode         |automatic
|Test environment  | DOM
|Test subject      | single web page


## Test procedure

### Selector
Test method: [semi-automatic]

Select any radio buttons and check boxes. The following CSS selector could be used: "input[type=radio], input[type=checkbox]"

### Step 1
Test method: [semi-automatic]

- IF there is no list 'checkednames':
** Create an empty list 'checkednames';
- IF the value of the name attribute of the selected input element exists in 'checkednames':
** Return SC131-radiocheck-pass;
- IF the selected element is a child of a fieldset element:
** Create an empty variable 'current fieldset';
** Put the fieldset the selected element is a child from into 'current fieldset';
** FOR every selected element:
*** IF the selected element has the same value in the name attribute as the current selected element:
**** IF the selected element is a child of the 'current fieldset' element:
***** Continue;
**** ELSE:
***** Return SC131-radiocheck-fail1;
*** ELSE:
**** IF the selected element is a child of the 'current fieldset' element:
***** Return SC131-radiocheck-fail2;
**** ELSE:
***** Continue;
- Put the value of the name attribute of the selected input element into 'checkednames';
- Return SC131-radiocheck-pass;


{{Passed
|testcase = SC131-radiocheck
|id =  SC131-radiocheck-pass
}}

{{Failed
|testcase = SC131-radiocheck
|error = failed to group elements in fieldset correctly
|info = two radio button or check box input elements with the same name are not in the same fieldset
|id =  SC131-radiocheck-fail1
}}

{{Failed
|testcase = SC131-radiocheck
|error = failed to group elements in fieldsets correctly
|info = two radiobutton or checkbox input elements within the same fieldset don't share the same name.
|id =  SC131-radiocheck-fail2
}}

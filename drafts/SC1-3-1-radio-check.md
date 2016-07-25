# SC1-3-1-radio-check 

## Description

This test checks to see if all radio buttons and check boxes with the same name are grouped in a fieldset element.

## Background

- [H71: Providing a description for groups of form controls using fieldset and legend elements](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H71)
- [eGovMon test H71-2](http://wiki.egovmon.no/wiki/SC3.3.2#ID:_H71-2)

## Assumptions

*no known assumptions*

## Test properties

| Property          | Value
|-------------------|----
| Success Criterion | 1.3.1 Info and Relationships
| Test mode         | Automatic
| Test environment  | DOM
| Test subject      | Single web page

## Test procedure

### Selector

Test mode: [automatic][AUTO]

Select any radio buttons and check boxes. The following CSS selector could be used:

```CSS
input[type=radio], input[type=checkbox]
```

### Step 1

Test mode: [automatic][AUTO]

- IF there is no list 'checkednames':
  - Create an empty list 'checkednames';
- IF the value of the `name` attribute of the selected `input` element exists in 'checkednames':
  - Return SC131-radiocheck-pass;
- IF the selected element is a child of a `fieldset` element:
  - Create an empty variable 'current fieldset';
  - Put the fieldset the selected element is a child from into 'current fieldset';
  - FOR every selected element:
    - IF the selected element has the same value in the `name` attribute as the current selected element:
      - IF the selected element is a child of the 'current fieldset' element:
        - Continue;
      - ELSE:
        - Return SC131-radiocheck-fail1;
    - ELSE:
      - IF the selected element is a child of the 'current fieldset' element:
        - Return SC131-radiocheck-fail2;
      - ELSE:
        - Continue;
- Put the value of the `name` attribute of the selected `input` element into 'checkednames';
- Return SC131-radiocheck-pass;

| Outcome  | Passed
|----------|-----
| Testcase | SC131-radiocheck
| ID       | SC131-radiocheck-pass

| Outcome  | Failed
|----------|-----
| Testcase | SC131-radiocheck
| Error    | failed to group elements in fieldset correctly
| Info     | two radio button or check box input elements with the same name are not in the same fieldset
| ID       |  SC131-radiocheck-fail1

| Outcome  | Failed
|----------|-----
| Testcase | SC131-radiocheck
| Error    | failed to group elements in fieldsets correctly
| Info     | two radiobutton or checkbox input elements within the same fieldset don't share the same name.
| ID       |  SC131-radiocheck-fail2

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
# SC4-1-2-user-input 

## Description

This test checks the existence of associated labels at every form control that take user input.

## Background

- [G131: Providing descriptive labels](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/G131)
- [H44: Using label elements to associate text labels with form controls](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H44.html)
- [eGovMon test G131-1](http://wiki.egovmon.no/wiki/SC3.3.2#ID:_G131-1)

## Assumptions

*no known assumptions*

## Test properties

| Property          | Value
|-------------------|----
| Success Criterion | [[4.1.2 Name, Role, Value]]
| Test mode         | Automatic
| Test environment  | DOM
| Test subject      | Single web page

## Test procedure

### Selector

Test mode: [automatic]
Select every input element, except for elements of the type hidden, button, image and submit, as well as any select and textarea elements

### Step 1

Test mode: [automatic]

- IF the current element has a [[non-empty]] label element associated to its id by a for attribute:
  - Return SC412-user-input-pass;
- IF the current element has [[non-empty]] title attribute:
  - Return SC412-user-input-pass;
- IF the current element has a [[non-empty]] aria-label attribute:
  - Return SC412-user-input-pass;
- IF the current element has a aria-labelledby attribute that refers to an existing [[non-empty]] element:
  - Return SC412-user-input-pass;
- ELSE Return SC412-user-input-fail;

| Outcome  | Passed
|----------|-----
| Testcase | SC412-user-input
| ID       | SC412-user-input-pass

| Outcome  | Failed
|----------|-----
| Testcase | SC412-user-input
| Error    | failed to give an input element a name
| Info     | This input element is missing a label element.
| ID       | SC412-user-input-fail

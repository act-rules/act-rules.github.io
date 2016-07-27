
---
# [Rule Metadata](../pages/metadata.md)

rule_id: SC1-3-1-form-division
name: 
test_mode: automatic

criteria:
- content-structure-separation-programmatic: 1.3.1 Info and Relationships (Level A)

authors:

---

## Description

This test checks whether or not `fieldset` elements have been used above a certain number of elements.

## Background

- [H71: Providing a description for groups of form controls using fieldset and legend elements](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H71)
- [eGovMon test H71-1](http://wiki.egovmon.no/wiki/SC3.3.2#ID:_H71-1)

## Assumptions

- There is no other valid way to divide forms other then `fieldset` elements

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

Select any form element.

### Step 1

Test mode: [automatic][AUTO]

- Create an empty “amount” integer;
- Fill “amount” with: the amount of input elements in the selected form element. (elements: `input[@type='text']`, `input[@type='password']`, `input[@type='file']`, `select`, `textarea`);
- IF “amount” is higher than 8 AND no element in the selected element is a fieldset element:
  - Return SC131-form-division-possiblefail;
- ELSE:
  - Return SC131-form-division-pass;

| Outcome  | CantTell
|----------|-----
| Testcase | SC131-form-division
| Error    | human input required.
| Info     | More than 8 input element but no fieldset element.
| ID       | SC131-form-division-possiblefail

| Outcome  | Passed
|----------|-----
| Testcase | SC131-form-division
| ID       |  SC131-form-division-pass

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
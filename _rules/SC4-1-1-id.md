---
rule_id: SC4-1-1-id
name: Define ids for elements
test_mode: automatic
environment: DOM Structure

success_criterion:
- 4.1.1 # Parsing (Level A)

author:
- Kamyar Rasta
- Wilco Fiers
---

## Description

This test checks id attribute for all elements to have a unique value.

## Background

- [H93: Ensuring that id attributes are unique on a Web page](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H93)
- [F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F77)
- [eGovMon test F77-1](http://wiki.egovmon.no/wiki/SC4.1.1#ID:_F77-1)

## Assumptions

*no known assumptions*

## Test procedure

### Selector

Select all elements that match the following CSS selector:

    *[id]

### Step 1

- IF there is no list called 'knownIDs':
  - Create an empty list 'knownIDs;
- IF the value of the ID attribute exists in 'knownIDs':
  - Return [step1-fail](#step1-fail)
- ELSE:
  - Add the value of the ID attribute of the selected element to 'knownIDs'
  - Return [step1-pass](#step1-pass)

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:{{ page.rule_id }}
| subject  | *the selected element*
| mode     | auto-wcag:{{ page.test_mode }}
| result   | <One TestResult from below>

### step1-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | The ID of this element has occurred before on this page

### step1-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

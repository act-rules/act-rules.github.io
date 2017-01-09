---
rule_id: SC4-1-1-id
name: Define unique ids for elements
test_mode: automatic
environment: DOM Structure

success_criterion:
- 4.1.1 # Parsing (Level A)

authors:
- Wilco Fiers

---

## Description

This test checks id attribute for all elements to have a unique value.

### Background

- [H93: Ensuring that id attributes are unique on a Web page](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H93)
- [F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F77)
- [eGovMon test F77-1](http://wiki.egovmon.no/wiki/SC4.1.1#ID:_F77-1)

### Assumptions

- assumes a full page has loaded to enable comparison

## Test procedure

### Selector

Select any element with an id attribute. The following CSS selector could be used: 

    `*[id]`

### Step 1

If there is no list called 'knownIDs', create an empty list 'knownIDs.

Continue with [step 2](#step-2)

### Step 2

For each element, check if the id attribute exists in 'knownIDs'.

if yes, return [step2-fail](#step2-fail)

else, add the value for the id attribute of the selected element to 'knownIDs'

### Step 3

Confirm there were no fails.

if yes, return [step3-pass](#step3-pass)

## Outcome

### step2-fail

| Property    | Value
|-------------|-----
| type        | TestResult
| outcome     | Failed
| description | An id attribute is duplicated on the page.

### step3-pass

| Property    | Value
|-------------|-----
| type        | TestResult
| outcome     | Passed
| description | All id attributes are unique on the page.

## Implementation Tests

Implementation tests are available at: [SC4-1-1-id Tests](SC4-1-1-id.test.md)

## Change log

### Version 1.1
- edit to fit revised format for rules

### Version 1.0
- add default author fields

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

Assumes a full page has loaded to enable comparison.

## Test procedure

### Selector

Select all elements that match the following CSS selector: `*[id]`

For each selected item, go through the following steps:

### Step 1

For each element, check if the id attribute matches any other selected element's id attribute.

if yes, return step1-fail

else, return step1-pass

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
| description | ID [attribute-value] is duplicated on the page.

### step1-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description | ID [attribute-value] is unique on the page.

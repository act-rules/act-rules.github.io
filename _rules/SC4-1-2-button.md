---
rule_id: SC4-1-2-button
name: Button has name
test_mode: automatic
environment: DOM Structure

success_criterion:
- 4.1.2 # Name, Role, Value (Level A)

author:
- Wilco Fiers
---

## Description

This test checks if every button element has a name.

## Background

- [H91: Using HTML form controls and links](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H91.html)
- [eGovMon test H91-2](http://wiki.egovmon.no/wiki/SC4.1.2#ID:_H91-2)

## Assumptions

- The test case does not look at buttons with img content

## Test procedure

### Selector

Select all elements that match the following XPATH selector:

    button

### Step 1

Check if there is [non-empty][NEMPTY] text within the button element

Or if the button element has a `title` attribute with a [non-empty][NEMPTY]

Return [step1-pass][#step1-pass]

Else, return [step1-fail][#step1-fail]

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:{{ page.rule_id }}
| subject  | *the selected element*
| mode     | {{ page.test_mode }}
| result   | <One TestResult from below>

### step1-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | failed to give an anchor element a name
| info        | This button element has no filled title attribute nor text content.

### step1-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed

## Implementation Tests

There are currently no tests

## Change log

### Version 1.1

- Edit to fit revised format for rules

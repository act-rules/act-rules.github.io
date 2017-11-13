---
rule_id: SC4.1.2-Name-Role-Value-id
name: Interface controls-programmatically determind nmae
test_mode: automatic
environment: DOM Structure

success_criterion:
- 4.1.2 - Name, Role, Value

authors: Charu Pandhi
-
---

## Description

This rule checks if a interface control has a programmatically determined name 

## Background

- [F68: Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name ] (https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F68)

## Assumptions

*There are currently no assumptions*

## Test procedure

### Selector

Select all elements that match the following CSS selector:

    input:not([hidden, submit, reset, button]),
    textarea,
    select

### Step 1

Check if

if yes,

else, return [step1-fail](#step1-fail)

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:{{ page.rule_id }}
| subject  | *the selected element*
| mode     | auto-wcag:{{ page.test_mode }}
| result   | <One TestResult from below>

### step1-fail1

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description |

### step1-pass1

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

## Implementation Tests

There are currently no tests available for this rule.

Implementation tests are available at: [rulename tests](rule-id.test.md)

## Change log

### Version 1.0

- Set up the initial rule
---
rule_id:
name:
test_mode: automatic / semi-automatic / manual
environment: Markup Document / DOM Structure / Web Browser / WebDriver

success_criterion:
- x.x.x

authors:
-
---

## Description

This rule checks ...

## Background

-

## Assumptions

*There are currently no assumptions*

## Test procedure

### Selector

Select all elements that <has / matches> the following < CSS selector / XPATH selector / features>:

    <selector>

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
---
title: Auto-WCAG Rule Template
---

The rule template contains a plain language description of the rule, some background information, and a list of all assumptions. The test procedure is defined by the selector, a number of steps and a description of the possible outcomes.

Use the [empty test template](rule-template-empty.md) to create new auto-wcag rule. When creating a new rule, first read [rule design](rule-design.md).

```markdown
---
rule_id: SC#-#-#-something
name: Short descriptive name
test_mode: automatic / semi-automatic / manual
environment: Markup Document / DOM Structure / Web Browser / WebDriver

success_criterion:
- x.x.x # Criterion handle as a YAML comment + level

authors:
- Your Name # As used in /data/contributors.yml
---

## Description

This rule checks ...

## Background

- Links to Techniques for WCAG 2.0
- Latest version: Techniques for WCAG 2.0 W3C Working Group Note 8 April 2014
- Link to other methodologies, test specifications or tools
- Links to test cases, test suites, unit tests, etc.
- The WCAG 2.0 Techniques already contain examples and code snippets to illustrate which content passes or fails the test. Whenever possible auto-wcag refers to those. Another source for test cases is the W3C Before and After Demonstration.
- Other references

## Assumptions

- Make a list

## Test procedure

### Selector

Select all elements that <has / matches> the following < CSS selector / XPATH selector / features>:

    * > selector[type=css]

### Step 1

Check if at least one of the elements referenced by the valid `aria-describedby` attribute values exists.

if yes, continue with [step 2](#step-2)

else, return [step1-fail](#step1-fail)

### Step 2

Give the user the following question:

| Property     | Value
|--------------|---------
| Highlight    | Element A1 and B2
| Question     | Does T2 provide an extended description of the image additionally to T1?
| Help         | If the image contributes meaning to the page or provide any functionality or conveys information additional to the pages text, this must be described.
| User profile | Requires <sight / hearing / fine motor control / HTML Knowledge / Accessibility knowledge / ...>
| context      | yes | Optional
| Interaction  | yes | Optional

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:rule-id
| subject  | *the selected element*
| mode     | automatic
| result   | <One TestResult from below>

### step1-fail1

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | None of the elements referenced by aria-describedby exists.

### step1-pass1

| Property | Value
|----------|----------
| type     | TestResult
| outcome  | Passed
| ...      | ...

## Implementation Tests

Implementation tests are available at: [rulename tests](rule-id.test.md)

## Change log

### Version 1.1
- Something
- Something else

```
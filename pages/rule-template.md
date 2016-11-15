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
Environment: Markup Document / DOM Structure / Web Browser / WebDriver

success_criterion:
- x.x.x # Criterion handle as a YAML comment + level

authors:
- Your Name # As used in /data/contributors.yml
---

## Description

This rule checks ...

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

...

## Background

- Links to Techniques for WCAG 2.0
- Latest version: Techniques for WCAG 2.0 W3C Working Group Note 8 April 2014
- Link to other methodologies, test specifications or tools
- Links to test cases, test suites, unit tests, etc.
- The WCAG 2.0 Techniques already contain examples and code snippets to illustrate which content passes or fails the test. Whenever possible auto-wcag refers to those. Another source for test cases is the W3C Before and After Demonstration.
- Other references


## Outcome

The resulting assertion is as follows,

  {
    "@type": "Assertion",
    "@id": "rule-id-fail-name",
      "test": "auto-wcag:rule-id",
      "subject": (selected element),
      "mode": "automatic",
      "result": (One TestResult from below)
    }

### step1-pass1

    {
      "@type": "TestResult",
      "outcome": "Passed",
...

### step1-fail1

    {
      "@type": "TestResult",
      "outcome": "Failed",
      "description": "None of the elements referenced by aria-describedby exists."
    }

## Implementation Tests

Implementation tests are available at [rulename tests](url)


```
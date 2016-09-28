---
title: Auto-WCAG Rule Template
---

The test template contains a plain language description of the test, some background information, and a list of all assumptions. The test properties are summarized in a table. The actual test is defined by the selector, a number of steps and a formal description of the test outcomes.

The format of the test properties and outcomes is aligned with EARL.
Use the [empty test template](rule-template-empty.md) to create new auto-wcag tests on this wiki.

For the name of the test case use the following format: **SC#-#-#-identifier**

- **SC#-#-#**: This is an identifier for the criterion to which the test case applies. #-#-# stands for the number of that criterion, such as SC4-1-2.

- **+SC#-#-#**: This can be used if the test case applies to multiple success criteria, such as SC1-1-1+SC4-1-2-identifier. The numbers are in the same order as they are used in WCAG.

- **identifier**: This must be a lower case identifier of the test, preferable no more then 3 words. It can only contain alphanumeric values or a dash (-).

```markdown
---
rule_id: SC#-#-#-something
name:
test_mode: automatic / semi-automatic / manual
Environment: Source file / HTTP response / DOM / Rendered page


criteria:
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

Select all elements that match the following CSS selector:

    *[role]

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
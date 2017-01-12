---
rule_id: SC1-1-1-decorative-images
name: Alternatives for decorative images
test_mode: semi-automatic
Environment: Web Browser

success_criterion:
- 1.1.1

authors:
- Wilco Fiers
- Mark Rogers
---

## Description

This rule checks images that are marked as decorative, do not require additional alternative information.

*Editor note*: This rule is designed to replace (parts of) [/rules/SC1-1-1-text-alternative]

## Assumptions

*There are currently no assumptions*

## Test procedure

### Selector

Select all elements that matches the following CSS selector:

    img[alt=""],
    img[role="presentation"]

Exclude elements from the list of selected elements if it is a descended of an element that matches the following CSS selector:

    a[href], button, input, *[role=link], *[role=button]

### Step 1

Check if

if yes,

else, return [step1-fail](#step1-fail)

## Background

-

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| id       |
| test     |
| subject  |
| mode     |
| result   |

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

Implementation tests are available at: [rulename tests]()

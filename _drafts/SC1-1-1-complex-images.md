---
rule_id: SC1-1-1-complex-images
name: Alternatives for complex images
test_mode: semi-automatic
Environment: Web Browser

success_criterion:
- 1.1.1

authors:
- Wilco Fiers
- Mark Rogers
---

## Description

This images checks that when an longer description is provided, that it exists and that it correctly describes the image.

*Editor note*: This rule is designed to replace (parts of) [/rules/SC1-1-1-text-alternative]

## Assumptions

*There are currently no assumptions*

## Test procedure

### Selector

Select all elements that matches the following CSS selector:

    input[type=image][aria-describedby],
    area[aria-describedby],
    img[aria-describedby], img[longdesc]

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

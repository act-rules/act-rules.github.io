---
rule_id: SC1-1-1+SC-4-1-2-interactive-images
name: Alternatives for interactive images
test_mode: semi-automatic
Environment: Web Browser

success_criterion:
- 1.1.1
- 4.1.2

authors:
- Wilco Fiers
- Mark Rogers
---

## Description

This rule checks image buttons and image links are have a text alternative, and that this alternative is descriptive of either the image or of the purpose of the interactive element.

*Editor note*: This rule is designed to replace (parts of) [SC1-1-1-text-alternative](/rules/SC1-1-1-text-alternative.html)

## Assumptions

*There are currently no assumptions*

## Test procedure

### Selector

Select all elements that matches the following CSS selector:

    input[type=image],
    area,
    button:not(role) img, button:not(role) *[role=image],
    a[href]:not(role) img, a[href]:not(role) *[role=image],
    *[role=button] img, *[role=button] *[role=image]
    *[role=link] img, *[role=link] *[role=image]

Exclude elements from the list of selected elements if:

  - They are `img` or `[role=image]` elements, and the button or link that contains it contains additional [non-text content][] or images.


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

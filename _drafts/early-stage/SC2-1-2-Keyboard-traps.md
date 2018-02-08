---
rule_id: SC2-1-2-Keyboard-traps
name: There are no keyboard traps on the web page
test_mode: manual

criteria:
- 2.1.2 No keyboard traps

authors:
- GSF / DRO
---

## Description

This test checks that it is possible to navigate by keyboard through all content on the web page without being stuck in any elements on the page.

## Background

- [Understanding SC 2.1.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html)
- [G21: Ensuring that users are not trapped in content](https://www.w3.org/TR/WCAG20-TECHS/G21.html)
- [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](https://www.w3.org/TR/WCAG20-TECHS/F10.html)

## Assumptions



## Test procedure

### Selector



### Step 1

Are there elements on the page that are possible to reach through keyboard navigation?

If `lang` attribute exists:

L1 = value of `lang` attribute.

Continue with [Step2](#step-2).

else if neither `lang` nor `xml:lang` are specified, return [step1-fail](#step1-fail)

else (only `xml:lang` exists)

*Do nothing. (This case is covered by [SC3-1-1-xml-lang](SC3-1-1-xml-lang.html).)*

### Step 2

Compare L1 to BCP 47.

If L1 is not on the list, return [step2-fail](#step2-fail)

*Note that this step also fails if L1 contains only whitespace or is empty.*

Else, return [step2-pass](#step2-pass)

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
| description | No language attribute found.

### step2-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Unknown language code.

### step2-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

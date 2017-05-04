---
rule_id: SC3-1-2-xml-lang
name: Language of Parts
test_mode: automatic
environment: DOM Structure

success_criterion:
- 3.1.2 # Language of Parts (Level AA)

authors:
- Annika Nietzio
---

## Description

This test checks the value of the `xml:lang` attributes.

## Background

- [H58: Using language attributes to identify changes in the human language](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H58)
- [eGovMon test for SC3.1.2](http://wiki.egovmon.no/wiki/SC3.1.2)
- [BCP 47: Tags for the Identification of Languages](http://www.rfc-editor.org/rfc/bcp/bcp47.txt)

## Assumptions

- Tests have shown that `xml:lang` is ignored by screenreaders. (Both Jaws 15 with FF and IE and NVDA with FF go by lang attribute, xml:lang is ignored.) This test identifies pages that use only the  `xml:lang` attribute.

## Test procedure

### Selector

Select all elements that match the following XPATH selector:

    descendent-or-self::body[@xml:lang]

### Step 1

Check that the selected element contains also a `lang` attribute.

If no `lang` is specified, return [step1-fail](#step1-fail)

### Step 2

L1 = value of `xml:lang`

L2 = value of `lang`

Compare L1 and L2.

If the L1 and L2 differ, return [step2-fail](#step2-fail)

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
| description | No lang attribute found.

### step2-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Contradicting language attributes.

### step2-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

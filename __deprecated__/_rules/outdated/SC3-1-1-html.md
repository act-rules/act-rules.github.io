---
rule_id: SC3-1-1-html
name: Primary language of page
test_mode: automatic
environment: DOM Structure

success_criterion:
- 3.1.1 # Language of Page (Level A)

authors:
- Annika Nietzio
---

## Description

This test checks that the primary language of the web content can be programmatically determined.

## Background

- [H57: Using language attributes on the html element](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57)
- [eGovMon test for H57](http://wiki.egovmon.no/wiki/SC3.1.1#Element_html)
- [BCP 47: Tags for the Identification of Languages](http://www.rfc-editor.org/rfc/bcp/bcp47.txt)

## Assumptions

- The comparison of language codes does not look for exact matches. Technique H57 states: "Use of the primary code is important for this technique." which means that region subtags can be ignored in the comparison, i.e. "en-GB" is the same as "en".
- This test checks the `lang` attribute of the `html` element. The xml:lang attribute is not taken into account because tests have shown, that xml:lang is ignored by screenreaders. (Both Jaws 15 with FF and IE and NVDA with FF go by lang attribute, xml:lang is ignored.) The `xml:lang` attribute is checked by a separate test: [SC3-1-1-xml-lang](SC3-1-1-xml-lang.html).

## Test procedure

### Selector

Select the `html` element.

### Step 1

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

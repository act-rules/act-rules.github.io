---
rule_id: SC3-1-2-lang
name: Languages within the body
test_mode: automatic
environment: DOM Structure

success_criterion:
- 3.1.2 # Language of Parts (Level AA)

authors:
- Annika Nietzio
---

## Description

This test checks that `lang` attributes within the body of a web page are correct.

## Background

- [H58: Using language attributes to identify changes in the human language](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H58)
- [eGovMon test for SC3.1.2](http://wiki.egovmon.no/wiki/SC3.1.2#Element_descendent-or-self::body.5B.40lang.5D_or_descendent-or-self::body.5B.40xml:lang.5D)
- [BCP 47: Tags for the Identification of Languages](http://www.rfc-editor.org/rfc/bcp/bcp47.txt)

## Assumptions

- The comparison of language-code does not look for exact matches. Technique H57 states: "Use of the primary code is important for this technique." which means that region subtags can be ignored in the comparison, i.e. "en-GB" is the same as "en".
- This test checks the `lang` attributes. The `xml:lang` attributes are not taken into account because tests have shown, that `xml:lang` is ignored by screenreaders. (Both Jaws 15 with FF and IE and NVDA with FF go by lang attribute, xml:lang is ignored.) The `xml:lang` attributes are checked by a separate test: [SC3-1-2-xml-lang](SC3-1-2-xml-lang.html).

## Test procedure

### Selector

Select all elements that match the following XPATH selector:

    descendent-or-self::body[@lang]

This test is applied to all elements with `lang` attribute in the body of the web page (including the body element itself).

### Step 1

L1 = value of `lang` attribute.

Compare L1 to BCP 47.

If L1 is not on the list, return [step1-fail](#step1-fail)

Else, return [step1-pass](#step1-pass)

*Note that this step also fails if L1 contains only whitespace or is empty.*

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
| description | Unknown language code L1

### step1-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

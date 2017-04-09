---
rule_id: SC3-1-1-html
name: Primary language of page
test_mode: automatic
environment: DOM Structure

criteria:
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

## Test properties

| Property          | Value
|-------------------|----
| Test name         | Primary language of page
| Success Criterion | 3.1.1 Language of Page
| Test mode         | Automatic
| Test environment  | DOM
| Test subject      | single web page

## Test procedure

### Selector

Test mode: [automatic][AUTO]

Select the `html` element.

### Step 1

Test mode: [automatic][AUTO]

If `lang` attribute exists:

L1 = value of `lang` attribute.

Continue with [Step2](#step-2).

else if neither `lang` nor `xml:lang` are specified, return

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-fail1
| Error    | No language attribute found.

else (only `xml:lang` exists)

*Do nothing. (This case is covered by [SC3-1-1-xml-lang](SC3-1-1-xml-lang.html).)*

### Step 2

Test mode: [automatic][AUTO]

Compare L1 to BCP 47.

If L1 is not on the list, return

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-fail2
| Error    | Unknown language code.
| Info     | L1

*Note that this step also fails if L1 contains only whitespace or is empty.*

Else, return

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-pass1

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
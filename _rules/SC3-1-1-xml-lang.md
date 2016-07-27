---
rule_id: SC3-1-1-xml-lang
name: Use identical xml:lang and lang attributes
test_mode: automatic

criteria:
- 3.1.1 # Language of Page (Level A)

authors:
- Annika Nietzio
---

## Description

This test checks the value of the `xml:lang` attribute.

## Background

- [H57: Using language attributes on the html element](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57)
- [eGovMon test for H57](http://wiki.egovmon.no/wiki/SC3.1.1#Element_html)
- [BCP 47: Tags for the Identification of Languages](http://www.rfc-editor.org/rfc/bcp/bcp47.txt)

## Assumptions

- Tests have shown that `xml:lang` is ignored by screenreaders. (Both Jaws 15 with FF and IE and NVDA with FF go by lang attribute, xml:lang is ignored.) This test identifies pages that use only the `xml:lang` attribute.

## Test properties

| Property          | Value
|-------------------|----
| Test name         | Use identical xml:lang and lang attributes
| Success Criterion | 3.1.1 Language of Page
| Test mode         | Automatic
| Test environment  | DOM
| Test subject      | Single web page

## Test procedure

### Selector

Test mode: [automatic][AUTO]

Select `html` element with `xml:lang` attribute.

`html[@xml:lang]`

### Step 1

Test mode: [automatic][AUTO]

Check that the `html` element contains also a `lang` attribute.

If no `lang` is specified, return

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-fail1
| Error    | No lang attribute found. Only xml:lang.

### Step 2

Test mode: [automatic][AUTO]

L1 = value of `xml:lang`

L2 = value of `lang`

Compare L1 and L2.

If the L1 and L2 differ, return

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-fail2
| Error    | Contradicting language codes.
| Info     | L1, L2

Else, return

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-pass1

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
This test belongs to [[3.1.2 Language of Parts]].


## Status
{{status|1|844}}
[[Category:Completed]]


## Description
This test checks the value of the `xml:lang` attributes.


## Background
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H58  H58: Using language attributes to identify changes in the human language]
- [http://wiki.egovmon.no/wiki/SC3.1.2 eGovMon test for SC3.1.2]
- [http://www.rfc-editor.org/rfc/bcp/bcp47.txt BCP 47: Tags for the Identification of Languages]


## Assumptions
- Tests have shown that `xml:lang` is ignored by screenreaders. (Both Jaws 15 with FF and IE and NVDA with FF go by lang attribute, xml:lang is ignored.) This test identifies pages that use only the  `xml:lang` attribute.


## Test properties
| Property          | Value
|-------------------|----
| Test name         | Language of Parts
| Success Criterion | [[3.1.2 Language of Parts]]
| Test mode         | Automatic
| Test environment  | DOM
| Test subject      | Single web page


## Test procedure

### Selector
Test method: [automatic]
Select the element with `xml:lang` attribute.

`descendent-or-self::body[@xml:lang]`

### Step 1
Test method: [automatic]

Check that the selected element contains also a `lang` attribute.

If no `lang` is specified, return

| Outcome  | Failed
|----------|-----
| Testcase | SC312-xml-lang
| ID       | SC312-xml-lang-fail1
| Error    | No lang attribute found.

### Step 2
Test method: [automatic]

L1 = value of `xml:lang`<br/>
L2 = value of `lang`

Compare L1 and L2.

If the L1 and L2 differ, return

| Outcome  | Failed
|----------|-----
| Testcase | SC312-xml-lang
| ID       | SC312-xml-lang-fail2
| Error    | Contradicting language attributes.
| Info     | L1, L2

Else, return

| Outcome  | Passed
|----------|-----
| Testcase | SC312-xml-lang
| ID       | SC312-xml-lang-pass1

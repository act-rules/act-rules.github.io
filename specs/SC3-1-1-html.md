This test belongs to [[3.1.1 Language of Page]].


## Description
This test checks that the primary language of the web content can be programmatically determined.


## Background
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57  H57: Using language attributes on the html element]
- [http://wiki.egovmon.no/wiki/SC3.1.1#Element_html eGovMon test for H57]
- [http://www.rfc-editor.org/rfc/bcp/bcp47.txt BCP 47: Tags for the Identification of Languages]


## Assumptions
- The comparison of language codes does not look for exact matches. Technique H57 states: "Use of the primary code is important for this technique." which means that region subtags can be ignored in the comparison, i.e. "en-GB" is the same as "en".
- This test checks the `lang` attribute of the `<html>` element. The xml:lang attribute is not taken into account because tests have shown, that xml:lang is ignored by screenreaders. (Both Jaws 15 with FF and IE and NVDA with FF go by lang attribute, xml:lang is ignored.) The `xml:lang` attribute is checked by a separate test: [[SC3-1-1-xml-lang]].


## Test properties
| Property          | Value
|-------------------|----
| Test name         | Primary language of page
| Success Criterion | [[3.1.1 Language of Page]]
| Test mode         | Automatic
| Test environment  | DOM
| Test subject      | single web page


## Test procedure

### Selector
Test method: [automatic]
Select the `html` element.

### Step 1
Test method: [automatic]

If `lang` attribute exists: <br/>
L1 = value of `lang` attribute. <br/>
Continue with [[#Step2]].

else if neither `lang` nor `xml:lang` are specified, return

| Outcome  | Failed
|----------|-----
| Testcase | SC311-html
| ID       | SC311-html-fail1
| Error    | No language attribute found.

else (only `xml:lang` exists) <br/>
*Do nothing. (This case is covered by [[SC3-1-1-xml-lang]].)*

### Step 2
Test method: [automatic]

Compare L1 to BCP 47.

If L1 is not on the list, return

| Outcome  | Failed
|----------|-----
| Testcase | SC311-html
| ID       | SC311-html-fail2
| Error    | Unknown language code.
| Info     | L1

*Note that this step also fails if L1 contains only whitespace or is empty.*

Else, return

| Outcome  | Passed
|----------|-----
| Testcase | SC311-html
| ID       | SC311-text-pass1

---
# [Rule Metadata](../pages/metadata.md)

rule_id: SC3-1-1-text
name: HTML lang matches text
test_mode: semi-automatic

criteria:
- 3.1.1 # Language of Page (Level A)

authors:
- Annika Nietzio
---

## Description

This test checks that the primary language of the content is specified correctly by the language attribute of the `html` element.

## Background

- [ H57: Using language attributes on the html element](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57)
- [eGovMon test for H57](http://wiki.egovmon.no/wiki/SC3.1.1)
- [BCP 47: Tags for the Identification of Languages](http://www.rfc-editor.org/rfc/bcp/bcp47.txt)
- [IANA language subtag registry](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)

## Assumptions

- The comparison of language-code does not look for exact matches. Technique H57 states: "Use of the primary code is important for this technique." which means that region subtags can be ignored in the comparison, i.e. "en-GB" is the same as "en".
- This test assumes that the language of the web page has been specified in the `lang` attribute of the `html` element (see also [SC3-1-1-html](SC3-1-1-html.md)). The `xml:lang` attribute is not taken into account because tests have shown, that `xml:lang` is ignored by screenreaders.
- There are different possible definitions of "primary language" of a web page:
  1. language of the majority of content
  2. language of interface
  3. language of the intended audience

This test does not prescribe which of these definitions to use as long as one of them is used.

*Note that all language changes must be marked correctly independent of the chosen definition. This is covered by 3.1.2 Language of Parts.*

## Test properties

| Property          | Value
|-------------------|----
| Success Criterion | 3.1.1 Language of Page
| Test mode         | SemiAuto
| Test environment  | DOM
| Test subject      | Single web page

## Test procedure

### Selector

Test mode: [automatic][AUTO]

L1 = value of `lang` attribute.

### Step 1

Test mode: [automatic][AUTO]

Select a continuous run of text from one or more consecutive `p` elements. If no `p` elements exist, select any text from the body of the web page. The text should be at least 300 characters in length and not contain any language changes, i.e. `lang` attributes on the element or its parent. If no such text is found, continue with [Step 2](#-step 2).

Use a [language identification algorithm][LNGFND] to check if L1 is the language of the selected text.

If yes, return

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-text-pass1

Else continue with [Step 2](#step-2).

### Step 2

Test mode: [manual][MANUAL]

Present the page to the user.

Question: Is L1 the primary language of this page?

*Note that language code L1 should be presented in human readable form, e.g. using the description from the [language subtag registry](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).*

Help text: "Primary language" means the language of the majority of the text on the page or the language of the interface (navigation menu etc.) of the page.

If yes, return

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-pass2

Else return

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-fail1
| Error    | The primary language of the page is not specified correctly.
| Info     | L1

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
[LNGFND]: ../pages/algorithms/lang-identification.html
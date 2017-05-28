---
rule_id: SC3-1-1-text
name: HTML lang matches text
test_mode: semi-automatic
environment: DOM Structure

success_criterion:
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
- This test assumes that the language of the web page has been specified in the `lang` attribute of the `html` element (see also [SC3-1-1-html](SC3-1-1-html.html)). The `xml:lang` attribute is not taken into account because tests have shown, that `xml:lang` is ignored by screenreaders.
- There are different possible definitions of "primary language" of a web page:
  1. language of the majority of content
  2. language of interface
  3. language of the intended audience

This test does not prescribe which of these definitions to use as long as one of them is used.

*Note that all language changes must be marked correctly independent of the chosen definition. This is covered by 3.1.2 Language of Parts.*

## Test procedure

### Selector

Select all elements that matches the following CSS selector:

    *[lang]

Use the value of the lang attribute as L1

### Step 1

Select a continuous run of text from one or more consecutive `p` elements. If no `p` elements exist, select any text from the body of the web page. The text should be at least 300 characters in length and not contain any language changes, i.e. `lang` attributes on the element or its parent. If no such text is found, continue with [Step 2](#-step 2).

Use a [language identification algorithm][LNGFND] to check if L1 is the language of the selected text.

If yes, return [step1-pass](#step1-pass)

Else continue with [Step 2](#step-2).

### Step 2

Present the page to the user.

Question: Is L1 the primary language of this page?

*Note that language code L1 should be presented in human readable form, e.g. using the description from the [language subtag registry](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).*

Help text: "Primary language" means the language of the majority of the text on the page or the language of the interface (navigation menu etc.) of the page.

If yes, return [step2-pass](#step2-pass)

Else return [step2-fail](#step2-fail)

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:{{ page.rule_id }}
| subject  | *the selected element*
| mode     | auto-wcag:{{ page.test_mode }}
| result   | <One TestResult from below>

### step1-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step2-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step2-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | The primary language of the page is not specified correctly.

[LNGFND]: ../pages/algorithms/lang-identification.html
---
rule_id: SC3-1-2-text
name: Lang attribute matches text
test_mode: semi-automatic
environment: DOM Structure

success_criterion:
- 3.1.2 # Language of Parts (Level AA)

authors:
- Annika Nietzio
---

## Description

This test checks that changes in human language are marked up correctly in the web content.

## Background

- [H58: Using language attributes to identify changes in the human language](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H58)
- [eGovMon test for SC3.1.2](http://wiki.egovmon.no/wiki/SC3.1.2#Element_self::text.28.29)
- [BCP 47: Tags for the Identification of Languages](http://www.rfc-editor.org/rfc/bcp/bcp47.txt)
- [HTML 4.01 Inheritance of language codes](http://www.w3.org/TR/1999/REC-html401-19991224/struct/dirlang.html#h-8.1.2)

## Assumptions

- The comparison of language-code does not look for exact matches. Technique H57 states: "Use of the primary code is important for this technique." which means that region subtags can be ignored in the comparison, i.e. "en-GB" is the same as "en".
- This test applies only to visible text, i.e. the text of `alt` or `title`-attributes is not checked. `alt` attributes are covered by 1.1.1 Non-text Content.
- Single words in another language do not have to be marked as language changes.
- This test assumes that the language of the web content has been specified in the `lang` attribute of the element (see also [SC3-1-2-lang](SC3-1-2-lang.html)). The `xml:lang` attribute is not taken into account because tests have shown, that `xml:lang` is ignored by screenreaders.

## Test procedure

### Selector

Select consecutive run of text to which a single language attribute applies.

L1 = language of the selected text as determined by [HTML 4.01 Inheritance of language codes](http://www.w3.org/TR/1999/REC-html401-19991224/struct/dirlang.html#h-8.1.2).

*Note*: This test is applied to natural language text. The test is not applicable to content of `script` elements, attribute values, and text contained in HTML comments.

### Step 1

Use a [language identification algorithm][LANGFND] to determine L2 = the language actually used in the selected text.

If L2 can not be determined by the algorithm.

Continue with [Step 2](#step-2).

If L2 is equal to L1, return [step1-pass](#step1-pass)

Else return [step1-fail](#step1-fail)

### Step 2

Present the selected text to the user.

Question: Is L1 the *only* language used in this text?

*Note that language codes should be presented in human readable form, e.g. using the description from the [language subtag registry](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).*

Help text: If the text contains a phrase or sentence in another language, please answer "no". If there are only single words in another language and the rest of the text is in L1, please answer "yes".

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

### step1-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | The language of the text is not specified correctly.

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
| description | The language of the text is not specified correctly.

[LNGFND]: ../pages/algorithms/lang-identification.html
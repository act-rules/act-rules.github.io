# SC3-1-2-text

## Description
This test checks that changes in human language are marked up correctly in the web content.


## Background
- [H58: Using language attributes to identify changes in the human language](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H58)
- [eGovMon test for SC3.1.2](http://wiki.egovmon.no/wiki/SC3.1.2#Element_self::text.28.29)
- [BCP 47: Tags for the Identification of Languages](http://www.rfc-editor.org/rfc/bcp/bcp47.txt)
- [HTML 4.01 Inheritance of language codes](http://www.w3.org/TR/1999/REC-html401-19991224/struct/dirlang.html#h-8.1.2)


## Assumptions
- The comparison of language-code does not look for exact matches. Technique H57 states: "Use of the primary code is important for this technique." which means that region subtags can be ignored in the comparison, i.e. "en-GB" is the same as "en".
- This test applies only to visible text, i.e. the text of `alt` or `title`-attributes is not checked. `alt`-attributes are covered by [[1.1.1 Non-text Content]].
- Single words in another language do not have to be marked as language changes.
- This test assumes that the language of the web content has been specified in the `lang` attribute of the element (see also [[SC3-1-2-lang]]). The `xml:lang` attribute is not taken into account because tests have shown, that `xml:lang` is ignored by screenreaders.


## Test properties
| Property          | Value
|-------------------|----
| Success Criterion | [[3.1.2 Language of Parts]]
| Test mode         | SemiAuto
| Test environment  | DOM
| Test subject      | Single web page


## Test procedure

### Selector
Test method: [automatic][earl:automatic]

Select consecutive run of text to which a single language attribute applies.<br/>
L1 = language of the selected text as determined by [HTML 4.01 Inheritance of language codes](http://www.w3.org/TR/1999/REC-html401-19991224/struct/dirlang.html#h-8.1.2).

*Note: This test is applied to natural language text. The test is not applicable to content of `<script>`-elements, attribute values, and text contained in HTML comments.*

### Step 1
Test method: [automatic][earl:automatic]

Use a [[language identification algorithm]] to determine L2 = the language actually used in the selected text.

If L2 can not be determined by the algorithm.<br/>
Continue with [[#Step 2|Step 2]].

If L2 is equal to L1, return

| Outcome  | Passed
|----------|-----
| Testcase | SC312-text
| ID       | SC312-text-pass1

Else return

| Outcome  | Failed
|----------|-----
| Testcase | SC312-text
| ID       | SC312-text-fail1
| Error    | The language of the text is not specified correctly.
| Info     | L1, L2

### Step 2
Test method: [automatic][earl:manual]

Present the selected text to the user.<br/>
Question: Is L1 the *only* language used in this text?

*Note that language codes should be presented in human readable form, e.g. using the description from the [language subtag registry](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).*

Help text: If the text contains a phrase or sentence in another language, please answer "no". If there are only single words in another language and the rest of the text is in L1, please answer "yes".

If yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC312-text
| ID       | SC312-text-pass2

Else return

| Outcome  | Failed
|----------|-----
| Testcase | SC312-text
| ID       | SC312-text-fail2
| Error    | The language of the text is not specified correctly.
| Info     | L1, L2



[earl:automatic]: ../earl/automatic.md
[earl:semiauto]: ../earl/semiauto.md
[earl:manual]: ../earl/manual.md
---
title: Label in Name Algorithm
key: label-in-name-algorithm
unambiguous: true
objective: false
input_aspects:
  - CSS styling
  - DOM tree
---

To check whether an [element][] has <dfn>its label contained in its name</dfn>, follow this algorithm:

Let 'label' be the [visible inner text][] of the target element.  Let 'name' be the [accessible name][] of the target element.  Both 'label' and 'name' are strings.

Sub-algorithm to tokenize a string:

- Do Unicode [case folding][] on the string then convert it to [normalization form KD][].
- For each character that either a) represents non-text content, or b) isn't a letter or a digit: replace that character with a space character.
    - For a) Judgment of "non-text" probably can't be fully automated.  For example: "X" for "close" probably can be automated, but presumably there are more cases than this.
    - For b) Use the Unicode classes Letter, Mark, and "Number, Decimal Digit [Nd]". (This will exclude hyphens, punctuation, emoji, and more.)
- Remove all characters that are within parentheses (AKA round brackets).
    - Ignore square brackets and braces.
- Split the string into a list of strings, one string per word, according to the word segmentation rules for the inherited programmatic language.
    - This 'split' operation must:
        - Effectively remove leading and trailing [whitespace][].
        - If the input string contains nothing but [whitespace][] before this operation: return an empty list.
    - In English and most other European languages, a greedy [whitespace][] regular expression will accomplish this.  In languages such as Thai, Chinese, and Japanese, it won't.
    - A consequence of using the ACT definition of [whitespace][] here is that all kinds of whitespace are covered.  That includes the Unicode code point U+00A0 - the "No-Break Space" - which can be represented by the HTML named character reference `&nbsp;`.

Then do the check: is the tokenized 'label' a sublist of the tokenized 'name'?
- This 'sublist' check has these properties:
    - It checks whether elements are consecutive or not.  That is: it checks for a substring, in the computer science sense of the term.  Not a subsequence.
    - An empty list is a sublist of any list.

If the answer is "yes" (that is: the tokenized 'label' is a sublist of the tokenized 'name'), then this algorithm returns "is contained".  Otherwise, it returns "is not contained".

[accessible name]: #accessible-name 'Definition of accessible name'
[case folding]: https://www.w3.org/TR/charmod-norm/#dfn-case-folding
[element]: https://dom.spec.whatwg.org/#element
[normalization form KD]: https://www.unicode.org/glossary/#normalization_form_kd
[visible inner text]: #visible-inner-text 'Definition of Visible inner text'
[whitespace][]: #whitespace 'Definition of whitespace'

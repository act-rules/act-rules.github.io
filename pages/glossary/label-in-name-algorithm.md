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

Let `label` be the [visible inner text][] of the target element.  Let `name` be the [accessible name][] of the target element.  Both `label` and `name` are strings.

Sub-algorithm to tokenize a string:

1. Remove parentheses (U+0028 LEFT PARENTHESIS and U+0029 RIGHT PARENTHESIS, known colloquially as round brackets) and all characters that are between a left and right parenthesis.
    - Don't do this for other kind of brackets such as square brackets and curly brackets.
1. Do Unicode [case folding][] on the string then convert it to [normalization form KD][].
1. For each character that either a) represents non-text content, or b) isn't a letter or a digit: replace that character with a space character.
    - For a) Judgment of "non-text" probably can't be fully automated.  For example: "X" for "close" probably can be automated, but presumably there are more cases than this.
    - For b) Use the [Unicode general categories "L" (Letter) and "N" (Number)][https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-4/#G134153].  (This will exclude hyphens, punctuation, emoji, and more.)
1. Split the string into a list of strings, one string per word, according to the word segmentation rules for the [language of the element][https://html.spec.whatwg.org/multipage/dom.html#language].
    - This 'split' operation must:
        - Effectively remove leading and trailing [whitespace][].
        - If the input string contains nothing but [whitespace][] before this operation: return an empty list.
    - In English and most other European languages, a greedy [whitespace][] regular expression will accomplish this. In languages such as Thai, Chinese, and Japanese, it won't.
    - A consequence of using the ACT definition of [whitespace][] here is that all kinds of whitespace are covered. That includes the Unicode code point U+00A0 NO-BREAK SPACE (NBSP), which can be represented by the HTML named character reference `&nbsp;`.

Then do the check: is the tokenized `label` a contiguous subsequence of the tokenized `name`?
- This "<dfn id="label-in-name-algorithm:contiguous-subsequence">contiguous subsequence</dfn>" check has these properties:
    - Each string comparison (between a list element in the tokenized label and a list element in the tokenized name) is a simple string equality check.
    - The "contiguous" aspect means that it's crucial that the elements are consecutive in the original list. Put another way: a contiguous subsequence of X can be obtained by removing any number of tokens from the start and/or end (but not the middle) of X. For example: ["A", "B", "C"] is a contiguous subsequence of ["A", "B", "C", "D"]; but ["A", "B", "D"] is not.
    - An empty list is a contiguous subsequence of any list.

If the answer is "yes" (that is: the tokenized 'label' is a contiguous subsequence of the tokenized 'name'), then this algorithm returns "is contained".  Otherwise, it returns "is not contained".

[accessible name]: #accessible-name 'Definition of accessible name'
[case folding]: https://www.w3.org/TR/charmod-norm/#dfn-case-folding
[element]: https://dom.spec.whatwg.org/#element
[normalization form KD]: https://www.unicode.org/glossary/#normalization_form_kd
[visible inner text]: #visible-inner-text 'Definition of Visible inner text'
[whitespace]: #whitespace 'Definition of whitespace'

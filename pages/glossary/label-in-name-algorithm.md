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

- Convert the string to lower case.
- For each character that either a) represents non-text content, or b) isn't a letter or a digit: replace that character with a space character.
    - For a) Judgement of "non-text" probably can't be fully automated. eg. "X" for "close" probably can be, but presumably there are more cases than this.
    - For b) Use the unicode classes Letter, Mark, and "Number, Decimal Digit [Nd]". (This will exclude hyphens, punctuation, emoji, and more.)
- Remove all characters that are within parentheses (AKA round brackets).
    - Ignore square brackets and braces.
- Split the string into a list of strings, using a whitespace regular expression as the separator.
    - This 'split' operation must:
        - Effectively remove leading and trailing whitespace as a pre-processing step.
        - If the string was all whitespace before this operation: result in an empty list.

Then do the check: is the tokenized 'label' a sublist of the tokenized 'name'?
- This 'sublist' check has these properties:
    - It checks whether elements are consecutive or not. i.e. it checks for a substring, in the computer science sense of the term. Not a subsequence.
    - An empty list is a sublist of any list.

If the answer is "yes" (that is: the tokenized 'label' is a sublist of the tokenized 'name'), then this algorithm returns "is contained".  Otherwise, it returns "is not contained".

[accessible name]: #accessible-name 'Definition of accessible name'
[visible inner text]: #visible-inner-text 'Definition of Visible inner text'
[element]: https://dom.spec.whatwg.org/#element
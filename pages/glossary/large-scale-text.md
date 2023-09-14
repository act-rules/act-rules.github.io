---
title: Large Scale Text
key: large-scale-text
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

Text nodes with a [computed](https://www.w3.org/TR/css-cascade-3/#computed-value) [font-size](https://www.w3.org/TR/css-fonts-3/#propdef-font-size) of:

- at least 18 [points](https://www.w3.org/TR/css-values/#pt), or
- at least 14 [points](https://www.w3.org/TR/css-values/#pt) and a [computed](https://www.w3.org/TR/css-cascade-3/#computed-value) [font weight](https://www.w3.org/TR/css-fonts-3/#font-weight-prop) CSS property of 700 or higher.

For CJK (Chinese, Japanese and Korean) fonts, text nodes with a [computed](https://www.w3.org/TR/css-cascade-3/#computed-value) [font-size](https://www.w3.org/TR/css-fonts-3/#propdef-font-size) of: 
- at least 22 [points](https://www.w3.org/TR/css-values/#pt), or
- at least 18 [points](https://www.w3.org/TR/css-values/#pt) and a [computed](https://www.w3.org/TR/css-cascade-3/#computed-value) [font weight](https://www.w3.org/TR/css-fonts-3/#font-weight-prop) CSS property of 700 or higher,

Note:
The WCAG definition of [large scale text](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html#dfn-large-scale) does not clearly indeicate which is the the equivalent [font-size](https://www.w3.org/TR/css-fonts-3/#propdef-font-size) for CJK languages; in fact it states:
"with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts"

There is an additional note that states: 
The 18 and 14 point sizes for roman texts are taken from the minimum size for large print (14pt) and the larger standard font size (18pt). For other fonts such as CJK languages, the "equivalent" sizes would be the minimum large print size used for those languages and the next larger standard large print size.

Since there is no official definition of "equivalent" sizes for CJK in WCAG, we rely on the metrics provided by the TRANSLATION NOTE present in the [Japanese translation of the WCAG 2.1](https://waic.jp/translations/WCAG21/#dfn-large-scale), which states:

TRANSLATION NOTE
In the case of Japanese full-width characters, 22 point or 18 point bold type is considered to be the "equivalent" size, based on the First Report of the Enlarged Textbook Promotion Council, "Chapter 2 Standards for Enlarged Textbooks." is reasonable.

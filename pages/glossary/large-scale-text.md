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

For CJK (Chinese, Japanese and Korean) characters with a [computed](https://www.w3.org/TR/css-cascade-3/#computed-value) [font-size](https://www.w3.org/TR/css-fonts-3/#propdef-font-size) of: 
- at least 22 [points](https://www.w3.org/TR/css-values/#pt), or
- at least 18 [points](https://www.w3.org/TR/css-values/#pt) and a [computed](https://www.w3.org/TR/css-cascade-3/#computed-value) [font weight](https://www.w3.org/TR/css-fonts-3/#font-weight-prop) CSS property of 700 or higher.

**Notes:**  
The WCAG definition of [large scale text](https://www.w3.org/TR/WCAG21/#dfn-large-scale) lacks clarity regarding the equivalent [font-size](https://www.w3.org/TR/css-fonts-3/#propdef-font-size) for CJK characters. According to WCAG:  
>[large scale (text)](https://www.w3.org/TR/WCAG21/#dfn-large-scale): with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts

Since there is no official WCAG definition of **equivalent size** for CJK characters, we rely on the guidelines provided in the [Japanese translation of the WCAG 2.1](https://waic.jp/translations/WCAG21/#dfn-large-scale). This document offers the following insight (translated from Japanese to English to allow everyone understanding the specs):  

>TRANSLATION NOTE  
>In the case of Japanese full-width characters, 22 point or 18 point bold type is considered to be the "equivalent" size, based on the First Report of the Enlarged Textbook Promotion Council, "Chapter 2 Standards for Enlarged Textbooks." is reasonable."

Assuming all CJK characters pose similar contrast challanges, we've extended the Japanese equivalent size definition to the whole CJK characters set defined in the [Unicode standard](https://unicode.org/charts/PDF/U4E00.pdf) within the range of 4E00–9FFF.

---
title: Large Scale Text
key: large-scale-text
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

A text node is large scale text if at least one of the following is true:

- the text node [computed][] [font-size][] is at least 18 [points](https://www.w3.org/TR/css-values/#pt), or
- the text node [computed][] [font-size][] is at least 14 [points](https://www.w3.org/TR/css-values/#pt) and has a [computed](https://www.w3.org/TR/css-cascade-3/#computed-value) [font weight][] of 700 or higher.


**Exception**:  
A text node containing Unicode characters in the 4E00–9FFF range ([CJK Unified Ideographs](https://unicode.org/charts/PDF/U4E00.pdf)) is <dfn id="large-scale-text:cjk">large scale text</dfn> if at least one of the following is true:

- the text node [computed][] [font-size][] is at least 22 [points][], or
- the text node [computed][] [font-size][] is at least 18 [points][] and has a [computed][] [font weight][] of 700 or higher.

**Notes:**  
The WCAG definition of [large scale text](https://www.w3.org/TR/WCAG21/#dfn-large-scale) includes an exception for CJK (Chinese, Japanese, and Korean) fonts. The Unicode range 4E00–9FFF includes these characters. The "equivalent size" numbers are not included in WCAG, and come from the [Unofficial Japanese Translation of WCAG 2.1](https://waic.jp/translations/WCAG21/#dfn-large-scale).  This translation offers the following insight (translated from Japanese to English to allow everyone understanding the specs):  

> TRANSLATION NOTE  
> In the case of Japanese full-width characters, 22 point or 18 point bold type is considered to be the "equivalent" size, based on the First Report of the Enlarged Textbook Promotion Council, "Chapter 2 Standards for Enlarged Textbooks." is reasonable.

Assuming all CJK characters pose similar contrast challenges, this definition extends the Japanese requirement to the whole CJK characters set included in the [Unicode standard](https://unicode.org/charts/PDF/U4E00.pdf) within the range of 4E00–9FFF.

[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[font-size]: https://www.w3.org/TR/css-fonts-3/#propdef-font-size
[points]: https://www.w3.org/TR/css-values/#pt
[font weight]: https://www.w3.org/TR/css-fonts-3/#font-weight-prop

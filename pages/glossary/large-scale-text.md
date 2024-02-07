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


**Notes:**  
In the domain of languages such as Chinese, Japanese, and Korean (CJK languages), encompassing the Unicode character range from 4E00 to 9FFF ([CJK Unified Ideographs](https://unicode.org/charts/PDF/U4E00.pdf)), it becomes crucial to acknowledge the intricate nuances in their typographic requirements. Despite sharing a common Unicode spectrum, each CJK language and its corresponding country may exhibit distinct typographic preferences and standards.

Particularly noteworthy is the lack of uniformity in defining text sizes as either large or small within the following ranges:
- from 18 [points](https://www.w3.org/TR/css-values/#pt) to 22 [points](https://www.w3.org/TR/css-values/#pt)
- from 14 [points](https://www.w3.org/TR/css-values/#pt) to 18 [points](https://www.w3.org/TR/css-values/#pt) with a [computed](https://www.w3.org/TR/css-cascade-3/#computed-value) [font weight][] of 700 or higher.

Given the diversity in these specifications, the ACT rules adhere to the large text definition outlined above. This definition is applicable across all languages under the rationale of "no false positives."


[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[font-size]: https://www.w3.org/TR/css-fonts-3/#propdef-font-size
[points]: https://www.w3.org/TR/css-values/#pt
[font weight]: https://www.w3.org/TR/css-fonts-3/#font-weight-prop

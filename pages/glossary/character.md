---
title: Character
key: character
---

[WIP]

A character is a single [Unicode](http://unicode.org/) [scalar value](http://unicode.org/glossary/#unicode_scalar_value).

In plain language a character is normally understood to be a [grapheme](https://en.wikipedia.org/wiki/Grapheme), that is a single, distinct symbol used in writing. 
However, this does not map well to computers.

....

A character is not to be confused with a [grapheme](https://en.wikipedia.org/wiki/Grapheme), that is a single, distinct symbol used in writing, or a [glyph](https://en.wikipedia.org/wiki/Glyph), which is a written representation of a grapheme.

A character is a [code point](http://unicode.org/glossary/#code_point), specifically an integer, that a computer uses for representing a value within the Unicode system. 

As such, multiple characters may represent the same glyph and multiple glyphs may represent the same grapheme.

## Examples

 As an example of the difference between a character, a [glyph](https://en.wikipedia.org/wiki/Glyph), and a [grapheme](https://en.wikipedia.org/wiki/Grapheme), consider the Latin letter "a". `a` corresponds to a character with the [code point](http://unicode.org/glossary/#code_point) U+0061. It is also a glyph that represents the small Latin letter `a`, which is one representation of the grapheme Latin letter "a". However, `A` corresponds to a character with the code point U+0041 and as such is a different character and glyph than `a`.

 While both `A` and `a` represent the same [grapheme](https://en.wikipedia.org/wiki/Grapheme) while being different characters and [glyphs](https://en.wikipedia.org/wiki/Glyph), it is also possible for a glyph to be representated by different characters. For example, [Unicode](http://unicode.org/) provides at least two ways of representing an `a` with an accent, such as `á`: Either as the character with the [code point](http://unicode.org/glossary/#code_point) U+00E1 or as a combination of the characters `a` (U+0041) and `´` (U+0301).

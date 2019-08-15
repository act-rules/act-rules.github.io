---
title: Character
key: character
---

WORK IN PROGRESS

glyph

[Unicode][unicode] is a standard for representing text. For every [character][] used in text, [Unicode][] provides a unique [code point][], which is a number, for representing this [character][], but leaves the visual rendering of each [character][] to other software.

A <dfn id="character">character</dfn> is a [Unicode][] [scalar value][], that is a [code point][] which is not a [surrogate][]. [Surrogates][surrogate] are special [code points][code point] that are used in pair to represent a single [code point][]. As such, [surrogates][surrogate] on their own are not considered [characters][character], but the [code point][] represented by a pair of [surrogates][surrogate] is.

http://www.unicode.org/reports/tr10/#Canonical_Equivalence

A <dfn id="character">character</dfn> is a single [Unicode][] [scalar value][]. Unlike a [grapheme][], which is a single, distinct symbol used in writing, and a [glyph][], which is a written representation of a [grapheme][], a [character][] is a [code point][], specifically an integer, that a computer uses for representing a value within the [Unicode][] system. As such, multiple [characters][character] may represent the same [glyph][] and multiple [glyphs][glyph] may represent the same [grapheme][].

 ## Examples

 As an example of the difference between a [character][], a [glyph][], and a [grapheme][], consider the Latin letter "a". `a` corresponds to a [character][] with the [code point][] U+0061. It is also a [glyph][] that represents the small Latin letter `a`, which is one representation of the [grapheme][] Latin letter "a". However, `A` corresponds to a [character][] with the [code point][] U+0041 and as such is a different [character][] and [glyph][] than `a`.

 While both `A` and `a` represent the same [grapheme][] while being different [characters][character] and [glyphs][glyph], it is also possible for a [glyph][] to be representated by different [characters][character]. For example, [Unicode][] provides at least two ways of representing an `a` with an accent, such as `á`: Either as the [character][] with the [code point][] U+00E1 or as a combination of the [characters][character] `a` (U+0041) and `´` (U+0301).
 
[scalar value]: http://unicode.org/glossary/#unicode_scalar_value
[Unicode]: http://unicode.org/
[glyph]: https://en.wikipedia.org/wiki/Glyph
[grapheme]: https://en.wikipedia.org/wiki/Grapheme
[code point]: http://unicode.org/glossary/#code_point
[character]: #character

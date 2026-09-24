---
title: Most Common Language of an Element
key: most-common-element-language
unambiguous: true
objective: true
input_aspects:
  - DOM tree
  - Accessibility tree
  - CSS Styling
  - Language
---

The _most common language of an element_ is determined by counting the number of _words_ in the [text inheriting its programmatic language][] from this element that are part of any of the languages in the [language subtag registry][]. The same word can be part of multiple languages. In case of a tie, the first of the tied languages used in the text is the most common language. If there are no words in the [text inheriting its programmatic language][] from the element or the tie cannot be resolved, then it has no most common language.

For more details, see [examples of most common language][].

[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry 'Language Subtag Registry'
[text inheriting its programmatic language]: #text-inheriting-language 'Definition of Text Inheriting its Programmatic Language from an Element'
[examples of most common language]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/element-language/examples/

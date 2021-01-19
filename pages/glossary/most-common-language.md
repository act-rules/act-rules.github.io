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

The _most common language of an element_ is determined by counting the number of _words_ in the [text with the same programmatic language][] as this element that are part of any of the languages in the [language subtag registry][]. The same word can be part of multiple languages. In case of ties, the element has several most common languages. If there are no words in the [text with the same programmatic language][] as the element, then it has no most common language.

For more details, see [examples of most common language](/pages/examples/element-language/).

[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry 'Language Subtag Registry'
[text with the same programmatic language]: #text-same-language 'Definition of Text With the Same Programmatic Language'

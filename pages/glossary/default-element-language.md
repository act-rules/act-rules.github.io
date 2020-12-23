---
title: Element Language
key: element-language
unambiguous: true
objective: true
input_aspects:
  - DOM tree
  - Accessibility tree
  - CSS Styling
  - Language
---

The _default language of an element_ is the _most common language_ used in the [text with the same programmatic language][] as this element. If there are no _words_ in this text, the default language is undefined.

The _most common language_ is determined by counting the number of _words_ in the text that are part of any of the languages in the [language subtag registry][]. The same word can be part of multiple languages. If the number of words is the same, the default language is undefined.

When the element is a [document][], its default language is also called the _default page language_.

An element has a _common language_ if all _words_ in the [text with the same programmatic language][] of the element are part of the same language from the [language subtag registry][], except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. Words can be part of other languages as long as they are also part of the unique language. In the rare case where all words are part of several languages, an element may have several _common languages_.

For more details, see [examples of default language](/pages/examples/default-element-language/).

[document]: https://dom.spec.whatwg.org/#document-element 'DOM document element, as of 2020/06/05'
[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry 'Language Subtag Registry'
[text with the same programmatic language]: #text-same-language 'Definition of Text With the Same Programmatic Language'

---
title: Default Element Language
key: default-element-language
unambiguous: true
objective: true
input_aspects:
  - DOM tree
  - Accessibility tree
  - CSS Styling
  - Language
---

The _default language of an element_ E is the _most common language_ used in the texts of its _candidate elements_. If there are no _words_ in the candidate elements, the default language is undefined.

The _most common language_ is determined by counting the number of _words_ in the candidate elements that are part of any of the languages in the [language subtag registry][]. The same word can be part of multiple languages. If the number of words is the same, the default language is undefined.

The _candidates elements_ are all the elements for which all the following are true:

- the element is an [inclusive descendant][] of E in the [flat tree][]; and
- the element has no [inclusive ancestor][] in the [flat tree][] which is a descendant of E and has a non-empty (`""`) `lang` attribute (that is, no `lang` attribute "between" them).

The _words_ used in the following texts should be counted for the _most common language_:

- **text nodes**: the value of any [text nodes][] that are [visible][] or [included in the accessibility tree][] and children of a candidate element;
- **accessible text**: the [accessible name][] and [accessible description][] of any candidate element [included in the accessibility tree][];
- **page title**: the value of the [document title][], only if E is a [document][] in a [top-level browsing context][].

When the element E is a [document][], its default language is also called the _default page language_.

For more details, see [examples of default language](/pages/examples/default-element-language/).

[accessible description]: https://www.w3.org/TR/accname-1.1/#dfn-accessible-description 'Definition of Accessible description'
[accessible name]: #accessible-name 'Definition of Accessible Name'
[document]: https://dom.spec.whatwg.org/#document-element 'DOM document element, as of 2020/06/05'
[document title]: https://html.spec.whatwg.org/multipage/dom.html#document.title 'HTML document title, as of 2020/06/05'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/06/05'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestor]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM definition of Inclusive Ancestor'
[inclusive descendant]: https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant 'DOM definition of Inclusive Descendant'
[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, as of 2020/06/05'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'HTML top-level browsing context, as of 2020/06/05'
[visible]: #visible 'Definition of Visible'

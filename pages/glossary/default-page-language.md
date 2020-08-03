---
title: Default Page Language
key: default-page-language
unambiguous: true
objective: true
input_aspects:
  - DOM tree
  - Accessibility tree
  - CSS Styling
  - Language
---

The default page language is the _most common language_ used in a [web page][]. If there are no _words_ in the page, the default language is undefined.

The _most common language_ is determined by counting the number of _words_ in the [web page][] that are part of any of the languages in the [language subtag registry][]. The same word can be part of multiple languages. If the number of words is the same, the default language is undefined.

The _words_ used in the following texts should be counted for the _most common language_:

- **page title**: The value of the [document title][] of the [document][] in the [top-level browsing context][].
- **text nodes**: The value of any [text nodes][] that are [visible][] or [included in the accessibility tree][]
- **accessible text**: The [accessible name][] and [accessible description][] of any element included in the [accessibility tree][]

**Exception**: Do not count words in text that comes from nodes that have an [ancestor][] in the [flat tree][] which has a non-empty (`""`) `lang` attribute and is not the [root node][]. For accessible texts, only ancestors of the node with the accessible name is considered, the ancestry of nodes used in producing the accessible text are ignored, such as those referenced with aria-labelledby.

[web page]: #web-page-html
[included in the accessibility tree]: #included-in-the-accessibility-tree
[accessible name]: #accessible-name
[accessible description]: https://www.w3.org/TR/accname-1.1/#dfn-accessible-description 'Definition of Accessible description'
[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[document title]: https://html.spec.whatwg.org/multipage/dom.html#document.title 'HTML document title, as of 2020/06/05'
[document]: https://dom.spec.whatwg.org/#document-element 'DOM document element, as of 2020/06/05'
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, as of 2020/06/05'
[elements]: https://dom.spec.whatwg.org/#element 'DOM element, as of 2020/06/05'
[node]: https://dom.spec.whatwg.org/#node 'DOM node, as of 2020/06/05'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM ancestor, as of 2020/06/05'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'HTML top-level browsing context, as of 2020/06/05'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/06/05'
[root node]: https://dom.spec.whatwg.org/#concept-tree-root 'DOM tree root, as of 2020/06/05'

---
title: Text with the same Programmatic Language
key: text-same-language
unambiguous: true
objective: true
input_aspects:
  - DOM tree
  - Accessibility tree
  - CSS Styling
---

The _text with the same programmatic language_ as an element E is composed of all the following texts:

- **text nodes**: the value of any [text nodes][] that are [visible][] or [included in the accessibility tree][] and children of an element with the same programmatic language as E;
- **accessible text**: the [accessible name][] and [accessible description][] of any element with the same programmatic language as E, and [included in the accessibility tree][];
- **page title**: the value of the [document title][], only if E is a [document][] in a [top-level browsing context][].

The _elements with the same programmatic language_ as an element E are all the elements for which all the following are true:

- the element is an [inclusive descendant][] of E in the [flat tree][]; and
- the element has no [inclusive ancestor][] in the [flat tree][] which is a descendant of E and has a non-empty (`""`) `lang` attribute (that is, no `lang` attribute "between" them).

[accessible description]: https://www.w3.org/TR/accname-1.1/#dfn-accessible-description 'Definition of Accessible description'
[accessible name]: #accessible-name 'Definition of Accessible Name'
[document]: https://dom.spec.whatwg.org/#document-element 'DOM document element, as of 2020/06/05'
[document title]: https://html.spec.whatwg.org/multipage/dom.html#document.title 'HTML document title, as of 2020/06/05'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/06/05'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestor]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM definition of Inclusive Ancestor'
[inclusive descendant]: https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant 'DOM definition of Inclusive Descendant'
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, as of 2020/06/05'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'HTML top-level browsing context, as of 2020/06/05'
[visible]: #visible 'Definition of Visible'

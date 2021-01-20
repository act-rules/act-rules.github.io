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

An element F has the _same programmatic language_ as an element E if one of the following conditions is true (recursively):

- F is E itself (an element always has the same programmatic language as itself); or
- F does not have a non-empty `lang` attribute, and is the child in the [flat tree][] of an element with the same programmatic language as E; or
- F is a [fully active][] [document][] element, has no non-empty `lang` attribute, and has a [browsing context container][] with the same programmatic language as E.

[accessible description]: https://www.w3.org/TR/accname-1.1/#dfn-accessible-description 'Definition of Accessible description'
[accessible name]: #accessible-name 'Definition of Accessible Name'
[browsing context container]: https://html.spec.whatwg.org/#browsing-context-container 'HTML Definition of Browsing Context Container'
[document]: https://dom.spec.whatwg.org/#document-element 'DOM document element, as of 2020/06/05'
[document title]: https://html.spec.whatwg.org/multipage/dom.html#document.title 'HTML document title, as of 2020/06/05'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/06/05'
[fully active]: https://html.spec.whatwg.org/#fully-active 'HTML definition of Fully Active Document'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, as of 2020/06/05'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'HTML top-level browsing context, as of 2020/06/05'
[visible]: #visible 'Definition of Visible'

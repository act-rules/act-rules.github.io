---
title: Content that becomes visible
key: content-that-becomes-visible
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

The _content that becomes visible_ is the [root][] element of the [tree][], if a [tree][] exists, that contains all elements that, after half a second of an [event][] [firing][], meet any of the following:

- the element did not exist on the [web page][] prior to the [event][] [firing][] and has [visible text content][]; or
- the element has [attributes][] whose [values][] changed from what they were before the [event][] [firing][] and the change caused some or all of the element's [text nodes][] to become [visible][].

[attributes]: https://dom.spec.whatwg.org/#concept-attribute 'Definition of attribute'
[event]: https://dom.spec.whatwg.org/#concept-event 'Definition of event'
[firing]: https://dom.spec.whatwg.org/#concept-event-fire 'Definition of event firing'
[root]: https://dom.spec.whatwg.org/#concept-tree-root 'Definition of root'
[text nodes]: https://dom.spec.whatwg.org/#text 'Definition of DOM text'
[tree]: https://dom.spec.whatwg.org/#concept-tree 'Definition of tree'
[values]: https://dom.spec.whatwg.org/#concept-attribute-value 'Definition of attribute value'
[visible]: #visible 'Definition of visible'
[visible text content]: #visible-text-content 'Definition of visible text content'
[web page]: #web-page-html 'Definition of web page'
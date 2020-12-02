---
title: Content that becomes invisible
key: content-that-becomes-invisible
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

The _content that becomes invisible_ is the [root][] element, if one exists, of the [tree][] that contains all elements that, as result of an [event][] [firing][], meet any of the following:

- the element has [visible text content][] and is removed from the [web page][] where the [event][] was [fired][firing]; or
- the element [attributes][]' [values][] are modified in a way that cause some or all of its [text nodes][] to stop being [visible][].

[attributes]: https://dom.spec.whatwg.org/#concept-attribute 'Definition of attribute'
[event]: https://dom.spec.whatwg.org/#concept-event 'Definition of event'
[firing]: https://dom.spec.whatwg.org/#concept-event-fire 'Definition of event firing'
[root]: https://dom.spec.whatwg.org/#concept-tree-root 'Definition of root'
[tree]: https://dom.spec.whatwg.org/#concept-tree 'Definition of tree'
[values]: https://dom.spec.whatwg.org/#concept-attribute-value 'Definition of attribute value'
[web page]: #web-page-html 'Definition of web page'
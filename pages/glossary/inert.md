---
title: Inert
key: inert
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

An [HTML or SVG element][] is inert if:
- it has an `inert` [attribute value][] of true; or
- one of its ancestor elements in the [flat tree][] has an `inert` [attribute value][] of true; or
- it is [blocked by a modal][].

[HTML or SVG element]: #namespaced-element 'Definition of HTML or SVG element'
[attribute value]: #attribute-value 'Definition of Attribute value'
[blocked by a modal]: https://html.spec.whatwg.org/multipage/interaction.html#blocked-by-a-modal-dialog
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'

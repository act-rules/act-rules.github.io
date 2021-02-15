---
title: Non-repeated content after repeated content
key: non-repeated-content
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

A node is _non-repeated content after repeated content_ if all the following are true:

- the node is [perceivable content][]; and
- the node is not part of any [block of repeated content][]; and
- the node is after (in [tree order][] in the [flat tree][]) at least one [block of repeated content][].

[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Definition of Flat Tree'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
[tree order]: https://dom.spec.whatwg.org/#concept-tree-order 'DOM specification of Tree Order'

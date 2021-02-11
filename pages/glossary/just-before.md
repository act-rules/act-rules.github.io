---
title: Just before a node
key: just-before
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

A node N is _just before_ a node of [perceivable content][] P if one of the following is true:

- N and P are the same node; or
- N is not [perceivable content][] and there is no node of [perceivable content][] between N and P (in [tree order][] in the [flat tree][]).

Several nodes may be just before a given node, especially if there are several non-[perceivable content][] nodes next to each other.

[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Definition of Flat Tree'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
[tree order]: https://dom.spec.whatwg.org/#concept-tree-order 'DOM specification of Tree Order'

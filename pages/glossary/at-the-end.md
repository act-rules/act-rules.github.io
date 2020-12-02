---
title: At the end of a block
key: at-the-end
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

A node is _at the end_ of a [block of content][block] if one of the following is true:

- the node is the first [perceivable content][] outside this [block][] and after it; or
- the node is not [perceivable content][], is after the last [perceivable content][] in this [block][] and there is no other [perceivable content][] between the [block][] and the node.

In other words, the node is either the first [perceivable content][] after the [block][], any non-[perceivable content][] after the block but before the next [perceivable content][], or any non-[perceivable content][] inside the [block][] but after the last [perceivable content][] in it.

Several nodes may be at the end of a [block][], especially if there are several non-[perceivable content][] nodes next to each other.

Order ("first", "before", …) in this definition is [tree order][] in the [flat tree][].

[block]: #block-of-content 'Definition of Block of Content'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Definition of Flat Tree'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
[tree order]: https://dom.spec.whatwg.org/#concept-tree-order 'DOM specification of Tree Order'

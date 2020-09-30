---
title: Start and end of the content
key: start-end-content
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

A node is _at the start_ of a [block of content][] if one of the following is true:

- the node is the first [perceivable content][] inside this [block][]; or
- the node is not [perceivable content][], is before the first [perceivable content][] in this [block][] and there is no other [perceivable content][] between the node and the [block][].

In other words, the node is either the first [perceivable content][] inside the [block][], any non-[perceivable content][] before the block but after the previous [perceivable content][], or any non-[perceivable content][] inside the [block][] but before the first [perceivable content][] in it.

A node is _at the end_ of a [block of content][] if one of the following is true:

- the node is the first [perceivable content][] after this [block][]; or
- the node is not [perceivable content][], is after the last [perceivable content][] in this [block][] and there is no other [perceivable content][] between the [block][] and the node.

In other words, the node is either the first [perceivable content][] after the [block][], any non-[perceivable content][] after the block but before the next [perceivable content][], or any non-[perceivable content][] inside the [block][] but after the last [perceivable content][] in it.

Several nodes may be at the start or end of a [block][], especially if there are several non-[perceivable content][] nodes next to each other.

Order ("first", "before", …) in this definition is tree order in the [flat tree][].

[block]: #block-of-content 'Definition of Block of Content'
[block of content]: #block-of-content 'Definition of Block of Content'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[perceivable content]: #perceivable-content 'Definition of perceivable content'

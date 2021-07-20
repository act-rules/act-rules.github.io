---
title: Inheriting Semantic Role
key: inheriting-semantic
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - DOM tree
---

An element with a _inheriting semantic role_ of X is any element which has the [semantic role][] of X or a [semantic role][] that inherits from the X.

As an example, an "inheriting semantic link" is any element that either has the [semantic role][] of [`link`][link] or a [semantic role][] that inherits from the [`link`][link] role, such as [doc-biblioref][].

[semantic role]: #semantic-role 'Definition of Semantic Role'
[link]: https://www.w3.org/TR/wai-aria/#link 'ARIA Definition of the link Role'
[doc-biblioref]: https://www.w3.org/TR/dpub-aria-1.0/#doc-biblioref 'DPUB ARIA Definition of doc-biblioref'

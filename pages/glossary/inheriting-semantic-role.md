---
title: Inheriting Semantic Role
key: inheriting-semantic
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - DOM tree
---

An element with an _inheriting semantic role_ of X is any element with a non-[abstract][] [semantic role][] that inherits from X, or is the same as X.

**Example**: An "inheriting semantic link" is any element that either has the [semantic role][] of [`link`][link] or a [semantic role][] that inherits from the [`link`][link] role, such as [doc-biblioref][].

[abstract]: https://www.w3.org/TR/wai-aria-1.2/#isAbstract 'ARIA Definition for Abstract Roles'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[link]: https://www.w3.org/TR/wai-aria/#link 'ARIA Definition of the link Role'
[doc-biblioref]: https://www.w3.org/TR/dpub-aria-1.0/#doc-biblioref 'DPUB ARIA Definition of doc-biblioref'

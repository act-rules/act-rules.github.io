---
title: Child index
key: child-index
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - DOM tree
---

For each [HTML element][] that is [included in the accessibility tree][] it is the element's position among its sibling elements in the accessibility tree. An element's index cannot be greater than the size of the set to which the element belongs. The size of the set is the count of all children of an element's parent [accessible object][].

The index value starts with `1` and increments by `1` for each of the following child elements within the set. For example, the first child element has index `1`, the second child element has index `2`, and the third child element has index `3` when the count of all children of an element's parent [accessible object][] (the set size) is `3`.

[accessible object]: https://www.w3.org/TR/core-aam-1.1/#dfn-accessible-object
[html element]: https://html.spec.whatwg.org/#htmlelement
[included in the accessibility tree]: #included-in-the-accessibility-tree

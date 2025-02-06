---
title: Owned by
key: owned-by
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
---

An element A is _owned by_ element B if element A is a child of element B in the [accessibility tree][].

Being a child in the [accessibility tree][] is different from being a child in the DOM tree. Some DOM nodes have no corresponding node in the [accessibility tree][] (for example, because they are marked with `role="presentation"`). A child in the [accessibility tree][] can thus correspond to a descendant in the DOM tree. Additionally, the use of `aria-owns` attribute can change the tree structure to something which is not a subtree of the DOM tree.

This definition is different from the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/#dfn-owned-element). Because browsers have different accessibility trees, which element owns which other elements can vary between browsers. Until there is a standard accessibility tree, testing with multiple accessibility trees may be necessary.

[accessibility tree]: https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility 'Definition of accessibility tree'

---
title: Owned by
key: owned-by
---

An element A is owned by element B if element A is a child of element B in the [accessibility tree][].

**Note:** This definition is different from the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element). Because browsers have different accessibility trees, which element owns which other elements can vary between browsers. Until there is a standard accessibility tree, testing with multiple accessibility trees may be necessary.

**Note:** Being a child in the [accessibility tree][] is very different from being a child in the DOM tree. Many DOM nodes have no corresponding node in the [accessibility tree][] (for example, because they are marked with `aria-hidden="true"`). Thus, a child in the [accessibility tree][] can correspond to a distant descendant in the DOM tree. Additionally, the use of `aria-owns` attribute can change the tree structure.

[accessibility tree]: https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility 'Definition of accessibility tree'

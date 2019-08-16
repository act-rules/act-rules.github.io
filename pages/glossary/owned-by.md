---
title: Owned by
key: owned-by
---

An element A is owned by element B if:

1. Both elements exist within the same [document tree](https://www.w3.org/TR/dom41/#document-trees) or [shadow tree](https://www.w3.org/TR/dom41/#shadow-trees), and element A is the first element within the tree, in [tree order](https://www.w3.org/TR/dom/#concept-tree-order), whose ID is included within the `aria-owns` attribute of element B, or
2. Element B is the closest [shadow including ancestor](https://www.w3.org/TR/dom41/#concept-shadow-including-ancestor) of element A that is [included in the accessibility tree](#included-in-the-accessibility-tree).

Nodes that are not included in the accessibility tree cannot be owned by other elements.

> **Note:** When using `aria-owns`, hiding the owner element through WAI-ARIA (`aria-hidden="true"`) or CSS (`display:none` or `visibility:hidden`) will not change the ownership, but should instead hide all elements owned by the element.

> **Note:** This definition is diverging from the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element). The reason is that the WAI-ARIA definition was found to provide too little guidance on how to handle specific edge cases where several elements compete about the ownership, and it seem that browser implementations of this are diverging a lot. This definition seeks to find a reasonable middle ground, but will have to be updated if the WAI-ARIA definition changes.

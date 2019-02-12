---
title: Owner element
key: owner-element
---


If the node is referenced by an element through the `aria-owns` attribute, then the owner element is the first node in the DOM tree that references it through `aria-owns`.

> **Note:** When using `aria-owns`, hiding the owner element through WAI-ARIA (`aria-hidden="true"`) or CSS (`display:none` or `visibility:hidden`) will not change the ownership, but should instead hide all elements owned by the owner element.

Otherwise, the owner element is the closest ancestor that is [included in the accessibility tree](#included-in-the-accessibility-tree).

Nodes that are not included in the accessibility tree do not have an owner element.

 > **Note:** This definition is diverging from the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element). The reason is that the WAI-ARIA definition was found to provide too little guidance on how to handle specific edge cases where several elements compete about the ownership, and it seem that browser implementations of this are diverging a lot. This definition seeks to find a reasonable middle ground, but will have to be updated if the WAI-ARIA definition changes.

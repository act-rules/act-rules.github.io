---
title: Owner element
key: owner-element
---


If the node is referenced by an element through the `aria-owns` attribute, then the owner element is the first node in the DOM tree that references it through `aria-owns`.
Otherwise, the owner element is the closest ancestor that is a node [included in the accessibility tree](#included-in-the-accessibility-tree).

Nodes that are not in the accessibility tree do not have an owner element.

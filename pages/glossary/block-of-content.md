---
title: Block of content
key: block-of-content
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

A _block of content_ in an [HTML web page][] is a set of nodes from that page for which of the following are true:

- (**content**) there is at least one [perceivable content][] in the block; and
- (**continuity**) if two nodes are in the block, then any node between them (in tree order) is also in the block; and
- (**downward closure**) if a node is in the block, then all its descendants are also in the block; and
- (**parent closure**) if all children of a node are in the block, then this node is also in the block.

**Note:** When the rendering order of nodes on a page greatly differs from the DOM tree order, blocks of content as defined here may be different from what is visually perceived as "content in a close relationship".

[html web page]: #web-page-html 'Definition of Web Page'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
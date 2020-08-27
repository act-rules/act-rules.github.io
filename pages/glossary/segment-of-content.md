---
title: Segment of content
key: segment-of-content
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

A _segment of content_ in an [HTML web page][] is a set of nodes from that page such that:

- (**content**) there is at least one [perceivable content][] in the segment; and
- (**continuity**) if two nodes are in the segment, then any node between them (in tree order) is also in the segment; and
- (**downward closure**) if a node is in the segment, then all its descendants are also in the segment; and
- (**parent closure**) if all children of an element are in the segment, then this element is also in the segment.

Note that when the rendering order of nodes on a page greatly differ from the DOM order, segments of content as defined here may be different from what is visually perceived as "content in close relationship".

[html web page]: #web-page-html 'Definition of Web Page'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'

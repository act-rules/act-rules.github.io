---
title: Overlap
key: overlap
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

[Bounding boxes][] A and B _overlap_ if at least one point inside box A has the same [left][left coordinate] and [top coordinates][top coordinate] of one point inside box B.

[bounding boxes]: https://drafts.csswg.org/cssom-view/#dom-element-getboundingclientrect 'Definition of getBoundingClientRect'
[left coordinate]: https://drafts.fxtf.org/geometry/#dom-domrectreadonly-left
[top coordinate]: https://drafts.fxtf.org/geometry/#dom-domrectreadonly-top
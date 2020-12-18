---
title: Adjacent
key: adjacent
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

[Bounding boxes][] A and B are _adjacent_ if they do not [overlap][] and at least one point from box A is at the Euclidean distance of 1 [CSS pixel][] from one point in box B.

[bounding boxes]: https://drafts.csswg.org/cssom-view/#dom-element-getboundingclientrect 'Definition of getBoundingClientRect'
[CSS pixel]: https://drafts.csswg.org/css-values-3/#visual-angle-unit
[left coordinate]: https://drafts.fxtf.org/geometry/#dom-domrectreadonly-left
[overlap]: #overlap 'Definition of overlap'
[top coordinate]: https://drafts.fxtf.org/geometry/#dom-domrectreadonly-top
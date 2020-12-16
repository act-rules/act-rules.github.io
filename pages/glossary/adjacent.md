---
title: Adjacent
key: adjacent
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

[Bounding boxes][] A and B are _adjacent_ if they do not [overlap][] and at least one point from box A is at the distance of 1 [CSS pixel][] from one point in box B.

The distance between two points is obtained by adding the horizontal distance between the two points with the vertical distance between the two points.

The horizontal distance between two points is given by the absolute value of the difference between the [left coordinate][] of one point and the [left coordinate][] of the other point.

The horizontal distance between two points is given by the absolute value of the difference between the [top coordinate][] of one point and the [top coordinate][] of the other point.

[bounding boxes]: https://drafts.csswg.org/cssom-view/#dom-element-getboundingclientrect 'Definition of getBoundingClientRect'
[CSS pixel]: https://drafts.csswg.org/css-values-3/#visual-angle-unit
[left coordinate]: https://drafts.fxtf.org/geometry/#dom-domrectreadonly-left
[overlap]: #overlap 'Definition of overlap'
[top coordinate]: https://drafts.fxtf.org/geometry/#dom-domrectreadonly-top
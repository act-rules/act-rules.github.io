---
title: Overlap
key: overlap
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

[Bounding boxes][] A and B _overlap_ if one of the following is true:

- the value of the [x coordinate][] property of box A is between the values of the [top][] and [bottom][] properties of box B and the value of the [y coordinate][] of box A is between the values of the [left][] and [right][] properties of box B; or
- the value of the [x coordinate][] property of box B is between the values of the [top][] and [bottom][] properties of box A and the value of the [y coordinate][] of box B is between the values of the [left][] and [right][] properties of box A.

[bounding boxes]: https://drafts.csswg.org/cssom-view/#dom-element-getboundingclientrect 'Definition of getBoundingClientRect'
[bottom]: https://drafts.fxtf.org/geometry-1/#dom-domrectreadonly-bottom
[left]: https://drafts.fxtf.org/geometry-1/#dom-domrectreadonly-left
[right]: https://drafts.fxtf.org/geometry-1/#dom-domrectreadonly-right
[top]: https://drafts.fxtf.org/geometry-1/#dom-domrectreadonly-top
[x coordinate]: https://drafts.fxtf.org/geometry-1/#dom-domrectreadonly-x
[y coordinate]: https://drafts.fxtf.org/geometry-1/#dom-domrectreadonly-y
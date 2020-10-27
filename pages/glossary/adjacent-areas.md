---
title: Adjacent areas
key: adjacent-areas
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

Web page areas A and B are _adjacent areas_ if at least one pixel from area A is at the distance of 1 pixel from one pixel in area B.

The distance between two pixels is obtained by adding the horizontal distance between the two pixels with the vertical distance between the two pixels.

The horizontal distance between two pixels is given by the absolute value of the difference between the [left coordinate][] of one pixel and the [left coordinate][] of the other pixel.

The horizontal distance between two pixels is given by the absolute value of the difference between the [top coordinate][] of one pixel and the [top coordinate][] of the other pixel.

[left coordinate]: https://drafts.fxtf.org/geometry/#dom-domrectreadonly-left
[top coordinate]: https://drafts.fxtf.org/geometry/#dom-domrectreadonly-top
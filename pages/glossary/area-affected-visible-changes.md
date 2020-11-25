---
title: Area affected by visible changes
key: area-affected-visible-changes
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

The _area affected_ by [visible changes in content][] of a web page is determined by a rectangle defined by the following coordinates:

- (**top**:) the lowest value of the y coordinate of any pixel affected by the [visible changes in content][]; and
- (**left**:) the lowest value of the x coordinate of any pixel affected by the [visible changes in content][]; and
- (**bottom**:) the highest value of the y coordinate of any pixel affected by the [visible changes in content][]; and
- (**right**:) the highest value of the x coordinate of any pixel affected by the [visible changes in content][].

[visible changes in content]: #visible-changes-in-presentation-or-content 'Definition of visible changes in presentation or content'

--
title: Distinguishing Border
key: distinguishing-border
--

Look at the style properties for:
- `border`, and the related expanded properties `border-bottom`, `border-left`, `border-right,` `border-top`, and
- `outline`.

For one of these to be a distinguishing border, all of the following must be true:

* The value of *-width is greater than 0
* The value of *-style is not set to none 
* The value of *-color is not transparent, or the same as the [background-color](#background-color) of the element.

If either `border`, `border-bottom`, `border-left`, `border-right,` `border-top`, or `outline` is distinguishable, the element has a distinguishing border.

**Note:** Should we consider border-image too???

### Assumptions
* Use of a border, with `width` of 1 or more pixels, with `style` not set to none, and not with a color of transparent or the same as the background color, is assumed to be sufficiently distinguishable.

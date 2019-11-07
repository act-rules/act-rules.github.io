--
title: Distinguishing Borders
key: distinguishing-borders
--

Look at the style properties for:

- `border`, and the related expanded properties `border-bottom`, `border-left`, `border-right,` `border-top`, and
- `outline`.

Two elements have distinguishing borders if one of the following is true:

- One of the element's _-width attribute is larger than zero and the other is not, and the element with the _-width attribute larger than zero has the value of the _-style attribute not set to none and the value of the _-color attribute not set to transparent
- Both elements have their _-width attribute larger than zero and with different values, as long as both elements don't have the value of the _-style attribute set to none and the value of the \*-color attribute set to transparent
- Both elements have their _-width attribute larger than zero, the value of _-style set to different values or the value of the \*-color attribute set to different values

If either `border`, `border-bottom`, `border-left`, `border-right,` `border-top`, or `outline` are distinguishable, the elements have distinguishing borders.

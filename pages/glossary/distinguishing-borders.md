--
title: Distinguishing Borders
key: distinguishing-borders
--

Look at the computed values of the following style properties:

- `border`, and the related longhand properties `border-bottom`, `border-left`, `border-right,` `border-top`, and
- `outline`.

Two elements have distinguishing borders if one of the following is true:

- One of the element's `-width` attribute is larger than zero and the other is not, and the element with the `-width` attribute larger than zero has the value of the `-style` attribute not set to `none` and the value of the `-color` attribute not set to `transparent`; or
- Both elements have their `-width` attribute larger than zero and with different values, as long as both elements don't have the value of the `-style` attribute set to `none` and the value of the `-color` attribute set to `transparent`; or
- Both elements have their `-width` attribute larger than zero, the value of `-style` set to different values or the value of the `-color` attribute set to different values.

If either `border`, `border-bottom`, `border-left`, `border-right`, `border-top`, or `outline` are distinguishable, the elements have distinguishing borders.

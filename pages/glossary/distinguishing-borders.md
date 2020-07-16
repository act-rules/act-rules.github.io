---
title: Distinguishing Borders
key: distinguishing-borders
unambiguous: true
objective: true
---

Look at the [computed](https://drafts.csswg.org/css-cascade/#computed-value) values of the following style properties:

- `border`, and the related longhand properties `border-bottom`, `border-left`, `border-right,` `border-top`, and
- `outline`.

Two elements have distinguishing borders if one of the following is true:

- One of the element's `-width` attribute is larger than zero and the other is not, and the element with the `-width` attribute larger than zero has a border that is not invisible; or
- Both elements have their `-width` attribute larger than zero and with different values, as long as at least one element has a border that is not invisible; or
- Both elements have their `-width` attribute larger than zero, the value of `-style` set to different values or the value of the `-color` attribute set to different values, and at least one border is not invisible.

A border is invisible when the value of the `-style` attribute is set to `none` or the value of the `-color` attribute has an [alpha component](https://drafts.csswg.org/css-color/#alpha-channel) equal to 0.

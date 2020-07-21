---
title: Distinguishing Borders
key: distinguishing-borders
unambiguous: true
objective: true
---

Look at the [computed](https://drafts.csswg.org/css-cascade/#computed-value) values of the following style properties:

- `border`, and the related shorthand properties `border-bottom`, `border-left`, `border-right,` `border-top`, and
- `outline`.

Two elements have distinguishing borders if one of the following is true:

- The `-width` longhand sub-property of one element is larger than zero and of the other is not, and the element with the `-width` longhand sub-property larger than zero has a border that is not invisible; or
- Both elements have their `-width` longhand sub-properties larger than zero and with different values, as long as at least one element has a border that is not invisible; or
- Both elements have their `-width` longhand sub-properties larger than zero, the value of the `-style` longhand sub-properties set to different values or the value of the `-color` longhand sub-properties set to different values, and at least one border is not invisible.

A border is invisible when the value of the `-style` longhand sub-property is set to `none` or the value of the `-color` longhand sub-property has an [alpha component](https://drafts.csswg.org/css-color/#alpha-channel) equal to 0.

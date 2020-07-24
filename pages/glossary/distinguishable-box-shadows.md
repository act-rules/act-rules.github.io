---
title: Distinguishable box-shadows
key: distinguishable-box-shadows
unambiguous: true
objective: true
---

Look at the [computed](https://drafts.csswg.org/css-cascade/#computed-value) values of the `box-shadow` style property.

Two elements have a _distinguishable box-shadow_ if all of the following are true:

- the [computed](https://drafts.csswg.org/css-cascade/#computed-value) values of their `box-shadow` property are different; and
- if the difference is just based on the color values, and only one of the elements has the color value specified then that value has to be different from the [computed](https://drafts.csswg.org/css-cascade/#computed-value) `background-color` of the element and the value's [alpha component](https://drafts.csswg.org/css-color/#alpha-channel) has to be different from 0.

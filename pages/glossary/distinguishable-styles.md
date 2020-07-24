---
title: Distinguishable Styles
key: distinguishable-styles
unambiguous: true
objective: true
---

Two elements have _distinguishable styles_ if one of the following is true:

- they have [distinguishable borders](#distinguishable-borders); or
- they have [distinguishable box-shadows](#distinguishable-box-shadows); or
- they have different computed values for the `background-image` property; or
- they have different computed values for at least one [text style property](#text-style-properties).

This definition assumes that different computed values for the `background-image` property specify different images. If one computed value is a data URI and the other is a URL of the same image then this definition will produce incorrect results.
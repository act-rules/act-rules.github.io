--
title: Distinguishing Styles
key: distinguishing-styles
unambiguous: true
objective: true
--

Two elements have distinguishing styles if any of the following is true:

- they have [distinguishing borders](#distinguishing-borders); or
- they have [distinguishing box-shadows](#distinguishing-box-shadows); or
- they have different computed values for the `background-image` property; or
- they have different values for [text style properties](#text-style-properties).

This definition assumes that different computed values for the `background-image` property specify different images. If one computed value is a data URI and the other is a URL of the same image then this definition will produce incorrect results.
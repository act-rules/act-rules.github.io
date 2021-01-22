---
title: Distinguishable background images
key: distinguishable-background-images
unambiguous: true
objective: true
---

Two elements have _distinguishable background images_ if they have different [computed values][computed value] for the `background-image` property, unless one element is [descendant][] of the other and the [descendant][] element has a [computed value][] for the `background-image` property equal to `none`.

This definition assumes that different [computed values][computed value] for the `background-image` property specify different images. If one [computed value][] is a data URI and the other is a URL of the same image then this definition will produce incorrect results.

[computed value]: https://www.w3.org/TR/css-cascade/#computed-value 'Definition of computed value'
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
---
title: Distinguishable text styles
key: distinguishable-text-styles
unambiguous: true
objective: true
---

Two elements have _distinguishable text styles_ if they have different [computed values][] for at least one [text style property](#text-style-properties), unless one element is [descendant][] of the other and differences are not only due to the [descendant][] element having any of the following [computed values][]:

- a `font-variant-ligature` property equal to `none`; or
- a `text-decoration-line` property equal to `none`; or
- a `text-transform` property equal to `none`.

[computed values]: https://www.w3.org/TR/css-cascade/#computed-value 'Definition of computed values'
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
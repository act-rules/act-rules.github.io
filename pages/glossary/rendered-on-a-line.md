---
title: Rendered on a line
key: rendered-on-a-line
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

All nodes that generate an [inline box][] that are part of a [line box][] are considered _rendered on a line_. These are _line rendering nodes_.

Any [flat tree][] [descendants][] of line rendering nodes are also considered part of a line if one of its [clientRects][] overlaps with the position of the [line box][], and if all the following is true for each [ancestor][] in the [flat tree][] up to the line rendering node:

- the ancestor is an [inline box][]; and
- the ancestor is not [floating][]; and
- the ancestor does not have an [absolute][] or [fixed][] position.

[absolute]: https://drafts.csswg.org/css-position-3/#valdef-position-absolute 'Definition of absolute'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'Definition of ancestor'
[clientrects]: https://drafts.csswg.org/cssom-view/#dom-element-getclientrects 'Definition of getClientRects'
[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant 'Definition of descendant'
[fixed]: https://drafts.csswg.org/css-position-3/#valdef-position-fixed 'Definition of fixed'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[floating]: https://www.w3.org/TR/CSS2/visuren.html#floats 'Definition of float'
[inline box]: https://drafts.csswg.org/css-display/#inline-box 'Definition of inline box'
[line box]: https://drafts.csswg.org/css2/visuren.html#line-box 'Definition of line box'

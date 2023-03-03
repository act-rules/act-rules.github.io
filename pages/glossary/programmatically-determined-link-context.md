---
title: Programmatically Determined Link Context
key: programmatically-determined-link-context
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - DOM tree
---

The _programmatically determined context_ of a link (or _programmatically determined link context_) is the set of all elements that are [included in the accessibility tree][], and have one or more of the following relationships to the link:

- being an [ancestor][] of the link in the [flat tree][] with a [semantic role][] of `listitem`; or
- being the closest [ancestor][] of the link in the [flat tree][] that generates a [block container][]; or
- being the closest [ancestor][] of the link in the [flat tree][] that has a [semantic role][] of `cell` or `gridcell`; or
- being a header cell [assigned][] to the closest [ancestor][] of the link in the [flat tree][] that has a [semantic role][] of `cell` or `gridcell`.

This definition is based on (but not equivalent to) the [WCAG definition of programmatically determined link context](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determined-link-context).

This definition assumes that the HTML document with the link is a document using HTML according to the specification.

[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM, ancestor, 2021/11/29'
[assigned]: https://html.spec.whatwg.org/multipage/tables.html#algorithm-for-assigning-header-cells 'HTML, algorithm for assigning header cells, 2021/11/29'
[block container]: https://drafts.csswg.org/css-display/#block-container 'CSS Display Module Level 3, block container, 2022/01/17'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping Module Level 1, flat tree, 2021/11/29'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[semantic role]: #semantic-role 'Definition of semantic role'

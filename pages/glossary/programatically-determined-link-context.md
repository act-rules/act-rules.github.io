--
title: Programmatically Determined Link Context
key: programmatically-determined-link-context
--

The programmatically determined link context is a list of elements. All elements in the list must be [included in the accessibility tree][], and have one of the following relationships to the link:

- an [ancestor][] in the [flat tree][] with a semantic role of `listitem`; or
- the closest [ancestor][] in the [flat tree][] that is a `p` element; or
- the closest [ancestor][] in the [flat tree][] that has a semantic role of `cell` or `gridcell`; or
  - serve as a `rowheader` or `columnheader` for the `cell` or `gridcell`; or
- are referenced by an `aria-describedby` attribute of the link element.

This definition is based on the [WCAG definition of programmatically determined link context](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determined-link-context).

This definition assumes that the HTML document with the link is a document using HTML according to the specification.

[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'

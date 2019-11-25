--
title: Programmatically Determined Link Context
key: programmatically-determined-link-context
--

The programmatically determined link context is a list of elements. All elements in the list must be [included in the accessibility tree][], and have one of the following relationships to the link:

- share an [ancestor][] with a semantic role of `listitem`; or
- share the closest [ancestor][] that is a `p` element; or
- share the closest [ancestor][] that has a semantic role of `cell` or `gridcell`; or
- serve as a `rowheader` or `columnheader` for the `cell` or `gridcell`; or
- are referenced by an `aria-describedby` attribute of the link element.

This definition is based on the [WCAG definition of programmatically determined link context](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determined-link-context).

This definition assumes that the HTML document with the link is a document using HTML according to the specification.

[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'

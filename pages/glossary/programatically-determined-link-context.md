--
title: Programmatically Determined Link Context
key: programmatically-determined-link-context
--

In HTML, information that is programmatically determinable from a link includes HTML elements that are [visible][] and [included in the accessibility tree][] with a non-empty ("") [accessible name][] and

- have as ancestor in the [flat tree][] a `p` element that is [ancestor][] of the link;
- have as ancestor in the [flat tree][] an element with the semantic role of `listitem` that is [ancestor][] of the link ;
- have as ancestor in the [flat tree][] an element with the semantic role of `cell` or `gridcell` that is [ancestor][] of the link;
- are [descendant][] nodes in the [flat tree][] of an element with the semantic role of `columnheader` or `rowheader` that is [associated][] with the element with the semantic role of `cell` or `gridcell` of which the link is a [descendant][];
- are [descendant][] nodes of elements referenced by an `aria-describedby` attribute of the link element.

This definition is based on the [WCAG definition of programmatically determined link context](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determined-link-context).

This definition assumes that the HTML document with the link is a document using HTML according to the specification.

[accessible name]: #accessible-name 'Definition of accessible name'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor
[associated]: https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[visible]: #visible 'Definition of visible'

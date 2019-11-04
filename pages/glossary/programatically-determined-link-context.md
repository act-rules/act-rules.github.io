--
title: Programmatically Determined Link Context
key: programmatically-determined-link-context
--

In HTML, information that is programmatically determinable from a link includes [text nodes][] that are [included in the accessibility tree][] with a non-empty ("") [accessible name][] and are

- in the same paragraph (HTML `p` element) as the link;
- in the same list (HTML element with the semantic role of `listitem`) as the link;
- in the same table cell (HTML element with the semantic role of `cell` or `gridcell`) as the link;
- in a table header cell (HTML element with the semantic role of `columnheader` or `rowheader`) that is [associated][] with the table cell (HTML element with the semantic role of `cell` or `gridcell`) of which the link is a descendent;
- nodes of elements referenced by an `aria-describedby` attribute of the link element.

This definition is based on the [WCAG definition of programmatically determined link context](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determined-link-context).

[accessible name]: #accessible-name 'Definition of accessible name'
[associated]: https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[text nodes]: https://www.w3.org/TR/dom/#text

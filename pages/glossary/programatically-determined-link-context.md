--
title: Programatically Determined Link Context
key: programatically-determined-link-context
--

In HTML, information that is programmatically determinable from a link in English includes [text nodes](https://www.w3.org/TR/dom/#text) that are [included in the accessibility tree](#included-in-the-accessibility-tree) and are
- in the same paragraph (HTML `p` element) as the link,
- in the same list (HTML or SVG element with the semantic role of `listitem`) as the link,
- in the same table cell (HTML or SVG element with the semantic role of `cell` or `gridcell`) as the link,
- in a table header cell (HTML or SVG element with the semantic role of `columnheader` or `rowheader`) that is [associated](https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics) with the table cell (HTML or SVG element with the semantic role of `cell` or `gridcell`) that contains the link
- programatically associated with the link using WAI-ARIA `aria-describedby`.

This definition is based on the [WCAG definition of programmatically determined link context](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determined-link-context): 

> In HTML, information that is programmatically determinable from a link in English includes text that is in the same paragraph, list, or table cell as the link or in a table header cell that is associated with the table cell that contains the link.

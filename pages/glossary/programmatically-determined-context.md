---
title: Programmatically determined context
key: programmatically-determined-context
---

The programmatically determined context of a piece of information (_e.g._ an element) is all the additional information that has a [programmatically determinable](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable) [relationship](https://www.w3.org/TR/WCAG21/#dfn-relationships) to it.

It includes:

- the element's [accessible name][];
- elements that are referred by the `aria-describedby` attribute; 
- the `title` attribute;
- ancestor `label` elements;
- `label` elements referring the current element with a `for` attribute;
- table headers associated with the cell containing the information;
- sibling [phrasing content][] nodes in the same [paragraph][] of the element;
- sibling [phrasing content][] nodes in the same table cell of the element;
- sibling [phrasing content][] nodes in the same list item of the element.

**Note:** Since screen readers interpret punctuation, they can also provide the context from the current sentence, when the focus is on a link in that sentence.

[accessible name]: #accessible-name 'Definition of accessible name'
[paragraph]: https://html.spec.whatwg.org/#paragraph
[phrasing content]: https://html.spec.whatwg.org/#phrasing-content-2

---
title: Potential focus indicator
key: potential-focus-indicator
unambiguous: true
objective: true
input_aspects:
  - DOM tree
---

An element I is a _potential focus indicator_ for a [focusable][] element F if one of the following conditions is true:

- (**isolating common ancestor**) I and F have a common [inclusive ancestor][] in the [flat tree][] which is not the [inclusive ancestor][] in the [flat tree][] of any other [focusable][] element, except descendants of F; or
- (**neighbors**) there, in tree order, is no element between I and F (both included) which is the [inclusive ancestor][] in the [flat tree][] of any other [focusable][] element, except descendants of F; or
- (**table neighbors**) I has an [inclusive ancestor][] in the [flat tree][], I', and F has an [inclusive ancestor][] in the [flat tree][], F', such that:
  - both I' and F' are [cells][cell] of the same [table][]; and
  - I' and F' [cover][] [slots][slot] that have either the same _x_ or _y_ coordinate; and
  - there is no [cell][] in that [table][] which contains another [focusable][] element, and cover the same _x_ (resp. _y_) coordinate as F', and has an [anchor][] whose _y_ (resp. _x_) coordinate is between these of the [anchors][anchor] of I' and F'.

Potential focus indicators are not unique. Many elements can be potential focus indicators for a given focusable element F. A given element may be a potential indicator for more than one [focusable][] element, especially due to the (**neighbors**) condition.

**Note:** F is always a focus indicator for itself as it is an [inclusive ancestor][] of itself that matches the (**isolating common ancestor**) condition.

**Note:** The (**neighbors**) and (**table neighbors**) conditions do not specify in which order the elements are. The indicator may be before of after the [focusable][].

**Note:** The (**table neighbors**) condition essentially handles "[cells][cell] in the same column of a [table][]" which is not handled by the (**neighbors**) condition (because there may be [focusable][] elements from other columns between I and F).

[anchor]: https://html.spec.whatwg.org/multipage/tables.html#concept-cell 'Specification of the Cell anchor concept'
[cell]: https://html.spec.whatwg.org/multipage/tables.html#concept-cell 'Specification of the Cell concept'
[cover]: https://html.spec.whatwg.org/multipage/tables.html#concept-cell 'Specification of Cell covering'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of focusable'
[inclusive ancestor]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'Definition of inclusive ancestor'
[slot]: https://html.spec.whatwg.org/multipage/tables.html#concept-slots 'Specification of the Slot concept'
[table]: https://html.spec.whatwg.org/multipage/tables.html#concept-table 'Specification of the Table concept'

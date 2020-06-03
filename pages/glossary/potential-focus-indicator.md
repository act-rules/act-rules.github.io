---
title: Potential focus indicator
key: potential-focus-indicator
unambiguous: true
objective: true
input_aspects:
  - DOM tree
---

An element I is a _potential focus indicator_ for a [focusable][] element F if one of the following conditions is true:

- **isolating common ancestor** I and F have a common [inclusive ancestor][] in the [flat tree][] which is not the [inclusive ancestor][] in the [flat tree][] of any other [focusable][] element, except descendants of F; or
- **neighbors** I has an [inclusive ancestor][] in the [flat tree][], I', and F has an [inclusive ancestor][] in the [flat tree][], F', such that:
  - F' is not the [inclusive ancestor][] in the [flat tree][] of any [focusable][] elements except F and its descendants; and
  - there is no element between I' and F' (in tree order) which is the [inclusive ancestor][] in the [flat tree][] of another [focusable][] element.

Potential focus indicators are not unique. Many elements can be potential focus indicators for a given focusable element F. A given element may be a potential indicator for more than one [focusable][] element, especially due to the **neighbors** condition.

**Note:** F is always a focus indicator for itself as it is an [inclusive ancestor][] of itself that matches the **isolating common ancestor** condition.

**Note:** The **neighbors** condition does not specify in which order I' and F' are. The indicator may be before of after F'.

[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of focusable'
[inclusive ancestor]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'Definition of inclusive ancestor'

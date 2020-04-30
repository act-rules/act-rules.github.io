---
title: Focus indicator
key: focus-indicator
unambiguous: true
objective: true
input_aspects:
  - DOM tree
---

An element I is a _focus indicator_ for a [focusable][] element F is one of the following condition is true:

- **isolating common ancestor** I and F have a common [inclusive ancestor][] which is not the [inclusive ancestor][] of any other [focusable][] element, except descendants of F; or
- **neighbours** I has an [inclusive ancestor][] I' and F has an inclusive ancestor F' such that:
  - F' is not the [inclusive ancestor][] of any [focusable][] elements except F and its descendants; and
  - there is no element between I' and F' (in tree order) which is the [inclusive ancestor][] of another [focusable][] element.

**Note:** Focus indicators are not unique. Many elements can be focus indicators for a given focusable element F.

**Note:** F is always a focus indicator for itself as it is an [inclusive ancestor][] of itself that matches the **isolating common ancestor** condition.

**Note:** The **neighbours** condition does not specify in which order I and the ancestor of F are. The indicator may be before of after the ancestor of F.

**Note:** A given element may be an indicator for more than one [focusable][] element, especially due to the **neighbours** condition.

[focusable]: #focusable 'Definition of focusable'
[inclusive ancestor]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'Definition of inclusive ancestor'

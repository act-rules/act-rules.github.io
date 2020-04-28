---
title: Implicit Semantic Role
key: implicit-role
unambiguous: true
objective: true
input_aspects:
  - DOM tree
---

The _Implicit Semantic Role_ is the [semantic role][] of each element that is used when no valid [explicit semantic role][] is specified. Elements with no [role attribute][], or with a [role attribute][] containing no valid token, are mapped to their implicit role.

Implicit roles for HTML and SVG, are documented in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/), the [ARIA in HTML (working draft)](https://www.w3.org/TR/html-aria/) documentation, and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

[explicit semantic role]: #explicit-role 'Definition of explicit semantic role'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[semantic role]: #semantic-role 'Definition of semantic role'

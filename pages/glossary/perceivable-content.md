---
title: Perceivable content
key: perceivable-content
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

A node is _perceivable content_ if all the following are true:

- the node is [palpable content][]; and
- the node is either [visible][] or [included in the accessibility tree][]; and
- if the node is an element, it does not have a [semantic role][] of `none` or `presentation`.

Perceivable content corresponds to nodes that contain information and are perceived by some categories of users.

#### Assumptions

This definition assumes that elements with a [semantic role][] of `none` or `presentation` are [pure decoration][] and that elements which are [pure decoration][] either are not [included in the accessibility tree][] or have a [semantic role][] of `none` or `presentation`. Note that if this is not the case, then [Success Criterion 1.3.1: Info and Relationship][sc131] is likely not satisfied.

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[palpable content]: https://html.spec.whatwg.org/multipage/dom.html#palpable-content 'HTML specification of palpable content'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of pure decoration'
[sc131]: https://www.w3.org/TR/WCAG22/#info-and-relationships 'Success Criterion 1.3.1: Info and Relationship'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'

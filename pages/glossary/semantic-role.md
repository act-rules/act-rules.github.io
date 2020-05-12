---
title: Semantic Role
key: semantic-role
unambiguous: true
objective: true
input_aspects:
  - DOM tree
---

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element has an [explicit role][] which is either `none` or `presentation`, but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when its [hidden state][] is false, then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

#### Accessibility Support for Definition of Semantic Role

- There exist popular web browsers and assistive technologies which do not correctly implement [Presentational Roles Conflict Resolution][]. These technologies will not [include in the accessibility tree][included in the accessibility tree] elements that should be, according to Specifications. Thus, some elements that should have their _semantic role_ fixed by case **Conflict** above are instead falling into case **Explicit** and are hidden for users of assistive technologies.
- A similar conflict exists for [focusable][] elements with a `aria-hidden="true"` attribute. The WAI ARIA specification does not explain how to solve it. Some browsers give precedence to the element being focusable (and expose it in the accessibility tree) while some give precedence to the `aria-hidden` attribute (and hide the element).

[explicit role]: #explicit-role 'Definition of Explicit Role'
[focusable]: #focusable 'Definition of Focusable'
[hidden state]: #hidden-state 'Definition of hidden state'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'

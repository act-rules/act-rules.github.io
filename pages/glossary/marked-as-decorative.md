---
title: Marked as decorative
key: marked-as-decorative
unambiguous: true
objective: true
input_aspects:
  - DOM tree
---

An element is _marked as decorative_ if one of the following conditions is true:

- it has a `role` attribute whose first valid token is either "none" or "presentation"; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`).

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentation roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if their [hidden state][] is true. This is different from marking the element as decorative and does not convey the same intention. Notably, the [hidden state][] of an element may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

[hidden state]: #hidden-state 'Definition of Hidden state'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure decoration'

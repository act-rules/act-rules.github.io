---
title: Semantic Role
key: semantic-role
unambiguous: true
objective: true
---

A _semantic [role](https://www.w3.org/TR/wai-aria-1.1/#dfn-role)_ is a semantic association that indicates an object's type. This allows tools to present and support interaction with the object in a manner that is consistent with user expectations about other objects of that type.

Valid semantic roles are defined by standards. For web content and applications these are defined within the various [WAI-ARIA specifications](https://act-rules.github.io/glossary/#wai-aria-specifications).

The _semantic role_ of an element which is [included in the accessibility tree][] is the role this element has in the accessibility tree. Elements which are not [included in the accessibility tree][] have no semantic role.

**Note:** In most cases, the semantic role of an element is its [explicit semantic role][] if it has any, otherwise, its [implicit semantic role][]. However, elements with an [explicit role][] of `none` or `presentation` may still be [included in the accessibility tree][] with their [implicit role][] if a [global ARIA state or property](https://www.w3.org/TR/wai-aria-1.1/#global_states) is specified, or if they are focusable or interactive ([Presentational Roles Conflict Resolution][])

#### Accessibility Support

There exist popular web browsers and assistive technologies which do not correctly implement [Presentational Roles Conflict Resolution][].

[explicit semantic role]: #explicit-role 'Definition of Explicit Role'
[implicit semantic role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'

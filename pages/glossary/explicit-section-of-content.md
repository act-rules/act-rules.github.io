---
title: Explicit section of content
key: explicit-section-of-content
unambiguous: true
objective: true
---

An _explicit section of content_ is a subtree rooted at an element with a [semantic role][] that inherits either from the [`landmark`][landmark] or [`document`][document] roles, except if it is the only child of an element with a [semantic role][] that inherits either from the [`landmark`][landmark] or [`document`][document] roles.

Explicit sections of content may contain nested [programmatic subsections of content][programmatic section of content].

**Note:** The `article` role (inheriting from `document`) is included in this definition because the `article` element is consider [sectioning content][] when building HTML outlines.

**Note:** The roles considered here are close but different from the [implicit roles][] of [sectioning content][] and [sectioning root][] elements.

**Note:** When one of these elements is the single child of a similar element, they form a single [programmatic section of content][], rather than one each, because they have the exact same content.

[document]: https://www.w3.org/TR/wai-aria-1.1/#document 'The document role'
[implicit roles]: #implicit-role 'Definition of implicit role'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark 'The landmark role'
[programmatic section of content]: #programmatic-section-of-content 'Definition of programmatic section of content'
[sectioning content]: https://html.spec.whatwg.org/multipage/dom.html#sectioning-content 'Definition of sectioning content'
[sectioning root]: https://html.spec.whatwg.org/multipage/sections.html#sectioning-root 'Definition of sectioning root'
[semantic role]: #semantic-role 'Definition of semantic role'

---
title: Explicit section of content
key: explicit-section-of-content
unambiguous: true
objective: true
---

An _explicit section of content_ is a subtree of the [flat tree][], rooted at an element with a [semantic role][] which is one of the sectioning roles (defined just after), except if it is the only child of an element whose [semantic role][] is one of the sectioning roles.

The sectioning roles considered here are: the [`document`][document] role; any role that inherits from [`document`][document]; any role that inherits from [`landmark`][landmark].

If a descendant of the root of an explicit section of content is a [browsing context container][], then the full content of the associated [nested browsing context][] is also included in this explicit section of content.

Explicit sections of content may contain nested [programmatic subsections of content][programmatic section of content].

Explicit sections of content may have zero or one heading [associated][] with them.

**Note:** The `article` role (inheriting from `document`) is included in this definition because the `article` element is [sectioning content][] used by the [algorithm for creating an outline][outline algorithm].

**Note:** The roles considered here are close but different from the [implicit roles][] of [sectioning content][] and [sectioning root][] elements. Notably, the `body` element itself does not define an explicit section of content.

**Note:** When one of these elements is the single child of a similar element, they form a single [programmatic section of content][], rather than one each, because they have the exact same content.

**Note:** a subtree rooted at a node is this node and all its descendants.

#### Assumption

This definition assumes that the [semantic roles][semantic role] are used according to their semantics.

[associated]: #heading-section-association 'Definition of association between headings and sections'
[browsing context container]: https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-container 'Definition of browsing context container'
[document]: https://www.w3.org/TR/wai-aria-1.1/#document 'The document role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[implicit roles]: #implicit-role 'Definition of implicit role'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark 'The landmark role'
[nested browsing context]: https://html.spec.whatwg.org/multipage/browsers.html#nested-browsing-context 'Definition of nested browsing context'
[outline algorithm]: https://html.spec.whatwg.org/multipage/sections.html#outlines 'Definition of outline'
[programmatic section of content]: #programmatic-section-of-content 'Definition of programmatic section of content'
[sectioning content]: https://html.spec.whatwg.org/multipage/dom.html#sectioning-content 'Definition of sectioning content'
[sectioning root]: https://html.spec.whatwg.org/multipage/sections.html#sectioning-root 'Definition of sectioning root'
[semantic role]: #semantic-role 'Definition of semantic role'

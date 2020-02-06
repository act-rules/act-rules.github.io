---
title: Explicit section of content
key: explicit-section-of-content
unambiguous: true
objective: true
---

An _implicit section of content_ is all the nodes, in tree order, between an element with a [semantic role][] of [`heading`][heading] and the next element (in tree order) which has both a [semantic role][] of [`heading`][heading] and an [`aria-level`][aria-level] lower of equal, except for the first element with a [semantic role][] of [`heading`][heading] inside an [explicit section of content][].

Explicit sections of content may contain nested [programmatic subsections of content][programmatic section of content].

**Note:** level example
first heading excluded.

#### Assumption

role is used correctly.
no hgroup

[aria-level]: https://www.w3.org/TR/wai-aria-1.1/#aria-level 'The aria-level property'
[explicit section of content]: #explicit-section-of-content 'Definition of explicit section of content'
[heading]: https://www.w3.org/TR/wai-aria-1.1/#heading 'The heading role'
[programmatic section of content]: #programmatic-section-of-content 'Definition of programmatic section of content'
[semantic role]: #semantic-role 'Definition of semantic role'

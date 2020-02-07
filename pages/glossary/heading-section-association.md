---
title: Association between headings and sections
key: heading-section-association
unambiguous: true
objective: true
---

Each element with a [semantic role][] of [`heading`][heading] is _associated_ with exactly one [programmatic section of content][] in one of the following ways:

- The first element with a [semantic role][] of [`heading`][heading] inside an [explicit section of content][] is associated with this [explicit section of content][].
- Any other element with a [semantic role][] of [`heading`][heading] is associated with the [implicit section of content][] it creates.

**Note:** This association follows roughly the [algorithm for creating an outline][outline algorithm] and the similar association done in it.

**Note:** Each heading is always associated with exactly one [programmatic section of content][]. On the other hand, each [programmatic section of content][] can have zero or one heading associated with it (never more).

#### Assumption

- This definition assumes that the [semantic roles][semantic role] (including the level of headings) are used according to their semantics.
- This definition assumes that the `hgroup` element is not used.

[explicit section of content]: #explicit-section-of-content 'Definition of explicit section of content'
[heading]: https://www.w3.org/TR/wai-aria-1.1/#heading 'The heading role'
[implicit section of content]: #implicit-section-of-content 'Definition of implicit section of content'
[outline algorithm]: https://html.spec.whatwg.org/multipage/sections.html#outlines 'Definition of outline'
[programmatic section of content]: #programmatic-section-of-content 'Definition of programmatic section of content'
[semantic role]: #semantic-role 'Definition of semantic role'

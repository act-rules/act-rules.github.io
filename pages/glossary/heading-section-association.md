---
title: Association between headings and sections
key: heading-section-association
unambiguous: true
objective: true
---

Each [section of content][] is _associated_ with the first element (in tree order) with a [semantic role][] of `heading` within this section of content, if any.

**Note:** [Implicit sections of content][implicit section of content] are always associated with the element defining them. [Explicit][explicit section of content][] and [visual sections of content][visual section of content] are associated with 0 or 1 heading.

**Note:** A heading may have several [sections of content][section of content] associated with it, even several of the same kind (explicit or visual).

**Note:** If the first heading is not located near the start of a [section of content][], this association will not necessarily be perceived by users.

Each element with a [semantic role][] of [`heading`][heading] is _associated_ with exactly one [section of content][] in one of the following ways:

- The first element with a [semantic role][] of [`heading`][heading] inside an [explicit section of content][] is associated with the [explicit section of content][] whose root is its closest ancestor.
- Any other element with a [semantic role][] of [`heading`][heading] is associated with the [implicit section of content][] it creates.

**Note:** This association follows roughly the [algorithm for creating an outline][outline algorithm] and the similar association done in it.

**Note:** Each heading is always associated with exactly one [programmatic section of content][]. On the other hand, each [programmatic section of content][] can have zero or one heading associated with it (never more).

#### Assumption

- This definition assumes that the [semantic roles][semantic role] (including the level of headings) are used according to their semantics.

**Note:** Elements with a role of `heading` (and, thus, [implicit sections of content][implicit section of content]) have an `aria-level` property while [explicit sections of content][explicit section of content] don't. However, the nesting of elements defining [explicit sections of content][explicit section of content] does imply a similar structure and hierarchy. If the `aria-level` of a heading associated to an [explicit section of content][] does not match its implied level in this nesting structure, this is considered as not using the level of heading according to their semantics and thus fails this assumption, causing the definition to produce incoherent results.

- This definition assumes that the `hgroup` element is not used.

[explicit section of content]: #explicit-section-of-content 'Definition of explicit section of content'
[heading]: https://www.w3.org/TR/wai-aria-1.1/#heading 'The heading role'
[implicit section of content]: #implicit-section-of-content 'Definition of implicit section of content'
[outline algorithm]: https://html.spec.whatwg.org/multipage/sections.html#outlines 'Definition of outline'
[programmatic section of content]: #programmatic-section-of-content 'Definition of programmatic section of content'
[semantic role]: #semantic-role 'Definition of semantic role'

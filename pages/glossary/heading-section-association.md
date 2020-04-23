---
title: Association between headings and sections
key: heading-section-association
unambiguous: true
objective: false
---

Each [section of content][] is _associated_ with the first element (in tree order) with a [semantic role][] of `heading` within this section of content, if any.

**Note:** [Implicit sections of content][implicit section of content] are always associated with the element defining them. [Explicit][explicit section of content] and [visual sections of content][visual section of content] are associated with 0 or 1 heading.

**Note:** A heading may have several [sections of content][section of content] associated with it, even several of the same kind (explicit or visual).

**Note:** If the first heading is not located near the start of a [section of content][], this association will not necessarily be perceived by users.

**Note:** This association follows roughly the [algorithm for creating an outline][outline algorithm] and the similar association done in it.

[explicit section of content]: #explicit-section-of-content 'Definition of explicit section of content'
[heading]: https://www.w3.org/TR/wai-aria-1.1/#heading 'The heading role'
[implicit section of content]: #implicit-section-of-content 'Definition of implicit section of content'
[outline algorithm]: https://html.spec.whatwg.org/multipage/sections.html#outlines 'Definition of outline'
[programmatic section of content]: #programmatic-section-of-content 'Definition of programmatic section of content'
[section of content]: #section-of-content 'Definition of section of content'
[semantic role]: #semantic-role 'Definition of semantic role'
[visual section of content]: #visual-section-of-content 'Definition of visual section of content'

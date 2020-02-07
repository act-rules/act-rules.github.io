---
title: Programmatic section of content
key: programmatic-section-of-content
unambiguous: true
objective: true
---

A _programmatic section of content_ is either an [explicit section of content][] or an [implicit section of content][].

Programmatic sections of content may contain nested programmatic subsections of content.

Programmatic sections of content may have zero or one heading [associated][] with them.

**Note:** This definition roughly follows the [algorithm for creating an outline][outline algorithm], but using different elements for defining sections. The main focus is here on the [semantic role][] rather than the element itself, and all [landmark roles][landmark] are considered.

**Note:** When elements and roles are used according to their semantics, programmatic sections of content and [sections of content][] should match perfectly.

#### Assumption

- This definition assumes that the [semantic roles][semantic role] (including the level of headings) are used according to their semantics.
- This definition assumes that the `hgroup` element is not used.

[associated]: #heading-section-association 'Definition of association between headings and sections'
[explicit section of content]: #explicit-section-of-content 'Definition of explicit section of content'
[host]: https://dom.spec.whatwg.org/#concept-documentfragment-host 'Definition of host'
[implicit section of content]: #implicit-section-of-content 'Definition of implicit section of content'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark 'The landmark role'
[outline algorithm]: https://html.spec.whatwg.org/multipage/sections.html#outlines 'Definition of outline'
[sections of content]: #section-of-content 'Definition of section of content'
[semantic role]: #semantic-role 'Definition of semantic role'

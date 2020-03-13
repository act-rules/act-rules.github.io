---
title: Implicit section of content
key: implicit-section-of-content
unambiguous: true
objective: true
---

An _implicit section of content_ is all the nodes of the [flat tree][], in tree order, between an initial element with a [semantic role][] of [`heading`][heading] and the next element (in tree order) which has both a [semantic role][] of [`heading`][heading] and an [`aria-level`][aria-level] property lower or equal to that of the initial [`heading`][heading] element.

If a node inside an implicit section of content is a [browsing context container][], then the full content of the associated [nested browsing context][] is also included in this implicit section of content.

The heading defining an implicit section of content is always [associated][] with it.

**Note:** Heading level indicates nesting of subsections, the lower the level, the higher the rank of its section. Thus, a level 3 heading (for example, a `h3` element) defines an implicit section of content that stop at the next heading of level 1, 2, or 3; but includes subsections defined by headings of level 4, 5, and 6.

#### Assumptions for implicit section of content

- This definition assumes that the `hgroup` element is not used.

**Note:** The `hgroup` element, used to group headings, has no default role mapping ([HTML Accessibility API Mapping (work in progress)](https://www.w3.org/TR/html-aam-1.0/#details-id-48)). Furthermore, it was [deprecated in HTML 5.2](https://www.w3.org/TR/html52/dom.html#heading-content) (and [alternate way of marking up subheadings and alternate titles](https://www.w3.org/TR/html52/common-idioms-without-dedicated-elements.html#common-idioms-without-dedicated-elements) are provided) but [still exists in the WHATWG living standard](https://html.spec.whatwg.org/multipage/dom.html#heading-content). It is generally not well supported by Assistive Technologies and very rarely used. Its key purpose is to affect the [algorithm for creating an outline][outline algorithm] which is itself poorly supported by browsers. For all these reasons, it is left out of this definition.

- This definition assumes that [nested browsing contexts][nested browsing context] included in an implicit section of content do not contain any element with a role of `heading` and an `aria-level` lower or equal to the one of the `heading` defining this implicit section of content.

**Note:** In short, the content of `iframe` and similar elements is included in the section of content. If an `iframe` is part of a section of content implicitly defined by an `h2` element, but does contain an `h1` element, the definition will include everything in the `h2` implicit section of content and not close it upon reaching the `h1` element, resulting in improper sections being detected.

[aria-level]: https://www.w3.org/TR/wai-aria-1.1/#aria-level 'The aria-level property'
[associated]: #heading-section-association 'Definition of association between headings and sections'
[browsing context container]: https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-container 'Definition of browsing context container'
[explicit section of content]: #explicit-section-of-content 'Definition of explicit section of content'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[heading]: https://www.w3.org/TR/wai-aria-1.1/#heading 'The heading role'
[nested browsing context]: https://html.spec.whatwg.org/multipage/browsers.html#nested-browsing-context 'Definition of nested browsing context'
[outline algorithm]: https://html.spec.whatwg.org/multipage/sections.html#outlines 'Definition of outline'
[programmatic section of content]: #programmatic-section-of-content 'Definition of programmatic section of content'
[semantic role]: #semantic-role 'Definition of semantic role'

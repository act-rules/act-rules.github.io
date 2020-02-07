---
title: Programmatic section of content
key: programmatic-section-of-content
unambiguous: true
objective: true
---

A _programmatic section of content_ is either an [explicit section of content][] or an [implicit section of content][].

Programmatic sections of content may contain nested programmatic subsections of content.

Programmatic sections of content may have zero or one heading [associated][] with them.

**Note:** This definition roughly follows the [algorithm for creating an outline][outline algorithm], but using different elements for defining sections. The main focus is here on the [semantic role][] rather than the element itself, and all [landmark roles][landmark] are considered. Additionally, programmatic sections of content include content from [shadow trees][] and [nested browsing contexts][] which is ignored by the [algorithm for creating an outline][outline algorithm].

**Note:** When elements and roles are used according to their semantics, programmatic sections of content and [sections of content][] should match perfectly.

#### Assumption

- This definition assumes that the [semantic roles][semantic role] (including the level of headings) are used according to their semantics.
- This definition assumes that the `hgroup` element is not used.

#### Examples

**Note:** The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

This document is using landmarks to define its sections of content. They are all [explicit sections of content][]. None of them has any heading [associated][] to it.

```html
<header>This is the header section of content.</header>
<nav>This is the navigational section of content.</nav>
<aside id="advertisement">This is an advertisement banner section of content.</aside>
<main>This is the main section of content.</main>
<footer>This is the footer section of content</footer>
```

This document is using headings to define its sections of content. They are all [implicit sections of content][].

```html
<h1>Heading of Section 1</h1>
Content of Section 1.
<h2>Heading of section 1.1</h2>
Content of Section 1.1 and of Section 1.
<h2>Heading of Section 1.2</h2>
Content of Section 1.2 and of Section 1.
<h3>Headnig of Section 1.2.1</h3>
Content of Section 1.2.1, of Section 1.2 and of Section 1.
<h1>Heading of Section 2</h1>
<h2>Heading of Section 2.1</h2>
Content of Section 2.1 and of Section 2.
```

This document is using `section` elements to define its sections of content. They are all [explicit sections of content][]. Most of them has a heading [associated][] with it, and no heading defines an [implicit section of content][]. Note that the level of the headings match the level of the sections implied by the nesting of `section` elements. Note that a heading can be [associated][] with an [explicit section of content][] even if it is not the first element in it. Note that the [explicit section of content][] defined by the element with `id="1-3"` has no heading [associated][] with it because the first heading inside it also inside a nested subsection of content.

```html
<main id="1">
	<h1>Heading of Section 1</h1>
	Content of Section 1.
	<section id="1-1">Content of Section 1.1 and of Section 1.</section>
	<section id="1-2">
		Content of Section 1.2 and of Section 1.
		<h2>Heading of Section 1.2</h2>
		Content of Section 1.2 and of Section 1.
		<section id="1-2-1">
			<h3>Heading of Section 1.2.1</h3>
			Content of Section 1.2.1, of Section 1.2 and of Section 1.
		</section>
		Content of Section 1.2 and of Section 1.
	</section>
	<section id="1-3">
		Content of Section 1.3 and of Section 1.
		<section id="1-3-1">
			<h3>Heading of Section 1.3.1</h3>
			Content of Section 1.3.1, of Section 1.3, and of Section 1.
		</section>
	</section>
	Content of Section 1.
</main>
```

This document uses both headings and `section` elements to define its sections of content. Thus it has both [explicit sections of content][] and [implicit sections of content][]. Note that the `section` element with `id="1-2-1"` could **not** contain a `h1` or `h2` element without breaking the semantic of the `aria-level` property with respect to the level implied by nesting. Note that the [explicit section of content][] defined by the element with `id="1-3"` has no heading [associated][] with it because the first heading inside it also inside a nested subsection of content.

```html
<h1>Heading of Section 1</h1>
Content of Section 1.
<section id="1-1">
	<h2>Heading of Section 1.1</h2>
	Content of Section 1.1 and of Section 1.
</section>
<section id="1-2">
	<h2>Heading of Section 1.2</h2>
	Content of Section 1.2 and of Section 1.
	<section id="1-2-1">
		<h3>Heading of Section 1.2.1</h3>
		<h3>Heading of Section 1.2.2</h3>
		<h4>Heading of Section 1.2.2.1</h4>
	</section>
</section>
<section id="1-3">
	Content of Section 1.3 and of Section 1.
	<section id="1-3-1">
		<h3>Heading of Section 1.3.1</h3>
		Content of Section 1.3.1, of Section 1.3, and of Section 1.
	</section>
	<h2>Heading of Section 1.4</h2>
	Content of Section 1.4 and of Section 1.
</section>
Content of Section 1.
```

[associated]: #heading-section-association 'Definition of association between headings and sections'
[explicit section of content]: #explicit-section-of-content 'Definition of explicit section of content'
[explicit sections of content]: #explicit-section-of-content 'Definition of explicit section of content'
[implicit section of content]: #implicit-section-of-content 'Definition of implicit section of content'
[implicit sections of content]: #implicit-section-of-content 'Definition of implicit section of content'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark 'The landmark role'
[nested browsing contexts]: https://html.spec.whatwg.org/multipage/browsers.html#nested-browsing-context 'Definition of nested browsing context'
[outline algorithm]: https://html.spec.whatwg.org/multipage/sections.html#outlines 'Definition of outline'
[sections of content]: #section-of-content 'Definition of section of content'
[semantic role]: #semantic-role 'Definition of semantic role'
[shadow trees]: https://dom.spec.whatwg.org/#shadow-trees 'Definition of shadow trees'

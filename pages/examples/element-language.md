---
title: Examples of Common and Default Language of an Element
---

These are examples of the definitions for [most common language][] of an element and [default language][] of a page. The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

## One Language

This `p` element has a most common language of English because all words in it are English words.

```html
<p>
	The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test rules.
</p>
```

## Two Languages

This `p` element has a most common language of English because only one word is not English.

```html
<p>The Dutch word "gelukkig" has no equivalent in English.</p>
```

## Ignored Ancestors

This `span` element has a most common language of Dutch because the text in the parent `p` element is not part of the [text inheriting its programmatic language][] from it.

```html
<p>The Dutch word "<span>gelukkig</span>" has no equivalent in English.</p>
```

## Ignored Descendants

This `div` element has a most common language of Dutch because the second `p` element is not one of the [elements inheriting their programmatic language][] from it due to its own `lang` attribute. Hence the English words are ignored when looking for the language of the `div` element.

```html
<div>
	<p>"Hij ging met de kippen op stok"</p>
	<p lang="en">
		This Dutch phrase literally translates into "He went to roost with the chickens", but it means that he went to bed
		early.
	</p>
</div>
```

## Title

This `html` element has a most common language of English. Since it is a [document element][], its `title` attribute is taken into account. Therefore, this page also has a default language of English.

```html
<html title="I love ACT rules"></html>
```

## Referenced Elements

This `div` element has a most common language of English. The only [element inheriting its programmatic language][] from it is the `img` (because the `p` element has a `lang` attribute of its own), but the full accessible name of it is taken into account. Assistive Technologies usually ignore `lang` attributes on elements that are used to compute accessible names.

```html
<div>
	<img src="/test-assets/shared/fireworks.jpg" aria-labelledby="caption" />
	<p lang="en" id="caption" hidden>
		Fireworks over Paris!
	</p>
</div>
```

## No Words

This `div` element has no most common language because it has no words in it. The only [element inheriting its programmatic language][] from it is the `img` which has no text node children and no accessible name.

```html
<div>
	<img src="/test-assets/shared/fireworks.jpg" alt="" />
	<p lang="en">
		I have seen fireworks over Paris!
	</p>
</div>
```

## Ambiguous Words

This `p` element has two most common languages because its words (and the sentence) are both English and French. Therefore, this page has no default language since there is no unique most common language.

```html
<html>
	<p>Paul put dire comment on tape</p>
</html>
```

## Nested Browsing Contexts

This `div` element has a most common language of English. The content of the `iframe` element is taken into account because the `iframe` will be rendered as if it's part of the same page. Note that `iframe` are intended to provide a layer of isolation (for privacy and security reasons), so it is not clear whether the outer `lang` attribute is inherited inside it or not. It is clear, however, that the `span` element will not inherit it and therefore it is not considered when figuring out the most common language of the `div` element.

```html
<div lang="en">
	<iframe srcdoc="
	<p>This is an English paragraph. <span lang="fr">Il contient une phrase française.</span></p>
	"
</div>
```

[most common language]: /glossary/#most-common-element-language 'Definition of Common Language of an Element'
[default language]: /glossary/#default-page-language 'Definition of Default Page Language'
[document element]: https://dom.spec.whatwg.org/#document-element 'DOM definition of Document Element'
[element inheriting its programmatic language]: /glossary/#text-inheriting-language 'Definition of Element Inheriting its Programmatic Language From an Element'
[elements inheriting their programmatic language]: /glossary/#text-inheriting-language 'Definition of Elements Inheriting their Programmatic Language from an Element'
[text inheriting its programmatic language]: /glossary/#text-inheriting-language 'Definition of Text Inheriting its Programmatic Language from an Element'

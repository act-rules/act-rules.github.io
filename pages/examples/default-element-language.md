---
title: Examples of Default Element Language
---

These are examples of the [default element language][] definition. The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

## One Language

This `p` element has a default language of English because all words in it are English words.

```html
<p>
	The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test rules.
</p>
```

## Two Languages

This `p` element has a default language of English because English is the _most common language_ of the words (only one word is not English). This element has no unique language because one of the word is not English.

```html
<p>The Dutch word "gelukkig" has no equivalent in English.</p>
```

## Ignored Ancestors

This `span` element has a default language of Dutch because the text in the parent `p` element is not part of its [text with the same programmatic language][].

```html
<p>The Dutch word "<span>gelukkig</span>" has no equivalent in English.</p>
```

## Ignored Descendants

This `div` element has a default language of Dutch because the second `p` element is not one of the [elements with the same programmatic language][] due to its own `lang` attribute. Hence the English words are ignored when looking for the default language of the `div` element.

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

This `html` element has a default language of English. Since it is a [document element][], its `title` attribute is taken into account.

```html
<html title="I love ACT rules"></html>
```

## Referenced Elements

This `div` element has a default language of English. The only [element with the same programmatic language][] is the `img` (because the `p` element has a `lang` attribute of its own), but the full accessible name of it is taken into account. Assistive Technologies usually ignore `lang` attributes on elements that are used to compute accessible name.

```html
<div>
	<img src="/test-assets/shared/fireworks.jpg" aria-labelledby="caption" />
	<p lang="en" id="caption" hidden>
		Fireworks over Paris!
	</p>
</div>
```

## No Words

This `div` element has no default language because it has no words in it. The only [element with the same programmatic language][] is the `img` which has no text node children and no accessible name.

```html
<div>
	<img src="/test-assets/shared/fireworks.jpg" alt="" />
	<p lang="en">
		I have seen fireworks over Paris!
	</p>
</div>
```

## Ambiguous Words

This `p` element has no default language because its words (and the sentence) are both English and French, thus no language is the _most common language_. The sentence has meaning both in English and French… This element has two unique languages, English and French, because all its words are part of both languages.a

```html
<p>Paul put dire comment on tape</p>
```

[default element language]: /glossary/#element-language 'Definition of Default Element Language'
[document element]: https://dom.spec.whatwg.org/#document-element 'DOM definition of Document Element'
[element with the same programmatic language]: /glossary/#text-same-language 'Definition of Elements With the Same Programmatic Language'
[elements with the same programmatic language]: /glossary/#text-same-language 'Definition of Elements With the Same Programmatic Language'
[text with the same programmatic language]: /glossary/#text-same-language 'Definition of Text With the Same Programmatic Language'

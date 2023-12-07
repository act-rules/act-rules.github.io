---
id: ucwvc8
name: HTML page language subtag matches default language
rule_type: atomic
description: |
  This rule checks that the primary language subtag of the page language matches the default language of the page
accessibility_requirements:
  wcag20:3.1.1: # Language of Page (A)
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
  wcag-technique:H57: # Using the language attribute on the HTML element
    forConformance: false
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
input_aspects:
  - DOM tree
  - Accessibility tree
  - CSS Styling
  - Language
acknowledgments:
  authors:
    - Wilco Fiers
  funding:
    - WAI-Tools
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # using aria-labelledby instead
  - 'alt-require'
---

## Applicability

This rule applies to any [document element][] if it is an `html` element for which all of the following are true:

- The [document element][] has a `lang` attribute with a value that has a [known primary language tag][]; and
- The [document element][] is in a [top-level browsing context][]; and
- The [document element][] has a [content type][] of `text/html`; and
- The [document element][] has a defined [default page language][].

## Expectation

For each test target, the [known primary language tag][] of its `lang` attribute matches the [default page language][] of the test target.

## Assumptions

- This rule assumes that the default human language of a page, as described in WCAG 2, can be determined by counting the number of words used in each language. If the default language needs to be derived in some other way (such as frequency analysis, mutual information based distance, …), this rule may fail while [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG22/#language-of-page) is still satisfied.

- The language of the page can be set by other methods than the `lang` attribute, for example using HTTP headers or the `meta` element. These methods are not supported by all assistive technologies. This rule assumes that these other methods are insufficient to satisfying [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG22/#language-of-page).

- This rule assumes that user agents and assistive technologies can programmatically determine [known primary language tags][known primary language tag] even if these do not conform to the [RFC 5646][] syntax.

- This rule assumes that only [known primary language tags][known primary language tag] are enough to satisfy [Success Criterion 3.1.1 Language of Page][sc311]; this notably excludes [grandfathered tags][] and [ISO 639.2][] three-letters codes, both having poor support in assistive technologies.

- This rule assumes that `iframe` title elements are not exposed to assistive technologies and so does not consider them as part of the [default page language][].

## Accessibility Support

There are no accessibility support issues known.

## Background

### Related rules

- [HTML page has `lang` attribute](https://www.w3.org/WAI/standards-guidelines/act/rules/b5c3f8/)
- [HTML page `lang` attribute has valid language tag](https://www.w3.org/WAI/standards-guidelines/act/rules/bf051a/)

### Bibliography

- [Understanding Success Criterion 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)
- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG22/Techniques/html/H57)
- [RFC 5646: Tags for Identifying Languages](https://www.rfc-editor.org/rfc/rfc5646.html)
- [The `lang` and `xml:lang` attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)

## Test Cases

### Passed

#### Passed Example 1

This page has a `lang` [attribute value][] of `en` (English), which matches the [default language of the page][default page language]. The default language is English because all words are English.

```html
<html lang="en">
	<head>
		<title>ACT Rules Format 1.0 - Abstract</title>
	</head>
	<body>
		<p>
			The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test
			rules. These test rules can be used for developing automated testing tools and manual testing methodologies. It
			provides a common format that allows any party involved in accessibility testing to document and share their
			testing procedures in a robust and understandable manner. This enables transparency and harmonization of testing
			methods, including methods implemented by accessibility test tools.
		</p>
	</body>
</html>
```

#### Passed Example 2

This page has a `lang` attribute value of `en` (English), which matches the [default language of the page][default page language]. The default language is English because all but a few words are English.

```html
<html lang="EN">
	<head>
		<title>Gelukkig</title>
	</head>
	<body>
		<p>The Dutch word "gelukkig" has no equivalent in English.</p>
	</body>
</html>
```

#### Passed Example 3

This page has `lang` attribute value of `nl` (Dutch), which matches the [default language of the page][default page language]. The default language is Dutch because all English words are in a `p` element with a `lang` attribute value of `en`.

```html
<html lang="nl">
	<head>
		<title>Met de kippen op stok</title>
	</head>
	<body>
		<blockquote>
			<p>"Hij ging met de kippen op stok"</p>
		</blockquote>
		<p lang="en">
			This Dutch phrase literally translates into "He went to roost with the chickens", but it means that he went to bed
			early.
		</p>
	</body>
</html>
```

#### Passed Example 4

This page has a `lang` attribute value of `en` (English), which matches the [default language of the page][default page language]. The default language is English because the accessible texts are English, and all other text is in a `p` element with a `lang` attribute value of `nl`.

```html
<html lang="en">
	<head>
		<title>Fireworks over Paris</title>
	</head>
	<body>
		<img src="/test-assets/shared/fireworks.jpg" alt="Fireworks over Paris" />
		<p lang="nl">
			Gelukkig nieuwjaar!
		</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

This page has a `lang` attribute value of `da` (Danish), which does not match the [default language of the page][default page language]. The default language is English because all words are English.

```html
<html lang="da">
	<head>
		<title>ACT Rules Format 1.0 - Abstract</title>
	</head>
	<body>
		<p>
			The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test
			rules. These test rules can be used for developing automated testing tools and manual testing methodologies. It
			provides a common format that allows any party involved in accessibility testing to document and share their
			testing procedures in a robust and understandable manner. This enables transparency and harmonization of testing
			methods, including methods implemented by accessibility test tools.
		</p>
	</body>
</html>
```

#### Failed Example 2

This page has a `lang` attribute value of `nl` (Dutch), which does not match the [default language of the page][default page language]. The default language is English because all but a few words are English.

```html
<html lang="nl">
	<head>
		<title>Gelukkig</title>
	</head>
	<body>
		<p>The Dutch word "gelukkig" has no equivalent in English.</p>
	</body>
</html>
```

#### Failed Example 3

This page has a `lang` attribute value of `en` (English), which does not match the [default language of the page][default page language]. The default language is Dutch because all English words are in a `p` element with a `lang` attribute value of `en`.

```html
<html lang="en">
	<head>
		<title>Met de kippen op stok</title>
	</head>
	<body>
		<blockquote>
			<p>"Hij ging met de kippen op stok"</p>
		</blockquote>
		<p lang="en">
			This Dutch phrase literally translates into "He went to roost with the chickens", but it means that he went to bed
			early.
		</p>
	</body>
</html>
```

#### Failed Example 4

This page has a `lang` attribute value of `nl` (Dutch), which does not match the [default language of the page][default page language]. The default language is English because the accessible texts are English, and all other text is in a `p` element with a `lang` attribute value of `nl`.

```html
<html lang="nl">
	<head>
		<title>Fireworks over Paris</title>
	</head>
	<body>
		<img src="/test-assets/shared/fireworks.jpg" alt="Fireworks over Paris" />
		<p lang="nl">
			Gelukkig nieuwjaar!
		</p>
	</body>
</html>
```

#### Failed Example 5

This page has a `lang` attribute value of `nl` (Dutch), which does not match the [default language of the page][default page language]. The default language is English because the accessible name of the `img` element is English. The `lang` attribute on the `p` element is effectively ignored.

```html
<html lang="nl">
	<head>
		<title>Paris</title>
	</head>
	<body>
		<img src="/test-assets/shared/fireworks.jpg" aria-labelledby="caption" />
		<p lang="en" id="caption" hidden>
			Fireworks over Paris!
		</p>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This is an SVG [document][document element], not an HTML document.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="fr"></svg>
```

#### Inapplicable Example 2

This page has an undefined [default language][default page language] because it has no content or [document title][].

```html
<html></html>
```

#### Inapplicable Example 3

This page has an undefined [default language][default page language] because it has no [document title][] and all its content is wrapped in an element with a `lang` attribute.

```html
<html>
	<p lang="en">
		The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test rules.
		These test rules can be used for developing automated testing tools and manual testing methodologies. It provides a
		common format that allows any party involved in accessibility testing to document and share their testing procedures
		in a robust and understandable manner. This enables transparency and harmonization of testing methods, including
		methods implemented by accessibility test tools.
	</p>
</html>
```

#### Inapplicable Example 4

This page has an undefined [default language][default page language] because it can either be English or French.

```html
<html lang="fr">
	<head>
		<title>Paul put dire comment on tape</title>
	</head>
	<body>
		<p>Paul put dire comment on tape</p>
	</body>
</html>
```

#### Inapplicable Example 5

The `lang` [attribute value][] of this page is an [iso 639.2][] three letters code, hence has no [known primary language tag][].

```html
<html lang="eng">
	<body>
		<p lang="en">I love ACT rules!</p>
	</body>
</html>
```

#### Inapplicable Example 6

The `lang` [attribute value][] of this page is a [grandfathered tag][grandfathered tags], hence has no [known primary language tag][].

```html
<html lang="i-lux">
	<body>
		<p lang="lb">Lëtzebuerg ass e Land an Europa.</p>
	</body>
</html>
```

[attribute value]: #attribute-value
[content type]: https://dom.spec.whatwg.org/#concept-document-content-type 'DOM content type, as of 2020/06/05'
[default page language]: #default-page-language
[document element]: https://dom.spec.whatwg.org/#document-element 'DOM document element, as of 2020/06/05'
[document title]: https://html.spec.whatwg.org/multipage/dom.html#document.title 'HTML document title, as of 2020/06/05'
[grandfathered tags]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.8
[iso 639.2]: https://www.loc.gov/standards/iso639-2/php/code_list.php 'ISO 639.2: Codes for the Representation of Names of Languages'
[rfc 5646]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[sc311]: https://www.w3.org/TR/WCAG22/#language-of-page 'Success Criterion 3.1.1 Language of Page'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'HTML top-level browsing context, as of 2020/06/05'
[known primary language tag]: #known-primary-language-tag

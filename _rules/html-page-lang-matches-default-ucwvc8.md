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
---

## Applicability

This rule applies to any [document element][] if it is an `html` element for which all of the following are true:

- The [document element][] has a `lang` attribute with a value that is a [valid language tag][]; and
- The [document element][] is in a [top-level browsing context][]; and
- The [document element][] has a [content type][] of `text/html`; and
- The [document element][] has a defined [default page language][].

## Expectation

For each test target, the [primary language][] of the [valid language tag][] matches the [default page language][] of the test target.

## Assumptions

- The way to determine the default language of a page should be done by counting the number of visible words used in each language. If the default language needs to be derived in some other way, this rule may produce incorrect results.

- The language of the page can be set by other methods than the `lang` attribute, for example using HTTP headers or the `meta` element. These methods are not supported by all assistive technologies. This rule assumes that these other methods are insufficient to satisfying [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page).

- This rule assumes that user agents and assistive technologies can programmatically determine [valid language tags](#valid-language-tag) even if these do not conform to the [BCP 47][] syntax.

- This rule assumes that [grandfathered tags][] are not used as these will not be recognized as [valid language tags](#valid-language-tag).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)
- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [The `lang` and `xml:lang` attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)

## Test Cases

### Passed

#### Passed Example 1

This page has a [default language][default page language] of English, which matches the language indicated in the `lang` attribute.

```html
<!DOCTYPE html>
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

This page has a [default language][default page language] of English because most words are English. The [default page language][] matches the language indicated in the `lang` attribute.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Gelukkig</title>
	</head>
	<body>
		<p>The Dutch word "gelukkig" has no equivalent in English.</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

This page has a [default language][default page language] of English, which is not the language indicated in the `lang` attribute.

```html
<!DOCTYPE html>
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

This page has a [default language][default page language] of English because most words are English. This does not match the language indicated in the `lang` attribute.

```html
<!DOCTYPE html>
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

This page has a [default language][default page language] of Dutch because all English text is wrapped in a `p` element with a `lang` attribute set to `en`. Dutch ("nl") is not set as the language of the page by the `lang` attribute on the `html` element.

```html
<!DOCTYPE html>
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

### Inapplicable

#### Inapplicable Example 1

This page has an undefined [default language][default page language] because it has no content or [document title][].

```html
<!DOCTYPE html>
<html></html>
```

#### Inapplicable Example 2

This is an SVG [document][document element], not an HTML document.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="fr"></svg>
```

#### Inapplicable Example 3

This page has an undefined [default language][default page language] because it has no [document title][] all its content is wrapped in element with a `lang` attribute.

```html
<!DOCTYPE html>
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

In page has an undefined [default language][default page language] because it can either be English or French.

```html
<!DOCTYPE html>
<html lang="fr">
	<head>
		<title>Paul put dire comment on tape</title>
	</head>
	<body>
		<p>Paul put dire comment on tape</p>
	</body>
</html>
```

[valid language tag]: #valid-language-tag
[default page language]: #default-page-language
[primary language]: https://tools.ietf.org/html/bcp47#section-2.2.1 'Definition of primary language subtag'
[grandfathered tags]: https://tools.ietf.org/html/bcp47#section-2.2.8
[bcp 47]: https://tools.ietf.org/html/bcp47#section-2.1
[document element]: https://dom.spec.whatwg.org/#document-element 'DOM document element, as of 2020/06/05'
[node document]: https://dom.spec.whatwg.org/#concept-node-document 'DOM node document, as of 2020/06/05'
[content type]: https://dom.spec.whatwg.org/#concept-document-content-type 'DOM content type, as of 2020/06/05'
[document title]: https://html.spec.whatwg.org/multipage/dom.html#document.title 'HTML document title, as of 2020/06/05'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'HTML top-level browsing context, as of 2020/06/05'

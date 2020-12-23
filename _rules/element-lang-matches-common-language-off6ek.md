---
id: off6ek
name: HTML element language subtag matches language
rule_type: atomic
description: |
  This rule checks that the primary language subtag of an element matches its language
accessibility_requirements:
  wcag20:3.1.2: # Language of Parts (AA)
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
  wcag-technique:H58: # Using language attributes to identify changes in the human language
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
    - Jean-Yves Moyen
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # using aria-labelledby instead
  - 'alt-require'
---

## Applicability

This rule applies to any HTML element for which all the following are true:

- the element is an [inclusive descendant][] in the [flat tree][] of a `body` element; and
- The element is in a [top-level browsing context][]; and
- The element is in a [document][] with a [content type][] of `text/html`; and
- The element has a `lang` [attribute value][] which is a [valid language tag][]; and
- The element has some non-empty [text with the same programmatic language][].

## Expectation

For each test target, the [primary language][] of the [valid language tag][] is a [common language][] of the test target.

## Assumptions

- This rule assumes that user agents and assistive technologies can programmatically determine [valid language tags][] even if these do not conform to the [BCP 47][] syntax.

- This rule assumes that [grandfathered tags][] are not used as these will not be recognized as [valid language tags][].

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

This rule ignores elements that are nested inside `iframe`. `iframe` are intended to provide a layer of isolation, and it is not clear how language is inherited in nested browsing contexts. Incorrect `lang` attribute inside `iframe` are still likely to cause accessibility issues even though this rule won't flag them.

- Related rule:
  - [_Element with `lang` Attribute Has Valid Language Tag_](https://act-rules.github.io/rules/de46e4)
- [Understanding Success Criterion 3.1.2: Language of Page][usc312]
- [H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG21/Techniques/html/H58)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [The `lang` and `xml:lang` attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)

In all examples, the `html` element has itself a `lang` attribute in order to make sure that the examples do not fail [Success Criterion 3.1.1 Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page). These `html` elements are, however, never applicable because they are not descendants of a `body` element, and the example descriptions do not mention them further.

## Test Cases

### Passed

#### Passed Example 1

This `span` element has a `lang` [attribute value][] of `nl` (Dutch), which matches its [common language][]. The common language is Dutch because all words are Dutch.

```html
<html lang="en">
	<head>
		<title>Dutch idioms</title>
	</head>
	<body>
		<p>
			The Dutch phrase <span lang="nl">"Hij ging met de kippen op stok"</span> literally translates into "He went to
			roost with the chickens", but it means that he went to bed early.
		</p>
	</body>
</html>
```

#### Passed Example 2

The second `p` element has `lang` attribute value of `nl` (Dutch), which matches its [common language][]. The common language is Dutch because all English words are in `span` elements with a `lang` attribute value of `en`. Both `span` elements also have a `lang` attribute matching their common language.

```html
<html lang="en">
	<head>
		<title>Dutch idioms</title>
	</head>
	<body>
		<p>Dutch idioms and their English meaning.</p>
		<p lang="nl">
			<span lang="en">The Dutch phrase</span> "Hij ging met de kippen op stok"
			<span lang="en"
				>literally translates into "He went to roost with the chickens", but it means that he went to bed early.</span
			>
		</p>
	</body>
</html>
```

#### Passed Example 3

This `div` element has a `lang` [attribute value][] of `en` (English), which matches its [common language][]. The common language is English because the accessible texts are English, and all other text is in a `p` element with a (correct) `lang` attribute value of `fr`.

```html
<html lang="fr">
	<head>
		<title>Feu d'artifice du nouvel an</title>
	</head>
	<body>
		<div lang="en">
			<img src="/test-assets/shared/fireworks.jpg" alt="Fireworks over Paris" />
			<p lang="fr">
				Bonne année !
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 4

These `p` element both have a `lang` [attribute value][] that match one of their [common language][]. Even though it is the same sentence, each of its words can be either English or French and thus both languages are a common language of the element. The sentence does have meaning in both languages.

```html
<html lang="en">
	<body>
		<p lang="en">Paul put dire comment on tape.</p>
		<p lang="fr">Paul put dire comment on tape.</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

This `span` element has `lang` attribute value of `fr` (French), which does not matches its [common language][]. The common language is Dutch because all words are Dutch.

```html
<html lang="en">
	<head>
		<title>Dutch idioms</title>
	</head>
	<body>
		<p>
			The Dutch phrase <span lang="fr">"Hij ging met de kippen op stok"</span> literally translates into "He went to
			roost with the chickens", but it means that he went to bed early.
		</p>
	</body>
</html>
```

#### Failed Example 2

The second `p` element has a `lang` [attribute value][] of `en` (English), which does not match its [common language][]. The element has no common language because it mixes words from Dutch and English.

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
			The Dutch phrase "Hij ging met de kippen op stok" literally translates into "He went to roost with the chickens",
			but it means that he went to bed early.
		</p>
	</body>
</html>
```

#### Failed Example 3

The second `p` element has `lang` attribute value of `en` (English), which does not matches its [common language][]. The common language is Dutch because all English words are in `span` elements with a `lang` attribute value of `fr`. Both `span` elements also have an incorrect `lang` attribute in order to make sure that all targets in this example fail the rule.

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
			<span lang="fr">The Dutch phrase</span> "Hij ging met de kippen op stok"
			<span lang="fr"
				>literally translates into "He went to roost with the chickens", but it means that he went to bed early.</span
			>
		</p>
	</body>
</html>
```

#### Failed Example 4

This `div` element has a `lang` attribute value of `fr` (French), which does not match its [common language][]. The common language is English because the accessible texts are English, and all other text is in a `p` element with a `lang` attribute value of `nl`, which also doesn't match its common language.

```html
<html lang="fr">
	<head>
		<title>Feu d'artifice du nouvel an</title>
	</head>
	<body>
		<div lang="fr">
			<img src="/test-assets/shared/fireworks.jpg" alt="Fireworks over Paris" />
			<p lang="nl">
				Bonne année !
			</p>
		</div>
	</body>
</html>
```

#### Failed Example 5

This `div` element has a `lang` attribute value of `fr` (French), which does not match its [common language][]. The common language is English because the accessible name of the `img` element is English. The `lang` attribute on the `p` element is effectively ignored. The `p` element is not applicable because it has no [text with the same programmatic language][] since its content is neither [visible][] nor [included in the accessibility tree][].

```html
<html lang="fr">
	<head>
		<title>Feu d'artifice du nouvel an</title>
	</head>
	<body>
		<div lang="fr">
			<img src="/test-assets/shared/fireworks.jpg" aria-labelledby="caption" />
			<p lang="en" id="caption" hidden>
				Fireworks over Paris
			</p>
		</div>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

There are no HTML elements in this document.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="en">
    <text x="0" y="0">I love ACT rules!</text>
</svg>
```

#### Inapplicable Example 2

There is no descendant of a `body` element with a `lang` attribute.

```html
<html lang="en">
	<body>
		<p>I love ACT rules!</p>
	</body>
</html>
```

#### Inapplicable Example 3

This `p` element is not in a [top-level browsing context][].

```html
<html lang="en">
	<body>
		<iframe srcdoc="<p lang='en'>I love ACT rules!</p>" />
	</body>
</html>
```

#### Inapplicable Example 4

This `p` element has an invalid language tag.

```html
<html lang="en">
	<body>
		<p lang="français">
			I love ACT rules!
		</p>
	</body>
</html>
```

#### Inapplicable Example 5

The first `p` element has a no [text with the same programmatic language][] because it has no content.

```html
<html lang="en">
	<body>
		<p lang="fr"></p>
		<p>I love ACT rules!</p>
	</body>
</html>
```

#### Inapplicable Example 6

This `p` element has a no [text with the same programmatic language][] because it has no content that is either [visible][] or [included in the accessibility tree][].

```html
<html lang="en">
	<body>
		<p lang="fr" hidden>I love ACT rules!</p>
	</body>
</html>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[bcp 47]: https://tools.ietf.org/html/bcp47#section-2.1
[content type]: https://dom.spec.whatwg.org/#concept-document-content-type 'DOM definition of Content Type'
[document]: https://dom.spec.whatwg.org/#document-element 'DOM definition of Document Element'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping definition of Flat tree, working draft'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive descendant]: https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant 'DOM definition of Inclusive Descendant'
[grandfathered tags]: https://tools.ietf.org/html/bcp47#section-2.2.8
[primary language]: https://tools.ietf.org/html/bcp47#section-2.2.1 'Definition of primary language subtag'
[text with the same programmatic language]: #text-same-language 'Definition of Text With the Same Programmatic Language'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'HTML definition of Top-Level Browsing Context'
[common language]: #common-element-language 'Definition of Common Language of an Element'
[usc312]: https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html 'Understanding Success Criterion 3.1.2: Language of Parts'
[valid language tag]: #valid-language-tag 'Definition of Valid Language Tag'
[valid language tags]: #valid-language-tag 'Definition of Valid Language Tag'
[visible]: #visible 'Definition of Visible'

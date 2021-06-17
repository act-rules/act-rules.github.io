---
id: de46e4
name: Element with `lang` attribute has valid language tag
rule_type: atomic
description: |
  This rule checks that a non-empty `lang` attribute of an element in the page has a language tag with a known primary language subtag.
accessibility_requirements:
  wcag20:3.1.2: # Language of Parts (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:H58: # Using language attributes to identify changes in the human language
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - CSS Styling
  - DOM Tree
acknowledgments:
  authors:
    - Bryn Anderson
    - Jey Nandakumar
---

## Applicability

This rules applies to any HTML element with a `lang` [attribute value][] that is not empty (`""`) and for which all of the following is true:

- **descendant**: the element is an [inclusive descendant][] in the [flat tree][] of a `body` element; and
- **content type**: the element has an associated [node document][] with a [content type][] of `text/html`; and
- **text**: there is some non-empty [text inheriting its programmatic language][] from the element.

## Expectation

For each test target, the `lang` [attribute value][] is a [valid language tag][].

## Assumptions

- This rule assumes that the `lang` [attribute value][] is used to indicate the language of a section of the content. If the `lang` [attribute value][] is used for something else (for example to indicate the programming language of a `code` element), the content may still conform to WCAG despite failing this rule.

- This rule assumes that user agents and assistive technologies can programmatically determine [valid language tags](#valid-language-tag) even if these do not conform to the [BCP 47][] syntax.

- This rule assumes that only [valid language tags][valid language tag] are enough to satisfy [Success Criterion 3.1.2 Language of Parts][sc312]; this notably excludes [grandfathered tags][] or [ISO 639.2][] three-letters codes, both having poor support in assistive technologies.

## Accessibility Support

There are differences in how assistive technologies handle unknown and invalid language tags. Some will default to the language of the page, whereas others will default to the closest ancestor with a valid lang attribute.

## Background

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG21/Techniques/html/H58)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [Understanding Success Criterion 3.1.2: Language of Parts](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts)

## Test Cases

### Passed

#### Passed Example 1

This `article` element has a `lang` [attribute value][] which is not empty (`""`) and has a [valid language tag][].

```html
<html>
	<body>
		<article lang="en">
			They wandered into a strange Tiki bar on the edge of the small beach town.
		</article>
	</body>
</html>
```

#### Passed Example 2

This `blockquote` element has a `lang` [attribute value][] which is not empty (`""`) and has a [valid language tag][]. The region section in the value is ignored by the rule (and the definition of [valid language tag][]).

```html
<html>
	<body>
		<blockquote lang="fr-CH">
			Ils ont trouvé un étrange bar Tiki aux abords de la petite ville balnéaire.
		</blockquote>
	</body>
</html>
```

#### Passed Example 3

This `p` element has a `lang` [attribute value][] which has a [valid language tag][], but a syntactically invalid region subtag which is ignored by the rule.

```html
<html>
	<body>
		<p lang="en-US-GB">
			They wandered into a strange Tiki bar on the edge of the small beach town.
		</p>
	</body>
</html>
```

#### Passed Example 4

This `div` element has a valid `lang` [attribute value][]. There is no [text inheriting its programmatic language][] from the `article` element, therefore its `lang` attribute is not considered by the rule.

```html
<html>
	<body>
		<article lang="invalid">
			<div lang="en">
				They wandered into a strange Tiki bar on the edge of the small beach town.
			</div>
		</article>
	</body>
</html>
```

#### Passed Example 5

This `div` element has a valid `lang` [attribute value][]. The [accessible name][] of the image is [text inheriting its programmatic language][] from the `div` element.

```html
<html>
	<body>
		<div lang="en">
			<img src="/test-assets/shared/fireworks.jpg" alt="Fireworks over Paris" />
		</div>
	</body>
</html>
```

### Failed

#### Failed Example 1

This `article` element has a `lang` [attribute value][] which does not have a [valid language tag][] because its primary language subtag does not exist in the registry.

```html
<html>
	<body>
		<article lang="dutch">
			Zij liepen een vreemde Tiki bar binnen, aan de rand van een dorpje aan het strand.
		</article>
	</body>
</html>
```

#### Failed Example 2

This `article` element has a `lang` [attribute value][] which is not a [valid language tag][].

```html
<html>
	<body>
		<article lang="#!">
			They wandered into a strange Tiki bar on the edge of the small beach town.
		</article>
	</body>
</html>
```

#### Failed Example 3

This `article` element has a `lang` [attribute value][] which consists of only [whitespace][] and thus is not a [valid language tag][].

```html
<html>
	<body>
		<article lang="  ">
			They wandered into a strange Tiki bar on the edge of the small beach town.
		</article>
	</body>
</html>
```

#### Failed Example 4

The `lang` [attribute value][] does not have a valid language tag. The `lang` attribute must be valid because the content is [visible][].

```html
<html>
	<body>
		<article lang="english">
			<p aria-hidden="true">
				They wandered into a strange Tiki bar on the edge of the small beach town.
			</p>
		</article>
	</body>
</html>
```

#### Failed Example 5

The `lang` [attribute value][] does not have a valid language tag, and its [descendant][] is not [visible][] though it is still [included in the accessibility tree][].

```html
<html>
	<body>
		<article lang="English">
			<p style="position: absolute; top: -9999px">
				They wandered into a strange Tiki bar on the edge of the small beach town.
			</p>
		</article>
	</body>
</html>
```

#### Failed Example 6

This `div` element has an invalid `lang` [attribute value][]. There is no [text inheriting its programmatic language][] from the `article` element, therefore its `lang` attribute is not considered by the rule.

```html
<html>
	<body>
		<article lang="en">
			<div lang="invalid">
				They wandered into a strange Tiki bar on the edge of the small beach town.
			</div>
		</article>
	</body>
</html>
```

#### Failed Example 7

This `div` element has an invalid `lang` [attribute value][]. The [accessible name][] of the image is [text inheriting its programmatic language][] from the `div` element.

```html
<html>
	<body>
		<div lang="invalid">
			<img src="/test-assets/shared/fireworks.jpg" alt="Fireworks over Paris" />
		</div>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

There is no element with a lang attribute value which is a descendant of a body element".

```html
<html lang="en">
	<body>
		They wandered into a strange Tiki bar on the edge of the small beach town.
	</body>
</html>
```

#### Inapplicable Example 2

There is no element which is a descendant of a `body` element and has a non-empty `lang` [attribute value][].

```html
<html lang="en">
	<body>
		<article lang="">
			They wandered into a strange Tiki bar on the edge of the small beach town.
		</article>
	</body>
</html>
```

#### Inapplicable Example 3

There is no element with a [text node][] as a [descendant][] in the [flat tree][] that is either [visible][] or [included in the accessibility tree][].

```html
<html lang="en">
	<body>
		<p lang="hidden">
			<span style="display: none;">
				They wandered into a strange Tiki bar on the edge of the small beach town.
			</span>
		</p>
	</body>
</html>
```

#### Inapplicable Example 4

There is no [text inheriting its programmatic language][] from this `div` element.

```html
<html>
	<body>
		<div lang="invalid">
			<img src="/test-assets/shared/fireworks.jpg" alt="" />
		</div>
	</body>
</html>
```

[accessible name]: #accessible-name 'Definition of Accessible Name'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[bcp 47]: https://tools.ietf.org/html/bcp47#section-2.1
[content type]: https://dom.spec.whatwg.org/#concept-document-content-type
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree
[grandfathered tags]: https://tools.ietf.org/html/bcp47#section-2.2.8
[included in the accessibility tree]: #included-in-the-accessibility-tree
[inclusive descendant]: https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant 'DOM definition of Inclusive Descendant'
[iso 639.2]: https://www.loc.gov/standards/iso639-2/php/code_list.php 'ISO 639.2: Codes for the Representation of Names of Languages'
[node document]: https://dom.spec.whatwg.org/#concept-node-document
[sc312]: https://www.w3.org/TR/WCAG21/#language-of-parts 'Success Criterion 3.1.2 Language of Parts'
[text inheriting its programmatic language]: #text-inheriting-language 'Definition of Text Inheriting its Programmatic Language from an Element'
[text node]: https://dom.spec.whatwg.org/#text
[valid language tag]: #valid-language-tag
[visible]: #visible 'Definition of visible'
[whitespace]: #whitespace 'Definition of Whitespace'

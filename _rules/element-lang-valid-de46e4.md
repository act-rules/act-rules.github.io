---
id: de46e4
name: Element with `lang` attribute has valid language tag
rule_type: atomic
description: |
  This rule checks that a non-empty `lang` attribute of an element in the page body has a language tag with a known primary language subtag.
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
  - DOM Tree
acknowledgments:
  authors:
    - Bryn Anderson
    - Jey Nandakumar
---

## Applicability

This rules applies to any HTML element with a `lang` [attribute value][] that is not empty (`""`) and for which all of the following is true:

- the element is a [descendant][] in the [flat tree][] of a `body` element; and
- the element has a [node document][] with a [content type][] of `text/html`; and
- the element has a [text node][] as a [descendant][] in the [flat tree][] that is [visible][] or [included in the accessibility tree][].

## Expectation

For each test target, the value of the `lang` [attribute value][] is a [valid language tag][].

## Assumptions

- The `lang` [attribute value][] is assumed to be used to indicate the language of a section of the content. If the `lang` [attribute value][] is used for something else (for example to indicate a `code` element contains CSS), the content may still conform to WCAG despite failing this rule.

- This rule assumes that user agents and assistive technologies can programmatically determine [valid language tags](#valid-language-tag) even if these do not conform to the [BCP 47][] syntax.

- This rule assumes that [grandfathered tags][] are not used as these will not be recognized as [valid language tags](#valid-language-tag).

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

The `lang` [attribute value][] is not empty (`""`) and has a valid language tag.

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

The `lang` [attribute value][] is not empty (`""`) and has a valid language tag. The region section in the value is ignored by the rule.

```html
<html>
	<body>
		<blockquote lang="fr-CH">
			Ils se sont promenés dans un étrange bar Tiki en bordure de la petite ville balnéaire.
		</blockquote>
	</body>
</html>
```

#### Passed Example 3

The `lang` [attribute value][] has a valid language tag, but a syntactically invalid region subtag which is ignored by the rule.

```html
<html>
	<body>
		<p lang="en-US-GB">
			They wandered into a strange Tiki bar on the edge of the small beach town.
		</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

The `lang` [attribute value][] is not a primary language subtag.

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

The `lang` [attribute value][] is not empty (`""`) and is not a primary language subtag.

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

The `lang` [attribute value][] consists of only [whitespace][] and is not a [valid language tag][].

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

The `lang` [attribute value][] has a valid language tag, but its [descendant][] is not [included in the accessibility tree][].

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

The `lang` [attribute value][] has a valid language tag, but its [descendant][] is not [visible][] though it is still [included in the accessibility tree][].

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

### Inapplicable

#### Inapplicable Example 1

The rule applies to elements within the `body` of a webpage. `html` elements are ignored by the rule.

```html
<html lang="en">
	<body>
		They wandered into a strange Tiki bar on the edge of the small beach town.
	</body>
</html>
```

#### Inapplicable Example 2

An empty `lang` [attribute value][] is ignored, as the rule only applies to `lang` attributes that are not empty (`""`).

```html
<html>
	<body>
		<article lang="">
			They wandered into a strange Tiki bar on the edge of the small beach town.
		</article>
	</body>
</html>
```

#### Inapplicable Example 3

The `lang` [attribute value][] has a valid language tag, but does not have a [visible][] [text node][] as a [descendant][] in the [flat tree][].

```html
<html>
	<body>
		<p lang="hidden">
			<span style="display: none;">
				They wandered into a strange Tiki bar on the edge of the small beach town.
			</span>
		</p>
	</body>
</html>
```

[node document]: https://dom.spec.whatwg.org/#concept-node-document
[content type]: https://dom.spec.whatwg.org/#concept-document-content-type
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree
[grandfathered tags]: https://tools.ietf.org/html/bcp47#section-2.2.8
[bcp 47]: https://tools.ietf.org/html/bcp47#section-2.1
[valid language tag]: #valid-language-tag
[whitespace]: #whitespace 'Definition of Whitespace'
[visible]: #visible 'Definition of visible'
[text node]: https://dom.spec.whatwg.org/#text
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[attribute value]: #attribute-value 'Definition of Attribute Value'
[included in the accessibility tree]: #included-in-the-accessibility-tree

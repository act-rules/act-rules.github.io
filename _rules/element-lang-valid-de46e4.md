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

This rules applies to any HTML element that:

- has a [node document](https://dom.spec.whatwg.org/#concept-node-document) with a [content type](https://dom.spec.whatwg.org/#concept-document-content-type) of `text/html`; and
- is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) of a `body` element; and
- has a `lang` attribute that is not empty ("").

## Expectation

For each test target, the `lang` attribute has a [valid language tag][].

## Assumptions

- The `lang` attribute is assumed to be used to indicate the language of a section of the content. If the `lang` attribute is used for something else (for example to indicate a `code` element contains CSS), the content may still conform to WCAG despite failing this rule.
- This rule assumes that user agents and assistive technologies can programmatically determine [valid language tags](#valid-language-tag) even if these do not conform to the [BCP 47][] syntax.
- This rule assumes that [grandfathered tags][] are not used as these will not be recognized as [valid language tags](#valid-language-tag).
- The language of the page can be set by other methods than the `lang` attribute, for example using HTTP headers or the `meta` element. These methods are not supported by all assistive technologies. This rule assumes that these other methods are insufficient to satisfying [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page).

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

The `lang` attribute has a value that is not empty ("") and has a valid language tag.

```html
<html>
	<body>
		<article lang="en"></article>
	</body>
</html>
```

#### Passed Example 2

The `lang` attribute has a value that is not empty ("") and has a valid language tag. The region section in the value is ignored by the rule.

```html
<html>
	<body>
		<blockquote lang="fr-CH"></blockquote>
	</body>
</html>
```

#### Passed Example 3

The `lang` attribute value has a valid language tag, but a syntactically invalid region subtag.

```html
<html>
	<body>
		<p lang="en-US-GB"></p>
	</body>
</html>
```

### Failed

#### Failed Example 1

The `lang` attribute value is not a primary language subtag.

```html
<html>
	<body>
		<article lang="dutch"></article>
	</body>
</html>
```

#### Failed Example 2

The `lang` attribute value is not empty ("") and is not a primary language subtag.

```html
<html>
	<body>
		<article lang="#!"></article>
	</body>
</html>
```

#### Failed Example 3

The `lang` attribute value consists of only [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace) and is not a [valid language tag][].

```html
<html>
	<body>
		<article lang=" ">
			The quick brown fox jumped over the lazy dog
		</article>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The rule applies to elements within the `body` of a webpage. `html` elements are ignored by the rule.

```html
<html lang="en">
	<body></body>
</html>
```

#### Inapplicable Example 2

An empty value for the `lang` attribute is ignored, as the rule only applies to `lang` attributes that are not empty ("").

```html
<html>
	<body>
		<article lang=""></article>
	</body>
</html>
```

[grandfathered tags]: https://tools.ietf.org/html/bcp47#section-2.2.8
[bcp 47]: https://tools.ietf.org/html/bcp47#section-2.1
[valid language tag]: #valid-language-tag

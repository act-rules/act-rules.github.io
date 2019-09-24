---
id: de46e4
name: lang attribute in body is valid
rule_type: atomic
description: |
  This rule checks that the `lang` attribute of an element in the page body have a valid primary language subtag.
accessibility_requirements:
  wcag20:3.1.2: # Language of Parts (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
authors:
  - Bryn Anderson
  - Jey Nandakumar
---

## Applicability

This rules applies to each HTML element that is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress) of the `body` element and has a `lang` attribute that is neither empty ("") nor only [whitespace](#whitespace).

## Expectation

For each test target, the `lang` attribute has a [valid language subtag](#valid-language-subtag).

## Assumptions

[Documents](https://dom.spec.whatwg.org/#concept-document) are served with a [content type](https://dom.spec.whatwg.org/#concept-document-content-type) of `text/html`. If a document is served using a different content type, this can affect the interpretation of the `lang` attribute.

This rule assumes that the presence of a `lang` attribute is being used to comply to WCAG. This rule doesn't test if the attribute is needed to comply to WCAG.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG21/Techniques/html/H58)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [Understanding Success Criterion 3.1.2: Language of Parts](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts)

## Test Cases

### Passed

#### Passed Example 1

The `lang` attribute has a value that is not empty ("") and has a valid primary language subtag.

```html
<html>
	<body>
		<article lang="en"></article>
	</body>
</html>
```

#### Passed Example 2

The `lang` attribute has a value that is not empty ("") and has a valid primary language subtag. The region section in the value is ignored by the rule.

```html
<html>
	<body>
		<blockquote lang="fr-CH"></blockquote>
	</body>
</html>
```

### Failed

#### Failed Example 1

The `lang` attribute value is not a valid primary language subtag.

```html
<html>
	<body>
		<article lang="dutch"></article>
	</body>
</html>
```

#### Failed Example 2

The `lang` attribute value has a valid primary language subtag, but a syntactically invalid region subtag.

```html
<html>
	<body>
		<p lang="en-US-GB"></p>
	</body>
</html>
```

#### Failed Example 3

The `lang` attribute value is not empty ("") and is not a valid primary language subtag.

```html
<html>
	<body>
		<article lang="#!"></article>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The rule applies to elements with the `body` of a webpage. `html` elements are ignored by the rule.

```html
<html lang="en">
	<body></body>
</html>
```

#### Inapplicable Example 2

An empty value for `lang` attribute is ignored as the rule only applies to `lang` or `xml:lang` attribute that is neither empty ("") nor only [whitespace](#whitespace).

```html
<html>
	<body>
		<article lang=""></article>
	</body>
</html>
```

#### Inapplicable Example 3

The `lang` attribute value consists of only [whitespace](#whitespace).

```html
<html>
	<body>
		<article lang=" ">
			The quick brown fox jumped over the lazy dog
		</article>
	</body>
</html>
```

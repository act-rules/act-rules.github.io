---
id: de46e4
name: Element within `body` has valid `lang` attribute
rule_type: atomic
description: |
  This rule checks that the `lang` and `xml:lang` attributes of an element in the page body have a valid primary language subtag.
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

This rules applies to each HTML or SVG element that is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress) of the `body` element and has a `lang` or `xml:lang` attribute that is neither empty ("") nor only [whitespace](#whitespace).

## Expectation

For each test target, the `lang` and `xml:lang` have a [valid language subtag](#valid-language-subtag) if the attribute is neither empty ("") nor only [whitespace](#whitespace).

## Assumptions

This rule assumes that the presence of a lang or xml:lang attribute is being used to comply to WCAG. This rule doesn't test if the attribute is needed to comply to WCAG.

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

The `xml:lang` attribute has a value that is not empty ("") and has a valid primary language subtag.

```html
<html>
	<body>
		<p xml:lang="DE"></p>
	</body>
</html>
```

#### Passed Example 3

The `lang` attribute has a value that is not empty ("") and has a valid primary language subtag. The region section in the value is ignored by the rule.

```html
<html>
	<body>
		<blockquote lang="fr-CH"></blockquote>
	</body>
</html>
```

#### Passed Example 4

The `lang` and `xml:lang` attribute values are not empty ("") and both have a valid primary language subtag.

```html
<html>
	<body>
		<p lang="en" xml:lang="en-GB">Good Morning.</p>
	</body>
</html>
```

#### Passed Example 5

The `lang` and `xml:lang` attribute values are either empty ("") or have a valid primary language subtag.

```html
<html>
	<body>
		<p lang="en" xml:lang="">Good Morning.</p>
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

The `xml:lang` attribute value is not a valid primary language subtag.

```html
<html>
	<body>
		<p xml:lang="english"></p>
	</body>
</html>
```

#### Failed Example 3

The `lang` attribute value has a valid primary language subtag, but a syntactically invalid region subtag.

```html
<html>
	<body>
		<p lang="en-US-GB"></p>
	</body>
</html>
```

#### Failed Example 4

The `lang` attribute value is not empty ("") and is not a valid primary language subtag.

```html
<html>
	<body>
		<article lang="#!"></article>
	</body>
</html>
```

#### Failed Example 5

The `xml:lang` attribute value is not empty ("") and is not a valid primary language subtag.

```html
<html>
	<body>
		<article xml:lang="123"></article>
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

An empty value for `xml:lang` attribute is ignored as the rule only applies to `lang` or `xml:lang` attribute that is neither empty ("") nor only [whitespace](#whitespace).

```html
<html>
	<body>
		<article xml:lang=""></article>
	</body>
</html>
```

#### Inapplicable Example 4

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

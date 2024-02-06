---
id: b5c3f8
name: HTML page has lang attribute
rule_type: atomic
description: |
  This rule checks that an HTML page has a non-empty `lang` attribute.
accessibility_requirements:
  wcag20:3.1.1: # Language of Page (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:H57: # Using the language attribute on the HTML element
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
acknowledgments:
  authors:
    - Jey Nandakumar
  previous_authors:
    - Annika Nietzio
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [document element](https://dom.spec.whatwg.org/#document-element) if it is an `html` element for which all the following are true:

- is in a [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context); and
- has a [node document](https://dom.spec.whatwg.org/#concept-node-document) with a [content type](https://dom.spec.whatwg.org/#concept-document-content-type) of `text/html`.

**Note:** `html` elements within `iframe` and `object` elements are not applicable as `iframe` and `object` elements create [nested browsing contexts](https://html.spec.whatwg.org/#nested-browsing-context). However, as these elements are meant to provide a layer of isolation, the declared language of their [parent browsing context](https://html.spec.whatwg.org/#parent-browsing-context) will likely not be inherited, making it possible for empty `lang` attributes in [nested browsing contexts](https://html.spec.whatwg.org/#nested-browsing-context) to also cause accessibility issues.

## Expectation

Each test target has a `lang` [attribute value][] that is neither empty (`""`) nor only [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

## Assumptions

The language of the page can be set by other methods than the `lang` attribute, for example using HTTP headers or the `meta` element. These methods are not supported by all assistive technologies. This rule assumes that these other methods are insufficient to satisfying [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG22/#language-of-page).

## Accessibility Support

There are no accessibility support issues known.

## Background

### Related rules

- [HTML page `lang` attribute has valid language tag](https://www.w3.org/WAI/standards-guidelines/act/rules/bf051a/)
- [HTML page language subtag matches default language](https://www.w3.org/WAI/standards-guidelines/act/rules/ucwvc8/)

### Bibliography

- [Understanding Success Criterion 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)
- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG22/Techniques/html/H57)
- [RFC 5646: Tags for Identifying Languages](https://www.rfc-editor.org/rfc/rfc5646.html)
- [The `lang` and `xml:lang` attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)

## Test Cases

### Passed

#### Passed Example 1

This `html` element has a `lang` attribute with a non-empty (`""`) value.

```html
<html lang="en">
	<body>
		The quick brown fox jumps over the lazy dog.
	</body>
</html>
```

### Failed

#### Failed Example 1

This `html` element does not have a `lang` attribute.

```html
<html>
	<body>
		The quick brown fox jumps over the lazy dog.
	</body>
</html>
```

#### Failed Example 2

This `html` element has a `lang` attribute with an empty (`""`) value.

```html
<html lang="">
	<body>
		The quick brown fox jumps over the lazy dog.
	</body>
</html>
```

#### Failed Example 3

This `html` element has a `lang` attribute whose value is only [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

```html
<html lang=" ">
	<body>
		The quick brown fox jumps over the lazy dog.
	</body>
</html>
```

#### Failed Example 4

This `html` element has no `lang` attribute, only a `xml:lang` attribute.

```html
<html xml:lang="en">
	<body>
		The quick brown fox jumps over the lazy dog.
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This rule does not apply to an `svg` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="en">
    <text>
        The quick brown fox jumps over the lazy dog.
    </text>
</svg>
```

#### Inapplicable Example 2

This rule does not apply to a `math` element.

```xml
<math lang="en">
    The quick brown fox jumps over the lazy dog.
</math>
```

[attribute value]: #attribute-value

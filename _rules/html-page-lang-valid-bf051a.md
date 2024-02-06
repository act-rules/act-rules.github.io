---
id: bf051a
name: HTML page lang attribute has valid language tag
rule_type: atomic
description: |
  This rule checks that the `lang` attribute of the root element of a non-embedded HTML page has a language tag with a known primary language subtag.
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

- has a `lang` attribute that is neither empty ("") nor only [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace); and
- is in a [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context); and
- has a [node document](https://dom.spec.whatwg.org/#concept-node-document) with a [content type](https://dom.spec.whatwg.org/#concept-document-content-type) of `text/html`.

## Expectation

For each test target, the `lang` attribute has a [known primary language tag][].

## Assumptions

- The language of the page can be set by other methods than the `lang` attribute, for example using HTTP headers or the `meta` element. These methods are not supported by all assistive technologies. This rule assumes that these other methods are insufficient to satisfying [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG22/#language-of-page).

- This rule assumes that user agents and assistive technologies can programmatically determine [known primary language tags][known primary language tag] even if these do not conform to the [RFC 5646][] syntax.

- This rule assumes that only [known primary language tags][known primary language tag] are enough to satisfy [Success Criterion 3.1.1 Language of Page][sc311]; this notably excludes [grandfathered tags][] and [ISO 639.2][] three-letters codes, both having poor support in assistive technologies.

## Accessibility Support

There are no accessibility support issues known.

## Background

This rule is only applicable to non-embedded HTML pages. HTML pages embedded into other documents, such as through `iframe` or `object` elements are not applicable because they are not [web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s) according to the definition in WCAG.

### Related rules

- [HTML page has `lang` attribute](https://www.w3.org/WAI/standards-guidelines/act/rules/b5c3f8/)
- [HTML page language subtag matches default language](https://www.w3.org/WAI/standards-guidelines/act/rules/ucwvc8/)

### Bibliography

- [Understanding Success Criterion 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)
- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG22/Techniques/html/H57)
- [RFC 5646: Tags for Identifying Languages](https://www.rfc-editor.org/rfc/rfc5646.html)
- [The `lang` and `xml:lang` attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)

## Test Cases

### Passed

#### Passed Example 1

This `html` element has a `lang` attribute with a [known primary language tag][].

```html
<html lang="FR"></html>
```

#### Passed Example 2

This `html` element has a `lang` attribute with a [known primary language tag][] even though the [region subtag][] is not.

```html
<html lang="en-US-GB"></html>
```

### Failed

#### Failed Example 1

This `html` element has a `lang` attribute with a [known primary language tag][].

```html
<html lang="em-US"></html>
```

#### Failed Example 2

This `html` element has a `lang` attribute with a [known primary language tag][].

```html
<html lang="#1"></html>
```

#### Failed Example 3

The `lang` attribute of this page is an [iso 639.2][] three letters code, which has no [known primary language tag][].

```html
<html lang="eng">
	<body>
		<p lang="en">I love ACT rules!</p>
	</body>
</html>
```

#### Failed Example 4

The `lang` attribute of this page is a [grandfathered tag][grandfathered tags], which has no [known primary language tag][].

```html
<html lang="i-lux">
	<body>
		<p lang="lb">Lëtzebuerg ass e Land an Europa.</p>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This rule does not apply to `svg` elements.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="fr"></svg>
```

[grandfathered tags]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.8
[iso 639.2]: https://www.loc.gov/standards/iso639-2/php/code_list.php 'ISO 639.2: Codes for the Representation of Names of Languages'
[region subtag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.4 'Definition of region subtag'
[rfc 5646]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[sc311]: https://www.w3.org/TR/WCAG22/#language-of-page 'Success Criterion 3.1.1 Language of Page'
[known primary language tag]: #known-primary-language-tag 'Definition of Known Primary Language Tag'

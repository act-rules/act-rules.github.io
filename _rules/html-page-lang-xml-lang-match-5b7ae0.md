---
id: 5b7ae0
name: HTML page `lang` and `xml:lang` attributes have matching values
rule_type: atomic
description: |
  This rule checks that both `lang` and `xml:lang` attributes on the root element of a non-embedded HTML page, have the same primary language subtag.
accessibility_requirements:
  wcag20:3.1.1: # Language of Page (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree # The tree that HTML is parsed into.
acknowledgments:
  authors:
    - Jey Nandakumar
  previous_authors:
    - Annika Nietzio
---

## Applicability

This rule applies to any [document element](https://dom.spec.whatwg.org/#document-element) if it is an `html` element that:

- is in a [top-level browsing context][]; and
- has a [node document](https://dom.spec.whatwg.org/#concept-node-document) with a [content type][] of `text/html`; and
- has a `lang` attribute that has a [valid language tag][]; and
- has a non-empty `xml:lang` attribute.

## Expectation

For each test target, the values of the [primary language subtags][], if any exist, for the `lang` and `xml:lang` attributes are the same.

## Assumptions

- The language of the page can be set by other methods than the `lang` attribute, for example using HTTP headers or the `meta` element. These methods are not supported by all assistive technologies. This rule assumes that these other methods are insufficient to satisfying [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page).

- This rule assumes that user agents and assistive technologies can programmatically determine [valid language tags](#valid-language-tag) even if these do not conform to the [BCP 47][] syntax.

- This rule assumes that [grandfathered tags][] are not used as these will not be recognized as [valid language tags](#valid-language-tag).

- The rule assumes that having `lang` and `xml:lang` attributes with matching [primary language subtags][] but non-matching [language tags](https://tools.ietf.org/html/bcp47#section-2) overall, will not cause accessibility issues. This is not necessarily the case for all languages. One notable case is the [language tags](https://tools.ietf.org/html/bcp47#section-2) for Cantonese (`zh-yue`) and Mandarin (`zh-cmn`) where the [primary language subtags][] match, but the [extended language subtags][] don't. Such a case would not fail this rule, but could lead to accessibility issues.

## Accessibility Support

Since most assistive technologies will consistently use `lang` over `xml:lang` when both are used, violation of this rule may not necessarily be a violation of WCAG 2. Only when there are inconsistencies between assistive technologies as to which attribute is used to determine the language does this lead to a violation of SC 3.1.1.

## Background

This rule is only applicable to non-embedded HTML pages. HTML pages embedded into other documents, such as through `iframe` or `object` elements are not applicable because they are not [web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) according to the definition in WCAG.

- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [The `lang` and `xml:lang` attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)

## Test Cases

### Passed

#### Passed Example 1

This `html` element has identical [primary language subtags][] for its `lang` and `xml:lang` attributes.

```html
<html lang="en" xml:lang="en"></html>
```

#### Passed Example 2

This `html` element has identical [primary language subtags][] for its `lang` and `xml:lang` attributes. The [extended language subtags][] also match.

```html
<html lang="en-GB" xml:lang="en-GB"></html>
```

#### Passed Example 3

This `html` element has identical [primary language subtags][] for its `lang` and `xml:lang` attributes. The [extended language subtags][] do not match, but this is not required by this rule.

```html
<html lang="en-GB" xml:lang="en-US"></html>
```

### Failed

#### Failed Example 1

This `html` element has different [primary language subtags][] for its `lang` and `xml:lang` attributes.

```html
<html lang="fr" xml:lang="en"></html>
```

#### Failed Example 2

This `html` element has different [primary language subtags][] for its `lang` and `xml:lang` attributes. The [extended language subtags][] do match, but this rules only focus on the [primary language subtags][].

```html
<html lang="fr-CA" xml:lang="en-CA"></html>
```

### Inapplicable

#### Inapplicable Example 1

This rule does not apply to `svg` elements.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="en" xml:lang="en"></svg>
```

#### Inapplicable Example 2

This rule does not apply to `svg` elements, even inside an `html` element.

```svg
<html>
	<body>
		<svg lang="en"></svg>
	</body>
</html>
```

#### Inapplicable Example 3

This rule does not apply to `math` elements.

```xml
<math xml:lang="en"></math>
```

#### Inapplicable Example 4

This rule only applies to documents with a [content type][] of `text/html`

```xhtml
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html lang="en" xml:lang="en"></html>
```

#### Inapplicable Example 5

This rule does not apply to `html` elements whose `lang` attribute is not a [valid language tag][].

```html
<html lang="em" xml:lang="en"></html>
```

#### Inapplicable Example 6

This rule does not apply to `html` elements without an `xml:lang` attribute.

```html
<html lang="en"></html>
```

#### Inapplicable Example 7

This rule applies neither to `html` elements without an `xml:lang` attribute, nor to `html` in [nested browsing context][]

```html
<html lang="en">
	<iframe srcdoc="<html lang='en' xml:lang='en'></html>" />
</html>
```

#### Inapplicable Example 8

This rule does not apply to `html` elements with an empty (`""`) `xml:lang` attribute.

```html
<html lang="fr" xml:lang=""></html>
```

[content type]: https://dom.spec.whatwg.org/#concept-document-content-type 'Definition of content type'
[extended language subtags]: https://tools.ietf.org/html/bcp47#section-2.2.2 'Definition of extended language subtag'
[nested browsing context]: https://html.spec.whatwg.org/#nested-browsing-context 'Definition of nested browsing context'
[primary language subtags]: https://tools.ietf.org/html/bcp47#section-2.2.1 'Definition of primary language subtag'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'Definition of top-level browsing context'
[valid language tag]: #valid-language-tag 'Definition of valid language tag'
[grandfathered tags]: https://tools.ietf.org/html/bcp47#section-2.2.8
[bcp 47]: https://tools.ietf.org/html/bcp47#section-2.1

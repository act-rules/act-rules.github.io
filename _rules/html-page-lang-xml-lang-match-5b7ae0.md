---
id: 5b7ae0
name: HTML page `lang` and `xml:lang` attributes have matching values
rule_type: atomic
description: |
  This rule checks that all HTML pages with both a `lang` and `xml:lang` attributes on the root element, have the same primary language subtag.
accessibility_requirements:
  wcag20:3.1.1: # Language of Page (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree # The tree that HTML is parsed into.
acknowledgements:
  authors:
    - Jey Nandakumar
  previous_authors:
    - Annika Nietzio
---

## Applicability

This rule applies to any [document element](https://dom.spec.whatwg.org/#document-element) if it is an `html` element that:

- is in a [top-level browsing context][]; and
- has a [node document](https://dom.spec.whatwg.org/#concept-node-document) with a [content type][] of `text/html`; and
- has a `lang` attribute that has a [valid language subtag][]; and
- has a non-empty `xml:lang` attribute.

**Note:** `html` elements within `iframe` and `object` elements are not applicable as `iframe` and `object` elements create [nested browsing contexts](https://html.spec.whatwg.org/#nested-browsing-context). However, as these elements are meant to provide a layer of isolation, the declared language of their [parent browsing context](https://html.spec.whatwg.org/#parent-browsing-context) will likely not be inherited, making it possible for non-matching `lang` and `xml:lang` attributes in [nested browsing contexts](https://html.spec.whatwg.org/#nested-browsing-context) to also cause accessibility issues.

## Expectation

For each test target, the values of the [primary language subtags][], if any exist, for the `lang` and `xml:lang` attributes are the same.

**Note:** Having matching [primary language subtags][] of the `lang` and `xml:lang` attribute, but non-matching [language tags](https://tools.ietf.org/html/bcp47#section-2) overall, will not cause accessibility issues unless there's a sufficiently large difference between the two [language tags](https://tools.ietf.org/html/bcp47#section-2). One notable case is the [language tags](https://tools.ietf.org/html/bcp47#section-2) for Cantonese (`zh-yue`) and Mandarin (`zh-cmn`) where the [primary language subtags][] match, but the [extended language subtags][] don't. Such a case would not fail this rule, but could lead to accessibility issues in practice.

## Assumptions

This rule assumes that the presence of a `lang` attribute is being used to comply to WCAG. This rule doesn't test if the attribute is needed to comply to WCAG.

## Accessibility Support

Since most assistive technologies will consistently use `lang` over `xml:lang` when both are used, violation of this rule may not necessarily be a violation of WCAG 2. Only when there are inconsistencies between assistive technologies, as to which attribute is used to determine the language, does this lead to a violation of SC 3.1.1.

## Background

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

This rule only applies to `html` in [top-level browsing context][]

```html
<iframe srcdoc="<html lang='en' xml:lang='en'></html>" />
```

#### Inapplicable Example 5

This rule only applies to documents with a [content type][] of `text/html`

```xhtml
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html lang="en" xml:lang="en"></html>
```

#### Inapplicable Example 6

This rule does not apply to `html` elements whose `lang` attribute is not a [valid language subtag][].

```html
<html lang="em" xml:lang="en"></html>
```

#### Inapplicable Example 7

This rule does not apply to `html` elements without an `xml:lang` attribute.

```html
<html lang="en"></html>
```

#### Inapplicable Example 8

This rule does not apply to `html` elements with an empty (`""`) `xml:lang` attribute.

```html
<html lang="fr" xml:lang=""></html>
```

[content type]: https://dom.spec.whatwg.org/#concept-document-content-type 'Definition of content type'
[extended language subtags]: https://tools.ietf.org/html/bcp47#section-2.2.2 'Definition of extended language subtag'
[primary language subtags]: https://tools.ietf.org/html/bcp47#section-2.2.1 'Definition of primary language subtag'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'Definition of top-level browsing context'
[valid language subtag]: #valid-language-subtag 'Definition of valid language subtag'

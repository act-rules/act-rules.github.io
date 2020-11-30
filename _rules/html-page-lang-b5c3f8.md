---
id: b5c3f8
name: HTML page has `lang` attribute
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
---

## Applicability

This rule applies to any [document element](https://dom.spec.whatwg.org/#document-element) if it is an `html` element for which all of the following are true:

- the [document element][] is in a [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context); and
- the [document element][] has a [node document](https://dom.spec.whatwg.org/#concept-node-document) with a [content type](https://dom.spec.whatwg.org/#concept-document-content-type) of `text/html`.

**Note:** `html` elements within `iframe` and `object` elements are not applicable as `iframe` and `object` elements create [nested browsing contexts](https://html.spec.whatwg.org/#nested-browsing-context). However, as these elements are meant to provide a layer of isolation, the declared language of their [parent browsing context](https://html.spec.whatwg.org/#parent-browsing-context) will likely not be inherited, making it possible for empty `lang` attributes in [nested browsing contexts](https://html.spec.whatwg.org/#nested-browsing-context) to also cause accessibility issues.

## Expectation

Each test target has a `lang` attribute that is neither empty (`""`) nor only [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

## Assumptions

The language of the page can be set by other methods than the `lang` attribute, for example using HTTP headers or the `meta` element. These methods are not supported by all assistive technologies. This rule assumes that these other methods are insufficient to satisfying [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [HTML page `lang` attribute has valid language tag](https://act-rules.github.io/rules/bf051a)
- [HTML page language subtag matches default language](https://act-rules.github.io/rules/ucwvc8)
- [Understanding Success Criterion 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)
- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [The `lang` and `xml:lang` attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)

## Test Cases

### Passed

#### Passed Example 1

This `html` element has a `lang` attribute with a non-empty (`""`) value.

```html
<html lang="en"></html>
```

### Failed

#### Failed Example 1

This `html` element does not have a `lang` attribute.

```html
<html></html>
```

#### Failed Example 2

This `html` element has a `lang` attribute with an empty (`""`) value.

```html
<html lang=""></html>
```

#### Failed Example 3

This `html` element has a `lang` attribute whose value is only [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

```html
<html lang=" "></html>
```

#### Failed Example 4

This `html` element has no `lang` attribute, only a `xml:lang` attribute.

```html
<html xml:lang="en"></html>
```

### Inapplicable

#### Inapplicable Example 1

This rule does not apply to `svg` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg"></svg>
```

#### Inapplicable Example 2

This rule does not apply to `math` element.

```xml
<math></math>
```

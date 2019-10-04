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
authors:
  - Annika Nietzio
  - Jey Nandakumar
---

## Applicability

This rule applies to any [document element](https://dom.spec.whatwg.org/#document-element) if it is an `html` element that:

- is in a [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context); and
- has a [node document](https://dom.spec.whatwg.org/#concept-node-document) with a [content type](https://dom.spec.whatwg.org/#concept-document-content-type) of `text/html`; and
- has a `lang` attribute that has a [valid language subtag](#valid-language-subtag); and
- has an `xml:lang` attribute.

**Node:** `html` elements within `iframe` and `object` elements are not applicable as `iframe` and `object` elements create [nested browsing contexts](https://html.spec.whatwg.org/#nested-browsing-context).

## Expectation

For each test target, the values of the [primary language subtags](https://tools.ietf.org/html/bcp47#section-2.2.1), if any exist, for the `lang` and `xml:lang` attributes are the same.

**Note:** Having matching [primary language subtags](https://tools.ietf.org/html/bcp47#section-2.2.1) of the `lang` and `xml:lang` attribute, but non-matching [language tags](https://tools.ietf.org/html/bcp47#section-2) overall, will not cause accessibility issues unless there's a sufficiently large difference between the two [language tags](https://tools.ietf.org/html/bcp47#section-2). One notable case is the [language tags](https://tools.ietf.org/html/bcp47#section-2) for Cantonese (`zh-que`) and Mandarin (`zh-cmn`) where the [primary language subtags](https://tools.ietf.org/html/bcp47#section-2.2.1) match, but the [extended language subtags](https://tools.ietf.org/html/bcp47#section-2.2.2) don't. Such a case would not fail this rule, but could lead to accessibility issues in practice.

## Assumptions

This rule assumes that the presence of a `lang` attribute is being used to comply to WCAG. This rule doesn't test if the attribute is needed to comply to WCAG.

## Accessibility Support

Since most assistive technologies will consistently use `lang` over `xml:lang` when both are used, violation of this rule may not necessarily be a violation of WCAG 2. Only when there are inconsistencies between assistive technologies, as to which attribute is used to determine the language, does this lead to a violation of SC 3.1.1.

## Background

- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [MDN: `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
- [MDN: `xml:lang` attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang)

## Test Cases

### Passed

#### Passed Example 1

`html` element with matching primary language subtags for `lang` and `xml:lang`.

```html
<html lang="en" xml:lang="en"></html>
```

#### Passed Example 2

`html` element with matching primary and extended language subtags for `lang` and `xml:lang`.

```html
<html lang="en-GB" xml:lang="en-GB"></html>
```

#### Passed Example 3

`html` element with matching primary language subtags, but non-matching extended language subtags, for `lang` and `xml:lang`.

```html
<html lang="en-GB" xml:lang="en-US"></html>
```

### Failed

#### Failed Example 1

`html` element with non-matching primary language subtags for `lang` and `xml:lang`.

```html
<html lang="fr" xml:lang="en"></html>
```

### Inapplicable

#### Inapplicable Example 1

`svg` element is not applicable for this rule.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="en" xml:lang="en"></svg>
```

#### Inapplicable Example 2

`xml:lang` is empty, the rule mandates `non-empty` values.

```html
<html lang="fr" xml:lang=""></html>
```

#### Inapplicable Example 3

Only `non-empty` values are considered.

```html
<html lang="" xml:lang=""></html>
```

#### Inapplicable Example 4

This rule does not apply to elements whose `lang` attribute consists only of whitespace.

```html
<html lang=" " xml:lang=""></html>
```

#### Inapplicable Example 5

This rule does not apply to elements without an `xml:lang` attribute.

```html
<html lang="en"></html>
```

#### Inapplicable Example 6

This rule does not apply to `math` elements.

```html
<math xml:lang="en"></math>
```

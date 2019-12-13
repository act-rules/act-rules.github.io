---
id: bf051a
name: HTML page language is valid
rule_type: atomic
description: |
  This rule checks that the `lang` attribute of the root element of an HTML page has a valid primary language subtag.
accessibility_requirements:
  wcag20:3.1.1: # Language of Page (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
acknowledgements:
  authors:
    - Annika Nietzio
    - Jey Nandakumar
---

## Applicability

This rule applies to any [document element](https://dom.spec.whatwg.org/#document-element) if it is an `html` element that:

- has a `lang` attribute that is neither empty ("") nor only [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace); and
- is in a [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context); and
- has a [node document](https://dom.spec.whatwg.org/#concept-node-document) with a [content type](https://dom.spec.whatwg.org/#concept-document-content-type) of `text/html`.

**Note:** `html` elements within `iframe` and `object` elements are not applicable as `iframe` and `object` elements create [nested browsing contexts](https://html.spec.whatwg.org/#nested-browsing-context). However, as these elements are meant to provide a layer of isolation, the language of the [parent browsing context](https://html.spec.whatwg.org/#parent-browsing-context) may not be inherited. This should be tested separately.

## Expectation

For each test target, the `lang` attribute has a [valid language subtag](#valid-language-subtag).

## Assumptions

This rule assumes that the presence of a `lang` attribute is being used to comply to WCAG. This rule doesn't test if the attribute is needed to comply to WCAG.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)
- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [MDN: `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)

## Test Cases

### Passed

#### Passed Example 1

This `html` element has a `lang` attribute whose value is a [valid][valid language subtag] [primary language subtag][].

```html
<html lang="fr"></html>
```

### Failed

#### Failed Example 1

This `html` element has a `lang` attribute whose value is not a [valid language subtag][].

```html
<html lang="xyz"></html>
```

#### Failed Example 2

This `html` element has a `lang` attribute whose value is not a [valid language subtag][]. Even though the [primary language subtag][] is valid, the [region subtag] is not

```html
<html lang="en-US-GB"></html>
```

#### Failed Example 3

This `html` element has a `lang` attribute whose value is not a [valid language subtag][].

```html
<html lang="123"></html>
```

#### Failed Example 4

This `html` element has a `lang` attribute whose value is not a [valid language subtag][]

```html
<html lang="#!"></html>
```

### Inapplicable

#### Inapplicable Example 1

This rule does not apply to `svg` elements.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="fr"></svg>
```

[primary language subtag]: https://tools.ietf.org/html/bcp47#section-2.2.1 'Definition of primary language subtag'
[region subtag]: https://tools.ietf.org/html/bcp47#section-2.2.4 'Definition of region subtag'
[valid language subtag]: #valid-language-subtag 'Definition of valid language subtag'

---
name: Validity of HTML Lang attribute

description: |
  This rule checks the lang or xml:lang attribute has a valid language subtag.

success_criterion:
- 3.1.1

test_aspects:
- DOM Tree

authors:
- Annika Nietzio
- Jey Nandakumar
---

## Test Procedure

### Applicability

The root element of the page, if it is an `html` element with a [non-empty](#non-empty) `lang` and/or `xml:lang` attribute.

### Expectation

The `lang` and `xml:lang` attributes have a [valid language subtag](#valid-language-subtag) if the attribute is [non-empty](#non-empty).

## Assumptions

*There are currently no assumptions*

## Accessibility Support

There are known combinations of a popular operating system with browsers and assistive technologies that do not support the `lang` and `xml:lang` attributes.

While HTML5 specification indicates that `xml:lang` attribute takes priority over `lang` attribute, certain assistive technologies prioritise `lang` over `xml:lang` instead.

## Background

- [https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57](https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57)
- [https://www.ietf.org/rfc/bcp/bcp47.txt](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
- [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang)
- [https://www.w3.org/TR/WCAG20-TECHS/H57.html](https://www.w3.org/TR/WCAG20-TECHS/H57.html)

## Test Cases

## Passed

#### Pass example 1

Has valid `lang`.

```html
<html lang="fr">
```

#### Pass example 2

Has valid `xml:lang`.

```html
<html xml:lang="fr">
```

#### Pass example 3

Has valid `lang` and `xml:lang`

```html
<html xml:lang="fr" lang="fr">
```

#### Pass example 4

Has valid `lang`.

```html
<html lang="fr" xml:lang="">
```

#### Pass example 5

Has valid `xml:lang`.

```html
<html lang="" xml:lang="nl">
```

## Failed

#### Fail example 1

Has invalid `lang`.

```html
<html lang="xyz">
```

#### Fail example 2

Has invalid `xml:lang`.

```html
<html xml:lang="xyz">
```

#### Fail example 3

Has invalid `lang` and `xml:lang`.

```html
<html xml:lang="xyz" lang="xyz">
```

## Inapplicable

#### Inapplicable example 1

Not applicable to `svg`.

```html
<svg lang="fr">
```

#### Inapplicable example 2

Not applicable to `svg`.

```html
<svg xml:lang="fr">
```

#### Inapplicable example 3

Empty `lang` value.

```html
<html lang="">
```

#### Inapplicable example 4

Empty `xml:lang` value.

```html
<html xml:lang="">
```
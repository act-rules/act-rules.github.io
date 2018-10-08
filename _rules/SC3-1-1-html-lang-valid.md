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

#### Passed example 1

The `lang` attribute specified has a non-empty value & a valid primary language subtag.

```html
<html lang="fr">
```

#### Passed example 2

The `xml:lang` attribute specified has a non-empty value & a valid primary language subtag.

```html
<html xml:lang="fr">
```

#### Passed example 3

The `lang` and `xml:lang` attribute specified has a non-empty value & a valid primary language subtag.

```html
<html xml:lang="fr" lang="fr">
```

#### Passed example 4

The `lang` attribute specified has a non-empty value & a valid primary language subtag. The rule checks for the presence of either `lang` or `xml:lang`. Empty value specified for the other attribute is ignored.

```html
<html lang="fr" xml:lang="">
```

#### Passed example 5

The `xml:lang` attribute specified has a non-empty value & a valid primary language subtag. The rule checks for the presence of either `lang` or `xml:lang`. Empty value specified for the other attribute is ignored.

```html
<html lang="" xml:lang="nl">
```

## Failed

#### Failed example 1

The `lang` attribute value is not a valid primary language subtag.

```html
<html lang="xyz">
```

#### Failed example 2

The `xml:lang` attribute value is not a valid primary language subtag.

```html
<html xml:lang="xyz">
```

#### Failed example 3

Both the `lang` and `xml:lang` value specified are not valid values for primary language subtag.

```html
<html xml:lang="xyz" lang="xyz">
```

## Inapplicable

#### Inapplicable example 1

The rule applies to `html` element and hence usage of `lang` attribute in `svg` element is not applicable.

```html
<svg lang="fr">
```

#### Inapplicable example 2

The rule applies to `html` element and hence usage of `xml:lang` attribute in `svg` element is not applicable.

```html
<svg xml:lang="fr">
```

#### Inapplicable example 3

An empty value for `lang` attribute is ignored by this rule, as the applicability specifies only non-empty values.

```html
<html lang="">
```

#### Inapplicable example 4

An empty value for `xml:lang` attribute is ignored by this rule, as the applicability specifies only non-empty values.

```html
<html xml:lang="">
```
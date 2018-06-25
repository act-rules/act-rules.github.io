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

- https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57
- https://www.ietf.org/rfc/bcp/bcp47.txt
- https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang
- https://www.w3.org/TR/WCAG20-TECHS/H57.html

## Test Cases

## Passed

```html
<html lang="fr">
```

```html
<html xml:lang="fr">
```

```html
<html xml:lang="fr" lang="fr">
```

```html
<html lang="fr" xml:lang="">
```

```html
<html lang="" xml:lang="nl">
```

## Failed

```html
<html lang="xyz">
```

```html
<html xml:lang="xyz">
```

```html
<html xml:lang="xyz" lang="xyz">
```

## Inapplicable

```html
<svg lang="fr">
```

```html
<svg xml:lang="fr">
```

```html
<html lang="">
```

```html
<html xml:lang="">
```
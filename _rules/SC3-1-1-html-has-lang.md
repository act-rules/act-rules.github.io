---
name: HTML has lang attribute

description: |
  This rule checks that the `html` element has a non-empty `lang` or `xml:lang` attribute.

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

The root element of the page, if it is an `html` element.

### Expectation

The test target has a [non-empty](#non-empty) `lang` or `xml:lang` attribute.

**Note**: HTML5 recommends using `lang` instead of `xml:lang`. This is not known to impact accessibility, which is why use of both is permitted by this rule.

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are known combinations of a popular operating system with browsers and assistive technologies that do not support the `lang` and `xml:lang` attributes.

## Background

- [https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57](https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57)
- [https://www.ietf.org/rfc/bcp/bcp47.txt](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
- [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang)
- [https://www.w3.org/TR/WCAG20-TECHS/H57.html](https://www.w3.org/TR/WCAG20-TECHS/H57.html)

## Test Cases

### Passed

#### Pass example 1

Has non-empty `lang`.

```html
<html lang="en">
```

#### Pass example 2

Has non-empty `xml:lang`.

```html
<html xml:lang="en">
```

#### Pass example 3

Has non-empty `lang` and `xml:lang`.

```html
<html xml:lang="en" lang="en">
```

#### Pass example 4

Has non-empty `lang`.

```html
<html xml:lang="" lang="en">
```

#### Pass example 5

Has non-empty `xml:lang`.

```html
<html xml:lang="en" lang="">
```

#### Pass example 6

Has `lang`.

```html
<html lang="xyz">
```

#### Pass example 7

Has `xml:lang`.

```html
<html xml:lang="xyz">
```

### Failed

#### Fail example 1

Has no `lang` or `xml:lang` attribute.

```html
<html>
```

#### Fail example 2

Has empty `xml:lang`.

```html
<html xml:lang="">
```

#### Fail example 3

Has empty `lang`.

```html
<html lang="">
```

#### Fail example 4

Has empty `lang` and `xml:lang`.

```html
<html xml:lang="" lang="">
```

### Inapplicable

#### Inapplicable example 1

Not applicable on `svg`.

```html
<svg lang="en">
```
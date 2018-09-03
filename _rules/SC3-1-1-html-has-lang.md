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

The `lang` attribute specified has a non-empty value.

```html
<html lang="en">
```

#### Pass example 2

The `xml:lang` attribute specified has a non-empty value.

```html
<html xml:lang="en">
```

#### Pass example 3

The `lang` and `xml:lang` attribute specified has a non-empty value.

```html
<html xml:lang="en" lang="en">
```

#### Pass example 4

The `lang` attribute specified has a non-empty value. The rule expects a non-empty value on either the `lang` or `xml:lang` attributes.

```html
<html xml:lang="" lang="en">
```

#### Pass example 5

The `xml:lang` attribute specified has a non-empty value. The rule expects a non-empty value on either the `lang` or `xml:lang` attributes.

```html
<html xml:lang="en" lang="">
```

#### Pass example 6

The `lang` attribute specified has a non-empty value. The rule does not verify the validity of the value specified and checks only for presence of a value.

```html
<html lang="xyz">
```

#### Pass example 7

The `xml:lang` attribute specified has a non-empty value. The rule does not verify the validity of the value specified and checks only for presence of a value.

```html
<html xml:lang="xyz">
```

### Failed

#### Fail example 1

There were no `lang` or `xml:lang` attribute specified.

```html
<html>
```

#### Fail example 2

The `xml:lang` attribute specified has an empty value.

```html
<html xml:lang="">
```

#### Fail example 3

The `lang` attribute specified has an empty value.

```html
<html lang="">
```

#### Fail example 4

The `lang` and `xml:lang` attribute specified has an empty value.

```html
<html xml:lang="" lang="">
```

### Inapplicable

#### Inapplicable example 1

The rule does not apply to `svg` element.

```html
<svg lang="en">
```
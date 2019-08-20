---
id: b5c3f8
name: HTML has lang attribute
rule_type: atomic
description: |
  This rule checks that the `html` element has a non-empty `lang` or `xml:lang` attribute.
accessibility_requirements:
  wcag20:3.1.1: # Language of Page (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
authors:
  - Annika Nietzio
  - Jey Nandakumar
---

## Applicability

The root element of the [page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s), if it is an `html` element.

## Expectation

The test target has a `lang` or `xml:lang` attribute that is not empty ("").

**Note**: HTML5 recommends using `lang` instead of `xml:lang`. This is not known to impact accessibility, which is why use of both is permitted by this rule.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

There are known combinations of a popular operating system with browsers and assistive technologies that do not support the `lang` and `xml:lang` attributes.

## Background

- [https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57](https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57)
- [https://www.ietf.org/rfc/bcp/bcp47.txt](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
- [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang)
- [https://www.w3.org/TR/WCAG20-TECHS/H57.html](https://www.w3.org/TR/WCAG20-TECHS/H57.html)

## Test Cases

### Passed

#### Passed Example 1

The `lang` attribute specified has a non-empty value.

```html
<html lang="en"></html>
```

#### Passed Example 2

The `xml:lang` attribute specified has a non-empty value.

```html
<html xml:lang="en"></html>
```

#### Passed Example 3

The `lang` and `xml:lang` attribute specified has a non-empty value.

```html
<html xml:lang="en" lang="en"></html>
```

#### Passed Example 4

The `lang` attribute specified has a non-empty value. The rule expects a non-empty value on either the `lang` or `xml:lang` attributes.

```html
<html xml:lang="" lang="en"></html>
```

#### Passed Example 5

The `xml:lang` attribute specified has a non-empty value. The rule expects a non-empty value on either the `lang` or `xml:lang` attributes.

```html
<html xml:lang="en" lang=""></html>
```

#### Passed Example 6

The `lang` attribute specified has a non-empty value. The rule does not verify the validity of the value specified and checks only for presence of a value.

```html
<html lang="xyz"></html>
```

#### Passed Example 7

The `xml:lang` attribute specifies a value that is not empty (""). The rule does not verify the validity of the value specified and checks only for presence of a value.

```html
<html xml:lang="xyz"></html>
```

#### Passed example 8

The `xml:lang` attribute specifies a value that is not empty (""). The rule does not verify the validity of the value specified and checks only for presence of a value.

```html
<html xml:lang="123"></html>
```

#### Passed example 9

The `xml:lang` attribute specifies a value that is not empty (""). The rule does not verify the validity of the value specified and checks only for presence of a value.

```html
<html xml:lang="#!"></html>
```

#### Passed example 10

The `xml:lang` attribute specifies a value that is not empty (""). The rule does not verify the validity of the value specified and checks only for presence of a value.

```html
<html xml:lang=" "></html>
```

### Failed

#### Failed Example 1

There were no `lang` or `xml:lang` attribute specified.

```html
<html></html>
```

#### Failed Example 2

The `xml:lang` attribute specified is empty ("").

```html
<html xml:lang=""></html>
```

#### Failed Example 3

The `lang` attribute specified is empty ("").

```html
<html lang=""></html>
```

#### Failed Example 4

The `lang` and `xml:lang` attribute specified is empty ("").

```html
<html xml:lang="" lang=""></html>
```

### Inapplicable

#### Inapplicable Example 1

The rule does not apply to `svg` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="en"></svg>
```

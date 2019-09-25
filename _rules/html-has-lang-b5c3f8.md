---
id: b5c3f8
name: HTML page has lang attribute
rule_type: atomic
description: |
  This rule checks that an HTML page has a non-empty `lang` or `xml:lang` attribute.
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

The root element of the [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s), if it is an `html` element.

**Note**: Documents embedded into other documents, such as through `iframe` or `object` elements are not applicable because they are not web pages according to the definition in WCAG.

## Expectation

Each test target has a `lang` or `xml:lang` attribute that is neither empty ("") nor only [whitespace](#whitespace).

**Note**: HTML5 recommends using `lang` instead of `xml:lang`. This is not known to impact accessibility, which is why use of both is permitted by this rule.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

There are known combinations of a popular operating system with browsers and assistive technologies that do not support the `lang` and `xml:lang` attributes.

## Background

- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [MDN: `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
- [MDN: `xml:lang` attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang)

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

The `lang` and `xml:lang` attributes specified have a non-empty value.

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

The `lang` and `xml:lang` attributes specified are empty ("").

```html
<html xml:lang="" lang=""></html>
```

#### Failed Example 5

The `lang` attribute consists of only [whitespace](#whitespace).

```html
<html lang=" "></html>
```

#### Failed Example 6

The `xml:lang` attribute consists of only [whitespace](#whitespace).

```html
<html xml:lang=" "></html>
```

### Inapplicable

#### Inapplicable Example 1

The rule does not apply to `svg` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="en"></svg>
```

---
id: bf051a
name: HTML page languages are valid
rule_type: atomic
description: |
  This rule checks that all HTML pages with a `lang` or `xml:lang` attribute on the root element, have a valid primary language subtag.
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

The root element of the [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s), if it is an `html` element with a `lang` and/or `xml:lang` attribute that is not empty ("").

**Note**: Documents embedded into other documents, such as through `iframe` or `object` elements are not applicable because they are not web pages according to the definition in WCAG.

## Expectation

For each test target, the `lang` and `xml:lang` attributes have a [valid language subtag](#valid-language-subtag) if the attribute is not empty ("").

## Assumptions

_There are currently no assumptions_

## Accessibility Support

There are known combinations of a popular operating system with browsers and assistive technologies that do not support the `lang` and `xml:lang` attributes.

While HTML5 specification indicates that `xml:lang` attribute takes priority over `lang` attribute, certain assistive technologies prioritise `lang` over `xml:lang` instead.

## Background

- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [MDN: `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
- [MDN: `xml:lang` attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang)

## Test Cases

### Passed

#### Passed Example 1

The `lang` attribute specified has a non-empty value & a valid primary language subtag.

```html
<html lang="fr"></html>
```

#### Passed Example 2

The `xml:lang` attribute specified has a non-empty value & a valid primary language subtag.

```html
<html xml:lang="fr"></html>
```

#### Passed Example 3

The `lang` and `xml:lang` attribute specified has a non-empty value & a valid primary language subtag.

```html
<html xml:lang="fr" lang="fr"></html>
```

#### Passed Example 4

The `lang` attribute specified has a non-empty value & a valid primary language subtag. The rule checks for the presence of either `lang` or `xml:lang`. Empty value specified for the other attribute is ignored.

```html
<html lang="fr" xml:lang=""></html>
```

#### Passed Example 5

The `xml:lang` attribute specified has a non-empty value & a valid primary language subtag. The rule checks for the presence of either `lang` or `xml:lang`. Empty value specified for the other attribute is ignored.

```html
<html lang="" xml:lang="nl"></html>
```

### Failed

#### Failed Example 1

The `lang` attribute value is not a valid primary language subtag.

```html
<html lang="xyz"></html>
```

#### Failed Example 2

The `xml:lang` attribute value is not a valid primary language subtag.

```html
<html xml:lang="xyz"></html>
```

#### Failed Example 3

Both the `lang` and `xml:lang` value specified are not valid values for primary language subtag.

```html
<html xml:lang="xyz" lang="xyz"></html>
```

#### Failed Example 4

The `lang` attribute value has a valid primary language subtag, but a syntactically invalid region subtag.

```html
<html lang="en-US-GB"></html>
```

#### Failed Example 5

The `lang` attribute value is not a valid primary language subtag.

```html
<html lang="123"></html>
```

#### Failed Example 6

The `lang` attribute value is not a valid primary language subtag.

```html
<html lang="#!"></html>
```

#### Failed Example 7

The `lang` attribute value is not a valid primary language subtag.

```html
<html lang=" "></html>
```

### Inapplicable

#### Inapplicable Example 1

The rule applies to `html` element and hence usage of `lang` attribute in `svg` element is not applicable.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="fr"></svg>
```

#### Inapplicable Example 2

The rule applies to `html` element and hence usage of `xml:lang` attribute in `svg` element is not applicable.

```svg
<svg xmlns="http://www.w3.org/2000/svg" xml:lang="fr"></svg>
```

#### Inapplicable Example 3

An empty value for `lang` attribute is ignored by this rule, as the applicability specifies only values that are not empty ("").

```html
<html lang=""></html>
```

#### Inapplicable Example 4

An empty value for `xml:lang` attribute is ignored by this rule, as the applicability specifies only values that are not empty ("").

```html
<html xml:lang=""></html>
```

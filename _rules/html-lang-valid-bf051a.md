---
id: bf051a
name: Validity of HTML Lang attribute
rule_type: atomic
description: |
  This rule checks that the `lang` or `xml:lang` attribute has a valid language subtag.
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

The root element of the page, if it is an `html` element with a `lang` and/or `xml:lang` attribute that is neither empty ("") nor only [whitespace](#whitespace).

## Expectation

The `lang` and `xml:lang` attributes have a [valid language subtag](#valid-language-subtag) if the attribute is neither empty ("") nor only [whitespace](#whitespace).

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

The `lang` attribute specified is neither empty ("") nor only [whitespace](#whitespace) and a valid primary language subtag.

```html
<html lang="fr"></html>
```

#### Passed Example 2

The `xml:lang` attribute specified is neither empty ("") nor only [whitespace](#whitespace) and a valid primary language subtag.

```html
<html xml:lang="fr"></html>
```

#### Passed Example 3

The `lang` and `xml:lang` attribute specified is neither empty ("") nor only [whitespace](#whitespace) and a valid primary language subtag.

```html
<html xml:lang="fr" lang="fr"></html>
```

#### Passed Example 4

The `lang` attribute specified is neither empty ("") nor only [whitespace](#whitespace) value and a valid primary language subtag. The rule checks for the presence of either `lang` or `xml:lang`. Empty value specified for the other attribute is ignored.

```html
<html lang="fr" xml:lang=""></html>
```

#### Passed Example 5

The `xml:lang` attribute specified is neither empty ("") nor only [whitespace](#whitespace) value and a valid primary language subtag. The rule checks for the presence of either `lang` or `xml:lang`. Empty value specified for the other attribute is ignored.

```html
<html lang="" xml:lang="nl"></html>
```

#### Passed Example 6

The `lang` attribute specified is neither empty ("") nor only [whitespace](#whitespace) value and a valid primary language subtag. The rule checks for the presence of either `lang` or `xml:lang`. Empty value specified for the other attribute is ignored.

```html
<html lang="nl" xml:lang=" "></html>
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
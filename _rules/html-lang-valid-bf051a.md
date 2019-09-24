---
id: bf051a
name: HTML page language is valid
rule_type: atomic
description: |
  This rule checks that the `lang` attribute of the root element of an HTML page have a valid primary language subtag.
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

The root element of the [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s), if it is an `html` element with a `lang` attribute that is neither empty ("") nor only [whitespace](#whitespace).

**Note**: Documents embedded into other documents, such as through `iframe` or `object` elements are not applicable because they are not web pages according to the definition in WCAG.

## Expectation

For each test target, the `lang` attribute has a [valid language subtag](#valid-language-subtag) if the attribute is neither empty ("") nor only [whitespace](#whitespace).

## Assumptions

[Documents](https://dom.spec.whatwg.org/#concept-document) are served with a [content type](https://dom.spec.whatwg.org/#concept-document-content-type) of `text/html`. If a document is served using a different content type, this can affect the interpretation of the `lang` attribute.

## Accessibility Support

There are known combinations of a popular operating system with browsers and assistive technologies that do not support the `lang` attribute.

## Background

- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [MDN: `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)

## Test Cases

### Passed

#### Passed Example 1

The `lang` attribute specified is neither empty ("") nor only [whitespace](#whitespace) and a valid primary language subtag.

```html
<html lang="fr"></html>
```

### Failed

#### Failed Example 1

The `lang` attribute value is not a valid primary language subtag.

```html
<html lang="xyz"></html>
```

#### Failed Example 2

The `lang` attribute value has a valid primary language subtag, but a syntactically invalid region subtag.

```html
<html lang="en-US-GB"></html>
```

#### Failed Example 3

The `lang` attribute value is not a valid primary language subtag.

```html
<html lang="123"></html>
```

#### Failed Example 4

The `lang` attribute value is not a valid primary language subtag.

```html
<html lang="#!"></html>
```

#### Failed Example 5

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

---
name: SC3-1-1-html-xml-lang-match

description: |
 The rule checks that for the `html` element, there is no mismatch between the primary language in [non-empty](#non-empty) `lang` and `xml:lang` attributes, if both are used.

success_criterion:
- 3.1.1

test_aspects:
- DOM Tree # The tree that HTML is parsed into.

authors:
- Annika Nietzio
- Jey Nandakumar
---

## Test Procedure

### Applicability

The root element of the page, if it is an `html` element with both [non-empty](#non-empty) `lang` and `xml:lang` attributes that conform to [PCB 47](https://www.ietf.org/rfc/bcp/bcp47.txt).

### Expectation

The value of the primary language sub-tag for the `lang` and `xml:lang` attributes are the same.

**Note**: HTML 5 specification requires the `lang` and `xml:lang` attributes to match exactly. This is not known to impact accessibility, which is why it is permitted in this rule.

## Assumptions

- Although there is no known way that an inappropriate secondary sub-tag in the `lang` or `xml:lang` attribute (such as "en-XYZ") can lead to accessibility issues, it is conceivable that with specific assistive technologies on some languages, there can be exceptions. In that case `lang` and `xml:lang` should have matching secondary sub-tags.

## Accessibility Support

Since most assistive technologies will consistently use `lang` over `xml:lang` when both are used, violation of this rule may not necessarily be a violation of WCAG 2. Only when there are inconsistencies between assistive technologies, as to which attribute is used to determine the language, does this lead to a violation of SC 3.1.1.

## Background

- https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57
- https://www.ietf.org/rfc/bcp/bcp47.txt
- https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang
- https://www.w3.org/TR/WCAG20-TECHS/H57.html

## Test Cases

### Passed

```html
<html lang="en" xml:lang="en">
```

```html
<html lang="en" xml:lang="En">
```

```html
<html lang="en" xml:lang="en-GB">
```

```html
<html lang="en-GB" xml:lang="en">
```

```html
<!-- lang/xml:lang value does not confirm to BCP 47 -->
<html lang="en-XYZ" xml:lang="en">
```

### Failed

```html
<html lang="fr" xml:lang="en">
```

```html
<!-- lang/xml:lang value does not confirm to BCP 47 -->
<html lang="en-XYZ" xml:lang="en">
```

### Inapplicable

```html
<svg lang="en" xml:lang="en">
```

```html
<html lang="fr" xml:lang="">
```

```html
<html lang="" xml:lang="">
```

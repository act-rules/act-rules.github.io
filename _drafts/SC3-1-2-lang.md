---
name: Validity of HTML Attribute with in elements of page body

description:
- This rule checks that `lang` and/or `xml:lang` attribute on elements with in the `body` of a web page are correct.

success_criterion:
- 3.1.2

test_aspects:
- DOM Tree

authors:
- Bryn Anderson
- Jey Nandakumar
---

## Test Procedure

### Applicability

- Any DOM element, other than the root DOM node with a `lang` and/or `xml:lang` attribute.

### Expectation

- The value of the `lang` and/or `xml:lang` conforms to [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt).

## Assumptions

*There are currently no assumptions*

## Accessibility support

This rule is only applicable in a scenario where assistive technologies are inconsistent about how they determine the language of the page.

## Background

- https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H58
- https://www.ietf.org/rfc/bcp/bcp47.txt
- http://wiki.egovmon.no/wiki/SC3.1.2#Element_descendent-or-self::body.5B.40lang.5D_or_descendent-or-self::body.5B.40xml:lang.5D
- https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=312#qr-meaning-other-lang-id

## Test Cases

### Selector

Retrieve all DOM nodes with a `lang` and or `xml:lang` attribute, other than the root node
`descendent-or-self::body[@lang]` -or-  `descendent-or-self::body[@xml:lang]`

### Passed

```html
<article lang="en">
```

```html
<p xml:lang="DE">
```

```html
<blockquote lang="fr-CH">
```

### Failed

```html
<article lang="dutch">
```

```html
<p xml:lang="english">
```

### Inapplicable

*none*

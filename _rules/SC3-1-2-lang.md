---
name: Validity of lang attribute value in html body elements

description:
- This rule checks that `lang` and/or `xml:lang` attribute on elements within the `body` of a web page conforms to [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt).

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

- Any DOM element, other than the root DOM node with a [non-empty][] `lang` and/or `xml:lang` attribute.

**Note**: To retrieve all DOM nodes with a `lang` and or `xml:lang` attribute, other than the root node use -
`descendent-or-self::body[@lang]` -or-  `descendent-or-self::body[@xml:lang]`.

### Expectation

- The value of the `lang` and/or `xml:lang` conforms to [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt).

## Assumptions

*There are currently no assumptions*

## Accessibility support

Most assistive technologies will rely solely on the `lang` attribute for determining the language of the page. The requirement tested in this rule will only give rise to accessibility issues in cases where assistive technologies are inconsistent about how they determine the language of the page.

## Background

- https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H58
- https://www.ietf.org/rfc/bcp/bcp47.txt
- http://wiki.egovmon.no/wiki/SC3.1.2#Element_descendent-or-self::body.5B.40lang.5D_or_descendent-or-self::body.5B.40xml:lang.5D
- https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=312#qr-meaning-other-lang-id

## Test Cases

### Passed

```html
<article lang="en"></article>
```

```html
<p xml:lang="DE"></p>
```

```html
<blockquote lang="fr-CH"></blockquote>
```

### Failed

```html
<article lang="dutch"></article>
```

```html
<p xml:lang="english"></p>
```

### Inapplicable

```html
<article lang=""></article>
```

[non-empty]: ../pages/algorithms/non-empty.html
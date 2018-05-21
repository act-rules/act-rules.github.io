---
name: Validity of lang attribute value in html body elements

description:
- This rule checks that `lang` or `xml:lang` attribute on elements within the `body` of a web page conforms to [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt).

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

- Any DOM element, within the `body` of a webpage with a [non-empty][] `lang` or `xml:lang` attribute.

**Note**: To retrieve all DOM elements with a `lang` or `xml:lang` attribute, other than the root element use -
`descendent-or-self::body[@lang]` -or-  `descendent-or-self::body[@xml:lang]`.

### Expectation

- The value of the `lang` or `xml:lang` conforms to [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt).

## Assumptions

*There are currently no assumptions*

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

```html
<p lang="en" xml:lang="en-GB">Good Morning.</p>
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
---
name: Valid body lang attribute

description:
- This rule checks that `lang` or `xml:lang` attributes on elements within the `body` of a web page has a valid language subtag.

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

Any DOM element, within the `body` of a webpage with a [non-empty](#non-empty) `lang` or `xml:lang` attribute.

### Expectation

The `lang` and `xml:lang` attributes have a [valid language subtag](#valid-language-subtag) if the attribute is [non-empty](#non-empty).

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
<html>
<body> 
  <article lang="en"></article>
</body>
</html>
```

```html
<html>
<body>
  <p xml:lang="DE"></p>
</body>
</html>
```

```html
<html>
<body>
  <blockquote lang="fr-CH"></blockquote>
</body>
</html>
```

```html
<html>
<body>
  <p lang="en" xml:lang="en-GB">Good Morning.</p>
</body>
</html>
```

### Failed

```html
<html>
<body>
  <article lang="dutch"></article>
</body>
</html>
```

```html
<html>
<body>
  <p xml:lang="english"></p>
</body>
</html>
```

### Inapplicable

```html
<html lang="en">
<body>
</body>
</html>
```

```html
<html>
<body>
<article lang=""></article>
</body>
</html>
```

```html
<html>
<body>
<article xml:lang=""></article>
</body>
</html>
```

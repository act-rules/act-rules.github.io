---
name: Valid body lang attribute

description: |
 This rule checks that `lang` or `xml:lang` attributes on elements within the `body` of a web page has a valid language subtag.

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

This rules applies to each HTML or SVG element that is a [descendant](https://www.w3.org/TR/dom41/#concept-tree-descendant) of the `body` element and has a `lang` or `xml:lang` attribute that is not the empty string ("").

### Expectation

The `lang` and `xml:lang` attributes of the test target have a [valid language subtag](#valid-language-subtag) if the attribute is not the empty string ("").

## Assumptions

_There are currently no assumptions for this rule_

## Accessibility support

_There are no major accessibility support issues known for this rule._

## Background

- [https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H58](https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H58)
- [https://www.ietf.org/rfc/bcp/bcp47.txt](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [http://wiki.egovmon.no/wiki/SC3.1.2#Element_descendent-or-self::body.5B.40lang.5D_or_descendent-or-self::body.5B.40xml:lang.5D](http://wiki.egovmon.no/wiki/SC3.1.2#Element_descendent-or-self::body.5B.40lang.)
- [https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=312#qr-meaning-other-lang-id](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=312#qr-meaning-other-lang-id)

## Test Cases

### Passed

#### Passed example 1

The `lang` attribute has a value that is not the empty string ("") and has a valid primary language subtag.

```html
<html>
<body> 
  <article lang="en"></article>
</body>
</html>
```

#### Passed example 2

The `xml:lang` attribute has a value that is not the empty string ("") and has a valid primary language subtag.

```html
<html>
<body>
  <p xml:lang="DE"></p>
</body>
</html>
```

#### Passed example 3

The `lang` attribute has a value that is not the empty string ("") and has a valid primary language subtag. The region section in the value is ignored by the rule.

```html
<html>
<body>
  <blockquote lang="fr-CH"></blockquote>
</body>
</html>
```

#### Passed example 4

The `lang` and `xml:lang` attributes values that are not the empty string ("") and has valid primary language subtags.

```html
<html>
<body>
  <p lang="en" xml:lang="en-GB">Good Morning.</p>
</body>
</html>
```

#### Passed example 5

The `lang` and `xml:lang` attributes values are either the empty string ("") or has a valid primary language subtag.

```html
<html>
<body>
  <p lang="en" xml:lang="">Good Morning.</p>
</body>
</html>
```

### Failed

#### Failed example 1

The `lang` attribute value is not a valid primary language subtag.

```html
<html>
<body>
  <article lang="dutch"></article>
</body>
</html>
```

#### Failed example 2

The `xml:lang` attribute value is not a valid primary language subtag.

```html
<html>
<body>
  <p xml:lang="english"></p>
</body>
</html>
```

#### Fail example 3

The `lang` attribute value has a valid primary language subtag, but a syntactically invalid region subtag.

```html
<html>
<body>
  <p lang="en-US-GB"></p>
</body>
</html>
```

#### Failed example 4

The `lang` attribute value is not the empty string and is not a valid primary language subtag.

```html
<html>
<body>
  <article lang=" "></article>
</body>
</html>
```

#### Failed example 5

The `lang` attribute value is not the empty string and is not a valid primary language subtag.

```html
<html>
<body>
  <article lang="#!"></article>
</body>
</html>
```

#### Failed example 5

The `lang` attribute value is not the empty string and is not a valid primary language subtag.

```html
<html>
<body>
  <article lang="123"></article>
</body>
</html>
```

### Inapplicable

#### Inapplicable example 1


The rule applies to elements with the `body` of a webpage. `html` elements are ignored by the rule.

```html
<html lang="en">
	<body>
	</body>
</html>
```

#### Inapplicable example 2

An empty value for `lang` attribute is ignored by this rule, as the applicability specifies only values that are not the empty string ("").

```html
<html>
	<body>
		<article lang=""></article>
	</body>
</html>
```

#### Inapplicable example 3

An empty value for `xml:lang` attribute is ignored by this rule, as the applicability specifies only values that are not the empty string ("").

```html
<html>
	<body>
		<article xml:lang=""></article>
	</body>
</html>
```

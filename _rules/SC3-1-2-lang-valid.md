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

Any DOM element, within the `body` of a webpage with a [non-empty](#non-empty) `lang` or `xml:lang` attribute.

### Expectation

The `lang` and `xml:lang` attributes have a [valid language subtag](#valid-language-subtag) if the attribute is [non-empty](#non-empty).

## Assumptions

*There are currently no assumptions*

## Background

- [https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H58](https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H58)
- [https://www.ietf.org/rfc/bcp/bcp47.txt](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [http://wiki.egovmon.no/wiki/SC3.1.2#Element_descendent-or-self::body.5B.40lang.5D_or_descendent-or-self::body.5B.40xml:lang.5D](http://wiki.egovmon.no/wiki/SC3.1.2#Element_descendent-or-self::body.5B.40lang.)
- [https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=312#qr-meaning-other-lang-id](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=312#qr-meaning-other-lang-id)

## Test Cases

### Passed

#### Passed example 1

The `lang` attribute specified has a non-empty value & a valid primary language subtag.

```html
<html>
<body> 
  <article data-rule-target lang="en"></article>
</body>
</html>
```

#### Passed example 2

The `xml:lang` attribute specified has a non-empty value & a valid primary language subtag.

```html
<html>
<body>
  <p data-rule-target xml:lang="DE"></p>
</body>
</html>
```

#### Passed example 3

The `lang` attribute specified has a non-empty value & a valid primary language subtag. The region section in the value is ignored by the rule.

```html
<html>
<body>
  <blockquote data-rule-target lang="fr-CH"></blockquote>
</body>
</html>
```

#### Passed example 4

The `lang` and `xml:lang` attribute specified has a non-empty value & a valid primary language subtag.

```html
<html>
<body>
  <p data-rule-target lang="en" xml:lang="en-GB">Good Morning.</p>
</body>
</html>
```

### Failed

#### Failed example 1

The `lang` attribute value is not a valid primary language subtag.

```html
<html>
<body>
  <article data-rule-target lang="dutch"></article>
</body>
</html>
```

#### Failed example 2

The `xml:lang` attribute value is not a valid primary language subtag.

```html
<html>
<body>
  <p data-rule-target xml:lang="english"></p>
</body>
</html>
```

### Inapplicable

#### Inapplicable example 1


The rule applies to elements with the `body` of a webpage. `html` elements are ignored by the rule.

```html
<html lang="en">
	<body data-rule-target>
	</body>
</html>
```

#### Inapplicable example 2

An empty value for `lang` attribute is ignored by this rule, as the applicability specifies only non-empty values.

```html
<html>
	<body>
		<article data-rule-target lang=""></article>
	</body>
</html>
```

#### Inapplicable example 3

An empty value for `xml:lang` attribute is ignored by this rule, as the applicability specifies only non-empty values.

```html
<html>
	<body>
		<article data-rule-target xml:lang=""></article>
	</body>
</html>
```
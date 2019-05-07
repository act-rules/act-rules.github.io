---
id: de46e4
name: Valid body lang attribute
rule_type: atomic
description: |
  This rule checks that `lang` or `xml:lang` attributes on elements within the `body` of a web page have a valid language subtag.
accessibility_requirements:
  wcag20:3.1.2: # Language of Parts (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
authors:
  - Bryn Anderson
  - Jey Nandakumar
---


## Applicability

Any DOM element, within the `body` of a webpage with a [non-empty](#non-empty) `lang` or `xml:lang` attribute.

## Expectation

The `lang` and `xml:lang` attributes have a [valid language subtag](#valid-language-subtag) if the attribute is [non-empty](#non-empty).

## Assumptions

This rule assumes that the presence of a lang or xml:lang attribute is being used to comply to WCAG. This rule doesn't test if the attribute is needed to comply to WCAG.

## Background

- [https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H58](https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H58)
- [https://www.ietf.org/rfc/bcp/bcp47.txt](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [http://wiki.egovmon.no/wiki/SC3.1.2#Element_descendent-or-self::body.5B.40lang.5D_or_descendent-or-self::body.5B.40xml:lang.5D](http://wiki.egovmon.no/wiki/SC3.1.2#Element_descendent-or-self::body.5B.40lang.)
- [https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=312#qr-meaning-other-lang-id](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=312#qr-meaning-other-lang-id)

## Test Cases

### Passed

#### Passed Example 1

The `lang` attribute specified has a non-empty value & a valid primary language subtag.

```html
<html>
	<body>
		<article lang="en"></article>
	</body>
</html>
```

#### Passed Example 2

The `xml:lang` attribute specified has a non-empty value & a valid primary language subtag.

```html
<html>
	<body>
		<p xml:lang="DE"></p>
	</body>
</html>
```

#### Passed Example 3

The `lang` attribute specified has a non-empty value & a valid primary language subtag. The region section in the value is ignored by the rule.

```html
<html>
	<body>
		<blockquote lang="fr-CH"></blockquote>
	</body>
</html>
```

#### Passed Example 4

The `lang` and `xml:lang` attribute specified has a non-empty value & a valid primary language subtag.

```html
<html>
	<body>
		<p lang="en" xml:lang="en-GB">Good Morning.</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

The `lang` attribute value is not a valid primary language subtag.

```html
<html>
	<body>
		<article lang="dutch"></article>
	</body>
</html>
```

#### Failed Example 2

The `xml:lang` attribute value is not a valid primary language subtag.

```html
<html>
	<body>
		<p xml:lang="english"></p>
	</body>
</html>
```

#### Failed Example 3

The `lang` attribute value has a valid primary language subtag, but a syntactically invalid region subtag.

```html
<html>
	<body>
		<p lang="en-US-GB"></p>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The rule applies to elements with the `body` of a webpage. `html` elements are ignored by the rule.

```html
<html lang="en">
	<body></body>
</html>
```

#### Inapplicable Example 2

An empty value for `lang` attribute is ignored by this rule, as the applicability specifies only non-empty values.

```html
<html>
	<body>
		<article lang=""></article>
	</body>
</html>
```

#### Inapplicable Example 3

An empty value for `xml:lang` attribute is ignored by this rule, as the applicability specifies only non-empty values.

```html
<html>
	<body>
		<article xml:lang=""></article>
	</body>
</html>
```

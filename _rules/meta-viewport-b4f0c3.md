---
id: b4f0c3
name: Meta viewport allows for zoom
rule_type: atomic
description: |
  This rule checks that the `meta` element retains the user agent ability to zoom.
accessibility_requirements:
  wcag20:1.4.4: # Resize text (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag21:1.4.10: # Reflow (AA)
    secondary: This success criterion is **related** to this rule. This is because a page that cannot be zoomed up to 200% often does not reflow sufficiently either. Most failed examples satisfy this success criterion.
input_aspects:
  - DOM Tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
  previous_authors:
    - Audrey Maniez
    - Jey Nandakumar
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to each `content` attribute for which all of the following are true:

- the attribute is defined on a `meta` element with a `name` [attribute value][] of `viewport`; and
- the [attribute value][] has at least one of the `maximum-scale` or `user-scalable` keys.

For the purpose of this rule, the [attribute value][] of the `content` attribute is a list of key/value pairs.

## Expectation 1

For each test target's [attribute value][], at least one of the following is true:

- `user-scalable` is not defined; or
- `user-scalable` is `yes`, `device-width` or `device-height`; or
- `user-scalable` is a number which is not between -1 and 1 (excluded).

**Note:** This is equivalent to applying the [translations into a `@viewport` descriptors][descriptor translation] and not obtaining a value of `fixed` for the `user-zoom` descriptor from [the translation for `user-scalable`](https://www.w3.org/TR/css-device-adapt-1/#user-scalable).

## Expectation 2

For each test target's [attribute value][], at least one of the following is true:

- `maximum-scale` is not defined; or
- `maximum-scale` is `device-width` or `device-height`; or
- `maximum-scale` is a negative number; or
- `maximum-scale` is a number which is 2 or more.

**Note:** This is equivalent to applying the [translations into a `@viewport` descriptors][descriptor translation] and not obtaining a value smaller than 2 for the `max-zoom` descriptor from [the translation for `maximum-scale`](https://www.w3.org/TR/css-device-adapt-1/#min-scale-max-scale).

## Assumptions

Pages for which any of the following is true may satisfy Success Criteria [1.4.4 Resize text][sc144] and [1.4.10 Reflow][sc1410], even if the rule results in a failed outcome.

- The [page][] has no [visible][] [content][]; or
- There is another [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism) available to resize the text content; or
- The [content][] does not need to reflow in order to fit in an area of 320 by 256 [CSS pixels][].

## Accessibility Support

Desktop browsers ignore the viewport `meta` element, and most modern mobile browsers either ignore it by default or have an accessibility option which will allow zooming. This rule is not relevant for desktop browsers, nor for most modern mobile browsers. Only users with older mobile browsers can experience issues tested by this rule.

The exact way the `content` attribute should be parsed (notably, for error handling) is not fully specified. CSS specification includes a [non-normative parsing algorithm](https://www.w3.org/TR/css-device-adapt-1/#parsing-algorithm). Different user agents may behave differently in some cases.

## Background

### Bibliography

- [Understanding Success Criterion 1.4.4: Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)
- [Understanding Success Criterion 1.4.10: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow)
- [HTML Specification - The `meta` element][meta]
- [The initial-scale, minimum-scale, and maximum-scale properties][maximum-scale]
- [The user-scalable property][user-scalable]

## Test Cases

### Passed

#### Passed Example 1

This viewport `meta` element does not prevent user scaling because it has `user-scalable` set to `yes`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="user-scalable=yes" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Passed Example 2

This viewport `meta` element does not prevent user scaling because it has `user-scalable` set to `5`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="user-scalable=5" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Passed Example 3

This viewport `meta` element allows users to scale content up to 200% because it has `maximum-scale` set to 2.0.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=2.0" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Passed Example 4

This viewport `meta` element does not prevent user scaling because it has `maximum-scale` set to -1, a negative value.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=-1" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Passed Example 5

This viewport `meta` element does not prevent user scaling because it has `maximum-scale` set to `device-width`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=device-width" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

This viewport `meta` element prevents user scaling because it has `user-scalable` set to `no`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="user-scalable=no" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Failed Example 2

This viewport `meta` element prevents user scaling because it has `user-scalable` set to `0.5`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="user-scalable=0.5" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Failed Example 3

This viewport `meta` element prevents user scaling because it has `user-scalable` set to `invalid`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="user-scalable=invalid" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Failed Example 4

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to 1.5.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="user-scalable=yes, initial-scale=0.8, maximum-scale=1.5" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Failed Example 5

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to `yes`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=yes" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Failed Example 6

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to `yes`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=yes" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Failed Example 7

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to `invalid`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=invalid" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

There is no viewport `meta` element.

```html
<html>
	<head>
		<title>Lorem ipsum</title>
		<meta charset="UTF-8" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Inapplicable Example 2

This viewport `meta` element does not have a `content` attribute.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Inapplicable Example 3

This viewport `meta` element does not specify the `maximum-scale` nor `user-scalable` values.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="width=device-width" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Inapplicable Example 4

This viewport `meta` element does not prevent user scaling because it does not specify the `maximum-scale` nor `user-scalable` values.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

[attribute value]: #attribute-value 'Definition of attribute value'
[content]: https://www.w3.org/TR/WCAG22/#dfn-content 'content (Web content)'
[css pixels]: https://www.w3.org/TR/css3-values/#reference-pixel 'CSS 3 definition, reference pixel'
[descriptor translation]: https://www.w3.org/TR/css-device-adapt-1/#translate-meta-to-at-viewport 'Translations of the content attribute into @viewport descriptors'
[meta]: https://html.spec.whatwg.org/#the-meta-element 'The meta element'
[maximum-scale]: https://www.w3.org/TR/css-device-adapt-1/#min-scale-max-scale 'The initial-scale, minimum-scale, and maximum-scale properties'
[page]: https://www.w3.org/TR/WCAG22/#dfn-web-page-s 'Web page'
[sc144]: https://www.w3.org/TR/WCAG22/#resize-text 'WCAG 2.2 Success Criterion 1.4.4 Resize text'
[sc1410]: https://www.w3.org/TR/WCAG22/#reflow 'WCAG 2.2 Success Criterion 1.4.10 Reflow'
[user-scalable]: https://www.w3.org/TR/css-device-adapt-1/#user-scalable 'The user-scalable property'
[visible]: #visible 'Definition of visible'

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
input_aspects:
  - DOM Tree
acknowledgments:
  authors:
    - Audrey Maniez
    - Jey Nandakumar
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to each `content` attribute on a `meta` element with a `name` [attribute value][] of `viewport` for which at least one of the following is true:

- the `content` attribute specified value includes the text `user-scalable`; or
- the `content` attribute specified value includes the text `maximum-scale`.

**Note:** The Applicability refers to string inclusion of the indicated strings in the value of the `content` attribute, as written.

## Expectation 1

For each test target, the [attribute value][] does not have a `user-scalable` property with a value of `fixed`.

The [attribute value][] of the `content` attribute is a list of key-value pairs, obtained by parsing the specified value, then applying the [translations into `@viewport` descriptors][descriptor translation], notably [the translation for `user-scalable`](https://www.w3.org/TR/css-device-adapt-1/#user-scalable), and using the value obtained for `user-zoom`.

## Expectation 2

For each test target, the [attribute value][] does not have a `maximum-scale` property with a value less than 2.

The [attribute value][] of the `content` attribute is a list of key-value pairs, obtained by parsing the specified value, then applying the [translations into `@viewport` descriptors][descriptor translation], notably [the translation for `maximum-scale`](https://www.w3.org/TR/css-device-adapt-1/#min-scale-max-scale) (including dropping the key-value pair completely for invalid values), and using the value obtained for `max-zoom`.

## Assumptions

Pages for which any of the following is true may satisfy Success Criteria [1.4.4 Resize text][sc144] and [1.4.10 Reflow][sc1410], even if the rule results in a failed outcome.

- The [page][] has no [visible][] [content][]; or
- There is another [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) available to resize the text content; or
- The [content][] does not need to reflow in order to fit in an area of 320 by 256 [CSS pixels][].

## Accessibility Support

Desktop browsers ignore the viewport `meta` element, and most modern mobile browsers either ignore it by default or have an accessibility option which will allow zooming. This rule is not relevant for desktop browsers, nor for most modern mobile browsers. Only users with older mobile browsers can experience issues tested by this rule.

The exact way the `content` attribute should be parsed (notably, for error handling) is not fully specified. CSS specification includes a [non-normative parsing algorithm](https://www.w3.org/TR/css-device-adapt-1/#parsing-algorithm). Different user agents may behave differently in some cases.

## Background

This rule is designed specifically for [1.4.4 Resize text][sc144], which requires that text can be resized up to 200%. Because text that can not be resized up to 200% can not fit in an area of 320 by 256 [CSS pixels][], this rule maps to [1.4.10 Reflow][sc1410] as well. All passed examples in this rule satisfy both success criteria.

### Bibliography

- [Understanding Success Criterion 1.4.4: Resize text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text)
- [HTML Specification - The `meta` element][meta]
- [The initial-scale, minimum-scale, and maximum-scale properties][maximum-scale]
- [The user-scalable property][user-scalable]

## Test Cases

### Passed

#### Passed Example 1

This viewport `meta` element does not prevent user scaling because it has `user-scalable` set to `yes`, which translates to a `user-zoom` of `zoom`.

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

This viewport `meta` element does not prevent user scaling because it has `user-scalable` set to `5`, which translates to a `user-zoom` of `zoom`.

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

This viewport `meta` element allows users to scale content up to 200% because it has `maximum-scale` set to 2.0, which translated to a `max-zoom` of 2.

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

This viewport `meta` element does not prevent user scaling because it has `maximum-scale` set to -1 which results in this key-value pair being dropped.

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

This viewport `meta` element does not prevent user scaling because it has `maximum-scale` set to `device-width` which translate to a `max-zoom` of 10.

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

This viewport `meta` element prevents user scaling because it has `user-scalable` set to `no`, which translate to a `user-zoom` of `fixed`.

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

This viewport `meta` element prevents user scaling because it has `user-scalable` set to `0.5`, which translate to a `user-zoom` of `fixed`.

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

This viewport `meta` element prevents user scaling because it has `user-scalable` set to `invalid`, which translate to a `user-zoom` of `fixed`.

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

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to `yes`, which translate to a `max-zoom` of 1.

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

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to `yes` which translates to 1.0.

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

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to `invalid` which translates to 0.1.

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
[content]: https://www.w3.org/TR/WCAG21/#dfn-content 'content (Web content)'
[css pixels]: https://www.w3.org/TR/css3-values/#reference-pixel 'CSS 3 definition, reference pixel'
[descriptor translation]: https://www.w3.org/TR/css-device-adapt-1/#translate-meta-to-at-viewport 'Translations of the content attribute into @viewport descriptors'
[meta]: https://html.spec.whatwg.org/#the-meta-element 'The meta element'
[maximum-scale]: https://www.w3.org/TR/css-device-adapt-1/#min-scale-max-scale 'The initial-scale, minimum-scale, and maximum-scale properties'
[page]: https://www.w3.org/TR/WCAG21/#dfn-web-page-s 'Web page'
[sc144]: https://www.w3.org/TR/WCAG21/#resize-text 'WCAG 2.1 Success Criterion 1.4.4 Resize text'
[sc1410]: https://www.w3.org/TR/WCAG21/#reflow 'WCAG 2.1 Success Criterion 1.4.10 Reflow'
[user-scalable]: https://www.w3.org/TR/css-device-adapt-1/#user-scalable 'The user-scalable property'
[visible]: #visible 'Definition of visible'

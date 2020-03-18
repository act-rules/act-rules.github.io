---
id: b4f0c3
name: '`meta` `viewport` does not prevent zoom'
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
    - Jey Nandakumar
    - Audrey Maniez
---

## Applicability

The rule applies to each `meta` element with a `name` attribute whose value is a [case-insensitive][] match for `viewport` and has a `content` attribute.

## Expectation

For each test target, the `content` attribute, whose value is mapped to a list of property/value pairs in a user-agent specific manner, does not:

- specify the property `user-scalable` with a value of `no`; nor
- specify the property `maximum-scale` with a value of less than 2.

## Assumptions

- The [page][] has [visible][] [content][].

## Accessibility Support

Desktop browsers ignore the viewport `meta` element, and most modern mobile browsers either ignore it by default or have an accessibility option which will allow zooming. This rule is not relevant for desktop browsers, nor for most modern mobile browsers. Only users with older mobile browsers can experience issues tested by this rule.

## Background

- [Understanding Success Criterion 1.4.4: Resize text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text)
- [HTML Specification - The `meta` element][meta]
- [The initial-scale, minimum-scale, and maximum-scale properties][maximum-scale]
- [The user-scalable property][user-scalable]

## Test Cases

### Passed

#### Passed Example 1

This viewport `meta` element does not prevent user scaling because it does not specify the `maximum-scale` and `user-scalable` values.

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

#### Passed Example 2

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

#### Passed Example 3

This viewport `meta` element allows users to scale content up to 600% because it has `maximum-scale` set to 6.0.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=6.0" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Passed Example 4

This viewport `meta` element does not prevent user scaling because it does not specify the `maximum-scale` and `user-scalable` values.

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

#### Passed Example 5

This viewport `meta` element does not prevent user scaling because it has `maximum-scale` set to -1 which results in this value being dropped.

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

#### Failed Example 3

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to 1.0.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=1.0" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Failed Example 4

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

### Inapplicable

#### Inapplicable Example 1

There is no viewport `meta` element.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta http-equiv="refresh" content="10; URL='https://github.com'" />
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

[case-insensitive]: https://infra.spec.whatwg.org/#ascii-case-insensitive 'ASCII case-insensitive'
[content]: https://www.w3.org/TR/WCAG21/#dfn-content 'content (Web content)'
[maximum-scale]: https://www.w3.org/TR/css-device-adapt-1/#min-scale-max-scale 'The initial-scale, minimum-scale, and maximum-scale properties'
[meta]: https://html.spec.whatwg.org/#the-meta-element 'The meta element'
[page]: https://www.w3.org/TR/WCAG21/#dfn-web-page-s 'Web page'
[user-scalable]: https://www.w3.org/TR/css-device-adapt-1/#user-scalable 'The user-scalable property'
[visible]: #visible 'Definition of visible'
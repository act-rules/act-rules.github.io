---
id: b4f0c3
name: meta viewport does not prevent zoom
rule_type: atomic
description: |
  This rule checks that the `meta` element is not used to block the user agent ability to zoom.
accessibility_requirements:
  wcag21:1.4.4: # Resize text (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
authors:
  - Jey Nandakumar
  - Audrey Maniez
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'title-require'
---

## Applicability

The rule applies to each `meta` element with a `name` attribute whose value is set to [`viewport`](https://www.w3.org/TR/css-device-adapt-1/#viewport-meta) and has a `content` attribute.

## Expectation

For each test target, the [`content`](https://www.w3.org/TR/html52/document-metadata.html#dom-htmlmetaelement-content) attribute, whose value is mapped to a list of property/value pairs in a user-agent specific manner, does not:

- specify the property `user-scalable` with a value of `no`; nor
- specify the property `maximum-scale` with a value of less than 2

## Assumptions

- The [page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) has [visible](#visible) [content](https://www.w3.org/TR/WCAG21/#dfn-content).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 1.4.4: Resize text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text)
- [The `meta` element](https://www.w3.org/TR/html52/document-metadata.html#the-meta-element)

## Test Cases

### Passed

#### Passed Example 1

The `meta name="viewport"` element does not define the `maximum-scale` and `user-scalable` values.

```html
<html>
	<head>
		<meta name="viewport" content="width=device-width" />
	</head>
	<body>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</body>
</html>
```

#### Passed Example 2

The `meta name="viewport"` element defines the `user-scalable=yes` so the user can still zoom in.

```html
<html>
	<head>
		<meta name="viewport" content="width=device-width, user-scalable=yes" />
	</head>
	<body>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</body>
</html>
```

#### Passed Example 3

The `meta name="viewport"` element defines the `maximum-scale=6.0` which allows the user to zoom.

```html
<html>
	<head>
		<meta name="viewport" content="width=device-width, maximum-scale=6.0" />
	</head>
	<body>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</body>
</html>
```

#### Passed Example 4

The `meta name="viewport"` element has an empty `content` attribute.

```html
<html>
	<head>
		<meta name="viewport" content="" />
	</head>
	<body>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</body>
</html>
```

#### Passed Example 5

The `meta name="viewport"` element sets the `maximum-scale=2` so the user can zoom in more than twice (200%).

```html
<html>
	<head>
		<meta name="viewport" content="width=device-width, maximum-scale=2.0" />
	</head>
	<body>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

The `meta name="viewport"` element defines the `user-scalable=no` so the user can't zoom in.

```html
<html>
	<head>
		<meta name="viewport" content="width=device-width, user-scalable=no" />
	</head>
	<body>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</body>
</html>
```

#### Failed Example 2

The `meta name="viewport"` element defines the `user-scalable=yes`, but prevents `maximum-scale` to `1.5`.

```html
<html>
	<head>
		<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=0.8, maximum-scale=1.5" />
	</head>
	<body>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</body>
</html>
```

#### Failed Example 3

The `meta name="viewport"` element sets the `maximum-scale=1.0` so the user can't zoom in.

```html
<html>
	<head>
		<meta name="viewport" content="width=device-width, maximum-scale=1.0" />
	</head>
	<body>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The `meta name="viewport"` element is not present within the page.

```html
<html>
	<head>
		<meta http-equiv="refresh" content="10; URL='https://github.com'" />
	</head>
	<body>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</body>
</html>
```

#### Inapplicable Example 2

The `meta name="viewport"` element does not have `content` attribute.

```html
<html>
	<head>
		<meta name="viewport" />
	</head>
	<body>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</body>
</html>
```

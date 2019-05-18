---
id: 2779a5
name: HTML Page has a title
rule_type: atomic
description: |
  This rule checks that the HTML page has a title
accessibility_requirements:
  wcag20:2.4.2: # Page Titled (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
authors:
  - Wilco Fiers
  - Stein Erik Skotkjerra
  - Bryn Anderson
  - Anne Thyme Nørregaard
  - Jey Nandakumar
---

## Applicability

The rule applies to any page where the [document element](https://www.w3.org/TR/dom/#document-element) is an `html` element, and where the page is not embedded in another page.

**Note**: Pages may be embedded inside other pages through elements such as `iframe` and `object` elements.

## Expectation 1

The [document element](https://www.w3.org/TR/dom/#document-element) has at least one [descendant](https://www.w3.org/TR/dom41/#concept-tree-descendant) that is an HTML `title` element.

**Note**: The `title` element exists in other namespaces such as SVG. These are not HTML `title` elements and should be ignored for this rule.

## Expectation 2

The first HTML `title` element that is a [descendant](https://www.w3.org/TR/dom41/#concept-tree-descendant) of the [document element](https://www.w3.org/TR/dom/#document-element) has [children](https://www.w3.org/TR/dom/#concept-tree-child) that are [text nodes](https://www.w3.org/TR/dom/#text) that are not only [whitespace](#whitespace).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)
- [https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=242#qr-navigation-mechanisms-title](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=242#qr-navigation-mechanisms-title)
- [https://www.w3.org/TR/WCAG20-TECHS/G88.html](https://www.w3.org/TR/WCAG20-TECHS/G88.html)
- [https://www.w3.org/TR/WCAG20-TECHS/H25.html](https://www.w3.org/TR/WCAG20-TECHS/H25.html)

## Test Cases

### Passed

#### Passed Example 1

This page has a `title` with content.

```html
<html>
	<title>This page has a title</title>
</html>
```

#### Passed Example 2

This page gives a `title` to an iframe.

```html
<html>
	<title>This page gives a title to an iframe</title>
	<iframe src="../test-assets/sc2-4-2-title-page-without-title.html"></iframe>
</html>
```

#### Passed Example 3

This page has two `title` elements.

```html
<html>
	<head>
		<title>Title of the page.</title>
	</head>
	<body>
		<title>Title of the page.</title>
	</body>
</html>
```

#### Passed Example 4

The `title` is in the `body`.

```html
<html>
	<body>
		<title>Title of the page.</title>
	</body>
</html>
```

#### Passed Example 5

The first `title` element has content.

```html
<html>
	<head>
		<title>Title of the page.</title>
	</head>
	<body>
		<title></title>
	</body>
</html>
```

#### Passed Example 6

The `title` only contains characters that are not letters or numbers.

```html
<html>
	<title>#$@&%*!</title>
</html>
```

### Failed

#### Failed Example 1

The page has no `title`.

```html
<html>
	<h1>this page has no title</h1>
</html>
```

#### Failed Example 2

The `title` element is empty.

```html
<html>
	<title></title>
</html>
```

#### Failed Example 3

The page has no `title`.

```html
<html>
	<iframe src="../test-assets/sc2-4-2-title-page-with-title.html"></iframe>
</html>
```

#### Failed Example 4

The first `title` element is empty.

```html
<html>
	<head>
		<title></title>
	</head>
	<body>
		<title>Title of the page.</title>
	</body>
</html>
```

#### Failed Example 5

The `title` only contains a separator character.

```html
<html>
	<title> </title>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This rule is not applicable to `svg` elements.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

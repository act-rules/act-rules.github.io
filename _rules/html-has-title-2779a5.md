---
id: 2779a5
name: HTML page has title
rule_type: atomic
description: |
  This rule checks that an HTML page has a title.
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
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'title-require'
---

## Applicability

The root element of the [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s), if it is an `html` element.

**Note**: Documents embedded into other documents, such as through `iframe` or `object` elements are not applicable because they are not web pages according to the definition in WCAG.

## Expectation 1

Each target element has at least one [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) that is an HTML `title` element.

**Note**: The `title` element exists in other namespaces such as SVG. These are not HTML `title` elements and should be ignored for this rule.

**Note**: The [HTML 5.2 specification](https://www.w3.org/TR/html52/document-metadata.html#the-title-element) requires that a document only has one `title` element, and that it is a child of the `head` element of a document. However, HTMl 5.2 also describes what should happen in case of multiple titles, and titles outside the `head` element. Because of this, neither of these validation issues causes a conformance problem for WCAG.

## Expectation 2

For each target element, the first HTML `title` element that is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of the [document element](https://dom.spec.whatwg.org/#document-element) has [children](https://dom.spec.whatwg.org/#concept-tree-child) that are [text nodes](https://dom.spec.whatwg.org/#text) that are not only [whitespace](#whitespace).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.4.2: Page Titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled)
- [G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G88)
- [H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG21/Techniques/html/H25)

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
	<iframe src="/test-assets/sc2-4-2-title-page-without-title.html"></iframe>
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
	<iframe src="/test-assets/sc2-4-2-title-page-with-title.html"></iframe>
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

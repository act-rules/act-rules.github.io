---
id: 2779a5
name: HTML page has non-empty title
rule_type: atomic
description: |
  This rule checks that a non-embedded HTML page has a non-empty title.
accessibility_requirements:
  wcag20:2.4.2: # Page Titled (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G88: # Providing descriptive titles for Web pages
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:H25: # Providing a title using the title element
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Bryn Anderson
    - Jey Nandakumar
    - Stein Erik Skotkjerra
    - Wilco Fiers
  funding:
    - WAI-Tools
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'title-require'
---

## Applicability

This rule applies to the root element of the [web page](https://act-rules.github.io/glossary/#web-page-html), if it is an `html` element.

## Expectation 1

Each target element has at least one [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) that is a [`title` element](https://html.spec.whatwg.org/multipage/semantics.html#htmltitleelement).

## Expectation 2

For each target element, the first [HTML][] `title` element that is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of the [document element](https://dom.spec.whatwg.org/#document-element) has [children](https://dom.spec.whatwg.org/#concept-tree-child) that are [text nodes](https://dom.spec.whatwg.org/#text) that are not only [whitespace](#whitespace).

## Assumptions

This rule assumes that [Success Criterion 2.4.2 Page Titled](https://www.w3.org/TR/WCAG21/#page-titled) does not require that a document only has one `title` element, nor that it is a child of the `head` element of a document. While this is invalid in HTML, the HTML 5.2 specification describes what should happen in case of multiple titles, and titles outside the `head` element. Because of this, neither of these validation issues causes a conformance problem for WCAG. Regardless of whether this is required by 2.4.2 Page Titled, failing this rule means the success criterion is not satisfied.

## Accessibility Support

There are no accessibility support issues known.

## Background

This rule is only applicable to non-embedded HTML pages. HTML pages embedded into other documents, such as through `iframe` or `object` elements are not applicable because they are not [web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) according to the definition in WCAG.

### Related rules

- [HTML page title is descriptive](https://act-rules.github.io/rules/c4a8a4)

### Bibliography

- [Understanding Success Criterion 2.4.2: Page Titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled)
- [G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G88)
- [H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG21/Techniques/html/H25)
- [HTML Specification - The `title` element](https://html.spec.whatwg.org/#the-title-element)

## Test Cases

### Passed

#### Passed Example 1

This page has a `title` element with content.

```html
<html>
	<title>This page has a title</title>
</html>
```

#### Passed Example 2

This page has a `title` element that serves as the title for the page and the `iframe` since the `iframe` does not have its own.

```html
<html>
	<title>This page gives a title to an iframe</title>
	<iframe src="/test-assets/sc2-4-2-title-page-without-title.html"></iframe>
</html>
```

#### Passed Example 3

This page has two `title` elements with content.

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

This page has one `title` element with content, which is within the `body` element.

```html
<html>
	<body>
		<title>Title of the page.</title>
	</body>
</html>
```

#### Passed Example 5

This page has two `title` elements and only the first has content.

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

### Failed

#### Failed Example 1

This page does not have a `title` element.

```html
<html>
	<h1>this page has no title</h1>
</html>
```

#### Failed Example 2

This page has a `title` element that is empty.

```html
<html>
	<title></title>
</html>
```

#### Failed Example 3

This page does not have a `title` element. The `title` element in the content of the `iframe` does not function as the title for the entire page.

```html
<html>
	<iframe src="/test-assets/sc2-4-2-title-page-with-title.html"></iframe>
</html>
```

#### Failed Example 4

This page has two `title` elements and the first is empty.

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

This page has a `title` element that only contains a separator character.

```html
<html>
	<title> </title>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `title` element is a child of an `svg` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[html]: #namespaced-element

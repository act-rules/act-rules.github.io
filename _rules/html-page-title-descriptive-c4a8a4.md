---
id: c4a8a4
name: HTML page title is descriptive
rule_type: atomic
description: |
  This rule checks that the first title in an HTML web page describes the topic or purpose of that page.
accessibility_requirements:
  wcag20:2.4.2: # Page Titled (A)
    forConformance: true
    failed: not satisfied
    passed: satisfied
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
  - Language
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Corbb O'Connor
  funding:
    - WAI-Tools
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'title-require'
---

## Applicability

This rule applies to the [document title][] of each [html web page][], except if one of the following is true:

- The [html web page][] has no [document title][]; or
- The [document title][] contains only [whitespace](#whitespace) [text nodes](https://dom.spec.whatwg.org/#text).

## Expectation

The target element describes the topic or purpose of the overall content of the [document](https://dom.spec.whatwg.org/#concept-document).

## Assumptions

There are currently no assumptions.

## Accessibility Support

- This rule assumes that browsers only recognize the first `title` element if multiple `title` elements are present in the [document](https://dom.spec.whatwg.org/#concept-document). Testing shows that this in general is the case. Therefore the scope of this rule is limited to only checking the first `title` element in a document.

## Background

The `title` elements of embedded documents, such as those in `iframe`, `object`, or `svg` elements, are not applicable because those are not web pages according to the definition in WCAG.

The [HTML specification - The `title` element](https://html.spec.whatwg.org/#the-title-element) requires documents to only have one `title` element; and `title` elements to be children of the `head` element of a document. However, current HTML specification also describes what should happen in case of multiple titles, and titles outside the `head` element. Because of this, neither of these validation issues causes a conformance problem for WCAG.

### Related rules

- [HTML page has non-empty title](https://www.w3.org/WAI/standards-guidelines/act/rules/2779a5/)

### Bibliography

- [Understanding Success Criterion 2.4.2: Page titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)
- [Technique G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG22/Techniques/general/G88)
- [Technique H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG22/Techniques/html/H25)

## Test Cases

### Passed

#### Passed Example 1

This `title` element describes the content of the document.

```html
<html lang="en">
	<head>
		<title>Clementine harvesting season</title>
	</head>
	<body>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

#### Passed Example 2

This `title` element, the first of two, describes the content of the document.

```html
<html lang="en">
	<head>
		<title>Clementine harvesting season</title>
		<title>Second title is ignored</title>
	</head>
	<body>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

#### Passed Example 3

This `title` element, which is within the `body`, describes the content of the document. Even though it is not placed within the `head` element, as expected [according to the HTML specification](https://html.spec.whatwg.org/#the-title-element), the rule still passes because the browser fixes it and it doesn't cause any known accessibility issues.

```html
<html lang="en">
	<head> </head>
	<body>
		<title>Clementine harvesting season</title>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

This `title` element does not describe the content of the document.

```html
<html lang="en">
	<head>
		<title>Apple harvesting season</title>
	</head>
	<body>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

#### Failed Example 2

This `title` element, the first of two, does not describe the content of the document. Most browsers, and this rule, only look at the first `title` element.

```html
<html lang="en">
	<head>
		<title>First title is incorrect</title>
		<title>Clementine harvesting season</title>
	</head>
	<body>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

#### Failed Example 3

This page has a generic [document title][]. The title contains the website name, but does not describe the page.

```html
<html lang="en">
	<head>
		<title>University of Arkham</title>
	</head>
	<body>
		<h1>Search results for "accessibility" at the University of Arkham</h1>
		<p>None</p>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `title` element is a child of an `svg` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is a circle</title>
  <circle cx="150" cy="75" r="50" fill="green"></circle>
</svg>
```

[document title]: https://html.spec.whatwg.org/multipage/dom.html#the-title-element-2 'HTML definition of Document Title'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'

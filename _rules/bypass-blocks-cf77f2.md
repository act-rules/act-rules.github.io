---
id: cf77f2
name: Bypass Blocks of Content
rule_type: composite
description: |
  This rule checks that each page has a mechanism to bypass repeated blocks of content.
accessibility_requirements:
  wcag20:2.4.1: # Bypass Blocks (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - 047fe0
  - 7b576d
  - 8a213c
  - b40fd1
  - 3e12e1
  - e53727
acknowledgements:
  authors:
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation

For each test target, the outcome of at least one of the following rules is passed:

- [Document has headings for each section of content][]; or
- [Document has a main landmark][]; or
- [Link for skipping block of content][]; or
- [Block of content is expandable and collapsible][]; or
- [First focusable element is link to main content][]; or
- [First focusable elements are links to sections of content][].

## Assumptions

This rule assumes that one of the techniques listed here is used to comply to WCAG. Other methods could be used to pass this Success Criterion, notably:

- server side scripting can provide a functionality similar to [Block of content is expandable and collapsible][] by serving a modified version of the page;
- `frameset` and `frame` elements can be used to organize content as per [H70: Using frame elements to group blocks of repeated material](https://www.w3.org/WAI/WCAG21/Techniques/html/H70) and [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64) but are ignored here given that they are deprecated in HTML5.

## Accessibility Support

Techniques and solutions that identify blocks of content are sufficient ways of passing [Success Criterion 2.4.1: Bypass blocks][sc241]. They are, however, only beneficial for users who have ways of navigating with this information. For example, adding headings to a document will only help users who can "jump" from heading to heading (such a possibility can be provided by browsers, browsers plugins, screen readers, or other assistive technologies). Techniques and solutions based on links will benefit all users (for example, keyboard users with no other assistive technology) and are therefore recommended.

## Background

- [Understanding Success Criterion 2.4.1: Bypass Blocks][usc241]
- Creating links to skip blocks of content:
  - [G1: Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG21/Techniques/general/G1)
  - [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](https://www.w3.org/WAI/WCAG21/Techniques/general/G123)
  - [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124)
- Grouping and identifying blocks of content:
  - [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11)
  - [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69)
  - [SCR28: Using an expandable and collapsible menu to bypass block of content](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28)

## Test Cases

**Note:** The text of the examples is from the translation of the first Chapter of _The Three Kingdoms_ by Yu Sumei (Tuttle publishing, May 2014).

**Note:** Unless specified otherwise, the [sections of content][] of each document are defined by the [landmarks][landmark]; the banner, complementary and navigational [sections of content][] (`header`, `aside` and `nav` elements) are [sections of repeated content][]; and the banner and complementary [sections of content][] do not include any [focusable][] element not shown explicitly.

### Passed

#### Passed Example 1

This [HTML web page][] is passing rule [document has headings][].

**Note:** In this [document][], the [sections of content][] are identified by the level 1 heading at their start.

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<!-- Navigational section of content starts here -->
		<h1>Contents</h1>
		<!-- list of links to each chapter -->
		<!-- Navigational section of content ends here -->

		<!-- Main section of content starts here -->
		<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
		<!-- Main section of content ends here -->
	</body>
</html>
```

#### Passed Example 2

This [HTML web page][] is passing rule [document has a main landmark][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<main>
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

#### Passed Example 3

This [HTML web page][] is passing rule [link for skipping block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<!-- short description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
		</aside>
		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

#### Passed Example 4

This [HTML web page][] is passing rule [block of content is expandable and collapsible][].

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleHidden('navigation')">Toggle table of content</a>
		<nav id="navigation">
			<h1>Contents</h1>
			<!-- list of links to each chapter, repeated on each page -->
		</nav>
		<main>
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

#### Passed Example 5

This [HTML web page][] is passing rule [first focusable element is link to main content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#main">Skip to text</a>
		</nav>
		<aside>
			<h1>About the book</h1>
			<!-- short description of the book and biography of the author and translator -->
			<!-- does not include any focusable element -->
		</aside>
		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

#### Passed Example 6

This [HTML web page][] is passing rule [first focusable elements are links to sections of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<ul>
			<li><a href="#header">Skip to header</a></li>
			<li><a href="#about">Skip to additional information</a></li>
			<li><a href="#main">Skip to text</a></li>
		</ul>
		<header id="header">
			<!-- Name and logo of the website -->
			<!-- does not include any focusable element -->
		</header>
		<aside id="about">
			<h1>About the book</h1>
			<!-- short description of the book and biography of the author and translator -->
			<!-- does not include any focusable element -->
		</aside>
		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

### Failed

#### Failed Example 1

This [HTML web page][] does not pass any of the input rules.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<header id="header">
			<!-- Name and logo of the website -->
			<!-- does not include any focusable element -->
		</header>
		<aside id="about">
			<!-- short description of the book and biography of the author and translator -->
			<!-- does not include any focusable element -->
		</aside>
		<strong style="font-size: 18pt">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</strong>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This [document][] is not an [HTML web page][].

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[block of content is expandable and collapsible]: https://act-rules.github.io/rules/3e12e1 'Rule Block of content is expandable and collapsible'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[document element]: https://dom.spec.whatwg.org/#document-element 'Definition of document element'
[document has a main landmark]: https://act-rules.github.io/rules/b40fd1 'Rule Document has a main landmark'
[document has headings for each section of content]: https://act-rules.github.io/rules/047fe0 'Rule Document has headings for each section of content'
[first focusable elements are links to sections of content]: https://act-rules.github.io/rules/e53727 'Rule First focusable elements are links to sections of content'
[first focusable element is link to main content]: https://act-rules.github.io/rules/8a213c 'Rule First focusable element is link to main content'
[focusable]: #focusable 'Definition of focusable'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark_roles 'List of landmark roles'
[link for skipping block of content]: https://act-rules.github.io/rules/7b576d 'Rule Link for skipping block of content'
[usc241]: https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html 'Understanding Success Criterion 2.4.1: Bypass blocks'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1: Bypass blocks'
[sections of content]: #section-of-content 'Definition of section of content'
[sections of repeated content]: #section-of-repeated-content 'Definition of section of repeated content'
[html web page]: #web-page-html 'Definition of web page (HTML)'

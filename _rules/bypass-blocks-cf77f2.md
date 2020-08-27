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
acknowledgments:
  authors:
    - Jean-Yves Moyen
  assets:
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation

For each test target, the outcome of at least one of the following rules is passed:

- [Block of content is expandable and collapsible][]; or
- [Document has heading for main section of content][]; or
- [Document has a main landmark][]; or
- [First focusable element is link to main content][]; or
- [First focusable elements are links to sections of content][]; or
- [Link for skipping block of content][].

## Assumptions

- This rule assumes that the mean to bypass blocks is included in the content of the [HTML web page][]. For example, server side scripting can provide a functionality similar to [Block of content is expandable and collapsible][] by serving a modified version of the page; in which case this rule would fail but [Success Criterion 2.4.1: Bypass blocks][sc241] could nonetheless be satisfied.
- This rule assumes that `frame` and `frameset` elements are not used, given that they are deprecated in HTML5. They can be used to organize content as per [H70: Using frame elements to group blocks of repeated material](https://www.w3.org/WAI/WCAG21/Techniques/html/H70) and [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64), in which case this rule would fail but [Success Criterion 2.4.1: Bypass blocks][sc241] could nonetheless be satisfied.

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

### Passed

#### Passed Example 1

This [HTML web page][] is passing rule [block of content is expandable and collapsible][].

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleHidden('chapters-navigation')">Toggle table of content</a>

		<nav id="chapters-navigation">
			<h1>Content</h1>
			<ol>
				<li>Chapter 1</li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<main>
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 2

This [HTML web page][] is passing rule [Document has heading for main section of content][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="chapters-navigation">
			<ol>
				<li>Chapter 1</li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<main>
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 3

This [HTML web page][] is passing rule [document has a main landmark][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<main>
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 4

This [HTML web page][] is passing rule [first focusable element is link to main content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#main">Skip to main content</a>
		</nav>

		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 5

This [HTML web page][] is passing rule [first focusable elements are links to sections of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#main">Skip to text</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 6

This [HTML web page][] is passing rule [link for skipping block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 7

This [HTML web page][] is passing rules [block of content is expandable and collapsible][] and [link for skipping block of content][] because it has no [block of repeated content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>

		<main>
			<h1 id="main">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
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
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>

		<strong style="font-size: 18pt">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</strong>
		<p>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</p>
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

[block of content is expandable and collapsible]: https://act-rules.github.io/rules/3e12e1 'Rule Block of Content is Expandable and Collapsible'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[document has a main landmark]: https://act-rules.github.io/rules/b40fd1 'Rule Document Has a Main Landmark'
[document has heading for main section of content]: https://act-rules.github.io/rules/047fe0 'Rule Document Has Heading for Main Section of Content'
[first focusable elements are links to sections of content]: https://act-rules.github.io/rules/e53727 'Rule First Focusable Elements Are Links to Sections of Content'
[first focusable element is link to main content]: https://act-rules.github.io/rules/8a213c 'Rule First Focusable Element Is Link to Main Content'
[link for skipping block of content]: https://act-rules.github.io/rules/7b576d 'Rule Link for Skipping Block of Content'
[usc241]: https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html 'Understanding Success Criterion 2.4.1: Bypass Blocks'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'

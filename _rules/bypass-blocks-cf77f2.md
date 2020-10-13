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
  - b40fd1
  - 3e12e1
  - ye5d6e
acknowledgments:
  authors:
    - Jean-Yves Moyen
  assets:
    - _Romance of the Three Kingdoms_ by Luo Guanzhong, translation by Charles Henry Brewitt-Taylor (Tuttle Publishing, 1925, ISBN 9780804834674)
    - _Three Kingdoms_ by Luo Guanzhong, translation by Moss Roberts (Foreign Language Press, 1976, ISBN 7-119-00590-1)
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation

For each test target, the outcome of at least one of the following rules is passed:

- [Block of content is collapsible][]; or
- [Document has heading for main section of content][]; or
- [Document has a main landmark][]; or
- [Document has an instrument to move focus to main block of content][].

## Assumptions

- This rule assumes that there is exactly one [main block of content][] inside each [HTML web page][].
- This rule assumes that if a "skip link" or similar instrument is provided to jump to the [main block of content][], it must be can be possible to [activate][activation] it by use of keyboard, including being part of [sequential focus navigation][] (in order to be useful for keyboard users).
- This rule assumes that completely removing [blocks of repeated content][block of repeated content] is sufficient to pass [Success Criterion 2.4.1 Bypass blocks][sc241]. However, providing an [instrument][] to remove them without providing one to show them again is likely going to create other unrelated issues.
- This rule assumes that [Success Criterion 2.4.1 Bypass blocks][sc241] only requires a way to skip repeated content located before the primary content of the page. If repeated content after the primary content, or non-repeated content before the primary content, needs to be skipped, this rule may pass while [Success Criterion 2.4.1 Bypass blocks][sc241] is not satisfied.
- This rule assumes that the mean to bypass blocks is included in the content of the [HTML web page][]. For example, server-side scripting, or a global "settings" page, can provide a functionality similar to [Block of content is collapsible][] by serving a modified version of the page; in which case this rule would fail but [Success Criterion 2.4.1 Bypass blocks][sc241] could nonetheless be satisfied.
- This rule assumes that `frame` and `frameset` elements are not used, given that they are deprecated in HTML5. They can be used to organize content as per [H70: Using frame elements to group blocks of repeated material](https://www.w3.org/WAI/WCAG21/Techniques/html/H70) and [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64), in that case, this rule would fail but [Success Criterion 2.4.1 Bypass blocks][sc241] could nonetheless be satisfied.

## Accessibility Support

Techniques and solutions that identify blocks of content are sufficient ways of passing [Success Criterion 2.4.1 Bypass blocks][sc241]. They are, however, only beneficial for users who have ways of navigating with this information. For example, adding headings to a document will only help users who can "jump" from heading to heading (such a possibility can be provided by browsers, browsers plugins, screen readers, or other assistive technologies). Techniques and solutions based on links will benefit all users (for example, keyboard users with no other assistive technology) and are therefore recommended.

## Background

- [Understanding Success Criterion 2.4.1: Bypass Blocks][usc241]
- Creating links to skip blocks of content:
  - [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1]
  - [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123]
  - [Technique G124: Adding links at the top of the page to each area of the content][tech g124]
- Grouping and identifying blocks of content:
  - [Technique ARIA11: Using ARIA landmarks to identify regions of a page][tech aria11]
  - [Technique H69: Providing heading elements at the beginning of each section of content][tech h69]
  - [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28]

## Test Cases

### Passed

#### Passed Example 1

This [HTML web page][] is passing rule [block of content is collapsible][].

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
				<li><a>Chapter 1</a></li>
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
				<li><a>Chapter 1</a></li>
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
		<nav id="chapters-navigation">
			<ol>
				<li><a>Chapter 1</a></li>
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

#### Passed Example 4

This [HTML web page][] is passing rule [document has an instrument to move focus to main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

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

This [HTML web page][] is passing rule [document has an instrument to move focus to main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="local-navigation">
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#main">Skip to main content</a>
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

This [HTML web page][] is passing rule [document has an instrument to move focus to main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="bio-translator">
			<a href="#about-book">Skip to information about the book</a>
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<a href="#main">Skip to main content</a>
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

#### Passed Example 7

This [HTML web page][] is passing rule [Block of content is collapsible][] because it has no [block of repeated content][] before its [main block of content][]. Note that this does not pass [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] because the [block of repeated content][] which is after the [main block of content][] cannot be toggled.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

		<main>
			<h1 id="main">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>

		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
	</body>
</html>
```

#### Passed Example 8

This [HTML web page][] is passing rule [document has an instrument to move focus to main block of content][] because the button is such an instrument. Note that it does not pass [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] nor [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123] because the [instrument][] is a button, not a link.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="window.location.assign('#main')">Skip to main content</button>

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

#### Passed Example 9

This [HTML web page][] is passing rule [document has an instrument to move focus to main block of content][] because the link with target `#brewitt-taylor` moves focus [at the start][] of the [main block of content][]. Note that is does not necessarily pass Technique [G124: Adding links at the top of the page to each area of the content][tech g124] because the [main block of content][] is arguably a single "area of the content", and the technique requires only one link per such area.

```html
<html>
	<head>
		<title>Comparing translations of the Romance of the Three Kingdoms, Chapter one</title>
	</head>
	<body>
		<nav id="local-navigation">
			<a href="#local-navigation">Skip to local navigation</a>
			<a href="#brewitt-taylor">Skip to Brewitt-Taylor's translation</a>
			<a href="#roberts">Skip to Roberts' translation</a>
			<a href="#yu">Skip to Yu's translation</a>
			<a href="#about-book">Skip to information about the book</a>
		</nav>

		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main>
			<h1 id="brewitt-taylor">
				Three Heroes Swear Brotherhood in the Peach Garden (Translation by Charles Henry Brewitt-Taylor)
			</h1>
			<p>
				The world under heaven, after a long period of division, tends to unite; after a long period of union, tends to
				divide.
			</p>

			<h1 id="roberts">Three Bold Spirits Plight Mutual Faith in the Peach Garden (Translation by Moss Roberts)</h1>
			<p>The empire, long divided, must unite; long united, must divide. Thus it has ever been.</p>

			<h1 id="yu">Three Heroes Swear Brotherhood at a Feast in the Peach Garden (Translation by Yu Sumei)</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 10

This [HTML web page][] is passing rule [document has an instrument to move focus to main block of content][]. Note that is does not necessarily pass Technique [G124: Adding links at the top of the page to each area of the content][tech g124] because the both the `nav` and `aside` elements are arguably different "areas of the content", and the technique requires exactly one link per such area.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="local-navigation">
			<a href="#local-navigation">Skip to local navigation</a>
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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 11

This [HTML web page][] is passing rule [block of content is collapsible][]. Note that it does not pass [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] because the technique requires that the blocks can be toggled on and off, but here they can only be removed.

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="hide('chapters-navigation')">Hide table of content</button>

		<nav id="chapters-navigation">
			<h1>Content</h1>
			<ol>
				<li><a>Chapter 1</a></li>
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

#### Passed Example 12

This [HTML web page][] is passing rule [block of content is collapsible][]. Note that it does not pass [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] because the technique requires the [instrument][] to be always [visible][], but here it is only [visible][] when [focused][].

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="toggleHidden('chapters-navigation')" class="visible-on-focus">Toggle repeated content</button>

		<nav id="chapters-navigation">
			<h1>Content</h1>
			<ol>
				<li><a>Chapter 1</a></li>
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

#### Passed Example 13

This [HTML web page][] is passing rule [document has an instrument to move focus to main block of content][] because the second link is such an instrument. Note that it does not pass [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] because the skip link is not the first [focusable][] element on the page.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="https://act-rules.github.io/">ACT rules</a>
		<a href="#main">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

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

#### Passed Example 14

This [HTML web page][] is passing rule [document has an instrument to move focus to main block of content][] because the first two links are respectively a [keyboard actionable][] [instrument][] and an [instrument][] [included in the accessibility tree][] for that purpose. Note that it does not pass [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] because the technique requires a unique skip link. Note also that having a [focusable][] user interface component with `aria-hidden` is a violation of both [Success Criterion 1.3.1 Info And Relationships](https://www.w3.org/tr/wcag21/#info-and-relationships) and [4.1.2 Name, Role, Value](https://www.w3.org/tr/wcag21/#name-role-value) and should thus be avoided.

```html
<html lang="en">
	<head>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" aria-hidden="true">Skip to main content</a>
		<a href="#main" class="off-screen">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

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

#### Passed Example 15

This [HTML web page][] is passing rule [Document has heading for main section of content][]. Note that it arguably does not pass [Technique H69: Providing heading elements at the beginning of each section of content][tech h69] because the `nav` element can be considered as a section of content and does not start with a heading.

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="chapters-navigation">
			<ol>
				<li><a>Chapter 1</a></li>
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

[activation]: https://html.spec.whatwg.org/#activation 'HTML Definition of Activation'
[at the start]: #start-end-content 'Definition of Start and End of Content'
[block of content is collapsible]: https://act-rules.github.io/rules/3e12e1 'Rule Block of Content is Collapsible'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[document has a main landmark]: https://act-rules.github.io/rules/b40fd1 'Rule Document Has a Main Landmark'
[document has an instrument to move focus to main block of content]: https://act-rules.github.io/rules/ye5d6e 'Rule Document Has an Instrument to Move Focus to Main Block of Content'
[document has heading for main section of content]: https://act-rules.github.io/rules/047fe0 'Rule Document Has Heading for Main Section of Content'
[focusable]: #focusable 'Definition of Focusable'
[focused]: https://html.spec.whatwg.org/#focused 'HTML definition of Focused'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[keyboard actionable]: #keyboard-actionable-element 'Definition of Keyboard Actionable Element'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation 'HTML definition of Sequential Focus Navigation'
[tech aria11]: https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11 'Technique ARIA11: Using ARIA Landmarks to Identify Regions of a Page'
[tech g1]: https://www.w3.org/WAI/WCAG21/Techniques/general/G1 'Technique G1: Adding a Link at the Top of each Page that Goes Directly to the Main Content Area'
[tech g123]: (https://www.w3.org/WAI/WCAG21/Techniques/general/G123) 'Technique G123: Adding a Link at the Beginning of a Block of Repeated Content to Go to the End of the Block'
[tech g124]: https://www.w3.org/WAI/WCAG21/Techniques/general/G124 'Technique G124: Adding Links at the Top of the Page to each Area of the Content'
[tech h69]: https://www.w3.org/WAI/WCAG21/Techniques/html/H69 'Technique H69: Providing Heading Elements at the Beginning of each Section of Content'
[tech scr28]: https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28 'Technique SCR28: Using an Expandable and Collapsible Menu to Bypass Block of Content'
[usc241]: https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html 'Understanding Success Criterion 2.4.1: Bypass Blocks'
[visible]: #visible 'Definition of Visible'

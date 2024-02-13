---
id: cf77f2
name: Bypass Blocks of Repeated Content
rule_type: composite
description: |
  This rule checks that each page has a mechanism to bypass repeated blocks of content.
accessibility_requirements:
  wcag20:2.4.1: # Bypass Blocks (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G1: # Adding a link at the top of each page that goes directly to the main content area
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G123: # Adding a link at the beginning of a block of repeated content to go to the end of the block
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G124: # Adding links at the top of the page to each area of the content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:H69: # Providing heading elements at the beginning of each section of content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:SCR28: # Using an expandable and collapsible menu to bypass block of content
    forConformance: false
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
  funding:
    - WAI-Tools
  assets:
    - _Romance of the Three Kingdoms_ by Luo Guanzhong, translation by Charles Henry Brewitt-Taylor (Tuttle Publishing, 1925, ISBN 9780804834674)
    - _Three Kingdoms_ by Luo Guanzhong, translation by Moss Roberts (Foreign Language Press, 1976, ISBN 7-119-00590-1)
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation

For each test target, the outcome of at least one of the following rules is passed:

- [_Block of repeated content is collapsible_][block collapsible]; or
- [_Document has heading for non-repeated content_][document has heading for main]; or
- [_Document has a landmark with non-repeated content_][document has landmark]; or
- [_Document has an instrument to move focus to non-repeated content_][document has instrument to main].

## Assumptions

- This rule assumes that the mean to bypass blocks is included in the content of the [HTML web page][]. For example, server-side scripting, or a global "settings" page, can provide a functionality similar to [_Block of repeated content is collapsible_][block collapsible] by serving a modified version of the page; in which case this rule would fail but [Success Criterion 2.4.1 Bypass blocks][sc241] could nonetheless be satisfied.
- This rule assumes that `frame` and `frameset` elements are not used, given that they are deprecated in HTML5. They can be used to organize content as per [H70: Using frame elements to group blocks of repeated material](https://www.w3.org/WAI/WCAG22/Techniques/html/H70) and [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H64), in that case, this rule would fail but [Success Criterion 2.4.1 Bypass blocks][sc241] could nonetheless be satisfied.
- This rule assumes that completely removing [blocks of repeated content][block of repeated content] is sufficient to pass [Success Criterion 2.4.1 Bypass blocks][sc241]. However, providing an [instrument][] to remove them without providing one to show them again is likely going to create other unrelated issues.
- This rule assumes that repeated content that is at the end of the page (and not followed any non-repeated content) can be bypassed by means provided by user agents (such as pressing the "End" key to scroll to the bottom of the page). Therefore, they do not need any other way of being bypassed and are ignored by this rule. If there isn't a way to bypass them, this rule may pass while [Success Criterion 2.4.1 Bypass blocks][sc241] is not satisfied.
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

Techniques and solutions that identify blocks of content are sufficient ways of passing [Success Criterion 2.4.1 Bypass blocks][sc241]. They are, however, only beneficial for users who have ways of navigating with this information. For example, adding headings to a document will only help users who can "jump" from heading to heading (such a possibility can be provided by browsers, browsers plugins, screen readers, or other assistive technologies). Techniques and solutions based on links will benefit all users (for example, sighted keyboard users with no other assistive technology) and are therefore recommended.

If the [instruments][instrument] used to pass some of the atomic rules are not keyboard accessible, or not [included in the accessibility tree][], passing this rule can still leave many users without a way to bypass blocks of repeated content. WCAG's definition of [mechanism][] has a note saying that it "needs to meet all success criteria for the conformance level claimed". This includes [Success Criterion 2.1.1 Keyboard](https://www.w3.org/TR/WCAG22/#keyboard-accessible) and [Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG22/#name-role-value) which are both at level A.

This rule only checks if there is a way to bypass at least one section of repeated content. On pages with several interleaved repeated and non-repeated content, this is not sufficient to satisfy [Success Criterion 2.4.1 Bypass blocks][sc241]. Checking for more sections to bypass was considered but rejected due to both the added complexity it would create, and the risk of failing on pages that might be correct.

## Background

The [instruments][instrument] used to pass this rule (if any), must meet all level A Success Criteria in order to fully satisfy [Success Criterion 2.4.1 Bypass Block][sc241]. These extra requirements are left out of this rule, and should be tested separately.

### Bibliography

- [Understanding Success Criterion 2.4.1: Bypass Blocks][usc241]
- Creating links to skip blocks of content:
  - [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1]
  - [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123]
  - [Technique G124: Adding links at the top of the page to each area of the content][tech g124]
- Grouping and identifying blocks of content:
  - [Technique ARIA11: Using ARIA landmarks to identify regions of a page][tech aria11]
  - [Technique H69: Providing heading elements at the beginning of each section of content][tech h69]
  - [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28]

To avoid using landmarks for the non-repeated content, which would satisfy [Success Criterion 2.4.1 Bypass Block][sc241], this rule uses `<div id="main">` in its test cases to indicate where non-repeating content exists. It is recommended to use the `main` landmark instead. The `aside` and `nav` elements are each a [block of repeated content][] due to the link inside the `nav` element to a page with similar [blocks of content][block of content].

## Test Cases

### Passed

#### Passed Example 1

This [HTML web page][] is passing rule [_Block of repeated content is collapsible_][block collapsible].

```html
<html>
	<head>
		<script src="/test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleHidden('chapters-navigation')">Toggle table of content</a>

		<nav id="chapters-navigation">
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 2

This [HTML web page][] is passing rule [_Document has heading for non-repeated content_][document has heading for main].

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

		<div id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 3

This [HTML web page][] is passing rule [_Document has a landmark with non-repeated content_][document has landmark].

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
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 4

This [HTML web page][] is passing rule [_Document has an instrument to move focus to non-repeated content_][document has instrument to main].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 5

This [HTML web page][] is passing rule [_Document has an instrument to move focus to non-repeated content_][document has instrument to main].

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
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 6

This [HTML web page][] is passing rule [_Document has an instrument to move focus to non-repeated content_][document has instrument to main].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="bio-translator">
			<a href="#about-book">Skip to information about the book</a>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<a href="#main">Skip to main content</a>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 7

This [HTML web page][] is passing rule [_Block of repeated content is collapsible_][block collapsible] because it has no [block of repeated content][] before non-repeated [perceivable content][]. Note that this does not pass [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] because the [block of repeated content][] which is after the non-repeated content cannot be toggled.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>

		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
	</body>
</html>
```

#### Passed Example 8

This [HTML web page][] is passing rule [_Document has an instrument to move focus to non-repeated content_][document has instrument to main] because the button is such an instrument. Note that it does not pass [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] nor [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123] because the [instrument][] is a button, not a link.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="location.assign('#main')">Skip to main content</button>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 9

This [HTML web page][] is passing rule [_Document has an instrument to move focus to non-repeated content_][document has instrument to main] because the link with target `#brewitt-taylor` moves focus [just before][] some [non-repeated content after repeated content][]. Note that it does not necessarily pass Technique [G124: Adding links at the top of the page to each area of the content][tech g124] because the `<div id="main">` element is arguably a single "area of the content", and the technique requires only one link per such area.

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
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p id="brewitt-taylor">
				Three Heroes Swear Brotherhood in the Peach Garden (Translation by Charles Henry Brewitt-Taylor)
			</p>
			<p>
				The world under heaven, after a long period of division, tends to unite; after a long period of union, tends to
				divide.
			</p>

			<p id="roberts">Three Bold Spirits Plight Mutual Faith in the Peach Garden (Translation by Moss Roberts)</p>
			<p>The empire, long divided, must unite; long united, must divide. Thus it has ever been.</p>

			<p id="yu">Three Heroes Swear Brotherhood at a Feast in the Peach Garden (Translation by Yu Sumei)</p>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 10

This [HTML web page][] is passing rule [_Document has an instrument to move focus to non-repeated content_][document has instrument to main]. Note that it does not necessarily pass Technique [G124: Adding links at the top of the page to each area of the content][tech g124] because the both the `nav` and `aside` elements are arguably different "areas of the content", and the technique requires exactly one link per such area.

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
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 11

This [HTML web page][] is passing rule [_Block of repeated content is collapsible_][block collapsible]. Note that it does not pass [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] because the technique requires that the blocks can be toggled on and off, but here they can only be removed.

```html
<html>
	<head>
		<script src="/test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="hide('chapters-navigation')">Hide table of content</button>

		<nav id="chapters-navigation">
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 12

This [HTML web page][] is passing rule [_Document has an instrument to move focus to non-repeated content_][document has instrument to main] because the second link is such an instrument. Note that it does not pass [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] because the skip link is not the first [focusable][] element on the page.

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
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
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
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>

		<div id="main">
			<strong style="font-size: 18pt">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</strong>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
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

[block of content]: #block-of-content 'Definition of Block of Content'
[block collapsible]: https://www.w3.org/WAI/standards-guidelines/act/rules/3e12e1/ 'Rule Block of Repeated Content is Collapsible'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[document has landmark]: https://www.w3.org/WAI/standards-guidelines/act/rules/b40fd1/ 'Rule Document Has a Landmark with Non-Repeated Content'
[document has instrument to main]: https://www.w3.org/WAI/standards-guidelines/act/rules/ye5d6e/ 'Rule Document Has an Instrument to Move Focus to Non-Repeated Content'
[document has heading for main]: https://www.w3.org/WAI/standards-guidelines/act/rules/047fe0/ 'Rule Document Has Heading for Non-Repeated Content'
[focusable]: #focusable 'Definition of Focusable'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[just before]: #just-before 'Definition of Just Before'
[mechanism]: https://www.w3.org/TR/WCAG22/#dfn-mechanism 'WCAG definition of Mechanism'
[non-repeated content after repeated content]: #non-repeated-content 'Definition of Non-Repeated Content after repeated content'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
[sc241]: https://www.w3.org/TR/WCAG22/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[tech aria11]: https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11 'Technique ARIA11: Using ARIA Landmarks to Identify Regions of a Page'
[tech g1]: https://www.w3.org/WAI/WCAG22/Techniques/general/G1 'Technique G1: Adding a Link at the Top of each Page that Goes Directly to the Main Content Area'
[tech g123]: (https://www.w3.org/WAI/WCAG22/Techniques/general/G123) 'Technique G123: Adding a Link at the Beginning of a Block of Repeated Content to Go to the End of the Block'
[tech g124]: https://www.w3.org/WAI/WCAG22/Techniques/general/G124 'Technique G124: Adding Links at the Top of the Page to each Area of the Content'
[tech h69]: https://www.w3.org/WAI/WCAG22/Techniques/html/H69 'Technique H69: Providing Heading Elements at the Beginning of each Section of Content'
[tech scr28]: https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR28 'Technique SCR28: Using an Expandable and Collapsible Menu to Bypass Block of Content'
[usc241]: https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html 'Understanding Success Criterion 2.4.1: Bypass Blocks'

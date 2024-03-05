---
id: 3e12e1
name: Block of repeated content is collapsible
rule_type: atomic
description: |
  This rule checks that repeated blocks of content are collapsible
accessibility_requirements:
  wcag-technique:SCR28: # Using an expandable and collapsible menu to bypass block of content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - CSS Styling
  - DOM Tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
  funding:
    - WAI-Tools
  assets:
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation

For each [block of repeated content][] in each test target, which is before (in the [flat tree][]) at least one node of [non-repeated content after repeated content][], all the following are true:

- there exists an [instrument][] to make all nodes in this [block][] not [visible][]; and
- there exists an [instrument][] to remove all nodes in this [block][] from the [accessibility tree][included in the accessibility tree].

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

Usually the same [instrument][] removes both [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of a [block of repeated content][]. That [instrument][] may remove all [blocks of repeated content][block of repeated content]. If there is no [block of repeated content][] before the non-repeated content the rule passes.

[Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] does not have any requirements concerning the location of the [instruments][instrument] in relation to the [block of repeated content][] they control, hence this rule doesn't. It is likely a good idea to either keep each [instrument][] close to the start of the [block of repeated content][] it controls; or to group them all in one place near the start of the document. Notably, [instruments][instrument] located after (in reading order) the block they collapse are likely not satisfying [Success Criterion 2.4.1 Bypass blocks][sc241], which this rule is designed for. Thus, it is possible to pass this rule without satisfying [Success Criterion 2.4.1 Bypass blocks][sc241].

### Bibliography

- [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28]

## Test Cases

To avoid using landmarks for the non-repeated content, which would satisfy [Success Criterion 2.4.1 Bypass Block][sc241], which this rule is designed for, this rule uses `<div id="main">` in its test cases to indicate where non-repeating content exists. It is recommended to use the `main` landmark instead. The `aside` and `nav` elements are each a [block of repeated content][] due to the link inside the `nav` element to a page with similar [blocks of content][block of content].

### Passed

#### Passed Example 1

This document has a link at the start of the document to toggle the [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of the navigational [block of repeated content][].

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

This document has a button at the start of the document to toggle the [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of both the complementary and the navigational [blocks of repeated content][block of repeated content].

```html
<html>
	<head>
		<script src="/test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="toggleHidden('chapters-navigation', 'about-book')">Toggle repeated content</button>

		<nav id="chapters-navigation">
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

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

#### Passed Example 3

This document has two dedicated [instruments][instrument] to toggle the [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of the complementary and the navigational [blocks of repeated content][block of repeated content] respectively.

```html
<html>
	<head>
		<script src="/test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleHidden('chapters-navigation')">Toggle table of content</a>
		<button onclick="toggleHidden('about-book')">Toggle extra content</button>

		<nav id="chapters-navigation">
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

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

#### Passed Example 4

This document has a button at the start of the document to toggle the [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of the navigational [block of repeated content][]. The button is only [visible][] when [focused][].

```html
<html>
	<head>
		<script src="/test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<link rel="stylesheet" href="/test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="toggleHidden('chapters-navigation')" class="visible-on-focus">Toggle repeated content</button>

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

### Failed

#### Failed Example 1

This document has no [instrument][] to toggle the navigational [block of repeated content][].

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
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Failed Example 2

This document has an [instrument][] to toggle [visibility][visible] of the navigational [block of repeated content][], but none to toggle its [inclusion in the accessibility tree][included in the accessibility tree].

```html
<html>
	<head>
		<link rel="stylesheet" href="/test-assets/bypass-blocks-cf77f2/styles.css" />
		<script src="/test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleVisibility('chapters-navigation')">Toggle table of content</a>

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

#### Failed Example 3

This document has an instrument to toggle the [inclusion on the accessibility tree][included in the accessibility tree] of the [block of repeated content][], but none to toggle its [visibility][visible].

```html
<html>
	<head>
		<script src="/test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleAriaHidden('chapters-navigation')">Toggle table of content</a>

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

### Inapplicable

#### Inapplicable Example 1

This [document][] is not an [HTML web page][].

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[block]: #block-of-content 'Definition of Block of Content'
[block of content]: #block-of-content 'Definition of Block of Content'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Definition of Flat Tree'
[focused]: https://html.spec.whatwg.org/#focused 'HTML definition of Focused'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[non-repeated content after repeated content]: #non-repeated-content 'Definition of Non-Repeated Content after Repeated Content'
[sc241]: https://www.w3.org/TR/WCAG22/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[tech scr28]: https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR28 'Technique SCR28: Using an Expandable and Collapsible Menu to Bypass Block of Content'
[visible]: #visible 'Definition of Visible'

---
id: 3e12e1
name: Block of repeated content is expandable and collapsible
rule_type: atomic
description: |
  This rule checks that repeated blocks of content are expandable and collapsible
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
  assets:
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation 1

For each [block of repeated content][] in the test target which is before the [main block of content][], there exists a [keyboard actionable][] [instrument][] to make this [block][] not [visible][].

## Expectation 2

For each [block of repeated content][] in the test target which is before the [main block of content][], there exists an [instrument][], which is [included in the accessibility tree][], to remove this [block][] from the [accessibility tree][included in the accessibility tree].

## Assumptions

- This rule assumes that there is exactly one [main block of content][] inside each [HTML web page][].
- This rule assumes that that [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] requires the that the [instrument][] can be activated by use of keyboard (in order to be useful for keyboard users).
- This rule assumes that completely removing [blocks of repeated content][block of repeated content] is sufficient to pass [Success Criterion 2.4.1: Bypass blocks][sc241]. [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] does require that they can be toggled on and off. In any case, providing an [instrument][] to remove them without providing one to show them again is likely going to create other unrelated issues.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

Note that the same [instrument][] may be used to remove both [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of a given [block of repeated content][], and that the same [instrument][] may be used for several of the [blocks of content][block of content].

Note that if there is no [block of repeated content][] before the [main block of content][], then the rule automatically passes. It is possible, however, that [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] fails if there are [blocks of repeated content][block of repeated content] after the [main block of content][].

[Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] does not require the [accessible name][] of the [user interface component][] ([instrument][]) to be descriptive, hence this rule doesn't require it either. However, having a non-descriptive [accessible name][] is likely a failure of [Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value).

[Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] does not require anything concerning the location of the [instruments][instrument] in relation to the [block of repeated content][] they control, hence this rule doesn't. It is likely a good idea to either keep each [instrument][] close to the start of the [block of repeated content][] it controls; or to group them all in one place near the start of the document.

- [SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28]

In the test cases, the `aside` and `nav` elements are each a [block of repeated content][] due to the link inside the `nav` element to a page with similar [blocks of content][block of content]; and the `main` element is the [main block of content][]. Unless specified, the [semantic segmentation][] fulfilling the expectations has one block for the `main` element; one for each of the `aside` and `nav` elements (if present); and one for the other content, if any.

## Test Cases

### Passed

#### Passed Example 1

In this document, the [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of the navigational [block of repeated content][] can be toggled on and off by the link at the start of the document.

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

In this document, the [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of both the complementary and the navigational [blocks of repeated content][block of repeated content] can be toggled on and off by the button at the start of the document. In this case, both the `nav` and `aside` elements can be toggled together.

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="toggleHidden('chapters-navigation', 'about-book')">Toggle repeated content</button>

		<nav id="chapters-navigation">
			<h1>Content</h1>
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

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

In this document, the [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of both the complementary and the navigational [blocks of repeated content][block of repeated content] can be toggled on and off, each of them by a different [instrument][].

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleHidden('chapters-navigation')">Toggle table of content</a>
		<button onclick="toggleHidden('bio-translator')">Toggle extra content</button>

		<nav id="chapters-navigation">
			<h1>Content</h1>
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

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

In this document, the [visibility][visible] of the navigational [block of repeated content][] can be toggled on and off by the [visible][] link at the start of the document. Its [inclusion in the accessibility tree][included in the accessibility tree] can be toggled on and off by the button at the start of the document.

```html
<html>
	<head>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleVisibility('chapters-navigation')" aria-hidden="true">Toggle table of content</a>
		<button onclick="toggleAriaHidden('chapters-navigation')" class="off-screen">Toggle table of content</button>

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

#### Failed Example 2

This document has an [instrument][] to toggle [visibility][visible] of the navigational [block of repeated content][], but none to toggle its [inclusion in the accessibility tree][included in the accessibility tree].

```html
<html>
	<head>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleVisibility('chapters-navigation')">Toggle table of content</a>

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

#### Failed Example 3

This document has an instrument to toggle [inclusion on the accessibility tree][included in the accessibility tree] of the [block of repeated content][], but none to toggle its [visibility][visible].

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleAriaHidden('chapters-navigation')">Toggle table of content</a>

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

#### Failed Example 4

This document has an [instrument][] to toggle the navigational [block of repeated content][], but it is not [keyboard actionable][] because it is not in [sequential focus navigation][] order.

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" tabindex="-1" onclick="toggleHidden('chapters-navigation')">Toggle table of content</a>

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

#### Failed Example 5

This document has an [instrument][] to toggle the navigational [block of repeated content][], but it is not [keyboard actionable][] because it is never [visible][].

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" class="off-screen" onclick="toggleHidden('chapters-navigation')">Toggle table of content</a>

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

#### Failed Example 6

This document has an [instrument][] to toggle the [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of its [block of repeated content][], but it is not [keyboard actionable][] because it cannot be [activated][] by use of keyboard.

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<span onclick="toggleHidden('chapters-navigation')">Toggle table of content</span>

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

#### Failed Example 7

This document has an [instrument][] to toggle the navigational [block of repeated content][], but it is not [included in the accessibility tree][].

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" aria-hidden="true" onclick="toggleHidden('chapters-navigation')">Toggle table of content</a>

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

### Inapplicable

#### Inapplicable Example 1

This [document][] is not an [HTML web page][].

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[accessible name]: #accessible-name 'Definition of Accessible Name'
[activated]: https://html.spec.whatwg.org/#activation 'HTML definition of Activation'
[block]: #block-of-content 'Definition of Block of Content'
[block of content]: #block-of-content 'Definition of Block of Content'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[keyboard actionable]: #keyboard-actionable-element 'Definition of Keyboard Actionable Element'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[tech scr28]: https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28 'Technique SCR28: Using an Expandable and Collapsible Menu to Bypass Block of Content'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation 'HTML definition of Sequential Focus Navigation'
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components 'WCAG definition of User Interface Component'
[visible]: #visible 'Definition of Visible'

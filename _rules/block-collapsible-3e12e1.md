---
id: 3e12e1
name: Block of content is expandable and collapsible
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
  - DOM Tree
  - CSS styling
acknowledgments:
  authors:
    - Jean-Yves Moyen
  assets:
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation 1

There exists a [semantic segmentation][] of the test target such that for each [block][], B, in this [segmentation] which is before the [main block of content][] and contains at least one [block of repeated content][], there exists a [visible][] [instrument][] to make this [block][] (B) not [visible][].

## Expectation 2

There exists a [semantic segmentation][] of the test target such that for each [block][], B, in this [segmentation] which is before the [main block of content][] and contains at least one [block of repeated content][], there exists an [instrument][], [included in the accessibility tree][], to remove this [block][] (B) from the [accessibility tree][included in the accessibility tree].

**Note:** The same [instrument][] may be used to remove both [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of a given [block of repeated content][].

**Note:** The same [instrument][] may be used for several of the [blocks of content][block of content].

**Note:** [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] does not require the [accessible name][] of the [user interface component][] ([instrument][]) to be descriptive. However, having a non-descriptive [accessible name][] is likely a failure of [Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value).

**Note:** [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] does not require anything concerning the location of the [instruments][instrument] in relation to the [block of repeated content][] they control. It is likely a good idea to either keep each [instrument][] close to the start of the [block of repeated content][] it controls; or to group them all in one place near the start of the document.

## Assumptions

- This rule assumes that there is exactly one [main block of content][] inside each [HTML web page][].
- This rule assumes that completely removing [blocks of repeated content][block of repeated content] is sufficient to pass [Success Criterion 2.4.1: Bypass blocks][sc241]. [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] does require that they can be toggled on and off. In any case, providing an [instrument][] to remove them without providing one to show them again is likely going to create other unrelated issues.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28]

In the test cases, the `aside` and `nav` elements are each a [block of repeated content][] due to the link inside the `nav` element to a page with similar [blocks of content][block of content]; and the `main` element is the [main block of content][]. Unless specified, the [semantic segmentation][] fulfilling the expectations has one block for the `main` element; one for each of the `aside` and `nav` elements (if present); and one for the other content, if any.

## Test Cases

### Passed

#### Passed Example 1

The [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of the navigational [block of repeated content][] can be toggled on and off by the link at the start of the document. The first [block][] of the [segmentation][] (the first link) cannot be skipped, but it does not contain a [block of repeated content][], so this is not a problem.

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

The [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of both the complementary and the navigational [blocks of repeated content][block of repeated content] can be toggled on and off by the button at the start of the document. In this case, both the `nav` and `aside` elements form a single [block][block of content] of the [semantic segmentation][] fulfilling expectation.

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="toggleHidden(['chapters-navigation', 'about-book'])">Toggle repeated content</button>

		<nav id="chapters-navigation">
			<h1>Content</h1>
			<ol>
				<li>Chapter 1</li>
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

The [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of each of the [blocks of repeated content][block of repeated content] can be toggled on and off by the buttons at the start of the document. In this case, the first `button` is toggling two of the [blocks of repeated content][block of repeated content]. Note that trying to put both `chapters-navigation` and `bio-translator` in the same [block][block of content] of the [segmentation][] is not possible because in that case nodes between them (namely, `about-book`) also have to be included in that [block of content][].

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="toggleHidden(['chapters-navigation', 'bio-translator'])">Toggle navigation and biography</button>
		<button onclick="toggleHidden(['about-book'])">Toggle additionaly information</button>

		<nav id="chapters-navigation">
			<h1>Content</h1>
			<ol>
				<li>Chapter 1</li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>
		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
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

The [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of both the complementary and the navigational [blocks of repeated content][block of repeated content] can be toggled on and off, each of them by a different [instrument][].

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
				<li>Chapter 1</li>
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

#### Passed Example 5

The [visibility][visible] of the navigational [block of repeated content][] can be toggled on and off by the [visible][] link at the start of the document. Its [inclusion in the accessibility tree][included in the accessibility tree] can be toggled on and off by the button at the start of the document.

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

#### Passed Example 6

The navigational [block of repeated content][] can be made non-[visible][] and removed from the accessibility tree by the button at the start of the document.

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

### Failed

#### Failed Example 1

There is no [instrument][] to toggle the navigational [block of repeated content][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
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

#### Failed Example 2

The [instrument][] to toggle the navigational [block of repeated content][] is not [visible][].

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" style="position: absolute; top: -999px" onclick="toggleHidden('chapters-navigation')"
			>Toggle table of content</a
		>

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

#### Failed Example 3

The [instrument][] to toggle the navigational [block of repeated content][] is not [included in the accessibility tree][].

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

#### Failed Example 4

There is no [instrument][] to toggle the [inclusion in the accessibility tree][included in the accessibility tree] of the navigational [block of repeated content][].

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

#### Failed Example 5

There is no [instrument][] to toggle the [visibility][visible] of the navigational [block of repeated content][].

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

### Inapplicable

#### Inapplicable Example 1

This [document][] is not an [HTML web page][].

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[accessible name]: #accessible-name 'Definition of Accessible Name'
[block]: #block-of-content 'Definition of Block of Content'
[block of content]: #block-of-content 'Definition of Block of Content'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[segmentation]: #segmentation 'Definition of Segmentation'
[semantic segmentation]: #semantic-segmentation 'Definition of Semantic Segmentation'
[tech scr28]: https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28 'Technique SCR28: Using an Expandable and Collapsible Menu to Bypass Block of Content'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components 'WCAG definition of User Interface Component'
[visible]: #visible 'Definition of Visible'

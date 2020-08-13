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
    - _The Three Kingdoms_ by Yu Sumei (Tuttle publishing, May 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation 1

For each [section of repeated content][] in the test target, there exists a [visible][] [instrument][] to make this [section of repeated content][] not [visible][].

## Expectation 2

For each [section of repeated content][] in the test target, there exists an [instrument][], [included in the accessibility tree][], to remove this [section of repeated content][] from the [accessibility tree][included in the accessibility tree].

**Note:** The same [instrument][] may be used to remove both [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of a given [section of repeated content][].

**Note:** The same [instrument][] may be used for several or even all the [sections of repeated content][section of repeated content].

**Note:** [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] does not require the [accessible name][] of the [user interface component][] ([instrument][]) to be descriptive. However, having a non-descriptive [accessible name][] is likely a failure of [Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value).

**Note:** [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] does not require anything concerning the location of the [instruments][instrument] in relation to the [section of repeated content][] they control. It is likely a good idea to either keep each [instrument][] close to the start of the [section of repeated content][] it controls; or to group them all in one place near the start of the document.

## Assumptions

- This rule assumes that [sections of repeated content][section of repeated content] have already been identified within the test target, for example by comparison with other test targets within the same website, or any other means.
- This rule assumes that completely removing [sections of repeated content][section of repeated content] is sufficient to pass [Success Criterion 2.4.1: Bypass blocks][sc241]. [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] does require that they can be toggled on and off. In any case, providing an [instrument][] to remove them without providing one to show them again is likely going to create other unrelated issues.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28]

## Test Cases

**Note:** Unless specified otherwise, the [sections of content][] of each document are defined by the [landmarks][landmark] (`aside`, `main` and `nav` elements); both the complementary and navigational [sections of content][] (`aside` and `nav` elements) are [sections of repeated content][section of repeated content].

### Passed

#### Passed Example 1

The [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of the navigational [section of repeated content][] can be toggled on and off by the link at the start of the document.

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
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 2

The [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of both the complementary and the navigational [sections of repeated content][section of repeated content] can be toggled on and off by the button at the start of the document.

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="toggleHidden(['navigation', 'biography'])">Toggle repeated content</button>
		<nav id="navigation">
			<h1>Contents</h1>
			<!-- list of links to each chapter, repeated on each page -->
		</nav>
		<aside id="biography">
			<h1>About the authors</h1>
			<!-- biography of the author and translator -->
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

The [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of both the complementary and the navigational [sections of repeated content][section of repeated content] can be toggled on and off, each of them by a different [instrument][].

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleHidden('navigation')">Toggle table of content</a>
		<button onclick="toggleHidden('biography')">Toggle extra content</button>
		<nav id="navigation">
			<h1>Contents</h1>
			<!-- list of links to each chapter, repeated on each page -->
		</nav>
		<aside id="biography">
			<h1>About the authors</h1>
			<!-- biography of the author and translator -->
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

The [visibility][visible] of the navigational [section of repeated content][] can be toggled on and off by the [visible][] link at the start of the document. Its [inclusion in the accessibility tree][included in the accessibility tree] can be toggled on and off by the button at the start of the document.

```html
<html>
	<head>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleVisibility('navigation')" aria-hidden="true">Toggle table of content</a>
		<button onclick="toggleAriaHidden('navigation')" class="off-screen">Toggle table of content</button>
		<nav id="navigation">
			<h1>Contents</h1>
			<!-- list of links to each chapter, repeated on each page -->
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

#### Passed Example 5

The navigational [section of repeated content][] can be made non-[visible][] and removed from the accessibility tree by the button at the start of the document.

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="hide('navigation')">Hide table of content</button>
		<nav id="navigation">
			<h1>Contents</h1>
			<!-- list of links to each chapter, repeated on each page -->
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

There is no [instrument][] to toggle the navigational [section of repeated content][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="navigation">
			<h1>Contents</h1>
			<!-- list of links to each chapter, repeated on each page -->
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

The [instrument][] to toggle the navigational [section of repeated content][] is not [visible][].

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" style="position: absolute; top: -999px" onclick="toggleHidden('navigation')">Toggle table of content</a>
		<nav id="navigation">
			<h1>Contents</h1>
			<!-- list of links to each chapter, repeated on each page -->
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

The [instrument][] to toggle the navigational [section of repeated content][] is not [included in the accessibility tree][].

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" aria-hidden="true" onclick="toggleHidden('navigation')">Toggle table of content</a>
		<nav id="navigation">
			<h1>Contents</h1>
			<!-- list of links to each chapter, repeated on each page -->
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

There is no [instrument][] to toggle the [inclusion in the accessibility tree][included in the accessibility tree] of the navigational [section of repeated content][].

```html
<html>
	<head>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleVisibility('navigation')">Toggle table of content</a>
		<nav id="navigation">
			<h1>Contents</h1>
			<!-- list of links to each chapter, repeated on each page -->
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

There is no [instrument][] to toggle the [visibility][visible] of the navigational [section of repeated content][].

```html
<html>
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/toggle-display.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#" onclick="toggleAriaHidden('navigation')">Toggle table of content</a>
		<nav id="navigation">
			<h1>Contents</h1>
			<!-- list of links to each chapter, repeated on each page -->
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

[accessible name]: #accessible-name 'Definition of accessible name'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark_roles 'List of landmark roles'
[tech scr28]: https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28 'Technique SCR28: Using an expandable and collapsible menu to bypass block of content'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1: Bypass blocks'
[sections of content]: #section-of-content 'Definition of section of content'
[section of repeated content]: #section-of-repeated-content 'Definition of section of repeated content'
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components 'Definition of user interface component'
[visible]: #visible 'Definition of visible'
[html web page]: #web-page-html 'Definition of web page (HTML)'

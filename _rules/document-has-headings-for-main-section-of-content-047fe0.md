---
id: 047fe0
name: Document has heading for main section of content
rule_type: atomic
description: |
  This rule checks that the main section of content starts with a heading
accessibility_requirements:
  wcag-technique:H69: # Providing heading elements at the beginning of each section of content
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
    - Image from a Ming Dynasty edition of the Romance of the Three Kingdoms, original kept in the library holdings of Peking University.
---

## Applicability

This rule applies to any [HTML web page][].

## Expectations

The first non-[decorative][] node in the [flat tree][] which is inside the [main block of content][] of the test target and has a non-empty [accessible name][]:

- has a [semantic role][] of `heading`; and
- is [visible][]; and
- is [included in the accessibility tree][].

## Assumptions

- This rule assumes that there is exactly one [main block of content][] inside each [HTML web page][].
- This rule assumes that headings used to pass [Technique H69: Providing heading elements at the beginning of each section of content][tech h69] have to be [included in the accessibility tree][] in order to be beneficial to users of assistive technologies.

## Accessibility Support

- Having a heading for the [main block of content][] is sufficient to pass [Success Criterion 2.4.1: Bypass blocks][sc241]. However, if headings are used for that goal, they will only benefit users who can actually navigate from heading to heading (such a functionality can be provided by browsers, browsers plugins, screen readers or other assistive technologies). Users without any possibility for heading navigation will be left without way of bypassing blocks of repeated content and will still experience accessibility issues. Therefore, it is recommended to provide other ways of bypassing blocks.
- When headings are rendered without sufficient visual cues, they are not perceived as headings by sighted users. In this case, passing this rule might still fail [Technique H69: Providing heading elements at the beginning of each section of content][tech h69] and [Success Criterion 2.4.1: Bypass blocks][sc241]. Additionally, this is likely a failure of [Success Criterion 1.3.1: Info and Relationships][sc131].

## Background

Neither this rule, nor technique [H69: Providing heading elements at the beginning of each section of content][tech h69], expects the heading to accurately describe its corresponding section. However, having non descriptive headings fails [Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/TR/WCAG21/#headings-and-labels)

- [Understanding Success Criterion 2.4.1: Bypass Blocks][usc241]
- [H69: Providing heading elements at the beginning of each section of content][tech h69]
- [CSS Scoping (work in progress)](https://drafts.csswg.org/css-scoping/)

Unless otherwise specified, the [main block of content][] in the test cases corresponds to the `main` element.

## Test Cases

### Passed

#### Passed Example 1

This [document][] has a `h1` heading, which is [visible][] and [included in the accessibility tree][], at the start of its [main block of content][].

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

#### Passed Example 2

This [document][] has a `h2` heading, which is [visible][] and [included in the accessibility tree][], at the start of its [main block of content][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<h1>The Three Kingdoms, Chapter 1</h1>

		<nav id="chapters-navigation">
			<h2>Content</h2>
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<main>
			<h2>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h2>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 3

This [document][] has a `h1` heading, which is [visible][] and [included in the accessibility tree][], at the start of its [main block of content][].

**Note:** In this [document][], the [blocks of content][block of content] are identified by the level 1 heading at their start.

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<!-- Navigational block of content starts here -->
		<h1>Content</h1>
		<ol>
			<li><a>Chapter 1</a></li>
			<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
		</ol>
		<!-- Navigational block of content ends here -->

		<!-- Main block of content starts here -->
		<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
		<p>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</p>
		<!-- Main block of content ends here -->
	</body>
</html>
```

#### Passed Example 4

This [document][] has a `h1` heading, which is [visible][] and [included in the accessibility tree][], at the start of its [main block of content][]. The heading is not the first element of the [main block of content][], but it is the first one which is non-[decorative][] and has a non-empty [accessible name][] (inherited from its content).

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
			<hr />
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

This [document][] has a `h1` heading, which is [visible][] and [included in the accessibility tree][], at the start of its [main block of content][]. The image at the start of the [main block of content][] has an empty [accessible name][]. Thus, the first node with a non-empty [accessible name][] in is the `h1` element

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
			<img src="../test-assets/bypass-blocks-cf77f2/peach-garden-oath.jpg" role="presentation" alt="" />
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

This [document][] has a `div` element with a role of `heading`, which is [visible][] and [included in the accessibility tree][], at the start of its [main block of content][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="chapters-navigation">
			<div role="heading" aria-level="1">Contents</div>
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<main>
			<div role="heading" aria-level="1">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</div>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 7

This [document][] has a `h1` heading, which is [visible][] and [included in the accessibility tree][], at the start of its [main block of content][]. The [accessible name][] of the image (given by the `alt` attribute) is also the [accessible name][] of the heading.

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
			<h1>
				<img
					src="../test-assets/bypass-blocks-cf77f2/peach-garden-oath.jpg"
					alt="Three Heroes Swear Brotherhood at a Feast in the Peach Garden"
				/>
			</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 8

This [document][] has a `h1` heading, which is [visible][] and [included in the accessibility tree][], at the start of its [main block of content][]. The `span` before it is [decorative][] and thus ignored by this rule.

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
			<span>1.</span>
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

In this document, inside the [main block of content][], the first node with a non-empty [accessible name][] does not have a [semantic role][] of `heading`, even though it is styled to appear as one.

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
			<strong style="font-size: 18pt">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</strong>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Failed Example 2

The [main block of content][] of this [document][] starts with a `h1` heading, but it is not [visible][] (because it is off screen).

```html
<html>
	<head>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
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
			<h1 class="off-screen">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Failed Example 3

The [main block of content][] of this [document][] starts with a `h1` heading, but it is not [included in the accessibility tree][] (because of the `aria-hidden` attribute).

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
			<h1 aria-hidden="true">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
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
[block of content]: #block-of-content 'Definition of Block of Content'
[decorative]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure decoration'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS definition of Flat Tree'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sc131]: https://www.w3.org/TR/WCAG21/#info-and-relationships 'Success Criterion 1.3.1 Info and Relationships'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1: Bypass Blocks'
[tech h69]: https://www.w3.org/WAI/WCAG21/Techniques/html/H69 'Technique H69: Providing Heading Elements at the Beginning of each Section of Content'
[usc241]: https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html 'Understanding Success Criterion 2.4.1: Bypass Blocks'
[visible]: #visible 'Definition of Visible'

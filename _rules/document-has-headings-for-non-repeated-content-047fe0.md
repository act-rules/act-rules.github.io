---
id: 047fe0
name: Document has heading for non-repeated content
rule_type: atomic
description: |
  This rule checks that the non-repeated content contains a heading
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
  funding:
    - WAI-Tools
  assets:
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
    - Image from a Ming Dynasty edition of the Romance of the Three Kingdoms, original kept in the library holdings of Peking University.
---

## Applicability

This rule applies to any [HTML web page][].

## Expectations

In each test target, either there is no [non-repeated content after repeated content][] or there exists an element for which all the following are true:

- the element is [non-repeated content after repeated content][]; and
- the element is a [semantic][] `heading`; and
- the element is [visible][]; and
- the element is [included in the accessibility tree][].

## Assumptions

- This rule assumes that headings used to pass [Technique H69: Providing heading elements at the beginning of each section of content][h69] have to be [included in the accessibility tree][] in order to be beneficial to users of assistive technologies.
- This rule assumes that the first non-repeated content is starting a new section of content. If this is not the case, it is possible to fail the rule while still passing [Technique H69: Providing heading elements at the beginning of each section of content][h69].

## Accessibility Support

- Having a heading for the non-repeated content is sufficient to pass [Success Criterion 2.4.1 Bypass blocks][sc241]. However, if headings are used for that goal, they will only benefit users who can actually navigate from heading to heading (such a functionality can be provided by browsers, browsers plugins, screen readers or other assistive technologies). Users without any possibility for headings navigation will be left without way of bypassing blocks of repeated content and will still experience accessibility issues. Therefore, it is recommended to provide other ways of bypassing blocks.
- When headings are rendered without sufficient visual cues, they are not perceived as headings by sighted users. In this case, passing this rule might still fail [Technique H69: Providing heading elements at the beginning of each section of content][h69] and [Success Criterion 2.4.1 Bypass blocks][sc241]. Additionally, this is likely a failure of [Success Criterion 1.3.1 Info and Relationships][sc131].

## Background

The intention of this rule is that the heading is at (or near) the start of the main area of content of a document. However, defining the main area of content in a non-ambiguous way is not really doable. Therefore, the rule takes a more lenient position and only requires the heading to be some non-repeated content. Additional conditions on this heading were considered and rejected when writing the rule since it might be acceptable, for example, to have non-repeated content such as breadcrumb before any heading. Therefore, it is possible to pass this rule but still fail [H69: Providing heading elements at the beginning of each section of content][h69] and violate [Success Criterion 2.4.1 Bypass blocks][sc241].

Neither this rule, nor technique [H69: Providing heading elements at the beginning of each section of content][h69], expects the heading to accurately describe its corresponding section. However, having non descriptive headings fails [Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/TR/WCAG22/#headings-and-labels)

### Bibliography

- [Understanding Success Criterion 2.4.1: Bypass Blocks][usc241]
- [H69: Providing heading elements at the beginning of each section of content][h69]
- [CSS Scoping (work in progress)](https://drafts.csswg.org/css-scoping/)

## Test Cases

To avoid using landmarks for the non-repeated content, which would satisfy [Success Criterion 2.4.1 Bypass Block][sc241], which this rule is designed for, this rule uses `<div id="main">` in its test cases to indicate where non-repeating content exists. It is recommended to use the `main` landmark instead. The `nav` element is a [block of repeated content][] due to the link inside it to a page with similar [blocks of content][block of content].

### Passed

#### Passed Example 1

This [document][] has a `h1` heading, which is [visible][] and [included in the accessibility tree][], at the beginning of its non-repeated content.

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

#### Passed Example 2

This [document][] has a `h2` heading, which is [visible][] and [included in the accessibility tree][], at the beginning of its non-repeated content.

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

		<div id="main">
			<h2>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h2>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 3

This [document][] has a `h1` heading, which is [visible][] and [included in the accessibility tree][], at the beginning of its non-repeated content.

**Note:** In this [document][], the non-repeated content starts after the `ol` element.

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

This [document][] has a `h1` heading, which is [visible][] and [included in the accessibility tree][], at the beginning of its non-repeated content. Here, the heading is the first [non-repeated content after repeated content][].

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

		<div id="main">
			<hr />
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 5

This [document][] has a `h1` heading, which is [visible][] and [included in the accessibility tree][], at the beginning of its non-repeated content.

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

		<div id="main">
			<img src="/test-assets/bypass-blocks-cf77f2/peach-garden-oath.jpg" alt="" />
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 6

This [document][] has a `div` element with a role of `heading`, which is [visible][] and [included in the accessibility tree][], at the beginning of its non-repeated content. Note that re-purposing an element instead of using native HTML is a violation of the [First Rule of ARIA Use](https://www.w3.org/TR/using-aria/#rule1) and should normally be avoided.

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

		<div id="main">
			<div role="heading" aria-level="1">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</div>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 7

This [document][] has a `h1` heading, which is [visible][] and [included in the accessibility tree][], at the beginning of its non-repeated content.

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

		<div id="main">
			<h1>
				<img
					src="/test-assets/bypass-blocks-cf77f2/peach-garden-oath.jpg"
					alt="Three Heroes Swear Brotherhood at a Feast in the Peach Garden"
				/>
			</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 8

This [document][] has a `h1` heading, which is [visible][] and [included in the accessibility tree][], at the beginning of its non-repeated content.

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

		<div id="main">
			<span>1.</span>
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 9

This [document][] has no [non-repeated content after repeated content][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<p>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

In this document, there is [semantic][] `heading` element, even though the `strong` element is styled to appear as one.

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
			<strong style="font-size: 18pt">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</strong>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Failed Example 2

The non-repeated content of this [document][] starts with a `h1` heading, but it is not [visible][] (because it is off-screen).

```html
<html>
	<head>
		<link rel="stylesheet" href="/test-assets/bypass-blocks-cf77f2/styles.css" />
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
			<h1 class="off-screen">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Failed Example 3

The non-repeated content of this [document][] starts with a `h1` heading, but it is not [included in the accessibility tree][] (because of the `aria-hidden` attribute).

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
			<h1 aria-hidden="true">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Failed Example 4

In this [document][], the only element with a role of `heading` is inside a [block of repeated content][] and therefore isn't [non-repeated content after repeated content][].

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

[block of content]: #block-of-repeated-content 'Definition of Block of Content'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[non-repeated content after repeated content]: #non-repeated-content 'Definition of Non-Repeated Content after Repeated Content'
[semantic]: #semantic-role 'Definition of Semantic Role'
[sc131]: https://www.w3.org/TR/WCAG22/#info-and-relationships 'Success Criterion 1.3.1 Info and Relationships'
[sc241]: https://www.w3.org/TR/WCAG22/#bypass-blocks 'Success Criterion 2.4.1: Bypass Blocks'
[h69]: https://www.w3.org/WAI/WCAG22/Techniques/html/H69 'Technique H69: Providing Heading Elements at the Beginning of each Section of Content'
[usc241]: https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html 'Understanding Success Criterion 2.4.1: Bypass Blocks'
[visible]: #visible 'Definition of Visible'

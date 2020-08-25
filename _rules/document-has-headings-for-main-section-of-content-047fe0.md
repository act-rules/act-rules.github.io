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
  - DOM Tree
  - CSS styling
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

The first node in the [flat tree][] which is inside the [main block of content][] of the test target and has a non-empty [accessible name][]:

- has a [semantic role][] of `heading`; and
- is [visible][]; and
- is [included in the accessibility tree][].

**Note** Neither this rule, nor technique [H69: Providing heading elements at the beginning of each section of content][tech h69], expects the heading to accurately describe its corresponding section. However, having non descriptive headings fails [Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/TR/WCAG21/#headings-and-labels)

## Assumptions

- This rule assumes that headings used to pass [Technique H69: Providing heading elements at the beginning of each section of content][tech h69] have to be [included in the accessibility tree][] in order to be beneficial to users of assistive technologies.
- This rule assumes that there is exactly one [main block of content][] inside each [HTML web page][].

## Accessibility Support

- Having a heading for the [main block of content][] is sufficient to pass [Success Criterion 2.4.1: Bypass blocks][sc241]. However, if headings are used for that goal, they will only benefit users who can actually navigate from heading to heading (such a functionality can be provided by browsers, browsers plugins, screen readers or other assistive technologies). Users without any possibility for heading navigation will be left without way of bypassing blocks of repeated content and will still experience accessibility issues. Therefore, it is recommended to provide other ways of bypassing blocks.
- When headings are rendered without sufficient visual cues, they are not perceived as headings by sighted users. In this case, passing this rule might still fail [Technique H69: Providing heading elements at the beginning of each section of content][tech h69] and [Success Criterion 2.4.1: Bypass blocks][sc241]. Additionally, this is likely a failure of [Success Criterion 1.3.1: Info and Relationships][sc131].

## Background

- [Understanding Success Criterion 2.4.1: Bypass Blocks][usc241]
- [H69: Providing heading elements at the beginning of each section of content][tech h69]
- [CSS Scoping (work in progress)](https://drafts.csswg.org/css-scoping/)

## Test Cases

**Note:** Unless specified otherwise, the [sections of content][section of content] of each document are defined by the [landmarks][landmark] (`main` and `nav` elements).

### Passed

#### Passed Example 1

This [document][] has a `h1` heading at the start of its [main block of content][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<!-- list of links to each chapter -->
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

This [document][] has a `h2` heading at the start of its [main block of content][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<h1>The Three Kingdoms, Chapter 1</h1>
		<nav>
			<h2>Table of content</h2>
			<!-- list of links to each chapter -->
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

This [document][] has one [section of content][] for the navigation links, and the [main block of content][]. Each starts with a `h1` heading.

**Note:** In this [document][], the [sections of content][section of content] are identified by the level 1 heading at their start.

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
		<p>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</p>
		<!-- Main section of content ends here -->
	</body>
</html>
```

#### Passed Example 4

In this [document][], the heading is not the first element of the [main block of content][], but it is the first with a non-empty [accessible name][] (inherited from its content).

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<!-- list of links to each chapter -->
		</nav>
		<main>
			<hr />
			<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 5

The image at the start of the [main block of content][] has an empty [accessible name][]. Thus, the first node with a non-empty [accessible name][] is the `h1` element and the rule passes.

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<h1>Contents</h1>
			<!-- list of links to each chapter -->
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

The [main block of content][] of this [document][] starts with a `div` element with a role of `heading`.

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<div role="heading" aria-level="1">Contents</div>
			<!-- list of links to each chapter -->
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

This [document][] is using image as heading, the [accessible name][] of the image (given by the `alt` attribute) is also the [accessible name][] of the heading.

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<!-- list of links to each chapter -->
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

### Failed

#### Failed Example 1

For the [main block of content][], the first node with a non-empty [accessible name][] does not have a [semantic role][] of `heading`, even though it is styled to appear as one.

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<!-- list of links to each chapter -->
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
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<!-- list of links to each chapter -->
		</nav>
		<main>
			<h1 style="position: absolute; top:-999px">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Failed Example 3

The heading of the [main block of content][] is not [included in the accessibility tree][] because of the `aria-hidden` attribute.

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<!-- list of links to each chapter -->
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

#### Failed Example 4

The `h1` element at the start of the [main block of content][] has an empty [accessible name][] (because of the `aria-labelledby` attribute). Therefore, the first node with a non-empty [accessible name][] is the `img` element which does not have a [semantic role][] of `heading`.

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<!-- list of links to each chapter -->
		</nav>
		<main>
			<span id="label"></span>
			<h1 aria-labelledby="label">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<img
				src="../test-assets/bypass-blocks-cf77f2/peach-garden-oath.jpg"
				alt="Three Heroes Swear Brotherhood at a Feast in the Peach Garden"
			/>
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
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS definition of Flat Tree'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark_roles 'List of Landmark Roles'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[section of content]: #section-of-content 'Definition of Section of Content'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sc131]: https://www.w3.org/TR/WCAG21/#info-and-relationships 'Success Criterion 1.3.1 Info and Relationships'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1: Bypass Blocks'
[tech h69]: https://www.w3.org/WAI/WCAG21/Techniques/html/H69 'Technique H69: Providing Heading Elements at the Beginning of each Section of Content'
[usc241]: https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html 'Understanding Success Criterion 2.4.1: Bypass Blocks'
[visible]: #visible 'Definition of Visible'

---
id: 047fe0
name: Document has headings
rule_type: atomic
description: |
  This rule checks that each section of content starts with a heading
accessibility_requirements:
  wcag-technique:H69: # Providing heading elements at the beginning of each section of content
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
input_aspects:
  - DOM Tree
  - CSS styling
acknowledgements:
  authors:
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any [document][] where the [document element][] is an `html` element.

## Expectations

For each [section of content][] in the test target, the first node in the [flat tree][] which is inside this [section of content][] and has a non-empty [accessible name][]:

- has a [semantic role][] of `heading`; and
- is [visible][]; and
- is [included in the accessibility tree][].

**Note**: Neither this rule, nor technique [H69: Providing heading elements at the beginning of each section of content][tech h69], expects the heading to accurately describe its corresponding section. However, having non descriptive headings fails [Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/TR/WCAG21/#headings-and-labels)

**Note**: Neither this rule, nor technique [H69: Providing heading elements at the beginning of each section of content][tech h69], expects that headings are correctly nested without skipping level. It is nonetheless recommended to nest headings hierarchically without skipping levels.

## Assumptions

This rule assumes that headings used to pass technique [H69: Providing heading elements at the beginning of each section of content][tech h69] have to be [visible][] and [included in the accessibility tree][] in order to be beneficial to all users whether they are using assistive technologies or not.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

**Note to reviewers**: In its current state, the definition of [section of content][] would include, e.g. an advertising sidebar as a specific section of content. However, it is not clear that the lack of heading on it would be a breach of H69 or SC 2.4.1… Idea?

## Background

- [H69: Providing heading elements at the beginning of each section of content][tech h69]
- [CSS Scoping (work in progress)](https://drafts.csswg.org/css-scoping/)

## Test Cases

### Passed

#### Passed Example 1

This [document][] has one [section of content][] for the navigation links, and one for the actual text. Each starts with a `h1` heading.

**Note**: In this [document][], the [sections of content][] are identified by the level 1 heading at their start.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title>
	</head>
	<body>
		<!-- Navigational section of content starts here -->
		<h1>Contents</h1>
		<!-- list of links to each chapter -->
		<!-- Navigational section of content ends here -->

		<!-- Main section of content starts here -->
		<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
		<!-- Main section of content ends here -->
	</body>
</html>
```

#### Passed Example 2

In this [document][], headings are not the first elements of each [section of content][], but they are the first with a non-empty [accessible name][]. The [accessible name][] of the second heading is inherited from its content.

**Note**: In this [document][], the [sections of content][] are defined by the [landmarks][] (`nav` and `main` elements).

```html
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
  <body>
    <nav>
      <hr>
      <h1>Contents</h1>
      <!-- list of links to each chapter -->
    </nav>
    <main>
      <hr>
      <h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden<span></h1>
      Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
    </main>
  </body>
</html>
```

#### Passed Example 3

The image at the start of the second [section of content][] does not have an [accessible name][]. Thus, the first node with an [accessible name][] is the `h1` element and the rule passes.

**Note**: In this [document][], the [sections of content][] are defined by the [landmarks][] (`nav` and `main` elements).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title>
	</head>
	<body>
		<nav>
			<h1>Contents</h1>
			<!-- list of links to each chapter -->
		</nav>
		<main>
			<img src="../test-assets/document-headings-047fe0/peach-garden-oath.jpg" role="presentation" alt="" />
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

#### Passed Example 4

This [document][] has one [section of content][] for the navigation links, and one for the actual text. Each starts with a `div` with a role of `heading`.

**Note**: In this [document][], the [sections of content][] are defined by the [landmarks][] (`nav` and `main` elements).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title>
	</head>
	<body>
		<nav>
			<div role="heading">Contents</div>
			<!-- list of links to each chapter -->
		</nav>
		<main>
			<div role="heading">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</div>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

#### Passed Example 5

This [document][] is using image as heading, the [accessible name][] of the image (given by the `alt` attribute) is also the [accessible name][] of the heading.

**Note**: In this [document][], the [sections of content][] are defined by the [landmarks][] (`nav` and `main` elements).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title>
	</head>
	<body>
		<nav>
			<h1>Contents</h1>
			<!-- list of links to each chapter -->
		</nav>
		<main>
			<h1>
				<img
					src="../test-assets/document-headings-047fe0/peach-garden-oath.jpg"
					alt="Three Heroes Swear Brotherhood at a Feast in the Peach Garden"
				/>
			</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

### Failed

#### Failed Example 1

This [document][] has no heading, for its navigational [section of content][].

**Note**: In this [document][], the [sections of content][] are defined by the [landmarks][] (`nav` and `main` elements).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title>
	</head>
	<body>
		<nav>
			<!-- list of links to each chapter -->
		</nav>
		<main>
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

#### Failed Example 2

The heading of the second [section of content][] is not [included in the accessibility tree][] because of the `aria-hidden` attribute.

**Note**: In this [document][], the [sections of content][] are defined by the [landmarks][] (`nav` and `main` elements).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title>
	</head>
	<body>
		<nav>
			<h1>Contents</h1>
			<!-- list of links to each chapter -->
		</nav>
		<main>
			<h1 aria-hidden="true">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

#### Failed Example 3

The [accessible name][] of the image used as heading for the second [section of content][], which is also the [accessible name][#accessible-name] of the heading, is only empty.

**Note**: In this [document][], the [sections of content][] are defined by the [landmarks][] (`nav` and `main` elements).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title>
	</head>
	<body>
		<nav>
			<h1>Contents</h1>
			<!-- list of links to each chapter -->
		</nav>
		<main>
			<h1><img src="../test-assets/document-headings-047fe0/peach-garden-oath.jpg" alt=" " /></h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

#### Failed Example 4

The first [section of content][] starts with a node which does not have a [semantic role][] of `heading`.

**Note**: In this [document][], the [sections of content][] are defined by the [landmarks][] (`nav` and `main` elements).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title>
	</head>
	<body>
		<nav>
			<div>Table of content</div>
			<h1>Contents</h1>
			<!-- list of links to each chapter -->
		</nav>
		<main>
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The [document element][] of this [document][] is not an `html` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[document]: #https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[document element]: #https://dom.spec.whatwg.org/#document-element 'Definition of document element'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark 'The landmark role in WAI ARIA'
[section of content]: #section-of-content 'Definition of section of content'
[semantic role]: #semantic-role 'Definition of semantic role'
[tech h69]: https://www.w3.org/WAI/WCAG21/Techniques/html/H69 'Technique H69: Providing heading elements at the beginning of each section of content'
[visible]: #visible 'Definition of visible'

---
id: e53727
name: First focusable elements are links to sections of content
rule_type: atomic
description: |
  This rule checks that the first focusable elements are links referring to sections of content on the same page
accessibility_requirements:
  wcag-technique:G124: # Adding links at the top of the page to each area of the content
    forConformance: false
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS styling
  - Language
acknowledgements:
  authors:
    - Jean-Yves Moyen
    - Christina Adams
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation 1

Within the test target, there is an [initial segment][] of the [focusable][] elements (in focus order) such that each element in that [initial segment][]:

- is [included in the accessibility tree][]; and
- is [visible][] when [focused][]; and
- has a [semantic role][] of link; and
- when activated, moves focus to a [section of content][] within the same [document][]; and
- has an [accessible name][] that communicates that it links to that specific [section of content][].

**Note**: There is no requirement on how many [focusable][] elements are part of that [initial segment][], nor any requirement to provide a way to determine (programmatically or not) where that [initial segment][] stops. Technique [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124), and this rule, only require that such an set exists.

**Note for reviewers**: An attempt to clarify what this initial segment has to be is done in the second expectation: it must contain exactly one link for each section of content in the page. I am still not very happy with the formulation, nor with the order of these two expectations. Any suggestions to improve that are welcome…

## Expectation 2

Each [section of content][] in the [document][] is the target of exactly one link from the set of [focusable][] elements that passes Expectation 1.

## Assumptions

- This rule assumes that description of the link is provided through its [accessible name][].
- This rule assumes that any global dismissible information that only appears once per site has already been acknowledged and is not displayed any more.

**Note**: The aim of such links is to be able to skip [sections of repeated content][section of repeated content] (headers, navigation bar, ...) when viewing several pages of the same site. Many sites display a cookies policy banner which might be stealing focus until dismissed (usually by viewing and accepting cookies policy). Since that content is _not_ repeated (is it only shown once for the full site), it is not a problem to have it, and it may appear on any page of the site (depending where the user first comes in).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

**Note to reviewers**: In its current state, the definition of [section of content][] would include, e.g. an advertising sidebar as a specific section of content. However, it is not clear that the lack of link to it would be a breach of G124 or SC 2.4.1… Idea?

## Background

- [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124)

## Test Cases

**Note**: The text of the examples is from the translation of the first Chapter of _The Three Kingdoms_ by Yu Sumei (Tuttle publishing, May 2014).

**Note**: Unless specified otherwise, the [sections of content][section of content] of each document are defined by the [landmarks][landmark] (`aside`, `form` and `main` elements), and the complementary and form [sections of content][section of content] (`aside` and `form` elements) are [sections of repeated content][section of repeated content] which do not include any [focusable][] element not shown explicitly.

### Passed

#### Passed Example 1

The [initial segment][] composed of the first three [focusable][] elements in this [document][] matches both expectations.

```html
<html>
	<ul>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="#main">Skip to main content</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the authors, repeated on each page -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Passed Example 2

The links in the [initial segment][] (composed of the first three focusable elements) are [visible][] when [focused][].

```html
<html>
	<head>
		<link rel="stylesheet" href="../test-assets/first-focusable-8a213c-e53727/styles.css" />
	</head>
	<body>
		<a class="visible-on-focus" href="#search">Skip to search</a>
		<a class="visible-on-focus" href="#about">Skip to additional information</a>
		<a class="visible-on-focus" href="#main">Skip to text</a>
		<form id="search" role="search">Search in text</form>
		<aside id="about">
			<h1>About the book</h1>
			<!-- short description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
		</aside>
		<main id="main">
			<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

#### Passed Example 3

The links in the [initial segment][] (composed of the first three focusable elements) use `aria-label` to provide an [accessible name][].

```html
<html>
	<ul>
		<li><a href="#search" aria-label="Skip to search">🔍</a></li>
		<li><a href="#about" aria-label="Skip to additional information">➕</a></li>
		<li><a href="#main" aria-label="Skip to text">📖</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the authors, repeated on each page -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Passed Example 4

Even though they are after the form [section of repeated content][], the three links are still the first [focusable][] elements and thus are an [initial segment][] of [focusable][] elements passing the expectation.

```html
<html>
	<form id="search" role="search">Search in text</form>
	<ul>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="#main">Skip to main content</a></li>
	</ul>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the authors, repeated on each page -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

### Failed

#### Failed Example 1

The first [focusable][] elements in the [initial segment][] of the document do not have a [semantic role][] of link.

```html
<html>
	<ul>
		<li onclick="focusContentSection('navigation')" tabindex="0">Skip to navigation</li>
		<li onclick="focusContentSection('search')" tabindex="0">Skip to search</li>
		<li onclick="focusContentSection('main')" tabindex="0">Skip to main</li>
	</ul>
	<nav id="navigation">Navigation section</nav>
	<form id="search" role="search">Search section</form>
	<main id="main">Main content</main>
	<script>
		function focusContentSection(elem) {
			var elemId = document.getElementById(elem)
			elemId.focus()
		}
	</script>
</html>
```

#### Failed Example 2

Each [focusable][] element in the [initial segment][] of the document does not have a [semantic role][] of link.

```html
<html>
	<ul>
		<li><a href="#navigation">Skip to navigation</a></li>
		<li><a href="#search">Skip to search</a></li>
		<li onclick="focusContentSection('main')" tabindex="0">Skip to main</li>
	</ul>
	<nav id="navigation">Navigation section</nav>
	<form id="search" role="search">Search section</form>
	<main id="main">Main content</main>
	<script>
		function focusContentSection(elem) {
			var elemId = document.getElementById(elem)
			elemId.focus()
		}
	</script>
</html>
```

#### Failed Example 3

Links in the [initial segment][] list when activated do not move the focus to a [section of content][] due to the invalid `href` attributes.

```html
<html>
	<ul>
		<li><a href="#">Skip to navigation</a></li>
		<li><a href="https://www.w3.org/">Skip to search</a></li>
		<li><a href="javascript:void(0);">Skip to main content</a></li>
	</ul>
	<nav id="navigation">Navigation section</nav>
	<form id="search" role="search">Search section</form>
	<main id="main">Main content</main>
</html>
```

#### Failed Example 4

Links in the [initial segment][] list do not move focus to a [section of content][] when activated due to invalid `id` attributes.

```html
<html>
	<ul>
		<li><a href="#navigation" aria-label="Skip to navigation"></a></li>
		<li><a href="#search" aria-label="Skip to search"></a></li>
		<li><a href="#main" aria-label="Skip to main content"></a></li>
	</ul>
	<nav>Navigation section</nav>
	<form role="search">Search section</form>
	<main>Main content</main>
</html>
```

#### Failed Example 5

Links in the [initial segment][] list are not the first [focusable][] elements in the document.

```html
<html>
	<a href="https://www.w3.org/">Go to the W3C</a>
	<ul>
		<li><a href="#navigation">Skip to navigation</a></li>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#main">Skip to main content</a></li>
	</ul>
	<nav id="navigation">Navigation section</nav>
	<form id="search" role="search">Search section</form>
	<main id="main">Main content</main>
</html>
```

#### Failed Example 6

Links in the [initial segment][] list are not [visible][] when [focused][].

```html
<html>
	<ul style="display:none;" id="skiplinks">
		<li><a href="#navigation">Skip to navigation</a></li>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#main">Skip to main content</a></li>
	</ul>
	<nav id="navigation">Navigation section</nav>
	<form id="search" role="search">Search section</form>
	<main id="main">Main content</main>
</html>
```

#### Failed Example 7

Links in the [initial segment][] list do not have an [accessible name][].

```html
<html>
	<ul>
		<li><a href="#navigation"></a></li>
		<li><a href="#search"></a></li>
		<li><a href="#main"></a></li>
	</ul>
	<nav id="navigation">Navigation section</nav>
	<form id="search" role="search">Search section</form>
	<main id="main">Main content</main>
</html>
```

#### Failed Example 8

Multiple links in the [initial segment][] list move the focus to the same [section of content][].

```html
<html>
	<ul>
		<li><a href="#navigation">Skip to navigation</a></li>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#main">Skip to main content</a></li>
		<li><a href="#main">Skip to main content again with this link</a></li>
	</ul>
	<nav id="navigation">Navigation section</nav>
	<form id="search" role="search">Search section</form>
	<main id="main">Main content</main>
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
[document element]: https://dom.spec.whatwg.org/#document-element 'Definition of document element'
[focusable]: #focusable 'Definition of focusable'
[focused]: https://html.spec.whatwg.org/#focused 'Definition of focused'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[initial segment]: #initial-segment 'Definition of initial segment'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark_roles 'List of landmark roles'
[section of content]: #section-of-content 'Definition of section of content'
[section of repeated content]: #section-of-repeated-content 'Definition of section of repeated content'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
[html web page]: #web-page-html 'Definition of web page (HTML)'

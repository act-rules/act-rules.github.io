---
id: 8a213c
name: First focusable element is link to main content
rule_type: atomic
description: |
  This rule checks that the first focusable element is a link referring to the main content of the page
accessibility_requirements:
  wcag-technique:G1: # Adding a link at the top of each page that goes directly to the main content area
    forConformance: true
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

The first [focusable][] element within the test target:

- is [included in the accessibility tree][]; and
- is [visible][] when [focused][]; and
- has a [semantic role][] of `link`; and
- when activated, moves focus to the main [section of content][] of the [document][]; and
- has an [accessible name][] that communicates that it links to the main [section of content][].

## Assumptions

- This rule assumes that description of the link is provided through its [accessible name][].
- This rule assumes that any global dismissible information that only appears once per site has already been acknowledged and is not displayed any more.

**Note**: The aim of such link is to be able to skip [sections of repeated content][section of repeated content] (headers, navigation bar, ...) when viewing several pages of the same site. Many sites display a cookies policy banner which might be stealing focus until dismissed (usually by viewing and accepting cookies policy). Since that content is _not_ repeated (is it only shown once for the full site), it is not a problem to have it, and it may appear on any page of the site (depending where the user first comes in).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G1: Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG21/Techniques/general/G1)

## Test Cases

**Note**: The text of the examples is from the translation of the first Chapter of _The Three Kingdoms_ by Yu Sumei (Tuttle publishing, May 2014).

**Note**: Unless specified otherwise, the main [sections of content][section of content] of each document is defined by the `main` element, and the complementary [section of content][] (`aside` element`) is a [section of repeated content][] which does not include any [focusable][] element not shown explicitly.

### Passed

#### Passed Example 1

The link to skip the complementary [section of repeated content][] is [visible][], is [included in the accessibility tree][], and when activated moves the focus to the main [section of content][]. Its [accessible name][] (coming from content) communicates that it skips to the main content.

```html
<html>
	<nav>
		<a href="#main">Skip to text</a>
	</nav>
	<aside>
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

The link to skip the complementary [section of repeated content][] is [included in the accessibility tree][], and is [visible][] when [focused][].

```html
<html>
	<head>
        <link rel="stylesheet" href="../test-assets/first-focusable-8a213c-e53727/styles.css" />
	</head>
	<body>
		<nav class="visible-on-focus">
		<a href="#main">Skip to text</a>
	</nav>
	<aside>
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

#### Passed Example 3

The link to skip the complementary [section of repeated content][] has an [accessible name][] that communicates that it links to the main [section of content][].

```html
<html>
	<nav>
		<a href="#main" aria-label="Skip to text">📖</a>
	</nav>
	<aside>
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

Even though it is located after it, the link to skip the complementary [section of repeated content][] is still the first [focusable][] element within the page.

```html
<html>
	<aside>
		<h1>About the book</h1>
		<!-- short description of the book and biography of the authors, repeated on each page -->
		<!-- does not include any focusable element -->
	</aside>
	<nav>
		<a href="#main">Skip to text</a>
	</nav>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

### Failed

#### Failed Example 1

There is no link to skip the complementary [section of repeated content][].

```html
<html>
	<aside>
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

#### Failed Example 2

The link to skip the complementary [section of repeated content][] is not the first [focusable][] element within the page.

```html
<html>
	<a href="https://www.w3.org/">Check out the W3C</a>
	<nav>
		<a href="#main">Skip to text</a>
	</nav>
	<aside>
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

#### Failed Example 3

The link to skip the complementary [section of repeated content][] is not included in the [accessibility tree][].

```html
<html>
	<nav>
		<a href="#main" aria-hidden="true">Skip to text</a>
	</nav>
	<aside>
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

#### Failed Example 4

The link to skip the complementary [section of repeated content][] is not [visible][], even when focused.

```html
<html>
	<nav>
		<a href="#main" style="position: absolute; top: -999px">Skip to text</a>
	</nav>
	<aside>
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

#### Failed Example 5

The element with a click event to skip the complementary [section of repeated content][] does not have a [semantic role][] of `link`.

```html
<html>
	<nav>
		<span onclick="document.getElementById('main').focus()">Skip to text</span>
	</nav>
	<aside>
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

#### Failed Example 6

The link to skip the complementary [section of repeated content][] does not reference a valid `id` attribute and thus when activated will not move focus to the main [section of content][].

```html
<html>
	<nav>
		<a href="#InvalidId">Skip to text</a>
	</nav>
	<aside>
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

#### Failed Example 7

The link to skip the complementary [section of repeated content][] does not have an [accessible name][] that communicates its intend.

```html
<html>
	<nav>
		<a href="#main">Click me if you dare!</a>
	</nav>
	<aside>
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
[section of content]: #section-of-content 'Definition of section of content'
[section of repeated content]: #section-of-repeated-content 'Definition of section of repeated content'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
[html web page]: #web-page-html 'Definition of web page (HTML)'

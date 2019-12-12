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

Each [section of content][] in the [document][] is the target of exactly one link from the [initial segment][] of [focusable][] elements found by Expectation 1.

**Note**: While Expectation 1 can always be passed by an empty [initial segment][] (i.e. a set of zero [focusable][] elements), Expectation 2 forces that [initial segment][] to have one or more elements (unless the page itself is empty and has zero [section of content][]…)

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

**Note**: Unless specified otherwise, the [sections of content][section of content] of each document are defined by the [landmarks][landmark] (`aside`, `form` and `main` elements), and the complementary [section of content][] (`aside` element) does not include any [focusable][] element not shown explicitly.

### Passed

#### Passed Example 1

The [initial segment][] composed of the first three [focusable][] elements in this [document][] fulfills both expectations.

```html
<html>
	<ul>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="#main">Skip to text</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
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
			<!-- short description of the book and biography of the author and translator -->
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

The links in the [initial segment][] (composed of the first three focusable elements) have an [accessible name][] provided by their `aria-label` attribute.

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
		<!-- short description of the book and biography of the author and translator -->
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

Even though they are after the form [section of repeated content][], the three links are still the first [focusable][] elements and thus are an [initial segment][] of [focusable][] elements fulfilling the expectations.

```html
<html>
	<form id="search" role="search">Search in text</form>
	<ul>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="#main">Skip to text</a></li>
	</ul>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Passed Example 5

The [initial segment][] composed of the first three [focusable][] elements in this [document][] fulfills both expectations. The fourth [focusable][] element can be left out of the [initial segment][] even though it is styled in a similar fashion.

```html
<html>
	<ul>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="#main">Skip to text</a></li>
		<li><a href="https://www.w3.org/">Check out the W3C</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Passed Example 6

The [initial segment][] composed of the first three [focusable][] elements in this [document][] fulfills both expectations. The fourth [focusable][] element can be left out of the [initial segment][] even though it moves focus to a [section of content][] inside the page.

```html
<html>
	<ul>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="#main">Skip to text</a></li>
		<li><a href="#main">Skip to text</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Passed Example 7

The first three [focusable][] elements are the links to the various [sections of content][section of content]. Even through the link to W3C is before them in tree order, it is the fourth [focusable][] element due to the `tabindex` attributes. Therefore, the first three [focusable][] elements form an [initial segment][] that fulfills both Expectations.

```html
<html>
	<ul>
		<li><a href="https://www.w3.org/" tabindex="4">Check out the W3C</a></li>
		<li><a href="#search" tabindex="1">Skip to search</a></li>
		<li><a href="#about" tabindex="2">Skip to additional information</a></li>
		<li><a href="#main" tabindex="3">Skip to text</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Passed Example 8

The [initial segment][] composed of the first three [focusable][] elements in this [document][] fulfills both expectations. Even though the links are spread around the page, they are still an [initial segment][] of the [focusable][] elements.

```html
<html>
	<form id="search" role="search"><a href="#search">Skip to search</a>Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<a href="#about">Skip to additional information</a>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		<a href="#main">Skip to text</a>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

### Failed

#### Failed Example 1 (no link)

This [HTML web page][] has no link to skip to the various [sections of content][section of content].

```html
<html>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example (not covering everything)

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the form [section of content][]. Even though it is the first [section of content][] on this page, it still requires a link.

```html
<html>
	<ul>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="#main" aria-label="">Skip to text</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example (not an IS)

The second, third and fourth links form a set that fulfills Expectation 2 and most of Expectation 1. However, the presence of the first link means that this set is not an [initial segment][]. There is no [initial segment][] fulfilling both expectations.

```html
<html>
	<ul>
		<li><a href="https://www.w3.org/">Check out the W3C</a></li>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="#main" aria-label="">Skip to text</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example 1 (not in AT)

The first three [focusable][] elements in this [document][] form an [initial segment][] that fulfills most conditions but none of these elements are [included in the accessibility tree][].

```html
<html>
	<ul>
		<li><a href="#search" aria-hidden="true">Skip to search</a></li>
		<li><a href="#about" aria-hidden="true">Skip to additional information</a></li>
		<li><a href="#main" aria-hidden="true">Skip to text</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example 1 (not in AT)

The first [focusable][] element form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the complementary and main [sections of content][section of content]. The first three [focusable][] elements form an [initial segment][] that fulfills Expectation 2 but not Expectation 1 because the second [focusable][] element is not [included in the accessibility tree][]. Thus, no [initial segment][] fulfills both Expectations.

```html
<html>
	<ul>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about" aria-hidden="true">Skip to additional information</a></li>
		<li><a href="#main">Skip to text</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example 6 (not visible when focused)

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the main [section of content][]. The third [focusable][] element does not fulfill Expectation 1 because it is not [visible][], even when [focused][]. Thus, no [initial segment][] fulfills both Expectations.

```html
<html>
	<ul>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="#main" style="display: none">Skip to text</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example 1 (not a link)

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the main [section of content][]. The third [focusable][] element does not fulfill Expectation 1 because it does not have a [semantic role][] of `link`. Thus, no [initial segment][] fulfills both Expectations.

```html
<html>
	<ul>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li onclick="document.getElementById('main').focus()" tabindex="0">Skip to text</li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example 1 (jump somewhere else/nowhere)

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the main [section of content][]. The third [focusable][] element does not fulfill Expectation 1 because it does not moves focus to a [section of content][]. Thus, no [initial segment][] fulfills both Expectations.

```html
<html>
	<ul>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="https://www.w3.org/">Check out the W3C</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example (bad name)

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the main [section of content][]. The third [focusable][] element does not fulfill Expectation 1 because its [accessible name][] does not communicate the intend. Thus, no [initial segment][] fulfills both Expectations.

```html
<html>
	<ul>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="#main">And now for something completely different!</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example (bad name)

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the main [section of content][]. The third [focusable][] element does not fulfill Expectation 1 because its [accessible name][] is empty and thus does not communicate the intend. Thus, no [initial segment][] fulfills both Expectations.

```html
<html>
	<ul>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="#main" aria-label="">Skip to text</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example 8 (covering some section twice)

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the main [section of content][]. The first three or four [focusable][] elements form an [initial segment][] that does not fulfill Expectation because there are two links to the complementary [section of content][]. Thus, there is no [initial segment][] of [focusable][] element fulfilling both Expectations.

```html
<html>
	<ul>
		<li><a href="#search">Skip to search</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="#about">Skip to additional information</a></li>
		<li><a href="#main">Skip to text</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
		<!-- does not include any focusable element -->
	</aside>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Passed Example 7

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the main [section of content][]. The third [focusable][] element is the link to W3C (even though it is located after the link to the main [section of content][] in tree order, it is before it in focus order due to the `tabindex` attribute). It does not fulfill Expectation 1 because it does not moves focus to a [section of content][]. Thus, no [initial segment][] fulfills both Expectations.

```html
<html>
	<ul>
		<li><a href="#search" tabindex="1">Skip to search</a></li>
		<li><a href="#about" tabindex="2">Skip to additional information</a></li>
		<li><a href="#main" tabindex="4">Skip to text</a></li>
		<li><a href="https://www.w3.org/" tabindex="3">Check out the W3C</a></li>
	</ul>
	<form id="search" role="search">Search in text</form>
	<aside id="about">
		<h1>About the book</h1>
		<!-- short description of the book and biography of the author and translator -->
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
[initial segment]: #initial-segment 'Definition of initial segment'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark_roles 'List of landmark roles'
[section of content]: #section-of-content 'Definition of section of content'
[section of repeated content]: #section-of-repeated-content 'Definition of section of repeated content'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
[html web page]: #web-page-html 'Definition of web page (HTML)'

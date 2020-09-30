---
id: e53727
name: First focusable elements are links to sections of content
rule_type: atomic
description: |
  This rule checks that the first focusable elements are links to sections of content on the same page
accessibility_requirements:
  wcag-technique:G124: # Adding links at the top of the page to each area of the content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS styling
  - Language
acknowledgments:
  authors:
    - Christina Adams
    - Jean-Yves Moyen
  assets:
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation 1

Within the test target, there is an [initial segment][] of the [focusable][] elements (in focus order) such that each element in that [initial segment][]:

- is [included in the accessibility tree][]; and
- is [visible][] when [focused][]; and
- has a [semantic role][] of `link`; and
- can be [activated][] by use of keyboard.

## Expectation 2

There exists a [semantic segmentation][] of the test target, such that for each [block of content][] in it, except possibly for the first:

- there is exactly one link from the [initial segment][] found by Expectation 1 which, when [activated][], moves focus [at the start][] of this [block of content][]; and
- that link has an [accessible name][] that communicates that it links to this specific [block of content][].

## Assumptions

- This rule assumes that the description of the link is provided through its [accessible name][].
- This rule assumes that [Technique G124: Adding links at the top of the page to each area of the content][tech g124] requires that the link can be [activated][] by use of keyboard only (in order to be useful for keyboard users).
- This rule assumes that any global dismissible information that only appears once per site has already been acknowledged and is not displayed anymore. Many sites display a cookies policy banner which might be stealing focus until dismissed (usually by viewing and accepting cookies policy). Since that content is _not_ repeated (is it only shown once for the full site), it is not a problem to have it, and it may appear on any page of the site (depending where the user first comes in). If such a banner is taken into account, the rule may fail incorrectly.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

There is no requirement on how many [focusable][] elements are part of the [initial segment][] from Expectation 1, nor any requirement to provide a way to determine (programmatically or not) where that [initial segment][] stops. Technique [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124), and this rule, only require that such a set exists. While Expectation 1 can always be passed by an empty [initial segment][] (i.e. a set of zero [focusable][] elements), Expectation 2 forces that [initial segment][] to have one or more elements (unless the page itself is empty and has zero [blocks of content][block of content])

- [G124: Adding links at the top of the page to each area of the content][tech g124]

Each test case contains a link to the second chapter of the book so that each `aside` element is a [block of repeated content][]. Unless specified, in each of the test cases the [semantic segmentation][] found by Expectation 2 has four [blocks][block of content]: the `nav` element, both `aside` elements, and the `main` element (which is also the [main block of content][]).

## Test Cases

### Passed

#### Passed Example 1

The [initial segment][] composed of the first four [focusable][] elements in this [document][] fulfills both expectations.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="local-navigation">
			<a href="#local-navigation">Skip to local navigation</a>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#main">Skip to text</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 2

The [initial segment][] composed of the first three [focusable][] elements in this [document][] fulfills both expectations. There is no link in it to go to the `nav` [block of content][], but this is not a problem since it is the first [block of content][] in the [semantic segmentation][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#main">Skip to text</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 3

The [initial segment][] composed of the first four [focusable][] elements in this [document][] fulfills both expectations. In this case, the four [blocks][block of content] of the [semantic segmentation][] are the `nav` element, the `aside` element, and both parts of the text (`h1` and `p` elements). Note that the [main block of content][] is split into several [blocks][block of content] in this [semantic segmentation][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="local-navigation">
			<a href="#local-navigation">Skip to local navigation</a>
			<a href="#part1">Skip to first part</a>
			<a href="#part2">Skip to second part</a>
			<a href="#bio-translator">Skip to translator's biography</a>
		</nav>

		<main>
			<h1 id="part1">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>

			<h1 id="part2">The Sworn Brothers Render Good Services in Fighting Against the Rebels</h1>
			<p>
				Several days later, a messenger came with the news that a rebel army of 50,000 men was marching toward the city.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
	</body>
</html>
```

#### Passed Example 4

The [initial segment][] composed of the first four [focusable][] elements in this [document][] fulfills both expectations. The links do not need to be in the same order as the [blocks of content][block of content].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="local-navigation">
			<a href="#about-book">Skip to information about the book</a>
			<a href="#local-navigation">Skip to local navigation</a>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#main">Skip to text</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 5

The links in the [initial segment][] (composed of the first three focusable elements) are [visible][] when [focused][].

```html
<html lang="en">
	<head>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a class="visible-on-focus" href="#bio-translator">Skip to translator's biography</a>
			<a class="visible-on-focus" href="#about-book">Skip to information about the book</a>
			<a class="visible-on-focus" href="#main">Skip to text</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 6

The first three [focusable][] elements have a [semantic role][] of `link` and can be [activated][] by keyboard.

```html
<html lang="en">
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/click-on-enter.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body onload="ClickOnEnter(['link-translator', 'link-book', 'link-main'])">
		<nav>
			<span role="link" onclick="location.href='#bio-translator';" tabindex="0" id="link-translator"
				>Skip to translator's biography</span
			>
			<span role="link" onclick="location.href='#about-book';" tabindex="0" id="link-book"
				>Skip to information about the book</span
			>
			<span role="link" onclick="location.href='#main';" tabindex="0" id="link-main">Skip to text</span>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 7

The links in the [initial segment][] (composed of the first three focusable elements) have an [accessible name][] provided by their `aria-label` attribute.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator" aria-label="Skip to translator's biography">👩</a>
			<a href="#about-book" aria-label="Skip to information about the book">❓</a>
			<a href="#main" aria-label="Skip to text">📖</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 8

Even though they are after the first [block of content][], the four links are still the first [focusable][] elements and thus are an [initial segment][] of [focusable][] elements fulfilling the expectations.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>

		<nav id="local-navigation">
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#local-navigation">Skip to local navigation</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#main">Skip to text</a>
		</nav>

		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 9

The [initial segment][] composed of the first three [focusable][] elements in this [document][] fulfills both expectations. The fourth [focusable][] element is not part of the [initial segment][] even though it is styled similarly.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#main">Skip to text</a>
			<a href="https://www.w3.org/">Check out the W3C</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 10

The [initial segment][] composed of the first three [focusable][] elements in this [document][] fulfills both expectations. The fourth [focusable][] element can be left out of the [initial segment][] even though it moves focus to a [block of content][] inside the [semantic segmentation][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#main">Skip to text</a>
			<a href="#main">Skip to text</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 11

The first three [focusable][] elements are the links to the various [blocks of content][block of content]. Even through the link to W3C is before them in tree order, it is the fourth [focusable][] element due to the `tabindex` attributes. Therefore, the first three [focusable][] elements form an [initial segment][] that fulfills both Expectations.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="https://www.w3.org/" tabindex="4">Check out the W3C</a>
			<a href="#bio-translator" tabindex="1">Skip to translator's biography</a>
			<a href="#about-book" tabindex="2">Skip to information about the book</a>
			<a href="#main" tabindex="3">Skip to text</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 12

The [initial segment][] composed of the first three [focusable][] elements in this [document][] fulfills both expectations. Even though the links are spread around the page, they are still an [initial segment][] of the [focusable][] elements. In this case, there are only three [blocks of content][block of content] in the [semantic segmentation][]: both `aside` elements and the `main` element.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="bio-translator">
			<a href="#bio-translator">Skip to translator's biography</a>
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<a href="#about-book">Skip to information about the book</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<a href="#main">Skip to text</a>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

### Failed

#### Failed Example 1

This [HTML web page][] has no link to skip to the various [blocks of content][block of content]. Even if we consider a [semantic segmentation][] with only two [blocks][block of content] (both `aside` elements in a single block), there is still no link to skip to the second one.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 2

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the [main block of content][]. A [segmentation][] with one block for the `nav` element, one for the first `aside` element, and one for both the second `aside` and the `main` elements is not a [semantic segmentation][] since the third block contain nodes from both inside and outside the [main block of content][] (the `main` element).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 3

The first, second and fourth links form a set that fulfills Expectation 2 and most of Expectation 1. However, the presence of the third link means that this set is not an [initial segment][]. The first two links form an [initial segment][] fulfilling Expectation 1, but not Expectation 2 because there is no link to the [main block of content][].
There is no [initial segment][] fulfilling both expectations.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="https://www.w3.org/">Check out the W3C</a>
			<a href="#main">Skip to text</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 4

The first three [focusable][] elements in this [document][] form an [initial segment][] that fulfills most conditions but none of these elements are [included in the accessibility tree][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator" aria-hidden="true">Skip to translator's biography</a>
			<a href="#about-book" aria-hidden="true">Skip to information about the book</a>
			<a href="#main" aria-hidden="true">Skip to text</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 5

The first [focusable][] element form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the [main block of content][]. The first three [focusable][] elements form an [initial segment][] that fulfills Expectation 2 but not Expectation 1 because the second [focusable][] element is not [included in the accessibility tree][]. Thus, no [initial segment][] fulfills both Expectations.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book" aria-hidden="true">Skip to information about the book</a>
			<a href="#main">Skip to text</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 6

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the [main block of content][]. The third [focusable][] element does not fulfill Expectation 1 because it is not [visible][], even when [focused][]. Thus, no [initial segment][] fulfills both Expectations.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#main" style="display: none">Skip to text</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 7

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the [main block of content][]. The third [focusable][] element does not fulfill Expectation 1 because it does not have a [semantic role][] of `link`. Thus, no [initial segment][] fulfills both Expectations.

```html
<html lang="en">
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/click-on-enter.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body onload="ClickOnEnter('link-main')">
		<nav>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<span id="link-main" onclick="document.getElementById('main').focus()" tabindex="0">Skip to text</span>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 8

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the [main block of content][]. The third [focusable][] element does not fulfill Expectation 1 because it cannot be [activated][] by keyboard. Thus, no [initial segment][] fulfills both Expectations.

```html
<html lang="en">
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/click-on-enter.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body onload="ClickOnEnter(['link-bio', 'link-about'])">
		<nav>
			<span role="link" onclick="location.href='#bio-translator';" tabindex="0" id="link-bio"
				>Skip to translator's biography</span
			>
			<span role="link" onclick="location.href='#about-book';" tabindex="0" id="link-about"
				>Skip to information about the book</span
			>
			<span role="link" onclick="location.href='#main';" tabindex="0" id="link-main">Skip to text</span>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 9

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the [main block of content][]. The third [focusable][] element does not fulfill Expectation 1 because its [accessible name][] does not communicate the intent. Thus, no [initial segment][] fulfills both Expectations.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#main">And now for something completely different!</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 10

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the [main block of content][]. The third [focusable][] element does not fulfill Expectation 1 because its [accessible name][] is empty and thus does not communicate the intend. Thus, no [initial segment][] fulfills both Expectations.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#main" aria-label="">Skip to text</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 11

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the [main block of content][]. The first three or four [focusable][] elements form an [initial segment][] that does not fulfill Expectation 2 because there are two links to the same [block of content][]. Thus, there is no [initial segment][] of [focusable][] element fulfilling both Expectations.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#main">Skip to text</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 12

The first two [focusable][] elements form an [initial segment][] that fulfills Expectation 1 but not Expectation 2 because there is no link to the [main block of content][]. The third [focusable][] element is the link to W3C (even though it is located after the link to the [main block of content][] in tree order, it is before it in focus order due to the `tabindex` attribute). It does not fulfill Expectation 1 because it does not moves focus to a [block of content][]. Thus, no [initial segment][] fulfills both Expectations.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#bio-translator" tabindex="1">Skip to translator's biography</a>
			<a href="#about-book" tabindex="2">Skip to information about the book</a>
			<a href="#main" tabindex="4">Skip to text</a>
			<a href="https://www.w3.org/" tabindex="3">Check out the W3C</a>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
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
[activated]: https://html.spec.whatwg.org/#activation 'Definition of Activation'
[at the start]: #start-end-content 'Definition of Start and End of Content'
[block of content]: #block-of-content 'Definition of Block of Content'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of Document'
[focusable]: #focusable 'Definition of Focusable'
[focused]: https://html.spec.whatwg.org/#focused 'HTML definition of Focused'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[initial segment]: #initial-segment 'Definition of Initial Segment'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[tech g124]: https://www.w3.org/WAI/WCAG21/Techniques/general/G124 'Technique G124: Adding Links at the Top of the Page to each Area of the Content'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[semantic segmentation]: #semantic-segmentation 'Definition of Semantic Segmentation'
[visible]: #visible 'Definition of Visible'

---
id: 8a213c
name: First focusable element is link to main content
rule_type: atomic
description: |
  This rule checks that the first focusable element is a link to the main content of the page
accessibility_requirements:
  wcag-technique:G1: # Adding a link at the top of each page that goes directly to the main content area
    forConformance: false
    failed: not satisfied
    passed: satisfied
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

There is at least one [focusable][] element within the test target.

## Expectation 2

The first [focusable][] element within the test target:

- is [included in the accessibility tree][]; and
- is [visible][] when [focused][]; and
- has a [semantic role][] of `link`; and
- can be [activated][] using the keyboard; and
- when [activated][], moves focus [to the start][at the start] of the [main block of content][] of the [document][]; and
- has an [accessible name][] that communicates that it links to the [main block of content][].

## Assumptions

- This rule assumes that there is exactly one [main block of content][] inside each [HTML web page][].
- This rule assumes that the description of the link is provided through its [accessible name][].
- This rule assumes that [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] requires that the link can be [activated][] by use of keyboard only (in order to be useful for keyboard users).
- This rule assumes that any global dismissible information that only appears once per site has already been acknowledged and is not displayed anymore. Many sites display a cookies policy banner which might be stealing focus until dismissed (usually by viewing and accepting cookies policy). Since that content is _not_ repeated (is it only shown once for the full site), it is not a problem to have it, and it may appear on any page of the site (depending where the user first comes in). If such a banner is taken into account, the rule may fail incorrectly.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G1: Adding a link at the top of each page that goes directly to the main content area][tech g1]

Unless specified otherwise, the [main block of content][] of each document is defined by the `main` element.

## Test Cases

### Passed

#### Passed Example 1

The link to skip the complementary [section of repeated content][] is [visible][], is [included in the accessibility tree][], and when [activated][] moves the focus to the [main block of content][]. Its [accessible name][] (coming from content) communicates that it skips to the main content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#main">Skip to main content</a>
		</nav>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
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

The link to skip the complementary [section of repeated content][] is [included in the accessibility tree][], and is [visible][] when [focused][].

```html
<html lang="en">
	<head>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav class="visible-on-focus">
			<a href="#main">Skip to main content</a>
		</nav>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
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

The element to skip the complementary [section of repeated content][] is [visible][], has a [semantic role][] of `link` and can be [activated][] by keyboard only.

```html
<html lang="en">
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/click-on-enter.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body onload="ClickOnEnter('skip-link')">
		<nav>
			<div role="link" onclick="location.href='#main';" tabindex="1" id="skip-link">Skip to main content</div>
		</nav>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
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

The link to skip the complementary [section of repeated content][] has an [accessible name][] that communicates that it links to the [main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#main" aria-label="Skip to main content">📖</a>
		</nav>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
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

Even though it is located after it in tree order, the link to skip the complementary [section of repeated content][] is still the first [focusable][] element within the page.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<nav>
			<a href="#main">Skip to main content</a>
		</nav>
		<main id="main">
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

The first [focusable][] element within this page is the link to the [main block of content][]. The link to W3C is located before in tree order but after in focus order due to the `tabindex` attributes.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="https://www.w3.org/" tabindex="2">Check out the W3C</a>
			<a href="#main" tabindex="1">Skip to main content</a>
		</nav>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

jumps to in previous section

jumps to after a hr

### Failed

#### Failed Example 1

There is no link to skip the complementary [section of repeated content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
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

The link to skip the complementary [section of repeated content][] is not the first [focusable][] element within the page.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="https://www.w3.org/">Check out the W3C</a>
		<nav>
			<a href="#main">Skip to main content</a>
		</nav>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
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

The link to skip the complementary [section of repeated content][] is not [included in the accessibility tree][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#main" aria-hidden="true">Skip to main content</a>
		</nav>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
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

The link to skip the complementary [section of repeated content][] is not [visible][], even when focused.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#main" style="position: absolute; top: -999px">Skip to main content</a>
		</nav>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
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

The element with a click event to skip the complementary [section of repeated content][] does not have a [semantic role][] of `link`.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<span onclick="document.getElementById('main').focus()">Skip to main content</span>
		</nav>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Failed Example 6

The element to skip the complementary [section of repeated content][] is [visible][], cannot be [activated][] by keyboard only.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<div role="link" onclick="location.href='#main';" tabindex="1" id="skip-link">Skip to main content</div>
		</nav>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Failed Example 7

The link to skip the complementary [section of repeated content][] does not reference a valid `id` attribute and thus when [activated][] will not move focus to the [main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#invalid-id">Skip to main content</a>
		</nav>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Failed Example 8

The link to skip the complementary [section of repeated content][] does not have an [accessible name][] that communicates its intent.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#main">Click me if you dare!</a>
		</nav>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Failed Example 9

The first [focusable][] element within this page is the link to W3C. The link to the [main block of content][] is located before in tree order but after in focus order due to the `tabindex` attributes.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#main" tabindex="2">Skip to main content</a>
			<a href="https://www.w3.org/" tabindex="1">Check out the W3C</a>
		</nav>
		<aside id="about-book">
			<h1>About the book</h1>
			The Romance of the Three Kingdoms is a 14th century historical novel.
		</aside>
		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

jumps too early.

jumps too late.

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
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[focusable]: #focusable 'Definition of Focusable'
[focused]: https://html.spec.whatwg.org/#focused 'HTML definition of Focused'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[section of content]: #section-of-content 'Definition of Section of Content'
[section of repeated content]: #section-of-repeated-content 'Definition of Section of Repeated Content'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[tech g1]: https://www.w3.org/WAI/WCAG21/Techniques/general/G1 'Technique G1: Adding a Link at the Top of each Page that Goes Directly to the Main Content Area'
[visible]: #visible 'Definition of Visible'

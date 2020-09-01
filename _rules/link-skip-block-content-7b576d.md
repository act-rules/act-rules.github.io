---
id: 7b576d
name: Link for skipping block of content
rule_type: atomic
description: |
  This rule checks that blocks of content can be skipped by a link at their beginning
accessibility_requirements:
  wcag-technique:G123: # Adding a link at the beginning of a block of repeated content to go to the end of the block
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
    - Image from a Ming Dynasty edition of the Romance of the Three Kingdoms, original kept in the library holdings of Peking University.
---

## Applicability

This rule applies to any [HTML web page][].

## Expectations

There exists a [semantic segmentation][] of the test target such that for each [block][] in this [segmentation] which is before the [main block of content][] and contains at least one [block of repeated content][], either the last [focusable][] element which is before any [focusable][] element inside this [block][], or the first [focusable][] element which is inside this [block][]:

- has a [semantic role][] of `link`; and
- is [included in the accessibility tree][]; and
- is [visible][] when [focused][]; and
- can be [activated][] by use of keyboard; and
- has an [accessible name][] that communicates that it skips this [block][]; and
- when [activated][], moves keyboard focus to a node which is [at the end][] of this [block][].

**Note:** "last" and "first" [focusable][] elements are to be taken in focus order, not in [tree order][].

## Assumptions

- This rule assumes that there is exactly one [main block of content][] inside each [HTML web page][].
- This rule assumes that that [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123] requires the that the link can be activated by use of keyboard only (in order to be useful for keyboard users).
- This rule assumes that the visual order of elements is close to their order in the [flat tree][]. If this is not the case, [blocks of content][block of content], and therefore [blocks of repeated content][block of repeated content] cannot be determined correctly.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123]
- [CSS Scoping (work in progress)](https://drafts.csswg.org/css-scoping/)

In the test cases, the link to the second Chapter is added in order to turn the `<aside id="about-book">` element into a [block of repeated content][]. Unless otherwise specified, the [semantic segmentation][] fulfilling the expectation has three [blocks][block]: one for the `aside` element, one for the `main` element, and one for the other content (if any).

## Test Cases

### Passed

#### Passed Example 1

In this [document][], the complementary [block of repeated content][] starts with a `link` that jumps to after it. The first [block][] of the [segmentation][] (the first link) cannot be skipped, but it does not contain a [block of repeated content][], so this is not a problem. Note that even if the target of the link is not itself a [focusable][] element, keyboard focus is still moving there and sequential focus navigation will continue from that point after activating the link.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
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

In this [document][], the link to skip the complementary [block of repeated content][] is the first [focusable][] element inside it (in focus order), even if it is not the first element in tree order.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<h1>About the book</h1>
			<a href="#main">Skip additional information</a>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
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

In this [document][], the link to skip the complementary [block of repeated content][] is located before it and is the last [focusable][] element before it.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<a href="#main">Skip additional information</a>
		<div>Chapter 1</div>
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
		</main>
	</body>
</html>
```

#### Passed Example 4

In this [document][], the link to skip the complementary [block of repeated content][] is not normally [visible][] but becomes so when [focused][].

```html
<html lang="en">
	<head>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#main" class="visible-on-focus">Skip additional information</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
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

In this [document][], the `div` element just before the complementary [block of repeated content][] has a [semantic role][] of `link`, can be [focused][] and activated by keyboard only, and skips the [block of repeated content][].

```html
<html lang="en">
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/click-on-enter.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body onload="ClickOnEnter('skip-link')">
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html" tabindex="1">Read Chapter 2</a>

		<div role="link" onclick="location.href='#main';" tabindex="2" id="skip-link">Skip additional information</div>
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
		</main>
	</body>
</html>
```

#### Passed Example 6

In this [document][], the link to skip the complementary [block of repeated content][] is the first [focusable][] element inside it (in focus order).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html" tabindex="1">Read Chapter 2</a>

		<aside id="about-book">
			<h1 tabindex="3">About the book</h1>
			<a href="#main" tabindex="2">Skip additional information</a>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
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

#### Passed Example 7

In this [document][], the link to skip the complementary [block of repeated content][] is located before it and is the last [focusable][] element before it.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html" tabindex="1">Read Chapter 2</a>

		<a href="#main" tabindex="3">Skip additional information</a>
		<h1 tabindex="2">Chapter 1</h1>
		<aside id="about-book">
			<h2>About the book</h2>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h2>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h2>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 8

In this [document][], the link at the start of the complementary [block of repeated content][] jumps [at its end][at the end].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#end-aside">Skip additional information</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
			<div id="end-aside" />
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

#### Passed Example 9

In this [document][], the link to skip the complementary [block of repeated content][] jumps [at its end][at the end] (at the first [perceivable content][] after it, because the `hr` element is not [palpable content][], hence not [perceivable content][]).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main>
			<hr />
			<h1 id="main">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 10

In this [document][], the link to skip the complementary [block of repeated content][] jumps [at its end][at the end] (at the first [perceivable content][] after it, because the `img` element has a [semantic role][] of `presentation`, hence is not [perceivable content][]).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main>
			<img src="../test-assets/bypass-blocks-cf77f2/peach-garden-oath.jpg" role="presentation" alt="" />
			<h1 id="main">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 11

In this [document][], the link to skip the complementary [block of repeated content][] jumps [at its end][at the end] (at the first [perceivable content][] after it, because the `div` element is neither [visible][] nor [included in the accessibility tree][], hence it is not [perceivable content][]).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main>
			<div hidden>This is the start of Chapter 1</div>
			<h1 id="main">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 12

This [document][] has no [block of repeated content][] because there is no other page linked from it.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main>
			<h1 id="main">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
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

In this [document][], there is no link to skip the complementary [block of repeated content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

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
		</main>
	</body>
</html>
```

#### Failed Example 2

In this [document][], the link to skip the complementary [block of repeated content][] is not the last [focusable][] element before it, in focus order.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html" tabindex="1">Read Chapter 2</a>

		<a href="#main" tabindex="2">Skip additional information</a>
		<h1 tabindex="3">Chapter 1</h1>
		<aside id="about-book">
			<h2>About the book</h2>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h2>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h2>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Failed Example 3

In this [document][], the link to skip the complementary [block of repeated content][] is not the first [focusable][] element inside it (in focus order).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html" tabindex="1">Read Chapter 2</a>

		<aside id="about-book">
			<h1 tabindex="2">About the book</h1>
			<a href="#main" tabindex="3">Skip additional information</a>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
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

In this [document][], the element to skip the complementary [block of repeated content][] does not have a role of `link`.

```html
<html lang="en">
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/click-on-enter.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body onload="ClickOnEnter('skip-link')">
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html" tabindex="1">Read Chapter 2</a>

		<div onclick="location.href='#main';" tabindex="2" id="skip-link">Skip additional information</div>
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
		</main>
	</body>
</html>
```

#### Failed Example 5

In this [document][], the link to skip the complementary [block of repeated content][] is not [included in the accessibility tree][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#main" aria-hidden="true">Skip additional information</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
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

In this [document][], the link to skip the complementary [block of repeated content][] is not [visible][] even when [focused][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#main" style="position: absolute; top: -999px">Skip additional information</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
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

In this [document][], the element with a [semantic role][] of `link` which skips the complementary [block of repeated content][] cannot be activated by keyboard only.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html" tabindex="1">Read Chapter 2</a>

		<div role="link" onclick="location.href='#main';" tabindex="2">Skip additional information</div>
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
		</main>
	</body>
</html>
```

#### Failed Example 8

In this [document][], the link at the start of the first complementary [block of repeated content][] skips more than just this [block of repeated content][] (it also skips the second complementary [block of repeated content][]).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>
		<aside id="bio-translator">
			<h1>About the translator</h1>
			Yu Sumei is a professor of English at East China Normal University.
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

In this [document][], there is a link to skip the first complementary [block of repeated content][], but not the second one.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#bio-translator">Skip additional information</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>
		<aside id="bio-translator">
			<h1>About the translator</h1>
			Yu Sumei is a professor of English at East China Normal University.
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

#### Failed Example 10

In this [document][], the link to skip the complementary [block of repeated content][] has non-descriptive name.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#main">Read text</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity suchceeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Failed Example 11

In this [document][], the link to skip the complementary [block of repeated content][] jumps before the last [perceivable content][] in it.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#end-aside">Skip additional information</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
			<p id="end-aside">The text presented here is from a 2014 translation</p>
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

#### Failed Example 12

In this [document][], the link to skip the complementary [block of repeated content][] jumps after the first [perceivable content][] in the next section (the image).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main>
			<img
				src="../test-assets/bypass-blocks-cf77f2/peach-garden-oath.jpg"
				alt="Ming dynasty illustration of the Peach Garden Oath"
			/>
			<h1 id="main">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
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
[activated]: https://html.spec.whatwg.org/#activation 'HTML definition of Activation'
[at the end]: #start-end-content 'Definition of At the End'
[block]: #block-of-content 'Definition of Block of Content'
[block of content]: #block-of-content 'Definition of Block of Content'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[focused]: https://html.spec.whatwg.org/#focused 'HTML definition of Focused'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[palpable content]: https://html.spec.whatwg.org/multipage/dom.html#palpable-content 'HTML specification of Palpable Content'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
[segmentation]: #segmentation 'Definition of Segmentation'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[semantic segmentation]: #semantic-segmentation 'Definition of Semantic Segmentation'
[tech g123]: (https://www.w3.org/WAI/WCAG21/Techniques/general/G123) 'Technique G123: Adding a Link at the Beginning of a Block of Repeated Content to Go to the End of the Block'
[tree order]: https://dom.spec.whatwg.org/#concept-tree-order 'DOM specification of Tree Order'
[visible]: #visible 'Definition of Visible'

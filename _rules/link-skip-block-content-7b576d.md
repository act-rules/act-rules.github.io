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

For each [section of repeated content][] within the test target, either the last [focusable][] element which is before any [focusable][] element inside this [section of repeated content][], or the first [focusable][] element which is inside this [section of repeated content][]:

- has a [semantic role][] of `link`; and
- is [included in the accessibility tree][]; and
- is [visible][] when [focused][]; and
- can be [activated][] by use of keyboard; and
- has an [accessible name][] that communicates that it skips this [section of repeated content][]; and
- when [activated][], moves keyboard focus to a node which is [at the end][] of this [section of repeated content][].

**Note:** "last" and "first" [focusable][] elements are to be taken in focus order, not in [tree order][].

## Assumptions

- This rule assumes that [sections of repeated content][section of repeated content] have already been identified within the test target, for example by comparison with other test targets within the same website, or any other means.
- This rule assumes that that [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123] requires the that the link can be activated by use of keyboard only (in order to be useful for keyboard users).
- This rule assumes that elements with a [semantic role][] of `none` or `presentation` are [pure decoration][] and that elements which are [pure decoration][] either have no [semantic role][] or a [semantic role][] of `none` or `presentation`. Otherwise, [perceivable content][] might be wrongly detected.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123]
- [CSS Scoping (work in progress)](https://drafts.csswg.org/css-scoping/)

## Test Cases

**Note:** Unless specified otherwise, the [sections of content][section of content] of each document are defined by the [landmarks][landmark] (`aside` and `main` elements), and the complementary [section of content][] (`aside` element) is a [section of repeated content][] which does not include any [focusable][] element not shown explicitly.

### Passed

#### Passed Example 1

The complementary [section of repeated content][] starts with a `link` that jumps to after it. Note that even if the target of the link is not itself a [focusable][] element, keyboard focus is still moving there and sequential focus navigation will continue from that point after activating the link.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The link to skip the complementary [section of repeated content][] is the first [focusable][] element inside it (in focus order), even if it is not the first element in tree order.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<h1>About the book</h1>
			<a href="#main">Skip additional information</a>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The link to skip the complementary [section of repeated content][] is located before it and is the last [focusable][] element before it.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip additional information</a>
		<div>Chapter 1</div>
		<aside>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The link to skip the complementary [section of repeated content][] is not normally [visible][] but becomes so when [focused][].

```html
<html lang="en">
	<head>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<a href="#main" class="visible-on-focus">Skip additional information</a>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The `div` element just before the complementary [section of repeated content][] has a [semantic role][] of `link`, can be [focused][] and activated by keyboard only, and skips the [section of repeated content][].

```html
<html lang="en">
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/click-on-enter.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body onload="ClickOnEnter('skip-link')">
		<div role="link" onclick="location.href='#main';" tabindex="1" id="skip-link">Skip additional information</div>
		<aside>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The link to skip the complementary [section of repeated content][] is the first [focusable][] element inside it (in focus order).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<h1 tabindex="2">About the book</h1>
			<a href="#main" tabindex="1">Skip additional information</a>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The link to skip the complementary [section of repeated content][] is located before it and is the last [focusable][] element before it.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" tabindex="2">Skip additional information</a>
		<div tabindex="1">Chapter 1</div>
		<aside>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

#### Passed Example 8

The link at the start of the complementary [section of repeated content][] jumps [at its end][at the end].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<a href="#end-aside">Skip additional information</a>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The link to skip the complementary [section of repeated content][] jumps [at its end][at the end] (at the first [perceivable content][] after it, because the `hr` element is not [palpable content][], hence not [perceivable content][]).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The link to skip the complementary [section of repeated content][] jumps [at its end][at the end] (at the first [perceivable content][] after it, because the `img` element has a [semantic role][] of `presentation`, hence is not [perceivable content][]).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The link to skip the complementary [section of repeated content][] jumps [at its end][at the end] (at the first [perceivable content][] after it, because the `div` element is neither [visible][] nor [included in the accessibility tree][], hence it is not [perceivable content][]).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

### Failed

#### Failed Example 1

There is no link to skip the complementary [section of repeated content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The link to skip the complementary [section of repeated content][] is not the last [focusable][] element before it, in focus order.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" tabindex="1">Skip additional information</a>
		<div tabindex="2">Chapter 1</div>
		<aside>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The link to skip the complementary [section of repeated content][] is not the first [focusable][] element inside it (in focus order).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<h1 tabindex="1">About the book</h1>
			<a href="#main" tabindex="2">Skip additional information</a>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The element to skip the complementary [section of repeated content][] does not have a role of `link`.

```html
<html lang="en">
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/click-on-enter.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body onload="ClickOnEnter('skip-link')">
		<div onclick="location.href='#main';" tabindex="1" id="skip-link">Skip additional information</div>
		<aside>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The link to skip the complementary [section of repeated content][] is not [included in the accessibility tree][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<a href="#main" aria-hidden="true">Skip additional information</a>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The link to skip the complementary [section of repeated content][] is not [visible][] even when [focused][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<a href="#main" style="position: absolute; top: -999px">Skip additional information</a>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The element with a [semantic role][] of `link` which skips the complementary [section of repeated content][] cannot be activated by keyboard only.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<div role="link" onclick="location.href='#main';" tabindex="1">Skip additional information</div>
		<aside>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

The link at the start of the complementary [section of repeated content][] skips more than just this [section of repeated content][] (it also skips the navigational [section of repeated content][]

**Note:** In this example, [sections of content][section of content] are identified by the [landmarks][landmark]. Both the complementary (`aside` element) and navigational (`nav` element) ones are [sections of repeated content][section of repeated content].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
		</aside>
		<nav>
			<h1>Contents</h1>
			<!-- List of links to each chapter -->
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

#### Failed Example 9

The link to skip the complementary [section of repeated content][] has non-descriptive name.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<a href="#main">Read text</a>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

#### Failed Example 10

The link to skip the complementary [section of repeated content][] jumps before the last [perceivable content][] in it.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<a href="#end-aside">Skip additional information</a>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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

#### Failed Example 11

The link to skip the complementary [section of repeated content][] jumps after the first [perceivable content][] in the next section (the image).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside>
			<a href="#main">Skip additional information</a>
			<h1>About the book</h1>
			<!-- description of the book and biography of the authors, repeated on each page -->
			<!-- does not include any focusable element -->
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
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[focusable]: #focusable 'Definition of Focusable'
[focused]: https://html.spec.whatwg.org/#focused 'HTML definition of Focused'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark_roles 'List of Landmark Roles'
[palpable content]: https://html.spec.whatwg.org/multipage/dom.html#palpable-content 'HTML specification of Palpable Content'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[tech g123]: (https://www.w3.org/WAI/WCAG21/Techniques/general/G123) 'Technique G123: Adding a Link at the Beginning of a Block of Repeated Content to Go to the End of the Block'
[section of content]: #section-of-content 'Definition of Section of Content'
[section of repeated content]: #section-of-repeated-content 'Definition of Section of Repeated Content'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[tree order]: https://dom.spec.whatwg.org/#concept-tree-order 'DOM specification of Tree Order'
[visible]: #visible 'Definition of Visible'

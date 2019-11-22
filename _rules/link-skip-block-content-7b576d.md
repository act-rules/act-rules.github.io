---
id: 7b576d
name: Link for skipping block of content
rule_type: atomic
description: |
  This rule checks that blocks of content can be skipped by a link at their beginning
accessibility_requirements:
  wcag-technique:G123: # Adding a link at the beginning of a block of repeated content to go to the end of the block
    forConformance: true
    failed: not satisfied
    passed: further testing needed
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

## Expectations

For each [section of repeated content][] within the test target, either the last [focusable][] element which is before any [focusable][] element inside this [section of repeated content][], or the first [focusable][] element which is inside this [section of repeated content][]:

- has a [semantic role][] of `link`; and
- is [included in the accessibility tree][]; and
- is [visible][] when [focused][]; and
- can be activated by use of keyboard only; and
- when activated, moves keyboard focus to the first element in the [flat tree][] after this [section of content][]; and
- has an [accessible name][] that communicates that it skips this [section of content][].

**Note**: "last" and "first" [focusable][] elements are to be taken in focus order, not in tree order.

## Assumptions

- This rule assumes that [sections of repeated content][section of repeated content] have already been identified within the test target, for example by comparison with other test targets within the same website, or any other means.
- This rule assumes that that [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123] requires the that the link can be activated by use of keyboard only.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123]
- [CSS Scoping (work in progress)](https://drafts.csswg.org/css-scoping/)

## Test Cases

**Note**: The text of the examples is from the translation of the first Chapter of _The Three Kingdoms_ by Yu Sumei (Tuttle publishing, May 2014).

**Note**: Unless specified otherwise, the [sections of content][section of content] of each document are defined by the [landmarks][landmark] (`aside` and `main` elements), and the complementary [section of content][] (`aside` element`) is a [section of repeated content][] which does not include any [focusable][] element not shown explicitly.

### Passed

#### Passed Example 1

The complementary [section of repeated content][] starts with a `link` that jumps to after it. Note that even if the target of the link is not itself a [focusable][] element, keyboard focus is still moving there and sequential focus navigation will continue from that point after activating the link.

```html
<html lang="en">
	<aside>
		<a href="#main">Skip additional information</a>
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

The link to skip the complementary [section of repeated content][] is the first [focusable][] element inside it (in focus order), even if it is not the first element in tree order.

```html
<html lang="en">
	<aside>
		<h1>About the book</h1>
		<a href="#main">Skip additional information</a>
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

The link to skip the complementary [section of repeated content][] is located before it and is the last [focusable][] element before it.

```html
<html lang="en">
	<a href="#main">Skip additional information</a>
	<div>Chapter 1</div>
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

The link to skip the complementary [section of repeated content][] is not normally [visible][] but becomes so when [focused][].

```html
<html lang="en">
	<head>
		<style>
			.skip-link {
				position: absolute;
				top: -999px;
			}

			.skip-link:focus {
				position: relative;
				top: 0;
			}
		</style>
	</head>
	<body>
		<aside>
			<a href="#main" class="skip-link">Skip additional information</a>
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

#### Passed Example 5

The `div` element just before the complementary [section of repeated content][] has a [semantic role][] of `link`, can be [focused][] and activated by keyboard only, and skips the [section of repeated content][].

```html
<html lang="en">
	<div role="link" onclick="location.href='#main';" tabindex="1" id="skip-link">Skip additional information</div>
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
	<script>
		var link = document.getElementById('skip-link')

		link.addEventListener('keyup', function(event) {
			if (event.key === 'Enter') {
				event.preventDefault()
				link.click()
			}
		})
	</script>
</html>
```

#### Passed Example 6

The link to skip the complementary [section of repeated content][] is the first [focusable][] element inside it (in focus order).

```html
<html lang="en">
	<aside>
		<h1 tabindex="2">About the book</h1>
		<a href="#main" tabindex="1">Skip additional information</a>
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

#### Passed Example 7

The link to skip the complementary [section of repeated content][] is located before it and is the last [focusable][] element before it.

```html
<html lang="en">
	<a href="#main" tabindex="2">Skip additional information</a>
	<div tabindex="1">Chapter 1</div>
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

### Failed

#### Failed Example 1

There is no link to skip the complementary [section of repeated content][].

```html
<html lang="en">
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

The link to skip the complementary [section of repeated content][] is not the last [focusable][] element before it, in focus order.

```html
<html lang="en">
	<a href="#main" tabindex="1">Skip additional information</a>
	<div tabindex="2">Chapter 1</div>
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

The link to skip the complementary [section of repeated content][] is not the first [focusable][] element inside it (in focus order).

```html
<html lang="en">
	<aside>
		<h1 tabindex="1">About the book</h1>
		<a href="#main" tabindex="2">Skip additional information</a>
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

The element to skip the complementary [section of repeated content][] does not have a role of `link`.

```html
<html lang="en">
	<div onclick="location.href='#main';" tabindex="1" id="skip-link">Skip additional information</div>
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
	<script>
		var link = document.getElementById('skip-link')

		link.addEventListener('keyup', function(event) {
			if (event.key === 'Enter') {
				event.preventDefault()
				link.click()
			}
		})
	</script>
</html>
```

#### Failed Example 5

The link to skip the complementary [section of repeated content][] is not [included in the accessibility tree][].

```html
<html lang="en">
	<aside>
		<a href="#main" aria-hidden="true">Skip additional information</a>
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

The link to skip the complementary [section of repeated content][] is not [visible][] even when [focused][].

```html
<html lang="en">
	<aside>
		<a href="#main" style="position: absolute; top: -999px">Skip additional information</a>
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

The element with a [semantic role][] of `link` which skips the complementary [section of repeated content][] cannot be activated by keyboard only.

```html
<html lang="en">
	<div role="link" onclick="location.href='#main';" tabindex="1">Skip additional information</div>
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

#### Failed Example 8

The link at the start of the complementary [section of repeated content][] skips more than just this [section of repeated content][] (it also skips the navigational [section of repeated content][]

**Note**: In this example, [sections of content][section of content] are identified by the [landmarks][landmark]. Both the complementary (`aside` element) and navigational (`nav` element) ones are [sections of repeated content][section of repeated content].

```html
<html lang="en">
	<aside>
		<a href="#main">Skip additional information</a>
		<h1>About the book</h1>
		<!-- short description of the book and biography of the authors, repeated on each page -->
		<!-- does not include any focusable element -->
	</aside>
	<nav>
		<h1>Contents</h1>
		<!-- List of links to each chapter -->
	</nav>
	<main id="main">
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example 9

The link to skip the complementary [section of repeated content][] has non-descriptive name.

```html
<html lang="en">
	<aside>
		<a href="#main">Read text</a>
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

The [document element][] of this [document][] is not an `html` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[document element]: https://dom.spec.whatwg.org/#document-element 'Definition of document element'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of focusable'
[focused]: https://html.spec.whatwg.org/#focused 'Definition of focused'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark 'The landmark role in WAI ARIA'
[tech g123]: (https://www.w3.org/WAI/WCAG21/Techniques/general/G123) 'Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block'
[section of content]: #section-of-content 'Definition of section of content'
[section of repeated content]: #section-of-repeated-content 'Definition of section of repeated content'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
[html web page]: #web-page-html 'Definition of web page (HTML)'

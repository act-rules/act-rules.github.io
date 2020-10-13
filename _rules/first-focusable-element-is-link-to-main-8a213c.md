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
  - Accessibility Tree
  - CSS styling
  - DOM Tree
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

- is [keyboard actionable][]; and
- is [included in the accessibility tree][]; and
- has a [semantic role][] of `link`; and
- when [activated][], moves focus [at the start][] of the [main block of content][] of the [document][]; and
- has an [accessible name][] that communicates that it links to the [main block of content][].

## Assumptions

- This rule assumes that there is exactly one [main block of content][] inside each [HTML web page][].
- This rule assumes that the description of the link is provided through its [accessible name][].
- This rule assumes that [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] requires that the link can be [activated][] by use of keyboard, including being part of [sequential focus navigation][] (in order to be useful for keyboard users).
- This rule assumes that any global dismissible information that only appears once per site has already been acknowledged and is not displayed anymore. Many sites display a cookies policy banner which might be stealing focus until dismissed (usually by viewing and accepting cookies policy). If such a banner is taken into account, the rule may fail incorrectly.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

This rule and [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] are best practices to satisfy [Success Criterion 2.4.1 Bypass blocks][sc241]. It is possible to satisfy it by other means. Moreover, any document passing this rule will also pass rule [Document has an instrument to move focus to main block of content][], therefore, this rule is not need to pass rule [Bypass blocks of content][bypass blocks].

- [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1]

Each test case contains a link to the second chapter of the book so that each `aside` element is a [block of repeated content][]. Even though [blocks of repeated content][block of repeated content] are not considered by this rule, there is no need to provide a skip link if there is no repeated content to bypass, therefore the examples illustrate situations where the link is actually needed.

Unless specified otherwise, the [main block of content][] of each test case is defined by the `main` element.

## Test Cases

### Passed

#### Passed Example 1

In this [document][], the first [focusable][] element is a [keyboard actionable][] link, [included in the accessibility tree][], and when [activated][] moves the focus to the [main block of content][]. Its [accessible name][] (coming from content) communicates that it skips to the main content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip to main content</a>

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 2

In this [document][], the first [focusable][] element is a [keyboard actionable][] skip link; it is [included in the accessibility tree][] and has a descriptive [accessible name][]. In this case, the link is normally hidden but is [visible][] when [focused][].

```html
<html lang="en">
	<head>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" class="visible-on-focus">Skip to main content</a>

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 3

In this [document][], the first [focusable][] element is a [keyboard actionable][] skip link; it is [included in the accessibility tree][] and has a descriptive [accessible name][]. In this case, the [activation][] behavior, and the possibility to [activate][activation] the element with keyboard, is done by scripting.

```html
<html lang="en">
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/click-on-enter.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body onload="ClickOnEnter('skip-link')">
		<div role="link" onclick="window.location.assign('#main');" tabindex="0" id="skip-link">Skip to main content</div>

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 4

In this [document][], the first [focusable][] element is a [keyboard actionable][] skip link; it is [included in the accessibility tree][] and has a descriptive [accessible name][]. In this case, the link is rendered as non-text content and has an [accessible name][] given by its `aria-label` attribute.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" aria-label="Skip to main content">📖</a>

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 5

In this [document][], the first [focusable][] element is a [keyboard actionable][] skip link; it is [included in the accessibility tree][] and has a descriptive [accessible name][]. In this case, it is the first [focusable][] element, even though it is located after the `aside` element in tree order.

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

		<a href="#main">Skip to main content</a>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 6

In this [document][], the first [focusable][] element is a [keyboard actionable][] skip link; it is [included in the accessibility tree][] and has a descriptive [accessible name][]. In this case, it is the first [focusable][] element, even though it is the second link in tree order, but the focus order has been changed by the `tabindex` attributes.

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
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 7

In this [document][], the first [focusable][] element is a [keyboard actionable][] skip link; it is [included in the accessibility tree][] and has a descriptive [accessible name][]. Even through its target is inside another [block of content][], it is still [at the start][] of the [main block of content][] because there is no [perceivable content][] between the target and the [main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip to main content</a>

		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
			<span id="main"></span>
		</aside>

		<main>
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 8

Even through its target is inside another [block of content][], it is still [at the start][] of the [main block of content][] because there is no [perceivable content][] between the target and the [main block of content][]. Even through its target is not the first element in it, it is still [at the start][] of the [main block of content][] because it is before any [perceivable content][] before the target inside the [main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip to main content</a>

		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main>
			<hr />
			<span id="main"></span>
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

### Failed

#### Failed Example 1

This document has no link to skip to the [main block of content][].

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

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 2

In this [document][], the link to skip to the [main block of content][] does not reference a valid `id` attribute and thus when [activated][] will not move focus to the [main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#invalid-id">Skip to main content</a>

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 3

In this [document][], the link to skip to the [main block of content][] is not the first [focusable][] element within the page.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="https://www.w3.org/">Check out the W3C</a>
			<a href="#main">Skip to main content</a>
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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 4

In this [document][], the first [focusable][] element is the link to W3C. The link to the [main block of content][] is located before in tree order but after in focus order due to the `tabindex` attributes.

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
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 5

In this [document][], the link to skip to the [main block of content][] is not [keyboard actionable][] because it is not [visible][], even when focused.

```html
<html lang="en">
	<head>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" class="off-screen">Skip to main content</a>

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 6

In this [document][], the link to skip to the [main block of content][] is not [keyboard actionable][] because it cannot be [activated][] by using the keyboard.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<div role="link" onclick="window.location.assign('#main');" tabindex="0" id="skip-link">Skip to main content</div>

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 7

In this [document][], the link to skip to the [main block of content][] is not [included in the accessibility tree][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" aria-hidden="true">Skip to main content</a>

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 8

In this [document][], the element to skip to the [main block of content][] does not have a [semantic role][] of `link` (it has a role of `button`).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="window.location.assign('#main')">Skip to main content</button>

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 9

In this [document][], the link to skip to the [main block of content][] does not have an [accessible name][] that communicates its intent.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Click me if you dare!</a>

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 10

In this [document][], the link to skip to the [main block of content][] has a [whitespace][] only, hence non-descriptive, [accessible name][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" aria-label=" ">Skip to main content</a>

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 11

In this [document][], the first [focusable][] element does not move focus [at the start][] of the [main block of content][]. The focus is moved before the start, on [perceivable content][] which is not inside the [main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip to main content</a>

		<aside id="about-book">
			<h1>About the book</h1>
			<p id="main">The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main>
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Failed Example 12

In this [document][], the first [focusable][] element does not move focus [at the start][] of the [main block of content][]. The focus is moved after the start, on [perceivable content][] which is not the first inside the [main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip to main content</a>

		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main>
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p id="main">
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
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
[bypass blocks]: https://act-rules.github.io/rules/cf77f2 'Rule Bypass Blocks of Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[document has an instrument to move focus to main block of content]: https://act-rules.github.io/rules/ye5d6e 'Rule Document Has an Instrument to Move Focus to Main Block of Content'
[focusable]: #focusable 'Definition of Focusable'
[focused]: https://html.spec.whatwg.org/#focused 'HTML definition of Focused'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[keyboard actionable]: #keyboard-actionable-element 'Definition of Keyboard Actionable Element'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation 'HTML definition of Sequential Focus Navigation'
[tech g1]: https://www.w3.org/WAI/WCAG21/Techniques/general/G1 'Technique G1: Adding a Link at the Top of each Page that Goes Directly to the Main Content Area'
[visible]: #visible 'Definition of Visible'
[whitespace]: #whitespace 'Definition of whitespace'

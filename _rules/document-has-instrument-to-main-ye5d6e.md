---
id: ye5d6e
name: Document has an instrument to move focus to main block of content
rule_type: atomic
description: |
  This rule checks that there is an instrument to move focus to the main content of the page
accessibility_requirements:
  wcag-technique:G1: # Adding a link at the top of each page that goes directly to the main content area
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G123: # Adding a link at the beginning of a block of repeated content to go to the end of the block
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G124: # Adding links at the top of the page to each area of the content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - CSS styling
  - DOM Tree
  - Language
acknowledgments:
  authors:
    - Jean-Yves Moyen
  assets:
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation

Within the test target, there exists at least one [keyboard actionable][] [instrument][] to move focus [at the start][] of the [main block of content][] of the [document][], and that [instrument][] has an [accessible name][] that communicates that it jumps to the [main block of content][].

## Assumptions

- This rule assumes that there is exactly one [main block of content][] inside each [HTML web page][].
- This rule assumes that [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1], [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123], and [Technique G124: Adding links at the top of the page to each area of the content][tech g124] require that the links can be [activated][] by use of keyboard, including being part of [sequential focus navigation][] (in order to be useful for keyboard users).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

While it is clear that a "skip link" is a valid way to satisfy [Success Criterion 2.4.1 Bypass blocks][sc241], it is less clear how "deep" in the page such a skip link could be. Notably, [Technique G124: Adding links at the top of the page to each area of the content][tech g124] is listing valid cases where it could be fairly "deep" if the page has many areas of the content. Rather than trying to fix an arbitrary value (e.g. "the skip link must be among the first 5 focusable elements"), or trying to figure out some condition on what precedes it, this rule only checks its existence. It is clear that if no "skip link" is provided, then another way to bypass blocks of repeated content must be found. However, it is possible to pass still rule and still fail [Success Criterion 2.4.1 Bypass blocks][sc241] if the skip link is too far away from the start of the page.

- [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1]
- [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123]
- [Technique G124: Adding links at the top of the page to each area of the content][tech g124]

Each test case contains a link to the second chapter of the book so that each `aside` element is a [block of repeated content][]. Even though [blocks of repeated content][block of repeated content] are not considered by this rule, there is no need to provide a skip link if there is no repeated content to bypass, therefore the examples illustrate situations where the link is actually needed.

Unless specified otherwise, the [main block of content][] of each [document][] is defined by its `main` element.

Due to the differences between the 3 techniques considered here, it is almost impossible to pass all of them at the same time. The first few Passed Examples illustrate these differences and passes different techniques. The rest of the Passed Examples illustrate variations inside the rule and are mostly based on cases that pass [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] given that it is simpler than the other two.

The examples sometimes group the skip links inside a `nav` landmark (notably when there are several). According to [WAI-ARIA authoring practices][navigation landmark], if another `nav` landmark was present on the page (e.g. for site navigation), then each should have a different accessible name.

## Test Cases

### Passed

#### Passed Example 1

In this [document][], the first `a` element is [visible][], is a [keyboard actionable][] [instrument][] to [navigate][] and thus move the focus to the [main block of content][]. Its [accessible name][] (coming from content) communicates that it skips to the main content. This example passes [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip to main content</a>
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

#### Passed Example 2

In this [document][], the third `a` element is [visible][], is a [keyboard actionable][] [instrument][] to move the focus to the [main block of content][]. Its [accessible name][] (coming from content) communicates that it skips to the main content. This example passes [Technique G124: Adding links at the top of the page to each area of the content][tech g124].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="local-navigation">
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#main">Skip to main content</a>
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

In this [document][], the second `a` element (inside the second `aside` element) is [visible][], is a [keyboard actionable][] [instrument][] to move the focus to the [main block of content][]. Its [accessible name][] (coming from content) communicates that it skips to the main content. This example passes [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="bio-translator">
			<a href="#about-book">Skip to information about the book</a>
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<a href="#main">Skip to main content</a>
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

#### Passed Example 4

In this [document][], the `button` element is [visible][], is a [keyboard actionable][] [instrument][] to [navigate][] and thus move the focus to the [main block of content][] and has a descriptive [accessible name][]. In this case the [instrument][] is a button, not a link.

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 5

In this [document][], the first `a` element is [visible][], is a [keyboard actionable][] [instrument][] to [navigate][] and thus move the focus to the [main block of content][] and has a descriptive [accessible name][]. In this case, the element is normally hidden but is [visible][] when [focused][].

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

In this [document][], the first `div` element is [visible][], is a [keyboard actionable][] [instrument][] to [navigate][] and thus move the focus to the [main block of content][] and has a descriptive [accessible name][]. In this case, the [activation][activate] behaviour, and the possibility to [activate][] the element with keyboard, is doe by scripting.

```html
<html lang="en">
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/click-on-enter.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body onload="ClickOnEnter('skip-link')">
		<div role="link" onclick="location.href='#main';" tabindex="0" id="skip-link">Skip to main content</div>

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

In this [document][], the first `a` element is [visible][], is a [keyboard actionable][] [instrument][] to [navigate][] and thus move the focus to the [main block of content][] and has a descriptive [accessible name][]. Even through its target is inside another [block of content][], it is still [at the start][] of the [main block of content][] because there is no [perceivable content][] between the target and the [main block of content][].

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 8

In this [document][], the first `a` element is [visible][], is a [keyboard actionable][] [instrument][] to [navigate][] and thus move the focus to the [main block of content][] and has a descriptive [accessible name][]. Even through its target is not the first element in it, it is still [at the start][] of the [main block of content][] because it is before any [perceivable content][] before the target inside the [main block of content][].

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

#### Passed Example 9

In this [document][], the first `a` element is [visible][], is a [keyboard actionable][] [instrument][] to [navigate][] and thus move the focus to the [main block of content][] and has a descriptive [accessible name][]. In this case, the link is rendered as non-text content and has an [accessible name][] given by its `aria-label` attribute.

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</main>
	</body>
</html>
```

### Failed

#### Failed Example 1

This [document][] has no [instrument][] to skip to the [main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

In this [document][], the link to skip to the [main block of content][] does not reference a valid `id` attribute and thus when [activated][] will not move focus to the [main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#invalid-id">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

#### Failed Example 3

In this [document][], the link to skip to the [main block of content][] is not [keyboard actionable][] because it is not [included in the accessibility tree][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" aria-hidden="true">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

#### Failed Example 4

In this [document][], the link to skip to the [main block of content][] is not [keyboard actionable][] because it is not in [sequential focus navigation][] order.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" tabindex="-1">Skip to main content</a>
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

#### Failed Example 5

In this [document][], the link to skip to the [main block of content][] is not [keyboard actionable][] because it is not [visible][], even when focused.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" style="position: absolute; top: -999px">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

#### Failed Example 6

In this [document][], the link to skip to the [main block of content][] is not [keyboard actionable][] because it cannot be [activated][] by using the keyboard.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<div role="link" onclick="location.href='#main';" tabindex="1" id="skip-link">Skip to main content</div>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

#### Failed Example 7

In this [document][], the skip link does not move focus [at the start][] of the [main block of content][]. The focus is moved before the start, on [perceivable content][] which is not inside the [main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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
		</main>
	</body>
</html>
```

#### Failed Example 8

In this [document][], the first [focusable][] element does not move focus [at the start][] of the [main block of content][]. The focus is moved after the start, on [perceivable content][] which is not the first inside the [main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

#### Failed Example 10

In this [document][], the link to skip to the [main block of content][] has a [whitespace][] only, hence non-descriptive, [accessible name][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" aria-label=" ">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

### Inapplicable

#### Inapplicable Example 1

This [document][] is not an [HTML web page][].

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[accessible name]: #accessible-name 'Definition of Accessible Name'
[activate]: https://html.spec.whatwg.org/#activation 'HTML Definition of Activation'
[at the start]: #start-end-content 'Definition of Start and End of Content'
[block of content]: #block-of-content 'Definition of Block of Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[focusable]: #focusable 'Definition of Focusable'
[focused]: https://html.spec.whatwg.org/#focused 'HTML definition of Focused'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[keyboard actionable]: #keyboard-actionable-element 'Definition of Keyboard Actionable Element'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[navigate]: https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate 'HTML specification of navigate'
[navigation landmark]: https://www.w3.org/TR/wai-aria-practices-1.1/#aria_lh_navigation 'WAI-ARIA authoring practices, Navigation Landmark'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation 'HTML definition of Sequential Focus Navigation'
[tech g1]: https://www.w3.org/WAI/WCAG21/Techniques/general/G1 'Technique G1: Adding a Link at the Top of each Page that Goes Directly to the Main Content Area'
[tech g123]: (https://www.w3.org/WAI/WCAG21/Techniques/general/G123) 'Technique G123: Adding a Link at the Beginning of a Block of Repeated Content to Go to the End of the Block'
[tech g124]: https://www.w3.org/WAI/WCAG21/Techniques/general/G124 'Technique G124: Adding Links at the Top of the Page to each Area of the Content'
[visible]: #visible 'Definition of Visible'
[whitespace]: #whitespcae 'Definition of whitespace'

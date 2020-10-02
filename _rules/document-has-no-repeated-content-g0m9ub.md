---
id: g0m9ub
name: Document has no repeated content before main content
rule_type: atomic
description: |
  This rule checks that each page has no repeated content before its main content.
accessibility_requirements:
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
  assets:
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation

The test target contains no [block of repeated content][] which is located before its [main block of content][]

## Assumptions

- This rule assumes that there is exactly one [main block of content][] inside each [HTML web page][].

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

[Success Criterion 2.4.1 Bypass Blocks][sc241] requires a way to "bypass blocks of content that are repeated on multiple Web pages." However, [Understanding Success Criterion 2.4.1: Bypass Blocks][usc241] states that the intent is to allow "more direct access to the primary content of the Web page" and many of its sufficient techniques only provide a way to skip to the main content (most notably [G1: Adding a link at the top of each page that goes directly to the main content area][tech g1]). It is not fully clear whether there must be a way to skip repeated content located after the primary content (literal reading of the Success Criterion suggests so); or to skip non-repeated content located before the primary content (such as local navigation) (the Understanding Document and sufficient techniques suggest so). In any case when this rule fails, it is a clear case where means to bypass blocks must be provided in order to satisfy [Success Criterion 2.4.1 Bypass Blocks][sc241].

Because the definitions of [block of repeated content][] and [main block of content][] are subjective (they rely on interpreting the purpose of some content), they cannot be used in the Applicability of any rule. This rule is essentially a substitute for an Applicability of [Bypass Blocks of Content][] and its other atomic rules. Only when this rule fails is there a clear need to provide a way for bypassing content located before the [main block of content][].

## Test Cases

### Passed

#### Passed Example 1

In this document, the [main block of content][] is the `main` element. The `aside` element is a [block of repeated content][] because it is also present in the document linked at the end of the `main` element. There is no [block of repeated content][] before the [main block of content][]. The only [block of repeated content][] is located after the [main block of content][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<main id="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</main>

		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>
	</body>
</html>
```

#### Passed Example 2

This document has no [block of repeated content][] because none of its content is shared with the document linked at the end of the `main` element.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
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

This document has no [block of repeated content][] because it does not link any other document. Note that the `aside` element might actually be repeated on other pages of the same website, but without direct link to them, it does not fulfill the condition for being a [block of repeated content][].

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

### Failed

#### Failed Example 1

In this document, there is a [block of repeated content][] before the [main block of content][].

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

### Inapplicable

#### Inapplicable Example 1

This [document][] is not an [HTML web page][].

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[bypass blocks of content]: https://act-rules.github.io/rules/cf77f2 'Rule Bypass Blocks of Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[html web page]: #web-page-html 'Definition of HTML Web Page'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[tech g1]: https://www.w3.org/WAI/WCAG21/Techniques/general/G1 'Technique G1: Adding a Link at the Top of each Page that Goes Directly to the Main Content Area'
[usc241]: https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html 'Understanding Success Criterion 2.4.1: Bypass Blocks'

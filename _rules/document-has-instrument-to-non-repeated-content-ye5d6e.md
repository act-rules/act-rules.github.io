---
id: ye5d6e
name: Document has an instrument to move focus to non-repeated content
rule_type: atomic
description: |
  This rule checks that there is an instrument to move focus to non-repeated content in the page
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
  funding:
    - WAI-Tools
  assets:
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation

For each test target, there exists at least one [instrument][] inside it to move focus [just before][] a node of [non-repeated content after repeated content][].

## Assumptions

This rule assumes that there is at least one [block of repeated content][] before the non-repeated content, and therefore [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123] will require a link to the non-repeated content in order to skip this [block of repeated content][]. If there is no [block of repeated content][] before the non-repeated content, then it is possible to fail this rule but still pass [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123].

## Accessibility Support

There are no accessibility support issues known.

## Background

The intention of this rule is that focus is moved to the main area of content of a document. However, defining the main area of content in a non-ambiguous way is not really doable. Therefore, the rule takes a more lenient position and only requires to move focus to some non-repeated content. Additional conditions on this destination were considered and rejected when writing the rule since it might be acceptable, for example, to skip the first heading of the main area of content if it has the exact same content as the `title` element of the document. Therefore, it is possible to pass this rule but still fail the related techniques and violate [Success Criterion 2.4.1 Bypass blocks][sc241].

While it is clear that a "skip link" is a valid way to satisfy [Success Criterion 2.4.1 Bypass blocks][sc241], it is less clear how "deep" in the page such a skip link could be. Notably, [Technique G124: Adding links at the top of the page to each area of the content][tech g124] is listing valid cases where it could be fairly "deep" if the page has many areas of the content. Rather than trying to fix an arbitrary value (e.g. "the skip link must be among the first 5 focusable elements"), or trying to figure out some condition on what precedes it, this rule only checks its existence. It is clear that if no "skip link" is provided, then another way to bypass blocks of repeated content must be found. However, it is possible to pass this rule without satisfying [Success Criterion 2.4.1 Bypass blocks][sc241] if the skip link is too far away from the start of the page.

### Bibliography

- [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1]
- [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123]
- [Technique G124: Adding links at the top of the page to each area of the content][tech g124]

## Test Cases

To avoid using landmarks for the non-repeated content, which would satisfy [Success Criterion 2.4.1 Bypass Block][sc241], which this rule is designed for, this rule uses `<div id="main">` in its test cases to indicate where non-repeating content exists. It is recommended to use the `main` landmark instead. The `aside` and `nav` elements are each a [block of repeated content][] due to the link inside the `nav` element to a page with similar [blocks of content][block of content].

Due to the differences between the 3 techniques considered here, it is almost impossible to pass all of them at the same time. The first few Passed Examples illustrate these differences and pass different techniques. The rest of the Passed Examples illustrate variations inside the rule and are based on cases that pass [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] given that it is simpler than the other two.

The examples sometimes group the skip links inside a `nav` landmark (notably when there are several). According to [WAI-ARIA authoring practices][navigation landmark], if another `nav` landmark was present on the page (e.g. for site navigation), then each should have a different accessible name.

### Passed

#### Passed Example 1

In this [document][], the first `a` element is an [instrument][] to [navigate][], and thus move the focus, to the non-repeated content. This example passes [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 2

In this [document][], the third `a` element is an [instrument][] to move the focus to the non-repeated content. This example passes [Technique G124: Adding links at the top of the page to each area of the content][tech g124].

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
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 3

In this [document][], the second `a` element (inside the second `aside` element) is an [instrument][] to move the focus to the non-repeated content. This example passes [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="bio-translator">
			<a href="#about-book">Skip to information about the book</a>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<a href="#main">Skip to main content</a>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 4

In this [document][], the first `a` element is an [instrument][] to move the focus to the non-repeated content. In this case, the element is normally hidden but is [visible][] when [focused][].

```html
<html lang="en">
	<head>
		<link rel="stylesheet" href="/test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav class="visible-on-focus">
			<a href="#main">Skip to main content</a>
		</nav>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 5

In this [document][], the first `div` element is an [instrument][] to move the focus to the non-repeated content.

```html
<html lang="en">
	<head>
		<script src="/test-assets/bypass-blocks-cf77f2/click-on-enter.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body onload="ClickOnEnter('skip-link')">
		<div role="link" onclick="location.assign('#main');" tabindex="0" id="skip-link">Skip to main content</div>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 6

In this [document][], the first `a` element is an [instrument][] to move the focus to the non-repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" aria-label="Skip to main content">📖</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 7

In this [document][], the first `a` element is an [instrument][] to move the focus to the non-repeated content. Even though its target is inside a [block of repeated content][], it is still [just before][] some [non-repeated content after repeated content][] because there is no [perceivable content][] between the link target and the non-repeated content. Thus, following the link does skip all the repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#just-before-main">Skip to main content</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
			<span id="just-before-main"></span>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 8

In this [document][], the first `a` element is an [instrument][] to move the focus to the non-repeated content. Even though its target is not the first element after it, it is still [just before][] the first [non-repeated content after repeated content][]. Thus, following the link does not skip any non-repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#just-before-main">Skip to main content</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<hr />
			<span id="just-before-main"></span>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

### Failed

#### Failed Example 1

This [document][] has no [instrument][] to skip to the non-repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Failed Example 2

In this [document][], the link to skip to the non-repeated content does not reference a valid `id` attribute and thus when [activated][activation] will not move focus to the non-repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#invalid-id">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Failed Example 3

In this [document][], the skip link does not move focus [just before][] some [non-repeated content after repeated content][]. The focus is moved on [perceivable content][] which is inside the [block of repeated content][]. Thus, following the link does not skip all the repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#before-main">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<p id="before-main">The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
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

[activation]: https://html.spec.whatwg.org/#activation 'HTML Definition of Activation'
[block of content]: #block-of-repeated-content 'Definition of Block of Content'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[focused]: https://html.spec.whatwg.org/#focused 'HTML definition of Focused'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[just before]: #just-before 'Definition of Just Before'
[navigate]: https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate 'HTML specification of navigate'
[navigation landmark]: https://www.w3.org/TR/wai-aria-practices-1.1/#aria_lh_navigation 'WAI-ARIA authoring practices, Navigation Landmark'
[non-repeated content after repeated content]: #non-repeated-content 'Definition of Non-Repeated Content after Repeated Content'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
[sc241]: https://www.w3.org/TR/WCAG22/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[tech g1]: https://www.w3.org/WAI/WCAG22/Techniques/general/G1 'Technique G1: Adding a Link at the Top of each Page that Goes Directly to the Main Content Area'
[tech g123]: https://www.w3.org/WAI/WCAG22/Techniques/general/G123 'Technique G123: Adding a Link at the Beginning of a Block of Repeated Content to Go to the End of the Block'
[tech g124]: https://www.w3.org/WAI/WCAG22/Techniques/general/G124 'Technique G124: Adding Links at the Top of the Page to each Area of the Content'
[visible]: #visible 'Definition of Visible'

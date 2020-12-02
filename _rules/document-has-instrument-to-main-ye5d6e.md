---
id: ye5d6e
name: Document has an instrument to move focus to main block of content
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
  assets:
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation

For each test target, all the following are true for the first [block of repeated content][] (in the [flat tree][]) with [perceivable content][] [at its end][at the end] which is not part of any [block of repeated content][]:

- there exists at least one [keyboard actionable][] [instrument][] inside the test target to move focus [at the end][] of this [block of content][]; and
- there exists at least one [instrument][] inside the test target to move focus [at the end][] of this [block of content][]; and this [instrument][] is [included in the accessibility tree][] and has an [accessible name][] that communicates that it skips to non-repeated content.

## Assumptions

- This rule assumes that [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1], [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123], and [Technique G124: Adding links at the top of the page to each area of the content][tech g124] require that the links can be [activated][activation] by use of keyboard, including being part of [sequential focus navigation][] (in order to be useful for keyboard users).
- This rule assumes that there is at least one [block of repeated content][] before the non-repeated content, and therefore [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123] will require a link to the non-repeated content in order to skip this [block of repeated content][]. If there is no [block of repeated content][] before the non-repeated content, then it is possible to fail this rule but still pass [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123].
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

While it is clear that a "skip link" is a valid way to satisfy [Success Criterion 2.4.1 Bypass blocks][sc241], it is less clear how "deep" in the page such a skip link could be. Notably, [Technique G124: Adding links at the top of the page to each area of the content][tech g124] is listing valid cases where it could be fairly "deep" if the page has many areas of the content. Rather than trying to fix an arbitrary value (e.g. "the skip link must be among the first 5 focusable elements"), or trying to figure out some condition on what precedes it, this rule only checks its existence. It is clear that if no "skip link" is provided, then another way to bypass blocks of repeated content must be found. However, it is possible to pass this rule and still fail [Success Criterion 2.4.1 Bypass blocks][sc241] if the skip link is too far away from the start of the page.

In most practical cases, the same [instrument][] is used to fulfill both conditions.

- [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1]
- [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123]
- [Technique G124: Adding links at the top of the page to each area of the content][tech g124]

In order to focus on only on the part of the associated composite rule ([_Bypass blocks of content_][bypass blocks]) which this atomic rule illustrate, and given the very nature of some of the other input rules, test cases use a `<div id="main">` instead of a `main` element (to avoid also passing rule [_Document has a main landmark_][document has main]). This is bad practice and should be avoided.

Unless specified, the non-repeated content of each test case is defined by its `<div id="main">` element.

Due to the differences between the 3 techniques considered here, it is almost impossible to pass all of them at the same time. The first few Passed Examples illustrate these differences and pass different techniques. The rest of the Passed Examples illustrate variations inside the rule and are based on cases that pass [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] given that it is simpler than the other two.

The examples sometimes group the skip links inside a `nav` landmark (notably when there are several). According to [WAI-ARIA authoring practices][navigation landmark], if another `nav` landmark was present on the page (e.g. for site navigation), then each should have a different accessible name.

## Test Cases

### Passed

#### Passed Example 1

In this [document][], the first `a` element is a [keyboard actionable][] [instrument][] to [navigate][], and thus move the focus, to the non-repeated content. It is [included in the accessibility tree][] and its [accessible name][] (coming from content) communicates that it skips to the main content. This example passes [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1].

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

In this [document][], the third `a` element is [visible][], is a [keyboard actionable][] [instrument][] to move the focus to the non-repeated content. It is [included in the accessibility tree][] and its [accessible name][] (coming from content) communicates that it skips to the main content. This example passes [Technique G124: Adding links at the top of the page to each area of the content][tech g124].

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 3

In this [document][], the second `a` element (inside the second `aside` element) is [visible][] and is a [keyboard actionable][] [instrument][] to move the focus to the non-repeated content. It is [included in the accessibility tree][] and its [accessible name][] (coming from content) communicates that it skips to the main content. This example passes [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123].

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 4

In this [document][], the first `a` element is [visible][], is a [keyboard actionable][] [instrument][] to move the focus to the non-repeated content, is [included in the accessibility tree][] and has a descriptive [accessible name][]. In this case, the element is normally hidden but is [visible][] when [focused][].

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
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 5

In this [document][], the first `div` element is [visible][], is a [keyboard actionable][] [instrument][] to move the focus to the non-repeated content, is [included in the accessibility tree][] and has a descriptive [accessible name][]. In this case, the [activation][] behavior, and the possibility to [activate][activation] the element with keyboard, is done by scripting and the `tabindex` attribute with a value of 0.

```html
<html lang="en">
	<head>
		<script src="../test-assets/bypass-blocks-cf77f2/click-on-enter.js"></script>
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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 6

In this [document][], the first `a` element is [visible][], is a [keyboard actionable][] [instrument][] to move the focus to the non-repeated content, is [included in the accessibility tree][] and has a descriptive [accessible name][]. Even though its target is inside the [block of repeated content][], it is still [at its end][at the end] because there is no [perceivable content][] between the link target and the non-repeated content. Thus, following the link does skip all the repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#at-the-start-of-main">Skip to main content</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
			<span id="at-the-end-of-repeated"></span>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 7

In this [document][], the first `a` element is [visible][], is a [keyboard actionable][] [instrument][] to move the focus to the non-repeated content, is [included in the accessibility tree][] and has a descriptive [accessible name][]. Even though its target is not the first element after it, it is still [at the end][] of the [block of repeated content][] because it is before any [perceivable content][] outside it. Thus, following the link does not skip any non-repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#at-the-start-of-main">Skip to main content</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<hr />
			<span id="at-the-end-of-repeated"></span>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 8

In this [document][], the first `a` element is [visible][], is a [keyboard actionable][] [instrument][] to move the focus to the non-repeated content, is [included in the accessibility tree][] and has a descriptive [accessible name][]. In this case, the link is rendered as non-text content and has an [accessible name][] given by its `aria-label` attribute.

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
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
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
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

In this [document][], the link to skip to the non-repeated content is not [included in the accessibility tree][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" aria-hidden="true">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

#### Failed Example 4

In this [document][], the link to skip to the non-repeated content is not [keyboard actionable][] because it is not in [sequential focus navigation][] order.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" tabindex="-1">Skip to main content</a>
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

#### Failed Example 5

In this [document][], the link to skip to the non-repeated content is not [keyboard actionable][] because it is not [visible][], even when focused.

```html
<html lang="en">
	<head>
		<link rel="stylesheet" href="../test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" class="off-screen">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

#### Failed Example 6

In this [document][], the link to skip to the non-repeated content is not [keyboard actionable][] because it cannot be [activated][activation] by using the keyboard.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<div role="link" onclick="location.assign('#main');" tabindex="1" id="skip-link">Skip to main content</div>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

#### Failed Example 7

In this [document][], the skip link does not move focus [at the end][] of the [block of repeated content][]. The focus is moved before the end, on [perceivable content][] which is inside the [block of repeated content][]. Thus, following the link does not skip all the repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#before-main">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

#### Failed Example 8

In this [document][], the first [focusable][] element does not move focus [at the end][] of the [block of repeated content][]. The focus is moved after the end, on [perceivable content][] which is not the first outside the [block of repeated content][]. Thus, following the link does skip part of the non-repeated content and users will miss some important information.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#inside-main">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</p>
			<p id="inside-main">
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Failed Example 9

In this [document][], the link to skip to the non-repeated content does not have an [accessible name][] that communicates its intent.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Click me if you dare!</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

#### Failed Example 10

In this [document][], the link to skip to the non-repeated content has a [whitespace][] only, hence non-descriptive, [accessible name][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" aria-label=" ">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

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

### Inapplicable

#### Inapplicable Example 1

This [document][] is not an [HTML web page][].

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[accessible name]: #accessible-name 'Definition of Accessible Name'
[activation]: https://html.spec.whatwg.org/#activation 'HTML Definition of Activation'
[at the end]: #at-the-end 'Definition of At the End of a block'
[block of content]: #block-of-content 'Definition of Block of Content'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[bypass blocks]: https://act-rules.github.io/rules/cf77f2 'Rule Bypass Blocks of Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[document has main]: https://act-rules.github.io/rules/b40fd1 'Rule Document Has a Main Landmark'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Definition of Flat Tree'
[focusable]: #focusable 'Definition of Focusable'
[focused]: https://html.spec.whatwg.org/#focused 'HTML definition of Focused'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[keyboard actionable]: #keyboard-actionable-element 'Definition of Keyboard Actionable Element'
[navigate]: https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate 'HTML specification of navigate'
[navigation landmark]: https://www.w3.org/TR/wai-aria-practices-1.1/#aria_lh_navigation 'WAI-ARIA authoring practices, Navigation Landmark'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation 'HTML definition of Sequential Focus Navigation'
[tech g1]: https://www.w3.org/WAI/WCAG21/Techniques/general/G1 'Technique G1: Adding a Link at the Top of each Page that Goes Directly to the Main Content Area'
[tech g123]: (https://www.w3.org/WAI/WCAG21/Techniques/general/G123) 'Technique G123: Adding a Link at the Beginning of a Block of Repeated Content to Go to the End of the Block'
[tech g124]: https://www.w3.org/WAI/WCAG21/Techniques/general/G124 'Technique G124: Adding Links at the Top of the Page to each Area of the Content'
[visible]: #visible 'Definition of Visible'
[whitespace]: #whitespace 'Definition of whitespace'

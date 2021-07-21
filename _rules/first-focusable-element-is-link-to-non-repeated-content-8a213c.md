---
id: 8a213c
name: First focusable element is link to non-repeated content
rule_type: atomic
description: |
  This rule checks that the first focusable element is a link to non-repeated content in the page
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
    - Jean-Yves Moyen
  assets:
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation 1

Each test target has a non-empty [sequential focus navigation order][sequential focus navigation].

## Expectation 2

For each test target, all the following are true for the first element in its [sequential focus navigation order][sequential focus navigation]:

- the element is [keyboard actionable][]; and
- the element is [included in the accessibility tree][]; and
- the element is a [semantic link][]; and
- the element is [visible][] when it is [focused][]; and
- when the element is [activated][], focus moves [just before][] a node of [non-repeated content after repeated content][]; and
- the element has an [accessible name][] that communicates that it skips to the main content area.

## Assumptions

- This rule assumes that the primary content of the page is [non-repeated content after repeated content][]. If this is not the case, it is possible to fail this rule while still passing [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1].
- This rule assumes that the description of the link is provided through its [accessible name][].
- This rule assumes that [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] requires that the link can be [activated][] by use of keyboard, including being part of [sequential focus navigation][] (in order to be useful for keyboard users). The technique uses the term "activating the link" without being clear whether this is by mouse, keyboard, or other means; given the emphasize put on keyboard usage in the description, the rule assume that "activating" includes "activating by keyboard".
- This rule assumes that any global dismissible information that only appears once per site has already been acknowledged and is not displayed anymore. Many sites display a cookies policy banner which might be stealing focus until dismissed (usually by viewing and accepting cookies policy). If such a banner is taken into account, the rule may fail incorrectly.
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

The intention of this rule is that focus is moved to the main area of content of a document. However, defining the main area of content in a non-ambiguous way is not really doable. Therefore, the rule takes a more lenient position and only requires to move focus to some non-repeated content. Additional conditions on this destination were considered and rejected when writing the rule since it might be acceptable, for example, to skip the first heading of the main area of content if it has the exact same content as the `title` element of the document. Therefore, it is possible to pass this rule but still fail [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1].

This rule and [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] are best practices to satisfy [Success Criterion 2.4.1 Bypass blocks][sc241]. It is possible to satisfy it by other means. Moreover, any document passing this rule will also pass rule [_Document has an instrument to move focus to non-repeated content_][document has instrument to main], therefore, this rule is not needed to pass rule [_Bypass blocks of repeated content_][bypass blocks].

The link may be [visible][] or not when it is not [focused][]. This rule (and [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1]) requires it to be [visible][] when [focused][] but doesn't put any constraint on [visibility][visible] when not [focused][].

- [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1]

Unless specified otherwise, the non-repeated content of each test case is its `main` element.

## Test Cases

### Passed

#### Passed Example 1

In this [document][], the first [focusable][] element is a [keyboard actionable][] link, [included in the accessibility tree][], and when [activated][] moves the focus to the non-repeated content. Its [accessible name][] (coming from content) communicates that it skips to the main content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip to main content</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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
		<link rel="stylesheet" href="/test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" class="visible-on-focus">Skip to main content</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the first [focusable][] element is a [keyboard actionable][] skip link; it is [included in the accessibility tree][] and has a descriptive [accessible name][]. In this case, the [activation][activated] behavior, and the possibility to [activate][activated] the element with keyboard, is done by scripting and by having a `tabindex` attribute with a value of 0.

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

		<main id="main">
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
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the first [focusable][] element is a [keyboard actionable][] skip link; it is [included in the accessibility tree][] and has a descriptive [accessible name][]. In this case, it is the first [focusable][] element, even though it is located after the `aside` element in tree order. Note that such a link is not very useful for users who read sequentially (as there is nothing more to skip once the link is reached) and is only useful for users who can pull a list of links and follow them independently of reading order (such a functionality is often present in assistive technologies).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<a href="#main">Skip to main content</a>

		<main id="main">
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
			<a href="https://act-rules.github.io/" tabindex="2">ACT rules</a>
			<a href="#main" tabindex="1">Skip to main content</a>
		</nav>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the first [focusable][] element is a [keyboard actionable][] skip link; it is [included in the accessibility tree][] and has a descriptive [accessible name][]. Even though its target is inside a [block of repeated content][], it is nonetheless [just before][] the [non-repeated content after repeated content][] `p` element because there is no [perceivable content][] between the link target and the non-repeated content. Thus, following the link does skip all the repeated content.

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

		<main>
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

In this [document][], the first [focusable][] element is a [keyboard actionable][] skip link; it is [included in the accessibility tree][] and has a descriptive [accessible name][]. Even though its target is not the first element out of the [block of repeated content][], it is still [just before][] the first [non-repeated content after repeated content][] `p` element because it is before any [perceivable content][] outside the [block of repeated content][]. Thus, following the link does not skip any non-repeated content.

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

		<main>
			<hr />
			<span id="just-before-main"></span>
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

This document has no link to skip to the non-repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the link to skip to the non-repeated content does not reference a valid `id` attribute and thus when [activated][] will not move focus to the non-repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#invalid-id">Skip to main content</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the link to skip to the non-repeated content is not the first [focusable][] element within the page.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="https://act-rules.github.io/">ACT rules</a>
			<a href="#main">Skip to main content</a>
		</nav>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the first [focusable][] element is the link to ACT rules. The link to the non-repeated content is located before in tree order but after in focus order due to the `tabindex` attributes.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav>
			<a href="#main" tabindex="2">Skip to main content</a>
			<a href="https://act-rules.github.io/" tabindex="1">ACT rules</a>
		</nav>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the link to skip to the non-repeated content is not [keyboard actionable][] because it is not in [sequential focus navigation][] order.

```html
<html lang="en">
	<head>
		<link rel="stylesheet" href="/test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" tabindex="-1">Skip to main content</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the link to skip to the non-repeated content is not [keyboard actionable][] because it is not [visible][], even when focused.

```html
<html lang="en">
	<head>
		<link rel="stylesheet" href="/test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" class="off-screen">Skip to main content</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the link to skip to the non-repeated content is not [keyboard actionable][] because it cannot be [activated][] by using the keyboard.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<div role="link" onclick="location.assign('#main');" tabindex="0" id="skip-link">Skip to main content</div>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the link to skip to the non-repeated content is not [included in the accessibility tree][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" aria-hidden="true">Skip to main content</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the element to skip to the non-repeated content does not have a [semantic role][] of `link` (it has a role of `button`).

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<button onclick="location.assign('#main')">Skip to main content</button>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the link to skip to the non-repeated content does not have an [accessible name][] that communicates its intent.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Click me if you dare!</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the link to skip to the non-repeated content has a [whitespace][] only, hence non-descriptive, [accessible name][].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" aria-label=" ">Skip to main content</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main id="main">
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

In this [document][], the first [focusable][] element does not move focus [just before][] a node of [non-repeated content after repeated content][]. The focus is moved to a node of [perceivable content][] inside a [block of repeated content][]. Thus, following the link does not skip all the repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#before-main">Skip to main content</a>

		<aside id="about-book">
			<p id="before-main">The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main>
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

[accessible name]: #accessible-name 'Definition of Accessible Name'
[activated]: https://html.spec.whatwg.org/#activation 'Definition of Activation'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[bypass blocks]: https://act-rules.github.io/rules/cf77f2 'Rule Bypass Blocks of Repeated Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[document has instrument to main]: https://act-rules.github.io/rules/ye5d6e 'Rule Document Has an Instrument to Move Focus to Non-Repeated Content'
[focusable]: #focusable 'Definition of Focusable'
[focused]: https://html.spec.whatwg.org/#focused 'HTML definition of Focused'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[just before]: #just-before 'Definition of Just Before a Node'
[keyboard actionable]: #keyboard-actionable-element 'Definition of Keyboard Actionable Element'
[non-repeated content after repeated content]: #non-repeated-content 'Definition of Non-Repeated Content after Repeated Content'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[semantic link]: #semantic-link 'Definition of Semantic Link'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation 'HTML definition of Sequential Focus Navigation'
[tech g1]: https://www.w3.org/WAI/WCAG21/Techniques/general/G1 'Technique G1: Adding a Link at the Top of each Page that Goes Directly to the Main Content Area'
[visible]: #visible 'Definition of Visible'
[whitespace]: #whitespace 'Definition of whitespace'

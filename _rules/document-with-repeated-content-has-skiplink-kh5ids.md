---
id: kh5ids
name: Document has no repeated content, or a skip link as its first focusable element
rule_type: composite
description: |
  This rule checks that if a document has repeated content, then the first focusable element is a link to non-repeated content in the page
accessibility_requirements:
  wcag-technique:G1: # Adding a link at the top of each page that goes directly to the main content area
    forConformance: false
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
input_rules:
  - r18umj
  - 8a213c
acknowledgments:
  authors:
    - Jean-Yves Moyen
  assets:
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content]
- [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link]

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

This rule and [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] are best practices to satisfy [Success Criterion 2.4.1 Bypass blocks][sc241]. It is possible to satisfy it by other means. Therefore, this rule is not needed to pass rule [_Bypass blocks of repeated content_][bypass blocks].

- [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1]

Unless specified otherwise, the non-repeated content of each test case is its `main` element.

## Test Cases

### Passed

#### Passed Example 1

This [document][] passes rule [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<main id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 2

This [document][] passes rule [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

#### Passed Example 3

This [document][] passes rule [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

#### Passed Example 4

This [document][] passes rule [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

#### Passed Example 5

This [document][] passes rule [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

#### Passed Example 6

This [document][] passes rule [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

#### Passed Example 7

This [document][] passes rule [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

#### Passed Example 8

This [document][] passes rule [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

#### Passed Example 9

This [document][] passes rule [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

This [document][] fails both [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content] and [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

This [document][] fails both [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content] and [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

This [document][] fails both [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content] and [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

This [document][] fails both [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content] and [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

This [document][] fails both [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content] and [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

This [document][] fails both [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content] and [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

This [document][] fails both [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content] and [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

This [document][] fails both [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content] and [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

This [document][] fails both [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content] and [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

This [document][] fails both [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content] and [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

This [document][] fails both [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content] and [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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

This [document][] fails both [Document Has no Repeated Content Followed by Non-Repeated Content][no repeated content] and [First Focusable Element is Link to Non-Repeated Content][first focusable is skip link].

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
[bypass blocks]: https://act-rules.github.io/rules/cf77f2 'Rule Bypass Blocks of Repeated Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[first focusable is skip link]: https://act-rules.github.io/rules/8a213c 'Rule First Focusable Element is Link to Non-Repeated Content'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[no repeated content]: https://act-rules.github.io/rules/r18umj 'Rule Document Has no Repeated Content Followed by Non-Repeated Content'
[non-repeated content after repeated content]: #non-repeated-content 'Definition of Non-Repeated Content After Repeated Content'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation 'HTML definition of Sequential Focus Navigation'
[tech g1]: https://www.w3.org/WAI/WCAG21/Techniques/general/G1 'Technique G1: Adding a Link at the Top of each Page that Goes Directly to the Main Content Area'

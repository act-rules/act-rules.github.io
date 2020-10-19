---
id: b40fd1
name: HTML page has a main landmark
rule_type: atomic
description: |
  This rule checks that each page has an element with a semantic role of `main`
accessibility_requirements:
input_aspects:
  - Accessibility Tree
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
  assets:
    - _Romance of the Three Kingdoms_ by Luo Guanzhong, translation by Charles Henry Brewitt-Taylor (Tuttle Publishing, 1925, ISBN 9780804834674)
    - _Three Kingdoms_ by Luo Guanzhong, translation by Moss Roberts (Foreign Language Press, 1976, ISBN 7-119-00590-1)
    - _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)
---

## Applicability

This rule applies to any [HTML web page][].

## Expectations

Within the test target, there is at least one element for which all the following are true:

- the element has [semantic role][] of `main`; and
- the element is [included in the accessibility tree][].

## Assumptions

- This rule assumes that the `main` [landmark][] is correctly used to identify the [main block of content][] of the page.
- This rule assumes that [landmarks][landmark] are intended to users of Assistive Technologies and are not necessarily rendered in a visible way. Therefore, it does not require the main landmark to be [visible][]. Similarly, technique [ARIA11: Using ARIA landmarks to identify regions of a page][tech aria11] does not require landmarks to be [visible][] or have [visible][] content.

## Accessibility Support

Having a `main` [landmark][] is sufficient to pass [Success Criterion 2.4.1: Bypass blocks][sc241] by identifying the [main block of content][] of a page. However, this will only benefit users who can actually navigate using landmark roles (such a functionality is usually provided by assistive technologies, but could also be provided by browsers or browsers plugins). Users without any possibility for landmark navigation will be left without way of bypassing blocks of repeated content and will still experience accessibility issues. Therefore, it is recommended to provide other ways of bypassing blocks.

## Background

Authors SHOULD not use more than one element with a [semantic role][] of `main`. This is, however, not a requirement for this rule and can be valid in certain cases.

[Technique ARIA11: Using ARIA landmarks to identify regions of a page][tech aria11] only checks that landmarks are correctly used, but does not check whether landmarks could have been used and were omitted. Therefore, failing this rule (not having a `main` landmark) does not necessarily fail that technique, and it is not listed as an accessibility mapping.

- [Technique ARIA11: Using ARIA landmarks to identify regions of a page][tech aria11]
- [ARIA Landmarks Example](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html)
- [CSS scoping (work in progress)](https://drafts.csswg.org/css-scoping/)
- [The `main` role](https://www.w3.org/TR/wai-aria-1.1/#main)

## Test Cases

### Passed

#### Passed Example 1

In this [document][], the `main` element has a [semantic role][] of `main` and is [included in the accessibility tree][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
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

#### Passed Example 2

In this [document][] the `div` element has a [semantic role][] of `main` and is [included in the accessibility tree][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<div role="main">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 3

This [document][] has several elements with a role of `main`, at least one of them is [included in the accessibility tree][].

```html
<html>
	<head>
		<title>Comparing translations of the Romance of the Three Kingdoms, Chapter one</title>
	</head>
	<body>
		<main aria-label="Translation by Charles Henry Brewitt-Taylor (1925)" aria-hidden="true">
			<h1>Three Heroes Swear Brotherhood in the Peach Garden</h1>
			<p>
				The world under heaven, after a long period of division, tends to unite; after a long period of union, tends to
				divide.
			</p>
		</main>

		<main aria-label="Translation by Moss Roberts (1976)">
			<h1>Three Bold Spirits Plight Mutual Faith in the Peach Garden</h1>
			<p>The empire, long divided, must unite; long united, must divide. Thus it has ever been.</p>
		</main>

		<main aria-label="Translation by Yu Sumei (2014)" aria-hidden="true">
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

This [document][] has no element with a role of `main`.

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
		<p>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</p>
	</body>
</html>
```

#### Failed Example 2

This document has a `main` [landmark][], but it is not [included in the accessibility tree][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<main aria-hidden="true">
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

[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark_roles 'List of Landmark Roles'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[tech aria11]: https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11 'Technique ARIA11: Using ARIA Landmarks to Identify Regions of a Page'
[visible]: #visible 'Definition of Visible'
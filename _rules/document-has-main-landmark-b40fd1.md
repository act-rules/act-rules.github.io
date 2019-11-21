---
id: b40fd1
name: HTML page has a main landmark
rule_type: atomic
description: |
  This rule checks that each page has an element with a semantic role of `main`
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS styling
acknowledgements:
  authors:
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any [HTML web page][].

## Expectations

Within the test target, there is at least on element which:

- has [semantic role][] of [`main`][main]; and
- is [included in the accessiblity tree][].

**Note**: Authors SHOULD not use more than one element with a [semantic role][] of [`main`][main]. This is, however, a not a requirement for this rule and can be valid in certain cases.

**Note**: Technique [ARIA11: Using ARIA landmarks to identify regions of a page][tech aria11] does not require the use of landmarks, nor the use of a [`main`][main] one. It only requires that if landmarks are used they identify the correct [section of content][]. Hence it is not listed as an accessibility requirement for this rule. However, having a landmark to identify the primary content of a page is enough to satisfy [Success Criterion 2.4.1 Bypass blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html).

## Assumptions

- This rule assumes that the `main` landmark is correctly used to identify the primary content of the page.
- This rule assume that landmarks are intended to users of Assistive Technologies and are not necessarily rendered in a visible way. Therefore, it does not require the [`main`][main] landmark to be [visible][].

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [ARIA11: Using ARIA landmarks to identify regions of a page][tech aria11]
- [ARIA Landmarks Example](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html)
- [CSS scoping (work in progress)](https://drafts.csswg.org/css-scoping/)

## Test Cases

**Note**: Unless specified otherwise, the text of examples is from the translation of the first Chapter of _The Three Kingdoms_ by Yu Sumei (Tuttle publishing, May 2014).

### Passed

#### Passed Example 1

This [document][] has a one element with a [semantic role][] of [`main`][main].

```html
<html>
	<h1>Contents</h1>
	<!-- list of links to each chapter -->

	<main>
		<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Passed Example 2

This [document][] has several elements with a role of [`main`][main], one of them is [included in the accessibility tree][].

```html
<html>
	<head>
		<title>Comparing translations of the Romance of the Three Kingdoms, Chapter one</title>
	</head>
	<body>
		<h1>Contents</h1>
		<!-- list of links to each chapter -->

		<div role="main" aria-label="Translation by C. H. Brewitt-Taylor (1925)" aria-hidden="true">
			<h1>Three Heroes Swear Brotherhood in the Peach Garden</h1>
			The world under heaven, after a long period of division, tends to unite; after a long period of union, tends to
			divide.
		</div>

		<div role="main" aria-label="Translation by Moss Roberts (1976)">
			<h1>Three Bold Spirits Plight Mutual Faith in the Peach Garden</h1>
			The empire, long divided, must unite; long united, must divide. Thus it has ever been.
		</div>

		<div role="main" aria-label="Translation by Yu Sumei (2014)" aria-hidden="true">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</div>
	</body>
</html>
```

### Failed

#### Failed Example 1

This [document][] has no element with a role of [`main`][main].

```html
<html>
	<h1>Contents</h1>
	<!-- list of links to each chapter -->

	<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
	Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
	time.
</html>
```

#### Failed Example 2

The [`main`][main] landmark is not [included in the accessibility tree][].

```html
<html>
	<h1>Contents</h1>
	<!-- list of links to each chapter -->

	<main aria-hidden="true">
		<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
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

[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant 'Definition of descendant'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[document element]: https://dom.spec.whatwg.org/#document-element 'Definition of document element'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[main]: https://www.w3.org/TR/wai-aria-1.1/#main 'The `main` role'
[section of content]: #section-of-content 'Definition of section of content'
[semantic role]: #semantic-role 'Definition of semantic role'
[tech aria11]: https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11
[html web page]: #web-page-html 'Definition of web page (HTML)'

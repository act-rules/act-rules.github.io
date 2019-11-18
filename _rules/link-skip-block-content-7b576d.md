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

This rule applies to any [document][] where the [document element][] is an `html` element.

## Expectations

For each [section of repeated content][] within the test target, either the last element in the [flat tree][] which is both a [focusable][] element and before this [section of repeated content][], or the first element in the [flat tree][] which is both a [focusable][] element and inside this [section of repeated content][]:

- has a [semantic role][] of `link`; and
- is [included in the accessibility tree][]; and
- is [visible][] when [focused][]; and
- when activated, moves focus to the first element in the [flat tree][] that is both [focusable][] and after this [section of content][]; and
- has an [accessible name][] that communicates that it skips this [section of content][].

## Assumptions

This rule assumes that [sections of repeated content][section of repeated content] have already been identified within the test target, for example by comparison with other test targets within the same website, or any other means.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](https://www.w3.org/WAI/WCAG21/Techniques/general/G123)
- [CSS Scoping (work in progress)](https://drafts.csswg.org/css-scoping/)

## Test Cases

### Passed

#### Passed Example 1

Multiple [sections of repeated content][section of repeated content][] each have a first link element that when activated moves focus to the following [section of content][].

```html
<html lang="en">
	<head>
		<title></title>
	</head>
	<body>
		<main>
			<section id="section1" aria-label="Section 1 of page">
				<nav aria-label="Section 1 navigation">
					<a href="#section1Content">Skip section 1 navigation</a>
					<ul>
						<!-- Repeated section navigation -->
					</ul>
				</nav>
				<div id="#section1Content">
					<!-- Section content -->
				</div>
			</section>
			<section aria-label="Section 2 of page">
				<nav aria-label="Section 2 navigation">
					<a href="#section2Content">Skip section 2 navigation</a>
					<ul>
						<!-- Repeated section navigation -->
					</ul>
				</nav>
				<div id="section2Content">
					<!-- Section content -->
				</div>
			</section>
		</main>
	</body>
</html>
```

#### Passed Example 2

A link exist at the beginning of a [section of repeated content][] and when activated moves focus to the next [section of content][].

```html
<html lang="en">
	<head>
		<title></title>
	</head>
	<body>
		<nav>
			<div id="mainNav">
				<a href="#subNav">Skip main navigation links</a>
				<ul>
					<!-- Repeated main navigation links -->
				</ul>
			</div>
			<div id="subNav">
				<a href="#featuredAd">Skip sub navigation links</a>
				<ul>
					<!-- Repeated sub navigation links -->
				</ul>
			</div>
			<div id="featuredAd">
				<!-- Ad content -->
			</div>
		</nav>
	</body>
</html>
```

#### Passed Example 3

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

### Failed

#### Failed Example 1

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Failed Example 2

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Failed Example 3

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Failed Example 4

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
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
[document]: #https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[document element]: #https://dom.spec.whatwg.org/#document-element 'Definition of document element'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of focusable'
[focused]: #focused 'Definition of focused'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[section of content]: #section-of-content 'Definition of section of content'
[section of repeated content]: #repeated-content 'Definiton of section of repeated content'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'

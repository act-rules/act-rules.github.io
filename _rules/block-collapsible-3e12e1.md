---
id: 3e12e1
name: Block of content is expandable and collapsible
rule_type: atomic
description: |
  This rule checks that repeated blocks of content are expandable and collapsible
accessibility_requirements:
  wcag-technique:SCR28: # Using an expandable and collapsible menu to bypass block of content
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
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

For each [section of repeated content][] in the test target, there exists some [user interface component][] which:

- is [visible][]; and
- is [included in the accessibility tree][]; and
- allows to toggle both [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of this [section of repeated content][].

**Note**: the same [user interface component][] may be used for several or even all the [sections of repeated content][section of repeated content].

**Note**: [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] does not require the [accessible name][] of the [user interface component][] to be descriptive.

## Assumptions

This rule assumes that [sections of repeated content][section of repeated content] have already been identified within the test target, for example by comparison with other test targets within the same website, or any other means.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28]

## Test Cases

**Note**: The text of the examples is from the translation of the first Chapter of _The Three Kingdoms_ by Yu Sumei (Tuttle publishing, May 2014).

**Note**: Unless specified otherwise, the [sections of content][section of content] of each document are defined by the [landmarks][landmark] (`nav` and `main` elements), and the navigational [section of content][] (`nav` element) is a [section of repeated content][].

### Passed

#### Passed Example 1

The [visibility][visible] of the navigational [section of repeated content][] can be toggled on and off by the link at the start of the document.

```html
<html>
	<a href="#" onclick="toggleVisibility('navigation')">Toggle table of content</a>
	<nav id="navigation">
		<h1>Contents</h1>
		<!-- list of links to each chapter -->
	</nav>
	<main>
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Passed Example 2

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
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

#### Failed Example 5

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

[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[document element]: https://dom.spec.whatwg.org/#document-element 'Definition of document element'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark 'The landmark role in WAI ARIA'
[tech scr28]: https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28 'Technique SCR28: Using an expandable and collapsible menu to bypass block of content'
[section of content]: #section-of-content 'Definition of section of content'
[section of repeated content]: #section-of-repeated-content 'Definition of section of repeated content'
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components 'Definition of user interface component'
[visible]: #visible 'Definition of visible'
[html web page]: #web-page-html 'Definition of web page (HTML)'

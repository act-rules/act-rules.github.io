---
id: 8a213c
name: First focusable element is link to main content
rule_type: atomic
description: |
  This rule checks that the first focusable element is a link referring to the main content of the page
accessibility_requirements:
  wcag-technique:G1: # Adding a link at the top of each page that goes directly to the main content area
    forConformance: true
    failed: not satisfied
    passed: satisfied
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

## Expectation 1

The first [focusable][] element within the test target:

- is [included in the accessibility tree][]; and
- is [visible][] when [focused][]; and
- has a [semantic role][] of link; and
- when activated, moves focus to the [main content][] of the [document][]; and
- has either an [accessible name][] or [accessible description][] that communicates that it links to the [main content][].

## Assumptions

This rule assumes that any global dismissible information that only appears once per site has already been acknowledged and is not displayed any more.

**Note**: The aim of such link is to be able to skip repeated content (headers, navigation bar, ...) when viewing several pages of the same site. Many sites display a cookies policy banner which might be stealing focus until dismissed (usually by viewing and accepting cookies policy). Since that content is _not_ repeated (is it only shown once for the full site), it is not a problem to have it, and it may appear on any page of the site (depending where the user first comes in).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G1: Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG21/Techniques/general/G1)

## Test Cases

### Passed

#### Passed Example 1

The link to skip [repeated content](#repeated-content) is [visible][], is [included in the accessibility tree][], and when activated moves the focus to the [main content][] identified here by the `main` element.

```html
<html>
	<nav>
		<a href="#main-content">Skip to main content</a>
	</nav>
	<div id="repeated-content">
		<!-- Repeated Content -->
	</div>
	<main id="main-content">Main Content</main>
</html>
```

#### Passed Example 2

The link to skip [repeated content](#repeated-content) can be toggled to [visible][] through keyboard focus. When activated the focus is moved to the [main content][] identified here by the `main` element.

```html
<html>
	<head>
		<style>
			#skipNav a {
				height: 100px;
				position: absolute;
				top: -100px;
			}
			#skipNav a:focus {
				top: 0px;
			}
		</style>
	</head>
	<body>
		<nav id="skipNav">
			<a href="#main-content">Skip to main content</a>
		</nav>
		<div id="repeated-content">
			<!-- Repeated content -->
		</div>
		<main id="main-content">Main Content</main>
	</body>
</html>
```

#### Passed Example 3

The link to skip [repeated content](#repeated-content) has an `aria-label` attribute to provide an [accessible name][]. When activated focus is moved to the [main content][] identified here by the `main` element.

```html
<html>
	<nav>
		<a href="#main-content" aria-label="Skip to main content"></a>
	</nav>
	<div id="repeated-content">
		<!-- Repeated content -->
	</div>
	<main id="main-content">Main Content</main>
</html>
```

### Failed

#### Failed Example 1

There is no link to skip [repeated content](#repeated-content).

```html
<html>
	<div id="repeated-content">
		<!-- Repeated content -->
	</div>
	<main id="main-content">Main Content</main>
</html>
```

#### Failed Example 2

The link to skip [repeated content](#repeated-content) is not the first [focusable][] element within the `body`.

```html
<html>
	<a href="https://www.w3.org/">Check out the W3C</a>
	<nav>
		<a href="#main-content">Skip to main content</a>
	</nav>
	<div id="repeated-content">
		<!-- Repeated content -->
	</div>
	<main id="main-content">Main Content</main>
</html>
```

#### Failed Example 3

The link to skip [repeated content](#repeated-content) does not have an [accessible name][].

```html
<html>
	<nav>
		<a href="#main-content"></a>
	</nav>
	<div id="repeated-content">
		<!-- Repeated content -->
	</div>
	<main id="main-content">Main Content</main>
</html>
```

#### Failed Example 4

The link to skip [repeated content](#repeated-content) does not reference a valid `id` attribute and when activated will not move focus to the [main content][] identified here by the `main` element.

```html
<html>
	<nav>
		<a href="#invalidId">Skip to main content</a>
	</nav>
	<div id="repeated-content">
		<!-- Repeated content -->
	</div>
	<main id="main-content">Main Content</main>
</html>
```

#### Failed Example 5

The link to skip [repeated content](#repeated-content) is not [visible][], and is not included in the [accessibility tree][].

```html
<html>
	<nav>
		<a href="#main-content" style="display:none;">Skip to main content</a>
	</nav>
	<div id="repeated-content">
		<!-- Repeated content -->
	</div>
	<main id="main-content">Main Content</main>
</html>
```

#### Failed Example 6

The element with a click event to skip [repeated content](#repeated-content) does not have a [semantic role][] of link.

```html
<html>
	<nav>
		<span onclick="focusMainContent()">Skip to main content</span>
	</nav>
	<div id="repeated-content">
		<!-- Repeated content -->
	</div>
	<main id="main-content">Main Content</main>
	<script>
		function focusMainContent() {
			document.getElementById('main-content').focus()
		}
	</script>
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

[accessible description]: #accessible-description 'Definition of accessible description'
[accessible name]: #accessible-name 'Definition of accessible name'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[document element]: https://dom.spec.whatwg.org/#document-element 'Definition of document element'
[focusable]: #focusable 'Definition of focusable'
[focused]: https://html.spec.whatwg.org/#focused 'Definition of focused'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[main content]: #main-content 'Definition of main content'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'

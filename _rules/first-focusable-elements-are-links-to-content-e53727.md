---
id: e53727
name: First focusable elements are links to sections of content
rule_type: atomic
description: |
  This rule checks that the first focusable elements are links referring to sections of content on the same page
accessibility_requirements:
  wcag-technique:G124: # Adding links at the top of the page to each area of the content
    forConformance: false
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS styling
authors:
  - Jean-Yves Moyen
  - Anne Thyme Nørregard
  - Christina Adams
---

## Applicability

This rule applies to any [document](#https://dom.spec.whatwg.org/#concept-document) where the [document element](#https://dom.spec.whatwg.org/#document-element) is an HTML `html` element.

## Expectation 1

There is an [initial segment](#initial-segment) of the [focusable](#focusable) elements (in focus order) such that each element in that [initial segment](#initial-segment):

- is [included in the accessibility tree](#included-in-the-accessibility-tree); and
- is [visible](#visible) when [focused](#focused); and
- has a [semantic role](#semantic-role) of link; and
- when activated, moves focus to a [section of content](#section-of-content) within the same [document](#https://dom.spec.whatwg.org/#concept-document); and
- has either an [accessible name](#accessible-name) or [accessible description](#accessible-description) that communicates that it links to that specific [section of content](#section-of-content).

**Note**: There is no requirement on how many [focusable](#focusable) elements are part of that [initial segment](#initial-segment), nor any requirement to provide a way to determine (programatically or not) where that [initial segment](#initial-segment) stops. Technique [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124), and this rule, only require that such an set exists.

**Editorial note**: An attempt to clarify what this initial segment has to be is done in the second expectation: it must contain exactly one link for each section of content in the page. I am still not very happy with the formulation, nor with the order of these two expectations. Any suggestions to improve that are welcome…

## Expectation 2

Each [section of content](#section-of-content) in the [document](#https://dom.spec.whatwg.org/#concept-document) is the target of exactly one link from the set of [focusable](#focusable) elements that passes Expectation 1.

## Assumptions

This rule assumes that any global dismissible information that only appears once per site has already been acknowledged and is not displayed any more.

**Note**: The aim of such links is to be able to skip repeated content (headers, navigation bar, ...) when viewing several pages of the same site. Many sites display a cookies policy banner which might be stealing focus until dismissed (usually be viewing and accepting cookies policy). Since that content is _not_ repeated (is it only shown once for the full site), it is not a problem to have it, and it may appear on any page of the site (depending where the user first comes in).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

**Editorial note**: In its current state, the definition of [section of content](#section-of-content) would include, _e.g._ an advertising sidebar as a specific section of content. However, it is not clear that the lack of link to it would be a breach of G124 or SC 2.4.1… Idea?

## Background

- [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124)

## Test Cases

### Passed

#### Passed Example 1

Links in the [initial segment](#initial-segment) list have a [semantic role](#semantic-role) of link, are [visible](#visible) and when activated moves the focus to the associated [section of content](#section-of-content).

```html
<ul>
	<li><a href="#navigation">Skip to navigation</a></li>
	<li><a href="#search">Skip to search</a></li>
	<li><a href="#main">Skip to main content</a></li>
</ul>
<nav id="navigation">Navigation section</nav>
<form id="search" role="search">Search section</form>
<main id="main">Main content</main>
```

#### Passed Example 2

Links in the [initial segment](#initial-segment) list are [visible](#visible) when [focused](#focused).

```html
<style>
	#skiplinks a {
		position: absolute;
		top: -100px;
	}
	#skiplinks a:focus {
		top: 0px;
	}
</style>
<ul>
	<li><a href="#navigation">Skip to navigation</a></li>
	<li><a href="#search">Skip to search</a></li>
	<li><a href="#main">Skip to main content</a></li>
</ul>
<nav id="navigation">Navigation section</nav>
<form id="search" role="search">Search section</form>
<main id="main">Main content</main>
```

#### Passed Example 3

Links in the [initial segment](#initial-segment) list move the focus to heading elements when activated.

```html
<ul>
	<li><a href="#firstheading">First heading</a></li>
	<li><a href="#secondheading">Second heading</a></li>
</ul>
<h2 id="firstheading">First heading section</h2>
<h2 id="secondheading">Second heading section</h2>
```

#### Passed Example 4

Links in the [initial segment](#initial-segment) list use `aria-label` to provide an [accessible name](#accessible-name).

```html
<ul>
	<li><a href="#navigation" aria-label="Skip to navigation"></a></li>
	<li><a href="#search" aria-label="Skip to search"></a></li>
	<li><a href="#main" aria-label="Skip to main content"></a></li>
</ul>
<nav id="navigation">Navigation section</nav>
<form id="search" role="search">Search section</form>
<main id="main">Main content</main>
```

### Failed

#### Failed Example 1

The first [focusable](#focusable) elements in the [initial segment](#initial-segment) of the document do not have a [semantic role](#semantic-role) of link.

```html
<ul>
	<li onClick="focusContentSection('navigation')" tabindex="0">Skip to navigation</li>
	<li onClick="focusContentSection('search')" tabindex="0">Skip to search</li>
	<li onClick="focusContentSection('main')" tabindex="0">Skip to main</li>
</ul>
<nav id="navigation">Navigation section</nav>
<form id="search" role="search">Search section</form>
<main id="main">Main content</main>
<script>
	function focusContentSection(elem) {
		var elemId = document.getElementById(elem)
		elemId.focus()
	}
</script>
```

#### Failed Example 2

Each [focusable](#focusable) element in the [initial segment](#initial-segment) of the document does not have a [semantic role](#semantic-role) of link.

```html
<ul>
	<li><a href="#navigation">Skip to navigation</a></li>
	<li><a href="#search">Skip to search</a></li>
	<li onClick="focusContentSection('main')" tabindex="0">Skip to main</li>
</ul>
<nav id="navigation">Navigation section</nav>
<form id="search" role="search">Search section</form>
<main id="main">Main content</main>
<script>
	function focusContentSection(elem) {
		var elemId = document.getElementById(elem)
		elemId.focus()
	}
</script>
```

#### Failed Example 3

Links in the [initial segment](#initial-segment) list when activated do not move the focus to a [section of content](#section-of-content) due to invalid `href` attributes.

```html
<ul>
	<li><a href="#">Skip to navigation</a></li>
	<li><a href="https://www.w3.org/">Skip to search</a></li>
	<li><a href="javascript:void(0);">Skip to main content</a></li>
</ul>
<nav id="navigation">Navigation section</nav>
<form id="search" role="search">Search section</form>
<main id="main">Main content</main>
```

#### Failed Example 4

Links in the [initial segment](#initial-segment) list do not move focus to a [section of content](#section-of-content) when activated due to invalid `id` attributes.

```html
<ul>
	<li><a href="#navigation" aria-label="Skip to navigation"></a></li>
	<li><a href="#search" aria-label="Skip to search"></a></li>
	<li><a href="#main" aria-label="Skip to main content"></a></li>
</ul>
<nav>Navigation section</nav>
<form role="search">Search section</form>
<main>Main content</main>
```

#### Failed Example 5

Links in the [initial segment](#initial-segment) list are not the first [focusable](#focusable) elements in the document.

```html
<a href="https://www.w3.org/">Go to the W3C</a>
<ul>
	<li><a href="#navigation">Skip to navigation</a></li>
	<li><a href="#search">Skip to search</a></li>
	<li><a href="#main">Skip to main content</a></li>
</ul>
<nav id="navigation">Navigation section</nav>
<form id="search" role="search">Search section</form>
<main id="main">Main content</main>
```

#### Failed Example 6

Links in the [initial segment](#initial-segment) list are not [visible](#visible) when [focused](#focused).

```html
<ul style="display:none;" id="skiplinks">
	<li><a href="#navigation">Skip to navigation</a></li>
	<li><a href="#search">Skip to search</a></li>
	<li><a href="#main">Skip to main content</a></li>
</ul>
<nav id="navigation">Navigation section</nav>
<form id="search" role="search">Search section</form>
<main id="main">Main content</main>
```

#### Failed Example 7

Links in the [initial segment](#initial-segment) list do not have an [accessible name](#accessible-name).

```html
<ul>
	<li><a href="#navigation"></a></li>
	<li><a href="#search"></a></li>
	<li><a href="#main"></a></li>
</ul>
<nav id="navigation">Navigation section</nav>
<form id="search" role="search">Search section</form>
<main id="main">Main content</main>
```

#### Failed Example 8

Multiple links in the [initial segment](#initial-segment) list move the focus to the same [section of content](#section-of-content).

```html
<ul>
	<li><a href="#navigation">Skip to navigation</a></li>
	<li><a href="#search">Skip to search</a></li>
	<li><a href="#main">Skip to main content</a></li>
	<li><a href="#main">Skip to main content again with this link</a></li>
</ul>
<nav id="navigation">Navigation section</nav>
<form id="search" role="search">Search section</form>
<main id="main">Main content</main>
```

### Inapplicable

#### Inapplicable Example 1

The [document element](#https://dom.spec.whatwg.org/#document-element) of this [document](#https://dom.spec.whatwg.org/#concept-document) is not an `html` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

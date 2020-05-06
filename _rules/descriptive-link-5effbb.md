---
id: 5effbb
name: Link in context is descriptive
rule_type: atomic
description: |
  This rule checks that the accessible name of a link together with its context describe its purpose.
accessibility_requirements:
  wcag20:2.4.4: # Link Purpose (In Context)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:2.4.9: # Link Purpose (Link Only)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - DOM Tree
  - CSS Styling
  - Language
acknowledgments:
  authors:
    - Carlos Duarte
    - Marie Trudelle
    - Ramit Garg
---

## Applicability

This rule applies to any HTML or SVG element which

- has the [semantic role][] of ['link'][link] or a [semantic role][] that inherits from the ['link'][link] role; and
- is [included in the accessibility tree][]; and
- has a non-empty ("") [accessible name][].

## Expectation

The [accessible name][] of each target element together with its [programmatically determined link context][] describe the purpose of the link.

## Assumptions

- This rule assumes that the purpose of the link is not ambiguous to users in general when seen in context on the web page, which is the exception mentioned in success criterion [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html). If the link is ambiguous to users in general, users of assistive technologies are not at a disadvantage when viewing the link out of context which makes it more of a general user experience concern than an accessibility issue.
- This rule assumes that all elements with the [semantic role][] of ['link'][link] are used as links.

## Accessibility Support

- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `link` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

- [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html)
- [2.4.9 Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html)
- [G91: Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG21/Techniques/general/G91)
- [H30: Providing link text that describes the purpose of a link for anchor elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H30)
- [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/WAI/WCAG21/Techniques/html/H24)
- [G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G53)
- [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA7)
- [ARIA8: Using aria-label for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8)
- [H77: Identifying the purpose of a link using link text combined with its enclosing list item](https://www.w3.org/WAI/WCAG21/Techniques/html/H77)
- [H78: Identifying the purpose of a link using link text combined with its enclosing paragraph](https://www.w3.org/WAI/WCAG21/Techniques/html/H78)
- [H79: Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells](https://www.w3.org/WAI/WCAG21/Techniques/html/H79)
- [H81: Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested](https://www.w3.org/WAI/WCAG21/Techniques/html/H81)

## Test Cases

### Passed

#### Passed Example 1

The [accessible name][] (from the link's text) describes the purpose of the link.

```html
<a href="#desc">See the description of this product.</a>

<p id="desc">This product consists of several web pages.</p>
```

#### Passed Example 2

The [accessible name][] describes the purpose of the link.

```html
<a href="#main"><img src="/test-assets/5effbb/main.png" alt="Go to the main content"/></a>

<main>
	<p id="main">This is the main content.</p>
</main>
```

#### Passed Example 3

The [accessible name][] (from the link's text), together with its [programmatically determined link context][] (available from the text in the closest `p` ancestor), describes the purpose of the link.

```html
<p>See the description of <a href="#desc">this product</a>.</p>

<p id="desc">This product consists of several web pages.</p>
```

#### Passed Example 4

The [accessible name][] (from the link's text) describes the purpose of the link.

```html
<span role="link" tabindex="0" onclick="document.location+='#desc'">See description of the product.</span>

<p id="desc">This product consists of several web pages.</p>
```

#### Passed Example 5

The [programmatically determined link context][] (provided by the ancestor with a role of `listitem` and text "Ulysses") and the [accessible name][] (from the link's text) describe the purpose of the links.

```html
<ul>
	<li>
		Ulysses
		<ul>
			<li><a href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm"> HTML </a></li>
			<li>
				<a href="https://www.gutenberg.org/ebooks/4300.epub.images?session_id=04cd710372888de8d8d322215cdfe8ce5b0f8d73">
					EPUB
				</a>
			</li>
			<li><a href="https://www.gutenberg.org/files/4300/4300-0.txt"> Plain text </a></li>
		</ul>
	</li>
</ul>
```

#### Passed Example 6

The [programmatically determined link context][] (provided by the table header [assigned](https://html.spec.whatwg.org/multipage/tables.html#algorithm-for-assigning-header-cells) to the cell containing the link) and the [accessible name][] (from the link's text) describe the purpose of the links.

```html
<table>
	<tr>
		<th colspan="3">Ulysses</th>
	</tr>
	<tr>
		<td><a href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm">HTML</a></td>
		<td>
			<a href="https://www.gutenberg.org/ebooks/4300.epub.images?session_id=04cd710372888de8d8d322215cdfe8ce5b0f8d73"
				>EPUB</a
			>
		</td>
		<td><a href="https://www.gutenberg.org/files/4300/4300-0.txt">Plain text</a></td>
	</tr>
</table>
```

#### Passed Example 7

The [accessible name][] describes the purpose of the link.

```html
<p id="instructions">Click on the arrow to go to the main content.</p>
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0">
	<a href="#main" aria-labelledby="instructions">
		<path
			style="fill:#1E201D;"
			d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
			C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
			c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
		/>
	</a>
</svg>

<main>
	<p id="main">This is the main content.</p>
</main>
```

#### Passed Example 8

The [programmatically determined link context][] (provided by the cell containing the link) and the [accessible name][] (from the link's text) describe the purpose of the links.

```html
<table>
	<tr>
		<td>
			Download Ulysses in
			<a href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm">HTML</a>
		</td>
		<td>
			Download Ulysses in
			<a href="https://www.gutenberg.org/ebooks/4300.epub.images?session_id=04cd710372888de8d8d322215cdfe8ce5b0f8d73"
				>EPUB</a
			>
		</td>
	</tr>
</table>
```

#### Passed Example 9

The [programmatically determined link context][] (provided by the element referenced by the `aria-describedby` attribute) and the [accessible name][] (from the link's text) describe the purpose of the links.

```html
<h2 id="rule">Button has accessible name</h2>
<ul>
	<li><a href="https://act-rules.github.io/rules/97a4e1#applicability" aria-describedby="rule">Applicability</a></li>
	<li><a href="https://act-rules.github.io/rules/97a4e1#expectation" aria-describedby="rule">Expectation</a></li>
</ul>
```

### Failed

#### Failed Example 1

The [accessible name][] (from the link's text), together with the absence of [programmatically determined link context][], does not describe the purpose of the link.

```html
<a href="#desc">More</a>

<p id="desc">This product consists of several web pages.</p>
```

#### Failed Example 2

The [accessible name][] (from the link's text), together with the absence of [programmatically determined link context][], does not describe the purpose of the link.

```html
<div role="link" tabindex="0" onclick="document.location+='#main'">More</div>

<main>
	<p id="main">This is the main content.</p>
</main>
```

#### Failed Example 3

The [accessible name][] (from the link's text), together with the absence of [programmatically determined link context][], does not describe the purpose of the link.

```html
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0">
	<a href="#main">
		<text x="20" y="20">
			Go
		</text>
	</a>
</svg>

<main>
	<p id="main">This is the main content.</p>
</main>
```

#### Failed Example 4

The [accessible name][] (from the link's text) does not describe the purpose of the link. The other information available on the page is not [programmatically determined link context][] because it is in a different `p` element.

```html
<p>
	The W3C held a workshop on June 9-10, 2005 at DERI Innsbruck (Austria), to gather information about potential
	standardization work on Semantics in Web Services.
</p>

<p><a href="https://www.w3.org/2005/04/FSWS/workshop-report.html">Workshop</a></p>
```

#### Failed Example 5

The [accessible name][] (from the link's text) does not describe the purpose of the link. The other information available on the page is not [programmatically determined link context][] because it is outside the list where the links are.

```html
<p style="font-weight: bold">Ulysses</p>
<ul>
	<li><a href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm"> HTML </a></li>
	<li>
		<a href="https://www.gutenberg.org/ebooks/4300.epub.images?session_id=04cd710372888de8d8d322215cdfe8ce5b0f8d73">
			EPUB
		</a>
	</li>
	<li><a href="https://www.gutenberg.org/files/4300/4300-0.txt"> Plain text </a></li>
</ul>
```

#### Failed Example 6

The [accessible name][] (from the link's text) does not describe the purpose of the link. The other information available on the page is not [programmatically determined link context][] because it not available on the same cell of the link or in a header cell for that cell.

```html
<table>
	<tr>
		<th colspan="3">Books</th>
	</tr>
	<tr>
		<td>Ulysses</td>
		<td><a href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm">Download</a></td>
		<td>1.61MB</td>
	</tr>
</table>
```

### Inapplicable

#### Inapplicable Example 1

An `a` element with its [semantic role][] changed from `link` to another role.

```html
<a href="http://www.w3.org/WAI" role="button">Web Accessibility Initiative (WAI)</a>
```

#### Inapplicable Example 2

The `link` element is not [included in the accessibility tree][].

```html
<a href="http://www.w3.org/WAI" style="display: none;"
	><img src="/test-assets/5effbb/cart.svg" alt="Checkout" />Checkout</a
>
```

#### Inapplicable Example 3

An `a` element without the [semantic role][] `link`.

```html
<a>placeholder</a>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[link]: https://www.w3.org/TR/wai-aria/#link
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically determined link context]: #programmatically-determined-link-context 'Definition of programmatically determined link context'
[semantic role]: #semantic-role 'Definition of semantic role'

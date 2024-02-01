---
id: aizyf1
name: Link is descriptive
rule_type: atomic
description: |
  This rule checks that the accessible name of a link describes its purpose.
accessibility_requirements:
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
    - Jean-Yves Moyen
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [inheriting semantic][] `link` for which all the following is true:

- the link is [included in the accessibility tree][]; and
- the link has a non-empty (`""`) [accessible name][].

## Expectation

Each test target has an [accessible name][] which describes its purpose.

## Assumptions

- This rule assumes that the purpose of the link is not ambiguous to users in general when seen in context on the web page, which is the exception mentioned in [Success Criterion 2.4.9 Link Purpose (Link Only)][sc249]. If the link is ambiguous to users in general, users of assistive technologies are not at a disadvantage when viewing the link out of context.
- This rule assumes that all [semantic][semantic role] `link` elements are used as links. An element marked up as a link, but that does not behave as a link would not fail [Success Criterion 2.4.9 Link Purpose (Link Only)][sc249].

## Accessibility Support

- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some [semantic][semantic role] `link` elements can fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

### Related rules

- [Link has non-empty accessible name](https://www.w3.org/WAI/standards-guidelines/act/rules/c487ae/)

### Bibliography

- [Understanding Success Criterion 2.4.9: Link Purpose (Link Only)][usc249]
- [G91: Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG22/Techniques/general/G91)
- [H30: Providing link text that describes the purpose of a link for anchor elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H30)
- [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/WAI/WCAG22/Techniques/html/H24)
- [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA7)
- [ARIA8: Using aria-label for link purpose](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8)

## Test Cases

### Passed

#### Passed Example 1

This `a` element has an [accessible name][] from its text that describes its purpose.

```html
<a href="#desc">See the description of this product.</a>

<p id="desc">This product consists of several web pages.</p>
```

#### Passed Example 2

This `a` element has an [accessible name][] from the `alt` attribute on its `img` element that describes its purpose.

```html
<a href="#main"><img src="/test-assets/5effbb/main.png" alt="Go to the main content"/></a>

<main>
	<p id="main">This is the main content.</p>
</main>
```

#### Passed Example 3

This `span` element has an [explicit role][] of `link` and an [accessible name][] from its text that describes its purpose.

```html
<span role="link" tabindex="0" onclick="document.location+='#desc'">See description of the product.</span>

<p id="desc">This product consists of several web pages.</p>
```

#### Passed Example 4

This `a` element has an [accessible name][] from its `aria-labelledby` attribute that describes its purpose.

```html
<p id="instructions">Go to the main content.</p>
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

### Failed

#### Failed Example 1

This link has an [accessible name][] which does not describe its purpose.

```html
<a href="#desc">More</a>

<p id="desc">This product consists of several web pages.</p>
```

#### Failed Example 2

This link has an [accessible name][] which does not describe its purpose.

```html
<div role="link" tabindex="0" onclick="document.location+='#main'">More</div>

<main>
	<p id="main">This is the main content.</p>
</main>
```

#### Failed Example 3

This link has an [accessible name][] which does not describe its purpose.

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

This link has an [accessible name][] which, alone, does not describe its purpose.

```html
<p>See the description of <a href="#desc">this product</a>.</p>

<p id="desc">This product consists of several web pages.</p>
```

#### Failed Example 5

These links have [accessible names][accessible name] which, alone, do not describe their purpose.

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

### Inapplicable

#### Inapplicable Example 1

There is no [inheriting semantic][] `link` in this document.

```html
<a href="https://www.w3.org/WAI" role="button">Web Accessibility Initiative (WAI)</a>
```

#### Inapplicable Example 2

This link is not [included in the accessibility tree][].

```html
<a href="https://www.w3.org/WAI" style="display: none;"
	><img src="/test-assets/5effbb/cart.svg" alt="Checkout" />Checkout</a
>
```

#### Inapplicable Example 3

There is no [inheriting semantic][] `link` in this document (`a` element without an `href` attribute do not have a role of `link`).

```html
<a>placeholder</a>
```

[accessible name]: #accessible-name 'Definition of Accessible Name'
[explicit role]: #explicit-role 'Definition of Explicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[inheriting semantic]: #inheriting-semantic 'Definition of Inheriting Semantic Role'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sc249]: https://www.w3.org/TR/WCAG22/#link-purpose-link-only 'Success Criterion 2.4.9: Link Purpose (Link Only)'
[usc249]: https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html 'Understanding Success Criterion 2.4.9: Link Purpose (Link Only)'

---
id: b20e66
name: Links with identical accessible names serve equivalent purpose
rule_type: atomic
description: |
  This rule checks that links with identical accessible names resolve to the same resource or equivalent resources.
accessibility_requirements:
  wcag20:2.4.9: # Link Purpose (Link Only) (AAA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
authors:
  - Anne Thyme Nørregaard
---

## Applicability

This rule applies to any set of any two or more HTML or SVG elements which
- are inside the same [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress); and 
- are [included in the accessibility tree](#included-in-the-accessibility-tree); and 
- have the [semantic role](#semantic-role) of `link`, or a role that inherits from the `link` role; and
- that have [matching](#matching-characters) [accessible names](#accessible-name) that do not only consist of [whitespace](#whitespace).

**Note:** The test target for this rule is the full set of link elements that share the same [matching](#matching-characters) [accessible name](#accessible-name).

## Expectation

When followed, the links in each set of target elements resolve to the [same resource](#same-resource) or to [equivalent resources](#equivalent-resource). Resolving the links includes potential redirects, if the redirects happen instantly.

## Assumptions

This rule assumes that the purpose of the links with identical accessible names would not be ambiguous to users in general when seen in context on the web page, which is the exception mentioned in success criterion [2.4.9 Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html). If the links are ambiguous to users in general, users of assistive technologies are not at a disadvantage when viewing the links out of context, e.g. on a list of links in a screen reader, which makes it more of a general user experience concern than an accessibility issue.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html)
- [URL parsing](https://www.w3.org/TR/html52/infrastructure.html#parsing-urls)

## Test Cases

### Passed

#### Passed Example 1

A set of two HTML `a` elements that have the same accessible name and link to the same resource.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
```

#### Passed Example 2

A set of two HTML `a` elements that both resolve to same resource after instant redirect.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect.html">Contact us</a>
```

#### Passed Example 3

These two links resolve to resources that are not the same (different URLs), but the resources are completely identical, thus serving the same purpose.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index-copy.html">Contact us</a>
```

#### Passed Example 4

These two links go to pages where the content section is the same, but where the navigation options (bread crumbs and local sub menus) differ due to different placement in navigation hierarchy.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/careers/contact.html">Contact us</a>
```

#### Passed Example 5

These two HTML `a` elements link to URLs that differ due to trailing slashes, but resolve to the same resource after redirects caused by user agent.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/">Contact us</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66">Contact us</a>
```

#### Passed Example 6

These two links go to pages that contain different amounts of information and/or differently worded information, but fulfil the same purpose in relation to the link.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html">Call us</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html">Call us</a>
```

#### Passed Example 7

These two links go to pages that have the same advertised key content but use different layouts.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html">Contact us</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page3.html">Contact us</a>
```

#### Passed Example 8

These two HTML `span` element have an [explicit role](#explicit-role) of link, and lead to the same resource.

```html
<span
	role="link"
	tabindex="0"
	onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html'"
>
	Link text
</span>

<span
	role="link"
	tabindex="0"
	onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html'"
>
	Link text
</span>
```

#### Passed Example 9

A set of two SVG `<a>` elements that have the same accessible name and link to the same resource.

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<a href="http://facebook.com" aria-label="Follow us">
		<circle cx="50" cy="40" r="35" />
	</a>

	<a href="http://facebook.com">
		<text x="50" y="90" text-anchor="middle">
			Follow us
		</text>
	</a>
</svg>
```

### Failed

#### Failed Example 1

Both links have the same accessible name but go to different resources.

```html
<a href="http://facebook.com">Follow us</a> <a href="http://twitter.com">Follow us</a>
```

#### Failed Example 2

The same accessible name is used for two links going to web pages that are similar, but have different information in their content.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a>
```

#### Failed Example 3

These two HTML `span` element have an [explicit role](#explicit-role) of link, but lead to resources that offer different content.

```html
<span
	role="link"
	tabindex="0"
	onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html'"
>
	Link text
</span>

<span
	role="link"
	tabindex="0"
	onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html'"
>
	Link text
</span>
```

#### Failed Example 4

The same accessible name is used for image links going to different resources.

```html
<a href="http://facebook.com"><img src="facebook.jpg" alt="Follow us"/></a>
<a href="http://twitter.com"><img src="twitter.jpg" alt="Follow us"/></a>
```

#### Failed Example 5

A set of two SVG `<a>` elements that have the same accessible name but link to different resources.

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<a href="http://facebook.com" aria-label="Follow us">
		<circle cx="50" cy="40" r="35" />
	</a>

	<a href="http://twitter.com">
		<text x="50" y="90" text-anchor="middle">
			Follow us
		</text>
	</a>
</svg>
```

#### Failed Example 6

Both links resolve to same resource after redirect, but the redirect is not instant.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect1.html">Contact us</a>
```

### Inapplicable

#### Inapplicable Example 1

These `a` and `area` elements have no `href` attribute.

```html
<a>Link text</a> <area aria-label="Link text" />
```

#### Inapplicable Example 2

These links have different accessible names.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html"
	>Contact main office</a
>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html"
	>Contact admissions office</a
>
```

#### Inapplicable Example 3

The first link is not included in the accessibility tree.

```html
<a
	href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html"
	aria-hidden="true"
	tabindex="-1"
	>Contact Us</a
>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/pabe2.html">Contact Us</a>
```

#### Inapplicable Example 4

These `span` elements do not have a semantic role of link.

```html
<span onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html'">
	Contact Us
</span>

<span onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html'">
	Contact Us
</span>
```

#### Inapplicable Example 5

These links do not have accessible names.

```html
<a href="http://facebook.com"></a> <a href="http://twitter.com"></a>
```

#### Inapplicable Example 6

These image links do not have accessible names.

```html
<a href="http://facebook.com"><img src="facebook.jpg"/></a> <a href="http://twitter.com"><img src="twitter.jpg"/></a>
```

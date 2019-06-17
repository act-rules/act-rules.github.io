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

This rule applies to any set of any two or more HTML or SVG elements that have the [semantic role](#semantic-role) of `link`, or a role that inherits from the `link` role, are [included in the accessibility tree](#included-in-the-accessibility-tree), and that have [matching](#matching-characters) [accessible names](#accessible-name) that do not only consist of [whitespace](#whitespace).

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

A set of two HTML `<a>` elements have the same accessible name and link to the same resource.

```html
<a href="/test-assets/6cbcbe/index.html">Contact us</a>
<a href="/test-assets/6cbcbe/index.html">Contact us</a>
```

#### Passed Example 2

Links resolves to same resource after instant redirect:

```html
<a href="/test-assets/6cbcbe/index.html">Contact us</a>
<a href="/test-assets/6cbcbe/redirect.html">Contact us</a>
```

#### Passed Example 3

Resources are not the same, since the links resolve to different URLs, but the resources are completely identical, thus serving the same purpose:

```html
<a href="/test-assets/6cbcbe/index.html">Contact us</a>
<a href="/test-assets/6cbcbe/index-copy.html">Contact us</a>
```

#### Passed Example 4

Same link text used for links going to pages where the content section is the same, but where the navigation options (bread crumbs and local sub menus) differ due to different placement in navigation hierarchy:

```html
<a href="/test-assets/6cbcbe/about/contact.html">Contact us</a>
<a href="/test-assets/6cbcbe/careers/contact.html">Contact us</a>
```

#### Passed Example 5

URLs differ due to trailing slashes, but resolves to the same resource after redirects caused by user agent:

```html
<a href="/test-assets/6cbcbe/">Contact us</a>
<a href="/test-assets/6cbcbe">Contact us</a>
```

#### Passed Example 6

Pages contain different amounts of information and/or differently worded information, but fulfil the same purpose in relation to the link:

```html
<a href="/test-assets/6cbcbe/page1.html">Call us</a>
<a href="/test-assets/6cbcbe/page2.html">Call us</a>
```

#### Passed Example 7

Pages have the same advertised key content but use different layouts:

```html
<a href="/test-assets/6cbcbe/page1.html">Contact us</a>
<a href="/test-assets/6cbcbe/page3.html">Contact us</a>
```

#### Passed Example 8

Links created via scripting with explicit role of link, but lead to the same resource:

```html
<span
	role="link"
	tabindex="0"
	onclick="location='/test-assets/6cbcbe/index.html'"
>
	Link text
</span>

<span
	role="link"
	tabindex="0"
	onclick="location='/test-assets/6cbcbe/index.html'"
>
	Link text
</span>
```

#### Passed Example 9

A set of two SVG `<a>` elements have the same accessible name and link to the same resource.

```html
<svg
	viewBox="0 0 100 100"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
>
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

Same accessible name used for links going to different resources:

```html
<a href="http://facebook.com">Follow us</a>
<a href="http://twitter.com">Follow us</a>
```

#### Failed Example 2

Same accessible name used for links going to web pages that are similar, but have different information in their content:

```html
<a href="/test-assets/6cbcbe/about/contact.html">Contact us</a>
<a href="/test-assets/6cbcbe/admissions/contact.html">Contact us</a>
```

#### Failed Example 3

Links created via scripting with explicit role of link, but lead to resources that offer different content:

```html
<span
	role="link"
	tabindex="0"
	onclick="location='/test-assets/6cbcbe/about/contact.html'"
>
	Link text
</span>

<span
	role="link"
	tabindex="0"
	onclick="location='/test-assets/6cbcbe/admissions/contact.html'"
>
	Link text
</span>
```

#### Failed example 4

Same accessible name used for image links going to different resources:

```html
<a href="http://facebook.com"><img src="facebook.jpg" alt="Follow us"/></a>
<a href="http://twitter.com"><img src="twitter.jpg" alt="Follow us"/></a>
```

#### Failed Example 5

A set of two SVG `<a>` elements have the same accessible name but link to different resources:

```html
<svg
	viewBox="0 0 100 100"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
>
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

Links resolves to same resource after redirect, but the redirect is not instant:

```html
<a href="/test-assets/6cbcbe/index.html">Contact us</a>
<a href="/test-assets/6cbcbe/redirect1.html">Contact us</a>
```

### Inapplicable

#### Inapplicable Example 1

´a´ and ´area´ elements without ´href´ attribute:

```html
<a>Link text</a> <area aria-label="Link text" />
```

#### Inapplicable Example 2

Links with different accessible names:

```html
<a href="/test-assets/6cbcbe/about/contact.html">Contact main office</a>
<a href="/test-assets/6cbcbe/admissions/contact.html"
	>Contact admissions office</a
>
```

#### Inapplicable Example 3

Link is not included in the accesssibility tree:

```html
<a href="/test-assets/6cbcbe/page1.html" aria-hidden="true" tabindex="-1"
	>Contact Us</a
>
<a href="/test-assets/6cbcbe/pabe2.html">Contact Us</a>
```

#### Inapplicable example 4

Links created via scripting, but without the semantic role of link:

```html
<span onclick="location='/test-assets/6cbcbe/page1.html'">
	Contact Us
</span>

<span onclick="location='/test-assets/6cbcbe/page2.html'">
	Contact Us
</span>
```

#### Inapplicable Example 5

Links do not have accessible names:

```html
<a href="http://facebook.com"></a> <a href="http://twitter.com"></a>
```

#### Inapplicable Example 6

Image links do not have accessible names:

```html
<a href="http://facebook.com"><img src="facebook.jpg"/></a>
<a href="http://twitter.com"><img src="twitter.jpg"/></a>
```

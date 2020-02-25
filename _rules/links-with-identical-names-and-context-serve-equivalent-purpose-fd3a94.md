---
id: fd3a94
name: Links with identical accessible names and context serve equivalent purpose
rule_type: atomic
description: |
  This rule checks that links with identical accessible names and context resolve to the same resource or equivalent resources.
accessibility_requirements:
  wcag20:2.4.4: # Link Purpose (In Context) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Language
acknowledgements:
  authors:
    - Anne Thyme Nørregaard
    - Carlos Duarte
---

## Applicability

This rule applies to any set of any two or more HTML or SVG elements which

- have the [semantic role][] of `link`, or a role that inherits from the `link` role; and
- are in the same [web page (HTML)][]; and
- are [included in an accessibility tree][included in the accessibility tree]; and
- that have [matching][] [accessible names][accessible name] that are not empty (`""`); and
- that have the same [programmatically determined link context][].

**Note:** The test target for this rule is the full set of link elements that share the same [matching][] [accessible name][] and [programmatically determined link context][].

## Expectation

When followed, the links in each set of target elements resolve to the [same resource][] or to [equivalent resources](#equivalent-resource). Resolving the links includes potential redirects, if the redirects happen instantly.

## Assumptions

- This rule assumes that the purpose of the links with identical [accessible names][accessible name] and [context][programmatically determined link context] would not be ambiguous to users in general, which is the exception mentioned in [Success Criterion 2.4.4 Link Purpose (In Context)][sc244]. If the links are ambiguous to users in general, users of assistive technologies are not at a disadvantage when viewing the links, which makes it more of a general user experience concern than an accessibility issue.
- This rule assumes that, within the context of the test subject, the description provided by the [accessible name][] of a link can only accurately describe one resource (notably, homonyms alone are not used as link names). Thus, if two or more links have the same [accessible name][] but resolve to different resources, at least one of them does not describe its purpose.
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

This rule assumes that assistive technologies are exposing all links on the page in the same way no matter which [document tree](https://dom.spec.whatwg.org/#document-trees) they are in. If an assistive technology requires the user to "enter" an `iframe` or a [shadow tree][] before exposing its links, then it is possible for two links to have identical name and context but resolve to different resources without failing [Success Criterion 2.4.4 Link Purpose (In Context)][sc244] (if said links are in separate [documents][document] or [shadow trees][shadow tree])

## Background

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [Understanding Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html)
- [HTML Specification - URL parsing](https://html.spec.whatwg.org/#resolving-urls)

## Test Cases

### Passed

#### Passed Example 1

A set of two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context] and link to the [same resource][].

```html
<html lang="en">
	<p>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
	</p>
</html>
```

#### Passed Example 2

A set of two HTML `a` elements the same [accessible name][] and [context][programmatically determined link context]. Both resolve to the [same resource][] after instant redirect.

```html
<html lang="en">
	<p>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect.html">Contact us</a>
	</p>
</html>
```

#### Passed Example 3

These two links resolve to resources that are not the same (different URLs), but the resources are completely identical, thus serving the same purpose.

```html
<html lang="en">
	<p>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index-copy.html">Contact us</a>
	</p>
</html>
```

#### Passed Example 4

These two links go to pages where the content section is the same, but where the navigation options (bread crumbs and local sub menus) differ due to different placement in navigation hierarchy.

```html
<html lang="en">
	<p>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/careers/contact.html"
			>Contact us</a
		>
	</p>
</html>
```

#### Passed Example 5

These two HTML `a` elements link to URLs that differ due to trailing slashes, but resolve to the [same resource][] after redirects caused by user agent.

```html
<html lang="en">
	<p>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/">Contact us</a>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66">Contact us</a>
	</p>
</html>
```

#### Passed Example 6

These two links go to pages that contain different amounts of information and/or differently worded information, but fulfill the same purpose in relation to the link.

```html
<html lang="en">
	<p>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html">Call us</a>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html">Call us</a>
	</p>
</html>
```

#### Passed Example 7

These two links go to pages that have the same advertised key content but use different layouts.

```html
<html lang="en">
	<p>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html">Contact us</a>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page3.html">Contact us</a>
	</p>
</html>
```

#### Passed Example 8

These two HTML `span` element have an [explicit role][] of link, and lead to the [same resource][].

```html
<html lang="en">
	<p>
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
	</p>
</html>
```

#### Passed Example 9

A set of two SVG `a` elements have the same [accessible name][] and [context][programmatically determined link context] and link to the [same resource][].

```html
<html lang="en">
	<p>
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
	</p>
</html>
```

#### Passed Example 10

A set of one SVG `a` element and one HTML `a` element that have the same [accessible name][] and [context][programmatically determined link context] and link to the [same resource][].

```html
<html lang="en">
	<p>
		<a href="http://facebook.com">Follow us</a>

		<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<a href="http://facebook.com" aria-label="Follow us">
				<circle cx="50" cy="40" r="35" />
			</a>
		</svg>
	</p>
</html>
```

### Failed

#### Failed Example 1

Both links have the same [accessible name][] and [context][programmatically determined link context] but go to different resources.

```html
<html lang="en">
	<p>
		<a href="http://facebook.com">Follow us</a>
		<a href="http://twitter.com">Follow us</a>
	</p>
</html>
```

#### Failed Example 2

The same [accessible name][] is used for two links in the same [context][programmatically determined link context] going to web pages that are similar, but have different information in their content.

```html
<html lang="en">
	<p>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html"
			>Contact us</a
		>
	</p>
</html>
```

#### Failed Example 3

These two HTML `span` elements have an [explicit role][] of link, but lead to resources that offer different content.

```html
<html lang="en">
	<p>
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
	</p>
</html>
```

#### Failed Example 4

The same [accessible name][] is used for image links in the same [context][programmatically determined link context] going to different resources.

```html
<html lang="en">
	<p>
		<a href="http://facebook.com"><img src="facebook.jpg" alt="Follow us"/></a>
		<a href="http://twitter.com"><img src="twitter.jpg" alt="Follow us"/></a>
	</p>
</html>
```

#### Failed Example 5

A set of two SVG `a` elements that have the same [accessible name][] and [context][programmatically determined link context] but link to different resources.

```html
<html lang="en">
	<p>
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
	</p>
</html>
```

#### Failed Example 6

Both links resolve to [same resource][] after redirect, but the redirect is not instant.

```html
<html lang="en">
	<p>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect1.html">Contact us</a>
	</p>
</html>
```

### Inapplicable

#### Inapplicable Example 1

These `a` and `area` elements do not have a role of `link`.

```html
<html lang="en">
	<a>Link text</a>
	<area aria-label="Link text" />
</html>
```

#### Inapplicable Example 2

These links have different [accessible names][accessible name]. The rule only applies to identical [accessible names][accessible name], not to identical link destinations.

**Note:** It is a best practice for [Success Criterion 2.4.4: Link Purpose (In Context)][sc244] that identical links have identical [accessible names][accessible name]. This is however not a requirement.

```html
<html lang="en">
	<p>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Reach out</a>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
	</p>
</html>
```

#### Inapplicable Example 3

These links have the same [accessible name][] and link to the [same resource][] but different [programmatically determined link contexts][programmatically determined link context].

```html
<html lang="en">
	<ul>
		<li>
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
		</li>
		<li>
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
		</li>
	</ul>
</html>
```

#### Inapplicable Example 4

The first link is not [included in the accessibility tree][].

```html
<html lang="en">
	<p>
		<a
			href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html"
			aria-hidden="true"
			tabindex="-1"
			>Contact Us</a
		>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html">Contact Us</a>
	</p>
</html>
```

#### Inapplicable Example 5

These `span` elements do not have a [semantic role][] of link.

```html
<html lang="en">
	<p>
		<span onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html'">
			Contact Us
		</span>

		<span onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html'">
			Contact Us
		</span>
	</p>
</html>
```

#### Inapplicable Example 6

These links have empty [accessible names][accessible name].

```html
<a href="http://facebook.com"></a> <a href="http://twitter.com"></a>
```

#### Inapplicable Example 7

These image links have empty [accessible names][accessible name].

```html
<a href="http://facebook.com"><img src="facebook.jpg"/></a> <a href="http://twitter.com"><img src="twitter.jpg"/></a>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[explicit role]: #explicit-role 'Definition of explicit role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[matching]: #matching-characters 'Definition of matching characters'
[programmatically determined link context]: #programmatically-determined-link-context 'Definition of programmatically determined link context'
[same resource]: #same-resource 'Definition of same resource'
[sc244]: https://www.w3.org/TR/WCAG21/#link-purpose-in-context 'Success Criterion 2.4.4: Link Purpose (In Context)'
[semantic role]: #semantic-role 'Definition of semantic role'
[shadow tree]: https://dom.spec.whatwg.org/#shadow-tree 'Definition of shadow tree'
[web page (html)]: #web-page-html 'Definition of web page (HTML)'

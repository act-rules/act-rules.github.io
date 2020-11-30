---
id: fd3a94
name: Links with identical accessible names and context serve equivalent purpose
rule_type: atomic
description: |
  This rule checks that links with identical accessible names and context resolve to the same or equivalent resources.
accessibility_requirements:
  wcag20:2.4.4: # Link Purpose (In Context) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:2.4.9: # Link Purpose (Link Only) (AAA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Language
acknowledgments:
  authors:
    - Carlos Duarte
  previous_authors:
    - Anne Thyme Nørregaard
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'attr-lowercase'
  - 'alt-require'
---

## Applicability

This rule applies to any set of two or more HTML or SVG elements for which all of the following are true:

- the elements have the [semantic role][] of `link`, or a role that inherits from the `link` role; and
- the elements are in the same [web page (HTML)][]; and
- the elements are [included in the accessibility tree][included in the accessibility tree]; and
- the elements have [matching][] [accessible names][accessible name] that are not empty (`""`); and
- the elements have the same [programmatically determined link context][].

**Note:** The test target for this rule is the full set of link elements that share the same [matching][] [accessible name][] and [programmatically determined link context][].

## Expectation

When followed, the links in each set of target elements resolve to the [same resource][] or to [equivalent resources](#equivalent-resource).

**Note**: Resolving the links includes potential redirects, if the redirects happen instantly.

## Assumptions

- This rule assumes that the purpose of the links with identical [accessible names][accessible name] and [context][programmatically determined link context] would not be ambiguous to users in general, which is the exception mentioned in [Success Criterion 2.4.4 Link Purpose (In Context)][sc244]. If the links are ambiguous to users in general, users of assistive technologies are not at a disadvantage when viewing the links, which makes it more of a general user experience concern than an accessibility issue.
- This rule assumes that, within the context of the test subject, the description provided by the [accessible name][] of a link can only accurately describe one resource (notably, homonyms alone are not used as link names). Thus, if two or more links have the same [accessible name][] but resolve to different resources, at least one of them does not describe its purpose.
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.
- This rule assumes that assistive technologies are exposing all links on the page in the same way no matter which [document tree](https://dom.spec.whatwg.org/#document-trees) they are in. If an assistive technology requires the user to "enter" an `iframe` or a [shadow tree][] before exposing its links, then it is possible for two links to have identical name and context but resolve to different resources without failing [Success Criterion 2.4.4 Link Purpose (In Context)][sc244] (if said links are in separate [documents][document] or [shadow trees][shadow tree])

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

This rule is designed specifically for [2.4.4 Link Purpose (In Context)][sc244], which requires the purpose to be clear within the context of a link. Because links that do not have this, also are not clear without that context, this rule maps to [2.4.9 Link Purpose (Link only)][sc249] as well. In order to adequately test the [expectation](#expectation), some of the passed examples do not satisfy [2.4.9 Link Purpose (Link only)][sc249].

- [Understanding Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html)
- [HTML Specification - URL parsing](https://html.spec.whatwg.org/#resolving-urls)

## Test Cases

### Passed

#### Passed Example 1

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context] and link to the [same resource][].

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html"
			>Contact us</a
		>) and get in touch (
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>)
	</p>
</html>
```

#### Passed Example 2

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], and resolve to the [same resource][] after an instant redirect.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html"
			>Contact us</a
		>) and get in touch (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect.html"
			>Contact us</a
		>)
	</p>
</html>
```

#### Passed Example 3

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], and resolve to identical resources.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html"
			>Contact us</a
		>) and get in touch (<a
			href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index-copy.html"
			>Contact us</a
		>)
	</p>
</html>
```

#### Passed Example 4

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], and resolve to pages that serve the same purpose because the content section is the same.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html"
			>Contact us</a
		>) and get in touch (
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/careers/contact.html">Contact us</a
		>)
	</p>
</html>
```

#### Passed Example 5

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], and go to pages that fulfill the same purpose in relation to the link because they contain the same relevant information.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html">Call us</a
		>) and get in touch (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html"
			>Call us</a
		>)
	</p>
</html>
```

#### Passed Example 6

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], and go to pages that use different layouts but have the same purpose.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html"
			>Contact us</a
		>) and get in touch (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page3.html"
			>Contact us</a
		>)
	</p>
</html>
```

#### Passed Example 7

These two HTML `span` elements have an [explicit role][] of link, the same [accessible name][], the same [context][programmatically determined link context], and link to the [same resource][].

```html
<html lang="en">
	<p>
		<span
			role="link"
			tabindex="0"
			onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html'"
		>
			My university
		</span>

		<span
			role="link"
			tabindex="0"
			onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html'"
		>
			My university
		</span>
	</p>
</html>
```

#### Passed Example 8

These two SVG `a` and HTML `a` elements have the same [accessible name][], same [context][programmatically determined link context] and link to the [same resource][].

```html
<html lang="en">
	<p>
		<a href="https://act-rules.github.io/">ACT rules</a>

		<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<a href="https://act-rules.github.io/" aria-label="ACT rules">
				<circle cx="50" cy="40" r="35" />
			</a>
		</svg>
	</p>
</html>
```

### Failed

#### Failed Example 1

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context] but go to different resources.

```html
<html lang="en">
	<p>
		We are on social media:
		<a href="https://act-rules.github.io/">ACT rules</a>
		<a href="https://www.w3.org/community/act-r/">ACT rules</a>
	</p>
</html>
```

#### Failed Example 2

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context]. They link to web pages that are similar, but have different information in their content.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html"
			>Contact us</a
		>) and get in touch (
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html"
			>Contact us</a
		>)
	</p>
</html>
```

#### Failed Example 3

These two HTML `span` elements have an [explicit role][] of link, same [accessible name][] and [context][programmatically determined link context], but link to resources that offer different content.

```html
<html lang="en">
	<p>
		Learn more (<span
			role="link"
			tabindex="0"
			onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html'"
			>Contact us</span
		>) and get in touch (<span
			role="link"
			tabindex="0"
			onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html'"
			>Contact us</span
		>)
	</p>
</html>
```

#### Failed Example 4

These two SVG `a` elements have the same [accessible name][] and [context][programmatically determined link context] but link to different resources.

```html
<html lang="en">
	<p>
		<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<a href="https://act-rules.github.io/" aria-label="ACT rules">
				<circle cx="50" cy="40" r="35" />
			</a>

			<a href="https://www.w3.org/community/act-r/">
				<text x="50" y="90" text-anchor="middle">
					ACT rules
				</text>
			</a>
		</svg>
	</p>
</html>
```

#### Failed Example 5

These two HTML `a` elements with the same [accessible name][] and [context][programmatically determined link context] resolve to the [same resource][] after redirect, but the redirect is not instant.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html"
			>Contact us</a
		>) and get in touch (<a
			href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect1.html"
			>Contact us</a
		>)
	</p>
</html>
```

### Inapplicable

#### Inapplicable Example 1

These HTML `a` and `area` elements do not have a role of `link`.

```html
<html lang="en">
	<a>Link text</a>
	<area aria-label="Link text" />
</html>
```

#### Inapplicable Example 2

These two HTML `a` elements have different [accessible names][accessible name].

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

These two HTML `a` elements have the same [accessible name][] and link to the [same resource][] but different [programmatically determined link contexts][programmatically determined link context].

```html
<html lang="en">
	<ul>
		<li>
			To learn more about us:
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
		</li>
		<li>
			To get in touch with us:
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
		</li>
	</ul>
</html>
```

#### Inapplicable Example 4

These two `span` elements do not have a [semantic role][] of link.

```html
<html lang="en">
	<p>
		Learn more (<span
			onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html'"
			>Contact Us </span
		>) and get in touch (<span
			onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html'"
			>Contact Us </span
		>)
	</p>
</html>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[explicit role]: #explicit-role 'Definition of explicit role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[matching]: #matching-characters 'Definition of matching characters'
[programmatically determined link context]: #programmatically-determined-link-context 'Definition of programmatically determined link context'
[same resource]: #same-resource 'Definition of same resource'
[sc244]: https://www.w3.org/TR/WCAG21/#link-purpose-in-context 'Success Criterion 2.4.4: Link Purpose (In Context)'
[sc249]: https://www.w3.org/TR/WCAG21/#link-purpose-link-only 'Success Criterion 2.4.9: Link Purpose (Link Only)'
[semantic role]: #semantic-role 'Definition of semantic role'
[shadow tree]: https://dom.spec.whatwg.org/#shadow-tree 'Definition of shadow tree'
[web page (html)]: #web-page-html 'Definition of web page (HTML)'

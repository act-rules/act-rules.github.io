---
id: fd3a94
name: Links with identical accessible names and same context serve equivalent purpose
rule_type: atomic
description: |
  This rule checks that links with identical accessible names in the same context resolve to the same or equivalent resources.
accessibility_requirements:
  wcag20:2.4.4: # Link Purpose (In Context) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:2.4.9: # Link Purpose (Link Only) (AAA)
    secondary: This success criterion is **more strict** than this rule. This is because the rule also considers the context of the link, in addition to the link text. Some of the passed examples do not satisfy this success criterion.
input_aspects:
  - DOM Tree
  - CSS Styling
  - Language
acknowledgments:
  authors:
    - Carlos Duarte
    - Giacomo Petri
  previous_authors:
    - Anne Thyme Nørregaard
  funding:
    - WAI-Tools
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'attr-lowercase'
  - 'alt-require'
---

## Applicability

This rule applies to any set of two or more [HTML or SVG elements][] for which all the following are true:

- the elements are [inheriting semantic][] `link` nodes; and
- the elements are in the same [web page (HTML)][]; and
- the elements are [included in the accessibility tree][included in the accessibility tree]; and
- the elements have [matching][] [accessible names][accessible name] that are not empty (`""`); and
- the elements have the same [programmatically determined link context][].

**Note:** The test target for this rule is the full set of link elements that share the same [matching][] [accessible name][] and [programmatically determined link context][].

## Expectation

For each pair of links in each target set, one of the following is true:

- both links resolve to the [same resource][]; or
- both links resolve to [equivalent resources][equivalent resource]; or
- there is no visual information within the [web page][] to let users know that both links resolve to [non-equivalent resources][equivalent resource].

**Note**: Resolving the links includes potential redirects, if the redirects happen instantly.

## Assumptions

- This rule assumes that, within the context of the test subject, the description provided by the [accessible name][] of a link can only accurately describe one resource (notably, homonyms alone are not used as link names). Thus, if two or more links have the same [accessible name][] but resolve to different resources, at least one of them does not accurately describe its purpose.
- This rule assumes that assistive technologies are exposing all links on the page in the same way no matter which [document tree](https://dom.spec.whatwg.org/#document-trees) they are in. If an assistive technology requires the user to "enter" an `iframe` or a [shadow tree][] before exposing its links, then it is possible for two links to have identical name and context but resolve to different resources without failing [Success Criterion 2.4.4 Link Purpose (In Context)][sc244] (if said links are in separate [documents][document] or [shadow trees][shadow tree]).
- This rule assumes that reading the URL, such as from the status bar when the link is focused, is not considered part of the context, and therefore, it does not disambiguate links.

## Accessibility Support

There are no accessibility support issues known.

## Background

There is a difference between two contexts being the _same_ and being _identical_. This rule specifically targets links within the _same_ context. The same context means exactly the same set of DOM nodes. Identical (but not the same) contexts might have a different set of DOM nodes, but those DOM nodes have equivalent content - such as text content, attribute values, and so on. This difference is similar to the difference in some programming languages between pointer equivalence and deep object equivalence. Links with identical name that are in identical (but not the same) contexts also fail [2.4.4 Link Purpose (In Context)][sc244]. However, defining "identical context" unambiguously has been deemed infeasible at this time, and so has been left out of this rule.

Links that are [ambiguous to users in general](https://www.w3.org/TR/WCAG22/#dfn-ambiguous-to-users-in-general) are covered by the exception mentioned in Success Criterion 2.4.4 Link Purpose (In Context). If the links are ambiguous to users in general, users of assistive technologies are not at a disadvantage when viewing the links, which makes it more of a general user experience concern than an accessibility issue.

Pages with links that are not [ambiguous to users in general][], but are ambiguous to some users are likely to fail [success criterion 1.3.1 Info and Relationships][sc131] if the disambiguation information is conveyed through presentation, but not semantically. Moreover, when this information is non-text content, such a page is likely to fail [success criterion 1.1.1 Non-text Content][sc111].

### Bibliography

- [Understanding Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- [HTML Specification - URL parsing](https://html.spec.whatwg.org/#resolving-urls)
- [Ambiguous to users in general](https://www.w3.org/TR/WCAG22/#dfn-ambiguous-to-users-in-general)

## Test Cases

### Passed

#### Passed Example 1

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context] and link to the [same resource][].

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">About us</a
		>) and get in touch (
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">About us</a>)
	</p>
</html>
```

#### Passed Example 2

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], and resolve to the [same resource][] after an instant redirect.

```html
<html lang="en">
	<div>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">About us</a
		>) and get in touch (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect.html"
			>About us</a
		>)
	</div>
</html>
```

#### Passed Example 3

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], and resolve to identical resources.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">About us</a
		>) and get in touch (<a
			href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index-copy.html"
			>About us</a
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

#### Passed Example 9

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], but resolve to different resources. However, the purpose of these links is [ambiguous to users in general](https://www.w3.org/TR/WCAG22/#dfn-ambiguous-to-users-in-general). Thus all readers are unsure about the destination and the person with a disability is not at any disadvantage.

```html
<html lang="en">
	<p>
		We are on social media:
		<a href="https://act-rules.github.io/">ACT rules</a>
		<a href="https://www.w3.org/community/act-r/">ACT rules</a>
	</p>
</html>
```

### Failed

#### Failed Example 1

These two HTML `a` elements have the same [accessible name][] and are nested within the same [context][programmatically determined link context], but go to different resources.

```html
<html lang="en">
	<p>
		To get in touch with us, you can either
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=1"
			>contact us</a
		>
		via chat or
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=2"
			>contact us</a
		>
		by phone.
	</p>
</html>
```

#### Failed Example 2

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], but go to different resources.

```html
<html lang="en">
	<p>W3C pages for ACT:</p>
	<p><a href="https://act-rules.github.io/">ACT rules</a></p>
	<p>Community group for ACT:</p>
	<p><a href="https://www.w3.org/community/act-r/">ACT rules</a></p>
</html>
```

#### Failed Example 3

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context]. They are visually distinguishable thanks to the relationships conveyed through CSS, but go to different resources.

```html
<html lang="en">
	<p>
		<h2>Contact us:</h2>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=1" style="display:inline-block; background: url(/test-assets/shared/chat.png) 0 / 40px no-repeat; padding: 20px 0 20px 50px;">Contact Us</a>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=2" style="display:inline-block; background: url(/test-assets/shared/phone.png) 0 / 40px no-repeat; padding: 20px 0 20px 50px; margin-left: 40px;">Contact Us</a>
	</p>
</html>
```

#### Failed Example 4

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], but go to different resources. Their purpose is disambiguated for sighted users by the alignment of the links with the images above.

```html
<html lang="en">
	<div>
		<span style="text-align:center;">Contact us</span>
		<span style="display:flex; justify-content:space-around;">
			<img src="/test-assets/shared/chat.png" alt="Chat" style="max-width:50px;" />
			<img src="/test-assets/shared/phone.png" alt="Phone" style="max-width:50px;" />
		</span>
		<span style="display:flex; justify-content:space-around;">
			<a
				href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=60e950cff70bf1ec60a702086748ab4dec361514"
				>Contact Us</a
			>
			<a
				href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=c1d4e0f067462f4b28716f028d9213a25eb82f28"
				>Contact Us</a
			>
		</span>
	</div>
</html>
```

#### Failed Example 5

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context]. They link to web pages that are similar, but have different information in their content. Their purpose is disambiguated for sighted users by the alignment of the links with the images above.

```html
<html lang="en">
	<div>
		<span style="text-align:center;">Contact us</span>
		<span style="display:flex; justify-content:space-around;">
			<img src="/test-assets/shared/chat.png" alt="Chat" style="max-width:50px;" />
			<img src="/test-assets/shared/phone.png" alt="Phone" style="max-width:50px;" />
		</span>
		<span style="display:flex; justify-content:space-around;">
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=3"
				>Contact Us</a
			>
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=4"
				>Contact Us</a
			>
		</span>
	</div>
</html>
```

#### Failed Example 6

These two HTML `span` elements have an [explicit role][] of link, same [accessible name][] and [context][programmatically determined link context], but link to resources that offer different content. Their purpose is disambiguated for sighted users by the alignment of the links with the images above.

```html
<html lang="en">
	<div>
		<span style="text-align:center;">Contact us</span>
		<span style="display:flex; justify-content:space-around;">
			<img src="/test-assets/shared/chat.png" alt="Chat" style="max-width:50px;" />
			<img src="/test-assets/shared/phone.png" alt="Phone" style="max-width:50px;" />
		</span>
		<span style="display:flex; justify-content:space-around;">
			<span
				role="link"
				tabindex="0"
				onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=1'"
				>Contact Us</span
			>
			<span
				role="link"
				tabindex="0"
				onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=2'"
				>Contact Us</span
			>
		</span>
	</div>
</html>
```

#### Failed Example 7

These two SVG `a` elements have the same [accessible name][] and [context][programmatically determined link context] but link to different resources.

```html
<html lang="en">
	<p>
		<svg enable-background="new 0 0 264 120" viewBox="-5 -20 80 50" xmlns="http://www.w3.org/2000/svg" style="max-width: 300px">
			<text>Contact us</text>
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=1" aria-label="Contact Us" style="scale: 0.2">
				<path d="m212.0806 68.0717c-10.3917 10.3852-22.4311 20.3239-27.1905 15.5646-6.8075-6.8075-11.0088-12.7418-26.0285-.6696-15.0132 12.0657-3.4792 20.1139 3.1182 26.7047 7.6149 7.6149 36.0001.407 64.0571-27.6434 28.0504-28.057 35.2386-56.4422 27.6172-64.0571-6.5974-6.604-14.6062-18.1314-26.6719-3.1182-12.0723 15.0132-6.1444 19.2145.6761 26.0285 4.7397 4.7593-5.1925 16.7988-15.5777 27.1905z"/>
			</a>
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=2" aria-label="Contact Us" style="scale: 0.2">
				<path d="m105 7.5h-90c-8.2576 0-15 6.7497-15 15v52.5c0 8.2498 6.7424 15 15 15h30l30 22.5v-22.5h30c8.2498 0 15-6.7502 15-15v-52.5c0-8.2503-6.7502-15-15-15zm-80.7903 52.5c-6.2132 0-11.255-5.0372-11.255-11.25 0-6.2132 5.0418-11.25 11.255-11.25 6.2128 0 11.245 5.0418 11.245 11.25 0 6.2077-5.0322 11.25-11.245 11.25zm35.7953 0c-6.2128 0-11.255-5.0372-11.255-11.25 0-6.2132 5.0423-11.25 11.255-11.25 6.2132 0 11.245 5.0368 11.245 11.25 0 6.2128-5.0317 11.25-11.245 11.25zm35.7958 0c-6.2132 0-11.2555-5.0372-11.2555-11.25 0-6.2132 5.0423-11.25 11.2555-11.25 6.2128 0 11.2445 5.0368 11.2445 11.25 0 6.2128-5.0318 11.25-11.2445 11.25z"/>
			</a>
		</svg>
	</p>
</html>
```

#### Failed Example 8

These two HTML `a` elements with the same [accessible name][] and [context][programmatically determined link context] resolve to the [same resource][] after redirect, but the redirect is not instant.

```html
<html lang="en">
	<p>
		<span style="text-align:center;">Contact us</span>
		<span style="display:flex; justify-content:space-around;">
			<img src="/test-assets/shared/chat.png" alt="Chat" style="max-width:50px;" />
			<img src="/test-assets/shared/phone.png" alt="Phone" style="max-width:50px;" />
		</span>
		<span style="display:flex; justify-content:space-around;">
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact Us</a>
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect1.html">Contact Us</a>
		</span>
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

#### Inapplicable Example 5

These two HTML `a` elements have the same [accessible name][] and link to the [same resource][] but different [programmatically determined link contexts][programmatically determined link context]. Even though the two contexts in this example are _identical_, they are not the _same_. That is: even though they have equivalent content, they do not consist of the same DOM elements.

```html
<html lang="en">
	<div>
		You can learn more in the
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a> page.
	</div>
	<div>
		You can learn more in the
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a> page.
	</div>
</html>
```

#### Inapplicable Example 6

These two HTML `a` elements have the same [accessible name][] but different [programmatically determined link contexts][programmatically determined link context] because the `div` elements place them in different display blocks.

```html
<div><a href="https://www.w3.org/WAI/">Read more</a> about the W3C WAI</div>
<div><a href="https://www.w3.org/International/">Read more</a> about the W3C internationalization</div>
```

#### Inapplicable Example 7

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], but the second one is not [included in the accessibility tree][included in the accessibility tree].

```html
<html lang="en">
	<p>
		We are on social media:
		<a href="https://act-rules.github.io/">ACT rules</a>
		<a aria-hidden="true" href="https://www.w3.org/community/act-r/">ACT rules</a>
	</p>
</html>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[equivalent resource]: #equivalent-resource 'Definition of Equivalent Resource'
[explicit role]: #explicit-role 'Definition of explicit role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inheriting semantic]: #inheriting-semantic 'Definition of Inheriting Semantic Role'
[matching]: #matching-characters 'Definition of matching characters'
[programmatically determined link context]: #programmatically-determined-link-context 'Definition of programmatically determined link context'
[same resource]: #same-resource 'Definition of same resource'
[sc244]: https://www.w3.org/TR/WCAG22/#link-purpose-in-context 'Success Criterion 2.4.4: Link Purpose (In Context)'
[semantic role]: #semantic-role 'Definition of semantic role'
[shadow tree]: https://dom.spec.whatwg.org/#shadow-tree 'Definition of shadow tree'
[web page]: #web-page-html 'Definition of HTML web page'
[web page (html)]: #web-page-html 'Definition of web page (HTML)'
[html or svg elements]: #namespaced-element

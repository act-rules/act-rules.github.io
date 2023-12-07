---
id: b20e66
name: Links with identical accessible names have equivalent purpose
rule_type: atomic
description: |
  This rule checks that links with identical accessible names resolve to the same resource or equivalent resources.
accessibility_requirements:
  wcag20:2.4.9: # Link Purpose (Link Only) (AAA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
wcag20:2.4.4: # Link Purpose (In Context) (A)
secondary: This success criterion is **less strict** than this rule. This is because the rule does not consider the context of the link. Some of the failed examples satisfy this success criterion.
input_aspects:
  - Accessibility Tree
  - DOM Tree
  - CSS Styling
  - Language
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Jean-Yves Moyen
  funding:
    - WAI-Tools
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'attr-lowercase'
  - 'alt-require'
---

## Applicability

This rule applies to any set of any two or more [HTML or SVG elements][] for which all the following are true:

- the elements are [inheriting semantic][] `link` nodes; and
- the elements are in the same [web page (HTML)][]; and
- the elements are [included in an accessibility tree][included in the accessibility tree]; and
- the elements have [matching][] [accessible names][accessible name] that are not empty (`""`).

**Note:** The test target for this rule is the full set of link elements that share the same [matching][] [accessible name][].

## Expectation

When followed, the links in each set of target elements resolve to the [same resource][] or to [equivalent resources](#equivalent-resource). Resolving the links includes potential redirects, if the redirects happen instantly.

## Assumptions

- This rule assumes that the purpose of the links with identical [accessible names][accessible name] would not be ambiguous to users in general when seen in context on the web page, which is the exception mentioned in [Success Criterion 2.4.9 Link Purpose (Link Only)][sc249]. If the links are ambiguous to users in general, users of assistive technologies are not at a disadvantage when viewing the links out of context, e.g. on a list of links in a screen reader, which makes it more of a general user experience concern than an accessibility issue.
- This rule assumes that, within the context of the test subject, the description provided by the [accessible name][] of a link can only accurately describe one resource (notably, homonyms alone are not used as link names). Thus, if two or more links have the same [accessible name][] but resolve to different resources, at least one of them does not describe its purpose.

## Accessibility Support

- This rule assumes that assistive technologies are exposing all links on the page in the same way no matter which [document tree](https://dom.spec.whatwg.org/#document-trees) they are in. If an assistive technology requires the user to "enter" an `iframe` or a [shadow tree][] before exposing its links, then it is possible for two links to have identical name but resolve to different resources without failing [Success Criterion 2.4.9 Link Purpose (Link Only)][sc249] (if said links are in separate [documents][document] or [shadow trees][shadow tree]).
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some [inheriting semantic][] `link` elements can fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

### Bibliography

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [Understanding Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html)
- [HTML Specification - URL parsing](https://html.spec.whatwg.org/#resolving-urls)

## Test Cases

### Passed

#### Passed Example 1

A set of two HTML `a` elements have the same [accessible name][] and link to the [same resource][].

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
</html>
```

#### Passed Example 2

These two HTML `a` elements resolve to the [same resource][] after instant redirect. The redirect means that the URLs look different but load the same page.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect.html">Contact us</a>
</html>
```

#### Passed Example 3

These two links resolve to resources that are not the same (different URLs), but the resources are completely identical, in this case the contact details being the same in two locations, thus serving the same purpose.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index-copy.html">Contact us</a>
</html>
```

#### Passed Example 4

These two links go to pages where the content section is the same, but where the navigation options (bread crumbs and local sub menus) differ due to different placement in navigation hierarchy. In the example, the contact details are the same format but in different locations.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/careers/contact.html">Contact us</a>
</html>
```

#### Passed Example 5

These two HTML `a` elements link to URLs that differ due to trailing slashes, but resolve to the [same resource][] after redirects caused by user agent. The redirect means the URLs look different but load the same page.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66">Contact us</a>
</html>
```

#### Passed Example 6

These two links go to pages that contain different amounts of information and/or differently worded information, but fulfill the same purpose in relation to the link. In the example, the phone number is in the same format but in different locations.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html">Call us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html">Call us</a>
</html>
```

#### Passed Example 7

These two links go to pages that have the same advertised key content but use different layouts. In the example, the contact details are the same format but in different locations.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page3.html">Contact us</a>
</html>
```

#### Passed Example 8

These two HTML `span` element have an [explicit role][] of link, and lead to the [same resource][]. This example is showing ARIA markup for a link compared to the other HTML examples.

```html
<html lang="en">
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
</html>
```

#### Passed Example 9

These two SVG `a` elements have the same [accessible name][] and link to the [same resource][]. The example is one SVG area but with 2 formats of links. One uses an image and the other uses text.

```html
<html lang="en">
	<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<a href="https://act-rules.github.io/" aria-label="ACT rules">
			<circle cx="50" cy="40" r="35" />
		</a>

		<a href="https://act-rules.github.io/">
			<text x="50" y="90" text-anchor="middle">
				ACT rules
			</text>
		</a>
	</svg>
</html>
```

#### Passed Example 10

A set of one SVG `a` element and one HTML `a` element that have the same [accessible name][] and link to the [same resource][].

```html
<a href="https://act-rules.github.io/">ACT rules</a>

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<a href="https://act-rules.github.io/" aria-label="ACT rules">
		<circle cx="50" cy="40" r="35" />
	</a>
</svg>
```

#### Passed Example 11

All three links have the same [accessible name][]. The second link ("from the light") is only part of the [light tree][]. When the [shadow tree][] is attached to `host` and flattened, this link is overwritten and therefore not part of the [flat tree][] (and thus not rendered). Hence, only the first and third link are considered by this rule and they both point to the [same resource][].

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
all the time.

<div id="host">
	<span
		><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html"
			>Contact us</a
		>
		from the light.</span
	>
</div>

<script>
	const host = document.getElementById('host')
	const shadowRoot = host.attachShadow({ mode: 'open' })

	shadowRoot.innerHTML =
		'<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> from the shadow.'
</script>
```

#### Passed Example 12

The [browsing context][] of the `iframe` has the [browsing context][] of the main [document][] as an [ancestor browsing context](https://html.spec.whatwg.org/#ancestor-browsing-context). Hence, they share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context) (namely, the [browsing context][] of the main [document][]) and are part of the same [web page (HTML)][]. Therefore, both links are considered and, since they refer to the same document, the rule passes.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
from the top level.

<iframe
	srcdoc="<a href='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html'>Contact us</a> from the iframe"
></iframe>
```

### Failed

#### Failed Example 1

These two links have the same [accessible name][] but go to different resources. They open completely different pages.

```html
<html lang="en">
	<a href="https://act-rules.github.io/">ACT rules</a>
	<a href="https://www.w3.org/community/act-r/">ACT rules</a>
</html>
```

#### Failed Example 2

The same [accessible name][] is used for two links going to web pages that are similar, but have different information in their content. The example given contains different contact details for each page. They have a similar purpose but do not match.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html"
		>Contact us</a
	>
</html>
```

#### Failed Example 3

These two HTML `span` elements have an [explicit role][] of link, but lead to resources that offer different content. The example given contains different contact details for each page. They have a similar purpose but do not match.

```html
<html lang="en">
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
</html>
```

#### Failed Example 4

The same [accessible name][] is used for image links going to different resources. They open completely different pages.

```html
<html lang="en">
	<a href="https://act-rules.github.io/"><img src="/test-assets/shared/act-logo.png" alt="ACT rules"/></a>
	<a href="https://www.w3.org/community/act-r/"><img src="/test-assets/shared/act-logo.png" alt="ACT rules"/></a>
</html>
```

#### Failed Example 5

These two SVG `a` elements have the same [accessible name][] but link to different resources. They open completely different pages.

```html
<html lang="en">
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
</html>
```

#### Failed Example 6

These two links resolve to [same resource][] after redirect, but the redirect is not instant. The user will notice the redirect due to a pause.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect1.html">Contact us</a>
</html>
```

### Inapplicable

#### Inapplicable Example 1

These `a` and `area` elements have no `href` attribute. Thus they are not links and do not have a role of `link`.

```html
<html lang="en">
	<a>Link text</a>
	<area aria-label="Link text" />
</html>
```

#### Inapplicable Example 2

These links have different [accessible names][accessible name]. The rule only applies to identical [accessible names][accessible name], not to identical link destinations.

**Note:** It is a best practice for [Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html) that identical links have identical [accessible names][accessible name]. This is however not a requirement.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Reach out</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
</html>
```

#### Inapplicable Example 3

These `span` elements do not have a [semantic role][] of `link`. They are not valid links.

```html
<html lang="en">
	<span onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html'">
		Contact Us
	</span>

	<span onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html'">
		Contact Us
	</span>
</html>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[browsing context]: https://html.spec.whatwg.org/#browsing-context 'Definition of browsing context'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[explicit role]: #explicit-role 'Definition of explicit role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inheriting semantic]: #inheriting-semantic 'Definition of Inheriting Semantic Role'
[light tree]: https://dom.spec.whatwg.org/#concept-light-tree 'Definition of light tree'
[matching]: #matching-characters 'Definition of matching characters'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[same resource]: #same-resource 'Definition of same resource'
[sc249]: https://www.w3.org/TR/WCAG22/#link-purpose-link-only 'Success Criterion 2.4.9: Link Purpose (Link Only)'
[semantic role]: #semantic-role 'Definition of semantic role'
[shadow tree]: https://dom.spec.whatwg.org/#shadow-tree 'Definition of shadow tree'
[web page (html)]: #web-page-html 'Definition of web page (HTML)'
[html or svg elements]: #namespaced-element

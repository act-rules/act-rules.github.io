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
input_aspects:
  - DOM Tree
  - CSS Styling
authors:
  - Anne Thyme Nørregaard
  - Jean-Yves Moyen
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'attr-lowercase'
  - 'alt-require'
---

## Applicability

This rule applies to any set of any two or more HTML or SVG elements which

- have the [semantic role][] of `link`, or a role that inherits from the `link` role; and
- are in [documents][document] of the same [web page][]; and
- are [included in an accessibility tree][included in the accessibility tree]; and
- that have [matching][] [accessible names][accessible name] that are not empty (`""`).

**Note:** The test target for this rule is the full set of link elements that share the same [matching][] [accessible name][].

## Expectation

When followed, the links in the set of target elements resolve to the [same resource][] or to [equivalent resources](#equivalent-resource). Resolving the links includes potential redirects, if the redirects happen instantly.

## Assumptions

This rule assumes that the purpose of the links with identical [accessible names][accessible name] would not be ambiguous to users in general when seen in context on the web page, which is the exception mentioned in [Success Criterion 2.4.9 Link Purpose (Link Only)][sc249]. If the links are ambiguous to users in general, users of assistive technologies are not at a disadvantage when viewing the links out of context, e.g. on a list of links in a screen reader, which makes it more of a general user experience concern than an accessibility issue.

## Accessibility Support

This rule assume that assistive technologies are exposing all links on the page in the same way no matter which [document tree](https://dom.spec.whatwg.org/#document-trees) they are in. If an assistive technology requires the user to "enter" an `iframe` or a [shadow tree][] before exposing its links, then it is possible for two links to have identical name but resolve to different resources without breaking [Success Criterion 2.4.9 Link Purpose (Link Only)][sc249] (if said links are in separate [documents][document] or [shadow trees][shadow tree])

## Background

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [Understanding Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html)
- [URL parsing](https://www.w3.org/TR/html52/infrastructure.html#parsing-urls)

## Test Cases

### Passed

#### Passed Example 1

A set of two HTML `a` elements have the same [accessible name][] and link to the [same resource][].

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
```

#### Passed Example 2

A set of two HTML `a` elements that both resolve to [same resource][] after instant redirect.

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

These two HTML `a` elements link to URLs that differ due to trailing slashes, but resolve to the [same resource][] after redirects caused by user agent.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/">Contact us</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66">Contact us</a>
```

#### Passed Example 6

These two links go to pages that contain different amounts of information and/or differently worded information, but fulfill the same purpose in relation to the link.

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

These two HTML `span` element have an [explicit role][] of link, and lead to the [same resource][].

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

A set of two SVG `a` elements have the same [accessible name][] and link to the [same resource][].

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

#### Passed Example 10

A set of one SVG `a` element and one HTML `a` element that have the same [accessible name][] and link to the [same resource][].

```html
<a href="http://facebook.com">Follow us"</a>

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<a href="http://facebook.com" aria-label="Follow us">
		<circle cx="50" cy="40" r="35" />
	</a>
</svg>
```

#### Passed Example 11

All three links have the same [accessible name][]. The second link ("from the light") is only part of the [light tree][]. When the [shadow tree][] is attached to `host` and flattened, this link is overwritten and therefore not part of the [flat tree][]. Hence, only the first and third link are considered by this rule and they both point to the [same resource][].

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

The [shadow tree][] contains a [slot][] whose [name][] is `"slot"`. The [light tree][] does fill that [slot][]. Hence, the [flattened slotable][] is not [assigned][] and the third link ("from the fallback") does not appear in the [flat tree][]. Only the first ("all the time") and second ("from the slot") links are in the [flat tree][]. Given that they have the same [accessible name][] and point to the [same resource][], the rule passes.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
all the time.

<div id="host">
	<span slot="slot"
		><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
		from the slot.</span
	>
</div>

<script>
	const host = document.getElementById('host')
	const shadowRoot = host.attachShadow({ mode: 'open' })

	shadowRoot.innerHTML =
		'<slot name="slot"><span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a> from the fallback.</span></slot>'
</script>
```

#### Passed Example 13

The [browsing context][] of the `iframe` has the [browsing context][] of the main [document][] as an [ancestor browsing context](https://html.spec.whatwg.org/#ancestor-browsing-context). Hence, they share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context) (namely, the [browsing context][] of the main [document][]) and are part of the same [web page][]. Therefore, both links are considered and, since they refer to the same document, the rule passes.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
from the top level.

<iframe
	srcdoc="<a href='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html'>Contact us</a> from the iframe"
></iframe>
```

### Failed

#### Failed Example 1

Both links have the same [accessible name][] but go to different resources.

```html
<a href="http://facebook.com">Follow us</a> <a href="http://twitter.com">Follow us</a>
```

#### Failed Example 2

The same [accessible name][] is used for two links going to web pages that are similar, but have different information in their content.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a>
```

#### Failed Example 3

These two HTML `span` elements have an [explicit role][] of link, but lead to resources that offer different content.

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

The same [accessible name][] is used for image links going to different resources.

```html
<a href="http://facebook.com"><img src="facebook.jpg" alt="Follow us"/></a>
<a href="http://twitter.com"><img src="twitter.jpg" alt="Follow us"/></a>
```

#### Failed Example 5

A set of two SVG `a` elements that have the same [accessible name][] but link to different resources.

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

Both links resolve to [same resource][] after redirect, but the redirect is not instant.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect1.html">Contact us</a>
```

#### Failed Example 7

The [shadow tree][] contains a [slot][] whose [name][] is `"slot"`. The [light tree][] does not fill that [slot][]. Hence, the [flattened slotable][] is [assigned][] and the third link ("from the fallback") appears in the [flat tree][], causing the rule to fail.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
all the time.

<div id="host">
	<span
		><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
		from the slot.</span
	>
</div>

<script>
	const host = document.getElementById('host')
	const shadowRoot = host.attachShadow({ mode: 'open' })

	shadowRoot.innerHTML =
		'<slot name="slot"><span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a> from the fallback.</span></slot>'
</script>
```

#### Failed Example 8

The [browsing context][] of the `iframe` has the [browsing context][] of the main [document][] as an [ancestor browsing context](https://html.spec.whatwg.org/#ancestor-browsing-context). Hence, they share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context) (namely, the [browsing context][] of the main [document][]) and are part of the same [web page][]. Therefore, both links are considered and the rule fails.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
from the top level.

<iframe
	srcdoc="<a href='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html'>Contact us</a> from the iframe"
></iframe>
```

### Inapplicable

#### Inapplicable Example 1

These `a` and `area` elements have no `href` attribute.

```html
<a>Link text</a> <area aria-label="Link text" />
```

#### Inapplicable Example 2

These links have different [accessible names][accessible name]. The rule only applies to identical [accessible names][accessible name], not to identical link destinations.

**Note**: It is a best practice for [Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html) that identical links have identical [accessible names][accessible name]. This is however not a requirement.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Reach out</a>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
```

#### Inapplicable Example 3

The first link is not [included in the accessibility tree][].

```html
<a
	href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html"
	aria-hidden="true"
	tabindex="-1"
	>Contact Us</a
>
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html">Contact Us</a>
```

#### Inapplicable Example 4

These `span` elements do not have a [semantic role][] of link.

```html
<span onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html'">
	Contact Us
</span>

<span onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html'">
	Contact Us
</span>
```

#### Inapplicable Example 5

These links have empty [accessible names][accessible name].

```html
<a href="http://facebook.com"></a> <a href="http://twitter.com"></a>
```

#### Inapplicable Example 6

These image links have empty [accessible names][accessible name].

```html
<a href="http://facebook.com"><img src="facebook.jpg"/></a> <a href="http://twitter.com"><img src="twitter.jpg"/></a>
```

#### Inapplicable Example 7

Only the first link ("all the time") is present in the [flat tree][]. Hence, there is no set of two or more links to apply the rule. The [shadow tree][] does contain a [slot][], but because its [named][name], the second link ("from the light") is _not_ [slotted][slot] into it.

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

	shadowRoot.innerHTML = '<slot name="slot"></slot>'
</script>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[assigned]: https://dom.spec.whatwg.org/#assigning-slotables-and-slots 'Algorithm for assigning slots'
[browsing context]: https://html.spec.whatwg.org/#browsing-context 'Definition of browsing context'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[explicit role]: #explicit-role 'Definition of explicit role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[flattened slotable]: https://dom.spec.whatwg.org/#finding-slots-and-slotables 'Definition of flattened slotable'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[light tree]: https://dom.spec.whatwg.org/#concept-light-tree 'Definition of light tree'
[matching]: #matching-characters 'Definition of matching characters'
[name]: https://dom.spec.whatwg.org/#slot-name 'Definition of slot name'
[node]: https://dom.spec.whatwg.org/#concept-node 'Definition of node'
[same resource]: #same-resource 'Definition of same resource'
[sc249]: https://www.w3.org/TR/WCAG21/#link-purpose-link-only 'Success Criterion 2.4.9: Link Purpose (link only)'
[semantic role]: #semantic-role 'Definition of semantic role'
[shadow tree]: https://dom.spec.whatwg.org/#shadow-tree 'Definition of shadow tree'
[slot]: https://dom.spec.whatwg.org/#concept-slot 'Definition of slot'
[web page]: #web-page 'Definition of web page'

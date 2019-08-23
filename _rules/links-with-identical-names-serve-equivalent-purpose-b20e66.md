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

#### Passed Example 10

All three links have the same [accessible name](#accessible-name). The second link ("from the light") is only part of the [light tree](https://dom.spec.whatwg.org/#concept-light-tree). When the [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree) is attached to `host` and flattened, it is overwritten and therefore not part of the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress). Hence, only the first and third link are considered by this rule and they both point to the same resource.

```html
<!DOCTYPE html>
<html>
<head><title>Links in the shadow</title></head>

<body>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> all the time.

	<div id="host">
		<span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a> from the light.</span>
	</div>

	<script>
	  const host = document.getElementById("host");
	  const shadowRoot = host.attachShadow({ mode: "open"});

	  shadowRoot.innerHTML = '<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> from the shadow.';
	</script>
</body>
</html>
```

#### Passed Example 11

The [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree) contains only a default [slot](https://dom.spec.whatwg.org/#concept-slot) (whose [name](https://dom.spec.whatwg.org/#slot-name) is the empty string). This [slot](https://dom.spec.whatwg.org/#concept-slot) is filled by the third link ("from the slot") and the second one ("from the light") does not appear in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress). Therefore, the rule passes.

```html
<!DOCTYPE html>
<html>
<head><title>Links in the shadow</title></head>

<body>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> all the time.

	<div id="host">
		<span slot="slot"><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a> from the light.</span>
		<span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> from the slot.</span>
	</div>

	<script>
	  const host = document.getElementById("host");
	  const shadowRoot = host.attachShadow({ mode: "open"});

		shadowRoot.innerHTML = '<slot></slot>';
	</script>
</body>
</html>
```

#### Passed Example 12

The [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree) contains only a named [slot](https://dom.spec.whatwg.org/#concept-slot) (whose [name](https://dom.spec.whatwg.org/#slot-name) is `"slot"`). This [slot](https://dom.spec.whatwg.org/#concept-slot) is filled by the third link ("from the slot") and the second one ("from the light") does not appear in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress). Therefore, the rule passes.

```html
<!DOCTYPE html>
<html>
<head><title>Links in the shadow</title></head>

<body>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> all the time.

	<div id="host">
		<span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a> from the light.</span>
		<span slot="slot"><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> from the slot.</span>
	</div>

	<script>
	  const host = document.getElementById("host");
	  const shadowRoot = host.attachShadow({ mode: "open"});

		shadowRoot.innerHTML = '<slot name="slot"></slot>';
	</script>
</body>
</html>
```

#### Passed Example 13

The [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree) contains a [slot](https://dom.spec.whatwg.org/#concept-slot) whose [name](https://dom.spec.whatwg.org/#slot-name) is `"slot"`. The [light tree](https://dom.spec.whatwg.org/#concept-light-tree) does fill that [slot](https://dom.spec.whatwg.org/#concept-slot). Hence, the [flattened slottable](https://dom.spec.whatwg.org/#finding-slots-and-slotables) is not [assigned](https://dom.spec.whatwg.org/#assigning-slotables-and-slots) and the third link ("from the fallback") does not appears in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress). Only the first ("all the time") and second ("from the slot") links are in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress). Given that they have the same [accessible name](#accessible-name) and point to the same resource, the rule passes.

```html
<!DOCTYPE html>
<html>
<head><title>Links in the shadow</title></head>

<body>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> all the time.

	<div id="host">
		<span slot="slot"><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> from the slot.</span>
	</div>

	<script>
	  const host = document.getElementById("host");
	  const shadowRoot = host.attachShadow({ mode: "open"});

		shadowRoot.innerHTML = '<slot name="slot"><span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a> from the fallback.</span></slot>';
	</script>
</body>
</html>
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

#### Failed Example 7

Both links have the same [accessible name](#accessible-name). When the [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree) is attached to `host` and flattened, both links appear in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress). Since they have the same [accessible name](#accessible-name) but point to different resources, the rule fails.

```html
<!DOCTYPE html>
<html>
<head><title>Links in the shadow</title></head>

<body>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> all the time.

	<div id="host"></div>

	<script>
	  const host = document.getElementById("host");
	  const shadowRoot = host.attachShadow({ mode: "open"});

	  shadowRoot.innerHTML = '<span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a> from the shadow.</span>';
	</script>
</body>
</html>
```

#### Failed Example 8

The second link is [slotted](https://dom.spec.whatwg.org/#concept-slot) and therefore appears in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress). Both links have the same [accessible name](#accessible-name) but point to different resources, hence the  rule fails.

```html
<!DOCTYPE html>
<html>
<head><title>Links in the shadow</title></head>

<body>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> all the time.

	<div id="host">
		<span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a> from the slot.</span>
	</div>

	<script>
	  const host = document.getElementById("host");
	  const shadowRoot = host.attachShadow({ mode: "open"});

	  shadowRoot.innerHTML = '<slot></slot>';
	</script>
</body>
</html>
```

#### Failed Example 9

All of the descendants of `host` (in the [light tree](https://dom.spec.whatwg.org/#concept-light-tree)) are slotted into the default [slot](https://dom.spec.whatwg.org/#concept-slot) (whose [name](https://dom.spec.whatwg.org/#slot-name) is the empty string). Therefore, all three links appear in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress) and the rule fails since the second one ("from the slot") does not point to the same resource.

```html
<!DOCTYPE html>
<html>
<head><title>Links in the shadow</title></head>

<body>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> all the time.

	<div id="host">
		<span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a> from the slot.</span>
		<span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> from the slot again.</span>
	</div>

	<script>
	  const host = document.getElementById("host");
	  const shadowRoot = host.attachShadow({ mode: "open"});

		shadowRoot.innerHTML = '<slot></slot>';
	</script>
</body>
</html>
```

#### Failed Example 10

The [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree) contains a [slot](https://dom.spec.whatwg.org/#concept-slot) whose [name](https://dom.spec.whatwg.org/#slot-name) is `"slot"`. The [light tree](https://dom.spec.whatwg.org/#concept-light-tree) does not fill that [slot](https://dom.spec.whatwg.org/#concept-slot). Hence, the [flattened slottable](https://dom.spec.whatwg.org/#finding-slots-and-slotables) is [assigned](https://dom.spec.whatwg.org/#assigning-slotables-and-slots) and the third link ("from the fallback") appears in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress), causing the rule to fail.

```html
<!DOCTYPE html>
<html>
<head><title>Links in the shadow</title></head>

<body>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> all the time.

	<div id="host">
		<span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> from the slot.</span>
	</div>

	<script>
	  const host = document.getElementById("host");
	  const shadowRoot = host.attachShadow({ mode: "open"});

		shadowRoot.innerHTML = '<slot name="slot"><span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a> from the fallback.</span></slot>';
	</script>
</body>
</html>
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
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html">Contact Us</a>
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

#### Inapplicable Example 7

Only the first link ("all the time") is present in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress). Hence, there is no set of two or more links to apply the rule.

```html
<!DOCTYPE html>
<html>
<head><title>Links in the shadow</title></head>

<body>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> all the time.

	<div id="host">
		<span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a> from the light.</span>
	</div>

	<script>
	  const host = document.getElementById("host");
	  const shadowRoot = host.attachShadow({ mode: "open"});
	</script>
</body>
</html>
```

#### Inapplicable Example 8

Only the first link ("all the time") is present in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress). Hence, there is no set of two or more links to apply the rule. The [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree) does contain a [slot](https://dom.spec.whatwg.org/#concept-slot), but because its named, the second link ("from the light") is *not* slotted into it.

```html
<!DOCTYPE html>
<html>
<head><title>Links in the shadow</title></head>

<body>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> all the time.

	<div id="host">
		<span><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html">Contact us</a> from the light.</span>
	</div>

	<script>
	  const host = document.getElementById("host");
	  const shadowRoot = host.attachShadow({ mode: "open"});

		shadowRoot.innerHTML = '<slot name="slot"></slot>';
	</script>
</body>
</html>
```
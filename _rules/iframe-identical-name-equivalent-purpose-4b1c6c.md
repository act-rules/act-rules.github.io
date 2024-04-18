---
id: 4b1c6c
name: Iframe elements with identical accessible names have equivalent purpose
rule_type: atomic
description: |
  This rule checks that `iframe` elements with identical accessible names embed the same resource or equivalent resources.
accessibility_requirements:
  wcag20:4.1.2: # Name, Role, Value (A)
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
    - Audrey Maniez
    - Jean-Yves Moyen
    - Jey Nandakumar
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any set of any two or more `iframe` elements which:

- are in the same [web page (HTML)][]; and
- are [included in an accessibility tree][included in the accessibility tree]; and
- that have [matching][] [accessible names][accessible name] that are not empty (`""`).

## Expectation

The `iframe` elements in each set of target elements embed the [same resource][] or [equivalent resources](#equivalent-resource).

## Assumptions

This rule assumes that, within the context of the test subject, the description provided by the [accessible name][] of an `iframe` can only accurately describe one resource (notably, homonyms alone are not used as `iframe` names). Thus, if two or more `iframe` elements have the same [accessible name][] but embed different resources, at least one of them does not describe its purpose.

## Accessibility Support

This rule assumes that assistive technologies are exposing all `iframe` elements on the page in the same way no matter which [document tree](https://dom.spec.whatwg.org/#document-trees) they are in. If an assistive technology requires the user to "enter" an `iframe` or a [shadow tree][] before exposing its content (notably nested `iframe`), then it is possible for two `iframe` to have identical name but embed different resources without failing [Success Criterion 4.1.2: Name, Role, Value][sc412] (if said `iframe` are in separate [documents][document] or [shadow trees][shadow tree])

## Background

When determining if target elements embed the same resource, resolving the embedded resource includes any redirects that are instant.

### Bibliography

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H64)
- [Understanding Success Criterion 4.1.2: Name, Role, Value][usc412]

## Test Cases

### Passed

#### Passed Example 1

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed the same resource.

```html
<html lang="en">
	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
</html>
```

#### Passed Example 2

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` and `aria-label` attributes) and embed the same resource.

```html
<html lang="en">
	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe aria-label="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
</html>
```

#### Passed Example 3

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `aria-labelledby` attribute and corresponding elements) and embed the same resource.

```html
<html lang="en">
	<div id="desc-for-title">List of Contributors</div>
	<iframe aria-labelledby="desc-for-title" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<div id="desc-for-title1">List of Contributors</div>
	<iframe aria-labelledby="desc-for-title1" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
</html>
```

#### Passed Example 4

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed equivalent resources. Only the navigation options (bread crumbs and local sub menus) differ due to different placement in navigation hierarchy.

```html
<html lang="en">
	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/sub-dir/page-one.html"> </iframe>
</html>
```

#### Passed Example 5

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed equivalent resources.

```html
<html lang="en">
	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-one-copy.html"> </iframe>
</html>
```

#### Passed Example 6

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed the same resource. `src` attributes only differ due to trailing slashes, but resolves to the same resource after redirects caused by user agent.

```html
<html lang="en">
	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/sub-dir-2/"> </iframe>

	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/sub-dir-2"> </iframe>
</html>
```

#### Passed Example 7

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed equivalent resources. Resources differ by the amount of information available and/or a differently worded information.

```html
<html lang="en">
	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-three-same-as-page-one.html"> </iframe>
</html>
```

#### Passed Example 8

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed equivalent resources. Each `iframe` refers to a different url that referenced different advertising content (giving by a third party) but embed resources has equivalent purpose: showing an advertising.

```html
<html lang="en">
	<iframe title="advertising" src="/test-assets/iframe-unique-name-4b1c6c/advertising-one.html"> </iframe>

	<iframe title="advertising" src="/test-assets/iframe-unique-name-4b1c6c/advertising-two.html"> </iframe>
</html>
```

#### Passed Example 9

All three `iframe` elements have the same [accessible name][]. The second `iframe` (with `id` `"light"` ) is only part of the [light tree][]. When the [shadow tree][] is attached to `host` and flattened, this `iframe` is overwritten and therefore not part of the [flat tree][]. Hence, only the first and third `iframe` are considered by this rule and they both point to the [same resource][].

```html
<iframe id="always" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<div id="host">
	<iframe id="light" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
</div>

<script>
	const host = document.getElementById('host')
	const shadowRoot = host.attachShadow({ mode: 'open' })
	shadowRoot.innerHTML =
		'<iframe id="shadow" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>'
</script>
```

#### Passed Example 10

The [browsing context][] of the `iframe` with `id` `"container"` has the [browsing context][] of the main [document][] as an [ancestor browsing context][]. Hence, they share the same [top-level browsing context][] (namely, the [browsing context][] of the main [document][]) and are part of the same [web page (HTML)][]. Therefore, both `iframe` with `id` `"top-level"` and `"nested"` are considered and, since they embed the same document, the rule passes.

```html
<iframe id="top-level" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe
	id="container"
	srcdoc="<iframe id='nested' title='List of Contributors' src='/test-assets/iframe-unique-name-4b1c6c/page-one.html'> </iframe>"
></iframe>
```

### Failed

#### Failed Example 1

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) but don't embed equivalent resources.

```html
<html lang="en">
	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
</html>
```

#### Failed Example 2

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `aria-label` attribute) but don't embed equivalent resources.

```html
<html lang="en">
	<iframe aria-label="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe aria-label="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
</html>
```

#### Failed Example 3

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` and `aria-label` attributes) but don't embed equivalent resources.

```html
<html lang="en">
	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe aria-label="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
</html>
```

#### Failed Example 4

The [browsing context][] of the `iframe` with `id` `"container"` has the [browsing context][] of the main [document][] as an [ancestor browsing context][]. Hence, they share the same [top-level browsing context][] (namely, the [browsing context][] of the main [document][]) and are part of the same [web page (HTML)][]. Therefore, both `iframe` with `id` `"top-level"` and `"nested"` are considered and the rule fails.

```html
<iframe id="top-level" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe
	id="container"
	srcdoc="<iframe id='nested' title='List of Contributors' src='/test-assets/iframe-unique-name-4b1c6c/page-two.html'> </iframe>"
></iframe>
```

### Inapplicable

#### Inapplicable Example 1

There is only one `iframe` element within the [document tree][]. Therefore, there is no set of two or more `iframe` elements with the same [accessible name][] and the rule is inapplicable.

```html
<html lang="en">
	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
</html>
```

#### Inapplicable Example 2

Each of the two `iframe` elements within the [document tree][] has a different [accessible name][] (given by the `title` attribute). Therefore, there is no set of two or more `iframe` elements with the same [accessible name][] and the rule is inapplicable.

```html
<html lang="en">
	<iframe title="List of Contributors to Repository 1" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
	</iframe>

	<iframe title="List of Contributors to Repository 2" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html">
	</iframe>
</html>
```

#### Inapplicable Example 3

Each of the two `iframe` elements within the [document tree][] has a different [accessible name][] (given by the `aria-label` attribute). Therefore, there is no set of two or more `iframe` elements with the same [accessible name][] and the rule is inapplicable.

```html
<html lang="en">
	<iframe aria-label="List of Contributors to Repository 1" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
	</iframe>

	<iframe aria-label="List of Contributors to Repository 2" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html">
	</iframe>
</html>
```

#### Inapplicable Example 4

Each of the two `iframe` elements within the [document tree][] has a different [accessible name][] (given by the `aria-labelledby` attribute and matching elements). Therefore, there is no set of two or more `iframe` elements with the same [accessible name][] and the rule is inapplicable.

```html
<html lang="en">
	<div id="desc-for-title">List of Contributors</div>
	<iframe aria-labelledby="desc-for-title" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<div id="desc-for-title1">List of Reviewers</div>
	<iframe aria-labelledby="desc-for-title1" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
</html>
```

#### Inapplicable Example 5

Both `iframe` elements have the same [accessible name][] (given by the `title` attribute) within the same [document tree][], but one of them is not [included in the accessibility tree][]. Therefore, there is no set of two or more `iframe` elements that are [included in the accessibility tree][] and have the same [accessible name][], and the rule is inapplicable.

```html
<html lang="en">
	<iframe aria-hidden="true" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
	</iframe>

	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
</html>
```

#### Inapplicable Example 6

The `alt` attribute does not provide an [accessible name][] for `iframe` elements. Therefore, these `iframe` elements do not have an [accessible name][] and the rule is inapplicable.

```html
<html lang="en">
	<iframe alt="Some" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe alt="Some" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
</html>
```

#### Inapplicable Example 7

The rule does not apply to `object` elements.

```html
<html lang="en">
	<object title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </object>

	<object aria-label="List of Contributors Clone" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </object>
</html>
```

#### Inapplicable Example 8

These `iframe` elements do not have [accessible names][accessible name].

```html
<html lang="en">
	<iframe src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>

	<iframe src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
</html>
```

#### Inapplicable Example 9

These `iframe` elements are not [included in the accessibility tree][], because of the `display:none` styling.

```html
<html lang="en">
	<iframe style="display:none;" title="Document One" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
	</iframe>

	<iframe style="display:none;" aria-label="Document One" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html">
	</iframe>
</html>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[ancestor browsing context]: https://html.spec.whatwg.org/#ancestor-browsing-context 'Definition of ancestor browsing context'
[browsing context]: https://html.spec.whatwg.org/#browsing-context 'Definition of browsing context'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[document tree]: https://dom.spec.whatwg.org/#document-trees 'Definition of document tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[sc412]: https://www.w3.org/TR/WCAG22/#name-role-value 'Success Criterion 4.1.2: Name, Role, Value'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'Definition of top level browsing context'
[usc412]: https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html 'Understanding Success Criterion 4.1.2: Name, Role, Value'
[web page (html)]: #web-page-html 'Definition of web page (HTML)'
[same resource]: #same-resource 'Definition of same resource'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[light tree]: https://dom.spec.whatwg.org/#concept-light-tree 'Definition of light tree'
[shadow tree]: https://dom.spec.whatwg.org/#shadow-tree 'Definition of shadow tree'
[matching]: #matching-characters 'Definition of matching characters'

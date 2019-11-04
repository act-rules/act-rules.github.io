---
id: 4b1c6c
name: '`iframe` elements with identical accessible names have equivalent purpose'
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
acknowledgements:
  authors:
    - Jey Nandakumar
    - Audrey Maniez
---

## Applicability

This rule applies to any set of any two or more `iframe` elements in the same [document tree][] that are [included in the accessibility tree][], and that have [matching](#matching-characters) [accessible names][accessible name] that do not only consist of [whitespace](#whitespace).

**Note:** The test target for this rule is the full set of `iframe` elements within the same [document tree][] that share the same [matching](#matching-characters) [accessible name][].

## Expectation

The `iframe` elements in each set of target elements embed the the [same resource](#same-resource) or [equivalent resources](#equivalent-resource).

**Note:** Resolving the embedded resource includes any redirects that are instant.

## Assumptions

- This rule assumes that, within the context of the test subject, the description provided by the [accessible name][] of an `iframe` can only accurately describe one resource (notably, homonyms alone are not used as `iframe` names). Thus, if two or more `iframe` elements have the same [accessible name][] but embed different resources, at least one of them does not describe its purpose.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64)
- [WCAG 2.0: Name, Role, Value: Understanding SC 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)

## Test Cases

### Passed

#### Passed Example 1

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed the same resource.

```html
<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
```

#### Passed Example 2

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` and `aria-label` attributes) and embed the same resource.

```html
<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<iframe aria-label="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
```

#### Passed Example 3

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `aria-labelledby` attribute and corresponding elements) and embed the same resource.

```html
<div id="desc-for-title">List of Contributors</div>
<iframe aria-labelledby="desc-for-title" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<div id="desc-for-title1">List of Contributors</div>
<iframe aria-labelledby="desc-for-title1" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
```

#### Passed Example 4

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed equivalent resources. Only the navigation options (bread crumbs and local sub menus) differ due to different placement in navigation hierarchy.

```html
<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/sub-dir/page-one.html"> </iframe>
```

#### Passed Example 5

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed equivalent resources.

```html
<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-one-copy.html"> </iframe>
```

#### Passed Example 6

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed the same resource. `src` attributes only differ due to trailing slashes, but resolves to the same resource after redirects caused by user agent.

```html
<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/sub-dir-2/"> </iframe>

<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/sub-dir-2"> </iframe>
```

#### Passed Example 7

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed equivalent resources. Resources differ by the amount of information available and/or a differently worded information.

```html
<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-three-same-as-page-one.html"> </iframe>
```

#### Passed Example 8

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed equivalent resources. Each `iframe` refers to a different url that referenced different advertising content (giving by a third party) but embed resources has equivalent purpose: showing an advertising.

```html
<iframe title="advertising" src="/test-assets/iframe-unique-name-4b1c6c/advertising-one.html"> </iframe>

<iframe title="advertising" src="/test-assets/iframe-unique-name-4b1c6c/advertising-two.html"> </iframe>
```

### Failed

#### Failed Example 1

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) but don't embed equivalent resources.

```html
<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
```

#### Failed Example 2

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `aria-label` attribute) but don't embed equivalent resources.

```html
<iframe aria-label="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<iframe aria-label="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
```

#### Failed Example 3

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` and `aria-label` attributes) but don't embed equivalent resources.

```html
<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<iframe aria-label="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
```

### Inapplicable

#### Inapplicable Example 1

There is only one `iframe` element within the [document tree][]. Therefore, there is no set of two or more `iframe` elements with the same [accessible name][] and the rule is inapplicable.

```html
<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
```

#### Inapplicable Example 2

Each of the two `iframe` elements within the [document tree][] has a different [accessible name][] (given by the `title` attribute). Therefore, there is no set of two or more `iframe` elements with the same [accessible name][] and the rule is inapplicable.

```html
<iframe title="List of Contributors to Repository 1" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe title="List of Contributors to Repository 2" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html">
</iframe>
```

#### Inapplicable Example 3

Each of the two `iframe` elements within the [document tree][] has a different [accessible name][] (given by the `aria-label` attribute). Therefore, there is no set of two or more `iframe` elements with the same [accessible name][] and the rule is inapplicable.

```html
<iframe aria-label="List of Contributors to Repository 1" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe aria-label="List of Contributors to Repository 2" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html">
</iframe>
```

#### Inapplicable Example 4

Each of the two `iframe` elements within the [document tree][] has a different [accessible name][] (given by the `aria-labelledby` attribute and matching elements). Therefore, there is no set of two or more `iframe` elements with the same [accessible name][] and the rule is inapplicable.

```html
<div id="desc-for-title">List of Contributors</div>
<iframe aria-labelledby="desc-for-title" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<div id="desc-for-title1">List of Reviewers</div>
<iframe aria-labelledby="desc-for-title1" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
```

#### Inapplicable Example 5

Both `iframe` elements have the same [accessible name][] (given by the `title` attribute) within the same [document tree][], but one of them is not [included in the accessibility tree][]. Therefore, there is no set of two or more `iframe` elements that are [included in the accessibility tree][] and have the same [accessible name][], and the rule is inapplicable.

```html
<iframe aria-hidden="true" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
```

#### Inapplicable Example 6

Two of the `iframe` elements, with `id` attribute `level1-frame1` and `level2-frame1` have the same [accessible name][] (given by the `title` attribute). However, they are not part of the same [document tree][] because `level2-frame1` is itself embedded in another `iframe` element. Therefore, there is no set of two or more `iframe` elements with the same [accessible name][] within the same [document tree][] and the rule is inapplicable.

```html
<iframe id="level1-frame1" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>
<iframe
	id="level1-frame2"
	title="List of Contributors 2"
	src="/test-assets/iframe-unique-name-4b1c6c/page-with-iframe.html"
>
	<!--
  Content of document includes an iframe:
  
  <iframe id="level2-frame1" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
  </iframe>
  -->
</iframe>
```

#### Inapplicable Example 7

The `alt` attribute does not provide an [accessible name][] for `iframe` elements. Therefore, these `iframe` elements do not have an [accessible name][] and the rule is inapplicable.

```html
<iframe alt="Some" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<iframe alt="Some" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
```

#### Inapplicable Example 8

The rule does not apply to `object` elements.

```html
<object title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </object>

<object aria-label="List of Contributors Clone" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </object>
```

#### Inapplicable Example 9

These `iframe` elements do not have [accessible names][accessible name].

```html
<iframe src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>

<iframe src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
```

#### Inapplicable Example 10

These `iframe` elements are not [included in the accessibility tree][], because of the `display:none` styling.

```html
<iframe style="display:none;" title="Document One" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<iframe style="display:none;" aria-label="Document One" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html">
</iframe>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[document tree]: https://dom.spec.whatwg.org/#document-trees 'Definition of document tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'

---
id: 4b1c6c
name: Iframes with identical accessible names serve equivalent purpose
description: |
 This rule checks that iframes with identical accessible names embed the same resource or equivalent resources.
success_criterion:
- 4.1.2
test_aspects:
- DOM Tree
- CSS Styling
authors:
- Jey Nandakumar
- Audrey Maniez
---

## Test procedure

### Applicability

This rule applies to any set of any two or more `iframe` elements in the same [document tree](https://www.w3.org/TR/dom41/#document-trees) that are [included in the accessibility tree](#included-in-the-accessibility-tree), and that have [matching](#matching-characters) [accessible names](#accessible-name) that do not only consist of [whitespace](#whitespace).

**Note:** The test target for this rule is the full set of `iframe` elements within the same [document tree](https://www.w3.org/TR/dom41/#document-trees) that share the same [matching](#matching-characters) [accessible name](#accessible-name).

### Expectation

The `iframes` in each set of target elements embeds the the [same resource](#same-resource) or [equivalent resources](#equivalent-purpose).

**Note:** Resolving the embedded resource includes any redirects that are instant.

## Assumptions

*There are currently no assumptions*

## Accessibility Support

*There are no major accessibility support issues known for this rule.*

## Background

- [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64)
- [WCAG 2.0: Name, Role, Value: Understanding SC 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)

## Test cases

### Passed

#### Passed example 1

Multiple `iframe` within document tree have the same accessible name (given by `title`) and embed the same resource.

```html
<iframe title="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe title="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>
```

#### Passed example 2

Multiple `iframe` within document tree have the same accessible name (given by `title` and `aria-label`) and embed the same resource.

```html
<iframe title="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe aria-label="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>
```

#### Passed example 3

Multiple `iframe` within document tree have the same accessible name (given by `aria-labelledby`) and embed the same resource.

```html
<div id="desc-for-title">List of Contributors</div>
<iframe aria-labelledby="desc-for-title" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<div id="desc-for-title1">List of Contributors</div>
<iframe aria-labelledby="desc-for-title1" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>
```

#### Passed example 4

Multiple `iframe` within document tree have the same accessible name (given by `title`) and embed equivalent resources. Only the navigation options (bread crumbs and local sub menus) differ due to different placement in navigation hierarchy.

```html
<iframe title="Contact us" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe title="Contact us" src="../test-assets/iframe-unique-name-4b1c6c/sub-dir/page-one.html">
</iframe>
```

#### Passed example 5

Multiple `iframe` within document tree have the same accessible name (given by `title`) and embed  equivalent ressources.

```html
<iframe title="Contact us" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe title="Contact us" src="../test-assets/iframe-unique-name-4b1c6c/page-one-copy.html">
</iframe>
```

#### Passed example 6

Multiple `iframe` within document tree have the same accessible name (given by `title`) and embed the same resource. `src` attributes only differ due to trailing slashes, but resolves to the same resource after redirects caused by user agent.

```html
<iframe title="Contact us" src="../test-assets/iframe-unique-name-4b1c6c/sub-dir-2/">
</iframe>

<iframe title="Contact us" src="../test-assets/iframe-unique-name-4b1c6c/sub-dir-2">
</iframe>
```

#### Passed example 7

Multiple `iframe` within document tree have the same accessible name (given by `title`) and embed equivalent ressources. Ressources differ by the amount of information available and/or a differently worded information.

```html
<iframe title="Contact us" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe title="Contact us" src="../test-assets/iframe-unique-name-4b1c6c/page-three-same-as-page-one.html">
</iframe>
```

#### Passed example 8

Multiple `iframe` within document tree have the same accessible name (given by `title`) and embed equivalent ressources. Each `iframe` refers to a different url that referenced different advertising content (giving by a third party) but embed ressources has equivalent purpose: showing an advertising.

```html
<iframe title="advertising" src="../test-assets/iframe-unique-name-4b1c6c/advertising-one.html">
</iframe>

<iframe title="advertising" src="../test-assets/iframe-unique-name-4b1c6c/advertising-two.html">
</iframe>
```

### Failed

#### Failed example 1

Multiple `iframe` elements have the same accessible name (given by `title`) but don't embed equivalent ressources.

```html
<iframe title="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe title="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-two.html">
</iframe>
```

#### Failed example 2

Multiple `iframe` elements have the same accessible name (given by `aria-label`) but don't embed equivalent ressources.

```html
<iframe aria-label="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe aria-label="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-two.html">
</iframe>
```

#### Failed example 3

Multiple `iframe` elements have the same accessible name (given by `title` and `aria-label`) but don't embed equivalent ressources.

```html
<iframe title="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe aria-label="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-two.html">
</iframe>
```

### Inapplicable

#### Inapplicable example 1 

Usage of `title` attribute to describe the `iframe` content, and there is only one iframe within document tree.

```html
<iframe title="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>
```

#### Inapplicable example 2

Multiple `iframe` elements in the document having different `title` descriptions as accessible name.

```html
<iframe title="List of Contributors to Repository 1" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe title="List of Contributors to Repository 2" src="../test-assets/iframe-unique-name-4b1c6c/page-two.html">
</iframe>
```

#### Inapplicable example 3

Multiple `iframe` elements in the document having different `aria-label` descriptions as accessible name.

```html
<iframe aria-label="List of Contributors to Repository 1" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe aria-label="List of Contributors to Repository 2" src="../test-assets/iframe-unique-name-4b1c6c/page-two.html">
</iframe>
```

#### Inapplicable example 4

Multiple `iframe` elements in the document having different `aria-labelledby` descriptions as accessible name.

```html
<div id="desc-for-title">List of Contributors</div>
<iframe aria-labelledby="desc-for-title" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<div id="desc-for-title1">List of Reviewers</div>
<iframe aria-labelledby="desc-for-title1" src="../test-assets/iframe-unique-name-4b1c6c/page-two.html">
</iframe>
```

#### Inapplicable example 5

`iframe` having the same `title` within a given document tree, but one of them is not included in the accessibility tree.

```html
<iframe aria-hidden='true' title="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe title="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-two.html">
</iframe>
```

#### Inapplicable example 6

`iframe` are allowed to have the same `title` across different document trees. In this example `iframe` with `id` `level2-frame1` has a parent document tree of `iframe` with `id` `level1-frame2`, and does not share the document tree of `iframe` with `id` `level1-frame1`.

```html
<iframe id="level1-frame1" title="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>
<iframe id="level1-frame2" title="List of Contributors 2" src="../test-assets/iframe-unique-name-4b1c6c/page-with-iframe.html">
  <!--
  Content of document includes an iframe:
  
  <iframe id="level2-frame1" title="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
  </iframe>
  -->
</iframe>
```

#### Inapplicable example 7

`alt` cannot be used to provide accessible name for iframe.

```html
<iframe alt="Some" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>
```

#### Inapplicable example 8

Does not apply to `object` elements.

```html
<object title="List of Contributors" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</object>

<object aria-label="List of Contributors Clone" src="../test-assets/iframe-unique-name-4b1c6c/page-two.html">
</object>
```

#### Inapplicable example 9

No accessible name is provided

```html
<iframe src="../test-assets/iframe-unique-name-4b1c6c/page-two.html">
</iframe>

<iframe src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>
```

#### Inapplicable example 10

Does not apply to `iframe` elements that are not included in the accessibility tree, via `display:none`.

```html
<iframe style="display:none;" title="Document One" src="../test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe style="display:none;" aria-label="Document One" src="../test-assets/iframe-unique-name-4b1c6c/page-two.html">
</iframe>
```
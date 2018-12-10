---
name: iframe has a unique accessible name

description: |
 The accessible name for each iframe is unique

success_criterion:
- 4.1.2

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Jey Nandakumar
---

## Test procedure

### Applicability

This rule applies to any two ore more `iframe` elements that are [included in the accessibility tree](#included-in-the-accessibility-tree) and have the same [non-empty](#non-empty) [accessible name](#accessible-name), within the same [document tree](https://www.w3.org/TR/dom41/#document-trees) or [shadow tree](https://www.w3.org/TR/dom41/#shadow-trees), where the `src` attributes are different.

### Expectation

For each set of target elements, the `iframes` fulfill the same purpose indicated by the [accessible names](#accessible-name).

**Note:** 
- An `iframe` creates an embedded browsing context. The content of this browsing context is not part of the [document tree](https://www.w3.org/TR/dom41/#document-trees) or [shadow tree](https://www.w3.org/TR/dom41/#shadow-trees) that it is embedded in.

## Assumptions

There are no good use cases for using the same [accessible name](#accessible-name) for iframes with different sources.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [H64: Using the title attribute of the frame and iframe elements](http://www.w3.org/TR/WCAG20-TECHS/H64.html)
- [WCAG 2.0: Name, Role, Value: Understanding SC 4.1.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

## Test cases

### Passed

#### Passed example 1

Usage of `title` attribute to describe the `iframe` content, and there is only one iframe within document tree.

```html
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
```

#### Passed example 2

Multiple `iframe` elements in the document having different `title` descriptions as accessible name.

```html
<iframe title="List of Contributors to Repository 1" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe title="List of Contributors to Repository 2" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

#### Passed example 3

Multiple `iframe` elements in the document having different `aria-label` descriptions as accessible name.

```html
<iframe aria-label="List of Contributors to Repository 1" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe aria-label="List of Contributors to Repository 2" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

#### Passed example 4

Multiple `iframe` elements in the document having different `aria-labelledby` descriptions as accessible name.

```html
<div id="desc-for-title">List of Contributors</div>
<iframe aria-labelledby="desc-for-title" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<div id="desc-for-title1">List of Reviewers</div>
<iframe aria-labelledby="desc-for-title1" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

#### Passed example 5

`iframe` having the same `title` within a given document tree, but one of them is not included in the accessibility tree.

```html
<iframe aria-hidden='true' title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

#### Passed example 6

`iframe` are allowed to have the same `title` across different document trees. In this example `iframe` with `id` `level2-frame1` has a parent document tree of `iframe` with `id` `level1-frame2`, and does not share the document tree of `iframe` with `id` `level1-frame1`.

```html
<iframe id="level1-frame1" title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe id="level1-frame2" title="List of Contributors 2" src="../test-assets/SC5-1-2-iframe-unique-name-nested.html">
  <!--
  Content of document includes an iframe:

  <iframe 
    id="level2-frame1" title="List of Contributors"     src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
  </iframe>
  -->
</iframe>
```

#### Passed example 7

Usage of `title` attribute to describe the `iframe` content, and there are multiple `iframe` within document tree, with the same `src` and the same accessible name.

```html
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
```

### Failed

#### Failed example 1

Multiple `iframe` within a document tree, with the same accessible name and different src.

```html
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

#### Failed example 2

Multiple frames having the same `aria-label` and different `src` and the same `iframe` title within a given document tree.

```html
<iframe aria-label="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe aria-label="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

#### Failed example 3

Multiple frames having the same accessible name given by `title` and `aria-label` with different `src` within a given document tree.

```html
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe aria-label="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

### Inapplicable

#### Inapplicable example 1

Accessible name provided is empty.

```html
<iframe title="" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
```

#### Inapplicable example 2

Accessible name provided is empty.

```html
<iframe aria-label="" src="../test-assets/SC4-1-2-iframe-unique-name-doc3.html">
</iframe>
```

#### Inapplicable example 3

`alt` cannot be used to provide accessible name for iframe.

```html
<iframe alt="Some" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
```

#### Inapplicable example 4

Does not apply to non `iframe` elements.

```html
<object title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</object>
<object aria-label="List of Contributors Clone" src="../test-assets/SC4-1-2-iframe-unique-name-doc3.html">
</object>
```

#### Inapplicable example 5

No accessible name is provided

```html
<iframe src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe src="../test-assets/SC4-1-2-iframe-unique-name-doc3.html">
</iframe>
```

#### Inapplicable example 6

Does not apply to `iframe` elements that are not included in the accessibility tree, via `display:none`.

```html
<iframe style="display:none;" title="Document One" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe style="display:none;" aria-label="Document One" src="../test-assets/SC4-1-2-iframe-unique-name-doc3.html">
</iframe>
```

#### Inapplicable example 7

Does not apply to `iframe` elements that are not included in the accessibility tree, via `aria-hidden='true'`.

```html
<iframe aria-hidden="true" title="Document One" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe aria-hidden="true" aria-label="Document One" src="../test-assets/SC4-1-2-iframe-unique-name-doc3.html">
</iframe>
```
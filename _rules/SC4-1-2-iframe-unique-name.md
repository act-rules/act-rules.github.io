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

The rule applies to `iframe` elements that are [exposed to assistive technologies](#exposed-to-assistive-technologies) and have a [non-empty](#non-empty) [accessible name](#accessible-name).

### Expectation

Each target element has an [accessible name](#accessible-name) that is unique across all other accessible names for `iframes` within the same [document tree](https://www.w3.org/TR/dom41/#document-trees) or [shadow tree](https://www.w3.org/TR/dom41/#shadow-trees) as the target element.

**Note:** 
- `iframes` with the same `src` can have the same [accessible name](#accessible-name).
- An `iframe` creates an embedded browsing context. The content of this browsing context is not part of the [document tree](https://www.w3.org/TR/dom41/#document-trees) or [shadow tree](https://www.w3.org/TR/dom41/#shadow-trees) that it is embedded in.

## Assumptions

*There are currently no assumptions*

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

`iframes` having the same `title` within a given document tree, but one of them is not exposed to assistive technologies.

```html
<iframe aria-hidden='true' title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```


#### Passed example 6

`iframes` are allowed to have the same `title` across different document tree. In this example `iframe` with `id` `level2-frame1` has a parent document tree of `iframe` with `id` `level1-frame2`, and does not share the document tree of `iframe` with `id` `level1-frame1`.

```html
<iframe id="level1-frame1" title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe id="level1-frame2" title="List of Contributors 2" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
  <iframe id="level2-frame1" title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
  </iframe>
</iframe>
```

### Failed

#### Failed example 1

Multiple frames having the same `title` within a given document tree.

```html
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

#### Failed example 2

Multiple frames having the same `aria-label` within a given document tree.

```html
<iframe aria-label="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe aria-label="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

#### Failed example 3

Multiple frames having the same accessible name given by `title` and `aria-label` within a given document tree

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
<iframe aria-label="" src="../test-assets/SC4-1-2-iframe-unique-name-doc3.html">
</iframe>
```

#### Inapplicable example 2

`alt` cannot be used to provide accessible name for iframe.

```html
<iframe alt="Some" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
```

#### Inapplicable example 3

Does not apply to non `iframe` elements.

```html
<object title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</object>
<object aria-label="List of Contributors Clone" src="../test-assets/SC4-1-2-iframe-unique-name-doc3.html">
</object>
```

#### Inapplicable example 4

No accessible name is provided

```html
<iframe src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe src="../test-assets/SC4-1-2-iframe-unique-name-doc3.html">
</iframe>
```

#### Inapplicable example 5

Does not apply to `iframe` elements that are not exposed to assistive technologies.

```html
<iframe style="display:none;" title="Document One" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe style="display:none;" aria-label="Document One" src="../test-assets/SC4-1-2-iframe-unique-name-doc3.html">
</iframe>
```

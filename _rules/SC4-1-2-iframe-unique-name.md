---
name: IFrame has a unique accessible name

description: |
 Each iframe element has a unique accessible name

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

The rule applies to `iframe` elements within a given [document context](#document-context) that have either `title`, `aria-label` or `aria-labelled-by` attribute.

**Note: This rule does not ensure that the `iframe` targets with the same `src` destination have the same title. It only checks `title` of a given frame for uniqueness across the document context.**

### Expectation

Each test target has a `title`, `aria-label` or `aria-labelledby` attribute value that is unique within the [document context](#document-context) of the element.

 ## Assumptions

The rule assumes that the target `iframe` is used as an user interface component, unless explicity overridden by specifying `tabindex="-1"`.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [http://www.w3.org/TR/WCAG20-TECHS/H64.html](http://www.w3.org/TR/WCAG20-TECHS/H64.html)
- [https://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-rsv](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-rsv)

## Test cases

### Passed

#### Pass example 1

Usage of `title` attribute to describe the `iframe` content, and only one iframe with in document context.

```html
<iframe title="List of Contributors" role="document" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
```

#### Pass example 2

Multiple `iframe` elements in the document having different `title` descriptions

```html
<iframe title="List of Contributors to Repository 1" role="document" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe title="List of Contributors to Repository 2" role="document" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

#### Pass example 3

Multiple `iframe` elements in the document having different `aria-label` descriptions.

```html
<iframe aria-label="List of Contributors to Repository 1" role="document" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe aria-label="List of Contributors to Repository 2" role="document" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

#### Pass example 4

Multiple `iframe` elements in the document having different `aria-labelledby` descriptions.

```html
<div id="desc-for-title">List of Contributors</div>
<iframe aria-labelledby="desc-for-title" role="document" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe aria-labelledby="desc-for-title" role="document" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

### Failed

#### Fail example 1

Multiple frames having the same `title` within a given document context

```html
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

#### Fail example 2

Multiple frames having the same `aria-label` within a given document context

```html
<iframe aria-label="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe aria-label="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

#### Fail example 3

Multiple frames having the same name given by `title` and `aria-label` within a given document context

```html
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe aria-label="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc2.html">
</iframe>
```

### Inapplicable

#### Inapplicable example 1

Does not apply to non `iframe` elements that are nested.

```html
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-iframe-unique-name-doc1.html">
</iframe>
<iframe aria-label="List of Contributors Clone" src="../test-assets/SC4-1-2-iframe-unique-name-doc3.html">
</iframe>
```
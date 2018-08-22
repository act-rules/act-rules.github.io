---
name: IFrame has an accessible name

description: |
 Each iframe element has an accessible name

success_criterion:
- 4.1.2
- 2.4.1

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Jey Nandakumar
---

## Test procedure

### Applicability

The rule applies to `iframe` elements that are [visible on the page](#visible-on-the-page) and [focusable](#focusable).

### Expectation

- Each target element has an [accessible name](#accessible-name) that is [non-empty](#non-empty), provided by using the `title`, `aria-label`, or `aria-labelledby` attributes.

## Assumptions

- The rule assumes that the target `iframe` is used as an user interface component, unless explicity overridden by specifying `tabindex="-1"`.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [http://www.w3.org/TR/WCAG20-TECHS/H64.html](http://www.w3.org/TR/WCAG20-TECHS/H64.html)
- [https://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-rsv](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-rsv)
-  [http://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip)

# Test cases

## Passed

Usage of `title` attribute to describe the `iframe` content.

```html
<iframe title="List of Contributors" role="document" src="../test-assets/SC4-1-2-frame-doc.html">
</iframe>
```

Usage of `aria-label` attribute to describe the `frame` content.

```html
<iframe role="applo" aria-label="Advertisement of tours to Great Wall of China" src="../test-assets/SC4-1-2-frame-doc.html" >
</iframe>
```

Usage of `aria-labelledby` attribute to describe the `iframe` content.

```html
<div id="frame-title-helper">Watch highlights of the Worldcup</div>
<iframe aria-labelledby="frame-title-helper" src="../test-assets/SC4-1-2-frame-doc.html">
</iframe>
```

Usage of `tabindex="-1"` to escape navigation and makes `iframe` non [focusable](#focusable).

```html
<iframe src="../test-assets/SC4-1-2-frame-doc.html" tabindex="-1">
</iframe>
```

Usage of `aria-hidden="true"` does not expose `iframe` to [assistive technologies](#exposed-to-assistive-technologies).

```html
<iframe aria-hidden="true" src="../test-assets/SC4-1-2-frame-doc.html">
</iframe>
```

## Failed

Usage of `name` attribute to describe the `iframe` content is not valid.

```html
<iframe name="List of Contributors" src="../test-assets/SC4-1-2-frame-doc.html" >
</iframe>
```

`iframe` with no `title` attribute to describe content is not valid.

```html
<iframe src="../test-assets/SC4-1-2-frame-doc.html" >
</iframe>
```

Empty `aria-label` attribute to describe the `frame` content is not valid.

```html
<iframe aria-label="" src="../test-assets/SC4-1-2-frame-doc.html" >
</iframe>
```

Usage of non existing `aria-labelledby` reference element to describe the `iframe` content is not valid.

```html
<iframe aria-labelledby="does-not-exist" src="../test-assets/SC4-1-2-frame-doc.html">
</iframe>
```

## Inapplicable

Does not apply an non `iframe` element.

```html
<button role='link'>take me somewhere</button>
```
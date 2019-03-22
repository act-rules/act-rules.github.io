---
name: iframe has an accessible name

description: |
 Each iframe element has an accessible name

success_criterion:
- 4.1.2 # Name, Role, Value (A)

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Jey Nandakumar
---

## Test procedure

### Applicability

The rule applies to `iframe` elements that are [included in the accessibility tree](#included-in-the-accessibility-tree).

**Note:** `frame` element is deprecated, this rule does not consider `frame` or `frameset` elements.

### Expectation

Each target element has an [accessible name](#accessible-name) that does not only consist of [Unicode separator characters](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153).

## Assumptions

- The rule assumes that the target `iframe` is used as an [user interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [H64: Using the title attribute of the frame and iframe elements](http://www.w3.org/TR/WCAG20-TECHS/H64.html)
- [Understanding Success Criterion 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [Understanding Success Criterion 2.4.1](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html)
- [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components)

## Test cases

### Passed

#### Passed example 1

Usage of `title` attribute to describe the `iframe` content.

```html
<iframe title="List of Contributors" src="../test-assets/SC4-1-2-frame-doc.html">
</iframe>
```

#### Passed example 2

Usage of `aria-label` attribute to describe the `iframe` content.

```html
<iframe aria-label="Advertisement of tours to Great Wall of China" src="../test-assets/SC4-1-2-frame-doc.html" >
</iframe>
```

#### Passed example 3

Usage of `aria-labelledby` attribute to describe the `iframe` content.

```html
<div id="frame-title-helper">Watch highlights of the Worldcup</div>
<iframe aria-labelledby="frame-title-helper" src="../test-assets/SC4-1-2-frame-doc.html">
</iframe>
```

### Failed

#### Failed example 1

Usage of `name` attribute to describe the `iframe` content is not valid.

```html
<iframe name="List of Contributors" src="../test-assets/SC4-1-2-frame-doc.html" >
</iframe>
```

#### Failed example 2

`iframe` with no `title`, `aria-label` or `aria-labelledby` attribute to describe content is not valid.

```html
<iframe src="../test-assets/SC4-1-2-frame-doc.html" >
</iframe>
```

#### Failed example 3

Empty `title` attribute is not valid.

```html
<iframe title="" src="../test-assets/SC4-1-2-frame-doc.html" >
</iframe>
```

#### Failed example 4

Empty `aria-label` attribute to describe the `frame` content is not valid.

```html
<iframe aria-label="" src="../test-assets/SC4-1-2-frame-doc.html" >
</iframe>
```

#### Failed example 5

Usage of non existing `aria-labelledby` reference element to describe the `iframe` content is not valid.

```html
<iframe aria-labelledby="does-not-exist" src="../test-assets/SC4-1-2-frame-doc.html">
</iframe>
```

#### Failed example 6

Usage of `alt` attribute to describe content is not valid.

```html
<iframe alt="List of Contributors" src="../test-assets/SC4-1-2-frame-doc.html">
</iframe>
```

### Inapplicable

#### Inapplicable example 1

Does not apply to non `iframe` element.

```html
<button>take me somewhere</button>
```

#### Inapplicable example 2

`iframe` is not included in the accessibility tree.

```html
<iframe style="display:none;" src="../test-assets/SC4-1-2-frame-doc.html">
</iframe>
```

---
id: cae760
name: '`iframe` element has non-empty accessible name'
rule_type: atomic
description: |
  This rule checks that each `iframe` element has a non-empty accessible name.
accessibility_requirements:
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Jey Nandakumar
    - Wilco Fiers
---

## Applicability

This rule applies to `iframe` elements that are [included in the accessibility tree][] and that can be accessed by [sequential focus navigation][].

**Note:** `frame` element is deprecated, this rule does not consider `frame` or `frameset` elements.

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

If an `iframe` is not perceived by the user as a single control, it does not qualify as a [user interface component][] under WCAG 2. In such a scenario, failing this rule would not fail [success criterion 4.1.2](https://www.w3.org/TR/WCAG21/#name-role-value). Unless the `iframe` is both removed from the accessibility tree and removed from [sequential focus navigation][], they usually are considered to be [user interface components][user interface component].

## Accessibility Support

- Some browsers include `iframe` elements in the [sequential focus navigation][]. This ensures that the contents of `iframe` elements can be scrolled and accessed by using the keyboard. When an `iframe` is removed from the accessibility tree, this rule is still applicable for those browsers, unless the `iframe` is explicitly removed from [sequential focus navigation][] (by having the `tabindex` attribute set to a negative value).

- Browser and assistive technology support for `iframe` elements is currently **inconsistent**. Some examples of inconsistencies include (but are not limited to):
  - Assistive technologies being set up to ignore the `title` attribute, which means that to some users the `title` attribute will not act as an [accessible name][],
  - There is a known combination of a popular browser and assistive technology that ignores `aria-label` and only announces `title` attribute as an [accessible name][]
  - Some assistive technologies ignore empty `iframe` elements, regardless of if they are focusable or if they have an accessible name.

## Background

- [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64)
- [Understanding Success Criterion 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [User interface component][]

## Test Cases

### Passed

#### Passed Example 1

This `iframe` element gets its [accessible name][] from the `title` attribute.

```html
<iframe title="Grocery List" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Passed Example 2

This `iframe` element gets its [accessible name][] from the `aria-label` attribute.

```html
<iframe aria-label="Grocery list" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Passed Example 3

This `iframe` element gets its [accessible name][] from the content of the `div` referenced with the `aria-labelledby` attribute.

```html
<div id="frame-title-helper">Grocery List</div>
<iframe aria-labelledby="frame-title-helper" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

### Failed

#### Failed Example 1

This `iframe` element has an empty (`""`) [accessible name][]. The `name` attribute is not used in computing the [accessible name][] of `iframe` elements.

```html
<iframe name="Grocery List" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 2

This `iframe` element has no attributes that would give it a non-empty (`""`) [accessible name][].

```html
<iframe src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 3

This `iframe` element has an empty (`""`) [accessible name][] because the `title` attribute has an empty string as its value.

```html
<iframe title="" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 4

This `iframe` element has an empty (`""`) [accessible name][] because the `title` attribute value is trimmed of [whitespace][] by the [accessible name computation][accessible name and description computation].

**Note:**: Because `iframe` elements are part of [sequential focus navigation][], the [explicit semantic role](#explicit-role) of `none` will be ignored, due to the [Presentational Roles Conflict Resolution](https://www.w3.org/TR/wai-aria-1.1/#presentational-roles-conflict-resolution).

```html
<iframe title=" " src="/test-assets/SC4-1-2-frame-doc.html" role="none"> </iframe>
```

### Inapplicable

#### Inapplicable Example 1

This page has no `iframe` element.

```html
<button>take me somewhere</button>
```

#### Inapplicable Example 2

This `iframe` is not [included in the accessibility tree][] because of setting a style of `display: none;`.

```html
<iframe style="display:none;" src="/test-assets/SC4-1-2-frame-doc.html"></iframe>
```

#### Inapplicable Example 3

This `iframe` element has a negative `tabindex` and therefore is not included in the [sequential focus navigation][].

```html
<iframe tabindex="-1" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[whitespace]: #whitespace 'Definition of whitespace'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components
[accessible name and description computation]: https://www.w3.org/TR/accname

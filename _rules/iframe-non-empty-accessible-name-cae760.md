---
id: cae760
name: Iframe element has non-empty accessible name
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
    - Tom Brunet
    - Wilco Fiers
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to `iframe` elements that are [included in the accessibility tree][] except if at least one of the following is true:

- the `iframe` has a negative `tabindex` [attribute value][]; or
- the `iframe` is [marked as decorative][].

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

If an `iframe` is not perceived by the user as a single control, it does not qualify as a [user interface component][] under WCAG 2. In such a scenario, failing this rule would not fail [success criterion 4.1.2](https://www.w3.org/TR/WCAG22/#name-role-value). Unless the `iframe` is both removed from the accessibility tree and removed from [sequential focus navigation][], they usually are considered to be [user interface components][user interface component].

## Accessibility Support

- Browser and assistive technology support for `iframe` elements is currently **inconsistent**. Some examples of inconsistencies include (but are not limited to):
  - There is a known combination of a popular browser and assistive technology that ignores `aria-label` and only announces `title` attribute as an [accessible name][]
  - Some assistive technologies ignore empty `iframe` elements, regardless of if they are focusable or if they have an accessible name.
  - Some browsers instantly redirect focus from `iframe` elements to the first focusable element inside that iframe. This redirect makes it appear as though the `iframe` never receives focus. This occurs even if the `iframe` has a non-negative `tabindex` [attribute value][].
  - Not all browsers redirect focus on `iframe` elements. This ensures that the contents of `iframe` elements can be scrolled and accessed by using the keyboard. This must not be circumvented by using a negative tabindex, as this will make the `iframe` completely inaccessible for keyboard navigation.

## Background

The `frame` element is deprecated, this rule does not consider `frame` or `frameset` elements.

Due to inconsistencies in handling focus on `iframe`, this rule ignores `iframe` elements for which there is an attempt to hide them from assistive technologies. Whether `iframe` elements that are inapplicable to this rule still require an accessible name varies between browsers.

### Bibliography

- [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H64)
- [Understanding Success Criterion 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
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

```html
<iframe title=" " src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
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

This `iframe` element has a negative `tabindex` [attribute value][].

```html
<iframe tabindex="-1" src="/test-assets/SC4-1-2-frame-doc.html" style="height: 250px"> </iframe>
```

#### Inapplicable Example 4

This `iframe` element has an [explicit semantic role][] of `none`.

```html
<iframe src="/test-assets/SC4-1-2-frame-doc.html" role="none"> </iframe>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[accessible name and description computation]: https://www.w3.org/TR/accname
[attribute value]: #attribute-value 'Definition of Attribute value'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[user interface component]: https://www.w3.org/TR/WCAG22/#dfn-user-interface-components
[whitespace]: #whitespace 'Definition of whitespace'
[explicit semantic role]: #explicit-role 'Definition of explicit semantic role'

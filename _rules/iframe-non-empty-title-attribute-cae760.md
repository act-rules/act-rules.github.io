---
id: cae760
name: '`iframe` element has non-empty title attribute'
rule_type: atomic
description: |
  This rule checks that each `iframe` element has a non-empty `title` attribute.
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

The rule applies to `iframe` elements, which either are part of [sequential focus navigation][], or for which all the following are true:

- **showing**: the `iframe` has a [hidden state][] of `false`; and
- **non-presentational**: the `iframe` does not have an [explicit role][] of `presentation` or `none`; and
- **content**: the `iframe` has a [content document][] with [content][] [included in the accessibility tree][].

## Expectation

Each target element has a `title` [attribute value][] that is neither empty (`""`) nor only [ASCII whitespace][].

## Assumptions

This rule assumes that an `iframe` is only a [user interface component][] if it is a container that assistive technologies can navigate into, or if it is a stop in the [sequential focus navigation][]. Since [4.1.2 Name Role Value][sc412] only applies to [user interface components][user interface component] not all `iframe` elements require a `title` attribute, including some `iframe` elements that are announced by assistive technologies.

## Accessibility Support

There are substantial differences between how various browsers and assistive technologies treat `iframe` elements. This rule is designed to work in a variety of commonly used combinations of them. Some notable differences are:

- Some browsers do not use the [accessible name computation][] to compute the name of an `iframe` element, and instead only announce the `title` attribute.

- Some browsers treat `iframe` elements as a stop in [sequential focus navigation][]. This ensures that the contents of `iframe` elements can be scrolled and accessed by using the keyboard. In other browsers, when an `iframe` receives focus, the focus is redirected to the first focusable element inside the document of the `iframe`.

- Some browsers include the content of `iframe` elements in the reading order of the page, whereas others treat an `iframe` as a container that needs to be "entered" to access the content. The container behavior of `iframes` can be disabled by setting the `role` [attribute value][] to `presentation` or `none`.

- Some browsers have a specific role for "presentational iframes". This role is applied when the `role` attribute is set to `presentation` or `none`. These presentational iframes do not use the [presentational role conflict resolution][].

- Some assistive technologies ignore empty `iframe` elements, regardless of them being focusable or having an accessible name.

## Background

Some inapplicable examples remove the `iframe` element from sequential focus navigation using a negative `tabindex`. This makes the `iframe` completely inoperable with the keyboard. If any content in the `iframe` needs to be keyboard accessible, or any of its content needs to be scrolled, this creates a keyboard accessibility issue. This needs to be tested separately.

- [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64)
- [Understanding Success Criterion 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)

## Test Cases

### Passed

#### Passed Example 1

This `iframe` element has a non-empty `title` [attribute value][].

```html
<iframe title="Grocery List" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Passed Example 2

This `iframe` element with a [semantic role][] of `article` has a non-empty `title` [attribute value][].

```html
<iframe role="article" title="Grocery List" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

### Failed

#### Failed Example 1

This `iframe` element has no `title` attribute.

```html
<iframe src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 2

This `iframe` element has an empty (`""`) `title` [attribute value][].

```html
<iframe title="" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 3

This `iframe` element has `title` [attribute value][] that consists of only [ASCII whitespace][].

```html
<iframe title="  " src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 4

This `iframe` element has no `title` attribute, the `aria-label` attribute is not considered by this rule and many user agents.

```html
<iframe aria-label="Grocery list" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 5

This `iframe` element with a [semantic role][] of `article` has no `title` attribute, the `aria-labelledby` attribute is not considered by this rule and many user agents.

```html
<div id="frame-title-helper">Grocery List</div>
<iframe role="article" aria-labelledby="frame-title-helper" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 6

This `iframe` element has no `title` attribute, even though it has a presentational role, it is still part of [sequential focus navigation][] and thus require a name.

```html
<iframe src="/test-assets/SC4-1-2-frame-doc.html" role="none"> </iframe>
```

#### Failed Example 7

This `iframe` element has no `title` attribute, even though is has been removed from [sequential focus navigation][], it is still exposed as a container (and needs a name) without setting an [explicit role][] of `presentation` or `none`, or setting `aria-hidden` to `true`.

```html
<iframe tabindex="-1" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

### Inapplicable

#### Inapplicable Example 1

This `iframe` is not part of [sequential focus navigation][] and has a [hidden state][] of `true` because its CSS `display` property is `none`.

```html
<iframe style="display:none;" src="/test-assets/SC4-1-2-frame-doc.html"></iframe>
```

#### Inapplicable Example 2

This `iframe` is not part of [sequential focus navigation][] and has a [hidden state][] of `true` because its CSS `visibility` property is `hidden`.

```html
<iframe style="visibility:hidden;" src="/test-assets/SC4-1-2-frame-doc.html"></iframe>
```

#### Inapplicable Example 3

This `iframe` is not part of [sequential focus navigation][] because its `tabindex` [attribute value][] is `-1`; and it has an [explicit role][] of `presentation`.

**Warning:** Using `tabindex="-1"` on an `iframe` makes it, and all its content, inaccessible to keyboard.

```html
<iframe role="presentation" tabindex="-1" src="/test-assets/SC4-1-2-frame-doc.html"></iframe>
```

#### Inapplicable Example 4

This `iframe` is not part of [sequential focus navigation][] because its `tabindex` [attribute value][] is `-1`; and it has an [explicit role][] of `none`.

**Warning:** Using `tabindex="-1"` on an `iframe` makes it, and all its content, inaccessible to keyboard.

```html
<iframe role="none" tabindex="-1" src="/test-assets/SC4-1-2-frame-doc.html"></iframe>
```

#### Inapplicable Example 5

This `iframe` is not part of [sequential focus navigation][] because its `tabindex` [attribute value][] is `-1`; and it has an [hidden state][] of `true`.

**Warning:** Using `tabindex="-1"` on an `iframe` makes it, and all its content, inaccessible to keyboard.

```html
<iframe aria-hidden="true" tabindex="-1" src="/test-assets/SC4-1-2-frame-doc.html"></iframe>
```

#### Inapplicable Example 6

This `iframe` is not part of [sequential focus navigation][] because its `tabindex` [attribute value][] is `-1`; and it has no [content][] inside the `iframe`.

**Warning:** Using `tabindex="-1"` on an `iframe` makes it, and all its content, inaccessible to keyboard.

```html
<iframe tabindex="-1" src="/test-assets/shared/empty.html"></iframe>
```

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[ascii whitespace]: https://infra.spec.whatwg.org/#ascii-whitespace
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation 'HTML definition of Sequential focus navigation'
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components
[accessible name computation]: https://www.w3.org/TR/accname
[explicit role]: #explicit-role
[hidden state]: #hidden-state
[content]: https://html.spec.whatwg.org/multipage/dom.html#palpable-content 'HTML definition of Palpable Content'
[attribute value]: #attribute-value
[sc412]: https://www.w3.org/TR/WCAG21/#name-role-value 'WCAG 2.1 Success Criterion 4.1.2 Name, Role, Value'
[content document]: https://html.spec.whatwg.org/#dom-iframe-contentdocument
[presentational role conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'ARIA 1.1 Presentational Roles Conflict Resolution'
[semantic role]: #semantic-role

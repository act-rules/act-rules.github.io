---
id: akn7bn
name: iframe with negative tabindex has no interactive elements
rule_type: atomic
description: |
  This rule checks that `iframe` elements with a negative `tabindex` attribute value contain no interactive elements.
accessibility_requirements:
  wcag20:2.1.1: # Keyboard (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G202: # Ensuring keyboard control for all functionality
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Brian Bors
    - Wilco Fiers
---

## Applicability

This rule applies to any `iframe` element that has a negative number as a `tabindex` [attribute value][].

## Expectation

For each test target, the [nested browsing context][] does not include elements that are [visible][] and part of the [sequential focus navigation][]. An element is "included" in a [nested browsing context][] if its [owner document][] is the [container document][] of the [nested browsing context][].

## Assumptions

This rule assumes that interactive content inside `iframe` elements is used to provide functionality. If the interactive content does not provide functionality, for example a button that does nothing when clicked, [success criterion 2.1.1][sc211] may be satisfied, even if the rule is failed.

No [user style sheets](https://drafts.csswg.org/css-cascade/#cascade-origin-user) are used and no changes to the [user agent default style sheet](https://drafts.csswg.org/css-cascade/#cascade-origin-ua) are in place, otherwise the test cases might have different outcomes of the ones presented here. 

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

By setting the `tabindex` [attribute value][] of an `iframe` element to `-1` or some other negative number, it becomes impossible to move the focus into the [browsing context][nested browsing context] of the `iframe` element. Even though its content is still included in the [sequential focus navigation][], there is no way to move the focus to any of the items in the `iframe` using standard keyboard navigation.

- [Understanding Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [WCAG Technique G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG21/Techniques/general/G202)

## Test Cases

### Passed

#### Passed Example 1

This `iframe` element contains no content that is part of [sequential focus navigation][].

```html
<iframe tabindex="-1" srcdoc="<h1>Hello world</h1>"></iframe>
```

#### Passed Example 2

This `iframe` element contains a link that, because of its `tabindex` is not part of [sequential focus navigation][].

```html
<iframe tabindex="-1" srcdoc="<a href='/' tabindex='-1'>Home</a>"></iframe>
```

#### Passed Example 3

This `iframe` element contains no [visible][] content because of the small size of the iframe.

```html
<iframe tabindex="-1" width="1" height="1" srcdoc="<a href='/'>Home</a>"></iframe>
```

### Failed

#### Failed Example 1

This `iframe` element has a link that is part of [sequential focus navigation][].

```html
<iframe tabindex="-1" srcdoc="<a href='/'>Home</a>"></iframe>
```

### Inapplicable

#### Inapplicable Example 1

This `iframe` element does not have a `tabindex` [attribute value][] that is a negative number

```html
<iframe tabindex="0" srcdoc="<a href='/'>Home</a>"></iframe>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[container document]: https://html.spec.whatwg.org/#bc-container-document 'HTML browsing context container document, 2020/12/18'
[nested browsing context]: https://html.spec.whatwg.org/#nested-browsing-context 'HTML nested browsing context, 2020/12/18'
[owner document]: https://dom.spec.whatwg.org/#dom-node-ownerdocument 'DOM node owner document property, 2020/12/18'
[sc211]: https://www.w3.org/TR/WCAG21/#keyboard 'WCAG 2.1 Success criterion 2.1.1 Keyboard'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML sequential focus navigation, 2020/12/18'
[visible]: #visible 'Definition of visible'

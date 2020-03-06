---
id: 2ee8b8
name: Visible label is part of accessible name
rule_type: atomic
description: |
  This rule checks that interactive elements labeled through their content have their visible label as part of their accessible name.
accessibility_requirements:
  wcag21:2.5.3: # Label in Name
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgements:
  authors:
    - Anne Thyme Nørregaard
    - Bryn Anderson
    - Jey Nandakumar
---

## Applicability

This rule applies to any element that has:

- a [semantic role][] that is a [widget][widget roles] that [supports name from content][], and
- [visible text content][], and
- an `aria-label` or `aria-labelledby` attribute.

**Note:** [widget roles][] that [supports name from content][] are: `button`, `checkbox`, `gridcell`, `link`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch`, `tab`, `treeitem`.

## Expectation

The complete [visible text content][] of the target element either matches or is contained within its [accessible name][].

**Note:** Leading and trailing [whitespace][] and difference in case sensitivity should be ignored.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 2.5.3: Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)

## Test Cases

### Passed

#### Passed Example 1

This link has [visible][] text that, ignoring trailing whitespace, matches the [accessible name][].

```html
<a href="//w3.org" aria-label="W3C Website ">W3C Website</div>
```

#### Passed Example 2

This link has [visible][] text that, ignoring case, matches the [accessible name][].

```html
<div role="link" aria-label="Next Page">next page</div>
```

#### Passed Example 3

This link has [visible][] text that is included in the [accessible name][].

```html
<button aria-label="Next Page in the list">Next Page</button>
```

### Failed

#### Failed Example 1

This link has [visible][] text that is different from the [accessible name][].

```html
<div role="link" aria-label="OK">Next</div>
```

#### Failed Example 2

This button has [visible][] text that is only partially included in the [accessible name][].

```html
<button aria-label="the full">The full label</button>
```

#### Failed Example 3

This link has [visible][] text with mathematical symbols, this does not match the [accessible name][] because the mathematical symbols were written out in the accessible name. This is [explicitly mentioned in WCAG](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name#mathematical-expressions-and-formulae).

```html
<a href="/" aria-label="Proof of two multiplied by two is four">Proof of 2&times;2=4</a>
```

### Inapplicable

#### Inapplicable Example 1

This `nav` is not a widget, so the [visible][] text does not need to match the [accessible name][].

```html
<nav aria-label="main nav">W3C navigation</nav>
```

#### Inapplicable Example 2

This text field does not need to have its [visible][] text match the [accessible name][]. The content of a textfield shows its value instead of its label. The label is usually adjacent to the textfield instead.

```html
<div>E-mail</div>
<input type="email" aria-label="E-mail" value="Contact" />
```

#### Inapplicable Example 3

This `div` has does not have a widget role, so the [visible][] text does not need to match the [accessible name][].

```html
<div role="tooltip" aria-label="OK">Next</div>
```

#### Inapplicable Example 4

This link has no [visible text content][].

```html
<a href="//w3.org" aria-label="W3C homepage">
  <img src="/test-assets/shared/w3c-logo.png" alt="w3c logo">
</a>
```

#### Inapplicable Example 5

The content of this link is [non-text content][].

```html
<button aria-label="close">X</button>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[visible]: #visible 'Definition of visible'
[semantic role]: #semantic-role 'Definition of Semantic role'
[visible text content]: #visible-text-content 'Definition of Visible text content'
[whitespace]: #whitespace 'Definition of Whitepsace'
[widget roles]: https://www.w3.org/TR/wai-aria-1.1/#widget_roles 'Definition of Widget role'
[supports name from content]: https://www.w3.org/TR/wai-aria-1.1/#namefromcontent  'Definition of Supports name from contents'
[non-text content]: https://www.w3.org/TR/WCAG21/#dfn-non-text-content 'Definition of Non-text content'

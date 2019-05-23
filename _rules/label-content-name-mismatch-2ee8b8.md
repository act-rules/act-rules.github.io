---
id: 2ee8b8
name: label and name from content mismatch
rule_type: atomic
description: |
  Interactive elements labelled through their content must have their visible label as part of their accessible name
accessibility_requirements:
  wcag20:2.5.3: # Label in Name
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
authors:
  - Anne Thyme Nørregaard
  - Bryn Anderson
  - Jey Nandakumar
---

## Applicability

This rule applies to any element that has:

- a [semantic role](#semantic-role) that is a [widget](https://www.w3.org/TR/wai-aria-1.1/#widget_roles) that [supports name from content](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent), and
- [visible text content](#visible-text-content), and
- an `aria-label` or `aria-labelledby` attribute.

**Note**: [widget roles](https://www.w3.org/TR/wai-aria-1.1/#widget_roles) that [supports name from content](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent) are: `button`, `checkbox`, `gridcell`, `link`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch`, `tab`, `treeitem`.

## Expectation

The complete [visible text content](#visible-text-content) of the target element either matches or is contained within its [accessible name](#accessible-name).

**Note**: Leading and trailing whitespace and difference in case sensitivity should be ignored.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- https://www.w3.org/TR/WCAG21/#label-in-name

## Test Cases

### Passed

#### Passed Example 1

Visible label and accessible name matches when trailing white spaces are removed.

```html
<div role="link" aria-label="next page ">next page</div>
```

#### Passed Example 2

Character insensitivity between visible label and accessible name.

```html
<div role="link" aria-label="Next Page">next page</div>
```

#### Passed Example 3

Full visible label is contained in the accessible name.

```html
<button name="link" aria-label="Next Page in the list">Next Page</button>
```

### Failed

#### Failed Example 1

Visible label doesn't match accessible name.

```html
<div role="link" aria-label="OK">Next</div>
```

#### Failed Example 2

Not all of visible label is included in accessible name.

```html
<button name="link" aria-label="the full">The full label</button>
```

#### Failed Example 3

Mathematical symbols can not be substitute for text.

```html
<a href="/" aria-label="Page two">Page 2</a>
```

### Inapplicable

#### Inapplicable Example 1

Not a widget role.

```html
<a aria-label="OK">Next</a>
```

#### Inapplicable Example 2

Widget role that does not support name from content.

```html
<input type="email" aria-label="E-mail" value="Contact" />
```

#### Inapplicable Example 3

Non-widget role that supports name from content.

```html
<div role="tooltip" aria-label="OK">Next</div>
```

#### Inapplicable Example 4

No rendered text in name from content.

```html
<div role="tooltip" aria-label="OK"></div>
```

#### Inapplicable Example 5

Non-text content.

```html
<button aria-label="close">X</button>
```

---
name: label and name from content mismatch
description: |
  Interactive elements labelled through their content must have their visible label as part of their accessible name

success_criterion:
- 2.5.3 # Label in Name

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
- Bryn Anderson
- Jey Nandakumar
---

## Test procedure

### Applicability

This rule applies to any element that has:
* a [semantic role](#semantic-role) that is a [widget](https://www.w3.org/TR/wai-aria-1.1/#widget_roles) that [supports name from content](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent), and 
* [visible text content](#visible-text-content), and
* an `aria-label` or `aria-labelledby` attribute.

**Note**: [widget roles](https://www.w3.org/TR/wai-aria-1.1/#widget_roles) that [supports name from content](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent) are: `button`, `checkbox`, `gridcell`, `link`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch`, `tab`, `treeitem`.

### Expectation

The complete [visible text content](#visible-text-content) of the target element either matches or is contained within its [accessible name](#accessible-name).

**Note**: Leading and trailing whitespace and difference in case sensitivity should be ignored.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- https://www.w3.org/TR/WCAG21/#label-in-name

## Test cases

### Passed

#### Pass example 1

Visible label and accessible name matches when trailing white spaces are removed.

```html
<div role="link" aria-label="next page ">next page</div>
```

#### Pass example 2

Character insensitivity between visible label and accessible name.

```html
<div role="link" aria-label="Next Page">next page</div>
```

#### Pass example 3

Full visible label is contained in the accessible name.

```html
<button name="link" aria-label="Next Page in the list">Next Page</div>
```

### Failed

#### Fail example 1

Visible label doesn't match accessible name.

```html
<div role="link" aria-label="OK">Next</a>
```

#### Fail example 2

Not all of visible label is included in accessible name.

```html
<button name="link" aria-label="the full">The full label</button>
```

### Inapplicable 

#### Inapplicable example 1

Not a widget role.

```html
<a aria-label="OK">Next</a>
```

#### Inapplicable example 2

Widget role that does not support name from content.

```html
<input type="email" aria-label="E-mail">Contact</input>
```

#### Inapplicable example 3

Non-widget role that supports name from content.

```html
<div role="tooltip" aria-label="OK">Next</a>
```

#### Inapplicable example 4

No rendered text in name from content.

```html
<div role="tooltip" aria-label="OK"></a>
```

#### Inapplicable example 5

Non-text content.

```html
<button aria-label="close">X</button>
```
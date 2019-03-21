---
name: Name from content included in accessible name
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

This rule applies to any HTML or SVG element that:
* has a [semantic role](#semantic-role) that is a [widget](https://www.w3.org/TR/wai-aria-1.1/#widget_roles) that [supports name from content](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent), and 
* has [visible](#visible) [text](https://www.w3.org/TR/WCAG21/#dfn-text), and
* has an `aria-label` or `aria-labelledby` attribute, or where all of or part of the [name from content](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent) is not [visible](#visible).

**Note**: [widget roles](https://www.w3.org/TR/wai-aria-1.1/#widget_roles) that [support name from content](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent) are: `button`, `checkbox`, `gridcell`, `link`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch`, `tab`, `treeitem`.

### Expectation

The complete [visible](#visible) [text](https://www.w3.org/TR/WCAG21/#dfn-text) of the target element is [included](#included-characters) within its [accessible name](#accessible-name).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- https://www.w3.org/TR/WCAG21/#label-in-name

## Test cases

### Passed

#### Passed example 1

Visible label and accessible name matches when trailing white spaces are removed.

```html
<div role="link" aria-label="next page ">next page</div>
```

#### Passed example 2

Character insensitivity between visible label and accessible name.

```html
<div role="link" aria-label="Next Page">next page</div>
```

#### Passed example 3

Full visible label is included in the accessible name.

```html
<button name="link" aria-label="Next Page in the list">Next Page</button>
```

#### Passed example 4

Full visible label is included in the accessible name.

```html
<head>
  <style>
    .sr-only {
      position:absolute;
      left:-10000px;
      top:auto;
      width:1px;
      height:1px;
      overflow:hidden;}
  </style>
</head>

<body>
  <a href="home.html">Read more<span style="sr-only"> about our pricing</span></a>
</body>
```

### Failed

#### Failed example 1

Visible label is not included in accessible name.

```html
<div role="link" aria-label="OK">Next</div>
```

#### Failed example 2

Not all of visible label is included in accessible name.

```html
<button name="link" aria-label="the full">The full label</button>
```

#### Failed example 3

The full visible label is split out across the accessible name.

```html
<head>
  <style>
    .sr-only {
      position:absolute;
      left:-10000px;
      top:auto;
      width:1px;
      height:1px;
      overflow:hidden;}
  </style>
</head>

<body>
  <a href="home.html">Link <span style="sr-only">that opens a new tab</span> to the homepage</a>
</body>
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
<input type="email" aria-label="E-mail" value='Contact'>
```

#### Inapplicable example 3

Non-widget role that supports name from content.

```html
<div role="tooltip" aria-label="OK">Next</div>
```

#### Inapplicable example 4

No rendered text in name from content.

```html
<div role="tooltip" aria-label="OK"></div>
```

#### Inapplicable example 5

Sequence of characters in name from content is not expressing anything in human language and is therefore not considered [text](https://www.w3.org/TR/WCAG21/#dfn-text).

```html
<button aria-label="close">X</button>
```

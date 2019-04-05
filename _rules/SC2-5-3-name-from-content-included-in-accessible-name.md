---
name: Name from content included in accessible name
description: |
  Interactive elements labelled through their content must have their visible label as part of their accessible name.

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
* has a [semantic role](#semantic-role) that is a [widget role](https://www.w3.org/TR/wai-aria-1.1/#widget_roles) that [supports name from content](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent), and 
* has [descendants](https://www.w3.org/TR/dom41/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) that are [visible](#visible) [text nodes](https://www.w3.org/TR/dom/#text), and
* has an [accessible name](#accessible-name), even if the name is the empty string ("").

**Note**: [widget roles](https://www.w3.org/TR/wai-aria-1.1/#widget_roles) that [support name from content](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent) are: `button`, `checkbox`, `gridcell`, `link`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch`, `tab`, `treeitem`.

**Note:** If a text node only has [whitespace](#whitespace), it is not [visible](#visible).

### Expectation

The [visible](#visible) [text nodes](https://www.w3.org/TR/dom/#text) that are [descendants](https://www.w3.org/TR/dom41/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) of the target element are [included](#included-characters) in their entirety within the [accessible name](#accessible-name) of the element, unless the [text nodes](https://www.w3.org/TR/dom/#text) does not express anything in [human language](https://www.w3.org/TR/WCAG21/#dfn-human-language-s) and therefore does not live up to the [WCAG definition of text](https://www.w3.org/TR/WCAG21/#dfn-text).

## Assumptions

This rule assumes that the [visible](#visible) [text](ttps://www.w3.org/TR/WCAG21/#dfn-text) has the same order as the text in the code, e.g. CSS has not been used to re-arrange pieces of text so that they are presented in a different order.

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
  <a href="home.html">Read more<span class="sr-only"> about our pricing</span></a>
</body>
```

#### Passed example 5

Text nodes in name from content are not expressing anything in human language and does therefore not live up to the [WCAG definition of text](https://www.w3.org/TR/WCAG21/#dfn-text).

```html
<button aria-label="close">:-)</button>
```

#### Passed example 6

Text nodes in name from content are not expressing anything in human language and does therefore not live up to the [WCAG definition of text](https://www.w3.org/TR/WCAG21/#dfn-text). In this case, "X" is used because it resembles a "close" icon, not to represent the character "X".

```html
<button aria-label="close">X</button>
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
  <a href="home.html">Link <span class="sr-only">that opens a new tab</span> to the homepage</a>
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

No visible text nodes in name from content.

```html
<div role="tooltip" aria-label="OK"></div>
```

---
id: 3ea0c8
name: Id attribute is unique
rule_type: atomic
description: |
  This rule checks that all `id` attribute values on a single page are unique.
accessibility_requirements:
  wcag20:4.1.1: # Parsing (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
authors:
  - Bryn Anderson
  - Anne Thyme Nørregaard
---

## Applicability

Any `id` attribute which is not the empty string (""), specified on an HTML or SVG element.

**Note:** Elements that are neither [included in the accessibility tree](#included-in-the-accessibility-tree) nor [visible on the page](#visible-on-the-page) are still considered for this rule.

## Expectation

The value of the attribute is unique across all other `id` attributes specified on HTML or SVG elements that exist within the same [document tree](https://www.w3.org/TR/dom41/#document-trees) or [shadow tree](https://www.w3.org/TR/dom41/#shadow-trees) as the element on which the applicable `id` attribute is specified.

## Assumptions

There are currently no assumptions.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=411#qr-ensure-compat-parses](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=411#qr-ensure-compat-parses)
- [https://www.w3.org/TR/WCAG20-TECHS/H93.html](https://www.w3.org/TR/WCAG20-TECHS/H93.html)
- [https://www.w3.org/TR/WCAG20-TECHS/H94.html](https://www.w3.org/TR/WCAG20-TECHS/H94.html)

## Test Cases

### Passed

#### Passed Example 1

Only one `id` within the document context

```html
<div id="my-div">This is my first element</div>
```

#### Passed Example 2

All `id`s are unique within the document context

```html
<div id="my-div1">This is my first element</div>
<div id="my-div2">This is my second element</div>
<svg id="my-div3">This is my third element</svg>
```

#### Passed Example 3

`id` in shadow DOM is for the same element as `id` in light DOM

```html
<div id="my-elm"></div>
<script>
	var myElm = document.getElementById('my-elm')
	var shadow = myElm.attachShadow({ mode: 'open' })
	shadow.innerHTML = '<b id="my-elm" ><slot></slot></b>'
</script>
```

### Failed

#### Failed Example 1

Several elements have identical `id`

```html
<div id="my-div">This is my first element</div>
<div id="my-div">This is my second element</div>
```

#### Failed Example 2

Elements of different types have identical `id`

```html
<div id="my-div">This is my first element</div>
<svg id="my-div">This is my second element</svg>
```

#### Failed Example 3

Having `display: none` on an element still makes it applicable to this rule

```html
<div id="my-div" style="display:none">This is my first element</div>
<svg id="my-div">This is my second element</svg>
```

### Inapplicable

#### Inapplicable Example 1

No `id` on element

```html
<div>This is my first element</div>
```

#### Inapplicable Example 2

XML `id` not applicable to this rule

```html
<div xml:id="my-div">This is my first element</div>
```

---
id: 3ea0c8
name: '`id` attribute value is unique'
rule_type: atomic
description: |
  This rule checks that all `id` attribute values on a single page are unique.
accessibility_requirements:
  wcag20:4.1.1: # Parsing (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:H93: # Ensuring that id attributes are unique on a Web page
    forConformance: false
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
input_aspects:
  - DOM Tree
acknowledgements:
  authors:
    - Bryn Anderson
    - Anne Thyme Nørregaard
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'id-unique'
---

## Applicability

Any `id` attribute which is not the empty string (""), specified on an HTML or SVG element.

**Note:** Elements that are neither [included in the accessibility tree][] nor [visible][] are still considered for this rule.

## Expectation

The value of the attribute is unique across all other `id` attributes specified on HTML or SVG elements that exist within the same [document tree](https://dom.spec.whatwg.org/#document-trees) or [shadow tree](https://dom.spec.whatwg.org/#shadow-trees) as the element on which the applicable `id` attribute is specified.

**Note:** Passing this rule is not enough to pass [Success Criterion 4.1.1: Parsing](https://www.w3.org/TR/WCAG21/#parsing), given that, for example, start and end tags can be incomplete without failing this rule.

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 4.1.1: Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing)
- [H93: Ensuring that id attributes are unique on a Web page](https://www.w3.org/WAI/WCAG21/Techniques/html/H93)

## Test Cases

### Passed

#### Passed Example 1

There is only one `id` attribute within the document context.

```html
<div id="my-div">This is my first element</div>
```

#### Passed Example 2

All `id` attributes are unique within the document context.

```html
<div id="my-div1">This is my first element</div>
<div id="my-div2">This is my second element</div>
<svg id="my-div3">This is my third element</svg>
```

#### Passed Example 3

Two of the `id` attributes are the same (`my-elt`), but they are in different trees (the first one in the [document tree](https://dom.spec.whatwg.org/#document-trees) and the second in the [shadow tree](https://dom.spec.whatwg.org/#shadow-trees)).

```html
<div id="my-elt"></div>
<div id="host"></div>
<script>
	var host = document.getElementById('host')
	var shadow = host.attachShadow({ mode: 'open' })
	shadow.innerHTML = '<b id="my-elt"></b>'
</script>
```

#### Passed Example 4

Both `id` attributes are the same (`my-elt`), but they are in different [document trees](https://dom.spec.whatwg.org/#document-trees) because the `iframe` is creating a new one.

```html
<div id="my-elt"></div>
<iframe title="Empty frame" srcdoc="<span id='my-elt'></span>"></iframe>
```

### Failed

#### Failed Example 1

The `id` attribute `my-div` is not unique among all `id` attributes in the document.

```html
<div id="my-div">This is my first element</div>
<div id="my-div">This is my second element</div>
```

#### Failed Example 2

The `id` attribute `my-div` is not unique among all `id` attributes in the document.

```html
<div id="my-div">This is my first element</div>
<svg id="my-div">This is my second element</svg>
```

#### Failed Example 3

The `id` attribute `my-div` is not unique among all `id` attributes in the document. This rule still considers element that are neither [included in the accessibility tree][] nor [visible][].

```html
<div id="my-div" style="display:none">This is my first element</div>
<svg id="my-div">This is my second element</svg>
```

### Inapplicable

#### Inapplicable Example 1

There is no `id` attribute in this document.

```html
<div>This is my first element</div>
```

#### Inapplicable Example 2

The `xml:id` attribute is not considered by this rule.

```html
<div xml:id="my-div">This is my first element</div>
```

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[visible]: #visible 'Definition of visible'

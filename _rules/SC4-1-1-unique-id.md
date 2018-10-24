---
name: unique element id attributes
rule_type: atomic

description: |
  This rule checks that all `id` attribute values on a single page are unique.

success_criterion:
- 4.1.1 # Success Criterion 4.1.1 (Parsing)

test_aspects:
- DOM Tree

authors:
- Bryn Anderson
- Anne Thyme
---

## Test procedure

### Applicability

Any element that has an `id` attribute.

**Note:** Elements that are neither [exposed to assistive technologies](#exposed-to-assistive-technologies) nor [visible on the page](#visible-on-the-page) are still considered for this rule.

### Expectation

Each test target has an `id` attribute value that is unique within the [document context](#document-context) of the element.

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

#### Passed example 1

Only one `id` within the document context

```html
<div id="my-div"> This is my first element</div>
```

#### Passed example 2

All `id`s are unique within the document context

```html
<div id="my-div1"> This is my first element</div>
<div id="my-div2"> This is my second element</div>
<svg id="my-div3"> This is my third element</svg>
```

#### Passed example 3

`id` in shadow DOM is for the same element as `id` in light DOM

```html
<div id="my-elm"></div>
<script>
  var myElm = document.getElementById('my-elm');
  var shadow = myElm.attachShadow({ mode: 'open' });
  shadow.innerHTML = '<b id="my-elm" ><slot></slot></b>';
</script>
```

### Failed

#### Failed example 1

Several elements have identical `id`

```html
<div id="my-div"> This is my first element</div>
<div id="my-div"> This is my second element</div>
```

#### Failed example 2

Elements of different types have identical `id`

```html
<div  id="my-div"> This is my first element</div>
<svg  id="my-div"> This is my second element</svg>
```

#### Failed example 3

Having `display: none` on an element still makes it applicable to this rule

```html
<div id="my-div" style="display:none"> This is my first element</div>
<svg id="my-div"> This is my second element</svg>
```

### Inapplicable

#### Inapplicable example 1

No `id` on element

```html
<div>This is my first element</div>
```

#### Inapplicable example 2

XML `id` not applicable to this rule

```html
<div xml:id="my-div">This is my first element</div>
```

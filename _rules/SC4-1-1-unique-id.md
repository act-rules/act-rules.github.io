---
name: unique element id attributes
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

#### Pass example 1

```html
<div id="my-div"> This is my first element</div>
```

#### Pass example 2

```html
<div id="my-div1" data-rule-target> This is my first element</div>
<div id="my-div2" data-rule-target> This is my second element</div>
<svg id="my-div3" data-rule-target> This is my third element</svg>
```

#### Pass example 3

```html
<div id="my-elm" data-rule-target></div>
<script>
  var myElm = document.getElementById('my-elm');
  var shadow = myElm.attachShadow({ mode: 'open' });
  shadow.innerHTML = '<b id="my-elm" data-rule-target><slot></slot></b>';
</script>
```

### Failed

#### Fail example 1

```html
<div id="my-div" data-rule-target> This is my first element</div>
<div id="my-div" data-rule-target> This is my second element</div>
```

#### Fail example 2

```html
<div data-rule-target id="my-div"> This is my first element</div>
<svg data-rule-target id="my-div"> This is my second element</svg>
```

#### Fail example 3

```html
<div data-rule-target id="my-div" style="display:none"> This is my first element</div>
<svg data-rule-target id="my-div"> This is my second element</svg>
```

### Inapplicable

#### Inapplicable example 1

```html
<div>This is my first element</div>
```

#### Inapplicable example 2

```html
<div xml:id="my-div">This is my first element</div>
```

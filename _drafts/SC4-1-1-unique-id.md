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
- Jey Nandakumar
- Kamyar Rasta
- Wilco Fiers
---

## Test procedure

### Applicability

Any element with an `id` attribute.

### Expectation

All `id` attribute values are unique.

## Assumptions

There are currently no assumptions.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background
- https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=411#qr-ensure-compat-parses
- https://www.w3.org/TR/WCAG20-TECHS/H74.html
- https://www.w3.org/TR/WCAG20-TECHS/H93.html
- https://www.w3.org/TR/WCAG20-TECHS/H94.html

## Test Cases

### Passed

```html
<div id="my-div"> This is my first element</div>
```

```html
<div id="my-div1"> This is my first element</div>
<div id="my-div2"> This is my second element</div>
<svg id="my-div3"> This is my third element</svg>
```

```html
<div id="my-elm"></div>
<script>
  var myElm = document.getElementById('my-elm');
  var shadow = myElm.attachShadow({ move: 'open' });
  shadow.innerHTML = '<b id="my-elm"><slot /></b>';
</script>
```

### Failed

```html
<div id="my-div"> This is my first element</div>
<div id="my-div"> This is my second element</svg>
```

```html
<div id="my-div"> This is my first element</div>
<svg id="my-div"> This is my second element</svg>
```

### Inapplicable

```html
<div>This is my first element</div>
```

```html
<div xml:id="my-div">This is my first element</div>
```

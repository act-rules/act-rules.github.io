---
name: aria-controls for scrollbar has valid value
rule_type: atomic

description: |
   This rule checks that each `aria-controls` property on an element with the role `scrollbar` references at least one existing element.
   
success_criterion:
- 1.3.1 # Info and Relationships

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Wilco Fiers
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

Any `aria-controls` property that
- is specified on an HTML or SVG element that has the role of `scrollbar` and is [included in the accessibility tree](#included-in-the-accessibility-tree) or is [focusable](#focusable),
- has a value that is not the empty string ("").

**Note:** `aria-controls` is a [WAI-ARIA required property](https://www.w3.org/TR/wai-aria-1.1/#requiredState) for the role `scrollbar`.

### Expectation 1

Each test target has a value that is a list of one or more `id` references.

**Note:** [ID reference](https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref_list) is the [value type](https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value) specified for the property `aria-controls`.

### Expectation 2

At least one of the `id`s referenced by the test target is specified on an HTML or SVG element that exists in the same [document tree](https://www.w3.org/TR/dom41/#document-trees) or [shadow tree](https://www.w3.org/TR/dom41/#shadow-trees) as the element that specifies the target attribute. 

## Assumptions

_There are currently no assumptions for this rule._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [WAI-ARIA 1.1, Definitions of States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
- [WAI-ARIA 1.1, Characteristics of States and Properties, Value](https://www.w3.org/TR/wai-aria/#propcharacteristic_value)

## Test Cases

### Passed

#### Passed example 1

`aria-controls` on the element with role `scrollbar` has `id` references to multiple elements that exist in the same document tree.

```html
<div id="content1">Lorem ipsum...</div>
<div id="content2">Lorem ipsum...</div>
<div role="scrollbar" aria-controls="content1 content2" aria-orientation="vertical" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"></div>
```

#### Passed example 2

`aria-controls` on the element with role `scrollbar` has one valid `id` reference to an element that exist in the same document tree.

```html
<div id="content1">Lorem ipsum...</div>
<div role="scrollbar" aria-controls="content1" aria-orientation="vertical" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"></div>
```

#### Passed example 3

`aria-controls` on the element with role `scrollbar` has multiple `id` references, whereof one is to an element that exist in the same document tree.

```html
<div id="content1">Lorem ipsum...</div>
<div role="scrollbar" aria-controls="content1 content2" aria-orientation="vertical" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"></div>
```

### Failed

#### Failed example 1

`aria-controls` on the element with role `scrollbar` does not have any `id` references.

```html
<div role="scrollbar" aria-controls="*" aria-orientation="vertical" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"></div>
```

#### Failed example 2

`aria-controls` on the element with role `scrollbar` does not have at least one `id` reference to an element that exist in the same document tree.

```html
<div role="scrollbar" aria-controls="content1" aria-orientation="vertical" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"></div>
```

### Inapplicable

#### Inapplicable example 1

The element is not an HTML or SVG element.

 ```html
  <math aria-controls="id1"></math>
```

#### Inapplicable example 2

The element is not included in the accessibility tree, nor is it focusable.

```html
<div  aria-hidden="true" role="scrollbar" aria-controls="content1" aria-orientation="vertical" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"></div>
```

#### Inapplicable example 3

The `aria-controls` has a value that is the empty string ("").

```html
<div role="scrollbar" aria-controls="" aria-orientation="vertical" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"></div>
```

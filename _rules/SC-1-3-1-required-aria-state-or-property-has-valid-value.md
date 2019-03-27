---
name: Required aria-conrols has valid value
rule_type: atomic

description: |
   This rule checks that each required `aria-controls` property has a valid value.
   
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

Any [WAI-ARIA required](https://www.w3.org/TR/wai-aria-1.1/#requiredState) `aria-controls` property that
- is specified on an HTML or SVG element 
- is specified on an element that is [included in the accessibility tree](#included-in-the-accessibility-tree) or is [focusable](#focusable),
- has a value that is not the empty string ("").

### Expectation 1

Each test target has a value that is a list of one or more `id` references.

**Note:** [ID reference](https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref_list) is the [value type](https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value) specified for the property `aria-controls`.

### Expectation 2

At least one of `id`s referenced by the test target is specified on an HTML or SVG element that exists in the same [document tree](https://www.w3.org/TR/dom41/#document-trees) or [shadow tree](https://www.w3.org/TR/dom41/#shadow-trees) as the element that specifies the target attribute. 

## Assumptions

_There are currently no assumptions for this rule._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA5)
- [WAI-ARIA 1.1, Definitions of States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
- [WAI-ARIA 1.1, Characteristics of States and Properties, Value](https://www.w3.org/TR/wai-aria/#propcharacteristic_value)

## Test Cases

### Passed

#### Passed example 1

`aria-controls`that is required property for role `combobox` has multiple `id` references to elements that exist in the same document tree.

```html

```

#### Passed example 2

`aria-controls`that is required property for role `combobox` has one `id` reference to an element that exist in the same document tree.


```html

```

#### Passed example 3

`aria-controls`that is required property for role `scrollbar` has one valid `id` reference to an element that exist in the same document tree.

```html
<div id="content1">Lorem ipsum...</div>
<div role="scrollbar" aria-controls="content1 content2" aria-orientation="vertical" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"></div>
```

### Failed


#### Failed example 1

`aria-controls`that is required property for role `combobox` does not have any `id` references.

```html

```

#### Failed example 2

`aria-controls`that is required property for role `combobox` does not have at least one `id` reference to an element that exist in the same document tree.


```html

```

#### Failed example 3

`aria-controls`that is required property for role `scrollbar` does not have at least one `id` reference to an element that exist in the same document tree.

```html
<div role="scrollbar" aria-controls="content1" aria-orientation="vertical" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"></div>
```

### Inapplicable

#### Inapplicable example 1

Element does not have `aria-controls` as a required property.

```html
<button `aria-controls="content1"`>Expand this section</button>
```

#### Inapplicable example 2

The element is not an HTML or SVG element.

 ```html
  <math aria-controls="id1"></math>
```

#### Inapplicable example 3

The element is not included in the accessibility tree, nor is it focusable.

```html
<div  aria-hidden="true" role="scrollbar" aria-controls="content1" aria-orientation="vertical" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"></div>
```

#### Inapplicable example 4

The `aria-controls` has a value that is the empty string ("").


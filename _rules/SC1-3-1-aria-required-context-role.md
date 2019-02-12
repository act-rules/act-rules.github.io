---
name: ARIA required context role
description: | 
  This rule checks that a role does not exist outside of its required context roles

success_criterion:
- 1.3.1 # Info and Relationships

test_aspects: 
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

The rule applies to any HTML or SVG element that is [included in the accessibility tree](#included-in-the-accessibility-tree) and has an explicit [semantic role](#semantic-role) with a [WAI-ARIA required context role](https://www.w3.org/TR/wai-aria-1.1/#scope), except if the element has an implicit semantic role that is identical to its explicit semantic role.

### Expectation

The [owner element](owner-element) for each target element has a [semantic role](#semantic-role) matching one of the [WAI-ARIA required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope) for the target element.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

This rule relies on assistive technologies to recognize [owner elements](#owner-element). This includes when the owner elements are ancestors that are not parents of the target element. However, some assistive technologies do not recognize owner elements that are not parents, unless workarounds are used.
Furthermore, `aria-owns` has limited support in user agents.

## Background

- [Required Context Role](https://www.w3.org/TR/wai-aria-1.1/#scope)

## Test Cases

### Passed

#### Passed example 1

Element with role `listitem` is contained within its required context role `list`, expressed as an explicit role.

```html
<div role="list">
    <div role="listitem"></div>
</div>
```

#### Passed example 2

Element with role `listitem` is contained within its required context role `list`, through the implicit role of `ul`.

```html
<ul>
    <div role="listitem"></div>
</ul>
```

#### Passed example 3

Element contained within its required context role even though it is not a direct child of the context role.

```html
<div role="list">
    <div>
         <div>
             <div>
                <div role="listitem"></div>
             </div>
         <div>
    <div>
</div>
```

#### Passed example 4

`aria-owns` used to give the target element the right context role.

```html
<div role="list" aria-owns="id1">
  <div role="tabpanel">
    <div id="id1" role="listitem"></div>
   </div>
</div>
```

### Failed

#### Failed example 1

No context role.

```html
<div role="listitem"></div>
```

#### Failed example 2

Wrong context role

```html
<div role="tablist">
    <div role="listitem"></div>
</div>
```

#### Failed example 3

Element not contained within its required context role.

```html
<div role="list"></div>
    <div role="listitem"></div>
```

#### Failed example 4

Context role is not included in the accessibility tree.

```html
<div role="list" aria-hidden="true">
    <div role="listitem"></div>
</div>
```

#### Failed example 5

Element with role `listitem` has a closer ancestor, that is included in the accessibility tree, than the role `list` that should have been its context role

```html
<div role="list">
    <div aria-label="menu">
         <div role="listitem"></div>
    <div>
</div>
```

#### Failed example 6

Element with role `listitem` has a closer ancestor, that is included in the accessibility tree, than the role `list` that should have been its context role

```html
<div role="list">
  <div role="tabpanel">
    <div role="listitem"></div>
   </div>
</div>
```

#### Failed example 7

The owner element is the first element that references the target element through `aria-owns`, which results in the wrong context role.

```html
<div role="tabpanel" aria-owns="id1">
  <div role="list" aria-owns="id1">
    <div id="id1" role="listitem"></div>
   </div>
</div>
```

### Inapplicable

#### Inapplicable example 1

Element does not have an explicit semantic role

```html
<ul></ul>
```

#### Inapplicable example 2

Element is not exposed to assistive technologies.

```html
<div role="tab" aria-hidden="true"></div>
```

#### Inapplicable example 3

Role does not have any required context roles listed in WAI-ARIA spec.

```html
<div role="radio"></div>
```

---
name: ARIA required context role
description: | 
  This rule checks that a role does not exist outside of its required context.

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

The target element is [owned by](#owned-by) an element that has a [semantic role](#semantic-role) matching one of the [WAI-ARIA required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope) for the target element.

**Note:** The definition of [owned by](#owned-by) used in this rule is diverging from the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element). See more in the [owned by](#owned-by) definition.

## Assumptions

This rule assumes that the explicit [semantic role](#semantic-role) on the target element is being used with the intention to comply to WCAG. If the explicit semantic role on the target element is incorrectly used, and any relationships between elements are already programmatically determinable, failing this rule might not result in accessibility issues for users of assistive technologies, and it should then not be considered a failure under WCAG success criterion 1.3.1 Info and Relationships.

## Accessibility Support

This rule relies on assistive technologies to recognize which elements are [owned by](#owned-by) each other. This includes when the element is owned by another element that is an ancestor, but not a parent of the target element. Some assistive technologies does not accept these owned by relationships, unless workarounds are used.
Furthermore, `aria-owns` has limited support in some user agents.

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
<div role="list" aria-owns="id1"></div>
<div id="id1" role="listitem"></div>
```

#### Passed example 5

`aria-owns` trumps ownership by closest ancestor, giving the element with role of `listitem` the correct context role.

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

Wrong context role.

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

Element with role `listitem` has a closer ancestor, that is included in the accessibility tree, than the role `list` that should have been its context role.

```html
<div role="list">
    <div aria-label="menu">
         <div role="listitem"></div>
    <div>
</div>
```

**Note:** This test case follows the definition of [owned by](#owned-by) used in this rule. If implemented differently, this definition could cause differences in outcome for this test case. 


#### Failed example 5

Element with role `listitem` has a closer ancestor, that is included in the accessibility tree, than the role `list` that should have been its context role.

```html
<div role="list">
  <div role="tabpanel">
    <div role="listitem"></div>
   </div>
</div>
```

#### Failed example 6

The element with the semantic role of `list` is [owned by](#owned-by) the first element that references it element through `aria-owns`, which results in the wrong context role.

```html
<div role="tabpanel" aria-owns="id1">
  <div role="list" aria-owns="id1">
    <div id="id1" role="listitem"></div>
   </div>
</div>
```

**Note:** This test case follows the definition of [owned by](#owned-by) used in this rule. If implemented differently, this definition could cause differences in outcome for this test case.

### Inapplicable

#### Inapplicable example 1

Element does not have an explicit semantic role.

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

#### Inapplicable example 4

Element is not exposed to assistive technologies, since decendant has `aria-hidden` attribute with value set to `true`.

```html
<div role="list" aria-hidden="true">
    <div role="listitem"></div>
</div>
```
#### Inapplicable example 5

Element has an explicit semantic role, but it is identical to the implicit semantic role, making the element inapplicable.

```html
<li role="listitem"></li>
```

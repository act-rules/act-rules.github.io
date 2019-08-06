---
id: ff89c9
name: ARIA required context role
rule_type: atomic
description: | 
  This rule checks that a role exists inside its required context.
accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects: 
- DOM Tree
- CSS Styling
authors:
- Anne Thyme Nørregaard
---

## Applicability

The rule applies to any HTML or SVG element that is [included in the accessibility tree](#included-in-the-accessibility-tree) and has an [explicit semantic role](#explicit-role) with a [WAI-ARIA required context role](https://www.w3.org/TR/wai-aria-1.1/#scope), except if the element has an [implicit semantic role](#implicit-role) that is identical to its [explicit semantic role](#explicit-role).

**Note:** An example of an element that has a [WAI-ARIA required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) is `tab` that has `tablist` as a [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

**Note:** An example of an element that has an [implicit semantic role](#implicit-role) that is identical to its [explicit semantic role](#explicit-role) is an `<li>` element that has `role="listitem"`. This rule is not applicable to elements like this.

## Expectation

The target element is [owned by](#owned-by) an element that has a [semantic role](#semantic-role) that is one of the [WAI-ARIA required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope) of the target element.

**Note:** The definition of [owned by](#owned-by) used in this rule is diverging from the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element). See more in the [owned by](#owned-by) definition.

**Note:** Both [superclass roles](https://www.w3.org/TR/wai-aria-1.1/#superclassrole) and [subclass roles](https://www.w3.org/TR/wai-aria-1.1/#subclassroles) will be listed as possible [WAI-ARIA required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope) for a role, e.g. the [`row` (role)](https://www.w3.org/TR/wai-aria-1.1/#row) lists both [`grid` (role)](https://www.w3.org/TR/wai-aria-1.1/#grid) and [`table` (role)](https://www.w3.org/TR/wai-aria-1.1/#table) as [required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope), even though `grid` is a subclass of the `table` role.

## Assumptions

This rule assumes that the [explicit semantic role](#explicit-role) on the target element is used with the intention to comply to WCAG. If the [explicit semantic role](#explicit-role) on the target element is incorrectly used, and any relationships between elements are already programmatically determinable, failing this rule might not result in accessibility issues for users of assistive technologies, and it should then not be considered a failure under WCAG success criterion 1.3.1 Info and Relationships.

## Accessibility Support

- This rule relies on assistive technologies to recognize which elements are [owned by](#owned-by) each other. This includes when the element is owned by another element that is an ancestor, but not a parent of the target element. Some assistive technologies do not accept these owned by relationships, unless workarounds are used.
Furthermore, `aria-owns` has limited support in some user agents.
- Some user agents and assistive technologies ignore empty elements, which means they are not presented to all users. However, since this is handled inconsitently across user agents and assistive technologies, this rule is applicable to empty elements. 

## Background

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [Required Context Role](https://www.w3.org/TR/wai-aria-1.1/#scope)

## Test Cases

### Passed

#### Passed Example 1

Element with role `listitem` is contained within its required context role `list`, expressed as an explicit role.

```html
<div role="list">
    <div role="listitem">List item 1</div>
</div>
```

#### Passed Example 2

Element with role `listitem` is contained within its required context role `list`, through the implicit role of `ul`.

```html
<ul>
    <div role="listitem">List item 1</div>
</ul>
```

#### Passed Example 3

Element contained within its required context role even though it is not a direct child of the context role.

```html
<div role="list">
    <div>
         <div>
             <div>
                <div role="listitem">List item 1</div>
             </div>
         </div>
    </div>
</div>
```

#### Passed Example 4

`aria-owns` used to give the target element the right context role.

```html
<div role="list" aria-owns="id1"></div>
<div id="id1" role="listitem">List item 1</div>
```

#### Passed Example 5

`aria-owns` trumps ownership by closest ancestor, giving the element with role of `listitem` the correct context role.

```html
<div role="list" aria-owns="id1">
  <div role="tabpanel">
    <div id="id1" role="listitem">List item 1</div>
   </div>
</div>
```

#### Passed Example 6

Since implicit ownership can cross shadow boundaries, the element with the semantic role of `listitem` is contained within its required context role `list`.

```html
<div id="host" role="list">
</div>

<script>
  const host = document.querySelector("#host");
  const root = host.attachShadow({ mode: "open" });

  root.innerHTML = `
    <div role="listitem">List item 1</div>
  `;
</script>
```
#### Passed Example 7

Element with role `listitem` is contained within its required context role `list`, expressed as an explicit role. Even though the element with role `listitem` is empty, it is still applicable to this rule.

```html
<div role="list">
    <div role="listitem"></div>
</div>
```

### Failed

#### Failed Example 1

No context role.

```html
<div role="listitem">List item 1</div>
```

#### Failed Example 2

Wrong context role.

```html
<div role="tablist">
    <div role="listitem">List item 1</div>
</div>
```

#### Failed Example 3

Element not contained within its required context role.

```html
<div role="list"></div>
    <div role="listitem">List item 1</div>
```

#### Failed Example 4

Element with role `listitem` has a closer ancestor, that is included in the accessibility tree, than the role `list` that should have been its context role.

```html
<div role="list">
    <div aria-label="menu">
         <div role="listitem">List item 1</div>
    </div>
</div>
```

**Note:** This test case follows the definition of [owned by](#owned-by) used in this rule. If implemented differently, this definition could cause differences in outcome for this test case. 


#### Failed Example 5

Element with role `listitem` has a closer ancestor, that is included in the accessibility tree, than the role `list` that should have been its context role.

```html
<div role="list">
  <div role="tabpanel">
    <div role="listitem">List item 1</div>
   </div>
</div>
```

#### Failed Example 6

The element with the semantic role of `listitem` is [owned by](#owned-by) the first element that references it through `aria-owns`, which results in the wrong context role.

```html
<div role="tabpanel" aria-owns="id1">
  <div role="list" aria-owns="id1">
    <div id="id1" role="listitem">List item 1</div>
   </div>
</div>
```

**Note:** This test case follows the definition of [owned by](#owned-by) used in this rule. If implemented differently, this definition could cause differences in outcome for this test case.

#### Failed Example 7

Since explicit ownership cannot cross shadow boundaries, the element with the semantic role of `listitem` does not have a context role.

```html
<div role="list" aria-owns="item">
</div>

<div id="host"></div>

<script>
  const host = document.querySelector("#host");
  const root = host.attachShadow({ mode: "open" });

  root.innerHTML = `
    <div id="item" role="listitem">List item 1</div>
  `;
</script>
```

### Inapplicable

#### Inapplicable Example 1

Element does not have an explicit semantic role.

```html
<ul>List item 1</ul>
```

#### Inapplicable example 2

Element is not exposed to assistive technologies.

```html
<div role="listitem" aria-hidden="true">List item 1</div>
```

#### Inapplicable Example 3

Role does not have any required context roles listed in WAI-ARIA spec.

```html
<div role="radio">Radio button 1</div>
```

#### Inapplicable Example 4

Element is not exposed to assistive technologies, since ancestor has `aria-hidden` attribute with value set to `true`.

```html
<div role="list" aria-hidden="true">
    <div role="listitem">List item 1</div>
</div>
```
#### Inapplicable Example 5

Element has an explicit semantic role, but it is identical to the implicit semantic role, making the element inapplicable.

```html
<li role="listitem">List item 1</li>
```

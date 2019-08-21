---
id: ff89c9
name: ARIA required context role
rule_type: atomic
description: | 
  This rule checks that an element with an explicit role exists inside its required context.
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

The rule applies to any HTML or SVG element that is [included in the accessibility tree](#included-in-the-accessibility-tree) and has a [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/) [explicit role](#explicit-role) with a [WAI-ARIA required context role](https://www.w3.org/TR/wai-aria-1.1/#scope), except if the element has an [implicit role](#implicit-role) that is identical to its [explicit role](#explicit-role).

**Note:** An example of an element that has a [WAI-ARIA required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) is `tab` that has `tablist` as a [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

**Note:** An example of an element that has an [implicit role](#implicit-role) that is identical to its [explicit role](#explicit-role) is an `<li>` element that has `role="listitem"`. This rule is not applicable to elements like this.

**Note:** The applicability of this rule is limited to only the [WAI-ARIA 1.1 Recommendation](https://www.w3.org/TR/wai-aria-1.1/) roles, since there are unresolved issues with how [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0](https://www.w3.org/TR/dpub-aria-1.0/) uses role inheritance to define the [required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope), which makes it deviate from the model defined in [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/). The [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0/) does not include any [required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope).

## Expectation

The target element is [owned by](#owned-by) an element that has a [semantic role](#semantic-role) that is one of the [WAI-ARIA required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope) of the target element.

**Note:** The definition of [owned by](#owned-by) used in this rule is different than the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element). See more in the [owned by](#owned-by) definition.

**Note:** [Subclass roles](https://www.w3.org/TR/wai-aria-1.1/#subclassroles) of [WAI-ARIA required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope) are not automatically included as possible [required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope). E.g. the [`feed`](https://www.w3.org/TR/wai-aria-1.1/#feed) role is not a possible [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) for [`listitem`](https://www.w3.org/TR/wai-aria-1.1/#listitem), even though [`feed`](https://www.w3.org/TR/wai-aria-1.1/#feed) is a [subclass role](https://www.w3.org/TR/wai-aria-1.1/#subclassroles) of the [`list`](https://www.w3.org/TR/wai-aria-1.1/#list) role, and [`list`](https://www.w3.org/TR/wai-aria-1.1/#list) is one of the [required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope) for [`listitem`](https://www.w3.org/TR/wai-aria-1.1/#listitem).
If a [subclass role](https://www.w3.org/TR/wai-aria-1.1/#subclassroles) is a possible [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope), the [subclass role](https://www.w3.org/TR/wai-aria-1.1/#subclassroles) will be listed as a [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) as well as the [superclass role](https://www.w3.org/TR/wai-aria-1.1/#superclassrole), e.g. the [`row`](https://www.w3.org/TR/wai-aria-1.1/#row) role lists both [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid) and [`table`](https://www.w3.org/TR/wai-aria-1.1/#table) as [required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope), even though [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid) is a subclass of the [`table`](https://www.w3.org/TR/wai-aria-1.1/#table) role.

**Note:** For [`listitem` (role)](https://www.w3.org/TR/wai-aria-1.1/#listitem) the [`directory` (role)](https://www.w3.org/TR/wai-aria-1.1/#directory) seems to be missing as a [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) in the [WAI-ARIA 1.1 Recommendation](https://www.w3.org/TR/wai-aria-1.1). [An issue for this has been filed](https://github.com/w3c/aria/issues/1030) with the Accessible Rich Internet Applications Working Group. 

## Assumptions

If the [explicit role](#explicit-role) on the target element is incorrectly used, and any relationships between elements are already programmatically determinable, failing this rule might not result in accessibility issues for users of assistive technologies, and it should then not be considered a failure under WCAG success criterion 1.3.1 Info and Relationships.

## Accessibility Support

- This rule relies on assistive technologies to consistently identify which element is [owned by](#owned-by) which other element. This includes when the element is [owned by](#owned-by) another element that is an ancestor, but not a parent of the target element. Some assistive technologies do not accept these [owned by](#owned-by) relationships, unless workarounds are used. Furthermore, `aria-owns` has limited support in some user agents.
- Some user agents and assistive technologies ignore empty elements, which means they are not presented to all users. However, since this is handled inconsitently across user agents and assistive technologies, this rule is applicable to empty elements. 

## Background

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [Required Context Role](https://www.w3.org/TR/wai-aria-1.1/#scope)

## Test Cases

### Passed

#### Passed Example 1

Element with [explicit role](#explicit-role) `listitem` is contained within its [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) `list`, expressed as an [explicit role](#explicit-role).

```html
<div role="list">
    <div role="listitem">List item 1</div>
</div>
```

#### Passed Example 2

Element with [explicit role](#explicit-role) `listitem` is contained within its  [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) `list`, through the [implicit role](#implicit-role) of `ul`.

```html
<ul>
    <div role="listitem">List item 1</div>
</ul>
```

#### Passed Example 3

Element contained within its [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) even though it is not a direct child of the [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

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

`aria-owns` used to give the target element the right [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list" aria-owns="id1"></div>
<div id="id1" role="listitem">List item 1</div>
```

#### Passed Example 5

`aria-owns` trumps ownership by closest ancestor, giving the element with [explicit role](#explicit-role) of `listitem` the correct [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list" aria-owns="id1">
  <div role="navigation">
    <div id="id1" role="listitem">List item 1</div>
   </div>
</div>
```

#### Passed Example 6

Since implicit ownership can cross shadow boundaries, the element with the [explicit role](#explicit-role) of `listitem` is contained within its [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) `list`.

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

Element with [explicit role](#explicit-role) `listitem` is contained within its [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) `list`, expressed as an [explicit role](#explicit-role). Even though the element with role `listitem` is empty, it is still applicable to this rule.

```html
<div role="list">
    <div role="listitem"></div>
</div>
```

### Failed

#### Failed Example 1

No [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="listitem">List item 1</div>
```

#### Failed Example 2

Wrong [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="tablist">
    <div role="listitem">List item 1</div>
</div>
```

#### Failed Example 3

Element not contained within its [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list"></div>
<div role="listitem">List item 1</div>
```

#### Failed Example 4

Element with [explicit role](#explicit-role) `listitem` has a closer ancestor, that is [included in the accessibility tree](#included-in-the-accessibility-tree), than the role `list` that should have been its [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list">
    <div aria-label="menu">
         <div role="listitem">List item 1</div>
    </div>
</div>
```

**Note:** This test case follows the definition of [owned by](#owned-by) used in this rule. If implemented differently, this definition could cause differences in outcome for this test case. 


#### Failed Example 5

`listitem` is owned by the `tabpanel`, because it is the closest ancestor, but `tabpanel` is not the correct [context](https://www.w3.org/TR/wai-aria-1.1/#scope) for `listitem`.

```html
<div role="list">
    <div role="tabpanel">
        <div role="listitem">List item 1</div>
    </div>
</div>
```

#### Failed Example 6

The element with the [explicit role](#explicit-role) of `listitem` is [owned by](#owned-by) the first element that references it through `aria-owns`, which results in the wrong [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="tabpanel" aria-owns="id1">
    <div role="list" aria-owns="id1">
        <div id="id1" role="listitem">List item 1</div>
    </div>
</div>
```

**Note:** This test case follows the definition of [owned by](#owned-by) used in this rule. If implemented differently, this definition could cause differences in outcome for this test case.

#### Failed Example 7

Since explicit ownership cannot cross shadow boundaries, the element with the [explicit role](#explicit-role) of `listitem` does not have a [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

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

No element with an [explicit role](#explicit-role).

```html
<ul>
    <li>List item 1</ul>
</ul>
```

#### Inapplicable example 2

Element is not [included in the accessibility tree](#included-in-the-accessibility-tree).

```html
<div role="listitem" aria-hidden="true">List item 1</div>
```

#### Inapplicable Example 3

[Semantic role](#semantic-role) of element does not have any [required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope) listed in WAI-ARIA 1.1.

```html
<div role="radio">Radio button 1</div>
```

#### Inapplicable Example 4

Element is not [included in the accessibility tree](#included-in-accessibility-tree), since ancestor has an `aria-hidden` attribute with value set to `true`.

```html
<div role="list" aria-hidden="true">
    <div role="listitem">List item 1</div>
</div>
```
#### Inapplicable Example 5

Element has an [explicit role](#explicit-role), but it is identical to the [implicit role](#implicit-role), making the element inapplicable.

```html
<li role="listitem">List item 1</li>
```

#### Inapplicable Example 6

Element has an [explicit role](#explicit-role) from the [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0](https://www.w3.org/TR/dpub-aria-1.0/), not the [WAI-ARIA 1.1 Recommendation](https://www.w3.org/TR/wai-aria-1.1/), and it is therefore inapplicable.

```html
<section role="doc-bibliography">
   <h1>Cited Works</h1>
   <div role="list">
      <p role="doc-biblioentry" id="b8cab5dd-bc24-459c-9858-7afa9da69b64">
         John Steinbeck, The Grapes of Wrath (New York: The Viking Press, 1939)
      </p>
   </div>
</section>
```

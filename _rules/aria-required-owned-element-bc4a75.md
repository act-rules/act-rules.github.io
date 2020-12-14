---
id: bc4a75
name: ARIA required owned elements
rule_type: atomic
description: |
  This rule checks that an element with an explicit semantic role has at least one of its required owned elements.
accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Wilco Fiers
  previous_authors:
    - Audrey Maniez
    - Jey Nandakumar
---

## Applicability

This rule applies to any HTML or SVG element that is [included in the accessibility tree][] and has a [WAI-ARIA 1.1][] [explicit semantic role][] with [required owned elements][], except if one of the following is true:

- the element has a [semantic role][] of `combobox`; or
- the element has the `aria-busy` [attribute value][] of `true`, or has an [ancestor][] in the accessibility tree with this [attribute value][].

## Expectation

Each test target only [owns][] elements with a [semantic role][] from the [required owned element][] list for the test target's [semantic role]().

**Note:** The definition of [owned by][] used in this rule is different than the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element). See more in the [owned by][] definition.

## Assumptions

If the [explicit semantic role][] on the target element is incorrectly used, and any relationships between elements are already programmatically determinable, failing this rule may not result in accessibility issues for users of assistive technologies, and it should then not be considered a failure under [WCAG success criterion 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships).

## Accessibility Support

- User agents do not all have the same accessibility tree. Particularly the method of deriving which element owns which other elements varies between browsers. This can lead to different results for this rule, depending on which accessibility tree is used as input.
- `aria-owns` has limited support in some user agents.
- Assistive technologies are not consistent in how they handle situations where a [required owned element][] has a missing or incorrect role. This can lead to situations where inaccurate owned elements behave as expected in one assistive technology, but not in another.
- Some user agents treat the value of `aria-busy` as case-sensitive.

## Background

Some [required owned elements][] are only valid if they themselves [own][owns] (or "contain") elements with a given [semantic role][]. This is denoted by an arrow (meaning "containing") in the role description. For example, the role `menu` has `group → menuitemradio` as one of its [required owned elements][], meaning that elements with a role of `menu` may only [own][owns] elements with a role of `group` who themselves only [own][owns] elements with a role of `menuitemradio`.

The applicability of this rule is limited to the [WAI-ARIA 1.1 Recommendation][wai-aria 1.1] roles. The [WAI-ARIA Graphics Module][] does not include any [required owned elements][]. The [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0][dpub 1.0] only has three roles with [required owned elements][] (`doc-bibliography`, `doc-endnotes` and `doc-glossary`); they have issues with their use of role inheritance, and all of them have no [required owned elements][] in the [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.1][dpub 1.1] editor's draft.

The combobox role is excluded from this rule, because the design pattern for it as described in ARIA 1.1 has proven problematic. The combobox will be significantly different for ARIA 1.2, where it does not have [required owned elements][].

**Note:** [Subclass roles](https://www.w3.org/TR/wai-aria-1.1/#subclassroles) of [required owned elements][] are not automatically included as possible [required owned elements][]. For example, the `treeitem` role is not a [required owned elements][] for [`list`](https://www.w3.org/TR/wai-aria-1.1/#list), even though `treeitem` is a [subclass role](https://www.w3.org/TR/wai-aria-1.1/#subclassroles) of `listitem`.

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [Required Owned Element](https://www.w3.org/TR/wai-aria-1.1/#mustContain)
- [Owned Element](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element)

## Test Cases

### Passed

#### Passed Example 1

This element with the `list` role only owns elements with the `listitem` role. The `listitem` role is one of the [required owned elements][] for `list`.

```html
<div role="list">
	<span role="listitem">Item 1</span>
	<span role="listitem">Item 2</span>
</div>
```

#### Passed Example 2

This element with the `tablist` role only owns elements with the `tab` role. The `tab` role is one of the [required owned elements][] for `tablist`.

```html
<ul role="tablist">
	<li role="tab">Tab 1</li>
	<li role="tab">Tab 2</li>
</ul>
```

#### Passed Example 3

This element with the `grid` role only owns elements with the `row` role, and the element with the `row` role only owns elements with the `cell` role. The `row` role is one of the [required owned elements][] for `grid`, and `cell` is one of the [required owned elements][] for `row`.

```html
<table role="grid">
	<tr role="row">
		<span role="cell">Item 1</span>
	</tr>
</table>
```

#### Passed Example 4

This element with the `menu` role only owns elements with the `menuitem`, `menuitemradio` and `menuitemcheckbox` role. These roles are all [required owned elements][] for `menu`. The element with the `none` role is not [owned by][] the `menu` because it is not [included in the accessibility tree][].

```html
<div role="menu">
	<li role="none"></li>
	<li role="menuitem">Item 1</li>
	<div role="menuitemradio" aria-checked="false">Item 2</div>
	<div role="menuitemcheckbox" aria-checked="false">Item 3</div>
</div>
```

#### Passed Example 5

This element with the `list` role only owns elements with the `listitem` role through the `aria-owns` attribute. The `listitem` role is one of the [required owned elements][] for `list`.

**Note:** This test case follows the definition of [owned by][]. If implemented differently, this definition could cause differences in outcome of this test case.

```html
<div role="list" aria-owns="id1"></div>
<div id="id1" role="listitem">Item 1</div>
```

#### Passed Example 6

This element with the `list` role only owns elements with the `listitem` role, or elements with the `group` role, in which each element has the `listitem` role. Both the `listitem` role on its own, and the `group` role (when containing elements with the `listitem` role) are [required owned elements][] for `list`.

```html
<div role="list">
	<span role="listitem">Item 1</span>
	<div role="group">
		<span role="listitem">Item 2</span>
		<span role="listitem">Item 3</span>
	</div>
</div>
```

### Failed

#### Failed Example 1

This element with the `list` role owns an element without any of its [required owned elements][] (`listitem` or `group` containing `listitem`).

```html
<div role="list">
	<span>Item 1</span>
</div>
```

#### Failed Example 2

This element with the `tablist` role owns an element with the `listitem` role. The `listitem` role is not one of the [required owned elements][] for `tablist`.

```html
<ol role="tablist">
	<li role="listitem">Item 1</li>
</ol>
```

#### Failed Example 3

This element with the `list` role owns an element with the `listitem` role, and one with the `link` role. The `link` role is not one of the [required owned elements][] for `list`.

```html
<div role="list">
	<li>Item 1</li>
	<span role="link">Item 2</span>
</div>
```

#### Failed Example 4

This element with the `grid` role only owns elements with the `row` role, but the element with the `row` role does not own elements with the `cell` role. The `cell` is one of the [required owned elements][] for `row`.

```html
<div role="grid">
	<div role="row">
		<span>Item 1</span>
	</div>
</div>
```

#### Failed Example 5

This element with the `list` role owns an element with the `tab` role through the `aria-owns` attribute. The `tab` role is not one of the [required owned elements][] for `list`.

**Note:** This test case follows the definition of [owned by][]. If implemented differently, this definition could cause differences in outcome of this test case.

```html
<div role="list" aria-owns="id2"></div>
<div id="id2" role="tab">Tab 1</div>
```

#### Failed Example 6

This element with the `list` role owns an element with the `group` role, but the group owns elements with the `tab` role. The `group` is not a [required owned elements][] for `list`, if it owns elements with a [semantic role][] other then `listitem`.

```html
<div role="list">
	<div role="group">
		<span role="tab">Item 1</span>
		<span role="tab">Item 2</span>
	</div>
</div>
```

### Inapplicable

#### Inapplicable Example 1

This element with the `list` role is not included in the accessibility tree because the `aria-hidden` attribute is set to `true`.

```html
<div role="list" aria-hidden="true"></div>
```

#### Inapplicable Example 2

This `ul` element does not have an [explicit semantic role][].

```html
<ul>
	<li>Item 1</li>
</ul>
```

#### Inapplicable Example 3

This element with the `progressbar` role does not need [required owned elements][].

```html
<div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20 %</div>
```

#### Inapplicable Example 4

This element with the `menu` role has attribute an `aria-busy` attribute set to `true`.

```html
<ul role="menu" aria-busy="true">
	Loading
</ul>
```

#### Inapplicable Example 5

This element with the `combobox` role conforms to [WAI-ARIA 1.1][] without owned elements.

```html
<label for="combo">My Combobox</label> <input role="combobox" aria-expanded="false" id="combo" />
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[dpub 1.1]: https://w3c.github.io/dpub-aria/ "Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.1 (Editor's Draft)"
[required owned element]: https://www.w3.org/TR/wai-aria-1.1/#mustContain 'Define Required owned element'
[required owned elements]: https://www.w3.org/TR/wai-aria-1.1/#mustContain 'Define Required owned element'
[owns]: #owned-by
[owned by]: #owned-by
[explicit semantic role]: #explicit-role
[semantic role]: #semantic-role
[included in the accessibility tree]: #included-in-the-accessibility-tree
[wai-aria 1.1]: https://www.w3.org/TR/wai-aria-1.1/
[dpub 1.0]: https://www.w3.org/TR/dpub-aria-1.0/
[wai-aria graphics module]: https://www.w3.org/TR/graphics-aria-1.0/ 'WAI-ARIA Graphics Module 1.0'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'Definition Ancestors, as on 2020-01-10'

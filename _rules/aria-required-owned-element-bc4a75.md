---
id: bc4a75
name: ARIA required owned elements
rule_type: atomic
description: |
  This rule checks that each role has at least one of its required owned elements.
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
  - Audrey Maniez
  - Jey Nandakumar
---

## Applicability

The rule applies to any HTML or SVG element that is [included in the accessibility tree](#included-in-the-accessibility-tree) and has a [semantic role](#semantic-role) that has [WAI-ARIA required owned elements](https://www.w3.org/TR/wai-aria/#mustContain).

## Expectation

The target element either [owns](#owned-by) at least one instance of one of its [WAI-ARIA required owned element](https://www.w3.org/TR/wai-aria-1.1/#mustContain) or has `aria-busy` attribute set to `true`.

## Assumptions

Attributes that start with `aria-*` are used to set either [state](https://www.w3.org/WAI/PF/aria-1.1/terms#def_state) or [property](https://www.w3.org/WAI/PF/aria-1.1/terms#def_property) that should be picked up by assistive technologies. If any `aria-*` attributes are not used for that purpose, the results of this rule may be incorrect.

## Accessibility Support

This rule relies on assistive technologies to recognize owned elements, as defined by [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria). This includes when they are nested descendants that are not immediate children. However, some assistive technologies do not recognize owned elements that are not immediate children, unless workarounds are used.

## Background

- [Required Owned Element](https://www.w3.org/TR/wai-aria-1.1/#mustContain)
- [Owned Element](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element)
- [HTML in ARIA](https://www.w3.org/TR/html-aria/)
- [Implicit WAI-ARIA Semantics](https://www.w3.org/TR/wai-aria-1.1/#implicit_semantics)

## Test Cases

### Passed

#### Passed example 1

Element `ul` with role `list` owns at least one instance of required owned element, in this case a `span` with `role` of `listitem`.

```html
<ul role="list">
	<span role="listitem"></span>
	<span></span>
</ul>
```

#### Passed example 2

Element `div` with role `tablist` owns an instance of required owned element, a `span` with `role` of `tab`.

```html
<div role="tablist">
	<span role="tab"> </span>
</div>
```

#### Passed example 3

Elements with multiple nested roles, that each own at least an instance of required owned element.

```html
<table role="grid">
	<tr role="row">
		<span role="cell"> </span>
	</tr>
</table>
```

#### Passed example 4

Multiple types of required owned elements are present.

```html
<ul role="menu">
	<li></li>
	<!-- implicit role -->
	<li role="menuitem"></li>
	<li role="menuitemradio"></li>
</ul>
```

#### Passed example 5

Element with role `table` owns multiple instances of required owned elements. Note that the owned elements do not have to be an immediate children of the target element. (See accessibility support notes for more information).

```html
<div role="table">
	<div>
		<div>
			<div role="row">
				<div role="cell">my cell</div>
				<div role="cell">and another cell</div>
			</div>
			<div role="row">
				<div role="cell">my cell</div>
				<div role="cell">and another cell</div>
			</div>
		</div>
	</div>
</div>
```

#### Passed example 6

Element with role `grid` owns multiple instances of required owned elements.

```html
<div role="grid">
	<div role="rowgroup">
		<div role="row">
			<div role="gridcell">1</div>
			<div role="gridcell">Item 1</div>
			<div role="gridcell">2 Nos.</div>
		</div>
	</div>
	<div role="rowgroup">
		<div role="row">
			<div role="gridcell">1</div>
			<div role="gridcell">Item 1</div>
			<div role="gridcell">2 Nos.</div>
		</div>
	</div>
</div>
```

#### Passed example 7

Element with role `list` owns an instance of required owned element which has an implicit role of `listitem`.

```html
<div role="list">
	<li></li>
</div>
```

#### Passed example 8

Element with role `menubar` can own multiple required owned element with role `menuitem`, `menuitemcheckbox` and `menuitmeradio`, but only one is necessary.

```html
<div role="menubar">
	<div role="menuitem"></div>
	<div role="menuitemcheckbox"></div>
</div>
```

#### Passed example 9

Element with role `list` contains a required `listitem`, the relationship between both elements is made possible through the `aria-owns` properties.

**Note:** This test case follows the definition of [owned by](#owned-by). If implemented differently, this definition could cause differences in outcome of this test case.

```html
<div role="list" aria-owns="id1"></div>
<div id="id1" role="listitem"></div>
```

### Failed

#### Failed example 1

Element with role `list` is missing required owned element `list`.

```html
<ul role="list">
	<span> </span>
</ul>
```

#### Failed example 2

Element with role `tablist` is missing required owned element `tab`.

```html
<ol role="tablist">
	<li role="listitem"></li>
</ol>
```

#### Failed example 3

Element with role `grid` owns required owned element `rowgroup`, which is missing its required owned element `row`.

```html
<div role="grid">
	<div>
		<div role="rowgroup">
			<span>Item 1</span>
		</div>
		<div></div>
	</div>
</div>
```

#### Failed example 4

The element with the semantic role of `list` owns the element with the role `tab` through the `aria-owns` property.

**Note:** This test case follows the definition of [owned by](#owned-by). If implemented differently, this definition could cause differences in outcome of this test case.

```html
<div role="list" aria-owns="id2"></div>
<div id="id2" role="tab"></div>
```

### Inapplicable

#### Inapplicable example 1

Element with explicit semantic role `list` is not exposed to assistive technologies.

```html
<ul role="list" aria-hidden="true">
	<li></li>
</ul>
```

#### Inapplicable example 2

Element has empty role.

```html
<ul role="">
	<li></li>
</ul>
```

#### Inapplicable example 3

Element has no explicit semantic role.

```html
<ul>
	<li></li>
</ul>
```

---
name: ARIA required owned elements

description: |
	This rule checks that each role has at least one of its required owned elements.
success_criterion:
- 1.3.1 # Info and Relationships (A)

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Audrey Maniez
- Jey Nandakumar
---

## Test procedure

### Applicability

This rule applies to any HTML or SVG element that is [exposed to assistive technologies](#exposed-to-assistive-technologies) and has an explicit [semantic role](#semantic-role) that has [WAI-ARIA required owned elements](https://www.w3.org/TR/wai-aria/#mustContain), except when the owned element has an implicit semantic role that is identical to its explicit semantic role.

### Expectation

The target element [owns](#owned-by) at least one instance of one of its [WAI-ARIA required owned element](https://www.w3.org/TR/wai-aria-1.1/#mustContain).

**Note:**
- When a widget is missing required owned elements due to script execution or loading, authors [MUST]((w3.org/TR/wai-aria-1.1/#mustContain)) mark a containing element with `aria-busy` equal to `true`.

## Assumptions

*There are currently no assumptions*

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

Element `ul` with role `list` has at least one child node `span` with the required owned element `listitem` as an explicit semantic role.

```html
<ul role='list'>
	<span role='listitem'>
	</span>
	<span>
	</span>
</ul>
```

#### Passed example 2

Element `div` with role `tablist` has child node `span` with the required owned element `tab` as an explicit semantic role.

```html
<div role='tablist'>
	<span role='tab'>
	</span>
</div>
```

#### Passed example 3

Multiple roles that each have an instance of their required owned elements present as child nodes.

```html
<table role='grid'>
	<tr role='row'>
		<span role='cell'>
		</span>
	</tr>
</table>
```

#### Passed example 4

Multiple types of required owned elements are present.

```html
<ul role='menu'>
	<li></li> <!-- implicit role -->
	<li role='menuitem'></li>
	<li role='menuitemradio'></li>
</ul>
```

#### Passed example 5

Required owned element does not have to be an immediate child of the role, but could be any descendant. (See accessibility support notes for details).

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

Nested required owned elements.

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

Element with role `list` contains a required owned element which has an implicit role of `listitem`.

```html
<div role='list'>
   <li>
   </li>
</div>
```

#### Passed example 8

Element with role `menubar` can have multiple required owned element (`menuitem` `menuitemcheckbox` and `menuitmeradio`) but only one is necessary.

```html
<div role='menubar'>
   <div role='menuitem'>
   </div>
   <div role='menuitemcheckbox'>
   </div>
	 <div role='menuitmeradio'>
   </div>
</div>
```

#### Passed example 9

Element with role `list` contains a required `listitem`, the relationship between both elements is made possible through the `aria-owns` properties.

**Note:** This test case follows the definition of [owned by](#owned-by) used in this rule. If implemented differently, this definition could cause differences in outcome for this test case.

```html
<div role="list" aria-owns="id1">
</div>

<div id="id1" role="listitem"></div>
```

#### Passed example 10

Element with role `grid` has at least one required owned element with role `rowgroup`.

```html
<div role="grid">
	<div>
		<div role="row">
			<span>Item 1</span>
		</div>
	<div>
	<div role="rowgroup">
		<div role="row">
			<span>Item 2</span>
		</div>
	</div>
</div>
```

### Failed

#### Failed example 1

Element with role `list` is missing required owned element `listitem`.

```html
<ul role='list'>
	<span>
	</span>
</ul>
```

#### Failed example 2

Element with role `tablist` is missing required owned element `tab`.

```html
<ol role='tablist'>
	<li role='listitem'>
	</li>
</ol>
```

#### Failed example 3

Element with role `grid` is missing a required owned element `rowgroup`, even though the containing required owned element `row` is present.

```html
<div role="grid">
	<div>
		<div role="row">
			<span>Item 1</span>
		</div>
	<div>
</div>
```

#### Failed example 4

The element with the semantic role of `list` owns the element with the role `tab` through the `aria-owns` property.

```html
<div role="list" aria-owns="id2">
</div>

<div id="id2" role="tab"></div>
```

**Note:** This test case follows the definition of [owned by](#owned-by) used in this rule. If implemented differently, this definition could cause differences in outcome for this test case.

### Inapplicable

#### Inapplicable example 1

Element with explicit semantic role `list` is not exposed to assistive technologies.

```html
<ul role='list' aria-hidden='true'>
	<li></li>
</ul>
```

#### Inapplicable example 2

Element has empty role.

```html
<ul role=''>
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
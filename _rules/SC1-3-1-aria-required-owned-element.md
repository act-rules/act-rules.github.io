---
name: ARIA required owned elements

description: |
	The rule checks that a role has at least one of its required owned elements.

success_criterion:
- 1.3.1

test_aspects:
- DOM Tree

authors:
- Audrey Maniez
- Jey Nandakumar
---

## Test procedure

### Applicability

The rule applies to any HTML or SVG element that is [exposed to assistive technologies](#exposed-to-assistive-technologies) and has an explicit [semantic role](#semantic-role).

### Expectation

For each test target at least one instance of one [required owned element](https://www.w3.org/TR/wai-aria-1.1/#mustContain) listed for that role in [WAI-ARIA](https://www.w3.org/TR/wai-aria) is present as a [semantic role](#semantic-role) for an element [owned](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element) by the test target.

## Assumptions

*There are currently no assumptions*

## Accessibility Support

When a required owned element is not an immediate child, but rather a nested descendant, certain AT have some issues recognize child in that configuration which can be negated by defining a valid role for intermediate elements.

## Background

- [Required Owned Element](https://www.w3.org/TR/wai-aria-1.1/#mustContain)
- [Owned Element](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element)
- [HTML in ARIA](https://www.w3.org/TR/html-aria/)

## Test Cases

### Passed

#### Passed example 1

Element `ul` with role `list` has atleast one child node `span` with the required owned element `listitem` as an explicit semantic role.

```html
<ul role='list'>
	<span role='listitem'>
	</span>
	<span>
	</span>
</ul>
```

#### Passed example 2

Element `ol` with role `tablist` has child node `li` with the required owned element `tab` as an explicit semantic role.

```html
<ol role='tablist'>
	<li role='tab'>
	</li>
</ol>
```

#### Passed example 3

Element with role `list` has `li` element which has an implicit semantic role of ´listitem´, which is a required owned element.

```html
<ul role='list'>
	<li></li> <!-- implicit role -->
</ul>
```

#### Passed example 4

Multiple roles that each have an instance of their required owned elements present as child nodes.

```html
<table role='grid'>
	<tr role='row'>
		<span role='cell'>
		</span>
	</tr>
</table>
```

#### Passed example 5

Multiple types of required owned elements are present.

```html
<ul role='menu'>
	<li></li> <!-- implicit role -->
	<li role='menuitem'></li>
	<li role='menuitemradio'></li>
</ul>
```

#### Passed example 6

Required owned element does not have to be an immediate child of the role, but could be any descendant. (See accessibility support notes for details).

```html
<div role="table">
	<div role="presentation">
		<div role="presentation">
			<div role="presentation">With presentation role</div>
		</div>
	</div>
	<div role="presentation">
		<div role="presentation">
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

#### Passed example 7

Nested required owned element(s) using the `containing` notation for respective role(s).

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

### Failed

#### Failed example 1

Missing required owned element ´listitem´.

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

Nested required owned element(s) missing role(s).

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

### Inapplicable

#### Inapplicable example 1

Element is not exposed to assistive technologies.

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

Element has no role attribute.

```html
<ul>
	<li></li>
</ul>
```
---
id: d0f69e
name: All table header cells have corresponding data cells
rule_type: atomic
description: |
  This rule checks that each table header has corresponding data cells in a table element.
accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
authors:
  - Jey Nandakumar
  - Audrey Maniez
---

## Applicability

The rule applies to any HTML element that is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of an element having a [semantic role](#semantic-role) of either [table](https://www.w3.org/TR/wai-aria-1.1/#table) or [grid](https://www.w3.org/TR/wai-aria-1.1/#grid), and is [visible](#visible) as well as [included in the accessibility tree](#included-in-the-accessibility-tree), where the element has any of the below [semantic roles](#semantic-role):

- [cell](https://www.w3.org/TR/wai-aria-1.1/#cell)
- [gridcell](https://www.w3.org/TR/wai-aria-1.1/#gridcell)
- [rowheader](https://www.w3.org/TR/html-aria/#index-aria-rowheader)
- [columnheader](https://www.w3.org/TR/html-aria/#index-aria-columnheader)

## Expectation

Each target element is either the row or column header for cells that is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of the same element as the target element.

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 1.3.1: Information and relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
- [Forming relationships between data cells and header cells](https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics)

## Test Cases

### Passed

#### Passed Example 1

Each column header element has corresponding cells, within the same table element.

```html
<table>
	<tr>
		<th>Time</th>
	</tr>
	<tr>
		<td>05:41</td>
	</tr>
</table>
```

#### Passed Example 2

Each column header element has corresponding cells, within the same element having a [semantic role](#semantic-role) of `table`.

```html
<div role="table">
	<div role="rowgroup">
		<div role="row">
			<span role="columnheader">Month</span>
			<span role="columnheader">Top Temperature</span>
		</div>
	</div>
	<div role="rowgroup">
		<div role="row">
			<span role="cell">July</span>
			<span role="cell">40 C</span>
		</div>
		<div role="row">
			<span role="cell">August</span>
			<span role="cell">45 C</span>
		</div>
	</div>
</div>
```

#### Passed Example 3

Each column header element has corresponding cells within the same table element. In this example the column headers have cells that span multiple columns.

```html
<table>
	<thead>
		<tr>
			<th>Projects</th>
			<th>Exams</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td colspan="2">15%</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 4

Each row and column header element has corresponding cells, within the same element having a [semantic role](#semantic-role) of `grid`.

```html
<table role="grid">
	<thead role="rowgroup">
		<tr role="row">
			<td></td>
			<th role="columnheader">Breakfast</th>
			<th role="columnheader">Lunch</th>
			<th role="columnheader">Dinner</th>
		</tr>
	</thead>
	<tbody role="rowgroup">
		<tr role="row">
			<th scope="row" role="rowheader">Day 1</th>
			<td>8:00</td>
			<td>13:00</td>
			<td>18:00</td>
		</tr>
	</tbody>
</table>
```

### Failed

#### Failed Example 1

Not all column headers have corresponding cells within the same table element.

```html
<table>
	<thead>
		<tr>
			<th>Column 1</th>
			<th>Column 2</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>15%</td>
		</tr>
	</tbody>
</table>
```

### Inapplicable

#### Inapplicable Example 1

The rule does not apply to table element that is not [included in the accessibility tree](#included-in-the-accessibility-tree).

```html
<table role="presentation">
	<tr>
		<th>Time</th>
	</tr>
	<tr>
		<td>12:00</td>
	</tr>
</table>
```

#### Inapplicable Example 2

The rule does not apply to table element that is not [visible](#visible).

```html
<table style="display:none;">
	<tr>
		<th>Time</th>
	</tr>
	<tr>
		<td>24:00</td>
	</tr>
</table>
```

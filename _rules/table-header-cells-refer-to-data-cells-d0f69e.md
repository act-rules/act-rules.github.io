---
id: d0f69e
name: All table header cells have assigned data cells
rule_type: atomic
description: |
  This rule checks that each table header has assigned data cells in a table element.
accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
acknowledgements:
  authors:
    - Jey Nandakumar
    - Audrey Maniez
---

## Applicability

The rule applies to any HTML element that has the [semantic role](#semantic-role) of [rowheader](https://www.w3.org/TR/wai-aria-1.1/#rowheader) or [columnheader](https://www.w3.org/TR/wai-aria-1.1/#columnheader) and is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) of an element that:

- has a [semantic role](#semantic-role) of either [table](https://www.w3.org/TR/wai-aria-1.1/#table) or [grid](https://www.w3.org/TR/wai-aria-1.1/#grid); and
- is [visible](#visible); and
- is [included in the accessibility tree](#included-in-the-accessibility-tree)

## Expectation

Each target element is [assigned](https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics) to at least one element with a [semantic role](#semantic-role) of [cell](https://www.w3.org/TR/wai-aria-1.1/#cell) or [gridcell](https://www.w3.org/TR/wai-aria-1.1/#gridcell), that is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) of the same [table](https://www.w3.org/TR/wai-aria-1.1/#table) or [grid](https://www.w3.org/TR/wai-aria-1.1/#grid) element, as that of the target element.

## Assumptions

_There are currently no assumptions._

## Accessibility Support

- `headers` attribute may not be consistently announced by assistive technologies.

## Background

- [Understanding Success Criterion 1.3.1: Information and relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
- [Forming relationships between data cells and header cells](https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics)

## Test Cases

### Passed

#### Passed Example 1

The column header element has an [assigned](https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics) cell, within the same `table` element.

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

Each column header element has assigned cells, within the same `table` element.

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

Each column header element has assigned cells within the same table element. In this example the column headers have cells that span multiple columns.

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

Each row and column header element has assigned cells, within the same element having a [semantic role](#semantic-role) of `grid`.

```html
<table role="grid">
	<thead>
		<tr role="row">
			<td></td>
			<th role="columnheader">Breakfast</th>
			<th role="columnheader">Lunch</th>
			<th role="columnheader">Dinner</th>
		</tr>
	</thead>
	<tbody>
		<tr role="row">
			<th scope="row" role="rowheader">Day 1</th>
			<td>8:00</td>
			<td>13:00</td>
			<td>18:00</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 5

Each column header is assigned to a cell. Usage of `headers` attribute changes the relationship between column headers and cells.

```html
<table>
	<tr>
		<th id="col1">Column 1</th>
		<th id="col2">Column 2</th>
	</tr>
	<tr>
		<td></td>
	</tr>
	<tr>
		<td headers="col2"></td>
	</tr>
</table>
```

### Failed

#### Failed Example 1

One of the column headers ("Column 2"), does not have an assigned cell within the same `table` element.

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

#### Failed Example 2

The second column header, does not have an assigned cell within the same `table` element. Usage of `headers` attribute removes cell association to the column.

```html
<table>
	<tr>
		<th id="col1"></th>
		<th id="Column2"></th>
	</tr>
	<tr>
		<td></td>
		<td headers="col1"></td>
	</tr>
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

The rule does not apply to table element that is not [visible](#visible) in page.

```html
<html>
	<style>
		.notInPage {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<body>
		<table class="notInPage">
			<tr>
				<th>Time</th>
			</tr>
			<tr>
				<td>24:00</td>
			</tr>
		</table>
	</body>
</html>
```

#### Inapplicable Example 3

The rule does not apply to table element that has no [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) with [semantic roles](#semantic-role) of either [rowheader](https://www.w3.org/TR/wai-aria-1.1/#rowheader) or [columnheader](https://www.w3.org/TR/wai-aria-1.1/#columnheader).

```html
<table role="presentation">
	<tr>
		<td>12:00</td>
	</tr>
</table>
```

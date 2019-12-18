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

The rule applies to any HTML element that has the [semantic role][] of [rowheader][] or [columnheader][], that is [visible][], [included in the accessibility tree][], whose closest ancestor in the [flat tree][] with a [semantic role][] of either [table][] or [grid][]; which: 1. has [descendants][descendant], that are non empty (""), 2. is [visible][], 3. as well as [included in the accessibility tree][].

## Expectation

Each target element is [assigned][] to at least one element with a [semantic role][] of [cell][] or [gridcell][].
**Note:** The assigned cell is a [descendant][] in the [flat tree][] of the same [table][] or [grid][] element.

## Assumptions

This rule assumes that table header cells have a relationship conveyed through presentation with other cells within the same table.
**Note:** This assumption helps exclude edge cases like: - a table definition where there is only one header cell, or - a table definition where there are multiple headers and no other cells

## Accessibility Support

Table markup and header cell association is not well supported by some popular assistive technologies. Passing this rule can still cause issues for users of those assistive technologies.

## Background

- [Understanding Success Criterion 1.3.1: Information and relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
- [Forming relationships between data cells and header cells][assigned]

## Test Cases

### Passed

#### Passed Example 1

The column header element has an [assigned][] cell, within the same `table` element.

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

Each row and column header element has assigned cells, within the same element having a [semantic role][] of `grid`.

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

The column header ("Column 2"), does not have an assigned cell within the same `table` element.

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

The column header ('Column2') does not have an assigned cell within the same `table` element. In this case the usage of `headers` attribute removes cell association to the column.

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

#### Failed Example 3

The column header ('Column B') does not have an assigned cell within the same `table` element.

```html
<div role="grid">
	<div role="row">
		<div role="columnheader">Col A</div>
		<div role="columnheader">Col B</div>
	</div>
	<div role="row">
		<div role="gridcell">1A</div>
		<div role="gridcell">1B</div>
	</div>
	<div role="row">
		<div role="gridcell">2A</div>
	</div>
</div>
```

### Inapplicable

#### Inapplicable Example 1

The rule does not apply to table element that is not [included in the accessibility tree][].

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

The rule does not apply to table element that is not [visible][] in page.

```html
<style>
	.notInPage {
		position: absolute;
		left: -9999px;
		top: -9999px;
	}
</style>
<table class="notInPage">
	<tr>
		<th>Time</th>
	</tr>
	<tr>
		<td>24:00</td>
	</tr>
</table>
```

#### Inapplicable Example 3

The rule does not apply to table element that has no [descendants][descendant] with [semantic roles][semantic role] of either [rowheader][] or [columnheader][].

```html
<table>
	<tr>
		<td>12:00</td>
	</tr>
</table>
```

#### Inapplicable Example 4

The rule does not apply to table element that has no [descendants][descendant].

```html
<table></table>
```

#### Inapplicable Example 5

The rule does not apply to table element that has [descendants][descendant] that are empty ("").

```html
<table>
	<tr>
		<th></th>
	</tr>
	<tr>
		<td></td>
	</tr>
</table>
```

[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[assigned]: https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics 'Forming relationships between data cells and header cells'
[cell]: https://www.w3.org/TR/wai-aria-1.1/#cell 'ARIA cell role'
[gridcell]: https://www.w3.org/TR/wai-aria-1.1/#gridcell 'ARIA gridcell role'
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant 'Definition of descendant'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[table]: https://www.w3.org/TR/wai-aria-1.1/#table 'ARIA table role'
[grid]: https://www.w3.org/TR/wai-aria-1.1/#grid 'ARIA grid role'
[columnheader]: https://www.w3.org/TR/wai-aria-1.1/#columnheader 'ARIA columnheader role'
[rowheader]: https://www.w3.org/TR/wai-aria-1.1/#rowheader 'ARIA rowheader role'

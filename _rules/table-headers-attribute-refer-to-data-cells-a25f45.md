---
id: a25f45
name: Headers attribute specified on a cell refers to cells in the same table element
rule_type: atomic
description: |
  This rule checks that the headers attribute on a cell refer to other cells in the same `table` element.
accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:H43: # Using id and headers attributes to associate data cells with header cells in data tables
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Jey Nandakumar
    - Audrey Maniez
---

## Applicability

This rule applies to any `headers` attribute specified on a [`cell`][] within a [`table`][] element, where the [`table`][] element is [visible][] and [included in the accessibility tree][].

## Expectation 1

Each target attribute is [a set of space separated IDs][], each of which is the ID of an element, that is a [`cell`][] of the same [`table`][].

**Note:** `headers` attribute referencing elements that are non-existent or not in the table are ignored when [assigning header cells (step 3, first case, point 2)](https://html.spec.whatwg.org/multipage/tables.html#algorithm-for-assigning-header-cells).

## Expectation 2

Each target attribute is [a set of space separated IDs][], none of which is the ID of the element on which the test target is specified.

**Note:** `headers` attribute referencing to the cell itself are ignored when [assigning header cells (step 3, first case, point 2)](https://html.spec.whatwg.org/multipage/tables.html#algorithm-for-assigning-header-cells).

## Assumptions

- This rule assumes that the `headers` attribute is only used to identify table headers. If other information is included in the `headers` attribute, the rule may fail on issues that are not accessibility concerns. For example, if `headers` is used to include information for scripts, this rule may not be accurate.
- This rule assumes that the `headers` attribute is required to express the relationship between data and header cells in the `table`. If the browser [computes an adequate fallback header][], this rule may produce incorrect results.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 1.3.1: Information and relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
- [F90: Incorrectly associating table headers and content via the headers and id attributes](https://www.w3.org/WAI/WCAG21/Techniques/failures/F90)

## Test Cases

### Passed

#### Passed Example 1

The `headers` attribute on the cell refers to a `th` element within the same `table`.

```html
<table>
	<thead>
		<tr>
			<th id="header1">Projects</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td headers="header1">15%</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 2

The `headers` attribute on the cell refers to a `th` element within the same `table`. Multiple headers are referenced for a cell with `colspan` of `2`.

```html
<table>
	<thead>
		<tr>
			<th id="header1">Projects</th>
			<th id="header2">Exams</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td colspan="2" headers="header1 header2">15%</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 3

The `headers` attribute on the second cell refers to a `td` element with a role of `columnheader` within the same `table`.

```html
<table>
	<thead>
		<tr>
			<td role="columnheader" id="header1">Projects</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td headers="header1">15%</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 4

This `table` has multiple elements with a role of `columnheader`. The `headers` attribute on the cells lists IDs of `th` elements within the same `table`.

```html
<table>
	<tr>
		<th colspan="2" id="header1">Projects</th>
		<th colspan="2" id="header2">Exams</th>
	</tr>
	<tr>
		<th id="e1" headers="header1">1</th>
		<th id="e2" headers="header1">2</th>
		<th id="p1" headers="header2">1</th>
		<th id="p2" headers="header2">2</th>
	</tr>
	<tr>
		<td colspan="2" headers="header1 e1 e2">15%</td>
		<td headers="header2 p1">15%</td>
		<td headers="header2 p2">45%</td>
	</tr>
</table>
```

#### Passed Example 5

The `headers` attribute on the cell refers to a `th` element with a role of `rowheader` within the same `table`.

```html
<table>
	<tbody>
		<tr>
			<th role="rowheader" id="headerAge">Age</th>
			<td headers="headerAge">65</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 6

The `headers` attribute on the last two `th` elements refers to another `th` element within the same `table`. Here the column header has a span of two columns.

```html
<table>
	<tr>
		<th id="name" colspan="2">Name</th>
	</tr>
	<tr>
		<th headers="name">Firstname</th>
		<th headers="name">Lastname</th>
	</tr>
</table>
```

#### Passed Example 7

The `headers` attribute on the cells refers to `th` elements which are row scoped & within the same `table`.

```html
<table>
	<tr>
		<th id="projects1" scope="row">Projects</th>
		<th id="progress1" scope="row">Progress</th>
	</tr>
	<tr>
		<td headers="projects1">My Project</td>
		<td headers="progress1">15%</td>
	</tr>
</table>
```

#### Passed Example 8

The `headers` attribute on the cell refers to `th` element which is not the same column as the cell.

```html
<table>
	<tr>
		<td></td>
		<th id="projects2">Projects</th>
	</tr>
	<tr>
		<td headers="projects2">15%</td>
		<td></td>
	</tr>
</table>
```

### Failed

#### Failed Example 1

The `td` element has a `headers` attribute referring to an ID that does not exist within the same `table`. Here the referenced ID is incorrect.

```html
<table>
	<tr>
		<th id="headerOfColumn">Projects</th>
	</tr>
	<tr>
		<td headers="headOfColumn">15%</td>
	</tr>
</table>
```

#### Failed Example 2

The `td` element has a `headers` attribute referring to its own ID.

```html
<table>
	<tr>
		<th>Event Type</th>
	</tr>
	<tr>
		<td id="headerBday" headers="headerBday">
			Birthday
		</td>
	</tr>
</table>
```

#### Failed Example 3

The `headers` attribute on the cell refers to an element inside the same `table` which does not have a role of `rowheader` or `columnheader`.

```html
<table>
	<tr>
		<td>
			<span id="headerProject">Projects</span>
		</td>
	</tr>
	<tr>
		<td headers="headerProject">
			15%
		</td>
	</tr>
</table>
```

### Inapplicable

#### Inapplicable Example 1

There is no `headers` attribute.

```html
<table>
	<tr>
		<th scope="col">Projects</th>
		<th scope="col">Exams</th>
	</tr>
	<tr>
		<td>15%</td>
		<td>45%</td>
	</tr>
</table>
```

#### Inapplicable Example 2

The `table` has a `role="presentation"` and thus is not [included in the accessibility tree][].

```html
<table role="presentation">
	<tr>
		<td id="header1">Project Status</td>
	</tr>
	<tr>
		<td headers="header1">15%</td>
	</tr>
</table>
```

#### Inapplicable Example 3

The `table` is not [visible][] in page.

```html
<html>
	<style>
		.notInPage {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<table class="notInPage">
		<tr>
			<td id="header1">Project Status</td>
		</tr>
		<tr>
			<td headers="header1">15%</td>
		</tr>
	</table>
</html>
```

#### Inapplicable Example 4

The rule applies only to `headers` attribute within a `table` element.

```html
<div role="table">
	<div role="row">
		<div role="columnheader" id="header1">Projects</div>
		<div role="columnheader" id="header2">Exams</div>
	</div>
	<div role="row">
		<div role="cell" headers="header2">15%</div>
		<div role="cell" headers="header1">15%</div>
	</div>
</div>
```

#### Inapplicable Example 5

The `table` is not [included in the accessibility tree][].

```html
<table style="display:none;">
	<tr>
		<td id="header1">Project Status</td>
	</tr>
	<tr>
		<td headers="header1">15%</td>
	</tr>
</table>
```

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[visible]: #visible 'Definition of visible'
[`cell`]: https://html.spec.whatwg.org/#concept-cell 'Definition of cell'
[a set of space separated ids]: https://html.spec.whatwg.org/#set-of-space-separated-tokens 'Space separated tokens'
[`table`]: https://html.spec.whatwg.org/#concept-table 'Definition of table'
[computes an adequate fallback header]: https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics 'Forming relationships between data cells and header cells'

---
id: a25f45
name: Headers attribute specified on a cell refers to cells in the same table element
rule_type: atomic
description: |
  This rule checks that the headers attribute of `td` elements refer to cells in the same `table` element that have a semantic role of `columnheader` or `rowheader`.
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
  - Jey Nandakumar
  - Audrey Maniez
---

## Applicability

This rule applies to any `headers` attribute specified on a [`cell`](https://www.w3.org/TR/html52/tabular-data.html#cell) in a `table` element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

## Expectation

The `headers` attribute of each target element is [a set of space separated IDs](https://www.w3.org/TR/html50/infrastructure.html#set-of-space-separated-tokens), each of which is an ID of an element in the same [document tree](https://www.w3.org/TR/dom41/#document-trees) or [shadow tree](https://www.w3.org/TR/dom41/#shadow-trees) as the applicable element, that:

1. has a [semantic role](#semantic-role) of `columnheader` or `rowheader`, and
2. is a [`cell`](https://www.w3.org/TR/html52/tabular-data.html#cell) of the same [`table`](https://www.w3.org/TR/html50/tabular-data.html#concept-table) as the target element

## Assumptions

- This test assumes that the `headers` attribute is only used to identify table headers. If other information is included in the `headers` attribute, the rule may fail on issues that are not accessibility concerns. For example, if `headers` is used to include information for script, this rule may not be accurate.
- This test assumes that if the IDs of the `headers` attribute, do not live up to the expectation in this rule, the browser will try to calculate a default header from the [algorithm for assigning header cells](https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics).

## Accessibility Support

- `headers` attribute may not be consistently announced by assistive technologies.

## Background

- [Understanding Success Criterion 1.3.1: Information and relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
- [F90: Incorrectly associating table headers and content via the headers and id attributes](https://www.w3.org/WAI/WCAG21/Techniques/failures/F90)

## Test Cases

### Passed

#### Passed Example 1

The `headers` attribute on the cell refers to `th` within the same `table`.

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

The `headers` attribute on the cell refers to `th` within the same `table`. Multiple headers are referenced for a cell with `colspan` of `2`.

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

The `headers` attribute on the cell refers to `td` with a role of `columnheader` within the same `table`.

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

A `table` with multiple `columnheader(s)`, where the `headers` attribute on the cell lists the `id(s)` of `th` within the same `table`.

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

The `headers` attribute on the cell refers to `th` with a role of `rowheader` within the same `table`.

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

The `headers` attribute on the `th` cell refers to other `th` cells within the same `table`.

```html
<table>
	<tr>
		<th id="name" colspan="2">Name</th>
	</tr>
	<tr>
		<th headers="name">Firsname</th>
		<th headers="name">Lastname</th>
	</tr>
</table>
```

### Failed

#### Failed Example 1

Cells with `headers` attribute, refers to non-existing element within the same `table`.

```html
<table>
	<tr>
		<th id="header1">Projects</th>
		<th id="header2">Exams</th>
	</tr>
	<tr>
		<td headers="NOT-EXIST">15%</td>
		<td headers="NOT-EXIST">15%</td>
	</tr>
</table>
```

#### Failed Example 2

One of the cells with `headers` attribute, refers to `th` that does not exist within the same `table`.

```html
<table>
	<tr>
		<th colspan="2" id="header1">Projects</th>
	</tr>
	<tr>
		<th id="e1" headers="header1">1</th>
		<th id="e2" headers="header1">2</th>
	</tr>
	<tr>
		<td colspan="2" headers="header1 e1 NOT-EXIST">15%</td>
	</tr>
</table>
```

#### Failed Example 3

The `headers` attribute on the cell refers to an element outside the same `table`.

```html
<span id="elmOutsideTable">Project Costs</span>

<table>
	<tr>
		<th id="headerOfColumn">Projects</th>
	</tr>
	<tr>
		<td headers="elmOutsideTable">15%</td>
	</tr>
</table>
```

#### Failed Example 4

The `headers` attribute on the cell refers to an element inside the same `table`, but is not a `rowheader` or `columnheader`.

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

There's no usage of the `headers` attribute.

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

A table used for presentation only, that has a `role="presentation"`.

```html
<table role="presentation">
	<tr>
		<td id="header1">Project Status</td>
	</tr>
	<tr>
		<td>15%</td>
	</tr>
</table>
```

#### Inapplicable Example 3

The rule applies only to `table > td` element.

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

#### Inapplicable Example 4

A table that is not included in the accessibility tree.

```html
<table aria-hidden="true">
	<tr>
		<th id="header1" colspan="2">My document title</th>
	</tr>
	<tr>
		<td headers="header1"><p>The excerpt</p></td>
	</tr>
</table>
```

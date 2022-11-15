---
id: d0f69e
name: Table header cell is assigned to a cell
rule_type: atomic
description: |
  This rule checks that each table header is assigned to at least one non-empty cell.
accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Aron Janecki
    - Audrey Maniez
    - Jey Nandakumar
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any HTML element with the [semantic role][] of [rowheader][] or [columnheader][] that is [included in the accessibility tree][] and for which all of the following are true:

- **in a row** the element is [owned by][] an element with the [semantic role][] of [row][]; and
- **table** the element is an [inclusive descendant][] of an element with the [semantic role][] of either [table][] or [grid][] that is [visible][]; and
- **minimum rows** the [table][] or [grid][] element has at least two [inclusive descendant][] elements with the [semantic role][] of [row][].

## Expectation 1

Each target element is [assigned][] to an element with a semantic role of either [cell][] or inheriting from [cell][].

## Expectation 2

For elements with the [semantic role][] of [rowheader][] or [columnheader][] that have either the `colspan` or the `rowspan` attribute with the value greater than 1, there is at least one element with the [semantic role][] of [cell][] or inheriting from [cell][] that is assigned to such an element.

## Expectation 3

When the target element is [assigned][] to at least one element with a [semantic role][] of [gridcell][], both the test target and the [gridcell][] are within the same element with the [semantic role][] of [grid][].

## Assumptions

This rule assumes that table header cells have a relationship conveyed through the presentation with other cells within the same table. It excludes edge cases such as a table definition with only one header cell or a table definition with multiple headers and no other cells that would correspond to them. The rule fails in such scenarios, but [success criterion 1.3.1 Info and Relationships][sc1.3.1] could still be satisfied.

## Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have one of the applicable [semantic roles][semantic role] and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

Some popular combinations of browsers and assistive technologies disregard the `headers` attribute depending on the structure of the `table` element.

## Background

The roles inheriting from `cell` are `columnheader`, `gridcell`, and `rowheader`.

The [HTML specification](https://html.spec.whatwg.org/) contains the [internal algorithm for scanning and assigning header cells](https://html.spec.whatwg.org/multipage/tables.html#internal-algorithm-for-scanning-and-assigning-header-cells) which indicates that the `th` elements with a `scope` [attribute value][] of `auto`, and both a data cell in their row and one in their column are neither row header nor column header. However, some browsers give those `th` elements a table header role and this process is not standardized. One browser may evaluate such `th` elements as [rowheader][] whereas other browsers may evaluate the same `th` elements as [columnheader][]. This is likely not going to convey the relationship conveyed through presentation.

- [Understanding Success Criterion 1.3.1: Information and relationships][sc1.3.1]
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
- [H63: Using the scope attribute to associate header cells and data cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H63)
- [Forming relationships between data cells and header cells][assigned]

## Test Cases

### Passed

#### Passed Example 1

Each `th` element is [assigned][] to a non-empty `td` element.

```html
<table>
	<tr>
		<th>Time</th>
		<th>Date</th>
	</tr>
	<tr>
		<td>05:41</td>
		<td>12/07/2021</td>
	</tr>
</table>
```

#### Passed Example 2

Each of the 2 `span` elements with role of `columnheader` is [assigned][] to a non-empty `span` element with a role of `cell`.

```html
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Passed Example 2</title>
		<style>
			[role='table'] {
				display: table;
			}
			[role='rowgroup'] {
				display: table-row-group;
			}
			[role='row'] {
				display: table-row;
			}
			[role='columnheader'],
			[role='cell'] {
				display: table-cell;
			}
			[role='columnheader'] {
				font-weight: 700;
			}
		</style>
	</head>

	<body>
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
	</body>
</html>
```

#### Passed Example 3

Each of the 2 `th` elements is [assigned][] to a non-empty `td` element because this `td` element spans 2 columns.

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

Each of the 4 `th` elements is [assigned][] to a non-empty `td` element, within the same `table` element having a [semantic role][] of `grid`.

```html
<table role="grid">
	<thead>
		<tr role="row">
			<td></td>
			<th scope="col" role="columnheader">Breakfast</th>
			<th scope="col" role="columnheader">Lunch</th>
			<th scope="col" role="columnheader">Dinner</th>
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

Each of the 4 `th` elements is [assigned][] to a non-empty `td` element because all of the `id` values for the `th` elements are referenced by the value of the `headers` attribute on `td` elements.

```html
<table>
	<tr>
		<th id="projects" rowspan="2">Projects</th>
		<th id="objective" colspan="2">Objective</th>
	</tr>
	<tr>
		<th id="1" headers="objective">1</th>
		<th id="2" headers="objective">2</th>
	</tr>
	<tr>
		<td headers="projects">45%</td>
		<td headers="objective 1">20%</td>
		<td headers="objective 2">25%</td>
	</tr>
</table>
```

#### Passed Example 6

Each of the 5 `th` elements in this table is [assigned][] to a non-empty element with the [semantic role][] of `cell`, or inheriting from `cell`.

```html
<table>
	<caption>
		Opening hours
	</caption>
	<tr>
		<th>Day</th>
		<th>Morning</th>
		<th>Afternoon</th>
	</tr>
	<tr>
		<th>Mon-Fri</th>
		<td>8-12</td>
		<td>14-17</td>
	</tr>
	<tr>
		<th>Sat-Sun</th>
		<td>10-14</td>
		<td>Closed</td>
	</tr>
</table>
```

#### Passed Example 7

Each of the 2 `div` elements is [assigned][] to a non-empty `gridcell` within the same `div` element having a [semantic role][] of `grid`.

```html
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Passed Example 7</title>
		<style>
			[role='grid'] {
				display: table;
			}
			[role='row'] {
				display: table-row;
			}
			[role='columnheader'],
			[role='gridcell'] {
				display: table-cell;
			}
		</style>
	</head>

	<body>
		<div role="grid">
			<div role="row">
				<div role="columnheader">Room</div>
				<div role="columnheader">Occupants</div>
			</div>
			<div role="row">
				<div role="gridcell"><button>1A</button></div>
				<div role="gridcell"><input type="number" aria-label="Number" /></div>
			</div>
			<div role="row">
				<div role="gridcell"><button>2A</button></div>
				<div role="gridcell"><input type="number" aria-label="Number" /></div>
			</div>
		</div>
	</body>
</html>
```

#### Passed Example 8

Each of the 3 `th` elements is [assigned][] to a non-empty `td` within the same `table` element. The index of the `td` element inside the last `tr` element is the same as the index of the `th` element with the value of "H3", that is 2.

```html
<table>
	<tr>
		<th>Project Expectation</th>
		<th>Assignment Expectation</th>
		<th>Exam</th>
	</tr>
	<tr>
		<td rowspan="2" colspan="2">0</td>
	</tr>
	<tr>
		<td>60%</td>
	</tr>
</table>
```

#### Passed Example 9

Each of the two `div` elements with `role="columnheader"` have an assigned element with `role="gridcell"` because the [accessibility tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility) mimics the DOM tree across shadow boundaries.

```html
<div role="table">
	<div role="row" id="shadowHost"></div>
	<div role="row">
		<div role="gridcell"><button>1A</button></div>
		<div role="gridcell"><input type="number" aria-label="Number" /></div>
	</div>
	<div role="row">
		<div role="gridcell"><button>2A</button></div>
		<div role="gridcell"><input type="number" aria-label="Number" /></div>
	</div>
</div>

<script>
	const host = document.querySelector('#shadowHost')
	console.log(host)
	const root = host.attachShadow({ mode: 'open' })

	root.innerHTML =
		'<div role="columnheader" stye="display: table-cell; font-weight: 700;">Room</div> <div role="columnheader" style="display: table-cell; font-weight: 700;">Occupants</div>'
</script>
```

### Failed

#### Failed Example 1

Depending on the browser, the `th` element with `id` equal to "col2" does not have an assigned non-empty cell within the same `table` element because the `headers` attribute removes the cell association from its column.

```html
<table>
	<tr>
		<th id="col1">Country</th>
		<th id="col2">Starting with a Z</th>
	</tr>
	<tr>
		<td>Zambia</td>
		<td headers="col1">Zimbabwe</td>
	</tr>
</table>
```

#### Failed Example 2

This `div` with role of `columnheader` and text equal to "Occupants" does not have an assigned non-empty cell within the same element with the semantic role of `grid`.

```html
<div role="grid">
	<div role="row">
		<div role="columnheader">Room</div>
		<div role="columnheader">Occupants</div>
	</div>
	<div role="row">
		<div role="gridcell"><button>1A</button></div>
	</div>
	<div role="row">
		<div role="gridcell"><button>2A</button></div>
	</div>
</div>
```

#### Failed Example 3

Each of the 2 `div` elements is [assigned][] to a non-empty `gridcell`, but the elements are not within an [accessible object] with a [semantic role][] of `grid`.

```html
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Passed Example 7</title>
		<style>
			[role='table'] {
				display: table;
			}
			[role='row'] {
				display: table-row;
			}
			[role='columnheader'],
			[role='gridcell'] {
				display: table-cell;
			}
		</style>
	</head>

	<body>
		<div role="table">
			<div role="row">
				<div role="columnheader">Room</div>
				<div role="columnheader">Occupants</div>
			</div>
			<div role="row">
				<div role="gridcell"><button>1A</button></div>
				<div role="gridcell"><input type="number" aria-label="Number" /></div>
			</div>
			<div role="row">
				<div role="gridcell"><button>2A</button></div>
				<div role="gridcell"><input type="number" aria-label="Number" /></div>
			</div>
		</div>
	</body>
</html>
```

#### Failed Example 4

Depending on the browser, either the `th` element with the value of "Lunch" or the `th` element with the value of "Dinner" does not have an associated cell.

```html
<table>
	<tr>
		<th>Breakfast</th>
		<th>Lunch</th>
		<th>Dinner</th>
	</tr>
	<tr>
		<td>06:00</td>
		<td aria-hidden="true">12:00</td>
		<td>18:00</td>
	</tr>
</table>
```

#### Failed Example 5

```html
<div role="table">
	<div id="shadowHost2" role="row"></div>
	<div role="row">
		<div role="gridcell" headers="item1 item3"><button>1A</button></div>
		<div role="gridcell"><input type="number" aria-label="Number" /></div>
	</div>
	<div role="row">
		<div role="gridcell" headers="item1 item3"><button>2A</button></div>
		<div role="gridcell"><input type="number" aria-label="Number" /></div>
	</div>
</div>

<script>
	const host2 = document.querySelector('#shadowHost2')
	const root2 = host2.attachShadow({ mode: 'open' })
	root2.innerHTML =
		'<div role="columnheader" style="display: table-cell; font-weight: 700;">Room</div> <div role="columnheader" style="display: table-cell; font-weight: 700;">Occupants</div> <div role="columnheader" style="display: table-cell; font-weight: 700;">Status</div>'
</script>
```

### Inapplicable

#### Inapplicable Example 1

There are no elements with a [semantic role][] of `columnheader` or `rowheader` within the `table` element.

```html
<table>
	<tr>
		<td>12:00</td>
	</tr>
</table>
```

#### Inapplicable Example 2

There are no elements with a [semantic role][] of either `columnheader` or `rowheader`.

```html
<table></table>
```

#### Inapplicable Example 3

This `th` element has an [explicit role][] of `cell` and there are no more elements with a [semantic role][] of either `columnheader` or `rowheader`.

```html
<table>
	<tr>
		<th role="cell">Column A</th>
	</tr>
	<tr>
		<td>Cell A</td>
	</tr>
</table>
```

#### Inapplicable Example 4

This `th` element is neither [visible][] nor it has a [semantic role][] of either `columnheader` or `rowheader` because of the `display: none` property.

```html
<table>
	<tr>
		<th style="display: none;">Organization</th>
	</tr>
	<tr>
		<td>W3C</td>
	</tr>
</table>
```

#### Inapplicable Example 5

This `th` element does not have a [semantic role][] of either `columnheader` or `rowheader` because of `aria-hidden="true"`.

```html
<table>
	<tr>
		<th aria-hidden="true">Organization</th>
	</tr>
	<tr>
		<td>W3C</td>
	</tr>
</table>
```

#### Inapplicable Example 6

This `th` element is [owned by][] an element with a [semantic role][] of [row][], but the `<tr>` itself is not an [inclusive descendant][] of an element with the [semantic role] of [table][].

```html
<div>
	<tr>
		<th>Column A</th>
	</tr>
</div>
```

#### Inapplicable Example 7

The `th` and the `td` elements are not [owned by][] an element with a [semantic role][] of [row][].

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

#### Inapplicable Example 8

Inappropriate [content model](https://html.spec.whatwg.org/multipage/dom.html#content-models) of this `table` element removes the `span` element with `role="columnheader"` as a child of the `tr` element with the `role="row"` attribute. Therefore, there are no more elements with a [semantic role][] of either `columnheader` or `rowheader`.

```html
<table role="grid">
	<tr role="row">
		<span role="columnheader">Time</span>
	</tr>
	<tr role="row">
		<td>12:00</td>
	</tr>
</table>
```

#### Inapplicable Example 9

Each of the two `div` elements with `role="columnheader"` are not [owned by][] an element with a [semantic role][] of [row][] because the explicit parent-child relation in the [accessibility tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility) (set by `aria-owns`) does not cross shadow boundaries.

```html
<div id="shadowHost"></div>

<div role="table">
	<div role="row" aria-owns="item1 item2"></div>
	<div role="row">
		<div role="gridcell"><button>1A</button></div>
		<div role="gridcell"><input type="number" aria-label="Number" /></div>
	</div>
	<div role="row">
		<div role="gridcell"><button>2A</button></div>
		<div role="gridcell"><input type="number" aria-label="Number" /></div>
	</div>
</div>

<script>
	const host = document.querySelector('#shadowHost')
	console.log(host)
	const root = host.attachShadow({ mode: 'open' })

	root.innerHTML =
		'<div id="item1" role="columnheader" stye="display: table-cell; font-weight: 700;">Room</div> <div id="item2" role="columnheader" style="display: table-cell; font-weight: 700;">Occupants</div>'
</script>
```

[accessible object]: https://www.w3.org/TR/core-aam-1.1/#dfn-accessible-object 'Definition of accessible object'
[assigned]: #assigned-cell 'Definition of assigned to a cell'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive descendant]: https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant 'Definition of inclusive descendant'
[attribute value]: #attribute-value 'Definition of attribute value'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
[cell]: https://www.w3.org/TR/wai-aria-1.1/#cell 'ARIA cell role'
[gridcell]: https://www.w3.org/TR/wai-aria-1.2/#gridcell 'ARIA gridcell role'
[table]: https://www.w3.org/TR/wai-aria-1.1/#table 'ARIA table role'
[grid]: https://www.w3.org/TR/wai-aria-1.1/#grid 'ARIA grid role'
[columnheader]: https://www.w3.org/TR/wai-aria-1.1/#columnheader 'ARIA columnheader role'
[rowheader]: https://www.w3.org/TR/wai-aria-1.1/#rowheader 'ARIA rowheader role'
[row]: https://www.w3.org/TR/wai-aria-1.1/#row 'ARIA row role'
[explicit role]: #explicit-role 'Definition of Explicit Role'
[owned by]: #owned-by 'Definition of owned by'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[sc1.3.1]: https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html 'Understanding Success Criterion 1.3.1: Info and Relationships'

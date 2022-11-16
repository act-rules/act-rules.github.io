---
id: d0f69e
name: Non-empty table header cell is assigned to a cell
rule_type: atomic
description: |
  This rule checks that each non-empty table header is assigned to at least one cell.
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

This rule applies to any non-empty `th` element that is [included in the accessibility tree][], has a [semantic role][] of [rowheader][] or [columnheader][], and for which all of the following are true:

- **in a row** the element is a child of a `tr` element; and
- **table** the `tr` element is an [inclusive descendant][] of a `table` element; and
- **minimum rows** the `table` element has at least two `tr` elements as its [inclusive descendant][] elements; and
- **non-empty** the `table` element has at least one `th` element that is assigned to a non-empty `td` element, and
- **visible** the `table` element is [visible][]; and
- **no explicit role** the `th`, `tr`, `table`, and another elements in between them do not have an [explicit semantic role][], and

## Expectation

Each target element is [assigned][] to at least one `td` or `th` element.

## Assumptions

This rule assumes that table header cells have a relationship conveyed through the presentation with other cells within the same table. It excludes edge cases such as a table definition with only one header cell or a table definition with multiple headers and no other cells that would correspond to them. The rule fails in such scenarios, but [success criterion 1.3.1 Info and Relationships][sc1.3.1] could still be satisfied.

## Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have one of the applicable [semantic roles][semantic role] and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

Some popular combinations of browsers and assistive technologies disregard the `headers` attribute depending on the structure of the `table` element.

## Background

The [HTML specification](https://html.spec.whatwg.org/) contains the [internal algorithm for scanning and assigning header cells](https://html.spec.whatwg.org/multipage/tables.html#internal-algorithm-for-scanning-and-assigning-header-cells) which indicates that the `th` elements with a `scope` [attribute value][] of `auto`, and both a data cell in their row and one in their column are neither row header nor column header. However, some browsers give those `th` elements a table header role and this process is not standardized. One browser may evaluate such `th` elements as [rowheader][] whereas other browsers may evaluate the same `th` elements as [columnheader][]. This is likely not going to convey the relationship conveyed through presentation.

This rule does not apply to tables and grids built using [WAI-ARIA 1.1][] [explicit semantic roles][explicit semantic role] as it is not clear how the process of assigning table headers works for such elements.

- [Understanding Success Criterion 1.3.1: Information and relationships][sc1.3.1]
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
- [H63: Using the scope attribute to associate header cells and data cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H63)
- [Forming relationships between data cells and header cells][assigned]

## Test Cases

### Passed

#### Passed Example 1

This `th` element is [assigned][] to at least one `td` element.

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

Each of the 2 `th` elements is assigned to the `td` element because this `td` element spans 2 columns.

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

#### Passed Example 3

Each of the 4 non-empty `th` elements is assigned to a `td` element, within the same `table` element.

```html
<table>
	<thead>
		<tr>
			<th></th>
			<th scope="col">Breakfast</th>
			<th scope="col">Lunch</th>
			<th scope="col">Dinner</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">Day 1</th>
			<td>8:00</td>
			<td>13:00</td>
			<td>18:00</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 4

Each of the 4 `th` elements is assigned to at least one `td` element because all of the `id` values for the `th` elements are referenced by the value of the `headers` attribute on `td` elements.

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

#### Passed Example 5

Each of the 5 `th` elements is assigned to a `td` or a `th` element.

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

### Failed

#### Failed Example 1

The `th` element with text "Value" is not assigned to a `td` or a `th` element.

```html
<table>
	<thead>
		<tr>
			<th>Rate</th>
			<th>Value</th>
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

This `th` element with `id` equal to "col2" is not assigned to a `td` or a `th` element because the `headers` attribute removes the cell association from its column.

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

### Inapplicable

#### Inapplicable Example 1

There are no `th` elements with a [semantic role][] of [rowheader][] or [columnheader][] within the `table` element.

```html
<table>
	<tr>
		<td>12:00</td>
	</tr>
</table>
```

#### Inapplicable Example 2

There are no `th` elements within the `table` element.

```html
<table></table>
```

#### Inapplicable Example 3

This `th` element has an [explicit semantic role][] of `columnheader`.

```html
<table>
	<tr>
		<th role="columnheader">Column A</th>
	</tr>
	<tr>
		<td>Cell A</td>
	</tr>
</table>
```

#### Inapplicable Example 4

This `tbody` element has an [explicit semantic role][] of `rowgroup`.

```html
<table>
	<thead role="rowgroup">
		<tr>
			<th>Column A</th>
		</tr>
	</thead>
	<tr>
		<td>Cell A</td>
	</tr>
</table>
```

#### Inapplicable Example 5

This `th` element is not [included in the accessibility tree][] because of the `style="display: none;"` attribute and there are no more `th` elements within the `table` element.

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

#### Inapplicable Example 6

This `th` element is not [included in the accessibility tree][] because of the `aria-hidden="true"` attribute and there are no more `th` elements within the `table` element.

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

#### Inapplicable Example 7

This `th` element is a child of a `tr` element but the `tr` element is not an [inclusive descendant][] of a `table` element.

```html
<div>
	<tr>
		<th>Column A</th>
	</tr>
</div>
```

#### Inapplicable Example 8

This `th` element does not have a [semantic role][] of a `columnheader` through the use of `role="presentation"` on the `table` element.

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

#### Inapplicable Example 9

This `table` element has only one `tr` element as its [inclusive descendant][].

```html
<table>
	<tr>
		<th>Time</th>
	</tr>
</table>
```

#### Inapplicable Example 10

This `table` element is not [visible][].

```html
<table style="display: none;">
	<tr>
		<th>Time</th>
	</tr>
	<tr>
		<td>12:00</td>
	</tr>
</table>
```

#### Inapplicable Example 11

This `table` element does not have at least one `th` element that is assigned to a non-empty `td` element.

```html
<table>
	<tr>
		<th>Country</th>
		<th>Capital</th>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>
```

#### Inapplicable Example 12

There are no non-empty `th` element in the `table` element.

```html
<table>
	<tr>
		<th></th>
		<th></th>
	</tr>
	<tr>
		<td>United Kingdom</td>
		<td>London</td>
	</tr>
</table>
```

[attribute value]: #attribute-value 'Definition of attribute value'
[explicit semantic role]: #explicit-role 'Definition of explicit semantic role'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive descendant]: https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant 'Definition of inclusive descendant'
[assigned]: https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics 'Forming relationships between data cells and header cells'
[columnheader]: https://www.w3.org/TR/wai-aria-1.1/#columnheader 'ARIA columnheader role'
[rowheader]: https://www.w3.org/TR/wai-aria-1.1/#rowheader 'ARIA rowheader role'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[sc1.3.1]: https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html 'Understanding Success Criterion 1.3.1: Info and Relationships'
[wai-aria 1.1]: https://www.w3.org/TR/wai-aria-1.1/ 'WAI-ARIA 1.1'

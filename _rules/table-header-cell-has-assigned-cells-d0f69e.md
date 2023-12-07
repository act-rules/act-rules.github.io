---
id: d0f69e
name: Table header cell has assigned cells
rule_type: atomic
description: |
  This rule checks that each table header has assigned cells in a table element.
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
    - Audrey Maniez
    - Helen Burge
    - Jey Nandakumar
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML element][] with a [semantic][semantic role] [rowheader][] or [columnheader][] for which all of the following is true:

- the element is [visible][]; and
- the element is [included in the accessibility tree][]; and
- the element has at least one ancestor in the [flat tree][] that is a [semantic][semantic role] [table][] or [grid][]; and
- the element's closest ancestor in the [flat tree][] that is a [semantic][semantic role] [table][] or [grid][] is [included in the accessibility tree][].

## Expectation

Each target element is [assigned][] to at least one element with an [inheriting semantic][] [cell][].

## Assumptions

This rule assumes that table header cells have a relationship conveyed through presentation with other cells within the same table. This excludes edge cases such as a table definition where there is only one header cell, or a table definition where there are multiple headers and no other cells. In such scenarios the rule fails, but [success criterion 1.3.1 Info and Relationships][sc1.3.1] could still be satisfied.

## Accessibility Support

- Table markup and header cell association is not well supported by some popular assistive technologies. Passing this rule can still cause issues for users of those assistive technologies.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have one of the applicable [semantic roles][semantic role] and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

The roles inheriting from `cell` are `columnheader`, `gridcell`, and `rowheader`.

### Bibliography

- [Understanding Success Criterion 1.3.1: Information and relationships][sc1.3.1]
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG22/Techniques/html/H43)
- [Forming relationships between data cells and header cells][assigned]

## Test Cases

### Passed

#### Passed Example 1

This `th` element has an assigned `td` element.

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

Each of the 2 `span` elements with role of `columnheader` has assigned `span` elements with a role of `cell`.

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

Each of the 2 `th` elements has an assigned `td` element because this `td` element spans 2 columns.

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

Each of the 4 `th` elements has an assigned `td` element, within the same `table` element having a [semantic role][] of `grid`.

```html
<table role="grid">
	<thead>
		<tr>
			<td></td>
			<th scope="col" role="columnheader">Breakfast</th>
			<th scope="col" role="columnheader">Lunch</th>
			<th scope="col" role="columnheader">Dinner</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row" role="rowheader">Day 1</th>
			<td>8:00</td>
			<td>13:00</td>
			<td>18:00</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 5

Each of the 2 `th` elements has an assigned `td` element because the `headers` attribute assigns the `th` with `id` equal to "col2" to the `td` element.

```html
<table>
	<tr>
		<th id="col1">Cities</th>
		<th id="col2">Count</th>
	</tr>
	<tr>
		<td>Paris</td>
	</tr>
	<tr>
		<td headers="col2">1</td>
	</tr>
</table>
```

#### Passed Example 6

Each of the 5 `th` elements in this table has assigned cells, whether data or header.

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

The `th` element with text "Value" does not have an assigned cell within the same `table` element.

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

This `th` element with `id` equal to "col2" does not have an assigned cell within the same `table` element because the `headers` attribute removes the cell association from its column.

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

#### Failed Example 3

This `div` with role of `columnheader` and text equal to "Occupant" does not have an assigned cell within the same `table` element.

```html
<div role="grid">
	<div role="row">
		<div role="columnheader">Room</div>
		<div role="columnheader">Occupant</div>
	</div>
	<div role="row">
		<div role="gridcell">1A</div>
	</div>
	<div role="row">
		<div role="gridcell">2A</div>
	</div>
</div>
```

### Inapplicable

#### Inapplicable Example 1

There are no elements with a [semantic role][] of `header` within the `table` element.

```html
<table>
	<tr>
		<td>12:00</td>
	</tr>
</table>
```

#### Inapplicable Example 2

There are no elements with a [semantic role][] of `header` within the `table` element.

```html
<table></table>
```

#### Inapplicable Example 3

This `th` element has an [explicit role][] of `cell` and there are no more elements with a [semantic role][] of `header` within the `table` element.

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

This `th` element is neither [visible][] nor [included in the accessibility tree][] and there are no more elements with a [semantic role][] of `header` within the `table` element.

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

This `th` element is not [included in the accessibility tree][] and there are no more elements with a [semantic role][] of `header` within the `table` element.

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

This `th` element is not a descendant in the [flat tree][] of a [semantic][semantic role] `table` or `grid`.

```html
<div>
	<tr>
		<th>Column A</th>
	</tr>
</div>
```

#### Inapplicable Example 7

This `th` element is part of a table which is not [included in the accessibility tree][].

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

[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
[inheriting semantic]: #inheriting-semantic 'Definition of Inheriting Semantic Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[assigned]: https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics 'Forming relationships between data cells and header cells'
[cell]: https://www.w3.org/TR/wai-aria-1.2/#cell 'ARIA cell role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[table]: https://www.w3.org/TR/wai-aria-1.2/#table 'ARIA table role'
[grid]: https://www.w3.org/TR/wai-aria-1.2/#grid 'ARIA grid role'
[columnheader]: https://www.w3.org/TR/wai-aria-1.2/#columnheader 'ARIA columnheader role'
[rowheader]: https://www.w3.org/TR/wai-aria-1.2/#rowheader 'ARIA rowheader role'
[explicit role]: #explicit-role 'Definition of Explicit Role'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[sc1.3.1]: https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html 'Understanding Success Criterion 1.3.1: Info and Relationships'
[html element]: #namespaced-element

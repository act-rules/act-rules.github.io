---
id: d0f69e
name: All table header cells has corresponding data cells
rule_type: atomic
description: |
  This rule checks that each table header has corresponding data cells in a table element.
accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
input_aspects:
- DOM Tree
authors:
- Jey Nandakumar
- Audrey Maniez
---

## Applicability

This rule applies to `th` elements within a `table`, that is [visible](#visible) and [included in the accessibility tree](#included-in-the-accessibility-tree).

## Expectation

Each target element has corresponding data cells of the same `table`

## Assumptions

- Tables are [well-formed, according to the HTML5.1 specification](https://www.w3.org/TR/html51/tabular-data.html#forming-a-table).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 1.3.1: Information and relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
- [Forming relationships between data cells and header cells](https://www.w3.org/TR/html/tabular-data.html#forming-relationships-between-data-cells-and-header-cells)

## Test Cases

### Passed

#### Passed Example 1

`th` has corresponding `cells` within the same `table`.

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

`th` has corresponding `cells` within the same `table`. Here the cells span multiple columns.

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

The `columnheader` has corresponding `cells` within the same `table`, by usage of `headers` attribute.

```html
<table>
  <tr> 
    <td headers="header1">
      Projects
    </td>
    <th id="header1">
      Projects
    </th> 
  </tr>
</table>
```

#### Passed Example 4

The `columnheader` has corresponding `cells` within the same `table`, by usage of `aria-labelledby` attribute.

```html
<table>
	<tr>
		<td aria-labelledby="hd2">Time</td>
		<th id="hd2">05:44</th>
	</tr>
</table>
```

#### Passed example 5

Each `th` element has corresponding `cells` within the same `table`, by usage of `scope` attribute.

```html
<table>
  <caption>Hogwarts Houses stars</caption>
  <tr>
      <th scope="col">Name</th>
      <th scope="col">House</th>
  </tr>
  <tr>
      <th scope="row">Harry Potter</th>
      <td>Gryffindor</td>
  </tr>
  <tr>
      <th scope="row">Cedric Diggory</th>
      <td>Hufflepuff</td>
  </tr>
  <tr>
      <th scope="row">Cho Chang</th>
      <td>Ravenclaw</td>
  </tr>
    <tr>
      <th scope="row">Severus Snape</th>
      <td>Slytherin</td>
  </tr>
</table>
```

### Failed

#### Failed Example 1

There are no corresponding `cells` for each `th` element within the `table`.

```html
<table>
	<tr>
		<th scope="col">Name</th>
		<th scope="col">Age</th>
		<th scope="col">Birthday</th>
	</tr>
	<tr>
		<th scope="row">Jackie</th>
		<td>5</td>
		<td></td>
	</tr>
	<tr>
		<th scope="row">Beth</th>
		<td>8</td>
	</tr>
</table>
```

#### Failed Example 2

`th` has corresponding empty `cell`.

```html
<table>
  <tr> 
    <th>Time</th> 
  </tr>
  <tr> 
    <td></td> 
  </tr>
</table>
```

#### Failed Example 3

No data `cells` exist within the `table`.

```html
<table>
	<tr>
		<td>axe</td>
		<td role="columnheader">AXE</td>
	</tr>
</table>

```

### Inapplicable

#### Inapplicable Example 1

The rule only applies only to `table > th` element. The `table` has no `th` elements.

```html
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

#### Inapplicable Example 2

The rule only applies only to `table` & not layout table.

```html
<div role="table">
 <div role="row">
  <div class="columnheader">Projects</div>
  <div class="columnheader">Exams</div>
 </div>
 <div role="row">
  <div role="cell">15%</div>
  <div role="cell">15%</div>
 </div>
</div>
```

#### Inapplicable Example 3

The rule only applies to `table` element that is included in the accessibility tree. The `table` is marked as `role=presentation`.

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

#### Inapplicable Example 4

The rule only applies to `table` element that is included in the accessibility tree.

```html
<table aria-hidden='true'>
  <tr>  
    <th>Time</th> 
  </tr>
  <tr> 
    <td>24:00</td> 
  </tr>
</table>
```
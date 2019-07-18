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

This rule applies to `th` elements within a `table`, where the `table` is [visible](#visible) and [included in the accessibility tree](#included-in-the-accessibility-tree).

## Expectation

Each target element is either the [row header](https://www.w3.org/TR/html-aria/#index-aria-rowheader) or the [column header](https://www.w3.org/TR/html-aria/#index-aria-columnheader) for data [cells](https://www.w3.org/TR/html50/tabular-data.html#concept-cell) within the same [table](https://www.w3.org/TR/html50/tabular-data.html#concept-table).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 1.3.1: Information and relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
- [Forming relationships between data cells and header cells](https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics)

## Test Cases

### Passed

#### Passed Example 1

Each `th` element has corresponding cells within the same `table`.

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

Each `th` element has corresponding cells within the same `table`. Here the cells span multiple columns.

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

The `th` element has corresponding cells within the same `table`, by usage of `headers` attribute.

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

The `th` element has corresponding cells within the same `table`, by usage of `aria-labelledby` attribute.

```html
<table>
	<tr>
    <th id="hd2">Time</th>
    <td aria-labelledby="hd2">05:44</td>
	</tr>
</table>
```

#### Passed example 5

Each `th` element has corresponding cells within the same `table`, by usage of `scope` attribute.

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
</table>
```

#### Passed example 6

Each `th` element has corresponding cells within the same `table`.

```html
<table>
	<caption>Hogwarts Houses stars</caption>
	<tr>
			<th>Name</th>
			<th>House</th>
	</tr>
	<tr>
			<th>Cho Chang</th>
			<td>Ravenclaw</td>
	</tr>
	<tr>
			<th>Severus Snape</th>
			<td>Slytherin</td>
	</tr>
</table>
```

### Failed

#### Failed Example 1

`th` elements within the `table` do not have corresponding cells.

```html
<table>
	<tr>
		<th>Header 1</th>
	</tr>
	<tr>
		<th>Header 2</th>
	</tr>
</table>
```

### Inapplicable

#### Inapplicable Example 1

The rule only applies to `table > th` element. The `table` has no `th` elements.

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

The rule only applies to the `table` element, not to other elements with a role of `table`.

```html
<div role="table">
 <div role="row">
  <div role="columnheader">Projects</div>
  <div role="columnheader">Exams</div>
 </div>
 <div role="row">
  <div role="cell">15%</div>
  <div role="cell">15%</div>
 </div>
</div>
```

#### Inapplicable Example 3

The rule only applies to `table` element that is [included in the accessibility tree](#included-in-the-accessibility-tree). In this case the `table` is marked as `role=presentation`.

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

The rule only applies to `table` element that is both [visible](#visible) and [included in the accessibility tree](#included-in-the-accessibility-tree).

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
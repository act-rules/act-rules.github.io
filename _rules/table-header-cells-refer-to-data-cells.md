---
name: All table header cells refer to data cells

test_type: atomic

description: |
  This rule checks that each table header in a data table refers to data cells.

test_aspects:
- DOM Tree

authors:
- Jey Nandakumar
- Audrey Maniez
---

## Test Procedure

### Applicability

This rule applies to `th` elements in a `table`, that has [non-empty](#non-empty) `td` elements, which are [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree).

### Expectation
- Each target element with the `headers` attribute refers to other `cells` of the same `table`.

## Assumptions

- Tables are [well-formed, according to the HTML5.1 specification.](https://www.w3.org/TR/html51/tabular-data.html#forming-a-table).
- Tables using headers-id associations are intended as data rather than [layout table](#layout-table).

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 1.3.1: Information and relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)

## Test Cases

### Passed

#### Passed example 1

The `columnheader` refers to `cells` within the same `table`.

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

#### Passed example 2

The `columnheader` refers to `cells` within the same `table`.

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

#### Passed example 3

 The `th` element defines a cell as header of a group of table cells by usage of `scope` attribute.

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

#### Passed example 4

Header(s) for table cells are `auto` scoped.

```html
<table>
  <tr>
    <th id="header1">Projects</th>
    <th id="header2">Exams</th>
  </tr>
  <tr>
    <td colspan="2">15%</td>
  </tr>
</table>
```


### Failed

#### Failed example 1

The `columnheader` do not refer to `cells` within the `table`.

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
      <td colspan="2" headers="header3 header2">15%</td>
    </tr>
  </tbody>
</table>
```

#### Failed example 2

The `headers` attribute is missing.

```html
<table>
  <tr> 
    <td aria-labelledby="header1">
      Description
    </td>
    <th id="header1">
      Description
    </th> 
  </tr>
</table>
```

### Inapplicable

#### Inapplicable example 1

The rule only applies only to `table` element & not layout table.

```html
<div role="table">
 <div role="row">
  <div class="columnheader" id="header1">Projects</div>
  <div class="columnheader" id="header2">Exams</div>
 </div>
 <div role="row">
  <div role="cell" headers="header2">15%</div>
  <div role="cell" headers="header1">15%</div>
 </div>
</div>
```

#### Inapplicable example 2

The rule only applies to `table` element that is included in the accessibility tree, `table` is marked as `role=presentation`.

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

#### Inapplicable example 3

The rule only applies to [non-empty](#non-empty) `td` element.

```html
<table>
  <tr>  
    <th id='header1'>Time</th> 
  </tr>
  <tr> 
    <td headers='header1'></td> 
  </tr>
</table>
```


#### Inapplicable example 4

The rule only applies to `td` element that are included in the accessibility tree.

```html
<table>
  <tr>  
    <th id='header1'>Time</th> 
  </tr>
  <tr> 
    <td headers='header1' aria-hidden='true'>24:00</td> 
  </tr>
</table>
```

#### Inapplicable example 5

The rule only applies to `table` element that is `visible`.

```html
<table>
  <tr> 
    <th>Time</th> 
  </tr>
  <tr> 
    <td style="display: none">24:00</td> 
  </tr>
</table>
```

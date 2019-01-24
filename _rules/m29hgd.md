---
name: Data cells has a `headers` attribute
test_type: atomic

description: |
  This rule checks that each data table cell has a `headers` attribute that references appropriates header cells `id`s.

test_aspects:
- DOM Tree

authors:
- Audrey Maniez
- Jey Nandakumar
---

## Test Procedure

### Applicability

This rule applies to any element with the [semantic role](#semantic-role) of `cell` that is either [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree) and part of a data `table`.

### Expectation

Each target element has a `headers` attribute that lists the `id` of all `headers` associated with that `cell`.

## Assumptions

*There are currently no assumptions*

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 1.3.1: Information and relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
- [F90: Incorrectly associating table headers and content via the headers and id attributes](https://www.w3.org/WAI/WCAG21/Techniques/failures/F90)

## Test Cases

### Passed

#### Passed example 1

The data cell is associated with two columns. The `headers` attribute on the data `cell` lists the `id` of all associated `headers`.

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

Each data `cells` are associated with `two` columns. The `headers` attribute on each data cell lists the `id` of all associated `headers`.

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

#### Passed example 3

Each data `cells` are associated with only `one` column. The `headers` attribute on each data cell lists the `id` of all associated `headers`.

```html
<div role="table">
  <div role="row">
    <div role="columnheader" id="header1">Projects</div>
    <div role="columnheader" id="header2">Exams</div>
  </div>
  <div role="row">
    <div role="cell" headers="header1">15%</div>
    <div role="cell" headers="header2">15%</div>
  </div>
</div>
```

### Failed

#### Failed example 1

The data `cell` is associated with two headers but the `headers` attribute is missing. 

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

#### Failed example 2

The `headers` attribute on the data `cell` should lists both headers `id` (`headers1`and `header2`) but only lists one (`header1`).

```html
<table>
  <tr>
    <th id="header1">Projects</th>
    <th id="header2">Exams</th>
  </tr>
  <tr>
    <td colspan="2" headers="header1">15%</td>
  </tr>
</table>
```

#### Failed example 3

Each data cells are associated with only one column. The `headers` attribute of each data cells lists a wrong header `id`.

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

### Inapplicable

#### Inapplicable example 1

The relationship between data cell and headers is determined using the `scope` attribute and each data cell is associated with only one header, there's no need to use the `headers` attribute.

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

#### Inapplicable example 2

A table used for presentation only, that has a `role="presentation"`. 

```html
<table role="presentation">
  <tr>
    <th colspan="2">My document title</th>
  </tr>
  <tr>
    <td><p>The excerpt</p></td>
    <td><p>The content</p></td>
  </tr>
</table>
```
---
name: `headers` attribute only refers to `cells` in the same `table`

test_type: atomic

description: |
  This rule checks that the `headers` attribute must only refer to `cells` in the same `table`.

test_aspects:
- DOM Tree

authors:
- Audrey Maniez
- Jey Nandakumar
---

## Test Procedure

### Applicability

This rule applies to any element with the [semantic role](#semantic-role) of `cell`, `columnheader` or `rowheader` within the `table` element, that is either [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree).

### Expectation

Each target element with the `headers` attribute refers to other `cells` of the same `table`.

## Assumptions

*There are currently no assumptions*

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 1.3.1: Information and relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)

## Test Cases

### Passed

#### Passed example 1

The `headers` attribute on the  `cell` lists the `id(s)` within the same `table`.

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

A `table` with multiple `columnheader(s)`, where the `headers` attribute on the  `cell` lists the `id(s)` within the same `table`.

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

### Failed

#### Failed example 1

The `cell` that the `headers` attribute refers to, does not exist within the same `table`. (Note: Simple 1-to-1 column to cell mapping)

```html
<table>
  <tr>
    <th id="header1">Projects</th>
    <th id="header2">Exams</th>
  </tr>
  <tr>
    <td headers="header3">15%</td>
    <td headers="header3">15%</td>
  </tr>
</table>
```

#### Failed example 2

One of the `id(s)` referenced in the `headers` attribute does not exist within the same `table`.

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

#### Failed example 3

The `cell` that the `headers` attribute refers to, does not exist within the same `table` (Note: Complex table with cells having `colspan`).

```html
<table>
  <tr>
    <th id="header1">Projects</th>
    <th id="header2">Exams</th>
  </tr>
  <tr>
    <td colspan="2" headers="header3">15%</td>
  </tr>
</table>
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

#### Inapplicable example 3

The rule only applies only to `table` element.

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

#### Inapplicable example 4

No `headers` attribute is defined for table `cell`.

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
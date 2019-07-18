---
id: a25f45
name: headers attribute only refers to cells in the same table element.
rule_type: atomic
description: |
  This rule checks that the headers attribute must only refer to cells in the same table element.
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

This rule applies to `td` elements with a `headers` attribute, that are [included in the accessibility tree](#included-in-the-accessibility-tree).

## Expectation

The `header` attribute of each target element is [a set of space separated IDs](https://www.w3.org/TR/html50/infrastructure.html#set-of-space-separated-tokens), each of which is an ID of an element that:
1. has a [semantic role](#semantic-role) of `columnheader` or `rowheader`, and
2. is a `cell` of the same [`table`](https://www.w3.org/TR/html50/tabular-data.html#concept-table) as the target element

## Assumptions

- This test assumes that the `headers` attribute is only used to identify table headers. If other information is included in the `headers` attribute, the rule may fail on issues that are not accessibility concerns. For example, if `headers` is used to include information for script, this rule may not be accurate.
- Tables using `headers` id associations are intended as data rather than [layout table](#layout-table).

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
      <td role='columnheader' id="header1">Projects</td>
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

### Failed

#### Failed Example 1

Cells with `headers` attribute, refers to non-existing `th` within the same `table`.

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
    <th id="header1">Project Status</th>
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
    <th colspan="2">My document title</th>
  </tr>
  <tr>
    <td><p>The excerpt</p></td>
    <td><p>The content</p></td>
  </tr>
</table>
```
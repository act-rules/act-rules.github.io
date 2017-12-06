---
rule_id: SC1-3-1-tables-headers-id
name: Tables headers-id associations 
test_mode: Semi-automatic
environment:  DOM Structure

success_criterion:
- 1.3.1 # Info and relationships (level A)

authors:
- Ken Petri
---

## Description

This rule checks that data table `headers` attributes have values that reference `th` or `td` elements in the same table and that these headers-id associations reference correct targets in the correct order.

## Background

- [F90: Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes](https://www.w3.org/TR/WCAG20-TECHS/F90.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/TR/WCAG20-TECHS/H43.html)
- [F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables](https://www.w3.org/TR/WCAG20-TECHS/F46.html)

## Assumptions

- Tables are [well-formed, according to the HTML5.1 specification.](https://www.w3.org/TR/html51/tabular-data.html#forming-a-table)
- Tables using headers-id associations are intended as data rather than layout tables.

## Test procedure

### Selector

Select all elements that match `th[headers]` or `td[headers]`.

### Step 1

For each value in each cell `headers` attribute,

check that the value references an `id` attribute value of a `th` within the currently selected table,

if yes, continue with [step 2](#step-2)

else, return [step1-fail1](#step1-fail1).

### Step 2

For each value in each cell `headers` attribute,

find the `th` referenced,

give the user the following question:

| Property             | Value
|----------------------|---------
| Presented item       | Highlight a table cell and the related "header" cell.
| Question             | Is the contents of the data cell defined by or appropriately related to the contents of the "header" cell?
| Requires context     | Yes.
| Requires interaction | Yes.

if yes, continue with [step 3](#step-3)

else, return [step2-fail1](#step2-fail1).

### Step 3

For each value in each cell `headers` attribute,

find the `th` referenced,

give the user the following question:

| Property             | Value
|----------------------|---------
| Presented item       | Highlight a table cell and the related header cell. Display the sequence order of the header cell as a number value, as specified by the order in which the header's `id` appears within the cell's `headers` attribute.
| Question             | Is the number of the related header consistent with the desired reading sequence?
| Requires context     | Yes.
| Requires interaction | Yes.

if yes, return [step3-pass1](#step3-pass1)

else, return [step3-fail1](#step3-fail1).

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:SC1-3-1-tables-headers-id
| subject  | *the selected element*
| mode     | semi-automatic
| result   | One TestResult from below

### step1-fail1

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Table cell's `headers` attribute contains an `id` that does not correspond to a `th` in the same table.

### step1-pass1

| Property | Value
|----------|----------
| type     | TestResult
| outcome  | Passed

### step2-fail1

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Table cell references an incorrect `th` via the `headers` attribute.

### step2-pass1

| Property | Value
|----------|----------
| type     | TestResult
| outcome  | Passed

### step3-fail1

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Table cell references a `th` via the `headers` in an incorrect order.

### step3-pass1

| Property | Value
|----------|----------
| type     | TestResult
| outcome  | Passed

## Implementation Tests

Implementation tests are available at: <placeholder>

## Change log

### Version 0.4
- Automatic and semi-automatic rules merged back into single, semi-auto rule.
- Selector revised, simplified.
- Description language simplified.
- Added assumption that tables using headers-id associations are intended as data tables.

### Version 0.3
- Rule now conforms to HTML 5.1 spec: `headers` can only reference a `th`.

### Version 0.2
- Refactored into an automatic rule (this one) and a semi-automatic rule, [tables headers id correct](auto-wcag:SC1-3-1-tables-headers-id-correct).
- Selector corrected.
- Ensures selector tests only a single table at a time (for nested tables).
- Conforms to rule template.

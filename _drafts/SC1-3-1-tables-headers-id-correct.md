---
rule_id: SC1-3-1-tables-headers-id-correct
name: Tables headers-id associations correct
test_mode: semi-automatic
environment:  DOM Structure

success_criterion:
- 1.3.1 # Info and relationships (level A)

authors:
- Ken Petri
---

## Description

This rule checks that data table headers-id associations reference correct targets in the correct order.

## Background

- [F90: Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes](https://www.w3.org/TR/WCAG20-TECHS/F90.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/TR/WCAG20-TECHS/H43.html)
- [F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables](https://www.w3.org/TR/WCAG20-TECHS/F46.html)

## Assumptions

- Tables are [well-formed, according to the HTML5.1 specification.](https://www.w3.org/TR/html51/tabular-data.html#forming-a-table).
- Tables pass [tables headers id valid](auto-wcag:SC1-3-1-tables-headers-id-valid).

## Test procedure

### Selector

Loop outward from most deeply nested table.

For each un-marked table, select all elements that match the following CSS selector:

    table:not([role=presentation]) th[headers],
    table:not([role=presentation]) td[headers],
    table:not([role=none]) th[headers],
    table:not([role=none]) td[headers]

For each selected item, go through the following steps:

### Step 1

Mark table complete.

For each value in each cell `headers` attribute,

find the 'th' referenced,

give the user the following question:

| Property             | Value
|----------------------|---------
| Presented item       | Highlight a table cell and the related "header" cell.
| Question             | Is the cell appropriately categorized by or semantically related with the associated "header" cell?
| Requires context     | Yes.
| Requires interaction | Yes.

if yes, continue with [step 2](#step-2)

else, return [step1-fail1](#step1-fail1).

### Step 2

For each value in each cell `headers` attribute,

find the 'th' referenced,

give the user the following question:

| Property             | Value
|----------------------|---------
| Presented item       | Highlight a table cell and the related header cell. Display the sequence order of the header cell as a number value, as specified by the order in which the header's `id` appears within the cell's `headers` attribute.
| Question             | Is the number of the related header consistent with the desired reading sequence?
| Requires context     | Yes.
| Requires interaction | Yes.

if yes, return [step2-pass1](#step2-pass1)

else, return [step2-fail1](#step2-fail1).

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:SC1-3-1-tables-headers-id-correct
| subject  | *the selected element*
| mode     | semi-automatic
| result   | One TestResult from below

### step1-fail1

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Table cell references an incorrect `th` via the `headers` attribute.


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
| description | Table cell references a `th` via the `headers` in an incorrect order.

### step2-pass1

| Property | Value
|----------|----------
| type     | TestResult
| outcome  | Passed

## Implementation Tests

Implementation tests are available at: <placeholder>

## Change log

### Version 0.2
- Removed explanations from Requires context and Requires interaction rows in Step 1 and Step 2 questions.
- Rule now conforms to HTML 5.1 spec: `headers` can only reference a `th`.
- Added recommended dependency on [tables headers id valid](auto-wcag:SC1-3-1-tables-headers-id-valid).

### Version 0.1
- Initial draft of rule.

---
rule_id: SC1-3-1-tables-headers-id-valid
name: Tables headers-id associations valid
test_mode: automatic
environment:  DOM Structure

success_criterion:
- 1.3.1 # Info and relationships (level A)

authors:
- Ken Petri
---

## Description

This rule checks that data table `headers` attributes have values that reference `td` or `th` elements in the same table.

## Background

- [F90: Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes](https://www.w3.org/TR/WCAG20-TECHS/F90.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/TR/WCAG20-TECHS/H43.html)
- [F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables](https://www.w3.org/TR/WCAG20-TECHS/F46.html)

## Assumptions

- Tables are [well-formed, according to the HTML5.1 specification.](https://www.w3.org/TR/html51/tabular-data.html#forming-a-table).

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

Mark table completed.

For each value in each cell `headers` attribute,

check that the value references an `id` attribute value of a `th` within the currently selected table,

if yes, return [step1-pass1](#step1-pass1)

else, return [step1-fail1](#step1-fail1).

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:SC1-3-1-tables-headers-id-valid
| subject  | *the selected element*
| mode     | automatic
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

## Implementation Tests

Implementation tests are available at: <placeholder>

## Change log

### Version 0.3
- Rule now conforms to HTML 5.1 spec: `headers` can only reference a `th`.

### Version 0.2
- Refactored into an automatic rule (this one) and a semi-automatic rule, [tables headers id correct](auto-wcag:SC1-3-1-tables-headers-id-correct).
- Selector corrected.
- Ensures selector tests only a single table at a time (for nested tables).
- Conforms to rule template.



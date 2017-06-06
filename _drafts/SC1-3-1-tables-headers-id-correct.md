---
rule_id: SC1-3-1-tables-headers-id
name: Tables headers-id associations
test_mode: automatic
environment:  DOM Structure

success_criterion:
- 1.3.1 # Info and relationships (level A)

authors:
- Ken Petri
---

## Description

This rule checks that data table headers-id associations are used correctly.

## Background

- [F90: Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes](https://www.w3.org/TR/WCAG20-TECHS/F90.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/TR/WCAG20-TECHS/H43.html)
- [F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables](https://www.w3.org/TR/WCAG20-TECHS/F46.html)

## Assumptions

- Tables are [well-formed, according to the HTML5.1 specification.](https://www.w3.org/TR/html51/tabular-data.html#forming-a-table).

## Test procedure

### Selector

Select all elements that match the following CSS selector:

    table:not([role=presentation]) th[headers],
    table:not([role=presentation]) td[headers],
    table:not([role=none]) th[headers],
    table:not([role=none]) td[headers]

### Step 1

Test method: [automatic][AUTO]

For each value in each cell `headers` attribute,

check that the value references a cell `id` attribute value within the same table,

if yes, continue with [step 2](#step-2)

else, return a fail:

| Outcome  | Failed
|----------|-----
| ID       | SC1-3-1-tables-headers-id-fail1
| Error    | A `headers` value in the table has no matching `id`.

### Step 2

Test method: [manual][MANUAL]

Give the user the following question:

| Property             | Value
|----------------------|---------
| Presented item       | Highlight a table cell and the related "header" cell.
| Question             | Is the cell appropriately categorized by or semantically related with the associated "header" cell?
| Requires context     | Yes, an understanding of the data relationships in the table.
| Requires interaction | No

if yes:

| Outcome  | Passed
|----------|-----
| ID       | SC1-3-1-tables-headers-id-pass2

else, return a fail:

| Outcome  | Failed
|----------|-----
| ID       | SC1-3-1-tables-headers-id-fail2
| Error    | Table cell's `id` references an incorrect `th` or `td` via 'headers' attribute.

...

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
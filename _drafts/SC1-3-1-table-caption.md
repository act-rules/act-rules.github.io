---
rule_id: SC1-3-1-table-caption
name: 
test_mode: automatic

success_criterion:
- 1.3.1 # Info and relationships (level A)

authors:

---

## Description

This test checks if a table with caption does not contain a summary with the same text.

## Background

- [H39: Using caption elements to associate data table captions with data tables](http://www.w3.org/TR/WCAG20-TECHS/H39.html)
- [H73: Using the summary attribute of the table element to give an overview of data tables](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H73.html)
- [H51: Using table markup to present tabular information](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H51.html)

## Assumptions

No assumptions yet

## Test properties

| Property          | Value
|-------------------|----
| Success Criterion | 1.3.1 Info and Relationships
| Test name         |
| Test mode         | Automatic
| Test environment  | DOM
| Test subject      | Web page

## Test procedure

### Selector

Test mode: [automatic][AUTO]

`table` Elements that have both a `summary` attribute and a `caption` element.

For each selected item, go through the following steps:

### Step 1

Test mode: [automatic][AUTO]

Check if the summary duplicates the caption.

if yes return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-3-1-table-caption
| ID       | SC1-3-1-table-caption-failed1
| Error    | The heading element must have content.

else return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-3-1-table-caption
| ID       | SC1-3-1-table-caption-passed1

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
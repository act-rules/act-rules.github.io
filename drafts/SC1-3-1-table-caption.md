This test belongs to [[1.3.1 Info and Relationships]].

## Status
{{draft}}

## Description
This test checks if a table with caption does not contain a summary with the same text.

## Background
- [http://www.w3.org/TR/WCAG20-TECHS/H39.html H39: Using caption elements to associate data table captions with data tables]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H73.html H73: Using the summary attribute of the table element to give an overview of data tables]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H51.html H51: Using table markup to present tabular information]

## Assumptions
No assumptions yet

## Test properties

| Property         | Value
|------------------|----
|Success Criterion |[[1.3.1 Info and Relationships]]
|Test name         |
|Test mode         |Automatic
|Test environment  |DOM
|Test subject      | Web page


## Test procedure

### Selector
Test method: [semi-automatic]
Tables that have both summary and caption elements.

### Step 1
Test method: [semi-automatic]
Check if the summary duplicates the caption.
if yes return
{{Failed
|testcase = SC1-3-1-table-caption
|id = SC1-3-1-table-caption-failed1
|error = The heading element must have content.
}}
else return
return {{Passed
|testcase = SC1-3-1-table-caption
|id = SC1-3-1-table-caption-passed1
}}

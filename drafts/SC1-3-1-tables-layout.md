This test case belongs to
[[1.3.1 Info and Relationships]]


[[Category:Review]]

## Description
This test checks that tables used for layout purposes do not contain tabular data or markup.

## Background
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G140 G140: Separating information and structure from presentation to enable different presentations | Techniques for WCAG 2.0]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H39 H39: Using caption elements to associate data table captions with data tables | Techniques for WCAG 2.0]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H51 H51: Using table markup to present tabular information | Techniques for WCAG 2.0]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H73 H73: Using the summary attribute of the table element to give an overview of data tables | Techniques for WCAG 2.0]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F46 F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables | Techniques for WCAG]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F91 F91: Failure of Success Criterion 1.3.1 for not correctly marking up table headers | Techniques for WCAG 2.0]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F92 F92: Failure of Success Criterion 1.3.1 due to the use of role presentation on content which conveys semantic information | Techniques for WCAG 2.0]

## Assumptions
Tables that have no tabular mark-up are interpretted by assistive technologies as layout tables.
According to WCAG this includes:
- No header cells: that is <pre><th></pre> cels, or <pre><td></pre> cells with ARIA roles rowheader and columnheader.
- No <pre><caption></pre> element.
- No (or empty) summary attribute.
- No scope or header attributes on table cells.
- Tables with single column or row, or tables with less than two rows containing two valid datacells are automatically marked as layout tables by assistive technologies. A cell is considered valid
** if its size can be obtained and is between 200 and 16000 pixels, or
** if its size can't be obtained and it contains text (Cells only containing graphics are not considered valid).

## Test properties
{|border=1 cellpadding=2 cellspacing=0
| Property         | Value
|------------------|----

|Test name
|Tables Layout
|-
|Success Criterion
|[[1.3.1 Info and Relationships]]
|-
|Test mode
|SemiAuto
|-
|Test environment
|rendered page
|-
|Test subject
| Entire web page
|-style="background: #eee;"
|User expertise and skills
|no prior knowledge
|-style="background: #eee;"
|User profile
|Does not require sight.
|}
## Test procedure
 
### Selector
Test method: [semi-automatic]
Select all tables on the page marked as presentational (using role="presentation" on the table element.
In addition, select tables with all of the following characteristics (see conditions for layout tables listed above):
- Tables with no designated header cells (<pre><th></pre> cells or <pre><td></pre> cells with ARIA roles rowheader and columnheader.
- No <pre><caption></pre> tag
- No (or empty) summary attribute

### Step 1 - Check if actual data tables have wrongly been marked as presentational using ARIA
Test method: [semi-automatic]
for each table with role="presentation".
Check if table contains
- header cels
- a caption element or or summary attribute
- a cell with a scope or headers attribute

If yes,
{{Failed
|testcase = SC1-3-1-tables-layout
|id = SC1-3-1-tables-layout-fail1
|error =  A datatable is marked as presentational for assistive technologies.
}}
else
continue with [[#Step 2]]

### step 2
Test method: [semi-automatic]
Check if any `<td>` cell has a headers attribute or a scope attribute.
If yes,
{{Failed
|testcase = SC1-3-1-tables-layout
|id = SC1-3-1-tables-layout-fail2
|error = Layout tables cannot associate a cell with other cels.
}}
else
continue with [[#Step 3]]

### step 3
Test method: [manual]

For each remaining table that matches the selector, ask user to confirm that the table is not a data table.

{{UserInput
|presented-item = A table (or page with location of table highlighted)
|requires-context = no
|requires-interaction = no
|question = Does the table look like an actual datatable?
|help = A datatable is a table that: Visually looks like a table and, b. When you look at a cell in the table, you need to check its column header or row header to fully understand the content of that cell.
}}

if yes
{{Failed
|testcase = SC1-3-1-tables-layout
|id = SC1-3-1-tables-layout-fail3
|error = Table containing tabular data is presented as a layout table.
}}
else
{{Passed
|testcase = SC1-3-1-tables-layout
|id = SC1-3-1-tables-layout-pass1
}}

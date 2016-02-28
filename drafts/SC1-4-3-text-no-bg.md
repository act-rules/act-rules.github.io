automatable test (tool only)

## Status

# First Draft

### Open issues

*none so far*

## Background

- *Links to Techniques for WCAG 2.0 **W3C Working Group Note 11 March 2014***
- *Summary of information from UWEM 2.0 draft*

## Description

This test checks that when a text has no discernible background, that the text color is not set either.

### Assumptions

- Text is always positioned on top of it’s ancestor elements.
- All text on the page is meaningful

## Test procedure

### UTT: Required user expertise and skills

0: Automated test. No user input.

### Test subject

<ol start="3" style="list-style-type: decimal;">
<li>DOM and CSS (= same as 2. plus computed style for each element)</li></ol>

single page

### Selector (tool)

Look at each element containing text that is [[rendered to the screen]]. Select all [[elements where the background]] is defined. The text should not consist of only white space characters.

### Step 1 (tool)

Determine the [[text color]]

- IF the text color is defined: Return FAILED.

{|
!Key
!Value
|-
|test id
|1.4.3-F1
|-
|SC
|1.4.3
|-
|result
|FAILED
|}

- ELSE: Return PASSED

{|
!Key
!Value
|-
|test id
|1.4.3-P1
|-
|SC
|1.4.3
|-
|result
|PASSED
|}


# SC1-4-3-text-no-bg

automatable test (tool only)


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

1. DOM and CSS (= same as 2. plus computed style for each element)

single page

### Selector (tool)

Look at each element containing text that is [[rendered to the screen]]. Select all [[elements where the background]] is defined. The text should not consist of only white space characters.

### Step 1 (tool)

Determine the [[text color]]

- IF the text color is defined: Return FAILED.
- ELSE: Return PASSED

| Outcome  | Passed
|----------|-----
| Testcase |
| ID       |


| Outcome  | Failed
|----------|-----
| Testcase |
| Error    |
| Info     |
| ID       |

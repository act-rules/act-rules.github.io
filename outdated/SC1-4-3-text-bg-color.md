
# SC1-4-3-text-bg-color 

* partially automatable test (tool can produce some results, user input required to perform the full test)

## Status

# First Draft

### Open issues

- There is nothing about link text yet

## Background

- *Links to Techniques for WCAG 2.0 **W3C Working Group Note 11 March 2014***
- *Summary of information from UWEM 2.0 draft*

## Description

This test checks the text has sufficient contrast. This test

### Assumptions

- Text is always positioned on top of it’s ancestor elements.
- All text on the page is meaningful

## Test procedure

### UTT: Required user expertise and skills

# no prior knowledge

- Only sighted users can perform this test

### Test subject

<ol start="3" style="list-style-type: decimal;">
<li>DOM and CSS (= same as 2. plus computed style for each element)</li></ol>

single page

### Selector (tool)

Select elements on a page that contain text that is [[rendered to the screen]] and for which the [[background]] is a color. This text must contain non-white spaaaaaace characters. Any element which in addition to a background color also has a background iamge set must be ignored.

### Step 1 (tool)

- IF the CSS color property of the element is set on the element or inherited: Select this as `color-1` and go to Step 2.

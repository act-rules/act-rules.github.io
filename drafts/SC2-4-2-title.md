# SC2-4-2-title

Back to [[2.4.2 Page Titled]]

## Description

This test checks that the page title (`<title` element in the head section of a webpage) a. exists, and b. identifies the role or content of the web page.

## Background

- [G88: Providing descriptive titles for Web pages](http://www.w3.org/TR/WCAG20-TECHS/G88.html)
- [H25: Providing a title using the title element](http://www.w3.org/TR/WCAG20-TECHS/H25.html)
- [F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents](http://www.w3.org/TR/WCAG20-TECHS/F25.html)
## Assumptions
- Technique ARIA 1 is not considered for this test, although it was added in a recent [update of the Understanding WCAG 2.0 document](http://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140408/complete-diff.html).
- If there are more than one `<title>` elements this test will throw an error.

## Test properties

| Property          | Value
|-------------------|----
| Test name         | Page Title
| Test requirement  | [[2.4.2 Page Titled]]
| Test mode         | semiAuto
| Test environment  | HTML source or DOM
| Test subject      | single web page

## Test procedure

### Selector

Test mode: [automatic][AUTO]

`<head>`

### Step 1

Test mode: [automatic][AUTO]

Check that there is a `<title>` element in the `<head>` section of the html document.

If no, return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-2-title
| ID       | SC2-4-2-title-fail1
| Error    | Missing title element

Else, continue with [[step 2]]

### Step 2

Test mode: [automatic][AUTO]

Check for multiple title elements in head section of page.

if yes, return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-2-title
| ID       | SC2-4-2-title-fail2
| Error    | multiple title elements in head section.

Else, continue with [[step 3]]

### Step 3

Test mode: [automatic][AUTO]

Check if the title is a filename or a URL (for file name, check for patterns ending with a . and a known file extension).

if yes, return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-2-title
| ID       | SC2-4-2-title-fail3
| Error    | filename or URL used as title

if no, continue with [[step 4]]

### Step 4

Test mode: [manual][MANUAL]

Prompt user to look at the title and content of the page.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Web page (with title either highlighted or in a seperate textbox).
| Requires context     | yes
| Requires Interaction | no
| Question             | Does the webpage title identify the context or purpose of this web page?
| Help                 | A page title should describe  the content or purpose of the webpage, and uniquely identify it within the website.
A good web page title consists of two or 3 parts, usually separated by a <pre>-</pre> or a `|`: - A descriptive page title for the page itself. - (optional) If the web page is a part of a section of the website, include the section name. - The website name or domain name.
The web page title usually comes first, but any order of these is acceptable.

if no, return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-2-title
| ID       | SC2-4-2-title-fail4
| Error    | page title does not identify the webpage.

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-2-title
| ID       | SC2-4-2-title-pass1

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
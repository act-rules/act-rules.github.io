---
rule_id: SC2-4-5-multiple-ways
name: Multiple ways
test_mode: manual

criteria:
- 2.4.5 # Multiple Ways

authors:

---

## Description

This test checks that there are at least two of the following elements available on the web page:

- link to site map
- search form or link to search page
- list of links to all other web pages
- links to relevant web pages

## Background

- [G63: Providing a site map](http://www.w3.org/TR/WCAG20-TECHS/G63.html)
- [G125: Providing links to navigate to related Web pages](http://www.w3.org/TR/WCAG20-TECHS/G125.html)
- [G126: Providing a list of links to all other Web pages](http://www.w3.org/TR/WCAG20-TECHS/G126.html)
- [G161: Providing a search function to help users find content](http://www.w3.org/TR/WCAG20-TECHS/G161.html)

## Assumptions

- This test assumes that the web page isn’t a step or a result of a process.
- This test excludes technique G185: Linking to all the pages on the site from the home page.

## Test properties

| Property          | Value
|-------------------|----
| Test name         | Multiple ways
| Test requirement  | 2.4.5 Multiple Ways
| Test mode         | manual
| Test environment  | rendered page
| Test subject      | multiple web pages

## Test procedure

### Selector

Test mode: [automatic][AUTO]

The entire web page.

### Step 1 (G125)

Test mode: [manual][MANUAL]

Check if the web page provides links to navigate to related web pages.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Web page.
| Requires context     | yes
| Requires Interaction | yes
| Question             | Does the web page provide links to the website navigation or other related web pages?
| Help                 | A related web page is directly connected with the subject or purpose of the current web page. Examples are main navigation, table of contents and the breadcrumb trail.
Create variable ‘multiple-ways’ and set value to ‘0’.

If true: variable ‘multiple-ways’ value + 1.

Continue to [Step 2 (G161)](#step-2-g161).

### Step 2 (G161)

Test mode: [manual][MANUAL]

Check if the web page provides a search form or a link to the search page.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Web page.
| Requires context     | yes
| Requires Interaction | yes
| Question             | Does the web page provide a search form or a link to the search page?
| Help                 | If the web page provides a search form or a link to the search page select "Yes". Else select "No".

If true: variable ‘multiple-ways’ value + 1.

If variable ‘multiple-ways’ has a value of 2 or more, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-5-multiple-ways
| ID       | SC2-4-5-multiple-ways-passed1

Else continue to [Step 3 (G63)](#step-3-g63).

### Step 3 (G63)

Test mode: [manual][MANUAL]

Check if the web page provides a link to the site map.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Web page.
| Requires context     | yes
| Requires Interaction | yes
| Question             | Does the web page provide a link to the site map?
| Help                 | A site map is a web page that provides links to all the web pages of the web site. If the web page has a link to the site map select “Yes”. Else select “No”.

If true: continue to [Step 4 (G63)](#step-4-g63).

Else continue to [Step 5 (G126)](#step-5-g126).

### Step 4 (G63)

Test mode: [manual][MANUAL]

Check if the site map is a valid site map.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Site map.
| Requires context     | yes
| Requires Interaction | yes
| Question             | Is the site map a valid site map?
| Help                 | The criteria of a valid site map are no broken links and includes all the links of primary and secondary navigation. If the site map meets the criteria select "Yes". Else select "No".

If true: variable ‘multiple-ways’ value + 1.

If variable ‘multiple-ways’ has a value of 2 or more, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-5-multiple-ways
| ID       | SC2-4-5-multiple-ways-passed2

Else continue to [Step 5 (G126)](#step-5-g126).

### Step 5 (G126)

Test mode: [manual][MANUAL]

Check if the web page provides a list of links to all other web pages.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Web page.
| Requires context     | yes
| Requires Interaction | yes
| Question             | Does the web page provide a list of links to all other web pages?
| Help                 | Examples are main navigation and a site map. If the page provides a list of links to all other web pages select "Yes". Else select "No".

If true: variable ‘multiple-ways’ value + 1.

If variable ‘multiple-ways’ has a value of 2 or more, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-5-multiple-ways
| ID       | SC2-4-5-multiple-ways-passed3

Else return:

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-5-multiple-ways
| ID       | SC2-4-5-multiple-ways-failed1
| Error    | Not enough ways to access the web page.
| Info     |

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
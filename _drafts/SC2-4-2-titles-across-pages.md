---
rule_id: SC2-4-2-titles-across-pages
name: Titles Across Pages
test_mode: semi-automatic

criteria:
- 2.4.2 # Page Titled (Level A)

authors:

---

## Description

This test checks that webpage titles are used to uniquely identify the purpose of individual webpages by comparing titles of webpages on the same website.

## Assumptions

All pages tested should be on the same website (with same domain). Page titles on external websites are out of the scope of the test. Page will necessarily not include pages that require user interaction or pages hosted behind a login. Such pages have to be tested individually using [SC2-4-2-title](SC2-4-2-title.html).

## Background

- [G127: Identifying a Web page's relationship to a larger collection of Web pages](http://www.w3.org/TR/WCAG20-TECHS/G127.html)
- [F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents](http://www.w3.org/TR/WCAG20-TECHS/F25.html)
- Case of missing, invalid or multiple title elements for a single webpage are covered in test [SC2-4-2-title](SC2-4-2-title.html) this test does not duplicate these checks.
- If no pages with same domain are linked from the page where the test is run, the test automatically passes (for best results, run this test from the front page or main page of the website).
- If every page in the sample has identical titles, the test automatically fails.
- If one or more group of pages within the website have identical titles, users are asked to evaluate each group.
- Test excludes pages behind logins and pages that users can only get to by entering data (such as "checkout" from a Shopping Cart).

## Test properties

| Property          | Value
|-------------------|----
| Test name         | Titles Across Pages
| Test requirement  | 2.4.2 Page Titled
| Test mode         | Semiauto
| Test environment  | HTML source or DOM
| Test subject      | multiple web pages

## Test procedure
 
### Selector

Test mode: [automatic][AUTO]

Extract `title` element from the `head` section of all pages in the collection. To create a page collection, follow all links from the page currently being tested, include all pages on same domain. Exclude all pages with no title elements or multiple title elements (they are covered in a different test).

For each selected item, go through the following steps:

### Step 1

Test mode: [automatic][AUTO]

If more than one page is returned, and all pages in the set have identical titles.
return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-2-titles-across-pages
| ID       | SC2-4-2-titles-across-pages-fail1
| Error    | All page titles identical.

Else, continue with [Step 2](#step-2)

### Step 2

Test mode: [manual][MANUAL]

Create a list of pages with identical page titles where each list item consists of the page title and a tested list of all URLs where that title is used.
For each item in this list.

Present the page title to user and ask the user to open at least two of the URLs associated with that title in a separate window or tab and inspect the content of those pages.
 
**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | A list of URLs (to webpages with identical titles).
| Requires context     | yes
| Requires Interaction | yes
| Question             | Please activate at least two of the following URLs and take a look at the webpages. Does the webpage title  accurately describe the purpose or content of all of these webpages?
| Help                 | A page title should uniquely identify the web page and be descriptive of its primary purpose or content. Occasionally webpages may be so similar as to justify having the same title, e.g. "Product FAQ" pages for different products (if product name is clearly stated as a heading on the page itself) but more often than not it means that a generic title, perhaps created from a template is being used without consideration of the page context.

If no return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-2-titles-across-pages
| ID       | SC2-4-2-titles-across-pages-fail2
| Error    | Page titles need to be unique and descriptive, at least x pages on your website have identical titles. (where x is the number of pages with identical titles)

Else return

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-2-titles-across-pages
| ID       | SC2-4-2-titles-across-pages-pass1

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
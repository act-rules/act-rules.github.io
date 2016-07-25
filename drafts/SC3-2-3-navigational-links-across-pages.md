# SC3-2-3-navigational-links-across-pages 

This test belongs to [[3.2.3 Consistent Navigation]].

## Description

This test checks if the order of navigational components and repeated links within a set of Web pages remains consistent.

## Background

- [G61: Presenting repeated components in the same relative order each time they appear](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G61)
- [F66: Failure of Success Criterion 3.2.3 due to presenting navigation links in a different relative order on different pages](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/F66)
- WCAG2 defines [same relative order](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/F66) as follows: "Same relative order means that secondary navigation items may be in between the link items on some pages. They can be present without affecting the outcome of this test."

## Assumptions

- This test assumes that the order of navigational elements on the page was not changed by the user.
- This test assumes that comparing a page to the pages that are linked from it is sufficient to judge the applicability of the success criterion.
- If one page has a different menu structure, all pages that are linked from it would get a failed result which might exaggerate the overall results and this is intentional.
- This test checks only navigational components that are matched by the selector. Other navigational components like search boxes are not checked.

## Test properties

| Property          | Value
|-------------------|----
| Success Criterion |[[3.2.3 Consistent Navigation]]
| Test name         |Presentation of navigational components
| Test mode         |Automatic
| Test environment  |HTML source or DOM
| Test subject      | Multiple web pages

## Test procedure

### Selector

Test mode: [automatic]

Select the following elements:

- elements with `role="navigation"`
- `&lt;nav&gt;` elements
- `&lt;ul&gt;` and `&lt;ol&gt;` elements that contain `&lt;li&gt;` elements with [[internal links]] and the list does not contain any other text, images or user input elements outside of links. Sometimes the active menu item (current page) is a text and not a link. If the list contains one item that is not a link, this list should still be selected.
- Lists nested within other lists are considered a single list. From them the outermost list element or nav element is selected.

N1 = list of all selected elements.

### Step 1

Test mode: [automatic]

If there are [[internal links]] on the current page (P1)

Make list of all [[internal links]] and continue with [[#Step 2]]

else return

| Outcome  | Inapplicable
|----------|-----
| Testcase | SC3-2-3-Navigational-links-across-pages
| ID       | SC3-2-3-Navigational-links-across-pages-inapplicable1

### Step 2

Test mode: [semi-automatic]

Download all the pages determined by the list constructed in [[#Step 1]] (P2 .. Pn).

Apply the [[#Selector]] of this test case to the pages, selecting lists N2 ... Nn for P2 ... Pn.

If all lists N2 ... Nn are empty, return

| Outcome  | Inapplicable
|----------|-----
| Testcase | SC3-2-3-Navigational-links-across-pages
| ID       | SC3-2-3-Navigational-links-across-pages-inapplicable2

Else continue with [[#Step 3]].

### Step 3

Test mode: [semi-automatic]

The elements on list Nj are identified by the element type and the id of the element or the id of the first ancestor with an id. If there is no ancestor with id, the id is left empty.

Compare N1 to N2 ... Nn. (Both the element type and the id are compared.)

If N1 does not have the same relative order as N2 ... Nn, return

| Outcome  | Failed
|----------|-----
| Testcase | SC3-2-3-Navigational-links-across-pages
| ID       | SC3-2-3-Navigational-links-across-pages-fail1
| Error    | Navigational components of pages are not in the same relative order.

else continue with [[#Step 4]]

### Step 4

Test mode: [semi-automatic]

Lj = list of link texts of all the navigational links in Nj.

Note that Lj is a flat list that contains all navigational links from page Pj in DOM order.

Only the link text, i.e. `link.textContent` is extracted.
Compare L1 to L2 ... Ln.

If L1 does not have the same relative order as L2 ... Ln, return

| Outcome  | Failed
|----------|-----
| Testcase | SC3-2-3-Navigational-links-across-pages
| ID       | SC3-2-3-Navigational-links-across-pages-fail2
| Error    | Navigational links of pages are not in the same relative order.

else, return

| Outcome  | Passed
|----------|-----
| Testcase | SC3-2-3-Navigational-links-across-pages
| ID       | SC3-2-3-Navigational-links-across-pages-pass1

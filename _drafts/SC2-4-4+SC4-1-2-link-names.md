---
rule_id: SC2-4-4+SC4-1-2-link-names
name: Links have an accessible name
test_mode: automatic

criteria:
- 2.4.4 # Link Purpose (In Context) (Level A)
- 4.1.2 # Name, Role, Value (Level A)

authors:
- Wilco Fiers
---

## Description

This rule checks that all links have an accessible name.

## Background

- [F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to using null alt on an image where the image is the only content in a link](http://www.w3.org/TR/WCAG20-TECHS/F89.html)
- [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/TR/WCAG20-TECHS/ARIA7.html)
- [ARIA8: Using aria-label for link purpose](https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html)

## Assumptions

*No known assumptions.*

## Test properties

| Property          | Value
|-------------------|----
| Test name         | Links have an accessible name
| Success Criterion | 2.4.4 Link Purpose (In Context), 4.1.2 Name, Role, Value
| Test mode         | automatic
| Test environment  | Rendered page
| Test subject      | Single web page

## Test procedure

### Selector

Test mode: [automatic][AUTO]

Select elements matching the following CSS selector:

	a[href]:not([role]), *[role=link]

### Step 1

Test mode: [automatic][AUTO]

Check if the selected element has an `aria-label` or `aria-labelledby` attribute.

If yes, continue with [Step 5](#step-5-aria-labels)

Else, continue with step [Step 2](#step-2-no-aria)

### Step 2: no ARIA

Test mode: [automatic][AUTO]

Concatenate the selected element's [rendered text][RNDTXT] and the text of the `title` attribute, in variable T1.

If T1 is [non-empty][NEMPTY], return:

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-4+SC4-1-2-link-names
| ID       | SC2-4-4+SC4-1-2-link-names-passed1
| Info     | Link contains text

Else, continue with [Step 3](#step-3)

### Step 3

Check if the selected element contains an `img` element or an `input` element of `type=image`, 

If yes, continue with [Step 4](#step-4-liked-images)

Else, return:

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-failed1
| Error    | The links must have a name, either though the link text or by the `title` attribute.

### Step 4: Linked images

Test mode: [automatic][AUTO]

Take all images from step 3, that do not have `[role=presentation]` and are not hidden through `display:none` or `visibility:hidden`.

If there are no such images, return:

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-failed2
| Error    | Ensure that images within the link are not ignored by assistive technologies.

Get the text alternatives of the images using the [Text Alternative Computation][TXTALT] Algorithm. Concatenate the resulting texts into variable T2.

If T2 contains [non-empty][NEMPTY] text, return:

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-passed2
| Info     | The link contains images with a text alternative

Else return:

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-failed3
| Error    | An image is the only content of this anchor and so it should have a text alternative to give a name to the link.

### Step 5: ARIA labels

Test mode: [automatic][AUTO]

Concatenate the selected element's `aria-label` attribute, and the [text content][TXTCNT] of an element referred to with the `aria-labeledby` attribute, in variable T3.

If T3 contains [non-empty][NEMPTY] text, return:

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-passed3
| Info     | The link has an accessible name through ARIA labels

Dlese, return:

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-failed4
| Error    | The link's aria label does not provide an alternative

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
[NEMPTY]: ../pages/algorihms/none-empty.html
[TXTALT]: ../pages/algorithms/text-alternative-compute.html
[RNDTXT]: ../pages/algorithms/rendered-text.html
[TXTCNT]: ../pages/algorithms/text-content.html
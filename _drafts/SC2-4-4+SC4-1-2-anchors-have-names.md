---
# [Rule Metadata](../pages/metadata.md)

rule_id: SC2-4-4+SC4-1-2-anchors-have-names
name: Anchor elements have a name
test_mode: automatic

criteria:
- navigation-mechanisms-refs: 2.4.4 Link Purpose (In Context) (Level A)
- ensure-compat-rsv: 4.1.2 Name, Role, Value (Level A)

authors:
- http://github.com/wilcofiers: Wilco Fiers
---

## Description

This rule checks that all links have a name.

## Background

- [F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to using null alt on an image where the image is the only content in a link](http://www.w3.org/TR/WCAG20-TECHS/F89.html)

## Assumptions

- This rule assumes that all image elements have alt attributes (see [SC1-1-1-img-alt](SC1-1-1-img-alt)).

## Test properties

| Property          | Value
|-------------------|----
| Test name         | Anchor elements have a name
| Success Criterion | 2.4.4 Link Purpose (In Context)]], 4.1.2 Name, Role, Value
| Test mode         | Automatic
| Test environment  | Rendered page
| Test subject      | Single web page

## Test procedure

### Selector

Test mode: [automatic][AUTO]

Select the following elements: `a[href]`.

### Step 1

Test mode: [automatic][AUTO]

If the link contains [rendered text][RNDTXT] that is [non-empty][NEMPTY], return:

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-4+SC4-1-2-anchors-have-names
| ID       | SC2-4-4+SC4-1-2-anchors-have-names-passed1
| Info     | Link contains text

Else continue to [Step 2](#step-2)

### Step 2

Test mode: [automatic][AUTO]

Concatenate the link's `title` and `aria-label` attribute, and the [text content][NEMPTY] of an element referred to with the `aria-labeledby` attribute, in variable T1.

If T1 contains [non-empty][NEMPTY] text, return:

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-passed2
| Info     | The link has a name

Else continue to [Step 3](#step-3)

Open question: Is the title ignored with aria-label

### Step 3

Test mode: [automatic][AUTO]

Take all `img` elements from the selected element (if any), that do not have `[role=presentation]` and are not hidden through `display:none` or `visibility:hidden`.

Concatenate the results of [Text Alternative Computation][TXTALT] Algorithm run on the `img` elements and assign it to variable T1.

If T1 contains [non-empty][NEMPTY] text, return:

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-passed3
| Info     | The link contains images with a text alternative

Else return:

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-failed
| Error    | An image is the only content of this anchor and so it should have a text alternative to give a name to the link.

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
[NEMPTY]: ../pages/algorihms/none-empty.html
[TXTALT]: ../pages/algorithms/text-alternative-compute.html
[RNDTXT]: ../pages/algorithms/rendered-text.html
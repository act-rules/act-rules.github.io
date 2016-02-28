This test belongs to [[2.4.4 Link Purpose (In Context)]] and [[4.1.2 Name, Role, Value]].

## Status
{{status|0.2: For review|1998}}
{{status|0.1: For review|653}}
[[Category:Review]]

## Description

This test checks that all links have a name.

## Background

- [http://www.w3.org/TR/WCAG20-TECHS/F89.html  F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to using null alt on an image where the image is the only content in a link]

## Assumptions

This test assumes that all image elements have alt attributes (see [[SC1-1-1-img-alt]]).

## Test properties

!Property
!Values
|-
|Test name
|Anchor elements have a name
|-
|Success Criterion
|
- [[2.4.4 Link Purpose (In Context)]]
- [[4.1.2 Name, Role, Value]]
|-
|Test mode
|Automatic
|-
|Test environment
|rendered page
|-
|Test subject
|single web page
|-style="background: #eee;"
|}

## Test procedure

### Selector
Test method: [semi-automatic]

Select the following elements: ` a[href]`.

### Step 1
Test method: [semi-automatic]

If the link contains [[rendered text]] that is [[non-empty]], return:
{{Passed
 |testcase = SC2-4-4+SC4-1-2-anchors-have-names
 |id = SC2-4-4+SC4-1-2-anchors-have-names-passed1
 |info = Link contains text
 }}

Else continue to [[#Step 2]]

### Step 2
Test method: [semi-automatic]

Concatenate the link's `title` and `aria-label` attribute, and the [[text content]] of an element referred to with the `aria-labeledby` attribute, in variable T1.

If T1 contains [[non-empty]] text, return:

{{Passed
 |testcase = SC2-4-4+SC4-1-2-anchors-have-names
 |id = SC2-4-4+SC4-1-2-anchors-have-names-passed2
 |info = The link has a name
 }}


Else continue to [[#Step 3]]

Open question: Is the title ignored with aria-label

### Step 3
Test method: [semi-automatic]

Take all `img` elements from the selected element (if any), that do not have `[role=presentation]` and are not hidden through `display:none` or `visibility:hidden`.

Concatenate the results of [[Text Alternative Computation]] Algorithm run on the `img` elements and assign it to variable T1.

If T1 contains [[non-empty]] text, return:

{{Passed
 |testcase = SC2-4-4+SC4-1-2-anchors-have-names
 |id = SC2-4-4+SC4-1-2-anchors-have-names-passed3
 |info = The link contains images with a text alternative
 }}

Else return:

{{Failed
|testcase = SC2-4-4+SC4-1-2-anchors-have-names
|id = SC2-4-4+SC4-1-2-anchors-have-names-failed
|error = An image is the only content of this anchor and so it should have a text alternative to give a name to the link.
}}

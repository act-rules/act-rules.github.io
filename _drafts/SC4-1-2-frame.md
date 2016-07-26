---
# [Rule Metadata](../pages/metadata.md)

rule_id: SC4-1-2-frame
name: Proper use of aria-describedby
test_mode: semi-automatic

criteria:
- ensure-compat-rsv: 4.1.2 Name, Role, Value (Level A)

authors:
- Wilco Fiers
---

## Description

This test case checks that frames and iframes have a none-empty title attribute

## Background

- [H64: Using the title attribute of the frame and iframe elements](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H64.html)
- [eGovMon test H64-1](http://wiki.egovmon.no/wiki/SC4.1.2#ID:_H64-1)

## Assumptions

*no known assumptions*

## Test properties

| Property          | Value
|-------------------|----
| Success Criterion | 4.1.2 Name, Role, Value
| Test mode         | Semi-automatic
| Test environment  | HTML source
| Test subject      | single web page

## Test procedure

### Selector

Test mode: [automatic][AUTO]

Select any frame or iframe element.

### Step 1

Test mode: [automatic][AUTO]

If the selected element does not have a title attribute, or a title with only [[non-empty]] text, return:

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-fail1
| Error    | This {element-name} requires a title attribute, which must be descriptive the purpose of the frame

### Step 2

Test mode: [manual][MANUAL]

Present the iframe to the user, alongside the following question.

frame_title = The value of the title attribute of the frame

Question: Does the title {frame_title} identify the purpose of this frame?

Help text: Some frames only serve to show other pages. In those cases a website name is sufficient. Other times a frame is used to provide a specific function for it's nearby content. This should be clear from the title alone.

If yes, return

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-pass

If no, return

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-fail2
| Error    | The purpose of the frame can not be identified from the title.

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
---
rule_id: SC4-1-2-button
name: Button has name
test_mode: automatic

criteria:
- 4.1.2 # Name, Role, Value (Level A)

author:

---

## Description

This test checks if every button element has a name.

## Background

- [H91: Using HTML form controls and links](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H91.html)
- [eGovMon test H91-2](http://wiki.egovmon.no/wiki/SC4.1.2#ID:_H91-2)

## Assumptions

- The test case does not look at buttons with img content

## Test properties

| Property          | Value
|-------------------|----
| Success Criterion | 4.1.2 Name, Role, Value
| Test mode         | automatic
| Test environment  | DOM
| Test subject      | single web page

## Test procedure

### Selector

Test mode: [automatic][AUTO]

Select any button element. The following CSS selector could be used: `button`

### Step 1

Test mode: [automatic][AUTO]

- IF there is [non-empty][NEMPTY] text within the button element:
  - Return {{ page.rule_id }}-pass;
- IF the button element has a title attribute with a [non-empty][NEMPTY] value:
  - Return {{ page.rule_id }}-pass;
- ELSE Return {{ page.rule_id }}-fail;

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.rule_id }}
| ID       | {{ page.rule_id }}-pass

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.rule_id }}
| Error    | failed to give an anchor element a name
| Info     | This button element has no filled title attribute nor text content.
| ID       | {{ page.rule_id }}-fail

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
[NEMPTY]: ../pages/algorihms/none-empty.html
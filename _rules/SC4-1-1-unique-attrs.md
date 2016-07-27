---
rule_id: SC4-1-1-unique-attrs
name: Attributes are unique
test_mode: automatic

criteria:
- 4.1.1 # Parsing (Level A)
---

## Description

This test checks that attributes of an element are unique.

## Background

- [eGovMon H94-1](http://wiki.egovmon.no/wiki/SC4.1.1#ID:_H94-1)
- [Ensuring that elements do not contain duplicate attributes](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H94 H94)

## Assumptions

*no known assumptions*

## Test properties

| Property         | Value
|------------------|----
| Test requirement | 4.1.1 Parsing
| Test mode        | Automatic
| Test environment | HTML source
| Test subject     | Single web page

## Test procedure

### Selector

Test mode: [automatic][AUTO]

Select all opening tags in the HTML document

### Step 1

Test mode: [automatic][AUTO]

- Make a list of all the attribute names on the current tag
- IF any of the attributes occurs more the once:
  - Return {{ page.rule_id }}-fail1
- ELSE Return {{ page.rule_id }}-pass1

| Outcome  | Passed
|----------|-----
| ID       | {{ page.rule_id }}-pass1
| Testcase | {{ page.rule_id }}
| Pointer  | selector result

| Outcome  | Failed
|----------|-----
| ID       | {{ page.rule_id }}-fail1
| Testcase | {{ page.rule_id }}
| Error    | Attribute <attribute-name> was used more then once on the element <pointer>
| Pointer  | selector result

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
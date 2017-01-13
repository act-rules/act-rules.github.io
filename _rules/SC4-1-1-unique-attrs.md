---
rule_id: SC4-1-1-unique-attrs
name: Attributes are unique
test_mode: automatic
environment: Markup Document

success_criterion:
- 4.1.1 # Parsing (Level A)

authors:
- Wilco Fiers

---

## Description

This test checks that the attributes of an element are unique.

### Background

- [eGovMon H94-1](http://wiki.egovmon.no/wiki/SC4.1.1#ID:_H94-1)
- [Ensuring that elements do not contain duplicate attributes](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H94 H94)

### Assumptions

*no known assumptions*

## Test procedure

### Selector

Select all opening tags in the HTML document

### Step 1

For each tag, make a list of all the attribute names on the tag. Do any of the attributes occur more than once in the list?

if yes, return [step1-fail](#step1-fail)

### Step 2

Confirm there were no fails.

if yes, return [step2-pass](#step2-pass)

## Outcome

### step1-fail

| Property    | Value
|-------------|-----
| type        | TestResult
| outcome     | Failed
| description | Attribute <attribute-name> is used more than once on element <pointer>.

### step2-pass

| Property    | Value
|-------------|-----
| type        | TestResult
| outcome     | Passed
| description | Attributes only occur once per element.

## Implementation Tests

Implementation tests are available at: [SC4-1-1-unique-attrs Tests](SC4-1-1-unique-attrs.test.md)

## Change log

### Version 1.1
- edit to fit revised format for rules

### Version 1.0
- add default author fields


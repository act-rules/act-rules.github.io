---
rule_id: SC4-1-1-unique-attrs
name: Attributes are unique
test_mode: automatic
environment: Markup Document

success_criterion:
- 4.1.1 # Parsing (Level A)

author:
- Wilco Fiers
- Emma Pratt Richens
---

## Description

This test checks that attributes of an element are unique.

## Background

- [eGovMon H94-1](http://wiki.egovmon.no/wiki/SC4.1.1#ID:_H94-1)
- [Ensuring that elements do not contain duplicate attributes](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H94 H94)

## Assumptions

*no known assumptions*

## Test procedure

### Selector

Select all opening tags in the HTML code.

### Step 1

Make a list of all the attribute names on the tag. Do any of the attributes occur more than once in the list?

if yes, return [step1-fail](#step1-fail)

else, return [step2-pass](#step2-pass)

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:{{ page.rule_id }}
| subject  | *the selected element*
| mode     | auto-wcag:{{ page.test_mode }}
| result   | <One TestResult from below>

### step1-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Attribute [attribute-name] is used more than once on element [element-pointer].

### step1-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description | Attributes only occur once on element [element-pointer].

## Implementation Tests

There are currently no tests available for this rule.

Implementation tests are available at: [rulename tests](rule-id.test.md)

## Change log

### Version 1.1

- Updated to new format

### Version 1.0

- Set up the initial rule

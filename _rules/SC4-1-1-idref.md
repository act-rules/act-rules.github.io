---
rule_id: SC4-1-1-idref
name: Reference elements
test_mode: automatic
environment: DOM Structure

criteria:
- 4.1.1 # Parsing (Level A)

author:
- Kamyar Rasta
- Wilco Fiers
---

## Description

This test checks that each element referred to from an idref attribute exists.

## Background

- [F17: Failure of Success Criterion 1.3.1 and 4.1.1 due to insufficient information in DOM to determine one-to-one relationships (e.g., between labels with same id) in HTML](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F17)
- [eGovMon test ID: F17-2](http://wiki.egovmon.no/wiki/SC4.1.1#Element_with_.40for)

## Assumptions

*no known assumptions*

## Test procedure

### Selector

Select each label element with a for attribute and each element with a aria-activedescendant attribute. The CSS selector `label[for], *[aria-activedescendant]` can be used.

### Step 1

- Take the attribute with the IDREF (for="" / aria-activedescendant) value as IdrefAttr
- Trim the IdrefAttr of whitespace characters
- Select element IdTarget, by looking up the first element that has an ID attribute that matches the IdrefAttr
- IF idTarget exists:
  - Return [step1-fail](#step1-pass)
- ELSE:
  - Return [step1-fail](#step1-fail)

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:{{ page.rule_id }}
| subject  | *the selected element*
| mode     | auto-wcag:{{ page.test_mode }}
| result   | <One TestResult from below>

### step1-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step1-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | The attribute {IdrefAttr} refers to an element that does not exist on the page.

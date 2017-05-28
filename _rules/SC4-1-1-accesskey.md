---
rule_id: SC4-1-1-accesskey
name: Provide unique accesskeys
test_mode: automatic
environment: DOM Structure

success_criterion:
- 4.1.1 # Parsing (Level A)

author:
- Kamyar Rasta
- Wilco Fiers
---

## Description

This test checks accesskey attribute for all elements to have a unique value.

## Background

- [F17: Failure of Success Criterion 1.3.1 and 4.1.1 due to insufficient information in DOM to determine one-to-one relationships (e.g., between labels with same id) in HTML](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F17)
- [eGovMon test F17-1](http://wiki.egovmon.no/wiki/SC4.1.1#ID:_F17-1)

## Assumptions

- If the accesskey value has multiple characters the user agent picks the first character and ignores the rest. See: [WHATWG on Interaction](http://www.whatwg.org/specs/web-apps/current-work/multipage/interaction.html#the-accesskey-attribute).

## Test procedure

### Selector

Select any element with an accesskey attribute. The following CSS selector could be used: *[accesskey]

### Step 1

- IF there is no list called 'knownAccesskeys':
  -  Create an empty list 'knownAccesskeys;
- Take the first character of the ACCESSKEY attribute as FirstChar
- IF the FirstChar exists in 'knownAccesskeys':
  - Return [step1-fail](#step1-fail)
- ELSE:
  - Add the FirstChar to 'knownAccesskeys'
  - Return [step1-pass](#step1-pass)

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
| description | The accesskey of this element has occurred before on this page

### step1-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

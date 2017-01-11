---
rule_id: SC4-1-1-accesskey
name: Provide unique accesskeys
test_mode: automatic
environment: DOM Structure

success_criterion:
- 4.1.1 # Parsing (Level A)

authors:
- Wilco Fiers

---

## Description

This test checks accesskey attribute for all elements to have a unique value.

### Background

- [F17: Failure of Success Criterion 1.3.1 and 4.1.1 due to insufficient information in DOM to determine one-to-one relationships (e.g., between labels with same id) in HTML](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F17)
- [eGovMon test F17-1](http://wiki.egovmon.no/wiki/SC4.1.1#ID:_F17-1)

### Assumptions

- If the accesskey value has multiple characters the user agent picks the first character and ignores the rest. See: [WHATWG on Interaction](http://www.whatwg.org/specs/web-apps/current-work/multipage/interaction.html#the-accesskey-attribute).

## Test procedure

### Selector

Select any element with an accesskey attribute. The following CSS selector could be used:

    `*[accesskey]`

### Step 1

If there is no list called 'knownAccesskeys', create an empty list 'knownAccesskeys'.

### Step 2

For each element, check if the first character of the accesskey attribute value exists in 'knownAccesskeys'.

if yes, return [step2-fail](#step2-fail)

else, add the first character of the accesskey attribute value for the selected element to 'knownAccesskeys'

### Step 3

Confirm there were no fails.

if yes, return [step3-pass](#step3-pass)

## Outcome

### step2-fail

| Property    | Value
|-------------|-----
| type        | TestResult
| outcome     | Failed
| description | Accesskey <attribute-value> is duplicated on the page.

### step3-pass

| Property    | Value
|-------------|-----
| type        | TestResult
| outcome     | Passed
| description | All accesskey attributes are unique on the page.

## Implementation Tests

Implementation tests are available at: [SC4-1-1-accesskey Tests](SC4-1-1-accesskey.test.md)

## Change log

### Version 1.1
- edit to fit revised format for rules

### Version 1.0
- add default author fields

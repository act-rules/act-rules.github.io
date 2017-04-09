---
rule_id: SC1-1-1-longdesc
name: Proper use of longdesc
test_mode: semi-automatic

criteria:
- 1.1.1 # Non-text Content (level A)

authors:
- Frank Berker
---

## Description

This test checks the sufficient provision of a long text description for non-text content using the `longdesc` attribute. This test doesn't check the accessibility of a page referenced to from the longdesc attribute and this page must be checked separately.

## Background

- [G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G73)
- [G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G74)
- [G92: Providing long description for non-text content that serves the same purpose and presents the same information](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G92)
- [H45: Using longdesc](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/H45)
- [F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F67)
- The proper provision of a short text alternative is checked in [[SC1-1-1-text-alternative]]

## Assumptions

- The test assumes that a page referenced within the longdesc attribute is accessible.

## Test procedure

### Selector

`//img[@longdesc]`

### Step 1

Check if the `longdesc` attribute value is a valid URL

if yes, continue with [step 2][#step-2]

else, return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-longdesc
| ID       | SC1-1-1-longdesc-fail1
| Error    | LONGDESC attribute value is not a valid URL

### Step 2

Check if the resource referenced in the `longdesc` attribute value exists

if yes, continue with [step 3][#step-3]

else, return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-longdesc
| ID       | SC1-1-1-longdesc-fail2
| Error    | LONGDESC reference does not exist
| Info     |  The URL given as LONGDESC value was not retrievable.

### Step 3

Concatenate the results of [Text Alternative Computation][TXTALT] Algorithm run on the element and assign it to variable T1.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Image with T1 and the content of the page referenced by the longdesc  at the referenced anchor point (if applicable)
| Question             | Does the alternative provide an extended description of the image additionally to T1?
| Help                 | If the images contribute meaning to the page or provide any functionality or convey information additional to the pages text, this must be described. The alternative may be an entire page. The main content of which should provide the description.
| Repair               | If no, could you suggest an alternative, which would sufficiently describe the image?
| User profile         | Requires sight
| Requires context     | yes
| Requires Interaction | yes

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-longdesc
| ID       | SC1-1-1-longdesc-pass1

else, return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-longdesc
| ID       | SC1-1-1-longdesc–fail3
| Error    | Long description not sufficiently descriptive.
| Info     | Collection of repair suggestions

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:{{ page.rule_id }}
| subject  | *the selected element*
| mode     | auto-wcag:{{ page.test_mode }}
| result   | <One TestResult from below>

[TXTALT]: ../pages/algorithms/text-alternative-compute.html
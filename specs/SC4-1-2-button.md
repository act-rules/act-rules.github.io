
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
| Success Criterion | [[4.1.2 Name, Role, Value]]
| Test mode         | automatic
| Test environment  | DOM
| Test subject      | single web page


## Test procedure

### Selector
Test method: [automatic]

Select any button element. The following CSS selector could be used: “button”

### Step 1
Test method: [automatic]

- IF there is [[non-empty]] text within the button element:
  - Return SC412-button-pass;
- IF the button element has a title attribute with a [[non-empty]] value:
  - Return SC412-button-pass;
- ELSE Return SC412-button-fail;


| Outcome  | Passed
|----------|-----
| Testcase | SC412-button
| ID       | SC412-button-pass

| Outcome  | Failed
|----------|-----
| Testcase | SC412-button
| Error    | failed to give an anchor element a name
| Info     | This button element has no filled title attribute nor text content.
| ID       |  SC412-button-fail

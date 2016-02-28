## Description
This test checks if every button element has a name.

## Background
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H91.html| H91: Using HTML form controls and links]
- [http://wiki.egovmon.no/wiki/SC4.1.2#ID:_H91-2|eGovMon test H91-2]
## Assumptions

- The test case does not look at buttons with img content

## Test properties

| Property         | Value
|------------------|----
|Success Criterion |[[4.1.2 Name, Role, Value]]
|Test mode         |automatic
|Test environment  | DOM
|Test subject      | single web page


## Test procedure

### Selector
Test method: [semi-automatic]
Select any button element. The following CSS selector could be used: “button”

### Step 1
Test method: [semi-automatic]

- IF there is [[non-empty]] text within the button element:
** Return SC412-button-pass;
- IF the button element has a title attribute with a [[non-empty]] value:
** Return SC412-button-pass;
- ELSE Return SC412-button-fail;


{{Passed
|testcase = SC412-button
|id =   SC412-button-pass
}}

{{Failed
|testcase = SC412-button
|error = failed to give an anchor element a name
|info = This button element has no filled title attribute nor text content.
|id =  SC412-button-fail
}}

This test belongs to [[4.1.1 Parsing]].

## Status
{{status|1|1108}}
[[Category:Completed]]


## Description
This test checks that each element referred to from an idrefs attribute exists.


## Background
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F17 F17: Failure of Success Criterion 1.3.1 and 4.1.1 due to insufficient information in DOM to determine one-to-one relationships (e.g., between labels with same id) in HTML]
- [http://wiki.egovmon.no/wiki/SC4.1.1#Element_with_.40for eGovMon test ID: F17-2]

## Assumptions

*no known assumptions*

## Test properties

| Property         | Value
|------------------|----
|Success Criterion |[[4.1.1 Parsing]]
|Test mode         |automatic
|Test environment  | DOM
|Test subject      | single web page


## Test procedure

### Selector
Test method: [semi-automatic]

Select each td and th element with a headers attribute, and each element with an aria IDREFS attribute. The CSS selector "td[headers], th[headers], *[aria-controls], *[aria-describedby], *[aria-flowto], *[aria-labelledby], *[aria-owns]" can be used.

### Step 1
Test method: [semi-automatic]


- Make a list of idRefVals by splitting the IDREFS attribute on whitespace characters
- Trim each value in idRefVals by removing all whitespace characters
- FOR EACH idRefVal in idRefVals
**  Get element IdTarget, by looking up the first element that has an ID attribute that matches idRefVal
**  IF idTarget exists:
***   Return SC4-1-1-idrefs-pass1
**  ELSE:
***   Return SC4-1-1-idrefs-fail1


{{Passed
|testcase = SC4-1-1-idrefs
|pointer = selector result
|id = SC4-1-1-idrefs-pass1
}}

{{Failed
|testcase = SC4-1-1-idrefs
|error = The attribute {IDREFS attribute} refers to an element with the id {idRefVal} which does not exist on the page.
|pointer = selector result
|id = SC4-1-1-idrefs-fail1
}}

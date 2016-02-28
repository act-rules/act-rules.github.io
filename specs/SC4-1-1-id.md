
This test belongs to [[4.1.1 Parsing]].

## Status
{{status|1|1100}}
[[Category:Completed]]

## Description

This test checks id attribute for all elements to have a unique value.

## Background

- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H93| H93: Ensuring that id attributes are unique on a Web page]
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F77| F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID]
- [http://wiki.egovmon.no/wiki/SC4.1.1#ID:_F77-1|eGovMon test F77-1]

## Assumptions

*no known assumptions*

## Test properties

| Property         | Value
|------------------|----
|Test name         |Define ids for elements
|Test requirement  |[[4.1.1 Parsing]]
|Test mode         |Automatic
|Test environment  |DOM
|Test subject      |single web page


## Test procedure

### Selector
Test method: [semi-automatic]

Select any element with an id attribute. The following CSS selector could be used: *[id]

### Step 1
Test method: [semi-automatic]

- IF there is no list called 'knownIDs':
**  Create an empty list 'knownIDs;
- IF the value of the ID attribute exists in 'knownIDs':
**  Return SC4-1-1-id-fail1
- ELSE:
**  Add the value of the ID attribute of the selected element to 'knownIDs'
**  Return SC4-1-1-id-pass1


{{Passed
|testcase = SC4-1-1-id
|pointer = selector result
|id = SC4-1-1-id-pass1
}}

{{Failed
|testcase = SC4-1-1-id
|error = The ID of this element has occurred before on this page
|pointer = selector result
|id = SC4-1-1-id-fail1
}}

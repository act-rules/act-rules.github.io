{{status|0: For review|907}}

## Description
This test case checks that frames and iframes have a none-empty title attribute

## Background
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H64.html H64: Using the title attribute of the frame and iframe elements]
- [http://wiki.egovmon.no/wiki/SC4.1.2#ID:_H64-1 eGovMon test H64-1]

## Assumptions

*no known assumptions*

## Test properties

| Property         | Value
|------------------|----
|Success Criterion |[[4.1.2 Name, Role, Value]]
|Test mode         |automatic
|Test environment  | HTML source
|Test subject      | single web page


## Test procedure

### Selector
Test method: [semi-automatic]

Select any frame or iframe element.

### Step 1
Test method: [semi-automatic]

If the selected element does not have a title attribute, or a title with only [[non-empty]] text, return:

{{Failed
|testcase = SC4-1-2-frame
|id = SC4-1-2-frame-fail1
|error = This {element-name} requires a title attribute, which must be descriptive the purpose of the frame
}}

### Step 2
Test method: [manual]
Present the iframe to the user, alongside the following question.<br/>
frame_title = The value of the title attribute of the frame <br/>
Question: Does the title {frame_title} identify the purpose of this frame?

Help text: Some frames only serve to show other pages. In those cases a website name is sufficient. Other times a frame is used to provide a specific function for it's nearby content. This should be clear from the title alone.

If yes, return:
{{Passed
|testcase = SC4-1-2-frame
|id =   SC4-1-2-frame-pass
}}

if no, return:
{{Failed
|testcase = SC4-1-2-frame
|id = SC4-1-2-frame-fail2
|error = The purpose of the frame can not be identified from the title.
}}

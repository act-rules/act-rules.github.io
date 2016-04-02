This test belongs to [[4.1.1 Parsing]].


## Description
This test checks that attributes of an element are unique.


## Background
- [eGovMon H94-1](http://wiki.egovmon.no/wiki/SC4.1.1#ID:_H94-1)
- [Ensuring that elements do not contain duplicate attributes](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H94 H94)


## Assumptions
*no known assumptions*


## Test properties
| Property         | Value
|------------------|----
| Test requirement | [4.1.1 Parsing]
| Test mode        | Automatic
| Test environment | HTML source
| Test subject     | Single web page


## Test procedure

### Selector
Test method: [automatic]

Select all opening tags in the HTML document

### Step 1
Test method: [automatic]

- Make a list of all the attribute names on the current tag
- IF any of the attributes occurs more the once:
  - Return SC4-1-1-unique-attrs-fail1
- ELSE Return SC4-1-1-unique-attrs-pass1

| Outcome  | Passed
|----------|-----
| ID       | SC4-1-1-unique-attrs-pass1
| Testcase | SC4-1-1-unique-attrs
| Pointer  | selector result


| Outcome  | Failed
|----------|-----
| ID       | SC4-1-1-unique-attrs-fail1
| Testcase | SC4-1-1-unique-attrs
| Error    | Attribute <attribute-name> was used more then once on the element <pointer>
| Pointer  | selector result

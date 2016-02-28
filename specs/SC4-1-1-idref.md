This test belongs to [[4.1.1 Parsing]].

## Status
{{status|1|1106}}
[[Category:Completed]]

## Description
This test checks that each element referred to from an idref attribute exists.

## Background
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F17 F17: Failure of Success Criterion 1.3.1 and 4.1.1 due to insufficient information in DOM to determine one-to-one relationships (e.g., between labels with same id) in HTML]
- [http://wiki.egovmon.no/wiki/SC4.1.1#Element_with_.40for eGovMon test ID: F17-2]

## Assumptions

*no known assumptions*

## Test properties

| Property         | Value
|------------------|----
|Test name         |Reference elements
|Test requirement  |[[4.1.1 Parsing]]
|Test mode         |automatic
|Test environment  | DOM
|Test subject      | single web page


## Test procedure

### Selector
Test method: [semi-automatic]

Select each label element with a for attribute and each element with a aria-activedescendant attribute. The CSS selector "label[for], *[aria-activedescendant]" can be used.

### Step 1
Test method: [semi-automatic]

- Take the attribute with the IDREF (for=""/aria-activedescendant) value as IdrefAttr
- Trim the IdrefAttr of whitespace characters
- Select element IdTarget, by looking up the first element that has an ID attribute that matches the IdrefAttr
- IF idTarget exists:
**  Return SC4-1-1-idref-pass1
- ELSE:
**  Return SC4-1-1-idref-fail1


{{Passed
|testcase = SC4-1-1-idref
|pointer = selector result
|id = SC4-1-1-idref-pass1
}}

{{Failed
|testcase = SC4-1-1-idref
|error = The attribute {IdrefAttr} refers to an element that does not exist on the page.
|pointer = selector result
|id = SC4-1-1-idref-fail1
}}

This test belongs to [[1.3.1 Info and Relationships]].

## Status
{{status|0.1: For review|2084}}
[[Category:Review]]

## Description
This test checks that a page is properly organized using headings.

## Background
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G141 G141: Organizing a page using headings]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H42 H42: Using h1-h6 to identify headings]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F43.html F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/ARIA12 ARIA12: Using role=heading to identify headings]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F2.html F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text]

## Assumptions
No assumptions yet

## Test properties

| Property         | Value
|------------------|----
|Success Criterion |[[1.3.1 Info and Relationships]]
|Test name         |Proper use of headings
|Test mode         |SemiAuto
|Test environment  |HTML source
|Test subject      | Web page
|User profile      |Requires sight


## Test procedure

### Selector
Test method: [semi-automatic]

Select:
- the h1,h2,h3,h4,h5,h6 elements. Selector: `//*[self::h1 or self::h2 or self::h3 or self::h4 or self::h5 or self::h6]`
- each elements with the attribute role="heading". Selector: `//*[self::*[role="heading"]]`
- the `strong`, `b` elements. Selector: `//*[self::strong or self::b]`
- the `div`, `span`, `p` elements with CSS class="heading"
{{Open question
|name = Open question
|text = What are other elements that are wrongly used as heading?
}}
### Step 1: check element type
Test method: [semi-automatic]

- Check if the element is of type `h1,h2,h3,h4,h5,h6` continue with [[#Step 2: heading content is non-empty (H42)]]
- Check if the element has attribute role="heading" continue with [[#Step 4: Examine element with role="heading" (ARIA12)]]
- Check if the element is of type `div`, `span`, `p` elements with CSS class="heading" and  `strong`, `b` continue with [[#Step 5: using changes in text presentation to convey information (F2)]]


### Step 2: heading content is non-empty (H42)
Test method: [semi-automatic]

Check if the content of h1,h2,h3,h4,h5,h6 is [[Non-empty]].

if yes, continue with [[#Step 3: heading markup is used when content is a heading]]

else return

{{Failed
|testcase = SC1-3-1-headings
|id = SC1-3-1-headings-failed1
|error = The heading element must have content.
}}

### Step 3: heading markup is used when content is a heading (H42)
Test method: [manual]

{{UserInput
|presented-item = Heading with the corresponding text
|question = Does the text is a heading with a correct level?
|help =
|repair =
|requires-context = yes
|requires-interaction = yes
}}

if yes,
return {{Passed
|testcase = SC1-3-1-headings
|id = SC1-3-1-headings-passed1
}}

else
return {{Failed
|testcase = SC1-3-1-headings
|id = SC1-3-1-headings–failed2
|error = the text is not a heading with a correct level.
|info =
}}

{{Open question
|name = Open question
|text = shall we fail 1.3.1 when h1 contains a wrong element e.g. table? or it is only a failure of 4.1.1 as it is an invalid code. Maybe this case this test should return a cann't tell and a failure for 4.1.1.
}}
### Step 4: Examine element with role="heading" (ARIA12)
Test method: [manual]

{{UserInput
|presented-item = element, the content of the element, and aria-level attribute (if exist)
|question = Does the text is a heading with a correct level?
|help =
|repair =
|requires-context = yes
|requires-interaction = yes
}}

if yes,
return {{Passed
|testcase = SC1-3-1-headings
|id = SC1-3-1-headings-passed2
}}

else
return {{Failed
|testcase = SC1-3-1-headings
|id = SC1-3-1-headings–failed3
|error = the text is not a heading with a correct level.
|info =
}}

### Step 5: using changes in text presentation to convey information (F2)
Test method: [manual]

{{UserInput
|presented-item = strong,b and div,span,p that has CSS class="heading" with the content of them
|question = Does the text is a heading?
|help =
|repair =
|requires-context = yes
|requires-interaction = yes
}}

if yes,
return {{Failed
|testcase = SC1-3-1-headings
|id = SC1-3-1-headings–failed4
|error = styled text is used to convey structural information.
|info =
}}

else
return {{Passed
|testcase = SC1-3-1-headings
|id = SC1-3-1-headings-passed3
}}

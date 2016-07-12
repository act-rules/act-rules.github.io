
# SC1-3-1-headings

This test belongs to [[1.3.1 Info and Relationships]].


## Description
This test checks that a page is properly organized using headings.


## Background
- [G141: Organizing a page using headings](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G141)
- [H42: Using h1-h6 to identify headings](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H42)
- [F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F43.html)
- [ARIA12: Using role=heading to identify headings](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/ARIA12)
- [F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F2.html)


## Assumptions
No assumptions yet


## Test properties
| Property          | Value
|-------------------|----
| Success Criterion | [[1.3.1 Info and Relationships]]
| Test name         | Proper use of headings
| Test mode         | SemiAuto
| Test environment  | HTML source
| Test subject      | Web page
| User profile      | Requires sight


## Test procedure

### Selector
Test method: [automatic]

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
Test method: [automatic]

Check if the content of h1,h2,h3,h4,h5,h6 is [[Non-empty]].

if yes, continue with [[#Step 3: heading markup is used when content is a heading]]

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-3-1-headings
| ID       | SC1-3-1-headings-failed1
| Error    | The heading element must have content.

### Step 3: heading markup is used when content is a heading (H42)
Test method: [manual]

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Heading with the corresponding text
| Question             | Does the text is a heading with a correct level?
| Help                 |
| Repair               |
| Requires context     | yes
| Requires Interaction | yes

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-3-1-headings
| ID       | SC1-3-1-headings-passed1

else, return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-3-1-headings
| ID       | SC1-3-1-headings–failed2
| Error    | the text is not a heading with a correct level.
| info     |

{{Open question
|name = Open question
|text = shall we fail 1.3.1 when h1 contains a wrong element e.g. table? or it is only a failure of 4.1.1 as it is an invalid code. Maybe this case this test should return a cann't tell and a failure for 4.1.1.
}}
### Step 4: Examine element with role="heading" (ARIA12)
Test method: [manual]

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | element, the content of the element, and aria-level attribute (if exist)
| Question             | Does the text is a heading with a correct level?
| Help                 |
| Repair               |
| Requires context     | yes
| Requires Interaction | yes

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-3-1-headings
| ID       | SC1-3-1-headings-passed2

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-3-1-headings
| ID       | SC1-3-1-headings–failed3
| Error    | the text is not a heading with a correct level.
| Info     |

### Step 5: using changes in text presentation to convey information (F2)
Test method: [manual]

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | strong,b and div,span,p that has CSS class="heading" with the content of them
| Question             | Does the text is a heading?
| Help                 |
| Repair               |
| Requires context     | yes
| Requires Interaction | yes

if yes, return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-3-1-headings
| ID       | SC1-3-1-headings–failed4
| Error    | styled text is used to convey structural information.
| Info     |

else return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-3-1-headings
| ID       | SC1-3-1-headings-passed3

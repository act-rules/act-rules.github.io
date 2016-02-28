Check if forms meet [[1.4.1 Use of Color]].

semi-automatable test

## Status

First Draft

### Open issues

- Consider to connect this test to the user sample.

# During the sampling the user is asked to select a page with a forms.
# Afterwards the user answers the questions of this test.

- **Web page definition:** Some steps of this test are carried out after the form has been submitted, i.e. on the resulting page, which might have a different URL. How does this affect the sample? Can we model this as multi-page process? Is the resulting page added to the sample?
- Provide a clear description of “rely on color alone”, such as: For example a text cue is used on the form field.

## Background

- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F81.html F81: Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only]
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/H92.html H92: Including a text cue for colored form control labels]
- from the UWEM 2.0 draft:
- F81: Human input for sampling would be helpful to identify forms page.
- F81: Not programmatically determinable if a field is required or has an error. Interactive tests can not be done.

## Description

This test checks that there are other ways (apart from color differences) used to identify required fields, missing data, or incorrect data in a form.

*Note: This test will pass if the web page does not provide any feedback at all on the submitted data. (see also: Guideline 3.3 Input Assistance: Help users avoid and correct mistakes.)*

### Assumptions

# This test assumes that forms are implemented with `&lt;form&gt;` elements.

## Test procedure

### UTT: Required user expertise and skills

1: no prior knowledge

Specify: Are there any additional requirements for the user profile?<br />The tester must be able to see the web page. This test can not be carried out by a blind person.

### Test subject

2: DOM tree (for tool)<br />4: rendered page (for user)

single page

### Selector (tool)

`form`

<blockquote>**Open issue:** Limit the selection to forms with multiple input fields (not counting button, submit, and hidden input fields). Can this be described by a CSS selector?
</blockquote>
### Step 1 (user)

*(Identification of required fields without form submission)*

Does the form (or surrounding text) contain any indication that some fields are required?

- IF no: continue with step 2.
- ELSE: Does the indication of required fields rely on color alone?
- IF no: continue with step 2.
- ELSE: Return FAILED.

{|
!Key
!Value
|-
|test id
|*id*
|-
|SC
|1.4.1
|-
|position
|*pos*
|-
|code extract
|*html code*
|-
|result
|FAILED
|-
|message
|required_field_only_color
|}

### Step 2 (user)

*(Identification of missing data after form submission)*

Submit the form without filling in data. Does the resulting page contain any indication that data is missing?

- IF no: continue with step 3.
- ELSE: Does the indication of missing data rely on color alone?
- IF no: continue with step 3.
- ELSE: Return FAILED.

{|
!Key
!Value
|-
|test id
|*id*
|-
|SC
|1.4.1
|-
|position
|*pos*
|-
|code extract
|*html code*
|-
|result
|FAILED
|-
|message
|mssing_data_only_color
|}

### Step 3 (user)

*(Identification of incorrect data after form submission)*

Enter incorrect data (such as letters in a field for a phone number) and submit the form. Does the resulting page contain any indication that data is incorrect?

- IF no: continue with step 4.
- ELSE: Does the indication of missing data rely on color alone?
- IF no: continue with step 4.
- ELSE: Return FAILED.

{|
!Key
!Value
|-
|test id
|*id*
|-
|SC
|1.4.1
|-
|position
|*pos*
|-
|code extract
|*html code*
|-
|result
|FAILED
|-
|message
|incorrect_data_only_color
|}

### Step 4 (tool)

Return PASSED.

{|
!Key
!Value
|-
|test id
|*id*
|-
|SC
|1.4.1
|-
|position
|*pos*
|-
|code extract
|*html code*
|-
|result
|PASSED
|-
|message
|form_control_visually_evident
|}

:Note, that the test also passes, if the web page does not provide any feedback at all on the submitted data.

Back to [[2.4.4 Link Purpose (In Context)]]


## Description
This test checks if each `area` element contains an `alt` attribute that is not empty. If two or more `alt` values in the collection of `area` elements are equal, the corresponding `href` value should also be equal.


## Background
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H24.html H24: Providing text alternatives for the area elements of image maps]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G91.html G91: Providing link text that describes the purpose of a link]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H30.html H30: Providing link text that describes the purpose of a link for anchor elements]


## Assumptions
- `<area>` elements that are not enclosed by a `<map>` element will not serve any purpose and are therefore excluded from the test
List of [[Introduction_to_auto-wcag_test_design#All_assumptions|all assumptions]]


## Test properties
| Property          | Value
|-------------------|----
| Test name         | Area Element Has Alt Attribute
| Success Criterion | [[ 2.4.4 Link Purpose (In Context)]]
| Test mode         | SemiAuto
| Test environment  | HTML source and DOM
| Test subject      | Single web page
| User expertise and skills | Basic understanding of HTML


## Test procedure

### Selector
Test method: [automatic]

Select elements using the following selector: `map[name] area`, if the `name` attribute of the `map` element is referred to by a `usemap` attribute of an `img` element in the same document.

### Step 1: Check for non-empty `alt` attributes (H24)
Test method: [automatic]

Check if the `area` element has an `alt` attribute that contains [[non-empty]] text.

if yes, continue with [[#Step 2: Check for uniqueness of the alt attribute value]]

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-4-image-map
| ID       | SC2-4-4-image-map-failed1
| Error    | The `area` element must have an `alt` attribute that is not empty.

### Step 2: Check for uniqueness of the `alt` attribute value
Test method: [automatic]

For each set of `area` elements enclosed by a `map` element:
- Make an array of the `alt` attribute values in the `area` elements;
- Check for duplicate values.

if duplicate values exist, continue with [[#Step 3: Check duplicate alt attribute values for identical hrefs]]

else continue with [[#Step 4: Does the text of the link describe its purpose? (H24, G91)]]

### Step 3: Check duplicate `alt` attribute values for identical `href`s
Test method: [automatic]

For each duplicate `alt` attribute value in the same set of `area` elements, make an array of the `href` attribute values in the `area` elements;

if the `href` attribute values are identical, continue with [[#Step 4: Does the text of the link describe its purpose? (H24, G91)]]

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-4-image-map
| ID       | SC2-4-4-image-map-failed2
| Error    | `area` elements have identical link texts, but point to different URLs

### Step 4: Does the text of the link describe its purpose? (H24, G91)
Test method: [manual]

**User Input Question:**
| Property             | Value
|----------------------|---------
| Presented item       | The alt attribute of the area element, and the image with the current area highlighted
| Requires context     | yes
| Requires Interaction | no
| Question             | Does the text alternative describe the purpose of the highlighted area
|answer-options = yes/no
| Help                 | If the area contains text this should be included in the text alternative. The purpose of that area on the image must be described. Please refer to the [https://www.w3.org/community/auto-wcag/wiki/Sufficient_short_text_description explanations concerning sufficient short text alternatives] for further information.
|repair = If no, could you suggest a sufficient textual alternative?

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC2-4-4-image-map
| ID       | SC2-4-4-image-map-passed1

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-4-image-map
| ID       | SC2-4-4-image-map-failed3
| Error    | the text alternative specified by the `alt` attribute does not serve the same purpose as the part of the image map image referenced by the area element of the imagemap.

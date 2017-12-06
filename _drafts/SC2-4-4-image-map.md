---
rule_id: SC2-4-4-image-map
name: Area Element Has Alt Attribute
test_mode: semi-automatic

criteria:
- 2.4.4 # Link Purpose (In Context)

authors:

---

## Description

This test checks if each `area` element contains an `alt` attribute that is not empty. If two or more `alt` values in the collection of `area` elements are equal, the corresponding `href` value should also be equal.

## Background

- [H24: Providing text alternatives for the area elements of image maps](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H24.html)
- [G91: Providing link text that describes the purpose of a link](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G91.html)
- [H30: Providing link text that describes the purpose of a link for anchor elements](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H30.html)

## Assumptions

- `area` elements that are not enclosed by a `<map>` element will not serve any purpose and are therefore excluded from the test

List of [all assumptions][ASUMPT].

## Test properties

| Property          | Value
|-------------------|----
| Test name         | Area Element Has Alt Attribute
| Success Criterion | 2.4.4 Link Purpose (In Context)
| Test mode         | SemiAuto
| Test environment  | HTML source and DOM
| Test subject      | Single web page
| User expertise and skills | Basic understanding of HTML

## Test procedure

### Selector

Test mode: [automatic][AUTO]

Select elements using the following selector: `map[name] area`, if the `name` attribute of the `map` element is referred to by a `usemap` attribute of an `img` element in the same document.

For each selected item, go through the following steps:

### Step 1: Check for non-empty `alt` attributes (H24)

Test mode: [automatic][AUTO]

Check if the `area` element has an `alt` attribute that contains [non-empty text][NEMPTY].

if yes, continue with [Step 2][STEP2]

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-4-image-map
| ID       | SC2-4-4-image-map-failed1
| Error    | The `area` element must have an `alt` attribute that is not empty.

### Step 2: Check for uniqueness of the `alt` attribute value

Test mode: [automatic][AUTO]

For each set of `area` elements enclosed by a `map` element:

- Make an array of the `alt` attribute values in the `area` elements;
- Check for duplicate values.

if duplicate values exist, continue with [Step 3][STEP_3]

else continue with [Step 4][STEP_4]

### Step 3: Check duplicate `alt` attribute values for identical `href`s

Test mode: [automatic][AUTO]

For each duplicate `alt` attribute value in the same set of `area` elements, make an array of the `href` attribute values in the `area` elements;

if the `href` attribute values are identical, continue with [Step 4][STEP_4]

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC2-4-4-image-map
| ID       | SC2-4-4-image-map-failed2
| Error    | `area` elements have identical link texts, but point to different URLs

### Step 4: Does the text of the link describe its purpose? (H24, G91)

Test mode: [manual][MANUAL]

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | The alt attribute of the area element, and the image with the current area highlighted
| Requires context     | yes
| Requires Interaction | no
| Question             | Does the text alternative describe the purpose of the highlighted area
|answer-options = yes/no
| Help                 | If the area contains text this should be included in the text alternative. The purpose of that area on the image must be described. Please refer to the [explanations concerning sufficient short text alternatives](https://www.w3.org/community/auto-wcag/wiki/Sufficient_short_text_description) for further information.
|repair                | If no, could you suggest a sufficient textual alternative?

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

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
[STEP_2]: #step-2-check-for-uniqueness-of-the-alt-attribute-value
[STEP_3]: #step-3-check-duplicate-alt-attribute-values-for-identical-href-s
[STEP_4]: #step-4-does-the-text-of-the-link-describe-its-purpose-h24-g91
[ASUMPT]: ../pages/assumptions.html
[NEMPTY]: ../pages/algorihms/none-empty.html
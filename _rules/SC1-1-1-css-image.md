---
ruleId: SC1-1-1-css-image
criterion_name: 1.1.1 Non-text Content
---

## Description

This test checks that images do not convey information when added to the page using CSS. If the image conveys information, it is checked for a description provided in text nearby.

## Background

- [C9: Using CSS to include decorative images](http://www.w3.org/WAI/GL/WCAG20-TECHS/C9)
- [F3: Failure of Success Criterion 1.1.1 due to using CSS to include images that convey important information](http://www.w3.org/TR/WCAG20-TECHS/F3)
- [Detecting Text in Natural Scenes with Stroke Width Transform](http://research.microsoft.com/pubs/149305/1509.pdf)

## Assumptions

- Readable characters can be formed on a space of minimum 5 x 3 pixels. This test assumes that no images are used for applying vertical text.
- Additionally to the tests defined here, the image can be processed to detect shapes, symmetry or characters.

## Test properties

| Property          | Value
|-------------------|----
| Test name         | CSS background decorative
| Success Criterion | 1.1.1 Non-text Content
| Test mode         | Semi-automatic
| Test environment  | rendered page
| Test subject      | Web page state
| User expertise and skills | no prior knowledge
| User profile      | Requires sight

## Test procedure

### Selector

Test mode: [automatic][AUTO]

Single element, which background property contains one or more URIs

- `object.style.background.match(url)`
- `object.style.backgroundImage.match(url)`
- `object.style.listStyle.match(url)`
- `object.style.listStyleImage.match(url)`

*Note that the computed style has to be analyzed. Depending on the rendering technology these can be retrieved by using `runtimeStyle`, `currentStyle` or `getComputedStyle`.*

### Step 1

Test mode: [automatic][AUTO]

Check if the computed `backgroundRepeat` property is set and its value is other than no-repeat.

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-css-image
| ID       | SC1-1-1-css-image-pass1

else, continue with [step 2](#step-2)

### Step 2

Test mode: [automatic][AUTO]

Check if the height of all images added by the background-property is less or equals 5 pixels or its width is less or equals 3 pixels.

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-css-image
| ID       | SC1-1-1-css-image-pass2

else, continue with [step 3](#step-3)

### Step 3

Test mode: [automatic][MANUAL]

Check if the element is really used for solely decorative purposes.

To prepare the element for presentation to the user, all calculated CSS properties of the element must be stored and its child elements must be removed.

**User Input Question:**

| Property             | Value
|----------------------|---------
| presented-item   | Element containing background images without child elements but with previously calculated CSS properites applied.
| question         | Is this image solely for decorative purposes?
| help             | Answer with 'Yes', if it is a decorative image such as a separator, line or menu-background solely used for layout purposes or an image that doesn't convey information useful for understanding the content of the page.
| requires-context | yes

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-css-image
| ID       | SC1-1-1-css-image-pass3

else continue with [step 4](#step-4)

### Step 4

Test mode: [automatic][MANUAL]

Get the current elements nearest ancestor with its display style set to block.
Get any text from this ancestor, including shadow dom text and assign it to variable T1.

To prepare the element for presentation to the user, all calculated CSS properties of the element must be stored and its child elements must be removed.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Element containing background images without child elements but with previously calculated CSS properites applied.
| Question             | Does T1 sufficiently describe the element?
| Help                 | If the element shows content, which is redundant T1, answer 'Yes'. Otherwise, or if the element provides any functionality, answer 'No'.
| Requir               | If no, could you suggest a sufficient textual alternative?
| Requires context     | yes
| Requires Interaction | yes

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-css-image
| ID       | SC1-1-1-css-image-pass4

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-css-image
| ID       | SC1-1-1-css-image-fail1
| Error    | The image added by CSS is not decorative and not described in adjacent text.
| Info     | Suggestions for texual alternative: {collection of repair-answers}

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
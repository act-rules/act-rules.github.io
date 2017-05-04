---
rule_id: SC1-1-1-css-image
name: CSS background decorative
test_mode: semi-automatic
environment: Web Browser

success_criterion:
- 1.1.1 # Non-text Content (level A)

authors:
- Frank Berker
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

## Test procedure

### Selector

Select all elements that has one or more of the following properties, containing one or more URIs:

- `object.style.background.match(url)`
- `object.style.backgroundImage.match(url)`
- `object.style.listStyle.match(url)`
- `object.style.listStyleImage.match(url)`

*Note that the computed style has to be analyzed. Depending on the rendering technology these can be retrieved by using `runtimeStyle`, `currentStyle` or `getComputedStyle`.*

### Step 1

Check if the computed `backgroundRepeat` property is set and its value is other than no-repeat.

if yes, return [step1-pass](#step1-pass)

else, continue with [step 2](#step-2)

### Step 2

Check if the height of all images added by the background-property is less or equals 5 pixels or its width is less or equals 3 pixels.

if yes, return [step2-pass](#step2-pass)

else, continue with [step 3](#step-3)

### Step 3

Check if the element is really used for solely decorative purposes.

To prepare the element for presentation to the user, all calculated CSS properties of the element must be stored and its child elements must be removed.

**User Input Question:**

| Property     | Value
|--------------|---------
| highlight    | Element containing background images without child elements but with previously calculated CSS properites applied.
| question     | Is this image solely for decorative purposes?
| help         | Answer with 'Yes', if it is a decorative image such as a separator, line or menu-background solely used for layout purposes or an image that doesn't convey information useful for understanding the content of the page.
| context      | yes
| user_profile | Requires sight

if yes, return [step3-pass](#step3-pass)

else continue with [step 4](#step-4)

### Step 4

Get the current elements nearest ancestor with its display style set to block.
Get any text from this ancestor, including shadow dom text and assign it to variable T1.

To prepare the element for presentation to the user, all calculated CSS properties of the element must be stored and its child elements must be removed.

**User Input Question:**

| Property     | Value
|--------------|---------
| highlight    | Element containing background images without child elements but with previously calculated CSS properites applied.
| question     | Does T1 sufficiently describe the element?
| help         | If the element shows content, which is redundant T1, answer 'Yes'. Otherwise, or if the element provides any functionality, answer 'No'.
| repair       | If no, could you suggest a sufficient textual alternative?
| user_profile | Requires sight
| context      | yes
| interaction  | yes

if yes, return [step4-pass](#step4-pass)

else return [step4-fail](#step4-fail)

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:{{ page.rule_id }}
| subject  | *the selected element*
| mode     | auto-wcag:{{ page.test_mode }}
| result   | <One TestResult from below>

### step1-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step2-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step3-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step4-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step4-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | The image added by CSS is not decorative and not described in adjacent text.
| info        | Suggestions for textual alternative: {collection of repair-answers}

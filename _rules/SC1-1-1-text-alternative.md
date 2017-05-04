---
rule_id: SC1-1-1-text-alternative
name: Provision of short text alternative
test_mode: semi-automatic
environment: Web Browser

success_criterion:
- 1.1.1 # Non-text Content (level A)

authors:
- Frank Berker
---

## Description

This test checks that non-text elements conveying information are providing sufficient textual alternatives or, if purely decorative, are hidden from assistive technologies.

## Background

- [WAI-ARIA 1.0 - Text Alternative Computation](http://www.w3.org/TR/2014/REC-wai-aria-20140320/roles#textalternativecomputation)
- [ARIA6: Using aria-label to provide labels for objects](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/ARIA6)
- [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/ARIA10)
- [F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F38)
- [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F30)
- [F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image") for images that should be ignored by assistive technology](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F39)
- [F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute on img elements, area elements, and input elements of type "image"](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F65)
- [G196: Using a text alternative on one item within a group of images that describes all items in the group](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G196)
- [H2: Combining adjacent image and text links for the same resource](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/H2)
- [H30: Providing link text that describes the purpose of a link for anchor elements](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/H30)
- [H37: Using alt attributes on img elements](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/H37)
- [H53: Using the body of the object element](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/H53)
- [H67: Using null alt text and no title attribute on img elements for images that AT should ignore](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/H67)

## Assumptions

- The techniques used for providing a textual alternative are accessibility supported. For more information read  [Accessibility Support][ACCSUP].
- All elements are contained in the mark-up code in the examined web page snapshot. [F20: Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F20) is not tested.
- Groups of images consist of `img` elements that are adjacent to each other and not wrapped in containers.
- The smallest readable font can be displayed on a matrix with a height of 5 and a width of 3. Smaller elements are considered decorative automatically.

## Test procedure

### Selector

Select all elements that match the following XPATH selector(s):

- `//*[self::img` or
- `self::input[@type="image"]` or
- `self::area or self::embed or self::object]`

### Step 1: check element type (F65)

Check if the element is of type `<img>`,`<area>` or `input[type=”image”]`

if yes, continue with [Step 2: check mandatory attributes (F65)](#step-2-check-mandatory-attributes-f65)

else continue with [Step 8: compute text alternative](#step-8-compute-text-alternative)

### Step 2: check mandatory attributes (F65)

Check if one of the following attributes is present: `aria-labelledby` with valid destinations or `alt` , `aria-label`, `title`.

if yes, continue with [Step 3: check for img siblings (ARIA10 and G196)](#step-3-check-for-img-siblings-aria10-and-g196)

else return [step2-fail](#step2-fail)

### Step 3: check for img siblings (ARIA10 and G196)

Check if the selected element is an `img` element and has adjacent siblings of type `img`.

if yes, continue with [Step 4: ask for informational or functional group of images (ARIA10 and G196)](#step-4-ask-for-informational-or-functional-group-of-images-aria10-and-g196)

else continue with [Step 8: compute text alternative](#step-8-compute-text-alternative)

### Step 4: ask for informational or functional group of images (ARIA10 and G196)

**User Input Question:**

| Property     | Value
|--------------|---------
| highlight    | Parent element containing group of images
| question     | Does this combination of images provide information or functionality?
| help         | An example for an informative group of images is the combination of five stars to display a rating-result.
| user_profile | Requires sight
| context      | yes
| interaction  | no

if yes, continue with [Step 5: check for aria-labelledby implementation (ARIA10)](#step-5-check-for-aria-labelledby-implementation-aria10)

else continue with [Step 8: compute text alternative](#step-8-compute-text-alternative)

### Step 5: check for aria-labelledby implementation (ARIA10)

Check if the parent element of the current group has `role="img"` and an `aria-labelledby` attribute.

if yes, continue with [Step 6: ask if sufficiently described by textual alternative (ARIA10)](#step-6-ask-if-sufficiently-described-by-textual-alternative-aria10)

else continue with [Step 7: ask if sufficiently described by textual alternative (G196)](#step-7-ask-if-sufficiently-described-by-textual-alternative-g196)

### Step 6: ask if sufficiently described by textual alternative (ARIA10)

Concatenate the results of [Text Alternative Computation][TXTALT] Algorithm run on all elements referenced in the `aria-labelledby` attribute and assign it to variable T1.

All items of the group should be removed from the set of selector-matches after this step.

**User Input Question:**

| Property     | Value
|--------------|---------
| highlight    | Parent element containing group of images
| question     | Does T1 sufficiently describe the group of images?
| help         | If the images contribute meaning to the page or provide any functionality or convey information additional to the pages text, this must be described. Please refer to the [explanations concerning sufficient short text alternatives](https://www.w3.org/community/auto-wcag/wiki/Sufficient_short_text_description) for further information.
| user_profile | Requires sight
| repair       | If no, could you suggest a sufficient textual alternative?
| context      | yes
| interaction  | no

if yes, return [step6-pass](#step6-pass)

else return [step6-fail](#step6-fail)

### Step 7: ask if sufficiently described by textual alternative (G196)

Concatenate the results of [Text Alternative Computation][TXTALT] Algorithm run on all images and assign it to variable T1.

All items of the group should be removed from the set of selector-matches after this step.

**User Input Question:**

| Property     | Value
|--------------|---------
| highlight    | Parent element containing group of images
| question     | Does T1 sufficiently describe the group of images?
| help         | If the images contribute meaning to the page or provide any functionality or convey information additional to the pages text, this must be described. Please refer to the [explanations concerning sufficient short text alternatives](https://www.w3.org/community/auto-wcag/wiki/Sufficient_short_text_description) for further information.
| user_profile | Requires sight
| repair       | If no, could you suggest a sufficient textual alternative?
| context      | yes
| interaction  | no

if yes, return [step7-pass](#step7-pass)

else return [step7-fail](#step7-fail)

### Step 8: compute text alternative

Use the [Text Alternative Computation][TXTALT] Algorithm to compute the textual alternative provided and assign it to variable T1.

If T1 is empty and the current element is an `<img>`

continue with [Step 9: check if child of anchor (H2)](#step-9-check-if-child-of-anchor-h2)

else if T1 is empty and the current element is NOT an `<img>`

continue with [Step 11: check dimensions (no text alternative)](#step-11-check-dimensions-no-text-alternative)

else if T1 is NOT empty

continue with [Step 13: check text alternative validity (F30 and F39)](#step-13-check-text-alternative-validity-f30-and-f39)

### Step 9: check if child of anchor (H2)

Check if the `img` is child of an `<a>` element.

If yes, continue with [Step 10: check for anchor text (H2)](#step-10-check-for-anchor-text-h2)

else continue with [Step 11: check dimensions (no text alternative)](#step-11-check-dimensions-no-text-alternative)

### Step 10: check for anchor text (H2)

Note: The `img` has no textual alternative at this test step.

Check if the parent anchor element or any of its children contains text.

if yes, return [step10-pass](#step10-pass)

else return [step10-fail](#step10-fail)

### Step 11: check dimensions (no text alternative)

Check if the elements height is less or equal 5px or the elements width is less or equal 3px.

if yes, return [step11-pass](#step11-pass)

else Continue with [Step 12: ask if decorative (no text alternative)](#step-12-ask-if-decorative-no-text-alternative)

### Step 12: ask if decorative (no text alternative)

**User Input Question:**

| Property     | Value
|--------------|---------
| highlight    | Current element
| question     | Is this element solely for decorative purposes?
| help         | Answer with 'Yes', if it is a decorative element such as a spacer, line or menu-background solely used for layout purposes or an eye-catching element that don't convey information useful for understanding the content of the page.
| user_profile | Requires sight
| repair       | If no, could you suggest a sufficient textual alternative?
| context      | yes
| interaction  | no

if yes, return [step12-pass](#step12-pass)

else return [step12-fail](#step12-fail)

### Step 13: check text alternative validity (F30 and F39)

Use the [Validate Text Alternative][ALT_OK] algorithm to check if the textual alternative value is [non-empty][NEMPTY], as defined (contain 2 or more characters that are not white space characters or punctionmarks), not a filename, an URL or a placeholder text.

if valid, continue with [Step 14: check dimensions (valid text alternative) (F38)](#step-14-check-dimensions-valid-text-alternative-f38)

else return [step13-fail](#step13-fail)

### Step 14: check dimensions (valid text alternative) (F38)

Check if the elements height is less or equal 5px or the elements width is less or equal 3px.

if yes, continue with [Step 16: check for empty alt (F38)](#step-16-check-for-empty-alt-f38)

else continue with [Step 15: ask if decorative (valid text alternative) (F38)](#step-15-ask-if-decorative-valid-text-alternative-f38)

### Step 15: ask if decorative (valid text alternative) (F38)

**User Input Question:**

| Property     | Value
|--------------|---------
| highlight    | Current element
| question     | Is this element solely for decorative purposes?
| help         | Answer with 'Yes', if it is a decorative element such as a spacer, line or menu-background solely used for layout purposes or an eye-catching element that don't convey information useful for understanding the content of the page.
| user_profile | Requires sight
| repair       | If no, could you suggest a sufficient textual alternative?
| context      | yes
| interaction  | no

if yes, continue with [Step 16: check for empty alt (F38)](#step-16-check-for-empty-alt-f38)

else continue with [Step 17: ask if sufficiently described by textual alternative](#step-17-ask-if-sufficiently-described-by-textual-alternative)

### Step 16: check for empty alt (F38)

*Note: The image has a textual alternative at this test step.*

If the current element is an `img`, check, if an empty `alt` attribute or `role="presentation"` is provided.

if yes, return [step16-pass](#step16-pass)

else return [step16-fail](#step16-fail)

### Step 17: ask if sufficiently described by textual alternative

**User Input Question:**

| Property     | Value
|--------------|---------
| highlight    | Current element
| question     | Does the textual alternative T1 sufficiently describe the element?
| help         | If the element contributes meaning to the page or provides any functionality or conveys information additional to the pages text, this must be described. Please refer to the [explanations concerning sufficient short text alternatives](https://www.w3.org/community/auto-wcag/wiki/Sufficient_short_text_description) for further information.
| user_profile | Requires sight
| repair       | If no, could you suggest a sufficient textual alternative?
| context      | yes
| interaction  | no

if yes, return [step17-pass](#step17-pass)

else continue with [[#Step 18: ask if sufficiently described by adjacent text]]

### Step 18: ask if sufficiently described by adjacent text

**User Input Question:**

| Property     | Value
|--------------|---------
| highlight    | Current element in context
| question     | Is the element sufficiently described by adjacent text?
| help         | If the element shows content, which is redundant to real text nearby, answer 'Yes'. Otherwise, or if the element provides any functionality, answer 'No'. Please refer to the [explanations concerning sufficient short text alternatives](https://www.w3.org/community/auto-wcag/wiki/Sufficient_short_text_description) for further information.
| user_profile | Requires sight
| repair       | If no, could you suggest a sufficient textual alternative?
| context      | yes
| interaction  | no

if yes, return [step18-pass](#step18-pass)

else return [step18-fail](#step18-fail)

- Activity diagram of transitions between steps 1 to 18
[[File:1.1.1. test step overview.png|frameless|1046px|Graphical alternative of steps one to eighteen]]
- Activity diagram of test steps related to techniques and failures
[[File:1.1.1. text alternative.png|frameless|1069px|Detailed graphical alternative to text above]]

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:{{ page.rule_id }}
| subject  | *the selected element*
| mode     | auto-wcag:{{ page.test_mode }}
| result   | <One TestResult from below>

### step2-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | The element must provide one of the following attributes: `alt` , `aria-label`, `title` or a `aria-labelledby`.

### step6-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step6-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Textual alternative T1 does not sufficiently describe the group of images.
| info        | Suggestions for textual alternative: {collection of repair-answers}

### step7-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step7-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Textual alternative T1 does not sufficiently describe the group of images.
| info        | Suggestions for textual alternative: {collection of repair-answers}

### step10-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step10-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | No text alternative for image contained in link without link text.

### step11-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step12-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step12-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | No sufficiently descriptive textual alternative for an element, which is not pure decoration.
| info        | Suggestions for textual alternative: {collection of repair-answers}

### step13-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Textual alternative is not valid.
| info        | The textual alternative is a filename, an URL, a placeholder text or does not contain 2 or more characters that are not white space characters or punctionmarks.

### step16-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step16-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Image assessed as decorative cannot be ignored by assistive technologies
| info        | An empty `alt` attribute or `role=”presentation”` must be set.

### step17-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step18-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step18-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Textual alternative T1 is not sufficiently descriptive and the element is also not described in adjacent text.
| info        | Suggestions for textual alternative: {collection of repair-answers}

[ACCSUP]: ../pages/accessibility-support.html
[TXTALT]: ../pages/algorithms/text-alternative-compute.html
[ALT_OK]: ../pages/algorithms/validate-text-alt.html
[NEMPTY]: ../pages/algorihms/none-empty.html
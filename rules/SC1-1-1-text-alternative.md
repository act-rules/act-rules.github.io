
# SC1-1-1-text-alternative

This test belongs to [[1.1.1 Non-text Content]].


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
- The techniques used for providing a textual alternative are accessibility supported. For more information read  [[Accessibility Support]].
- All elements are contained in the mark-up code in the examined web page snapshot. [F20: Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F20) is not tested.
- Groups of images consist of `img` elements that are adjacent to each other and not wrapped in containers.
- The smallest readable font can be displayed on a matrix with a height of 5 and a width of 3. Smaller elements are considered decorative automatically.


## Test properties
| Property          | Value
|-------------------|----
| Test name         | Provision of short text alternative
| Success Criterion | [[1.1.1 Non-text Content]]
| Test mode         | SemiAuto
| Test environment  | Rendered page
| Test subject      | Web page state
| User expertise and skills | No prior knowledge
| User profile      | Requires sight


## Test procedure

### Selector
Test method: [automatic][earl:automatic]

`//*[self::img or self::input[@type="image"] or self::area or self::embed or self::object]`


### Step 1: check element type (F65)
Test method: [automatic][earl:automatic]

Check if the element is of type `<img>`,`<area>` or `input[type=”image”]`

if yes, continue with [[#Step 2: check mandatory attributes (F65)]]

else continue with [[#Step 8: compute text alternative]]

### Step 2: check mandatory attributes (F65)
Test method: [automatic][earl:automatic]

Check if one of the following attributes is present: ` aria-labelledby` with valid destinations or ` alt` , ` aria-label`, ` title`.

if yes, continue with [[#Step 3: check for img siblings (ARIA10 and G196)]]

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-failed1
| Error    | The element must provide one of the following attributes: ` alt` , ` aria-label`, ` title` or a ` aria-labelledby`.

### Step 3: check for img siblings (ARIA10 and G196)
Test method: [automatic][earl:automatic]

Check if the selected element is an `<img>` element and has adjacent siblings of type `<img>`.

if yes, continue with [[#Step 4: ask for informational or functional group of images (ARIA10 and G196)]]

else continue with [[#Step 8: compute text alternative]]

### Step 4: ask for informational or functional group of images (ARIA10 and G196)
Test method: [automatic][earl:manual]

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Parent element containing group of images
| Question             | Does this combination of images provide information or functionality?
| Help                 | An example for an informative group of images is the combination of five stars to display a rating-result.
| Requires context     | yes
| Requires Interaction | yes

if yes, continue with [[#Step 5: check for aria-labelledby implementation (ARIA10)]]

else continue with [[#Step 8: compute text alternative]]

### Step 5: check for aria-labelledby implementation (ARIA10)
Test method: [automatic][earl:automatic]

Check if the parent element of the current group has `role="img"` and an `aria-labelledby` attribute.

if yes, continue with [[#Step 6: ask if sufficiently described by textual alternative (ARIA10)]]

else continue with [[#Step 7: ask if sufficiently described by textual alternative (G196)]]

### Step 6: ask if sufficiently described by textual alternative (ARIA10)
Test method: [automatic][earl:manual]

Concatenate the results of [[Text Alternative Computation]] Algorithm run on all elements referenced in the `aria-labelledby` attribute and assign it to variable T1.

All items of the group should be removed from the set of selector-matches after this step.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Parent element containing group of images
| Question             | Does T1 sufficiently describe the group of images?
| Help                 | If the images contribute meaning to the page or provide any functionality or convey information additional to the pages text, this must be described. Please refer to the [explanations concerning sufficient short text alternatives](https://www.w3.org/community/auto-wcag/wiki/Sufficient_short_text_description) for further information.
| Requir               | If no, could you suggest a sufficient textual alternative?
| Requires context     | yes
| Requires Interaction | yes

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-passed1

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-failed2
| Error    | Textual alternative T1 does not sufficiently describe the group of images.
| Info     | Suggestions for textual alternative: {collection of repair-answers}

### Step 7: ask if sufficiently described by textual alternative (G196)
Test method: [automatic][earl:manual]

Concatenate the results of [[Text Alternative Computation]] Algorithm run on all images and assign it to variable T1.

All items of the group should be removed from the set of selector-matches after this step.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Parent element containing group of images
| Question             | Does T1 sufficiently describe the group of images?
| Help                 | If the images contribute meaning to the page or provide any functionality or convey information additional to the pages text, this must be described. Please refer to the [explanations concerning sufficient short text alternatives](https://www.w3.org/community/auto-wcag/wiki/Sufficient_short_text_description) for further information.
| Requir               | If no, could you suggest a sufficient textual alternative?
| Requires context     | yes
| Requires Interaction | yes

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-passed2

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-failed3
| Error    | Textual alternative T1 does not sufficiently describe the group of images.
| Info     | Suggestions for textual alternative: {collection of repair-answers}

### Step 8: compute text alternative
Test method: [automatic][earl:automatic]

Use the [[Text Alternative Computation]] Algorithm to compute the textual alternative provided and assign it to variable T1.

If T1 is empty and the current element is an `<img>`

continue with [[#Step 9: check if child of anchor (H2)]]

else if T1 is empty and the current element is NOT an `<img>`

continue with [[#Step 11: check dimensions (no text alternative)]]

else if T1 is NOT empty

continue with [[#Step 13: check text alternative validity (F30 and F39)]]

### Step 9: check if child of anchor (H2)
Test method: [automatic][earl:automatic]

Check if the `img` is child of an `<a>` element.

If yes, continue with [[#Step 10: check for anchor text (H2)]]

else continue with [[#Step 11: check dimensions (no text alternative)]]

### Step 10: check for anchor text (H2)
Test method: [semi-automatic]

Note: The `img` has no textual alternative at this test step.

Check if the parent anchor element or any of its children contains text.

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-passed3

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-failed4
| Error    | No text alternative for image contained in link without link text.

### Step 11: check dimensions (no text alternative)
Test method: [semi-automatic]

Check if the elements height is less or equal 5px or the elements width is less or equal 3px.

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-passed4

else Continue with [[#Step 12: ask if decorative (no text alternative)]]

### Step 12: ask if decorative (no text alternative)
Test method: [automatic][earl:manual]

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Current element
| Question             | Is this element solely for decorative purposes?
| Help                 | Answer with 'Yes', if it is a decorative element such as a spacer, line or menu-background solely used for layout purposes or an eyecatching element that don't convey information useful for understanding the content of the page.
| Requir               | If no, could you suggest a sufficient textual alternative?
| Requires context     | yes

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-passed5

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-failed5
| Error    | No sufficiently descriptive textual alternative for an element, which is not pure decoration.
| Info     | Suggestions for textual alternative: {collection of repair-answers}

### Step 13: check text alternative validity (F30 and F39)
Test method: [automatic][earl:automatic]

Use the [[Validate Text Alternative]] algorithm to check if the textual alternative value is [non-empty](../definitions/non-empty.md), as defined (contain 2 or more characters that are not white spaaaaaace characters or punctionmarks), not a filename, an URL or a placeholder text.

if valid, continue with [[#Step 14:  check dimensions (valid text alternative) (F38)]]

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-failed6
| Error    | Textual alternative is not valid.
| Info     | The textual alternative is a filename, an URL, a placeholder text or does not contain 2 or more characters that are not white spaaaaaace characters or punctionmarks.

### Step 14:  check dimensions (valid text alternative) (F38)
Test method: [automatic][earl:automatic]

Check if the elements height is less or equal 5px or the elements width is less or equal 3px.

if yes, continue with [[#Step 16: check for empty alt (F38)]]

else continue with [[#Step 15: ask if decorative (valid text alternative) (F38)]]

### Step 15: ask if decorative (valid text alternative) (F38)
Test method: [automatic][earl:manual]

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Current element
| Question             | Is this element solely for decorative purposes?
| Help                 | Answer with 'Yes', if it is a decorative element such as a spacer, line or menu-background solely used for layout purposes or an eyecatching element that don't convey information useful for understanding the content of the page.
| Requir               | If no, could you suggest a sufficient textual alternative?
| Requires context     | yes

if yes, continue with [[#Step 16: check for empty alt (F38)]]

else continue with [[#Step 17: ask if sufficiently described by textual alternative]]

### Step 16: check for empty alt (F38)
Test method: [automatic][earl:automatic]

*Note: The image has a textual alternative at this test step.*

If the current element is an `img`, check, if an empty `alt` attribute or `role="presentation"` is provided.

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-passed6

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-failed7
| Error    | Image assessed as decorative cannot be ignored by assistive technologies
| Info     | An empty `alt` attribute or `role=”presentation”` must be set.

### Step 17: ask if sufficiently described by textual alternative
Test method: [automatic][earl:manual]

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Current element
| Question             | Does the textual alternative T1 sufficiently describe the element?
| Help                 | If the element contributes meaning to the page or provides any functionality or conveys information additional to the pages text, this must be described. Please refer to the [explanations concerning sufficient short text alternatives](https://www.w3.org/community/auto-wcag/wiki/Sufficient_short_text_description) for further information.
| Requir               | If no, could you suggest a sufficient textual alternative?
| Requires context     | yes
| Requires Interaction | yes

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-passed7

else continue with [[#Step 18: ask if sufficiently described by adjacent text]]

### Step 18: ask if sufficiently described by adjacent text
Test method: [automatic][earl:manual]

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Current element in context
| Question             | Is the element sufficiently described by adjacent text?
| Help                 | If the element shows content, which is redundant to real text nearby, answer 'Yes'. Otherwise, or if the element provides any functionality, answer 'No'. Please refer to the [explanations concerning sufficient short text alternatives](https://www.w3.org/community/auto-wcag/wiki/Sufficient_short_text_description) for further information.
| Requir               | If no, could you suggest a sufficient textual alternative?
| Requires context     | yes
| Requires Interaction | no

if yes, return

| Outcome  | Passed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-passed8

else return

| Outcome  | Failed
|----------|-----
| Testcase | SC1-1-1-text-alternative
| ID       | SC1-1-1-text-alternative-failed8
| Error    | Textual alternative T1 is not sufficiently descriptive and the element is also not described in adjacent text.
| Info     | Suggestions for texual alternative: {collection of repair-answers}

- Activity diagram of transitions between steps 1 to 18
[[File:1.1.1. test step overview.png|frameless|1046px|Graphical alternative of steps one to eighteen]]
- Activity diagram of test steps related to techniques and failures
[[File:1.1.1. text alternative.png|frameless|1069px|Detailed graphical alternative to text above]]



[earl:automatic]: ../earl/automatic.md
[earl:semiauto]: ../earl/semiauto.md
[earl:manual]: ../earl/manual.md
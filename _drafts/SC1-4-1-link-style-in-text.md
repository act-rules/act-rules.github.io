---
rule_id: SC1-4-1-link-style-in-text
name: Inline links are distinguishable
test_mode: automatic
environment: Web Browser

success_criterion:
- 1.4.1 # Use of Color (Level A)

authors:
- Wilco Fiers
---

## Description

This rule checks that links that are embedded in a block of text can be distinguished in a way that does not rely exclusively on color. If this is the case, the link can only pass if the color contrast is sufficient, and additional cues are given when the link receives focus or hover.

## Background

- [F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F73.html)
- [G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G183)
- [C15: Using CSS to change the presentation of a user interface component when it receives focus](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/C15:)
- [Color contrast (WCAG 2.0 definition)](http://www.w3.org/TR/WCAG20/#contrast-ratiodef)
- [Axe-core implementation of link-in-text-block](https://dequeuniversity.com/rules/worldspace/2.0/link-in-text-block)

## Assumptions

- This test assumes that the 3:1 contrast difference between text is minimal to what would be sufficient to meet WCAG 2.0. This value is part of technique G183, but is not specified in the 1.4.1 success criterion.
- This tests assumes that one of the following shorthand CSS properties (or the related expanded properties e.g. `background-color`) is used to make the link visually evident: `background`, `color`, `font`, or `text-decoration`.
- This test assumes that any change in font is sufficiently distinguishable, and that fonts are loaded when they are present.
- Use of a `border`, of 1 or more pixels, not set to none, and not with a color of transparent, is assumed to be sufficiently distinguishable

## Test procedure

*Note*: Tools only able to process HTML + CSS can implement the first two step and ignore step 3 through 4, returning 'cantTell' instead. A tool could ask the user to perform step 3 and 4 manually, in which case the test would be semi-automatic instead.

### Selector

1. Select all elements that matches the following CSS selector:

    a[href]:not(role), *[role=link]

2. Remove any elements who's `textContent` property is [non-empty][NEMPTY] text

3. Remove any elements who's nearest [block-like ancestor](#block-like-element) does NOT have:

    - [non-empty][NEMPTY] [rendered text][RNDTXT] that is NOT contained in any link, and which does not exclusively consist of [separator characters][separator-characters]

### Step 1: Initial state

Check that the link (or another element that contains all that link's content) has a distinguishing [style][DSSTYL], a [distinguishing border][DSBRDR], or a `background-image`.

If yes, return [step1-pass](#step1-pass)

Else continue with [Step 2](#step-2-link-contrast)

### Step 2: Link contrast

Determine `color` and `background-color` of the link and it's block-like ancestor. If the background-color is transparent, locate the closest underlying element that does have a `background-color` and use that value. (GetElementsFromPoint can be used for this.)

1. C1 = contrast difference of surrounding text `color` and link `color`

2. C2 = contrast difference surrounding text `background-color` and link `background-color`

If C1 or C2 is more than 3:1, continue with [Step 3](#step-3-focus-state)

Else continue with [Step 5][#step-5]

### Step 3: focus state

Give focus to the link.

Check that the focused link has a [distinguishing border][DSBRDR], a `background-image`, or a [distinguishing style][DSSTYL].

If yes, continue with [Step 4](#step-4-hover-state)

Else continue with [Step 5][#step-5]

### Step 4: Hover state

Remove the focus from the link.

Move the mouse pointer to the center of the link.

Check that the focused link has a [distinguishing border][DSBRDR], a `background-image`, or a [distinguishing style][DSSTYL].

If yes, return [step4-pass](#step4-pass)

Else continue with [Step 5][#step-5]

### Step 5

If the user in not available, return [step5-cannottell](#step5-cannottell)

Else, give the user the following question:

| Property     | Value
|--------------|---------
| Highlight    | The selected element
| Question     | Can this link be distinguished from the rest of the text, without relying on the color alone.
| Help         | Links can be made distinguishable in many ways including underlines, the addition of a link icon, or other style changes.
| User profile | Requires sight
| context      | yes

if yes, return  [step5-pass](#step5-pass)

else, return [step5-fail](#step5-fail)

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

### step4-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed

### step5-cannottell

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | CannotTell

### step5-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed

### step5-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | The link is not sufficiently distinguishable from the surrounding text.

## Algorithms

### Block-like element

From the element, get the computed CSS value of the `display` property.

Check that the value is not `inline` or `ruby` or starts with `inline-` or `ruby-`.

If yes, the element is a block-like element.

### Distinguishing Border

Look at the `width`, `style`, and `color` of the `border-top`, `border-bottom` or `outline`.

For one of these to be a distinguishing border, all the following must be true:

- The `*-width` is greater than 0
- The `*-style` is not set to `none`
- The `*-color` is not `transparent`

If either `border-top`, `border-bottom` or `outline` is distinguishable, the link has a distinguishing border.

### Distinguishing Style

Next, compare the style properties `font-family`, `font-weight`, `font-style`, `text-decoration` of the link, to that of the block-like ancestor.

If any of the properties have a different value for the one than for the other, the style is distinguishable.

### Separator characters

A separator character is a character that is used to separate links. This practice is common in things like breadcrumb trails and footers. The following characters are considered separator characters: `/`, `\`, `|` `>`, `<`, `-`, `,` `+`.

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
[NEMPTY]: ../pages/algorithms/none-empty.html
[RNDTXT]: ../pages/algorithms/rendered-text.html
[DSBRDR]: #distinguishing-border
[DSSTYL]: #distinguishing-style
---
rule_id: SC1-4-1-link-in-text-style
name: Inline links are distinguishable
test_mode: automatic

criteria:
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

## Assumptions

- This test assumes that the 3:1 contrast difference between text is minimal to what would be sufficient to meet WCAG 2.0. This value is part of G183 technique, but is not specified in the 1.4.1 success criterion.
- This tests assumes that one of the following shorthand CSS-properties (or the related expanded properties) is used to make the link visually evident: `background`, `border`, `color`, `font`, or `text-decoration`.
- This test assumes that any use of border will make links sufficiently distinguishable
- This test assumes that the different font is presented to the user.
- Use of a `border`, of 1 or more pixels, not set to none, and not with a color of transparent, is assumed to be distinguishable

## Test properties

| Property          | Value
|-------------------|----
| Test name         | Inline links are distinguishable
| Success Criterion | 1.4.1 Use of Color
| Test mode         | Automatic
| Test environment  | Remote Controlled User Agent
| Test subject      | Single web page or DOM document fragment

*Note*: Tools only able to process HTML + CSS can implement the first two step and ignore step 3 through 4, returning 'cantTell' instead. A tool could ask the user to perform step 3 and 4 manually, in which case the test would be semi-automatic instead.

## Test procedure

*Note*: This rule requires applying focus and hover. The page should be restored to it's original test state after this rule hs completed.

### Selector

Test mode: [automatic][AUTO]

1. Select each element that matches `a[href]:not(role), *[role=link]` 

2. From this, take elements that meet the following requirements:

  - `link.textContent` is [non-empty][NEMPTY] text
  - Its nearest ancestor that is a [block-like element](#block-like-element) has:
    - A different text color than the text color of the link, AND
    - [rendered text][RNDTXT] that is not contained in the link.

### Step 1: Initial state

Test mode: [automatic][AUTO]

Check that the link has a [distinguishing border][DSBRDR], a `background-image`, or a [distinguishing style][DSSTYL].

If yes, return

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.name }}
| ID       | {{ page.name }}-pass1

Else continue with [Step 2](#step-2-link-contrast)

### Step 2: Link contrast

Test mode: [automatic][AUTO]

Determine `color` and `background-color` of the link and it's block-like ancestor. If the background-color is transparent, use getElementsFromPoint to locate the closest underlying element that does have a `background-color` and use that value.

1. C1 = contrast difference of surrounding text `color` and link `color`

2. C2 = contrast difference surrounding text `background-colo` and link `background-color`

If C1 or C2 is more than 3:1, continue with [Step 3](#step-3-focus-state)

Else, return:

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.name }}
| ID       | {{ page.name }}-fail1
| Error    | The link is not sufficiently distinguishable from the surrounding text

### Step 3: focus state

Test mode: [automatic][AUTO]

Give focus to the link.

Check that the focused link has a [distinguishing border][DSBRDR], a `background-image`, or a [distinguishing style][DSSTYL].

If yes, continue with [Step 4](#step-4-hover-state)

Else, return:

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.name }}
| ID       | {{ page.name }}-fail2
| Error    | The link is not sufficiently distinguishable from the surrounding text when it receives focus.

### Step 4: Hover state

Test mode: [automatic][AUTO]

Remove the focus from the link.

Move the mouse pointer to the center of the link.

Check that the focused link has a [distinguishing border][DSBRDR], a `background-image`, or a [distinguishing style][DSSTYL].

If yes, return:

| Outcome  | Passed
|----------|-----
| Testcase | {{ page.name }}
| ID       | {{ page.name }}-pass2

Else, return:

| Outcome  | Failed
|----------|-----
| Testcase | {{ page.name }}
| ID       | {{ page.name }}-fail3
| Error    | The link is not sufficiently distinguishable from the surrounding text when it is hovered over with the mouse pointer.

## Algorithms

### Block-like element

From the element, get the computed CSS value of the `display` property.

Check that the value is not `inline` or starts with `inline-`.

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

If any of the properties have a different value for the one then for the other, the style is distinguishable.

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual
[NEMPTY]: ../pages/algorithms/none-empty.html
[RDNTXT]: ../pages/algorithms/rendered-text.html
[DSBRDR]: #distinguishing-border
[DSSTYL]: #distinguishing-style
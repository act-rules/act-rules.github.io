---
rule_id: SC1-4-3-text-bg-contrast
name: Text-background contrast
test_mode: semi-automatic
environment: web browser

success_criterion:
- 1.4.3 # Contrast (Minimum) (level AA)

authors:
- Emma Pratt Richens
- Rob Fentress
---

## Description

This test checks that the text nodes on a page contrast sufficiently with the background, gradient or image behind them.

### Background

- [Understanding SC 1.4.3](https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140311/visual-audio-contrast-contrast.html)
- [Contrast (Minimum) Understanding SC 1.4.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)
- [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/TR/WCAG20-TECHS/G18)
- [G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/TR/WCAG20-TECHS/G145)
- [F24: specifying foreground colors without specifying background colors](https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F24) 
- [F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)](https://www.w3.org/TR/WCAG20-TECHS/F83.html)

<!-- Should the F24 scenario be kept separate from the rest of the colour contrast stuff ... it is relevant and uses same selectors -->

## Assumptions
- Code validates to a published grammar (eg. 4.1.1 and 4.1.2)
- Only checking HTML text nodes, not text in images
- Requires a rendered page (manual steps will require sight)
- Only checking text nodes on a single page at a time


## Test procedure

<!--
Contrast of links to text and visited links etc is a separate criteria.

For now this ruleset does not cover text in images, except SVG, or text in canvas or video elements or WebGL or Flash etc.

Suggested structure for this rule:
1. locate text node and determine if there is a specified color
2. locate background node and determine id there is a specified background color (parent or getElementsFromPoint)
3. if one exists, but not other, fail against F24
4. if both exist, determine if they contrast sufficiently (not sure on pass/fail if both are default)
5. determine if any other styles are applied that would affect color and require further testing

What styles could impact on colors? (Wilco: deal with basic stuff first and note this for future work)
- text/bg gradients, text/bg opacity, text/bg filters, text aliasing?, text borders, text shadows, text masks, bg images (Frank: shared http://www.brandwood.com/a11y/)
 
What about canvas or video behind text? (Wilco: start with deferring to a human, looking deeper can happen later)
Should this also apply to PDF? (Wilco: no, only HTML, and probably not SVG - be explicit in assumptions/selector)

-->


### Selector

Select elements that match the following XPath or Javascript selector:
* //\*[text()]
* node.nodeType = 3;


### Step 1

Determine if the text node has an applied/computed "color" property (ie. not default). Record the text-color value; unknown or null if default.

Continue with [step 2](#step-2)

### Step 2

Determine if the parent, or another layer behind the text node, has an applied/computed "background-color" (ie. not default). Record the background-color value; unknown or null if default.

<!-- Note: Determining which element is providing a background to the text is not as straight-forward as looking at the parent and up the ancestry tree, because sibling elements can be positioned and layered over one another. Presuming there is a programmatic way to list the layers (as 3D view can) ... possibly getElementsFromPoint : https://twitter.com/ChromiumDev/status/576081837165912064 -->

Continue with [step 3](#step-3)

### Step 3

Check if one recorded value is unknown or null, while the other is a color.

if yes, return [step3-fail](#step3-fail)
else, continue with [step 4](#step-4)

### Step 4

Check if the text-color and background-color contrast sufficiently for the size and boldness of text. Record the contrast-ratio.

<!-- Note: this will need some detail about ratios, text sizes, etc. -->

if no, return [step4-fail](#step4-fail)
else, continue with [step 5](#step-5)

### Step 5

Determine if any other styles are applied to the text node or background element would affect the colour contrast. Record text-styles and background-styles. (see comments)

<!-- Note: this is getting into the complexity of the scenarios in the comments below. For now, deferring this to a future version of the rule. In future, this could clarify on what size border or shadow impacts on whether the style or background needs to be contrasted with when not matching text color, etc. 
     ACTION: consider passing this to a user instead of giving a warning
-->

if yes, return [step5-warning](#step5-warning)
else, return [step 5-pass](#step-5-pass)


## Outcome

### step3-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Text node or background has color property, while the other does not (see F24).

### step4-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Text node color property and background color property do not contrast sufficiently (for the text size and weight).

### step5-warning

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Warning
| description | Further contrast tests are needed for text node and background, because of [text-styles] and/or [background-styles].

### step5-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Pass
| description | Text node and background appear to contrast sufficiently: [contrast-ratio].


<!--

## Scenarios (visible notes during rule development, further coded comments visible in raw/edit views)

### Scenario 1 - text color and background-color
Test method: [automatic]

- determine the computed text color, size and weight.
- determine the relevant layer (parent/ancestor/other) behind the text with a computed background-color.
- determine if that layer is still positioned behind the text (text not re-positioned).
- determine that layer's background color.
- determine the contrast ratio required. 
    - If bold and font-size*72/96 is less than 14, then contrast ratio required is greater than or equal to 4.5
    - If not bold and font-size*72/96 is less than 18, then contrast ratio required is greater than or equal to 4.5
    - Otherwise contrast ratio required is greater than or equal to 3.0
- determine the contrast ratio of the text color and background color.
- determine if it meets the required contrast ratio.

(an unstyled page may pass this, as should a page where an image fails to load or a newer style is unsupported)


### Scenario 2 - element behind text also has a programmatic gradient
Test method: [automatic]

- determine if the nearest ancestor or other element has a programatic gradient background.
- determine the direction of the gradient.
- determine the background color closest to the text in the direction where the shade is most similar to the text color.
- determine the contrast ratio of the text color and this background color.
- determine if it meets the required contrast ratio. **Is this sufficient?  This only determines one portion of the contrast**


### Scenario 3 - text has properties that could be considered the background
Test method: [automatic]

- determine if the text has a border and/or shadow.
- determine the width of border/shadow above/below/left/right of the text.
- determine if all widths are greater than 1px.
- determine the color of the border/shadow.
- determine the contrast ratio of the text color and the border/shadow color.
- determine if it meets the required contrast ratio.

(a text border/shadow of sufficient width may help provide sufficient contrast)


### Scenario 4 - the background (whatever it is) has opacity less than solid
Test method: [semiauto]

- determine if any of the background, gradient, border or shadow colors are semi-opaque.
- when comparing with the text color, calculate the semi-opaque color as though the text color were behind it.
- determine the contrast ratio of the text color and the calculated semi-opaque color.
- determine if it meets the required contrast ratio.

(semi-opaque backgrounds are often employed to help provide sufficient contrast with a variable background such as an image, where the poorest contrast would be where part of that variable background is the same shade as the text color)


### Scenario 5 - the background is varied, such as an image
Test method: [manual]

- determine if background behind the text is an image (or canvas or HTML video???).
- determine that there is no border/shadow/semi-opaque layer to help with contrast.
- determine the color of a suitable number of samples from the image beside the text.
- determine the contrast ratio of the text color and each of these sampled colors.
- determine if it meets the required contrast ratio.

(an image background must still have a background color behind it with the required color contrast, in case the image does not load)

-->

...

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual

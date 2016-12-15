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

<!-- the F24 scenario should probably be kept separate from the rest of the colour contrast stuff ... but would these still need to be checked for suitable contrast?? -->

## Assumptions
- Code validates to a published grammar (eg. 4.1.1 and 4.1.2)
- Only checking HTML text nodes, not text in images
- Requires a rendered page (manual steps will require sight)
- Only checking text nodes on a single page at a time


## Test procedure

<!--
Contrast of links to text and visited links etc is a separate criteria.

For now this ruleset does not cover text in images, except SVG, or text in canvas or video elements or WebGL or Flash etc.

Not sure about the order of the steps as there is no one situation that would pass without checking the others. Wonder if this would mean changing how things are grouped into:
1. determine text stuff.
2. determine ratio required.
3. determine what to contrast it with (and if test can be automated).
4. check if requirement is met.

 - gradient text?  text masks?  filters on text/bg rendered or not? - Wilco: deal with basic stuff first and note this for future work.
 - not aliased text for pixel to pixel comparison with background image, return percentage of checks that pass, is this too detailed an approach? - Frank: shared http://www.brandwood.com/a11y/ which grabs a selection of colours from the bg image and compares with text colour and produces a range of results.
 - what about canvas or video behind text? - Wilco: start with deferring to a human, looking deeper can happen later.
 - Should this also apply to PDF? - Wilco: no, only HTML (and probably not SVG - be explicit in assumptions/selector).
-->


### Selector

Select all elements that match the following XPath or Javascript selector:
* //\*[text()]
* node.nodeType = 3;


### Step 1

Check if the text node has an applied/computed color property (ie. not default).

if no, continue with [step 2](#step-2)
else, continue with [step 3](#step-3)

<!-- Note: Determining which element is providing a background to the text is not as straight-forward as looking at the parent and up the ancestry tree, because sibling elements can be positioned and layered over one another. Presuming there is a programmatic way to look through the layers in way similar to what might generate a 3-D page view. -->

### Step 2 (text node is default)

Check if the parent, or another layer behind the text node, has an applied/computed background-color (ie. not default). 

if yes, return [step2-fail](#step2-fail)
else, continue with [step 5](#step-5)

<!-- Note: If we could pass a variable from Step 1 to Step 2, Step 2 and 3 that make the same check could become one step. -->

### Step 3 (text node is colored)

Check if the parent, or another layer behind the text node, has an applied/computed background-color (ie. not default). 

if no, return [step3-fail](#step3-fail)
else, continue with [step 4](#step-4)

### Step 4

Check if the colors applied to text and background contrast sufficiently for the size and boldness of text. <!-- Note: this will need some detail about ratios, text sizes, etc. -->

if yes, return [step4-fail](#step4-fail)
else, continue with [step 5](#step-5)

### Step 5

Check if something else is applying color to background or text. <!-- Note: getting into Scenario 2 - should this move to a different rule? Or stay here? -->


## Outcome

### step2-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Text node has no color property, but there is a background-color set on a layer behind it.

### step3-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Text node has color property, but there is no background-color set on a layer behind it.

### step4-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | Text node color property and background-color property do not contrast sufficiently (for the text size and weight).



---

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


...

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual

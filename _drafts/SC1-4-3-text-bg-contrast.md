---
rule_id: SC1-4-3-text-bg-contrast
name: Text-background contrast
test_mode: semi-automatic

criteria:
- 1.4.3 # Contrast (Minimum) (level AA)

authors:
- Emma Pratt Richens
- Rob Fentress
---

## Description

This test checks that the text content on a page contrasts sufficiently with the background, gradient or image behind it.

## Background

- [Understanding SC 1.4.3](https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140311/visual-audio-contrast-contrast.html)
- [Contrast (Minimum) Understanding SC 1.4.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)
- [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/TR/WCAG20-TECHS/G18)
- [G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/TR/WCAG20-TECHS/G145)
- [F24: specifying foreground colors without specifying background colors](https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F24)
- [F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)](https://www.w3.org/TR/WCAG20-TECHS/F83.html)

## Assumptions
- Code validates to a published grammar (eg. 4.1.1 and 4.1.2)

## Test properties
| Properties        | Values
|-------------------|-----------
| Test name         | Text-background contrast
| Success criterion | 1.4.3 Contrast minimum
| Test mode         | semiautomated
| Test environment  | Rendered page
| Test Subject      | Single page
| User profile      | Requires sight

## Test procedure

<!---
Contrast of links to text and visited links etc is a separate criteria.

For now this ruleset does not cover text in images, except SVG.

Not sure about the order of the steps as there is no one situation that would pass without checking the others. Wonder if this would mean changing how things are grouped into:
1. determine text stuff.
2. determine ratio required.
3. determine what to contrast it with (and if test can be automated).
4. check if requirement is met.
-->


### Selector
Test method: [automatic]

Find each text node within the page.
eg. node.nodeType = 3;
eg. //\*[text()]


For each text node:
Step 1
Does text node have a foreground color set if yes, step 2
Step 2
Does te a background color set

### Step 1
Test method: [automatic]

- determine the computed text color, size and weight.
- determine the nearest ancestor with a computed background color.
- determine if that ancestor is still positioned behind the text (text not re-positioned).
- determine that ancestor's background color.
- determine the contrast ratio required. 
    - If bold and font-size*72/96 is less than 14, then if contrast ratio is greater than or equal to 4.5
    - If not bold and font-size*72/96 is less than 18, then if contrast ratio is greater than or equal to 18 then it has a valid contrast ratio
- determine the contrast ratio of the text color and background color.
- determine if it meets the required contrast ratio.

(an unstyled page should pass this, as should a page where an image fails to load or a newer style is unsupported)


### Step 2
Test method: [automatic]

- determine if there is another element, eg a sibling (**could it be anything else, such as a child?**), positioned behind the text.
- determine that element's background color.
- determine the contrast ratio of the text color and this background color.
- determine if it meets the required contrast ratio.


### Step 3
Test method: [automatic]

- determine if the nearest ancestor or other element has a programatic gradient background.
- determine the direction of the gradient.
- determine the background color closest to the text in the direction where the shade is most similar to the text color.
- determine the contrast ratio of the text color and this background color.
- determine if it meets the required contrast ratio. **Is this sufficient?  This only determines one portion of the contrast**


###Step 4
Test method: [automatic]

- determine if the text has a border and/or shadow.
- determine the width of border/shadow above/below/left/right of the text.
- determine if all widths are greater than 1px.
- determine the color of the border/shadow.
- determine the contrast ratio of the text color and the border/shadow color.
- determine if it meets the required contrast ratio.

(a text border/shadow of sufficient width may help provide sufficient contrast)


###Step 5
Test method: [semiauto]

- determine if any of the background, gradient, border or shadow colors are semi-opaque.
- when comparing with the text color, calculate the semi-opaque color as though the text color were behind it.
- determine the contrast ratio of the text color and the calculated semi-opaque color.
- determine if it meets the required contrast ratio.

(semi-opaque backgrounds are often employed to help provide sufficient contrast with a variable background such as an image, where the poorest contrast would be where part of that variable background is the same shade as the text color)


### Step 6
Test method: [manual]

- determine if background behind the text is an image.
- determine that there is no border/shadow/semi-opaque layer to help with contrast.
- determine the color of a suitable number of samples from the image beside the text.
- determine the contrast ratio of the text color and each of these sampled colors.
- determine if it meets the required contrast ratio.

(an image background must still have a background color behind it with the required color contrast, in case the image does not load)


...

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual

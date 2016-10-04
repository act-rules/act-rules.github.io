# SC1-4-3-main-text-bg-contrast

## Description
This test checks that the main body of text content on a page contrasts sufficiently with the background, gradient or image behind it.



## Background

- [Understanding SC 1.4.3](https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140311/visual-audio-contrast-contrast.html)
- [F24: specifying foreground colors without specifying background colors](https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140311/F24)


## Assumptions
- It is possible to determine what is the main body of text
- The text is not an image
- It is possible to determine the text color
- It is possible to determine the colors behind the text


## Test properties
| Properties        | Values
|-------------------|-----------
| Test name         | Main-text - background contrast
| Success criterion | 1.4.3 Contrast minimum
| Test mode         | SemiAuto
| Test environment  | DOM + CSS, Rendered page
| Test Subject      | Web page state
| User profile      | Requires sight



## Test procedure

<!---
Not sure about the order of the steps as there is no one situation that would pass without checking the others. Wonder if this would mean changing how things are grouped into:
1. determine text stuff.
2. determine ratio required.
3. determine what to contrast it with (and if test can be automated).
4. check if requirement is met.
-->


### Selector
Test method: [automatic][earl:automatic]

Look at each text containing element within the main content container that is not empty.
eg. body > main > (h*/p/li/label/span/div etc)


For each text element:

### Step 1
Test method: [automatic][earl:automatic]

- determine the computed text color, size and weight.
- determine the nearest ancestor with a computed background color.
- determine if that ancestor is still positioned behind the text (text not re-positioned).
- determine that ancestor's background color.
- determine the contrast ratio required.
- determine the contrast ratio of the text color and background color.
- determine if it meets the required contrast ratio.

(an unstyled page should pass this, as should a page where an image fails to load or a newer style is unsupported)


### Step 2
Test method: [automatic][earl:automatic]

- determine if there is another element, eg a sibling, positioned behind the text.
- determine that element's background color.
- determine the contrast ratio of the text color and this background color.
- determine if it meets the required contrast ratio.


### Step 3
Test method: [automatic][earl:automatic]

- determine if the nearest ancestor or other element has a programatic gradient background.
- determine the direction of the gradient.
- determine the background color closest to the text in the direction where the shade is most similar to the text color.
- determine the contrast ratio of the text color and this background color.
- determine if it meets the required contrast ratio.


###Step 4
Test method: [automatic][earl:automatic]

- determine if the text has a border and/or shadow.
- determine the width of border/shadow above/below/left/right of the text.
- determine if all widths are greater than 1px.
- determine the color of the border/shadow.
- determine the contrast ratio of the text color and the border/shadow color.
- determine if it meets the required contrast ratio.

(a text border/shadow of sufficient width may help provide sufficient contrast)


###Step 5
Test method: [semiauto][earl:semiauto]

- determine if any of the background, gradient, border or shadow colors are semi-opaque.
- when comparing with the text color, calculate the semi-opaque color as though the text color were behind it.
- determine the contrast ratio of the text color and the calculated semi-opaque color.
- determine if it meets the required contrast ratio.

(semi-opaque backgrounds are often employed to help provide sufficitent contrast with a variable background such as an image, where the poorest contrast would be where part of that variable background is the same shade as the text color)


### Step 6
Test method: [manual][earl:manual]

- determine if background behind the text is an image.
- determine that there is no border/shadow/semi-opaque layer to help with contrast.
- determine the color of a suitable number of samples from the image beside the text.
- determine the contrast ratio of the text color and each of these sampled colors.
- determine if it meets the required contrast ratio.

(an image background must still have a background color behind it with the required color contrast, in case the image does not load)




[earl:automatic]: ../earl/automatic.md
[earl:semiauto]: ../earl/semiauto.md
[earl:manual]: ../earl/manual.md
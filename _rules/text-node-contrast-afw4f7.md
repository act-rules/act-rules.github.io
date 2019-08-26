---
id: afw4f7
name: Text nodes have minimal contrast
rule_type: atomic

description: |
  This rule checks that text nodes have minimal color contrast with its background

accessibility_requirements:
  wcag20:1.4.3: # Contrast (Minimum)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed

input_aspects:
  - DOM Tree
  - CSS Styling

authors:
  - Brian Bors
  - Kasper Isager
  - Wilco Fiers
---

## Applicability

Any text node that is [visible](#visible) and a child of an HTML element, except the text node is a descendent of an element that:

- Has a [semantic role](#semantic-role) that inherits from [widget](https://www.w3.org/TR/wai-aria-1.1/#widget)
- Is used in the accessible name of a widget that is [disabled](#disabled) (i.e. It is part of the label)
- Has a [semantic role](#semantic-role) of [group](https://www.w3.org/TR/wai-aria-1.1/#group) with that is [disabled](#disabled)

**Note**: When the text color is the same as the background color, the element is not visible, and so is not applicable.

## Expectation

For each test target, the [highest possible contrast](#highest-possible-contrast) between the [foreground colors](#foreground-colors-of-text) and [background colors](#background-colors-of-text) is at least 4.5:1 (or 3.0:1 for [larger scale text](#large-scale-text)), except if the content of the text node is [decorative](#decorative), or doesn't express anything in [human language](https://www.w3.org/TR/WCAG21/#dfn-human-language-s).

**Note**: Passing this rule does not mean that the text node has sufficient color contrast. White text on a black and white image passes this rule, whether or not that text is legible depends on the how much of the white words are positioned on the black parts of the image. This requires further testing.

## Assumptions

Success criterion 1.4.3 has exceptions for "incidental" text, which includes inactive user interface components and decorative texts. The rule assumes that text nodes should be ignored are hidden from assistive technologies. If this isn't the case, the rule may produce incorrect results.

Success criterion 1.4.3 also has an exception for logos and brand names. Since logos and brand names are usually displayed through images to ensure correct rendering, this rule does not take logos or brand names into consideration. If a logo or brand name is included using text nodes, this rule may not produce the rule may produce incorrect results.

## Accessibility support

Different browsers have different levels of support for CSS. This can cause contrast issues in one browser that do not appear in another. Because of that, this rule can produce different results depending on the browser that is used.

## Background

- [Understanding Success Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G18)
- [G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G145)
- [F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F83)

## Test Cases

### Passed

#### Passed Example 1

Black text on a white background

```html
<p style="color: #333; background: #fff;">
	Some text in English
</p>
```

#### Passed Example 2

Black text on a partially white gradient background

```html
<p style="color: #333; background: linear-gradient(to right, #fff, #00F);">
	Some text in English
</p>
```

#### Passed Example 3

White text on a partially black background image

```html
<p
	style="color: #ccc; height:50px; padding-top:25px; background: black no-repeat -20px -20px url('../test-assets/black-hole.jpeg');"
>
	Black hole sun
</p>
```

#### Passed Example 4

Text that passes because of a text shadow

```html
<p style="color: black; background: #737373; text-shadow: white 0 0 3px">
	Some text in English
</p>
```

#### Passed Example 5

18 point text with a 3:1 contrast

```html
<p style="color: black; font-size:18pt; background: #666;">
	Some text in English
</p>
```

#### Passed Example 6

14 point bold text with a 3:1 contrast

```html
<p style="color: black; font-size:14pt; font-weight:700; background: #666;">
	Some text in English
</p>
```

#### Passed Example 7

Decorative text with insufficient contrast

```html
<p>Helvetica is a widely used sans-serif typeface developed in 1957 by Max Miedinger and Eduard Hoffmann.</p>
<p style="font-family: helvetica; background: #eee; color: #777;" aria-hidden="true">
	The quick brown fox jumps over the lazy dog.
</p>
```

#### Passed Example 8

Text node that does not express anything in human language

```html
<p style="color: black; background: #666;">
	----=====++++++++___________***********%%%%%%%%%%%±±±±@@@@@@@@
</p>
```

### Failed Examples

#### Failed Example 1

Text with insufficient contrast on a plain background

```html
<p style="color: #AAA; background: white;">
	Some text in English
</p>
```

#### Failed Example 2

Text with insufficient contrast on a gradient background

```html
<p style="color: #AAA; background: linear-gradient(to right, white, blue);">
	Some text in English
</p>
```

#### Failed Example 3

Text with insufficient contrast on a background image

```html
<p
	style="color: #555; height:50px; padding-top:25px; background: black no-repeat -20px -20px url('../test-assets/black-hole.jpeg');"
>
	Black hole sun
</p>
```

#### Failed Example 4

Text that fails because of alpha transparancy

```html
<p style="color: rgba(0,0,0,.3); background: #FFF">
	Some text in English
</p>
```

#### Failed Example 5

Text that fails because of CSS transparent

```html
<div style="background: #FFF">
	<p style="color: black; opacity: .3">
		Some text in English
	</p>
</div>
```

### Inapplicable

#### Inapplicable Example 1

Invisible text nodes

```html
<p style="display: none">Some invisible text in English</p>
```

#### Inapplicable Example 2

Text with the same foreground and background colors

```html
<p style="color: white; background: white;">Some white on white text in English</p>
```

#### Inapplicable Example 3

Text not a child of an HTML element

```html
<svg>
	<text x="0" y="15">I love SVG!</text>
</svg>
```

#### Inapplicable Example 4

Not a text node but an image

```html
<p>
	<img
		scr="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiV_vr3ytLjAhUE_aQKHV50CQ4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.picpedia.org%2Fhighway-signs%2Fe%2Fexample.html&psig=AOvVaw37VJ_gcc-PJGGwZc_TqYyw&ust=1564230493939039"
		alt="example"
	/>
</p>
```

#### Inapplicable Example 5

Text node is contained in a native button

```html
<button>My button!</button>
```

#### Inapplicable Example 5

Text node is contained in a native button

```html
<div role="button">My button!</div>
```

#### Inapplicable Example 6

Text node is in a label of a disabled native widget

```html
<label style="color:#888; background: white;">
	My name
	<input disabled />
</label>
```

#### Inapplicable Example 7

Text node is in a label of a disabled ARIA widget

```html
<label id="my_pets_name" style="color:#888; background: white;">
	My pet's name
</label>
<div
	role="textbox"
	aria-labelledby="my_pets_name"
	aria-disabled="true"
	style="height:20px; width:100px; border:1px solid black;"
>
	test
</div>
```

#### Inapplicable Example 8

Text node is in a disabled fieldset

```html
<fieldset disabled style="color:#888; background: white;">
	<label>
		My name
		<input />
	</label>
</fieldset>
```

#### Inapplicable Example 9

Text node is in a disabled ARIA group

```html
<div role="group" aria-disabled="true" style="color:#888; background: white;">
	<label>
		My name
		<input />
	</label>
</div>
```

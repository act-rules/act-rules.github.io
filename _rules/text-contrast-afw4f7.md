---
id: afw4f7
name: Text has minimum contrast
rule_type: atomic

description: |
  This rule checks that the highest possible contrast of every text character with its background meets the minimal contrast requirement

accessibility_requirements:
  wcag20:1.4.3: # Contrast (Minimum)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:1.4.6: # Contrast (Enhanced)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed

input_aspects:
  - DOM Tree
  - CSS Styling
  - Language

acknowledgements:
  authors:
    - Brian Bors
    - Kasper Isager
    - Wilco Fiers
---

## Applicability

Any [visible](#visible) character in a [text node][] that is a [child](https://dom.spec.whatwg.org/#concept-tree-child) (in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree)) of an HTML element, except if the [text node][] is a [descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of an element that:

- Has a [semantic role](#semantic-role) that inherits from [widget](https://www.w3.org/TR/wai-aria-1.1/#widget); or
- Is used in the [accessible name](#accessible-name) of a [widget](https://www.w3.org/TR/wai-aria-1.1/#widget) that is [disabled](); or
- Has a [semantic role](#semantic-role) of [group](https://www.w3.org/TR/wai-aria-1.1/#group) and is [disabled]().

**Note**: When the text color is the same as the background color, the [text node](https://dom.spec.whatwg.org/#text) is not [visible](#visible), and so it does not need to be tested for contrast.

## Expectation

For each test target, the [highest possible contrast](#highest-possible-contrast) between the [foreground colors](#foreground-colors-of-text) and [background colors](#background-colors-of-text) is at least 4.5:1 or 3.0:1 for [larger scale text](#large-scale-text), except if the test target is part of a [text node][] that is [decorative](#decorative), or does not express anything in [human language](https://www.w3.org/TR/WCAG21/#dfn-human-language-s).

**Note**: Passing this rule does not mean that the text has sufficient color contrast. If all background pixels have a low contrast with all foreground pixels, the success criterion is guaranteed to not be satisfied. When some pixels have sufficient contrast, and others do not, legibility should be considered. There is no clear method for determining legibility, which is why this is out of scope for this rule.

## Assumptions

- [Success criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/TR/WCAG21/#contrast-minimum) has exceptions for "incidental" text, which includes inactive user interface components and decorative texts. The rule assumes that [text nodes](https://dom.spec.whatwg.org/#text) that should be ignored are [disabled]() or hidden from assistive technologies. If this isn't the case, the rule may produce incorrect results.

- [Success criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/TR/WCAG21/#contrast-minimum) also has an exception for logos and brand names. Since logos and brand names are usually displayed through images to ensure correct rendering, this rule does not take logos or brand names into consideration. If a logo or brand name is included using [text nodes](https://dom.spec.whatwg.org/#text), this rule may produce incorrect results.

## Accessibility Support

Different browsers have different levels of support for CSS. This can cause contrast issues in one browser that do not appear in another. Because of that, this rule can produce different results depending on the browser that is used. For example, a text that is positioned using CSS transform may be on a different background in a browser that does not support CSS transform.

## Background

- [Understanding Success Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Understanding Success Criterion 1.4.6: Contrast (Enhanced)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)
- [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G18)
- [G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G145)
- [F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F83)
- [CSS Scoping Module Level 1 (Editor's Draft)](https://drafts.csswg.org/css-scoping/)

## Test Cases

### Passed

#### Passed Example 1

This dark grey text is on a white background.

```html
<p style="color: #333; background: #FFF;">
	Some text in a human language
</p>
```

#### Passed Example 2

This dark grey text is on a partially white gradient background.

```html
<p style="color: #333; background: linear-gradient(to right, #FFF, #00F); width: 500px;">
	Some text in a human language
</p>
```

#### Passed Example 3

This light grey text is on a partially black background image.

```html
<p
	style="color: #CCC; height:50px; padding-top:15px; background: #000 no-repeat -20px -20px url('../test-assets/contrast/black-hole.jpeg');"
>
	Black hole sun
</p>
```

#### Passed Example 4

This text passes because the text shadow gives the text sufficient contrast.

```html
<p style="color: #000; background: #737373; text-shadow: white 0 0 3px">
	Some text in a human language
</p>
```

#### Passed Example 5

This text only has a 3:1 contrast but it is a large (18 point) text so it still passes.

```html
<p style="color: #000; font-size:18pt; background: #666;">
	Some text in a human language
</p>
```

#### Passed Example 6

This text only has a 3:1 contrast but it is a large (14 points and bold) text so it still passes.

```html
<p style="color: #000; font-size:14pt; font-weight:700; background: #666;">
	Some text in English
</p>
```

#### Passed Example 7

The purpose of the Helvetica letters is to show what the font looks like. The actual words are irrelevant and could be replaced with any other sentence that includes all letters of the alphabet. Because of that, the rule passes, despite the text not meeting the 4.5:1 color contrast requirement.

**Note**: Because this is non-text content, [success criterion 1.4.11 Non-text Contrast](https://www.w3.org/TR/WCAG21/#non-text-contrast) requires font example to have a color contrast of 3:1.

```html
<p>Helvetica is a widely used sans-serif typeface developed in 1957 by Max Miedinger and Eduard Hoffmann.</p>
<p style="font-family: helvetica; background: #EEE; color: #777;" aria-hidden="true">
	The quick brown fox jumps over the lazy dog.
</p>
```

#### Passed Example 8

This text has an insufficient contrast but it does not express anything in human language so it still passes.

```html
<p style="color: #000; background: #666;">
	----=====++++++++___________***********%%%%%%%%%%%±±±±@@@@@@@@
</p>
```

#### Passed Example 9

Even though the text is in a shadow DOM tree, the text is part of a child [text node](https://dom.spec.whatwg.org/#text) of an HTML element in the flat tree and has sufficient contrast

```html
<p style="color: #333; background: #fff;" id="p"></p>
<script>
	const shadowRoot = document.getElementById('p').attachShadow({ mode: 'open' })
	shadowRoot.textContent = 'Some text in English'
</script>
```

### Failed

#### Failed Example 1

This text has insufficient contrast with the white background.

```html
<p style="color: #AAA; background: white;">
	Some text in English
</p>
```

#### Failed Example 2

This text has insufficient contrast with the darkest point on the gradient background behind the text.

```html
<p style="color: #AAA; background: linear-gradient(to right, #FFF, #00F); width: 300px">
	Some text in English
</p>
```

#### Failed Example 3

This text has insufficient contrast with the background image.

```html
<p
	style="color: #555; height:50px; padding-top:25px; background: black no-repeat -20px -20px url('../test-assets/contrast/black-hole.jpeg');"
>
	Black hole sun
</p>
```

#### Failed Example 4

This text fails because the alpha transparency significantly lowers the contrast of the otherwise black text.

```html
<p style="color: rgba(0,0,0,.3); background: #FFF">
	Some text in English
</p>
```

#### Failed Example 5

This text fails because the CSS opacity property significantly lowers the contrast of the otherwise black text.

```html
<div style="background: #FFF">
	<p style="color: #000; opacity: .3">
		Some text in English
	</p>
</div>
```

#### Failed Example 6

Even though the text is in a shadow DOM tree, the text is part of a child [text node](https://dom.spec.whatwg.org/#text) of an HTML element in the flat tree and has insufficient contrast

```html
<p style="color: #aaa; background: #fff;" id="p"></p>
<script>
	const shadowRoot = document.getElementById('p').attachShadow({ mode: 'open' })
	shadowRoot.textContent = 'Some text in English'
</script>
```

#### Failed Example 7

The text is placed over a black and white background. The grey text fails because of its opacity, where the text on the black background becomes too dark, and the text on the white background becomes too light.

```html
<style>
	#backgroundSplit {
		color: rgba(90, 90, 90, 0.8);
		background-position: top 0 left 0;
		background-image: linear-gradient(90deg, transparent, transparent 3.3em, black 3.3em, black 6em);
		padding: 0 1em;
	}
</style>
<span id="backgroundSplit">
	Hello world
</span>
```

### Inapplicable

#### Inapplicable Example 1

This is invisible text.

```html
<p style="display: none">Some invisible text in English</p>
```

#### Inapplicable Example 2

The text is inapplicable because it is positioned off screen, hence not [visible](#visible).

```html
<p style="position:absolute; top: -999em">Some invisible text in English</p>
```

#### Inapplicable Example 3

This text has the same foreground and background colors, hence it is not [visible](#visible).

```html
<p style="color: white; background: white;">Some white on white text in English</p>
```

#### Inapplicable Example 4

This text is not the child of an HTML element.

```html
<svg>
	<text x="0" y="15">I love SVG!</text>
</svg>
```

#### Inapplicable Example 5

This is not a [text node](https://dom.spec.whatwg.org/#text) but an image.

```html
<p>
	<img scr="../test-assets/contrast/example.png" alt="example" />
</p>
```

#### Inapplicable Example 6

This text is contained in a native button.

```html
<button>My button!</button>
```

#### Inapplicable Example 7

This text is contained in an ARIA button.

```html
<div role="button">My button!</div>
```

#### Inapplicable Example 8

This text is in a label of a [disabled]() native widget.

```html
<label style="color:#888; background: white;">
	My name
	<input disabled />
</label>
```

#### Inapplicable Example 9

This text is in a label of a [disabled]() ARIA widget.

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

#### Inapplicable Example 10

This text is in a [disabled]() fieldset.

```html
<fieldset disabled style="color:#888; background: white;">
	<label>
		My name
		<input />
	</label>
</fieldset>
```

#### Inapplicable Example 11

This text is in a [disabled]() ARIA group.

```html
<div role="group" aria-disabled="true" style="color:#888; background: white;">
	<label>
		My name
		<input />
	</label>
</div>
```

[disabled]: #disabled-element
[text node]: https://dom.spec.whatwg.org/#text

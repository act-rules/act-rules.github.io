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

- has a [semantic role](#semantic-role) that inherits from [widget](https://www.w3.org/TR/wai-aria-1.1/#widget); or
- is used in the [accessible name](#accessible-name) of a [widget](https://www.w3.org/TR/wai-aria-1.1/#widget) that is [disabled][]; or
- has a [semantic role](#semantic-role) of [group](https://www.w3.org/TR/wai-aria-1.1/#group) and is [disabled][].

**Note**: When the [foreground color](#foreground-colors-of-text) is the same as the [background color](#background-colors-of-text), the character is not [visible](#visible), and so it does not need to be tested for contrast.

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

This dark grey text has a contrast ratio of 12.6:1 on the white background.

```html
<p style="color: #333; background: #FFF;">
	Some text in a human language
</p>
```

#### Passed Example 2

This dark grey text has a contrast ratio between 12.6:1 and 5:1 on the white to blue gradient background.

```html
<p style="color: #333; background: linear-gradient(to right, #FFF, #00F); width: 500px;">
	Some text in a human language
</p>
```

#### Passed Example 3

This light grey text has a contrast ratio between 13:1 and 5:1 on the background image.

```html
<p
	style="color: #CCC; height:50px; padding-top:15px; background: #000 no-repeat -20px -20px url('../test-assets/contrast/black-hole.jpeg');"
>
	Black hole sun
</p>
```

#### Passed Example 4

This black text has a contrast ratio between 6.1:1 and 9:1 on grey background with white text shadow on it.

```html
<p style="color: #000; background: #737373; text-shadow: white 0 0 3px">
	Some text in a human language
</p>
```

#### Passed Example 5

This 18pt large black text has a contrast ratio of 3.6:1 on the grey background.

```html
<p style="color: #000; font-size:18pt; background: #666;">
	Some text in a human language
</p>
```

#### Passed Example 6

This 14pt bold black text has a contrast ratio of 3.6:1 on the grey background.

```html
<p style="color: #000; font-size:14pt; font-weight:700; background: #666;">
	Some text in English
</p>
```

#### Passed Example 7

The first `p` element is has a contrast ratio of 21:1 (default black on white). The second `p` element contains Helvetica text which is decorative, because it does not convey information or provides functionality; it's purpose is to show the aesthetic of the Helvetica font.

**Note**: Because this is non-text content, [success criterion 1.4.11 Non-text Contrast](https://www.w3.org/TR/WCAG21/#non-text-contrast) requires font example to have a color contrast of 3:1.

```html
<p>Helvetica is a widely used sans-serif typeface developed in 1957 by Max Miedinger and Eduard Hoffmann.</p>
<p style="font-family: helvetica; background: #EEE; color: #777;" aria-hidden="true">
	The quick brown fox jumps over the lazy dog.
</p>
```

#### Passed Example 8

This text does not convey anything in human language.

```html
<p style="color: #000; background: #666;">
	----=====++++++++___________***********%%%%%%%%%%%±±±±@@@@@@@@
</p>
```

#### Passed Example 9

This dark grey text has a contrast ratio of 12.6:1 on the white background in a shadow DOM tree.

```html
<p style="color: #333; background: #fff;" id="p"></p>
<script>
	const shadowRoot = document.getElementById('p').attachShadow({ mode: 'open' })
	shadowRoot.textContent = 'Some text in English'
</script>
```

### Failed

#### Failed Example 1

This light grey text has a contrast ratio of 2.3:1 on the white background.

```html
<p style="color: #AAA; background: white;">
	Some text in English
</p>
```

#### Failed Example 2

This light grey text has a contrast ratio between 1.2:1 and 2.3:1 on the white to blue gradient background.

```html
<p style="color: #AAA; background: linear-gradient(to right, #FFF, #00F); width: 300px">
	Some text in English
</p>
```

#### Failed Example 3

This light grey text has a contrast ratio between 2.7:1 and 3:1 on the background image.

```html
<p
	style="color: #555; height:50px; padding-top:20px; background: black no-repeat -20px -20px url('../test-assets/contrast/black-hole.jpeg');"
>
	Black hole sun
</p>
```

#### Failed Example 4

This black text with 30% alpha channel has a contrast ratio of 2.1:1 on the white background.

```html
<p style="color: rgba(0,0,0,.3); background: #FFF">
	Some text in English
</p>
```

#### Failed Example 5

This black text with 30% opacity has a contrast ratio of 2.1:1 on the white background.

```html
<div style="background: #FFF">
	<p style="color: #000; opacity: .3">
		Some text in English
	</p>
</div>
```

#### Failed Example 6

This light grey text has a contrast ratio of 2.3:1 on the white background in a shadow DOM tree.

```html
<p style="color: #aaa; background: #fff;" id="p"></p>
<script>
	const shadowRoot = document.getElementById('p').attachShadow({ mode: 'open' })
	shadowRoot.textContent = 'Some text in English'
</script>
```

#### Failed Example 7

This semi-transparent grey text has a contrast ratio between 2.3:1 and 4.2:1 on the black and white background. The light grey text is compared to the white section of the background and the dark grey text is compared to the black section of the background.

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

This text is not [visible][] because of `display: none`.

```html
<p style="display: none">Some invisible text in English</p>
```

#### Inapplicable Example 2

This text is not [visible][] because it is positioned off screen.

```html
<p style="position:absolute; top: -999em">Some invisible text in English</p>
```

#### Inapplicable Example 3

This text is not [visible][] because the foreground color is the same as the background color.

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

This text not part of a [text node][].

```html
<p>
	<img scr="../test-assets/contrast/example.png" alt="example" />
</p>
```

#### Inapplicable Example 6

This text is part of a widget because it is a child of a `button` element.

```html
<button>My button!</button>
```

#### Inapplicable Example 7

This text is part of a widget because it is a child of an element with the `role` attribute set to `button`.

```html
<div role="button">My button!</div>
```

#### Inapplicable Example 8

This text is part of a label of a [disabled][] widget, because it is in a `label` element that is the label for an `input` element with `type="text"`.

```html
<label style="color:#888; background: white;">
	My name
	<input type="text" disabled />
</label>
```

#### Inapplicable Example 9

This text is part of a label of a [disabled][] widget, because it is in an element that is referenced by `aria-labelledby` from an element with `role="textbox"`.

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

This text is part of a label of a [disabled][] widget, because it is in a `label` element that is the label for an `input` element in a `fieldset` element with the `disabled` attribute.

```html
<fieldset disabled style="color:#888; background: white;">
	<label>
		My name
		<input />
	</label>
</fieldset>
```

#### Inapplicable Example 11

This text is part of a label of a [disabled][] widget, because it is in a `label` element that is the label for an `input` element in an element with `role="group"` with the `aria-disabled="true"` attribute.

```html
<div role="group" aria-disabled="true" style="color:#888; background: white;">
	<label>
		My name
		<input />
	</label>
</div>
```

[disabled]: #disabled-element 'Definition of disabled'
[text node]: https://dom.spec.whatwg.org/#text 'Definition of text node'

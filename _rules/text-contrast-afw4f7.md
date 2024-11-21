---
id: afw4f7
name: Text has minimum contrast
rule_type: atomic
description: |
  This rule checks that the highest possible contrast of every text character with its background meets the minimal contrast requirement.
accessibility_requirements:
  wcag20:1.4.3: # Contrast (Minimum) (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:1.4.6: # Contrast (Enhanced) (AAA)
    secondary: This success criterion is **more strict** than this rule. This is because this criterion has a higher minimum contrast. Some of the passed examples do not satisfy this success criterion.
input_aspects:
  - Accessibility Tree
  - DOM Tree
  - CSS Styling
  - Language
acknowledgments:
  authors:
    - Brian Bors
    - Wilco Fiers
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [visible][] character in a [text node][] that is a [child][] in the [flat tree][] of an [HTML element][], except if the [text node][] has an [ancestor][] in the [flat tree][] for which at least one of the following is true:

- **disabled ancestor**: the ancestor is an [inheriting semantic][] `group` or `widget` that is [disabled][]; or
- **disabled label**: the ancestor is used in the [accessible name][] of an [inheriting semantic][] `widget` that is [disabled][].

## Expectation

For each test target, the [highest possible contrast][] between the [foreground colors][] and [background colors][] is at least 3.0:1 for [large scale text][] and 4.5:1 for other texts, except if the test target is part of a [text node][] that is [purely decorative][] or does not express anything in [human language][].

## Assumptions

- [Success criterion 1.4.3: Contrast (Minimum)][sc143] has exceptions for "incidental" text, which includes inactive user interface components and decorative texts. The rule assumes that [text nodes][text node] that should be ignored are [disabled][] or hidden from assistive technologies. If this isn't the case, the text node could fail this rule while the success criterion could still be satisfied.

- [Success criterion 1.4.3: Contrast (Minimum)][sc143] also has an exception for logos and brand names. Since logos and brand names are usually displayed through images to ensure correct rendering, this rule does not take logos or brand names into consideration. If a logo or brand name is included using [text nodes][text node], the text node could fail while the success criterion could still be satisfied.

- Text that has the same foreground and background color (a contrast ratio of 1:1) is not considered to be "visual presentation of text", making it inapplicable to the success criterion. Text hidden in this way can still cause accessibility issues under other success criteria, depending on the content.

- The definition of [disabled element][disabled] assumes that when the `aria-disabled` attribute is specified on an element, this element has also been disabled for users that do not rely on [assistive technology][]. If this is not the case, that definition may produce incorrect results and in consequence this rule might be Inapplicable to some text nodes that still require a good contrast ratio.

## Accessibility Support

- Different browsers have different levels of support for CSS. This can cause contrast issues in one browser that do not appear in another. Because of that, this rule can produce different results depending on the browser that is used. For example, a text that is positioned using CSS transform may be on a different background in a browser that does not support CSS transform.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

Passing this rule does not mean that the text has sufficient color contrast. If all background pixels have a low contrast with all foreground pixels, the success criterion is guaranteed to not be satisfied. When some pixels have sufficient contrast, and others do not, legibility should be considered. There is no clear method for determining legibility when some but not all pixels have sufficient contrast, which is why passing this rule does not necessarily mean the corresponding success criterion is met.

When the text color or background color is not specified in the web page, colors from other [origins][] will be used. Testers must ensure colors are not affected by styles from a [user origin][], such as a custom style sheet. Contrast issues caused by specifying the text color but not the background or vice versa, must be tested separately from this rule.

### Bibliography

- [Understanding Success Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [Understanding Success Criterion 1.4.6: Contrast (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html)
- [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG22/Techniques/general/G18)
- [G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG22/Techniques/general/G145)
- [F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)](https://www.w3.org/WAI/WCAG22/Techniques/failures/F83)
- [CSS Scoping Module Level 1 (Editor's Draft)](https://drafts.csswg.org/css-scoping/)

## Test Cases

### Passed

#### Passed Example 1

This dark gray text has a contrast ratio of 12.6:1 on the white background.

```html
<p style="color: #333; background: #FFF;">
	Some text in a human language
</p>
```

#### Passed Example 2

This dark gray text has a contrast ratio between 12.6:1 and 5:1 on the white to blue gradient background.

```html
<p style="color: #333; background: linear-gradient(to right, #FFF, #00F); width: 500px;">
	Some text in a human language
</p>
```

#### Passed Example 3

This light gray text has a contrast ratio between 13:1 and 5:1 on the background image.

```html
<style>
	p {
		color: #ccc;
		height: 50px;
		padding-top: 15px;
		background: #000 no-repeat -20px -20px url('/test-assets/contrast/black-hole.jpeg');
		text-shadow: 0px 0px 2px black;
	}
</style>
<p>Black hole sun</p>
```

#### Passed Example 4

This black text has a contrast ratio between 6.1:1 and 9:1 on gray background with white text shadow on it.

```html
<p style="color: #000; background: #737373; text-shadow: white 0 0 3px">
	Some text in a human language
</p>
```

#### Passed Example 5

This 18pt large black text has a contrast ratio of 3.6:1 on the gray background.

```html
<p style="color: #000; font-size:18pt; background: #666;">
	Some text in a human language
</p>
```

#### Passed Example 6

This 14pt bold black text has a contrast ratio of 3.6:1 on the gray background.

```html
<p style="color: #000; font-size:14pt; font-weight:700; background: #666;">
	Some text in English
</p>
```

#### Passed Example 7

The content of this button ("X") does not convey anything in human language; therefore, it passes the rule regardless of its contrast ratio. However, [Success Criterion 1.4.11 Non-Text Content][sc1411] should be examined for this non-text element.

```html
<button style="color: #666; background-color: #000" aria-label="Close">X</button>
```

#### Passed Example 8

This text has the default browser text color on the default browser background color. By default this is black text on a white background, which has a contrast ratio of 21:1.

```html
<p>Some text in a human language</p>
```

#### Passed Example 9

This dark gray text has a contrast ratio of 12.6:1 on the white background in a shadow DOM tree.

```html
<p style="color: #CCC; background: #fff;" id="p"></p>
<script>
	const shadowRoot = document.getElementById('p').attachShadow({ mode: 'open' })
	shadowRoot.innerHTML = '<span style="color: #333;">Some text in English</span>'
</script>
```

#### Passed Example 10

This text has the [default user agent link text and background color](https://html.spec.whatwg.org/multipage/rendering.html#phrasing-content-3), of `#0000EE` and white. This results in a contrast ratio of 9.39:1.

```html
<a href="https://w3c.org/">W3C</a>
```

#### Passed Example 11

This text is using the default user agent text color and background color. By default, this is black text on a white background with a contrast ratio of 21:1

```html
<div role="button">My button!</div>
```

### Failed

#### Failed Example 1

This light gray text has a contrast ratio of 2.3:1 on the white background.

```html
<p style="color: #AAA; background: white;">
	Some text in English
</p>
```

#### Failed Example 2

This light gray text has a contrast ratio between 1.2:1 and 2.3:1 on the white to blue gradient background.

```html
<p style="color: #AAA; background: linear-gradient(to right, #FFF, #00F); width: 300px">
	Some text in English
</p>
```

#### Failed Example 3

This light gray text has a contrast ratio between 2.7:1 and 3:1 on the background image.

```html
<p
	style="color: #555; height:50px; padding-top:20px; background: black no-repeat -20px -20px url('/test-assets/contrast/black-hole.jpeg');"
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

This light gray text has a contrast ratio of 2.3:1 on the white background in a shadow DOM tree.

```html
<p style="color: #aaa; background: #fff;" id="p"></p>
<script>
	const shadowRoot = document.getElementById('p').attachShadow({ mode: 'open' })
	shadowRoot.textContent = 'Some text in English'
</script>
```

#### Failed Example 7

This semi-transparent gray text has a contrast ratio between 2.3:1 and 4.2:1 on the black and white background. The light gray text is compared to the white section of the background and the dark gray text is compared to the black section of the background.

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

#### Failed Example 8

The first `p` element has a contrast ratio of 12.6:1. The second `p` element, which contains an example of the Helvetica font, has a contrast ratio of 3.85:1. Because this provides information, and is not only for aesthetic purposes, this is not considered [purely decorative][].

```html
<p style="color: #333; background: #FFF;">
	Helvetica is a widely used sans-serif typeface developed in 1957 by Max Miedinger and Eduard Hoffmann.
</p>
<p style="font-family: helvetica; background: #EEE; color: #777;">
	The quick brown fox jumps over the lazy dog.
</p>
```

#### Failed Example 9

This text in a `button` element has a contrast ratio of 3.85:1.

```html
<button style="color: #777; background: #EEE;">My button!</button>
```

#### Failed Example 10

This text in a [semantic button][semantic role] has a contrast ratio of 3.85:1.

```html
<div role="button" style="color: #777; background: #EEE;">My button!</div>
```

#### Failed Example 11

The grey text has a contrast between 2.7:1 and 2.9:1 against the grey text shadow.

```html
<p style="background: #fff; color: #666; text-shadow: #aaa 2px 2px 4px, #aaa -2px 2px 4px, #aaa 2px -2px 4px, #aaa -2px -2px 4px;">
    Some text in a human language
  </p>
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
<p style="color: white; background: white;" aria-hidden="true">Hidden text - U U D D L R L R B A S</p>
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
	<img src="/test-assets/contrast/example.png" alt="example" />
</p>
```

#### Inapplicable Example 6

This text is part of a label of a [disabled][] widget, because it is in a `label` element that is the label for an `input` element with `type="text"`.

```html
<label style="color:#888; background: white;">
	My name
	<input type="text" disabled />
</label>
```

#### Inapplicable Example 7

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

#### Inapplicable Example 8

This text is part of a label of a [disabled][] widget, because it is in a `label` element that is the label for an `input` element in a `fieldset` element with the `disabled` attribute.

```html
<fieldset disabled style="color:#888; background: white;">
	<label>
		My name
		<input />
	</label>
</fieldset>
```

#### Inapplicable Example 9

This text is part of a label of a [disabled][] widget, because it is in a `label` element that is the label for an `input` element in an element with `role="group"` with the `aria-disabled="true"` attribute.

```html
<div role="group" aria-disabled="true" style="color:#888; background: white;">
	<label>
		My name
		<input />
	</label>
</div>
```

#### Inapplicable Example 10

This text is part of a [disabled][] widget because it is a child of a `button` element with the `disabled` attribute.

```html
<button style="color: #777; background: #EEE;" disabled>My button!</button>
```

#### Inapplicable Example 11

This text is part of a [disabled][] widget because it is a child of an element with the `role` attribute set to `button` and with an `aria-disabled` attribute set to `true`.

```html
<div role="button" style="color: #777; background: #EEE;" aria-disabled="true">My button!</div>
```

[accessible name]: #accessible-name 'Definition of Accessible Name'
[ancestor]: https://dom.spec.whatwg.org/#concept-shadow-including-ancestor 'DOM, ancestor, 2020/07/23'
[assistive technology]: https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies 'WCAG definition of Assistive Technologies'
[background colors]: #background-colors-of-text 'Definition of Background color of text'
[child]: https://dom.spec.whatwg.org/#concept-tree-child 'DOM, child, 2020/07/23'
[disabled]: #disabled-element 'Definition of Disabled'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/07/23'
[foreground colors]: #foreground-colors-of-text 'Definition of Foreground color of text'
[highest possible contrast]: #highest-possible-contrast 'Definition of Highest possible contrast'
[human language]: https://www.w3.org/TR/WCAG22/#dfn-human-language-s 'WCAG 2.2, Human language'
[large scale text]: #large-scale-text 'Definition of Large scale text'
[origins]: https://www.w3.org/TR/css3-cascade/#cascading-origins 'CSS 3, origin'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'WAI-ARIA, Presentational Roles Conflict Resolution'
[purely decorative]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG 2.2, Purely decorative'
[text node]: https://dom.spec.whatwg.org/#text 'DOM, text node, 2020/07/23'
[sc143]: https://www.w3.org/TR/WCAG22/#contrast-minimum 'WCAG 2.2, Success criterion 1.4.3 Contrast (Minimum)'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[inheriting semantic]: #inheriting-semantic 'Definition of Inheriting Semantic Role'
[user origin]: https://www.w3.org/TR/css3-cascade/#cascade-origin-user 'CSS 3, user origin'
[visible]: #visible 'Definition of Visible'
[html element]: #namespaced-element
[sc1411]: https://www.w3.org/TR/WCAG22/#non-text-contrast

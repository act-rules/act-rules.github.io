---
id: b8bb68
name: Text spacing set in the `style` attribute is below permissible minimum value or not set to `!important`
rule_type: atomic
description: |
  This rule checks that
accessibility_requirements:
  wcag21:1.4.12: # Text Spacing (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Jey Nandakumar
---

## Applicability

This rule applies to any HTML element that is [visible][] and has any of the below CSS properties set in the `style` attribute:

- [word-spacing][]
- [letter-spacing][]
- [line-height][]

## Expectation 1

The test target does not have "important" as its [word-spacing][] [priority][], unless the [computed][] [word-spacing][] is `0.16em` or greater.

## Expectation 2

The test target does not have "important" as its [letter-spacing][] [priority][], unless the [computed][] [letter-spacing][] is `0.12em` or greater.

## Expectation 3

The test target does not have "important" as its [line-height][] [priority][], unless the [computed][] [line-height][] is `1.5em` or greater.

**Note:** Font size conversations rely on the default pixel size for body (usually 16px), as defined by the user-agent stylesheet.

## Assumptions

If there is a mechanism available on the page by which text spacing can be adjusted, failing this rule might not mean [success criterion 1.4.12 Text spacing](https://www.w3.org/TR/WCAG21/#text-spacing) is not satisfied.

## Accessibility Support

While some assistive technologies are able to set [user origin][] styles, others such as browser exteinsions are only able to set style with the [author origin][]. Such assistive technologies can not create styles with a high enough priority to override a `style` attribute with `!important`. If [accessibility support][] does not include assistive technologies that override text spacing through [author origin][], this rule should not be used.

## Background

- [Understanding Success Criterion 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
- [CSS Text Module Level 3 - Spacing](https://www.w3.org/TR/css-text-3/#spacing)
- [CSS Visual formatting model details](https://drafts.csswg.org/css2/visudet.html)

## Test Cases

### Passed

#### Passed Example 1

This `p` element has a `line-height` of `20px !important` (equals `1.25em`) which is below the permissible minimum, given the default pixel size of the body is `16px`.

```html
<p style="line-height: 20px !important;">
	The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the
	sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.
</p>
```

#### Passed Example 2

This `div` element has a `letter-spacing` of `0.12em !important` which is equal to the permissible minimum, given the default pixel size of the body is `16px`.

```html
<div style="letter-spacing: 0.12em !important;">
	The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the
	sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.
</div>
```

#### Passed Example 3

This `strong` element has a `word-spacing` of `1.92pt !important` (equals `0.12em`) which is equal to the permissible value, given the default pixel size of the body is `16px`.

```html
<strong style="word-spacing: 1.92pt !important;">
	The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the
	sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.
</strong>
```

#### Passed Example 4

This `article` element has both `word-spacing` and `line-height` specified, which are both below the permissible minimum, given the default pixel size of the body is `16px`.

```html
<article style="word-spacing: 1.8pt !important; line-height: 1em !important;">
	The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the
	sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.
</article>
```

#### Passed Example 5

This `article` element has both `word-spacing` and `line-height` specified, which are both below the permissible minimum, given the element has an font-size of `16` pixels, which overrides the pixel size of the body.

```html
<head>
	<style>
		body {
			font-size: 20px;
		}
	</style>
</head>
<body>
	<article style="font-size: 16px; word-spacing: 1.8pt !important; line-height: 1em !important;">
		The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the
		sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.
	</article>
</body>
```

### Failed

#### Failed Example 1

This `p` element has a `line-height` of `30px !important` (equals `1.875em`) which is above the permissible minimum, given the default pixel size of the body is `16px`.

```html
<p style="line-height: 30px !important">
	The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the
	sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.
</p>
```

#### Failed Example 2

This `div` element has a `letter-spacing` of `1em !important` which is above to the permissible minimum, given the default pixel size of the body is `16px`.

```html
<div style="letter-spacing: 1em !important;">
	The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the
	sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.
</div>
```

#### Failed Example 3

This `strong` element has a `word-spacing` of `8px !important` (equals `0.5em`) which is above the permissible value, given the default pixel size of the body is `16px`.

```html
<strong style="word-spacing: 8px !important;">
	The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the
	sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.
</strong>
```

#### Failed Example 4

This `article` element has both `letter-spacing` and `line-height` specified, where `line-height` is above the permissible value, given the default pixel size of the body is `16px`.

```html
<article style="letter-spacing: 0.12em !important; line-height: 3em !important;">
	The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the
	sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.
</article>
```

#### Failed Example 5

This `p` element has a `line-height` of `1.25em !important`, which is greater than `1.5em` given the body has a default pixel size of `24px`.

```html
<head>
	<style>
		body {
			font-size: 24px;
		}
	</style>
</head>
<body>
	<p style="line-height: 1.25em !important">
		The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the
		sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.
	</p>
</body>
```

### Inapplicable

#### Inapplicable Example 1

This `p` element is not [visible][] because of `display: none`.

```html
<p style="display: none">
	The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the
	sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.
</p>
```

#### Inapplicable Example 2

This text is not [visible][] because it is positioned off screen.

```html
<p style="position: absolute; top: -999em">
	The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the
	sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.
</p>
```

[visible]: #visible 'Definition of visible'
[word-spacing]: https://www.w3.org/TR/css-text-3/#word-spacing-property 'CSS Text Module Level 3 - Word Spacing: the word-spacing property'
[letter-spacing]: https://www.w3.org/TR/css-text-3/#propdef-letter-spacing 'CSS Text Module Level 3 - Tracking: the letter-spacing property'
[line-height]: https://drafts.csswg.org/css2/visudet.html#propdef-line-height 'CSS Visual formatting model details - line-height property'
[priority]: https://www.w3.org/TR/cssom/#dom-cssstyledeclaration-getpropertypriority 'CSS Object Model (CSSOM) - Definition getComputedPriority'
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value 'CSS Cascading and Inheritance Level 3 - Computed Values'

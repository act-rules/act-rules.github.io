---
id: 24afc2
name: Letter spacing in `style` attributes is not `!important`
rule_type: atomic
description: |
	This rule checks that the letter spacing can be adjusted by the user, i.e. that `!important` is not applied to the style, unless the style has already exceeded the specified metric for retaining content visibility and functionality.
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

This rule applies to any HTML element that is [visible][], for which the `style` attribute [declares][declared] the [letter-spacing][] CSS property.

## Expectation 1

For the test target's [letter-spacing][] property, one of the following is true:

- the [declared][] value specified via the `style` attribute does not have the [important flag][]; or
- the [computed][] value is at least `0.12` times its [computed][] [font-size][].

## Assumptions

There is no mechanism available on the page to adjust letter spacing. If there is such a mechanism, failing this rule might not mean [success criterion 1.4.12 Text spacing](https://www.w3.org/TR/WCAG21/#text-spacing) is not satisfied.

## Accessibility Support

While some assistive technologies are able to set [user origin][] styles, others, such as browser extensions, are only able to set style with the [author origin][]. Such assistive technologies can not create styles with a high enough [priority][] to override a `style` attribute with the [important flag][]. If accessibility support does not include assistive technologies that override letter spacing through [author origin][], this rule should not be used.

## Background

- [Understanding Success Criterion 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
- [CSS Text Module Level 3 - Spacing](https://www.w3.org/TR/css-text-3/#spacing)
- [CSS Visual formatting model details](https://drafts.csswg.org/css2/visudet.html)

## Test Cases

### Passed

#### Passed Example 1

This `div` element has a `letter-spacing` of `0.12em` which is equal to the recommended minimum given the specified font size is `1em`.

```html
<html>
	<style>
		body {
			font-size: 1em;
		}
	</style>

	<body>
		<div style="letter-spacing: 0.12em; !important">
			The toy brought back fond memories of being lost in the rain forest.
		</div>
	</body>
</html>
```

#### Passed Example 2

This `p` element has a `letter-spacing` of `24px` specified via the style attribute, which is above to the recommended minimum given the specified font size is 16 pixels.

```html
<html>
	<style>
		body {
			font-size: 16px;
		}
	</style>

	<body>
		<p style="letter-spacing: 24px;">
			The toy brought back fond memories of being lost in the rain forest.
		</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

This `div` element has a `letter-spacing` of `1.5px !important` (equals `0.09375em`) which is below to the recommended minimum given the specified font size is `1em`.

```html
<html>
	<style>
		body {
			font-size: 1em;
		}
	</style>

	<body>
		<div style="letter-spacing: 1.5px !important;">
			The toy brought back fond memories of being lost in the rain forest.
		</div>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `p` element is not [visible][] because of `display: none`.

```html
<p style="display: none">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 2

This text is not [visible][] because it is positioned off screen.

```html
<p style="position: absolute; top: -999em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 3

This `body` element does not have a `style` attribute specified.

```html
<html>
	<style>
		body {
			letter-spacing: 25em;
		}
	</style>

	<body>
		The toy brought back fond memories of being lost in the rain forest.
	</body>
</html>
```

[visible]: #visible 'Definition of visible'
[letter-spacing]: https://www.w3.org/TR/css-text-3/#propdef-letter-spacing 'CSS Text Module Level 3 - Tracking: the letter-spacing property'
[priority]: https://www.w3.org/TR/cssom/#dom-cssstyledeclaration-getpropertypriority 'CSS Object Model (CSSOM) - Definition getComputedPriority'
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value 'CSS Cascading and Inheritance Level 3 - Computed Values'
[author origin]: https://drafts.csswg.org/css-cascade-4/#cascade-origin-author 'CSS Cascading and Inheritance Level 4 - Cascading Origins - Author Origin'
[user origin]: https://drafts.csswg.org/css-cascade-4/#cascade-origin-user 'CSS Cascading and Inheritance Level 4 - Cascading Origins - User Origin'
[font-size]: https://www.w3.org/TR/css-fonts-3/#propdef-font-size 'CSS Fonts Module Level 3- Font size: the font-size property'
[important flag]: https://www.w3.org/TR/cssom/#css-declaration-important-flag 'CSS Object Model (CSSOM) - important flag'
[declared]: https://www.w3.org/TR/css-cascade-3/#declared 'CSS Cascading and Inheritance Level 3 - Declared Values'

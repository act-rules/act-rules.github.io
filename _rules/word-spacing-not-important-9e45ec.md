---
id: 9e45ec
name: Word spacing in `style` attributes is not `!important`
rule_type: atomic
description: |
  This rule checks that the `style` attribute is not used to prevent adjusting `word-spacing` by using `!important`, except if it's at least `0.16` times the font size.
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

This rule applies to any HTML element that is [visible][], for which the `style` attribute [declares][declared] the [word-spacing][] CSS property.

## Expectation

For the test target, one of the following is true:

- **cascade** its [cascaded][] value is not the value [declared][] in the `style` attribute; or
- **not `!important`** its [cascaded][] value does not have the [important flag][]; or
- **above minimum** its [computed][] value is at least `0.16` times its [computed][] [font-size][].

## Assumptions

There is no mechanism available on the page to adjust [word-spacing][]. If there is such a mechanism, failing this rule might not mean [success criterion 1.4.12 Text spacing](https://www.w3.org/TR/WCAG21/#text-spacing) is not satisfied.

## Accessibility Support

While some assistive technologies are able to set [user origin][] or [user agent origin][] styles, others, such as browser extensions, are only able to set style with the [author origin][]. Such assistive technologies cannot create styles "winning" the [cascade sort][] over a `style` attribute with the [important flag][]. If accessibility support does not include assistive technologies that override [word-spacing][] through [author origin][], this rule should not be used.

## Background

When a style from [author origin][] is [declared][] in the `style` attribute with the [important flag][] set, it "wins" the [cascade sort] over any other style from [author origin][], i.e. it cannot be overridden by any of these. On the other hand, if such a style is [declared][] in a style sheet, it can still "lose" the [cascade sort][] to declarations with higher [specificity][] or simply coming from a later style sheet (such as ones injected by assistive technologies). This rule ensures that the element is not in the first case and that the style can be overridden by users, unless it is already above the minimum recommended threshold. Styles (with the [important flag][]) that are declared with the [user origin][] or [user agent origin][] can win the [cascade sort][] over styles with the [author origin][]. Therefore, if the assistive technology can produce these styles, the rule is not needed.

- [Understanding Success Criterion 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
- [CSS Text Module Level 3 - Spacing](https://www.w3.org/TR/css-text-3/#spacing)
- [CSS Visual formatting model details](https://drafts.csswg.org/css2/visudet.html)

Some examples use a fix font size to demonstrate specific aspects of the rule. This is in general not a very good practice and should be avoided.

## Test Cases

### Passed

#### Passed Example 1

This `strong` element has a `word-spacing` of `0.16em !important` which is equal to the recommended minimum, given the specified font size is `1em`.

```html
<html>
	<style>
		body {
			font-size: 1em;
		}
	</style>

	<body>
		<strong style="word-spacing: 0.16em !important;">
			The toy brought back fond memories of being lost in the rain forest.
		</strong>
	</body>
</html>
```

#### Passed Example 2

This `p` element has a [word-spacing][] of `12px` specified via the style attribute, which is above the recommended minimum given the specified font size is `16px`.

```html
<html>
	<style>
		body {
			font-size: 16px;
		}
	</style>

	<body>
		<p style="word-spacing: 12px;">
			The toy brought back fond memories of being lost in the rain forest.
		</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

This `strong` element has a `word-spacing` of `2.5px !important` (equals `0.156em` ) which is below the recommended minimum, given the specified font size is 16 pixels.

```html
<html>
	<style>
		body {
			font-size: 16px;
		}
	</style>

	<body>
		<strong style="word-spacing: 2.5px !important;">
			The toy brought back fond memories of being lost in the rain forest.
		</strong>
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
			word-spacing: 10px;
		}
	</style>
	<body>
		The toy brought back fond memories of being lost in the rain forest.
	</body>
</html>
```

[author origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-author 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - Author Origin'
[cascade sort]: https://www.w3.org/TR/css-cascade-4/#cascade-sort 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascade Sort'
[cascaded]: https://www.w3.org/TR/css-cascade-4/#cascaded 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascaded Values'
[computed]: https://www.w3.org/TR/css-cascade-4/#computed-value 'CSS Cascading and Inheritance Level 4 (Working draft) - Computed Values'
[declared]: https://www.w3.org/TR/css-cascade-4/#declared 'CSS Cascading and Inheritance Level 4 (Working draft) - Declared Values'
[font-size]: https://www.w3.org/TR/css-fonts-4/#propdef-font-size 'CSS Fonts Module Level 4 (Working draft) - Font size: the font-size property'
[important flag]: https://www.w3.org/TR/cssom/#css-declaration-important-flag 'CSS Object Model (CSSOM) - important flag'
[specificity]: https://www.w3.org/TR/selectors/#specificity 'CSS Selectors Level 4 (Working draft) - Specificity'
[user origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-user 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Origin'
[user agent origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-ua 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Agent Origin'
[visible]: #visible 'Definition of visible'
[word-spacing]: https://www.w3.org/TR/css-text-3/#word-spacing-property 'CSS Text Module Level 3 - Word Spacing: the word-spacing property'

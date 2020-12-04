---
id: 24afc2
name: Letter spacing in `style` attributes is not `!important`
rule_type: atomic
description: |
  This rule checks that the `style` attribute is not used to prevent adjusting `letter-spacing` by using `!important`, except if it's at least 0.12 times the font size.
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
    - Jean-Yves Moyen
    - Jey Nandakumar
---

## Applicability

This rule applies to any HTML element that is [visible][] and for which the `style` attribute [declares][declared] the [letter-spacing][] CSS property.

## Expectation

For each test target, one of the following is true:

- **not important**: the [computed][] value of its [letter-spacing][] property is not [important][]; or
- **wide enough**: the [computed][] value of its [letter-spacing][] property is at least 0.12 times the [computed][] value of its [font-size][] property; or
- **cascade**: the [cascaded][] value of its [letter-spacing][] property is not a value [declared][] in its `style` attribute.

## Assumptions

- There is no mechanism available on the page to adjust [letter-spacing][]. If there is such a mechanism, it is possible to fail this rule while [Success Criterion 1.4.12 Text Spacing][sc1412] is still satisfied.

- This rule assumes that WCAG's meaning for the "Letter spacing style property" is the value of the CSS `letter-spacing` property rather than the actual space between letters. The value of the CSS property is _added_ to whichever spacing already exist (for example, due to kerning). Thus, the actual space between letters can be larger than the value of the `letter-spacing` property. If [Success Criterion 1.4.12 Text Spacing][sc1412] is concerned by the actual space between letters, then this rule may fail (with the `letter-spacing` property being too small) while the Success Criterion is still satisfied (with the actual space being enough).

- This rule assumes that when inter-letters space is changed because of justification, the `letter-spacing` property is not changed. Therefore, whether a text is justified or not doesn't change the result of this rule. Note that justifying text is a failure of [Success Criterion 1.4.8 Visual Presentation][sc148].

## Accessibility Support

While some assistive technologies are able to set [user origin][] or [user agent origin][] styles, others, such as browser extensions, are only able to set styles with the [author origin][]. Such assistive technologies cannot create styles "winning" the [cascade sort][] over a `style` attribute with an [important][] declaration. If accessibility support does not include assistive technologies that override [letter-spacing][] through [author origin][], this rule should not be used.

## Background

When a style is [declared][] in the `style` attribute with an [important][] declaration, it "wins" the [cascade sort] over any other style from [author origin][], i.e. it cannot be overridden by any of these. On the other hand, if such a style is [declared][] in a style sheet, it can still "lose" the [cascade sort][] to declarations with higher [specificity][] or simply coming from a later style sheet (such as ones injected by assistive technologies). This rule ensures that the element is not in the first case and that the style can be overridden by users, unless it is already at least the minimum recommended threshold. [Important][] styles that are declared with the [user][user origin] or [user agent][user agent origin] origin can win the [cascade sort][] over styles with the [author origin][].

CSS specifications define each declaration as being either [important][] (if is as the `!important` annotation) or [normal][]. Given that `normal` is also a keyword for this property, and that `!important` is wider known that this distinction, this rule rather uses "[important][]"/"not [important][]" to avoid confusion.

- [Understanding Success Criterion 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
- [CSS Text Module Level 3 - Spacing](https://www.w3.org/TR/css-text-3/#spacing)
- [CSS Visual formatting model details](https://drafts.csswg.org/css2/visudet.html)

## Test Cases

### Passed

#### Passed Example 1

This `p` element has a **not [important][]** [computed][] `letter-spacing`.

```html
<p style="letter-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 2

This `p` element has a [computed][] `letter-spacing` of 0.15 time the font size, which is **wide enough**.

```html
<p style="letter-spacing: 0.15em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 3

This `p` element has a [computed][] [letter-spacing][] of `3px`, which is **wide enough** (the threshold is `3px`).

```html
<style>
	p {
		font-size: 25px;
	}
</style>

<p style="letter-spacing: 3px !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 4

This `p` element has two [declared][] values for its `letter-spacing` property. The latest wins the [cascade sort][]. It has a value of `0.15em`, and is **wide enough**.

```html
<p style="letter-spacing: 0.1em !important; letter-spacing: 0.15em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 5

This `p` element has two [declared][] values for its `letter-spacing` property. The one which is [important][] wins the [cascade sort][]. It has a value of `0.15em`, and is **wide enough**.

```html
<p style="letter-spacing: 0.15em !important; letter-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 6

The [cascaded][] value of the `letter-spacing` property of this `p` element is [declared][] in the style sheet, not in the `style` attribute (it wins the [cascade sort][] because it is [important][]). Thus, the `p` element matches the **cascade** condition.

```html
<style>
	p {
		letter-spacing: 0.1em !important;
	}
</style>

<p style="letter-spacing: 0.15em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 7

The [computed][] value of the `letter-spacing` property of this `p` element is **not [important][]**. The [computed][] value of the `letter-spacing` property of this `span` element is the [inherited][] value, that is the [computed][] value of its parent and therefore also **not [important][]**.

```html
<p style="letter-spacing: 0.1em">
	<span style="letter-spacing: inherit !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

#### Passed Example 8

The [computed][] value of the `letter-spacing` property of this `p` element is **not [important][]**. The [computed][] value of the `letter-spacing` property of this `span` element is the [inherited][] value, that is the [computed][] value of its parent and therefore also **not [important][]**.

```html
<p style="letter-spacing: 0.1em">
	<span style="letter-spacing: unset !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

### Failed

#### Failed Example 1

This `p` element has a [computed][] `letter-spacing` of only 0.1 times the font size, which is below the recommended minimum.

```html
<p style="letter-spacing: 0.1em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 2

This `p` element has a [computed][] `letter-spacing` of `2px` which is only 0.1 times the font size (`20px`), thus below the recommended minimum.

```html
<style>
	p {
		font-size: 20px;
	}
</style>

<p style="letter-spacing: 2px !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 3

This `p` element has a [computed][] `letter-spacing` of 0.

```html
<p style="letter-spacing: normal !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 4

This `p` element has a [computed][] `letter-spacing` of 0.

```html
<p style="letter-spacing: initial !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

### Inapplicable

#### Inapplicable Example 1

There is no HTML element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
    <text y="20" style="letter-spacing: 0.1em">ACT rules</text>
</svg>
```

#### Inapplicable Example 2

This `p` element is not [visible][] because of `display: none`.

```html
<p style="display: none; letter-spacing: 0.1em !important;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 3

This `p` element is not [visible][] because it is positioned off-screen.

```html
<p style="position: absolute; top: -999em; letter-spacing: 0.1em !important;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 4

The `style` attribute of this `p` element does not [declare][declared] the `letter-spacing` property.

```html
<p style="width: 60%">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

[author origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-author 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - Author Origin'
[cascade sort]: https://www.w3.org/TR/css-cascade-4/#cascade-sort 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascade Sort'
[cascaded]: https://www.w3.org/TR/css-cascade-4/#cascaded 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascaded Values'
[computed]: https://www.w3.org/TR/css-cascade-4/#computed 'CSS Cascading and Inheritance Level 4 (Working draft) - Computed Values'
[declared]: https://www.w3.org/TR/css-cascade-4/#declared 'CSS Cascading and Inheritance Level 4 (Working draft) - Declared Values'
[font-size]: https://www.w3.org/TR/css-fonts-4/#propdef-font-size 'CSS Fonts Module Level 4 (Working draft) - Font size: the font-size property'
[important]: https://www.w3.org/TR/css-cascade-4/#importance 'CSS Cascading and Inheritance Level 4 (Working draft) - Importance'
[inherited]: https://www.w3.org/TR/css-cascade-4/#inheriting 'CSS Cascading and Inheritance Level 4 (Working draft) - Inherited Values'
[letter-spacing]: https://www.w3.org/TR/css-text-3/#propdef-letter-spacing 'CSS Text Module Level 3 - Tracking: the letter-spacing property'
[normal]: https://www.w3.org/TR/css-cascade-4/#normal 'CSS Cascading and Inheritance Level 4 (Working draft) - Normal declarations'
[sc1412]: https://www.w3.org/TR/WCAG21/#text-spacing 'Success Criterion 1.4.12 Text Spacing'
[sc148]: https://www.w3.org/TR/WCAG21/#visual-presentation 'Success Criterion 1.4.8 Visual Presentation'
[specificity]: https://www.w3.org/TR/selectors/#specificity 'CSS Selectors Level 4 (Working draft) - Specificity'
[user origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-user 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Origin'
[user agent origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-ua 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Agent Origin'
[visible]: #visible 'Definition of visible'

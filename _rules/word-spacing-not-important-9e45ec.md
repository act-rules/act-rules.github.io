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
    - Jean-Yves Moyen
    - Jey Nandakumar
---

## Applicability

This rule applies to any HTML element that is [visible][] and for which the `style` attribute [declares][declared] the [word-spacing][] CSS property.

## Expectation

For each test target, one of the following is true:

- **above minimum**: the [computed][] value of its [word-spacing][] property is at least 0.16 times the [computed][] value of its [font-size][] property; or
- **normal**: the [computed][] value of its [word-spacing][] property is [normal][]; or
- **cascade**: the [cascaded][] value of its [word-spacing][] property is not a value [declared][] in its `style` attribute.

## Assumptions

- There is no mechanism available on the page to adjust [word-spacing][]. If there is such a mechanism, it is possible to fail this rule while [Success Criterion 1.4.12 Text Spacing][sc1412] is still satisfied.

- This rule assumes that WCAG's meaning for the "Word spacing style property" is literally the value of the CSS `word-spacing` property rather than the actual space between words. The value of the CSS property is _added_ to whichever spacing already exist (for example, the size of the space character). Thus, the actual space between words is larger than the value of the `word-spacing` property. If [Success Criterion 1.4.12 Text Spacing][sc1412] is concerned by the actual space between words, then this rule may fail (with the `word-spacing` property being too small) while the Success Criterion is still satisfied (with the actual space being enough).

- This rule assumes that text inside the target is not justified. The actual space between words may be further adjusted to justify text. This results in the space being sometimes larger and sometimes smaller. On lines where inter-words space is _added_, this rule may fail while [Success Criterion 1.4.12 Text Spacing][sc1412] is still satisfied (because the added space tip it over the limit); on lines where inter-letters space is _removed_, failing this rule will fail [Success Criterion 1.4.12 Text Spacing][sc1412]. For elements rendered on multiple lines, it is safe to assume that justification will not always add space. For single line elements (for example, a `span` inside a justified `p`), it may end up in a line with added space. Note that justifying text is a failure of [Success Criterion 1.4.8 Visual Presentation][sc148]

## Accessibility Support

While some assistive technologies are able to set [user origin][] or [user agent origin][] styles, others, such as browser extensions, are only able to set styles with the [author origin][]. Such assistive technologies cannot create styles "winning" the [cascade sort][] over a `style` attribute with an [important][] declaration. If accessibility support does not include assistive technologies that override [word-spacing][] through [author origin][], this rule should not be used.

## Background

When a style from [author origin][] is [declared][] in the `style` attribute with an [important][] declaration, it "wins" the [cascade sort] over any other style from [author origin][], i.e. it cannot be overridden by any of these. On the other hand, if such a style is [declared][] in a style sheet, it can still "lose" the [cascade sort][] to declarations with higher [specificity][] or simply coming from a later style sheet (such as ones injected by assistive technologies). This rule ensures that the element is not in the first case and that the style can be overridden by users, unless it is already above the minimum recommended threshold. Styles (with an [important][] declaration) that are declared with the [user origin][] or [user agent origin][] can win the [cascade sort][] over styles with the [author origin][]. Therefore, if the assistive technology can produce these styles, the rule is not needed.

- [Understanding Success Criterion 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
- [CSS Text Module Level 3 - Spacing](https://www.w3.org/TR/css-text-3/#spacing)
- [CSS Visual formatting model details](https://drafts.csswg.org/css2/visudet.html)

Some examples use a fixed font size to demonstrate specific aspects of the rule (notably in order to provide a [computed][] value for the property). This is in general not a very good practice and should be avoided.

## Test Cases

### Passed

#### Passed Example 1

This `p` element has a [computed][] `word-spacing` of `3.2px` (assuming a default `medium` font size of `16px`) which is above the recommended metric, thus it matches the **above minimum** condition.

```html
<p style="word-spacing: 0.2em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 2

This `p` element has a [computed][] `word-spacing` of `4px` specified via the style attribute, which is equal to the recommended minimum given the specified font size is 25 pixels, thus it matches the **above minimum** condition.

```html
<style>
	p {
		font-size: 25px;
	}
</style>

<p style="word-spacing: 4px !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 3

This `p` element has two [declared][] values for its `word-spacing` property. The latest wins the [cascade sort][]. It has a value of `0.2em`, more than 0.16 times the font size and therefore matches the **above minimum** condition.

```html
<p style="word-spacing: 0.1em !important; word-spacing: 0.2em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 4

This `p` element has two [declared][] values for its `word-spacing` property. The one which is [important][] wins the [cascade sort][]. It has a value of `0.2em`, more than 0.16 times the font size and therefore matches the **above minimum** condition.

```html
<p style="word-spacing: 0.2em !important; word-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 5

This `p` element has a [normal][] [computed][] `word-spacing`, thus it matches the **normal** condition. Even though the value is too small, styles with [author origin][] declared by assistive technologies may win the [cascade sort][] and override it, thus this may satisfy [Success Criterion 1.4.12 Text Spacing][sc1412] and does not fail this rule. This is nonetheless bad practice and sufficient height should be used.

```html
<p style="word-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 6

This `p` element has two [declared][] values for its `word-spacing` property (in the style sheet and in the `style` attribute). The one from the style sheet wins the [cascade sort][] because it is [important][]. Since it is not [declared][] via the `style` attribute, it matches the **cascade** condition. Note that neither the **above minimum** (because the [computed][] value is only 0.1 times the font size), nor the **normal** (because the [computed][] value comes from the style sheet and is [important][]) conditions are matched. Even though the value is too small, styles with [author origin][] declared by assistive technologies may win the [cascade sort][] and override it, thus this may satisfy [Success Criterion 1.4.12 Text Spacing][sc1412] and does not fail this rule. This is nonetheless bad practice and sufficient height should be used.

```html
<style>
	p {
		word-spacing: 0.1em !important;
	}
</style>

<p style="word-spacing: 0.2em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 7

Both this `p` and `span` elements match the **normal** condition. For the `span`, the [cascaded][] value is `inherit !important`, thus the [computed][] value is the [inherited][] value, that is the [computed][] value of its parent, and it is [normal][]. Note that neither the **above minimum** (because the [computed][] value is only 0.1 times the font size), nor the **cascade** (because the [cascaded][] value comes from the `style` attribute) conditions are matched. Even though the value is too small, styles with [author origin][] declared by assistive technologies may win the [cascade sort][] and override it, thus this may satisfy [Success Criterion 1.4.12 Text Spacing][sc1412] and does not fail this rule. This is nonetheless bad practice and sufficient spacing should be used.

```html
<p style="word-spacing: 0.1em">
	<span style="word-spacing: inherit !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

#### Passed Example 8

Both this `p` and `span` elements match the **normal** condition. For the `span`, the [cascaded][] value is `unset !important`, which is equivalent as `inherit` since it is an inherited property, thus the [computed][] value is the [inherited][] value, that is the [computed][] value of its parent, and it is [normal][]. Even though the value is too small, styles with [author origin][] declared by assistive technologies may win the [cascade sort][] and override it, thus this may satisfy [Success Criterion 1.4.12 Text Spacing][sc1412] and does not fail this rule. This is nonetheless bad practice and sufficient spacing should be used.

```html
<p style="word-spacing: 0.1em">
	<span style="word-spacing: unset !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

### Failed

#### Failed Example 1

This `p` element has a [computed][] `word-spacing` of `1.6px` (assuming a default `medium` font size of `16px`) which is below the recommended minimum.

```html
<p style="word-spacing: 0.1em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 2

This `p` element has a [computed][] `word-spacing` of `2px` which is only 0.1 times the font size (`20px`), thus below the recommended minimum.

```html
<style>
	p {
		font-size: 20px;
	}
</style>

<p style="word-spacing: 2px !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 3

This `p` element has a [computed][] `word-spacing` of 0.

```html
<p style="word-spacing: normal !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 4

This `p` element has a [computed][] `word-spacing` of 0.

```html
<p style="word-spacing: initial !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

### Inapplicable

#### Inapplicable Example 1

There is no HTML element.

```svg
<svg xmlns="http://www.w3.org/2000/svg"></svg>
```

#### Inapplicable Example 2

This `p` element is not [visible][] because of `display: none`.

```html
<p style="display: none; word-spacing: 0.1em !important;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 3

This `p` element is not [visible][] because it is positioned off-screen.

```html
<p style="position: absolute; top: -999em; word-spacing: 0.1em !important;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 4

This `p` element does not have a `style` attribute specified.

```html
<p>
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 5

The `style` attribute of this `p` element does not [declare][declared] the `word-spacing` property.

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
[normal]: https://www.w3.org/TR/css-cascade-4/#normal 'CSS Cascading and Inheritance Level 4 (Working draft) - Normal declarations'
[sc1412]: https://www.w3.org/TR/WCAG21/#text-spacing 'Success Criterion 1.4.12 Text Spacing'
[sc148]: https://www.w3.org/TR/WCAG21/#visual-presentation 'Success Criterion 1.4.8 Visual Presentation'
[specificity]: https://www.w3.org/TR/selectors/#specificity 'CSS Selectors Level 4 (Working draft) - Specificity'
[user origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-user 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Origin'
[user agent origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-ua 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Agent Origin'
[visible]: #visible 'Definition of visible'
[word-spacing]: https://www.w3.org/TR/css-text-3/#word-spacing-property 'CSS Text Module Level 3 - Word Spacing: the word-spacing property'

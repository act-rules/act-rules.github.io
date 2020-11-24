---
id: 24afc2
name: Letter spacing in `style` attributes is not `!important`
rule_type: atomic
description: |
  This rule checks that the `style` attribute is not used to prevent adjusting `letter-spacing` by using `!important`, except if it's at least `0.12` times the font size.
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

This rule applies to any HTML element that is [visible][], for which the `style` attribute [declares][declared] the [letter-spacing][] CSS property.

## Expectation

For the [letter-spacing][] property of each test target, one of the following is true:

- **above minimum**: its [computed][] value is at least `0.12` times its [computed][] [font-size][].
- **not `!important`**: its [cascaded][] value does not have the [important flag][]; or
- **cascade**: its [cascaded][] value is not the value [declared][] in the `style` attribute; or

## Assumptions

There is no mechanism available on the page to adjust letter spacing. If there is such a mechanism, failing this rule might not mean [success criterion 1.4.12 Text spacing](https://www.w3.org/TR/WCAG21/#text-spacing) is not satisfied.

## Accessibility Support

While some assistive technologies are able to set [user origin][] or [user agent origin][] styles, others, such as browser extensions, are only able to set style with the [author origin][]. Such assistive technologies cannot create styles "winning" the [cascade sort][] over a `style` attribute with the [important flag][]. If accessibility support does not include assistive technologies that override [letter-spacing][] through [author origin][], this rule should not be used.

## Background

When a style from [author origin][] is [declared][] in the `style` attribute with the [important flag][] set, it "wins" the [cascade sort] over any other style from [author origin][], i.e. it cannot be overridden by any of these. On the other hand, if such a style is [declared][] in a style sheet, it can still "lose" the [cascade sort][] to declarations with higher [specificity][] or simply coming from a later style sheet (such as ones injected by assistive technologies). This rule ensures that the element is not in the first case and that the style can be overridden by users, unless it is already above the minimum recommended threshold. Styles (with the [important flag][]) that are declared with the [user origin][] or [user agent origin][] can win the [cascade sort][] over styles with the [author origin][]. Therefore, if the assistive technology can produce these styles, the rule is not needed.

- [Understanding Success Criterion 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
- [CSS Text Module Level 3 - Spacing](https://www.w3.org/TR/css-text-3/#spacing)
- [CSS Visual formatting model details](https://drafts.csswg.org/css2/visudet.html)

Some examples use a fixed font size to demonstrate specific aspects of the rule. This is in general not a very good practice and should be avoided.

## Test Cases

### Passed

#### Passed Example 1

This `p` element has a `letter-spacing` of `0.15em` which is above the recommended metric, given the specified font size is `1em`, thus it matches the **above minimum** condition.

```html
<style>
	p {
		font-size: 1em;
	}
</style>

<p style="letter-spacing: 0.15em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 2

This `p` element has a [letter-spacing][] of `3px` specified via the style attribute, which is equal to the recommended minimum given the specified font size is 25 pixels, thus it matches the **above minimum** condition.

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

#### Passed Example 3

This `p` element has two [declared][] values for its `letter-spacing` property. The latest wins the [cascade sort][]. It has a value of `0.15em`, more than 0.12 times the font size and therefore matches the **above minimum** condition.

```html
<style>
	p {
		font-size: 1em;
	}
</style>

<p style="letter-spacing: 0.1em !important; letter-spacing: 0.15em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 4

This `p` element has two [declared][] values for its `letter-spacing` property. The one with the [important flag][] wins the [cascade sort][]. It has a value of `0.15em`, more than 0.12 times the font size and therefore matches the **above minimum** condition.

```html
<style>
	p {
		font-size: 1em;
	}
</style>

<p style="letter-spacing: 0.15em !important; letter-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 5

This `p` element has a `letter-spacing` declared via the `style` attribute without the [important flag][] set, thus it matches the **not `!important`** condition. Even though the value is too small, styles with [author origin][] declared by assistive technologies may win the [cascade sort][] and override it, thus this may satisfy [Success Criterion 1.4.12 Text Spacing][sc1412] and does not fail this rule. This is nonetheless bad practice and sufficient height should be used.

```html
<style>
	p {
		font-size: 1em;
	}
</style>

<p style="letter-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 6

This `p` element has two [declared][] values for its `letter-spacing` property (in the style sheet and in the `style` attribute). The one from the style sheet wins the [cascade sort][] due to the [important flag][]. Since it is not [declared][] via the `style` attribute, it matches the **cascade** condition. Note that neither the **above minimum** (because the [computed][] value is 0.1 times the font size), nor the **not `!important** (because the [cascaded][] value comes from the style sheet and has the [important flag][] set) conditions are matched. Even though the value is too small, styles with [author origin][] declared by assistive technologies may win the [cascade sort][] and override it, thus this may satisfy [Success Criterion 1.4.12 Text Spacing][sc1412] and does not fail this rule. This is nonetheless bad practice and sufficient height should be used.

```html
<style>
	p {
		font-size: 1em;
		letter-spacing: 0.1em !important;
	}
</style>

<p style="letter-spacing: 0.15em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

### Failed

#### Failed Example 1

This `p` element has a `letter-spacing` of `0.1em !important` which is below the recommended minimum, given the specified font size of the body is `1em`.

```html
<style>
	p {
		font-size: 1em;
	}
</style>

<p style="letter-spacing: 0.1em !important">
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
<style>
	p {
		font-size: 1em;
	}
</style>

<p style="display: none; letter-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 3

This text is not [visible][] because it is positioned off-screen.

```html
<style>
	p {
		font-size: 1em;
	}
</style>

<p style="position: absolute; top: -999em; letter-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 4

This `p` element does not have a `style` attribute specified. Even though the value of `letter-spacing` is too small, styles with [author origin][] declared by assistive technologies may win the [cascade sort][] and override it, thus this may satisfy [Success Criterion 1.4.12 Text Spacing][sc1412] and does not fail this rule. This is nonetheless bad practice and sufficient height should be used.

```html
<style>
	p {
		font-size: 1em;
		letter-spacing: 0.1em;
	}
</style>

<p>
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 5

The `style` attribute of this `p` element does not [declare][declared] the `letter-spacing` property. Even though the value of `letter-spacing` is too small, styles with [author origin][] declared by assistive technologies may win the [cascade sort][] and override it, thus this may satisfy [Success Criterion 1.4.12 Text Spacing][sc1412] and does not fail this rule. This is nonetheless bad practice and sufficient height should be used.

```html
<style>
	p {
		font-size: 1em;
		letter-spacing: 0.1em;
	}
</style>

<p style="width: 60%">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

[author origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-author 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - Author Origin'
[cascade sort]: https://www.w3.org/TR/css-cascade-4/#cascade-sort 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascade Sort'
[cascaded]: https://www.w3.org/TR/css-cascade-4/#cascaded 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascaded Values'
[computed]: https://www.w3.org/TR/css-cascade-4/#computed-value 'CSS Cascading and Inheritance Level 4 (Working draft) - Computed Values'
[declared]: https://www.w3.org/TR/css-cascade-4/#declared 'CSS Cascading and Inheritance Level 4 (Working draft) - Declared Values'
[font-size]: https://www.w3.org/TR/css-fonts-4/#propdef-font-size 'CSS Fonts Module Level 4 (Working draft) - Font size: the font-size property'
[important flag]: https://www.w3.org/TR/cssom/#css-declaration-important-flag 'CSS Object Model (CSSOM) - important flag'
[letter-spacing]: https://www.w3.org/TR/css-text-3/#propdef-letter-spacing 'CSS Text Module Level 3 - Tracking: the letter-spacing property'
[specificity]: https://www.w3.org/TR/selectors/#specificity 'CSS Selectors Level 4 (Working draft) - Specificity'
[user origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-user 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Origin'
[user agent origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-ua 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Agent Origin'
[visible]: #visible 'Definition of visible'

---
id: 78fd32
name: Line height in `style` attributes is not `!important`
rule_type: atomic
description: |
  This rule checks that the `style` attribute is not used to prevent adjusting `line-height` by using `!important`, except if it's at least 1.5 times the font size.
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
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML element][] that is [visible][] and for which the `style` attribute [declares][declared] the [line-height][] CSS property.

## Expectation

For each test target, at least one of the following is true:

- **not important**: the [computed][] value of its [line-height][] property is not [important][]; or
- **large enough**: the [computed][] value of its [line-height][] property is not `normal`, and is at least `1.5` or 1.5 times the [computed][] value of its [font-size][] property; or
- **cascade**: the [cascaded][] value of its [line-height][] property is not a value [declared][] in its `style` attribute.

## Assumptions

- There is no mechanism available on the page to adjust [line-height][]. If there is such a mechanism, it is possible to fail this rule while [Success Criterion 1.4.12 Text Spacing][sc1412] is still satisfied.

- This rule assumes that when the [computed][] value of the [line-height][] property is `normal`, user agents chose a [used][] value below 1.5. [CSS recommendation][line-height normal] is to have a [used][] value between 1.0 and 1.2, thus too small to satisfy [Success Criterion 1.4.12 Text Spacing][sc1412].

## Accessibility Support

While some assistive technologies are able to set [user origin][] or [user agent origin][] styles, others, such as browser extensions, are only able to set styles with the [author origin][]. Such assistive technologies cannot create styles "winning" the [cascade sort][] over a `style` attribute with an [important][] declaration. If accessibility support does not include assistive technologies that override [line-height][] through [author origin][], this rule should not be used.

## Background

When a style is [declared][] in the `style` attribute with an [important][] declaration, it "wins" the [cascade sort] over any other style from [author origin][], i.e. it cannot be overridden by any of these. On the other hand, if such a style is [declared][] in a style sheet, it can still "lose" the [cascade sort][] to declarations with higher [specificity][] or simply coming from a later style sheet (such as ones injected by assistive technologies). This rule ensures that the element is not in the first case and that the style can be overridden by users, unless it is already at least the minimum recommended threshold. [Important][] styles that are declared with the [user][user origin] or [user agent][user agent origin] origin can win the [cascade sort][] over styles with the [author origin][].

CSS specifications define each declaration as being either [important][] (if is as the `!important` annotation) or [normal][]. Given that `normal` is also a keyword for this property, and that `!important` is wider known that this distinction, this rule rather uses "[important][]"/"not [important][]" to avoid confusion.

- [Understanding Success Criterion 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
- [CSS Text Module Level 3 - Spacing](https://www.w3.org/TR/css-text-3/#spacing)
- [CSS Visual formatting model details](https://drafts.csswg.org/css2/visudet.html)

## Test Cases

### Passed

#### Passed Example 1

This `p` element has a **not [important][]** [computed][] `line-height`.

```html
<p style="line-height: 1.2em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 2

This `p` element has a [computed][] `line-height` of twice the font size, which is **large enough**.

```html
<p style="line-height: 2em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 3

This `p` element has a [computed][] `line-height` of `30px`, which is **large enough** (the threshold is `30px`).

```html
<style>
	p {
		font-size: 20px;
	}
</style>

<p style="line-height: 30px !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 4

This `p` element has a [computed][] `line-height` of `25.6px` (160% of `16px`) which is **large enough**.

```html
<style>
	p {
		font-size: 16px;
	}
</style>

<p style="line-height: 160% !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 5

This `p` element has a [computed][] `line-height` of `1.6` which is **large enough**.

```html
<p style="line-height: 1.6 !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 6

This `p` element has two [declared][] values for its `line-height` property. The latest wins the [cascade sort][]. It has a value of `2em`, which is **large enough**.

```html
<p style="line-height: 1em !important; line-height: 2em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 7

This `p` element has two [declared][] values for its `line-height` property. The one which is [important][] wins the [cascade sort][]. It has a value of `2em`, which is **large enough**.

```html
<p style="line-height: 2em !important; line-height: 1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 8

The [cascaded][] value of the `line-height` property of this `p` element is [declared][] in the style sheet, not in the `style` attribute (it wins the [cascade sort][] because it is [important][]). Thus, the `p` element matches the **cascade** condition.

```html
<style>
	p {
		line-height: 1.2em !important;
	}
</style>

<p style="line-height: 2em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 9

The [computed][] value of the `line-height` property of this `p` element is **not [important][]**. The [computed][] value of the `line-height` property of this `span` element is the [inherited][] value, that is the [computed][] value of its parent and therefore also **not [important][]**.

```html
<p style="line-height: 1.2em">
	<span style="line-height: inherit !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

#### Passed Example 10

The [computed][] value of the `line-height` property of this `p` element is **not [important][]**. The [computed][] value of the `line-height` property of this `span` element is the [inherited][] value, that is the [computed][] value of its parent and therefore also **not [important][]**.

```html
<p style="line-height: 1.2em">
	<span style="line-height: unset !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

### Failed

#### Failed Example 1

This `p` element has a [computed][] `line-height` equal to the font size, which is below the recommended minimum.

```html
<p style="line-height: 1em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 2

This `p` element has a [computed][] `line-height` of `20px`, which is below the recommended minimum given the specified font size is 20 pixels.

```html
<style>
	p {
		font-size: 20px;
	}
</style>

<p style="line-height: 20px !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 3

This `p` element has a [computed][] `line-height` of `19.2px` (120% of `16px`) which is below the recommended minimum.

```html
<style>
	p {
		font-size: 16px;
	}
</style>

<p style="line-height: 120% !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 4

This `p` element has a [computed][] `line-height` of `1.2` which is below the recommended minimum.

```html
<p style="line-height: 1.2 !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 5

This `p` element has a [computed][] `line-height` of `normal` which is below the recommended minimum ([used][] value is generally around 1.2).

```html
<p style="line-height: normal !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 6

This `p` element has a [computed][] `line-height` of `normal` which is below the recommended minimum ([used][] value is generally around 1.2).

```html
<p style="line-height: initial !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

### Inapplicable

#### Inapplicable Example 1

There is no HTML element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
    <text y="20" style="line-height: 1.2em">ACT rules</text>
</svg>
```

#### Inapplicable Example 2

This `p` element is not [visible][] because of `display: none`.

```html
<p style="display: none; line-height: 1em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 3

This `p` element is not [visible][] because it is positioned off-screen.

```html
<p style="position: absolute; top: -999em; line-height: 1em !important;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 4

The `style` attribute of this `p` element does not [declare][declared] the `line-height` property.

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
[line-height]: https://drafts.csswg.org/css2/visudet.html#propdef-line-height 'CSS Visual formatting model details - line-height property'
[line-height normal]: https://drafts.csswg.org/css2/#valdef-line-height-normal "CSS 2.2 (Editor's draft) - normal line-height"
[normal]: https://www.w3.org/TR/css-cascade-4/#normal 'CSS Cascading and Inheritance Level 4 (Working draft) - Normal declarations'
[sc1412]: https://www.w3.org/TR/WCAG21/#text-spacing 'Success Criterion 1.4.12 Text Spacing'
[specificity]: https://www.w3.org/TR/selectors/#specificity 'CSS Selectors Level 4 (Working draft) - Specificity'
[used]: https://www.w3.org/TR/css-cascade-4/#used 'CSS Cascading and Inheritance Level 4 (Working draft) - Used Values'
[user origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-user 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Origin'
[user agent origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-ua 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Agent Origin'
[visible]: #visible 'Definition of visible'
[html element]: #namespaced-element

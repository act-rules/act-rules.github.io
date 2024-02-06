---
id: 78fd32
name: Important line height in style attributes is wide enough
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
  previous_authors:
    - Jey Nandakumar
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML element][] with one or more [visible][] [text node][] children, when the text inside the elements includes a [soft wrap break][] and all the following are true for the `line-height` property of the element:

- the [specified][] value is [declared][] in a `style` attribute; and
- the [computed][] value is [important][].

## Expectation

For each test target, the [used][] value of its `line-height` property is at least 1.5 times the [computed][] value of its `font-size` property.

## Assumptions

- There is no mechanism available on the page to adjust `line-height`. If there is such a mechanism, it is possible to fail this rule while [Success Criterion 1.4.12 Text Spacing][sc1412] is still satisfied.

- The font size is constant for all text in the element. If font-size changes (e.g., through use of the `::first-line` pseudo-element) then the required line height would also change throughout the element. This is untested by the current rule.

- No other style attributes are used to increase or decrease the distance between lines of text. For example, style attributes such as `position`, `padding`, and `margin` could be used to increase the distance between lines of text to meet [Success Criterion 1.4.12 Text Spacing][sc1412]. Oppositely, those style attributes could also be used to reduce the distance between lines of text. Thus, it is possible to pass this rule, but still fail [Success Criterion 1.4.12 Text Spacing][sc1412] due to other styling choices.

- The text in the element express something in a human language written in a script that uses the `line-height` property.

## Accessibility Support

While some assistive technologies are able to set [user origin][] or [user agent origin][] styles, others, such as browser extensions, are only able to set styles with the [author origin][]. Such assistive technologies cannot create styles "winning" the [cascade sort][] over a `style` attribute with an [important][] declaration.

## Background

Styles [declared][] in a `style` attribute have higher [cascade specificity][] than any selector; therefore, they "win" the [cascade sort] over any other style from [author origin][], i.e. it cannot be overridden by any of these. On the other hand, if such a style is [declared][] in a style sheet, it can still "lose" the [cascade sort][] to declarations with higher [specificity][] or simply coming from a later style sheet (such as ones injected by assistive technologies). This rule ensures that the element is not in the first case and that the style can be overridden by users, unless it is already at least the minimum required threshold. [Important][] styles that are declared with the [user][user origin] or [user agent][user agent origin] can win the [cascade sort][] over styles with the [author origin][].

CSS specifications define each declaration as being either [important][] (if it has the `!important` annotation) or [normal][]. Given that `normal` is also a keyword for some properties, and that `!important` is wider known than this distinction, this rule rather uses "[important][]"/"not [important][]" to avoid confusion.

This rule evaluates the [used][] value of the `line-height` property instead of its [computed][] value because the [used][] value is guaranteed to use absolute units (i.e., pixels). This streamlines comparison with the [computed][] `font-size` which is also absolute. The [computed][] `line-height` may be a unitless number that is harder to compare.

### Bibliography

- [Understanding Success Criterion 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- [CSS Text Module Level 3 - Spacing](https://www.w3.org/TR/css-text-3/#spacing)
- [CSS Visual formatting model details](https://drafts.csswg.org/css2/visudet.html)

### About test cases

Test cases descriptions abusively refer to the CSS properties of text nodes, meaning the one of their parent.

## Test Cases

### Passed

#### Passed Example 1

This `p` element has a [used][] `line-height` of twice the font size.

```html
<p style="line-height: 2em !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 2

This `p` element has a [used][] `line-height` of `30px`, which is exactly 1.5 times the `font-size` of `20px`.

```html
<style>
	p {
		font-size: 20px;
	}
</style>

<p style="line-height: 30px !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 3

This `p` element has a [used][] `line-height` of `25.6px` (160% of `16px`) which is 1.6 times the `font-size`.

```html
<style>
	p {
		font-size: 16px;
	}
</style>

<p style="line-height: 160% !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 4

This `p` element has a [used][] `line-height` of `1.6` times the `font-size`.

```html
<p style="line-height: 1.6 !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 5

This `p` element has two [declared][] values for its `line-height` property. The latest wins the [cascade sort][]. It has a value of `2em`, which is large enough.

```html
<p style="line-height: 1em !important; line-height: 2em !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 6

This `p` element has two [declared][] values for its `line-height` property. The one which is [important][] wins the [cascade sort][]. It has a value of `2em`, which is large enough.

```html
<p style="line-height: 2em !important; line-height: 1em; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 7

This `p` element has a [computed][] `line-height` of `15px`, 1.5 times its [computed][] `font-size` of `10px`; the `div` element has no [visible][] text node children.

```html
<div style="font-size: 16px; line-height: 15px !important">
	<p style="font-size: 10px; max-width: 200px;">
		The toy brought back fond memories of being lost in the rain forest.
	</p>
</div>
```

#### Passed Example 8

This `p` element has a [computed][] `line-height` of 1.5 times its `font-size`; the `div` element has no [visible][] text node children.

```html
<div style="line-height: 1em !important">
	<p style="line-height: 1.5em !important; max-width: 200px;">
		The toy brought back fond memories of being lost in the rain forest.
	</p>
</div>
```

### Failed

#### Failed Example 1

This `p` element has a [used][] `line-height` equal to the font size, which is below the required minimum.

```html
<p style="line-height: 1em !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 2

This `p` element node has a [used][] `line-height` of `20px`, which is below the required minimum given the specified font size is 20 pixels.

```html
<style>
	p {
		font-size: 20px;
	}
</style>

<p style="line-height: 20px !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 3

This `p` element has a [used][] `line-height` of `19.2px` (120% of `16px`) which is below the required minimum.

```html
<style>
	p {
		font-size: 16px;
	}
</style>

<p style="line-height: 120% !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 4

This `p` element has a [used][] `line-height` of `1.2` which is below the required minimum.

```html
<p style="line-height: 1.2 !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 5

This `p` element has a [computed][] `line-height` of `normal` which is below the required minimum ([used][] value for `normal` is generally around 1.2).

```html
<p style="line-height: normal !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 6

This `p` element has a [computed][] `line-height` of `normal` which is below the required minimum ([used][] value for `normal` is generally around 1.2).

```html
<p style="line-height: initial !important; max-width: 200px;">
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

There is no text node.

```html
<div style="line-height: 0.1em !important;"></div>
```

#### Inapplicable Example 3

There is no [visible][] text node because of `display: none`.

```html
<p style="display: none; line-height: 1em !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 4

There is no [visible][] text node because it is positioned off-screen.

```html
<p style="position: absolute; top: -999em; line-height: 1em !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 5

This `p` element will never have a [soft wrap break][] due to the use of an overflow container. In this case, even changing the view port size will not cause a [soft wrap break][]; the `div` element has no [visible][] text node children.

```html
<div style="overflow-x: scroll;">
	<p style="line-height: 1em !important; width: 1000px;">
		The toy brought back fond memories of being lost in the rain forest.
	</p>
</div>
```

#### Inapplicable Example 6

This `p` element's `line-height` property is not [declared][] in a `style` attribute.

```html
<p style="width: 60%; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 7

The [specified][] value of the `line-height` property of this `p` element is [declared][] in the style sheet, not in the `style` attribute (it wins the [cascade sort][] because it is [important][]).

```html
<style>
	p {
		line-height: 1.2em !important;
	}
</style>

<p style="line-height: 2em; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 8

This `p` element does not have an [important][] [computed][] `line-height`.

```html
<p style="line-height: 1.2em; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 9

The [computed][] value of the `line-height` property of this `span` element is the [inherited][] value, that is the [computed][] value of the `p` element and therefore not [important][]; the `p` element has no [visible][] text node children.

```html
<p style="line-height: 1.2em">
	<span style="line-height: inherit !important; display: block; max-width: 200px;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

#### Inapplicable Example 10

The [computed][] value of the `line-height` property of this `span` element is the [inherited][] value, that is the [computed][] value of the `p` element and therefore not [important][]; the `p` element has no [visible][] text node children.

```html
<p style="line-height: 1.2em">
	<span style="line-height: unset !important; display: block; max-width: 200px;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

[author origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-author 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - Author Origin'
[cascade sort]: https://www.w3.org/TR/css-cascade-4/#cascade-sort 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascade Sort'
[cascade specificity]: https://www.w3.org/TR/css-cascade-3/#cascade-specificity 'CSS Cascading and Inheritance Level 4 (Candidate Recommendation) - Cascade specificity'
[computed]: https://www.w3.org/TR/css-cascade-4/#computed 'CSS Cascading and Inheritance Level 4 (Working draft) - Computed Values'
[declared]: https://www.w3.org/TR/css-cascade-4/#declared 'CSS Cascading and Inheritance Level 4 (Working draft) - Declared Values'
[html element]: #namespaced-element
[important]: https://www.w3.org/TR/css-cascade-4/#importance 'CSS Cascading and Inheritance Level 4 (Working draft) - Importance'
[inherited]: https://www.w3.org/TR/css-cascade-4/#inheriting 'CSS Cascading and Inheritance Level 4 (Working draft) - Inherited Values'
[normal]: https://www.w3.org/TR/css-cascade-4/#normal 'CSS Cascading and Inheritance Level 4 (Working draft) - Normal declarations'
[sc1412]: https://www.w3.org/TR/WCAG22/#text-spacing 'Success Criterion 1.4.12 Text Spacing'
[soft wrap break]: https://www.w3.org/TR/css-text-3/#soft-wrap-break
[specificity]: https://www.w3.org/TR/selectors/#specificity 'CSS Selectors Level 4 (Working draft) - Specificity'
[specified]: https://www.w3.org/TR/css-cascade-4/#specified 'CSS Cascading and Inheritance Level 4 (Working draft) - Specified Values'
[text node]: https://dom.spec.whatwg.org/#text
[used]: https://www.w3.org/TR/css-cascade-4/#used 'CSS Cascading and Inheritance Level 4 (Working draft) - Used Values'
[user origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-user 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Origin'
[user agent origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-ua 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Agent Origin'
[visible]: #visible 'Definition of visible'

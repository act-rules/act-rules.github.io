---
id: 9e45ec
name: Important word spacing in style attributes is wide enough
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
  previous_authors:
    - Jey Nandakumar
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML element][] with one or more [visible][] [text node][] children, when all the following are true for the `word-spacing` property of the element:

- the [specified][] value is [declared][] in a `style` attribute; and
- the [computed][] value is [important][].

## Expectation

For each test target, the [computed][] value of its `word-spacing` property is at least 0.16 times the [computed][] value of its `font-size` property.

## Assumptions

- There is no mechanism available on the page to adjust `word-spacing`. If there is such a mechanism, it is possible to fail this rule while [Success Criterion 1.4.12 Text Spacing][sc1412] is still satisfied.

- The font size is constant for all text in the element. If `font-size` changes (e.g., through use of the `::first-line` pseudo-element) then the required word spacing would also change throughout the element. This is untested by the current rule.

- This rule assumes that WCAG's meaning for the "Word spacing style property" is the value of the CSS `word-spacing` property rather than the actual space between words. The value of the CSS property is _added_ to whichever spacing already exist (for example, the size of the space character). Thus, the actual space between words is larger than the value of the `word-spacing` property. If [Success Criterion 1.4.12 Text Spacing][sc1412] is concerned by the actual space between words, then this rule may fail (with the `word-spacing` property being too small) while the Success Criterion is still satisfied (with the actual space being enough).

- This rule assumes that when inter-words space is changed because of justification, the `word-spacing` property is not changed (the change occurs on the width of the space character between the words). Therefore, whether a text is justified or not doesn't change the result of this rule. Note that justifying text is a failure of [Success Criterion 1.4.8 Visual Presentation][sc148].

- At least one text node child of the element express something in a human language written in a script that uses the `word-spacing` property.

## Accessibility Support

While some assistive technologies are able to set [user origin][] or [user agent origin][] styles, others, such as browser extensions, are only able to set styles with the [author origin][]. Such assistive technologies cannot create styles "winning" the [cascade sort][] over a `style` attribute with an [important][] declaration.

## Background

Styles [declared][] in a `style` attribute have higher [cascade specificity][] than any selector; therefore, they "win" the [cascade sort] over any other style from [author origin][], i.e. it cannot be overridden by any of these. On the other hand, if such a style is [declared][] in a style sheet, it can still "lose" the [cascade sort][] to declarations with higher [specificity][] or simply coming from a later style sheet (such as ones injected by assistive technologies). This rule ensures that the element is not in the first case and that the style can be overridden by users, unless it is already at least the minimum required threshold. [Important][] styles that are declared with the [user][user origin] or [user agent][user agent origin] can win the [cascade sort][] over styles with the [author origin][].

CSS specifications define each declaration as being either [important][] (if it has the `!important` annotation) or [normal][]. Given that `normal` is also a keyword for some properties, and that `!important` is wider known than this distinction, this rule rather uses "[important][]"/"not [important][]" to avoid confusion.

### Bibliography

- [Understanding Success Criterion 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- [CSS Text Module Level 3 - Spacing](https://www.w3.org/TR/css-text-3/#spacing)
- [CSS Visual formatting model details](https://drafts.csswg.org/css2/visudet.html)

### About test cases

Test cases descriptions abusively refer to the CSS properties of text nodes, meaning the one of their parent.

## Test Cases

### Passed

#### Passed Example 1

This `p` element has a [computed][] `word-spacing` of 0.2 times the font size.

```html
<p style="word-spacing: 0.2em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 2

This `p` element has a [computed][] `word-spacing` of `4px`, which is exactly 0.16 times the [computed][] `font-size`.

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

This `p` element has two [declared][] values for its `word-spacing` property. The latest wins the [cascade sort][]. It has a value of `0.2em`, which is wide enough.

```html
<p style="word-spacing: 0.1em !important; word-spacing: 0.2em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 4

This `p` element has two [declared][] values for its `word-spacing` property. The one which is [important][] wins the [cascade sort][]. It has a value of `0.2em`, which is wide enough.

```html
<p style="word-spacing: 0.2em !important; word-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 5

This `p` element has a [computed][] `word-spacing` of `2px`, 0.2 times its [computed][] `font-size` of `10px`; the `div` element has no [visible][] text node children.

```html
<div style="font-size: 16px; word-spacing: 2px !important">
	<p style="font-size: 10px;">
		The toy brought back fond memories of being lost in the rain forest.
	</p>
</div>
```

#### Passed Example 6

This `p` element has a [computed][] `word-spacing` of 0.2 times its `font-size`; the `div` element has no [visible][] text node children.

```html
<div style="word-spacing: 0.1em !important">
	<p style="word-spacing: 0.2em !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</p>
</div>
```

### Failed

#### Failed Example 1

This `p` element has a [computed][] `word-spacing` of only 0.1 times the `font-size`, which is below the required minimum.

```html
<p style="word-spacing: 0.1em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 2

This `p` element has a [computed][] `word-spacing` of `2px` which is only 0.1 times the `font-size` (`20px`), thus below the required minimum.

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
<svg xmlns="http://www.w3.org/2000/svg">
    <text y="20" style="word-spacing: 0.1em">ACT rules</text>
</svg>
```

#### Inapplicable Example 2

There is no text node.

```html
<div style="word-spacing: 0.1em !important;"></div>
```

#### Inapplicable Example 3

There is no [visible][] text node because of `display: none`.

```html
<p style="display: none; word-spacing: 0.1em !important;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 4

There is no [visible][] text node because it is positioned off-screen.

```html
<p style="position: absolute; top: -999em; word-spacing: 0.1em !important;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 5

This `p` element's `word-spacing` property is not [declared][] in a `style` attribute.

```html
<p style="width: 60%">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 6

The [specified][] value of the `word-spacing` property of this `p` element is [declared][] in the style sheet, not in the `style` attribute (it wins the [cascade sort][] because it is [important][]).

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

#### Inapplicable Example 7

This `p` element does not have an [important][] [computed][] `word-spacing`.

```html
<p style="word-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 8

The [computed][] value of the `word-spacing` property of this `span` element is the [inherited][] value, that is the [computed][] value of the `p` element and therefore not [important][]; the `p` element has no [visible][] text node children.

```html
<p style="word-spacing: 0.1em">
	<span style="word-spacing: inherit !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

#### Inapplicable Example 9

The [computed][] value of the `word-spacing` property of this `span` element is the [inherited][] value, that is the [computed][] value of the `p` element and therefore not [important][]; the `p` element has no [visible][] text node children.

```html
<p style="word-spacing: 0.1em">
	<span style="word-spacing: unset !important;">
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
[sc148]: https://www.w3.org/TR/WCAG22/#visual-presentation 'Success Criterion 1.4.8 Visual Presentation'
[specificity]: https://www.w3.org/TR/selectors/#specificity 'CSS Selectors Level 4 (Working draft) - Specificity'
[specified]: https://www.w3.org/TR/css-cascade-4/#specified 'CSS Cascading and Inheritance Level 4 (Working draft) - Specified Values'
[text node]: https://dom.spec.whatwg.org/#text
[user origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-user 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Origin'
[user agent origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-ua 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Agent Origin'
[visible]: #visible 'Definition of visible'
[html element]: #namespaced-element

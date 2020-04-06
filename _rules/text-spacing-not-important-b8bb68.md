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

## Expectation

The target element does not have an overriding property value with `!important` specified for any of the above applicable CSS properties, except when value is below the permissible minimum respectively:

**Note**: The permissible minimum values are `0.16em` for [word-spacing][], `0.12em` for [letter-spacing][], and `1.5em` for [line-height][] respectively.

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

This `p` element has a `line-height` of `1.2em` which is below the permissible minimum.

```html
<p style="line-height: 1.2em;">
	The quick brown fox jumps over the lazy dog
</p>
```

#### Passed Example 2

This `span` element has a `letter-spacing` of `1.5em !important` which is equal to the permissible minimum.

```html
<span style="letter-spacing: 1.5em !important;">
	The quick brown fox jumps over the lazy dog
</span>
```

### Failed

#### Failed Example 1

This `p` element has a `word-spacing` of `0.15em !important` which has `!important` and is above the permissible minimum.

```html
<p style="word-spacing: 0.15em !important;">
	The quick brown fox jumps over the lazy dog
</p>
```

### Inapplicable

#### Inapplicable Example 1

This `p` element is not [visible][] because of `display: none`.

```html
<p style="display: none">
	The quick brown fox jumps over the lazy dog
</p>
```

#### Inapplicable Example 2

This text is not [visible][] because it is positioned off screen.

```html
<p style="position: absolute; top: -999em">
	The quick brown fox jumps over the lazy dog
</p>
```

[visible]: #visible 'Definition of visible'
[word-spacing]: https://www.w3.org/TR/css-text-3/#word-spacing-property 'CSS Text Module Level 3 - Word Spacing: the word-spacing property'
[letter-spacing]: https://www.w3.org/TR/css-text-3/#propdef-letter-spacing 'CSS Text Module Level 3 - Tracking: the letter-spacing property'
[line-height]: https://drafts.csswg.org/css2/visudet.html#propdef-line-height 'CSS Visual formatting model details - line-height property'

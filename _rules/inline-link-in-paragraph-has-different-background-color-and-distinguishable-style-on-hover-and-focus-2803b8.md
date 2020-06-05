---
id: 2803b8
name: Inline link has different background color and distinguishable style on hover and focus
rule_type: atomic
description: |
  This rule checks that inline links with different background color have a style on hover and focus that distinguishes them from the surrounding text
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Brian Bors
    - Carlos Duarte
    - Wilco Fiers
---

## Applicability

This rule applies to any [visible][] HTML element that is a [semantic link][], for which all the following is true:

- **link text**: The element has [visible][] [text nodes][text node] as [descendants][descendant] in the [flat tree][]; and
- **non-link line text**: The element is [rendered on a line][] containing [visible][] [text nodes][text node] that are not [descendants][descendant] in the [flat tree][] of a [semantic link][].

## Expectation

For each test target all the following are true:

- a [highest possible contrast][] that is at least 3.0:1 between its [background color][] and the [background color][] of the [visible][] [text nodes][text node] [rendered on the same line][rendered on a line] that are not [descendants][descendant] in the [flat tree][] of a [semantic link][]; and
- a [distinguishing style][] both when the target element [gains focus][focused] and when the target element is [hovered][].

## Assumptions

- The link is distinguishable from the rest of the text with color, which means it fails SC 1.4.1 when there is not another way to distinguish it.
- The 3:1 contrast difference between text is minimal to what would be sufficient to meet WCAG 2.0. This value is part of [technique G183](https://www.w3.org/WAI/WCAG21/Techniques/general/G183), but is not specified in the [1.4.1 success criterion](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html).
- Any change in font is sufficiently distinguishable, and fonts are loaded when they are present.
- If different background colors are used by the different visible non-link text nodes then the background color can not be a distinguishing factor.

## Accessibility Support

_No accessibility support issues known._

## Background

- [Understanding Success Criterion 1.4.1: Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)
- [G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them](https://www.w3.org/WAI/WCAG21/Techniques/general/G183)
- [F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision](https://www.w3.org/WAI/WCAG21/Techniques/failures/F73)
- [C15: Using CSS to change the presentation of a user interface component when it receives focus](https://www.w3.org/WAI/WCAG21/Techniques/css/C15)

## Test Cases

### Passed

#### Passed Example 1

This link, that is a descendant of a paragraph element, has text that has a background color contrast of more than 3:1 compared to the other text in the paragraph. When the link receives focus, an underline appears. When the link receives hover, an underline appears.

```html
<style>
	a {
		text-decoration: none;
		color: #000;
		background-color: #cf5e42;
	}
	a:hover,
	a:focus {
		text-decoration: underline;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.</p>
```

### Failed

#### Failed Example 1

This link, that is a descendant of a paragraph element, has no visual cues of being recognized as a link with the underline removed.

```html
<style>
	a.test {
		text-decoration: none;
	}
</style>
<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage</a>.</p>
```

### Inapplicable

#### Inapplicable Example 1

There is no [semantic link][] element.

```html
<p>Read about WAI on the <u>underlined text</u>.</p>
```

#### Inapplicable Example 2

This link is not [visible][].

```html
<p>Read about WAI on the <a href="http://w3.org/WAI" style="visibility:hidden">WAI webpage</a>.</p>
```

#### Inapplicable Example 3

This link is the only content in the inline block of content it belongs to.

```html
<p><a href="http://w3.org/WAI">WAI webpage</a></p>
```

#### Inapplicable Example 4

Each link is the only content in the inline block of content it belongs to.

```html
<ul>
	<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html">SC 1.1.1</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded">SC 1.2.1</a></li>
</ul>
```

#### Inapplicable Example 5

There are only [semantic links][semantic link] in the inline block of content.

```html
<p><a href="https://www.w3.org">W3C </a><span role="link" onclick="location='https://www.w3.org/WAI/'">WAI</span></p>
```

[background color]: #background-colors-of-element 'Definition of background colors of element'
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[distinguishing style]: #distinguishing-styles 'Definition of distinguishing styles'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focused]: #focused 'Definition of focused'
[highest possible contrast]: #highest-possible-contrast 'Definition of highest possible contrast'
[hovered]: #hovered 'Definition of hovered'
[rendered on a line]: #rendered-on-a-line 'Definition of rendered on a line'
[semantic link]: #semantic-link 'Definition of semantic link'
[text node]: https://dom.spec.whatwg.org/#text
[visible]: #visible 'Definition of visible'

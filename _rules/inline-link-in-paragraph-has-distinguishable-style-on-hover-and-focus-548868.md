---
id: 548868
name: Inline link has distinguishable style or content on hover and focus
rule_type: atomic
description: |
  This rule checks that inline links are distinguishable from the surrounding text through a difference in style or content when the links are hovered or focused.
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

- **link text**: the element has [visible][] [text nodes][text node] as [descendants][descendant] in the [flat tree][]; and
- **non-link line text**: the element is [rendered on a line][] containing [visible][] [text nodes][text node] that are not [descendants][descendant] in the [flat tree][] of a [semantic link][]; or
- **different color**: the element's [foreground color][] and the [foreground color][] of the **non-link line text** elements have a [highest possible contrast][] that is at least 3.0:1, or the element's [background color][] and the [background color][] of the **non-link line text** elements have a [highest possible contrast][] that is at least 3.0:1.

## Expectation

For each test target, at least one of the following is true when it is [focused][] or [hovered][]:

- **distinguishing style**: the element has a [distinguishable style][] not based on color alone from the **non-link line text** elements; or
- **distinguishing content**: the element has adjacent content (such as an image or text) that indicates the test target is a link.

## Assumptions

- A 3:1 contrast difference, which is the minimum required to meet WCAG 2.0, between the colors of the link text and the non-link text is enough for [Success Criterion 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html). This value is part of [technique G183](https://www.w3.org/WAI/WCAG21/Techniques/general/G183) but is not specified in the [1.4.1 success criterion](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html).
- Any change in font is sufficiently distinguishable, and fonts are loaded when they are present.
- The same foreground color and the same background color is used by all the visible text nodes of the _ancestor_ element that are not part of the target element, otherwise color can not be a distinguishing factor.
- The same `box-shadow` is used by all the visible text nodes of the _ancestor_ element that are not part of the target element, otherwise `box-shadow` can not be a distinguishing factor.
- The same `border` is used by all the visible text nodes of the _ancestor_ element that are not part of the target element, otherwise `border` can not be a distinguishing factor.
- The perceived visual styling of elements is the result of CSS styling applied to those elements and inherited from their _ancestor_ elements. Through manipulation of the positioning and styles of other elements, including non inherited styles of _ancestor_ elements, an element may end up with a perceived distinguishable style not resulting from its own and inherited styling. In that case, this rule might fail while the [Success Criterion 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html) might still be satisfied.

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

This link, that is distinguishable by color from the other text in the same line, uses a style similar to the default styling of links (underline) when it is focused or hovered.

```html
<style>
	p {
		color: black;
		background-color: white;
	}
	a {
		text-decoration: none;
		color: blue;
		background-color: white;
	}
	a:hover,
	a:focus {
		text-decoration: underline;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### Passed Example 2

This link, that is distinguishable by the background color from the other text in the same line, uses a style similar to the default styling of links (underline) when it is focused or hovered.

```html
<style>
	p {
		color: black;
		background-color: white;
	}
	a {
		color: black;
		background-color: #C84D32;
		text-decoration: underline;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### Passed Example 3

This element with a [semantic role][] that inherits from link, that is distinguishable by color from the other text in the same line, uses a style similar to the default styling of links (underline) when it is focused or hovered.

```html
<style>
	p {
		color: black;
		background-color: white;
	}
	a {
		color: blue;
		background-color: white;
		text-decoration: none;
	}
	a:hover,
	a:focus {
		text-decoration: underline;
	}
</style>
<p>This is indicated in the cost of a <a href="#bcc0f155" role="doc-glossref">credit default swap</a>.</p>
<h1>Glossary</h1>
<p id="bcc0f155">
	A credit default swap (CDS) is a financial derivative or contract that allows an investor to "swap" or offset his or
	her credit risk with that of another investor.
</p>
```

#### Passed Example 4

This link, that is distinguishable by color from the other text in the same line, has a distinguishable bottom border when it is hovered or focused.

```html
<style>
	p {
		color: black;
		background-color: white;
	}
	a {
		color: blue;
		background-color: white;
		text-decoration: none;
	}
	a:hover,
	a:focus {
		border-style: solid;
		border-color: red;
		border-width: 0px;
		border-bottom-width: 1px;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### Passed Example 5

This link, that is distinguishable by color from the other text in the same line, has a distinguishable box-shadow when it is hovered or focused.

```html
<style>
	p {
		color: black;
		background-color: white;
	}
	a {
		color: blue;
		background-color: white;
		text-decoration: none;
	}
	a:hover,
	a:focus {
		box-shadow: 4px 4px;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### Passed Example 6

This link, that is distinguishable by color from the other text in the same line, has a distinguishable font-style when it is hovered or focused.

```html
<style>
	p {
		color: black;
		background-color: white;
	}
	a {
		color: blue;
		background-color: white;
		text-decoration: none;
	}
	a:hover,
	a:focus {
		font-style: italic;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### Passed Example 7

This link, that is distinguishable by color from the other text in the same line, has an icon that appears when the link is focused or hovered. This icon distinguishes the element as a link.

```html
<style>
	p {
		color: black;
		background-color: white;
	}
	a {
		color: blue;
		background-color: white;
		text-decoration: none;
	}
	.hide {
		display: none;
	}
	a:hover img.hide,
	a:focus img.hide {
		display: inline;
	}
</style>
<p>
	Read about WAI on the
	<a href="http://w3.org/WAI">WAI webpage <img class="hide" src="/test-assets/be4d0c/icon.png" alt="" /></a>.
</p>
```

### Failed

#### Failed Example 1

This link, that is distinguishable by color from the other text in the same line, has no other visual cues of being recognized as a link with the underline removed.

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

This link is the only text rendered in its line.

```html
<p><a href="http://w3.org/WAI">WAI webpage</a></p>
```

#### Inapplicable Example 4

Each link is the only text rendered in their respective line.

```html
<ul>
	<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html">SC 1.1.1</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded">SC 1.2.1</a></li>
</ul>
```

#### Inapplicable Example 5

There is no text belonging to non [semantic links][semantic link] in this line.

```html
<p><a href="https://www.w3.org">W3C </a><span role="link" onclick="location='https://www.w3.org/WAI/'">WAI</span></p>
```

#### Inapplicable Example 6

This link is not distinguishable by color from the other text rendered in its line.

```html
<style>
	p {
		color: black;
		background-color: white;
	}
	a {
		color: black;
		background-color: white;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.</p>
```

[background color]: #background-colors-of-element 'Definition of background colors of element'
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[distinguishable style]: #distinguishable-styles 'Definition of distinguishable styles'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focused]: #focused 'Definition of focused'
[foreground color]: #foreground-colors-of-text 'Definition of foreground colors of text'
[highest possible contrast]: #highest-possible-contrast 'Definition of highest possible contrast'
[hovered]: #hovered 'Definition of hovered'
[rendered on a line]: #rendered-on-a-line 'Definition of rendered on a line'
[semantic link]: #semantic-link 'Definition of semantic link'
[semantic role]: #semantic-role 'Definition of semantic role'
[text node]: https://dom.spec.whatwg.org/#text
[visible]: #visible 'Definition of visible'

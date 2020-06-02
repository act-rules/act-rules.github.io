---
id: be4d0c
name: Inline link is distinguishable
rule_type: composite
description: |
  This rule checks that inline links have a way to distinguish them from the surrounding text
accessibility_requirements: # Remove whatever is not applicable
  wcag20:1.4.1: # Use of Color (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - e7cc2b
  - 88407d
  - 36f116
  - 66e9f0
  - 548868
  - 2803b8
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

For each test target, the [outcome][] of one of the following rules is "passed":

- [Inline link has distinguishable content](https://act-rules.github.io/rules/e7cc2b)
- [Inline link has distinguishable style not based on color alone](https://act-rules.github.io/rules/88407d)
- [Inline link has distinguishable border](https://act-rules.github.io/rules/36f116)
- [Inline link has distinguishable box-shadow](https://act-rules.github.io/rules/66e9f0)
- [Inline link has different foreground color and distinguishable style on hover and focus](https://act-rules.github.io/rules/548868)
- [Inline link has different background color and distinguishable style on hover and focus](https://act-rules.github.io/rules/2803b8)

## Assumptions

- The link is distinguishable from the rest of the text with color, which means it fails SC 1.4.1 when there is not another way to distinguish it.
- The 3:1 contrast difference between text is minimal to what would be sufficient to meet WCAG 2.0. This value is part of [technique G183](https://www.w3.org/WAI/WCAG21/Techniques/general/G183), but is not specified in the [1.4.1 success criterion](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html).
- Any change in font is sufficiently distinguishable, and fonts are loaded when they are present.
- If multiple colors are used in the visible text nodes of the _ancestor_ element then color can not be a distinguishing factor.
- If `box-shadow` is used in the different visible text nodes of the _ancestor_ element then `box-shadow` can not be a distinguishing factor.
- If `border` is used in the different visible text nodes of the _ancestor_ element then `border` can not be a distinguishing factor.

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

This link, that is a descendant of a paragraph element, uses the default styling of links which underlines them in most browsers, making it a distinguishing style.

```html
<style>
	a {
		text-decoration: underline;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### Passed Example 2

This link, that is a descendant of a paragraph element, has an icon that makes it distinguishable as a link.

```html
<style>
	a.test {
		text-decoration: none;
	}
</style>
<p>
	Read about WAI on the
	<a class="test" href="http://w3.org/WAI">WAI webpage <img src="/test-assets/be4d0c/icon.png" alt="" /></a>.
</p>
```

#### Passed Example 3

This link, that is a descendant of a paragraph element, has text that makes it distinguishable as a link.

```html
<style>
	a.test {
		text-decoration: none;
	}
</style>
<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage by following this link</a>.</p>
```

#### Passed Example 4

This element with a [semantic role][] that inherits from link, that is a descendant of a paragraph element, uses the default styling of links which underlines them in most browsers, making it a distinguishing style.

```html
<style>
	a {
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

#### Passed Example 5

This link, that is a descendant of a paragraph element, has a distinguishing bottom border in addition to being distinguishable by color.

```html
<style>
	p {
		color: black;
		background-color: white;
	}
	a.test {
		color: blue;
		background-color: white;
		text-decoration: none;
		border-style: solid;
		border-color: red;
		border-width: 0px;
		border-bottom-width: 1px;
	}
</style>
<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### Passed Example 6

This link, that is a descendant of a paragraph element, has a distinguishing box-shadow.

```html
<style>
	a.test {
		text-decoration: none;
		box-shadow: 4px 4px;
	}
</style>
<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### Passed Example 7

This link, that is a descendant of a paragraph element, has a text contrast of more than 3:1 compared to the other text in the paragraph. When the link receives focus, an underline appears. When the link receives hover, an underline appears.

```html
<style>
	p {
		color: black;
		background-color: white;
	}
	a {
		text-decoration: none;
		color: #d14826;
		background-color: white;
	}
	a:hover,
	a:focus {
		text-decoration: underline;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### Passed Example 8

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

#### Failed Example 2

This link, that is a descendant of a paragraph element, has a not visible border because it has a width of zero.

```html
<style>
	* {
		color: black;
		background-color: white;
	}
	a.test {
		text-decoration: none;
		border-style: solid;
		border-color: blue;
		border-width: 0px;
	}
</style>
<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### Failed Example 3

This link, that is a descendant of a paragraph element, has a not visible border because its color is transparent.

```html
<style>
	p {
		color: black;
		background-color: white;
	}
	a.test {
		color: blue;
		background-color: white;
		text-decoration: none;
		border-style: solid;
		border-color: #ff000000;
		border-width: 0px;
		border-bottom-width: 1px;
	}
</style>
<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### Failed Example 4

This link, that is a descendant of a paragraph element, does not have a text contrast of more than 3:1 compared to the other text in the paragraph.

```html
<style>
	p {
		color: black;
		background-color: white;
	}
	a {
		text-decoration: none;
		color: #555555;
		background-color: white;
	}
	a:hover,
	a:focus {
		text-decoration: underline;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.</p>
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

#### Inapplicable Example 5

There are only [semantic links][semantic link] in the inline block of content.

```html
<p><a href="https://www.w3.org">W3C </a><span role="link" onclick="location='https://www.w3.org/WAI/'">WAI</span></p>
```

[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[inline box]: https://drafts.csswg.org/css-display/#inline-box 'Definition of inline box'
[outcome]: #outcome 'Definition of outcome'
[rendered on a line]: #rendered-on-a-line 'Definition of rendered on a line'
[semantic link]: #semantic-link 'Definition of semantic link'
[semantic role]: #semantic-role 'Definition of semantic role'
[text node]: https://dom.spec.whatwg.org/#text
[visible]: #visible 'Definition of visible'

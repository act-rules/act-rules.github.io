---
id: be4d0c
name: Inline link has distinguishable style not based on color (hue) alone
rule_type: atomic
description: |
  This rule checks that inline links are distinguishable from the surrounding text through a difference in style not based on color (hue) alone.
accessibility_requirements:
  wcag20:1.4.1: # Use of Color (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Brian Bors
    - Carlos Duarte
  previous_authors:
    - Wilco Fiers
---

## Applicability

This rule applies to any [semantic link][] for which all the following is true:

- **link text**: the [semantic link][] element has [visible][] [text nodes][text node] as [descendants][descendant] in the [flat tree][]; and
- **non-link line text**: the [semantic link][] element is [rendered on a line][] containing [visible][] [text nodes][text node] that are not [descendants][descendant] in the [flat tree][] of a [semantic link][]; and
- **different hue**: the [foreground colors][foreground color] of the [semantic link][] and the [foreground color][] of the **non-link line text** elements have a [different hue][], or the [background colors][background color] of the [semantic link][] and the [background color][] of the **non-link line text** elements have a [different hue][].

## Expectation 1

For each test target there exists at least one element with a [distinguishable style][] from each **non-link line text** elements for which one of the following is true:

- the element is a [visible][] [inclusive descendant][] of the test target; or
- the element is an [ancestor][] of the test target that is not simultaneously an [ancestor][] of the **non-link line text** elements.

## Expectation 2

Expectation 1 holds irrespectively of the test target being [focused][].

## Expectation 3

Expectation 1 holds irrespectively of the test target being [hovered][].

## Expectation 4

Either the test target does not match the [`:any-link` pseudo-class](https://drafts.csswg.org/selectors-4/#any-link-pseudo), or Expectations 2 and 3 hold for each [link history state][] with a **different hue**.


## Assumptions

- Any change in font is sufficiently distinguishable, and fonts are loaded when they are present.
- The same foreground color and the same background color is used by all the visible text nodes of the [line rendering][rendered on a line] element that are not [descendants][descendant] in the [flat tree][] of a [semantic link][], otherwise color can not be a distinguishing factor.
- The same `border` is used by all the visible text nodes of the [line rendering][rendered on a line] element that are not [descendants][descendant] in the [flat tree][] of a [semantic link][], otherwise `border` can not be a distinguishing factor.
- The same `box-shadow` is used by all the visible text nodes of the [line rendering][rendered on a line] element that are not [descendants][descendant] in the [flat tree][] of a [semantic link][], otherwise `box-shadow` can not be a distinguishing factor.
- The same text style is used by all the visible text nodes of the [line rendering][rendered on a line] element that are not [descendants][descendant] in the [flat tree][] of a [semantic link][], otherwise the [text style properties][] can not be a distinguishing factor.
- This rule assumes there is no content (textual or otherwise) to indicate the presence of the link. If there is such content, the rule may fail while [Success Criterion 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html) might still be satisfied.
- The perceived visual styling of elements is the result of CSS styling applied to those elements and inherited from their [ancestor][] elements. Through manipulation of the positioning and styles of other elements, including non inherited styles of [ancestor][] elements, an element may end up with a perceived distinguishable style not resulting from its own and inherited styling. In that case, this rule might fail while the [Success Criterion 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html) might still be satisfied.
- This rule considers that [Success Criterion 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html) only applies if the elements have different hues as stated in the [Understanding Success Criterion 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) document. If the hues are the same and saturation or lightness are not, this creates a difference in contrast, not in the perceived color and [Success Criterion 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html) does not apply. If [Success Criterion 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html) applies to elements that have the same hue but different saturation and lightness, this rule will be inapplicable while [Success Criterion 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html) may still fail.

## Accessibility Support

_No accessibility support issues known._

## Background

Some examples for this rule change the default user agent styling of links. This is done to illustrate the rule. Changing the default styles of links is not endorsed by this rule. With most user agents, this rule passes with the default style; explicit styles are added to make sure the examples work as intended.

- [Understanding Success Criterion 1.4.1: Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)
- [G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them](https://www.w3.org/WAI/WCAG21/Techniques/general/G183)
- [F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision](https://www.w3.org/WAI/WCAG21/Techniques/failures/F73)
- [C15: Using CSS to change the presentation of a user interface component when it receives focus](https://www.w3.org/WAI/WCAG21/Techniques/css/C15)

## Test Cases

### Passed

#### Passed Example 1

This link, with a **different hue** from the other text in the same line, uses a style similar to the default styling of links which underlines them in most browsers, making it a distinguishable style.

```html
<style>
	p {
		color: hsl(0, 50%, 25%);
		background-color: white;
	}
	a {
		color: hsl(232, 50%, 25%);
		background-color: white;
		text-decoration: underline;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI website</a>.</p>
```

#### Passed Example 2

This link, with a **different hue** from the other text in the same line, uses a style similar to the default styling of links (underline) when it is focused or hovered.

```html
<style>
	p {
		color: hsl(0, 50%, 25%);
		background-color: white;
	}
	a {
		text-decoration: none;
		color: hsl(232, 50%, 25%);
		background-color: white;
	}
	a:hover,
	a:focus {
		text-decoration: underline;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI website</a>.</p>
```

#### Passed Example 3

This link, with a background with a **different hue** from the other text in the same line, uses a style similar to the default styling of links which underlines them in most browsers, making it a distinguishable style.

```html
<style>
	p {
		color: white;
		background-color: hsl(232, 50%, 25%);
	}
	a {
		color: white;
		background-color: hsl(0, 50%, 25%);
		text-decoration: underline;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI website</a>.</p>
```

#### Passed Example 4

This element with a [semantic role][] that inherits from link, with a **different hue** from the other text in the same line, uses a style similar to the default styling of links which underlines them in most browsers, making it a distinguishable style.

```html
<style>
	p {
		color: hsl(0, 50%, 25%);
		background-color: white;
	}
	a {
		color: hsl(232, 50%, 25%);
		background-color: white;
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

This link, with a **different hue** from the other text in the same line, has a distinguishable color because the color contrast is 5.0:1.

```html
<style>
	p {
		color: black;
		background-color: white;
	}
	a.test {
		color: crimson;
		background-color: white;
		text-decoration: none;
	}
</style>
<p>
	Read about WAI on the
	<a class="test" href="http://w3.org/WAI">WAI website</a>.
</p>
```

#### Passed Example 6

This link, with a **different hue** from the other text in the same line, has a distinguishable bottom border when it is hovered or focused.

```html
<style>
	p {
		color: hsl(0, 50%, 25%);
		background-color: white;
	}
	a {
		color: hsl(232, 50%, 25%);
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
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI website</a>.</p>
```

#### Passed Example 7

This link, with a **different hue** from the other text in the same line, has a distinguishable box-shadow.

```html
<style>
	p {
		color: hsl(0, 50%, 25%);
		background-color: white;
	}
	a.test {
		color: hsl(232, 50%, 25%);
		background-color: white;
		text-decoration: none;
		box-shadow: 4px 4px;
	}
</style>
<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI website</a>.</p>
```

#### Passed Example 8

This link has a **different hue** from the other text in the same line in both link history states. The link has distinguishing color and background color. The color and background color are different when in the visited state, but these are also distinguishing colors.

```html
<style>
	p {
		color: hsl(0, 50%, 25%);
		background-color: white;
	}
	a:link {
		color: white;
		background-color: blue;
		text-decoration: none;
	}
	a:visited {
		color: hsl(232, 50%, 25%);
		background-color: lightgray;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI website</a>.</p>
```

### Failed

#### Failed Example 1

This link, with a **different hue** from the other text in the same line, has no other visual cues of being recognized as a link because the underline has been removed. Even though the link has a different color from the other text the low difference in contrast (1.2:1) between them means they are not distinguishing colors.

```html
<style>
	p {
		color: hsl(0, 50%, 25%);
		background-color: white;
	}
	a.test {
		color: hsl(232, 50%, 25%);
		background-color: white;
		text-decoration: none;
	}
</style>
<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI website</a>.</p>
```

#### Failed Example 2

This link, with a **different hue** from the other text in the same line, has a different style because of its color and background color. But when the link has been visited, the style is the same of the other text on the same line (only the hue is different), therefore failing Expectation 2.

```html
<style>
	p {
		color: hsl(0, 50%, 25%);
		background-color: white;
	}
	a {
		color: hsl(232, 50%, 25%);
		background-color: #111111;
		text-decoration: none;
	}
	a:visited {
		color: hsl(232, 50%, 25%);
		background-color: white;
	}
</style>
<p>Read about WAI on the <a href="https://www.w3.org/WAI/">WAI website</a>.</p>
```

#### Failed Example 3

This link, with a **different hue** from the other text in the same line, only has a distinguishable font-style when it is focused.

```html
<style>
	p {
		color: hsl(0, 50%, 25%);
		background-color: white;
	}
	a {
		color: hsl(232, 50%, 25%);
		background-color: white;
		text-decoration: none;
	}
	a:focus {
		font-style: italic;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI website</a>.</p>
```

#### Failed Example 4

This link has a descendant element with a **different hue** from the other text in the same line, but it only has a distinguishable bottom border when it is hovered or focused.

```html
<style>
	a {
		text-decoration: none;
	}

	a:hover span,
	a:focus span {
		border-bottom: 2px solid currentColor;
	}
</style>

<p>
	Read about WAI on the <a href="http://w3.org/WAI"><span>WAI website</span></a
	>.
</p>
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
<p>Read about WAI on the <a href="http://w3.org/WAI" style="visibility:hidden">WAI website</a>.</p>
```

#### Inapplicable Example 3

This link with no text nodes has no **link text**.

```html
<p>
	Read about WAI on the
	<a href="http://w3.org/WAI"><img src="test-assets/shared/w3c-logo.png" alt="WAI" /></a>
	website.
</p>
```

#### Inapplicable Example 4

This link is the only text rendered in its line, so there is no **non-link line text**.

```html
<p><a href="http://w3.org/WAI">WAI website</a></p>
```

#### Inapplicable Example 5

Each link is the only text rendered in their respective lines, so there is no **non-link line text**.

```html
<ul>
	<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html">SC 1.1.1</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded">SC 1.2.1</a></li>
</ul>
```

#### Inapplicable Example 6

There is no text belonging to non [semantic links][semantic link] in this line.

```html
<p><a href="https://www.w3.org">W3C </a><span role="link" onclick="location='https://www.w3.org/WAI/'">WAI</span></p>
```

#### Inapplicable Example 7

This link is not distinguishable by color (hue) from the other text rendered in its line.

```html
<style>
	p {
		color: #0a415c; /* hsl(200,80,20) */
		background-color: white;
	}
	a {
		color: #19a1e6; /* hsl(200,80,50); */
		background-color: white;
	}
</style>
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI website</a>.</p>
```

[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'Definition of ancestor'
[background color]: #background-colors-of-element 'Definition of background colors of element'
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[different hue]: #different-hue 'Definition of different hue'
[distinguishable style]: #distinguishable-styles 'Definition of distinguishable styles'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focused]: #focused 'Definition of focused'
[foreground color]: #foreground-colors-of-element 'Definition of foreground colors of element'
[hovered]: #hovered 'Definition of hovered'
[inclusive descendant]: https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant 'Definition of inclusive descendant'
[link history state]: https://drafts.csswg.org/selectors-4/#link 'Definition of Link History pseudo-classes'
[rendered on a line]: #rendered-on-a-line 'Definition of rendered on a line'
[semantic link]: #semantic-link 'Definition of semantic link'
[semantic role]: #semantic-role 'Definition of semantic role'
[text node]: https://dom.spec.whatwg.org/#text
[text style properties]: #text-style-properties 'Definition of text style properties'
[visible]: #visible 'Definition of visible'

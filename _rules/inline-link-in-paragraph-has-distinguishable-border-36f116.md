---
id: 36f116
name: Inline link in paragraph has distinguishable border
rule_type: atomic

description: |
  This rule checks that links that are embedded in a paragraph, list or cell have a border that distinguishes them from the surrounding text

accessibility_requirements: # Remove whatever is not applicable
  wcag20:1.4.1: # Use of Color (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed

input_aspects:
  - DOM Tree
  - CSS Styling

acknowledgements:
  authors:
    - Brian Bors
    - Carlos Duarte
  previous authors:
    - Wilco Fiers
---

## Applicability

This rule applies to any HTML element which:

- has the [semantic role][] of ['link'][link] or a [semantic role][] that inherits from the ['link'][link] role; and
- is a [descendant][] in the [flat tree][] of a `p`, `li` or `td` HTML elements or elements with a [semantic role][] of ['listitem'][listitem] or ['cell'][cell] (with the closest [ancestor][] in the [flat tree][] being henceforth referred to as the _ancestor_ element); and
- has [descendant][] [text nodes][text node] in the [flat tree][] that are [visible][]; and
- the _ancestor_ element has other [descendant][] [visible][] [text nodes][text node] in the [flat tree][].

## Expectation

Each target element has at least one of the `border-top-color`, `border-right-color`, `border-bottom-color` and `border-left-color` style properties with [width](https://drafts.csswg.org/css-backgrounds/#border-width) bigger than 0px and with a [computed](https://drafts.csswg.org/css-cascade/#computed-value) [color value](https://drafts.csswg.org/css-backgrounds/#border-color) different from the `background-color` of the target element.

## Assumptions

- This rule assumes that the link is distinguishable from the rest of the text with color, which means it fails SC 1.4.1 when there is not another way to distinguish it.
- This rule assumes that the 3:1 contrast difference between text is minimal to what would be sufficient to meet WCAG 2.0. This value is part of [technique G183](https://www.w3.org/WAI/WCAG21/Techniques/general/G183), but is not specified in the [1.4.1 success criterion](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html).
- This rule assumes that any change in font is sufficiently distinguishable, and that fonts are loaded when they are present.
- This rule assumes that if multiple colors are used in the visible text nodes of the _ancestor_ element then color can not be a distinguishing factor.
- This rule assumes that if `border` is used in the different visible text nodes of the _ancestor_ element then `border` can not be a distinguishing factor.

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

This is a link that is a descendant of a paragraph element. The link has a distinguishing bottom border in addition to being distinguishable by color.

```html
<style>
	* {
		color: black;
	}
	a.test {
		color: blue;
		text-decoration: none;
		border-style: solid;
		border-color: red;
		border-width: 0px;
		border-bottom-width: 1px;
	}
</style>
<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage</a>.</p>
```

### Failed

#### Failed Example 1

This is a link that is a descendant of a paragraph element. The underline is removed and the link has no visual cues of being recognized as a link.

```html
<style>
	*,
	a.test {
		text-decoration: none;
	}
</style>
<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### Failed Example 2

This is a link that is a descendant of a paragraph element. The link has a distinguishing border but the border's width is zero.

```html
<style>
	* {
		color: black;
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

### Inapplicable

#### Inapplicable Example 1

There is no semantic role of link within this example.

```html
<p>Read about WAI on the <u>underlined text</u>.</p>
```

#### Inapplicable Example 2

This is a link that is not a descendant of a paragraph element.

```html
Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.
```

#### Inapplicable Example 3

This link has no descendant text nodes.

```html
<p>
	Read about WAI on the
	<a href="http://w3.org/WAI">
		<svg role="img" aria-label="W3C" viewBox="0 0 544 272" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path
					d="m16.117 1.006 5.759 19.58 5.759-19.58h4.17 11.444v1.946l-5.879 10.128c2.065.663 3.627 1.868 4.686 3.615 1.059 1.748 1.589 3.799 1.589 6.155 0 2.914-.775 5.363-2.324 7.348s-3.555 2.978-6.017 2.978c-1.854 0-3.469-.589-4.845-1.767-1.377-1.178-2.396-2.773-3.058-4.786l3.256-1.35c.477 1.218 1.106 2.178 1.887 2.879.781.702 1.701 1.052 2.76 1.052 1.112 0 2.052-.622 2.82-1.866.768-1.245 1.152-2.74 1.152-4.489 0-1.933-.411-3.429-1.231-4.488-.954-1.244-2.45-1.867-4.489-1.867h-1.588v-1.906l5.56-9.612h-6.712l-.382.65-8.163 27.548h-.397l-5.958-19.937-5.957 19.937h-.397l-9.53-32.168h4.17l5.759 19.58 3.892-13.185-1.906-6.395z"
				></path>
				<path
					d="m64.92 1.006c-.819 0-1.554.295-2.111.861-.591.6-.92 1.376-.92 2.178s.313 1.545.887 2.128c.583.591 1.334.912 2.145.912.793 0 1.562-.321 2.161-.903.574-.557.887-1.3.887-2.136 0-.811-.321-1.57-.878-2.136-.584-.592-1.344-.904-2.171-.904zm2.643 3.065c0 .701-.271 1.351-.768 1.832-.524.507-1.174.777-1.892.777-.675 0-1.342-.278-1.84-.785s-.777-1.157-.777-1.849.287-1.368.802-1.891c.481-.49 1.131-.751 1.84-.751.726 0 1.376.271 1.883.785.49.489.752 1.147.752 1.882zm-2.559-1.807h-1.3v3.445h.65v-1.469h.642l.701 1.469h.726l-.769-1.57c.498-.102.785-.439.785-.929 0-.625-.472-.946-1.435-.946zm-.118.422c.608 0 .886.169.886.591 0 .405-.278.549-.87.549h-.549v-1.14z"
				></path>
				<path
					d="m59.807.825.676 4.107-2.391 4.575s-.918-1.941-2.443-3.015c-1.285-.905-2.122-1.102-3.431-.832-1.681.347-3.587 2.357-4.419 4.835-.995 2.965-1.005 4.4-1.04 5.718-.056 2.113.277 3.362.277 3.362s-1.452-2.686-1.438-6.62c.009-2.808.451-5.354 1.75-7.867 1.143-2.209 2.842-3.535 4.35-3.691 1.559-.161 2.791.59 3.743 1.403 1 .854 2.01 2.721 2.01 2.721z"
				></path>
				<path
					d="m60.102 24.063s-1.057 1.889-1.715 2.617c-.659.728-1.837 2.01-3.292 2.651s-2.218.762-3.656.624c-1.437-.138-2.772-.97-3.24-1.317s-1.664-1.369-2.34-2.322-1.733-2.859-1.733-2.859.589 1.91.958 2.721c.212.467.864 1.894 1.789 3.136.863 1.159 2.539 3.154 5.086 3.604 2.547.451 4.297-.693 4.73-.97s1.346-1.042 1.924-1.66c.603-.645 1.174-1.468 1.49-1.962.231-.36.607-1.092.607-1.092z"
				></path>
			</g></svg></a
	>.
</p>
```

#### Inapplicable Example 4

This link has no visible descendant text nodes.

```html
<p>Read about WAI on the <a href="http://w3.org/WAI" style="visibility:hidden">WAI webpage</a>.</p>
```

#### Inapplicable Example 5

This paragraph has no descendant text nodes apart from those in the link.

```html
<p><a href="http://w3.org/WAI">WAI webpage</a></p>
```

#### Inapplicable Example 6

This paragraph has no visible descendant text nodes apart from those in the link.

```html
<p><span style="visibility:hidden">Invisible text</span><a href="http://w3.org/WAI">WAI webpage</a></p>
```

[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor
[background color]: #background-colors-of-text 'Definition of background color'
[cell]: https://www.w3.org/TR/wai-aria/#cell
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focused]: #focused 'Definition of focused'
[foreground color]: #foreground-colors-of-text 'Definition of foreground color'
[hovered]: #hovered 'Definition of hovered'
[link]: https://www.w3.org/TR/wai-aria/#link
[listitem]: https://www.w3.org/TR/wai-aria/#listitem
[semantic role]: #semantic-role 'Definition of semantic role'
[text node]: https://dom.spec.whatwg.org/#text
[visible]: #visible 'Definition of visible'

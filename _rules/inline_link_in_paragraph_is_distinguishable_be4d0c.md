---
id: be4d0c
name: Inline link in paragraph is distinguishable
rule_type: atomic

description: |
  This rule checks that links that are embedded in a paragraph have a way to distinguish them as links compared to the rest of the text

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
- is a [descendant][] of a `p` HTML element; and
- has [descendant][] [text nodes][text node] that are [visible][]; and
- the `p` element has other [descendant][] [visible][] [text nodes][text node].

## Expectation

Each target element has either:

- content (such as an image or text) inside, or immediately before or after the test target, that identifies it as a link; or
- a [distinguishing style][] not based on color alone, compared to the other descendent visible text nodes of the same `p` HTML element; or
- a different color, compared to the color of the other descendent visible text nodes of the same `p` HTML element (if all have the same color), that has at least a 3:1 [contrast ratio](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) and a [distinguishing style][] both when the target element [gains focus][focused] and the target element is [hovered][].

## Assumptions

- This rule assumes that the link is distinguishable from the rest of the text with color, which means it fails SC 1.4.1 when there is not another way to distinguish it.
- This test assumes that the 3:1 contrast difference between text is minimal to what would be sufficient to meet WCAG 2.0. This value is part of [technique G183](https://www.w3.org/WAI/WCAG21/Techniques/general/G183), but is not specified in the [1.4.1 success criterion](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html).
- This test assumes that any change in font is sufficiently distinguishable, and that fonts are loaded when they are present.

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

This is a link that is a descendant of a paragraph element and it uses the default styling of links which makes it underlined in most browsers which is a distinguish style.

```html
<p>Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.</p>
```

#### Passed Example 2

This is a link that is a descendant of a paragraph element and the underline is removed but an icon is added to denote it as a link.

```html
<html>
	<head>
		<title>Passed example 2 for rule be4d0c</title>
		<style>
			a.test {
				text-decoration: none;
			}
		</style>
	</head>
	<body>
		<p>
			Read about WAI on the
			<a class="test" href="http://w3.org/WAI">WAI webpage <img src="/test-assets/be4d0c/icon.png" alt=""/></a>.
		</p>
	</body>
</html>
```

#### Passed Example 3

This is a link that is a descendant of a paragraph element and the underline is removed but a text is added to denote it as a link.

```html
<html>
	<head>
		<title>Passed example 3 for rule be4d0c</title>
		<style>
			a.test {
				text-decoration: none;
			}
		</style>
	</head>
	<body>
		<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage by following this link</a>.</p>
	</body>
</html>
```

#### Passed Example 4

This is a link that is a descendant of a paragraph element and the underline is removed but the link has a distinguishing box-shadow which is a distinguishing style.

```html
<html>
	<head>
		<title>Passed example 4 for rule be4d0c</title>
		<style>
			a.test {
				text-decoration: none;
				box-shadow: 4px 4px;
			}
		</style>
	</head>
	<body>
		<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage</a>.</p>
	</body>
</html>
```

#### Passed Example 5

This is a link that is a descendant of a paragraph element and the underline is removed but the link has a text contrast of more than 3:1 compared to the other text in the paragraph and when it receives focus or hover an underline appears.

```html
<html>
	<head>
		<title>Passed example 5 for rule be4d0c</title>
		<style>
			a {
				text-decoration: none;
				color: #d14826;
			}
			a:hover, a:focus {
				text-decoration: underline;
			}
		</style>
	</head>
	<body>
		<p>Read about WAI on the <a href="http://w3.org/WAI">WAI webpage</a>.</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

This is a link that is a descendant of a paragraph element and the underline is removed but the link has no other way of being recognized as a link.

```html
<html>
	<head>
		<title>Failed example 1 for rule be4d0c</title>
		<style>
			a.test {
				text-decoration: none;
			}
		</style>
	</head>
	<body>
		<p>Read about WAI on the <a class="test" href="http://w3.org/WAI">WAI webpage</a>.</p>
	</body>
</html>
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
<p>Read about WAI on the <a href="http://w3.org/WAI"></a>.</p>
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

[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[focused]: #focused 'Definition of focused'
[hovered]: #hovered 'Definition of hovered'
[link]: https://www.w3.org/TR/wai-aria/#link
[semantic role]: #semantic-role 'Definition of semantic role'
[text node]: https://dom.spec.whatwg.org/#text
[visible]: #visible 'Definition of visible'

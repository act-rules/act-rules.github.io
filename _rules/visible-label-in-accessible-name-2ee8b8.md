---
id: 2ee8b8
name: Visible label is part of accessible name
rule_type: atomic
description: |
  Interactive elements labelled through their content must have their visible label as part of their accessible name.
accessibility_requirements:
  wcag21:2.5.3: # Label in Name
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgements:
  authors:
    - Anne Thyme Nørregaard
    - Bryn Anderson
    - Jey Nandakumar
---

## Applicability

This rule applies to any HTML or SVG element that:

- has a [semantic role](#semantic-role) that is a [widget role](https://www.w3.org/TR/wai-aria-1.1/#widget_roles) that [supports name from content](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent), and
- has [descendants](https://www.w3.org/TR/dom41/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) that are [text nodes](https://www.w3.org/TR/dom/#text) which are both [visible](#visible) as well as [included in the accessibility tree](#included-in-the-accessibility-tree), and
- has an [accessible name](#accessible-name), even if the name is empty ("").

**Note**: [widget roles](https://www.w3.org/TR/wai-aria-1.1/#widget_roles) that [support name from content](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent) are: `button`, `checkbox`, `gridcell`, `link`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `switch`, `tab`, `treeitem`.

**Note:** [Text nodes](https://www.w3.org/TR/dom/#text) with only [whitespace](#whitespace) are not [visible](#visible).

## Expectation

After removing all [punctuation](#punctuation) from both the [visible](#visible) [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content) and the [accessible name](#accessible-name), the [visible](#visible) [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content) of the target element is [included](#included-characters) in its entirety within the [accessible name](#accessible-name) of the element, except for parts of the [visible](#visible) [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content) that do not express anything in [human language](https://www.w3.org/TR/WCAG21/#dfn-human-language-s) and therefore does not live up to the [WCAG definition of text](https://www.w3.org/TR/WCAG21/#dfn-text).

**Note:** Due to the definition of [included characters](#included-characters) the whole consecutive sequence of characters in the [visible](#visible) [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content) of the target element has to be included character-by-character (excluding [punctuation](#punctuation)) in the [accessible name](#accessible-name) to meet the expectation of this rule. The [accessible name](#accessible-name) is however allowed to also contain text content other than the [visible](#visible) [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content).

## Assumptions

- This rule assumes that the [visible](#visible) [text nodes](https://www.w3.org/TR/dom/#text) follow the same order as the text in the code, e.g. CSS has not been used to re-arrange pieces of text so that they are presented in a different order.
- This rule assumes that the whole set of [visible](#visible) [text nodes](https://www.w3.org/TR/dom/#text) of the element are styled, including placement, in such a way that a sighted user will perceive them all as part of the label of the element. An example where this would not be the case, is where styling is used to split up the visible text nodes in e.g. two parts and place one part further away, or give it a different styling that makes it appear as not connected to the element it labels.

## Accessibility Support

_No accessibility support issues known._

## Background

- [Understanding Success Criterion 2.5.3: Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
- [Technique G208: Including the text of the visible label as part of the accessible name](https://www.w3.org/WAI/WCAG21/Techniques/general/G208)
- [Technique G211: Matching the accessible name to the visible label](https://www.w3.org/WAI/WCAG21/Techniques/general/G211)

## Test Cases

### Passed

#### Passed Example 1

[Visible][] [label][] and [accessible name][] matches when trailing white spaces are removed.

```html
<div role="link" aria-label="next page ">next page</div>
```

#### Passed Example 2

Character insensitivity between [visible][] [label][] and [accessible name][].

```html
<div role="link" aria-label="Next Page">next page</div>
```

#### Passed Example 3

Full [visible][] [label][] is contained in the [accessible name][].

```html
<button name="link" aria-label="View next Page in the list">Next Page</button>
```

#### Passed Example 4

Full [visible][] [label][] is contained in the [accessible name][], though the name contains more text than the [visible][] [label][].

```html
<head>
	<style>
		.sr-only {
			position: absolute;
			left: -10000px;
			top: auto;
			width: 1px;
			height: 1px;
			overflow: hidden;
		}
	</style>
</head>

<body>
	<a href="https://github.com/pricing">Read more<span class="sr-only"> about our pricing</span></a>
</body>
```

#### Passed Example 5

Text nodes in name from content are not expressing anything in human language and do therefore not live up to the [WCAG definition of text](https://www.w3.org/TR/WCAG21/#dfn-text).

```html
<button aria-label="close">:-)</button>
```

#### Passed Example 6

[Visible][] [label][] and [accessible name][] matches when punctuation is removed.

```html
<div role="link" aria-label="Next page">Next page...</div>
```

#### Passed Example 7

[Visible][label][] and [accessible name][] matches when parts that do not express anything in human language, "X", and punctuation is removed.

```html
<div role="link" aria-label="Close and go back">Close (X) and go back</div>
```

### Failed

#### Failed Example 1

[Visible][] [label][] doesn't match [accessible name][].

```html
<div role="link" aria-label="OK">Next</div>
```

#### Failed Example 2

Not all of [visible][] [label][] is included in [accessible name][].

```html
<button name="link" aria-label="the full">The full label</button>
```

#### Failed Example 3

Mathematical symbols cannot be substituted for text as [explicitly mentioned in WCAG](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name#mathematical-expressions-and-formulae).

```html
<a href="/" aria-label="Proof of two multiplied by two is four">Proof of 2&times;2=4</a>
```

#### Failed Example 4

The full [visible][] [label][] is split out across the [accessible name][] and is therefore not [included](#included-characters) in it.

```html
<head>
	<style>
		.sr-only {
			position: absolute;
			left: -10000px;
			top: auto;
			width: 1px;
			height: 1px;
			overflow: hidden;
		}
	</style>
</head>

<body>
	<a href="https://github.com/features/actions"
		>Link <span class="sr-only">that opens a new tab</span> to the homepage</a
	>
</body>
```

### Inapplicable

#### Inapplicable Example 1

Not a widget role.

```html
<a aria-label="OK">Next</a>
```

#### Inapplicable Example 2

Widget role that does not support name from content.

```html
<input type="email" aria-label="E-mail" value="Contact" />
```

#### Inapplicable Example 3

Non-widget role that supports name from content.

```html
<div role="tooltip" aria-label="OK">Next</div>
```

#### Inapplicable Example 4

No [rendered text](#rendered-text) in name from content.

```html
<div role="tooltip" aria-label="OK"></div>
```

#### Inapplicable Example 5

Non-text content.

```html
<button aria-label="close">X</button>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[visible]: #visible 'Definition of visible'
[label]: https://www.w3.org/TR/WCAG21/#dfn-labels 'Definition of label'

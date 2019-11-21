---
id: 7ed469
name: Element language is programmatically determinable
rule_type: atomic
description: |
  This rule checks that the language of an element in the page body can be programmatically determined.
accessibility_requirements: # Remove whatever is not applicable
  wcag20:3.1.2: # Language of Parts (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing is needed
    inapplicable: further testing is needed
input_aspects:
  -  DOM Tree
  -  CSS Styling

acknowledgements:
  authors:
    -  Patrick H. Lauke
---

## Applicability

This rules applies to any HTML element that:

* contains a [text node](https://dom.spec.whatwg.org/#text) as a [child](https://dom.spec.whatwg.org/#concept-tree-child) element
* is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) of a `body` element
* is [included in the accessibility tree][]

## Expectation (1)

For each test target, the test target itself or any of its [ancestor](https://dom.spec.whatwg.org/#concept-tree-ancestor) elements (up to and including the root element of the document) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) has a `lang` attribute with a valid language subtag.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

In practice, this rule will be satisfied if the separate success criterion [3.1.1 Language of Page (Level: A)](https://www.w3.org/TR/WCAG21/#language-of-page) is satisfied. This rule ensures that if 3.1.1 is *not* satisfied, content is checked for alternative ways in which language of page content itself can still have a programmatically determinable human language.

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [Understanding Success Criterion 3.1.2: Language of Parts](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html)

## Test Cases

### Passed

#### Passed Example 1

The language of the `p` element is inherited by the `lang` attribute on the `html` root element.

```html
<html lang="en">
	<body>
		<p>Content</p>
	</body>
</html>
```

#### Passed Example 2

The language of the `p` element is inherited by the `lang` attribute on the `div` parent element. Note that this example fails 3.1.1 Language of Page (Level: A) as the `html` root element lacks a `lang` attribute.

```html
<html>
	<body>
		<div lang="en">
			<p>Content</p>
		</div>
	</body>
</html>
```

#### Passed Example 3

The language of the `p` element is inherited by the `lang` attribute on the `div` ancestor element. Note that this example fails 3.1.1 Language of Page (Level: A) as the `html` root element lacks a `lang` attribute.

```html
<html>
	<body>
		<div lang="en">
			<div>
				<p>Content</p>
			</div>
		</div>
	</body>
</html>
```

### Failed

#### Failed Example 1

The language of the `p` element cannot be programmatically determined as the element itself and none of its ancestors, including the `html` root element, has a defined `lang` attribute.

```html
<html>
	<body>
		<p>Content</p>
	</body>
</html>
```

#### Failed Example 2

The language of the `p` element with `id` attribute `ko` cannot be programmatically determined as the element itself and none of its ancestors, including the `html` root element, has a defined `lang` attribute.

```html
<html>
	<body>
		<div lang="en">
			<div>
				<p id="ok">Content</p>
			</div>
		</div>
		<div>
			<p id="ko">Content</p>
		</div>
	</body>
</html>
```

#### Failed Example 3

The language of the `p` element is inherited by the `lang` attribute on the `div` ancestor element, but the value of this `lang` attribute is not a valid language subtag.

```html
<html>
	<body>
		<div lang="foo">
			<div>
				<p>Content</p>
			</div>
		</div>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

While the language of the `p` element cannot be programmatically determined, as the element itself and none of its ancestors has a defined `lang` attribute, the `p` element contains no actual text content.

```html
<html>
	<body>
		<p></p>
	</body>
</html>
```

#### Inapplicable Example 2

While the language of the `p` element cannot be programmatically determined, as the element itself and none of its ancestors has a defined `lang` attribute, the `p` element is not part of the accessibilty tree.

```html
<html>
	<body>
		<p aria-hidden="true">Content</p>
	</body>
</html>
```

#### Inapplicable Example 2

The `body` element has no descendants.

```html
<html>
	<body></body>
</html>
```

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'

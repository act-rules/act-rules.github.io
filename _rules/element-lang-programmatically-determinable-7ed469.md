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

* contains a [text node](https://dom.spec.whatwg.org/#text)
* is a descendant in the flat tree of a `body` element
* is included in the accessibility tree

## Expectation (1)

For each test target, the test target itself or any of its ancestor elements (up to and including the root element of the document) has a `lang` attribute with a valid language subtag.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

In practice, this rule will be satisfied if the separate success criterion 3.1.1 Language of Page (Level: A) is satisfied. This rule ensures that if 3.1.1 is *not* satisfied, content is checked for alternative ways in which language of page content itself can still have a programmatically determinable human language.

## Test Cases

### Passed

#### Passed Example 1

Language of the `p` element is inherited by the `lang` attribute on the `html` root element.

```html
<html lang="en">
	<body>
		<p>Content</p>
	</body>
</html>
```

#### Passed Example 2

Language of the `p` element is inherited by the `lang` attribute on the `div` parent element. Note that this example fails 3.1.1 Language of Page (Level: A) as the `html` root element lacks a `lang` or `xml:lang` attribute.

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

Language of the `p` element is inherited by the `lang` attribute on the `div` ancestor element. Note that this example fails 3.1.1 Language of Page (Level: A) as the `html` root element lacks a `lang` or `xml:lang` attribute.

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

Language of the `p` element cannot be programmatically determined as the element itself and none of its ancestors, including the `html` root element, has a defined `lang` or `xml:lang` attribute. Note that this example also fails 3.1.1 Language of Page (Level: A) as the `html` root element lacks a `lang` or `xml:lang` attribute.

```html
<html>
	<body>
		<p>Content</p>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

While the language of the `p` element cannot be programmatically determined, as the element itself and none of its ancestors has a defined `lang` or `xml:lang` attribute, the `p` element contains no actual text content. Note that this example also fails 3.1.1 Language of Page (Level: A) as the `html` root element lacks a `lang` or `xml:lang` attribute.

```html
<html>
	<body>
		<p></p>
	</body>
</html>
```

#### Inapplicable Example 2

While the language of the `p` element cannot be programmatically determined, as the element itself and none of its ancestors has a defined `lang` or `xml:lang` attribute, the `p` element is not part of the accessibilty tree. Note that this example also fails 3.1.1 Language of Page (Level: A) as the `html` root element lacks a `lang` or `xml:lang` attribute.

```html
<html>
	<body>
		<p aria-hidden="true">Content</p>
	</body>
</html>
```

#### Inapplicable Example 2

While the language of the `p` element cannot be programmatically determined, as the element itself and none of its ancestors has a defined `lang` or `xml:lang` attribute, the `p` element is not part of the accessibilty tree. Note that this example also fails 3.1.1 Language of Page (Level: A) as the `html` root element lacks a `lang` or `xml:lang` attribute.

```html
<html>
	<body>
		<p style="display:none">Content</p>
	</body>
</html>
```

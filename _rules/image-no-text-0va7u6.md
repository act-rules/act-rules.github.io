---
id: 0va7u6
name: HTML graphics contain no text
rule_type: atomic
description: |
  This rule checks that images of text are not used
accessibility_requirements:
  wcag20:1.4.5: # Images of Text (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Language
acknowledgments:
  authors:
    - Carlos Duarte
  images:
    - Letter posted from Dulverton (Somerset, England) to Bristol (England) in 1894. Released into the public domain by Adrian Pingstone.
---

## Applicability

This rule applies to any `img` element that is [visible][] except if the `src` [attribute value][] references an SVG document.

## Expectation

The image resource referenced by the `src` [attribute value][] of each target element either does not contain text expressing anything in a [human language][] or it is [essential][] that the text is rendered with that specific presentation.

## Assumptions

The text is the most significant content in the image. If there is text in the image, but it is not the most significant content, this rule might fail but the success criterion might still be satisfied.

## Accessibility Support

_No accessibility support issues known._

## Background

- [Understanding Success Criterion 1.4.5: Images of Text][sc1.4.5]

## Test Cases

### Passed

#### Passed Example 1

This `img` element references an image resource that does not contain text.

```html
<img src="/test-assets/shared/fireworks.jpg" alt="fireworks going off behind the Eiffel tower at night" />
```

#### Passed Example 2

This `img` element references an image resource that contains text but where the presentation of the text is essential to convey the information.

```html
<p>The following image illustrates the use of cursive writing in the late nineteenth century.</p>
<img src="/test-assets/0va7u6/letter.jpg" alt="A letter written in 1894 showing the use of cursive writing" />
```

### Failed

#### Failed Example 1

This `img` element references an image resource that contains text and the way the text is presented is not relevant.

```html
<img
	src="/test-assets/0va7u6/textimage.jpg"
	alt="The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test rules."
/>
```

### Inapplicable

#### Inapplicable Example 1

This `img` element is not [visible][].

```html
<img
	src="/test-assets/0va7u6/textimage.jpg"
	alt="The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test rules."
	style="display: none"
/>
```

#### Inapplicable Example 2

This `img` element references an SVG document.

```html
<img src="/test-assets/shared/eu-logo.svg" alt="European Union flag" />
```

#### Inapplicable Example 3

There is no `img` element.

```html
<p>
	The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test rules.
</p>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[essential]: https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html#dfn-essential 'Definition of essential'
[human language]: https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html#dfn-human-language 'Definition of human language'
[sc1.4.5]: https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html
[visible]: #visible 'Definition of visible'

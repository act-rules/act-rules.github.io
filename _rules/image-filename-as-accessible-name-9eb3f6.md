---
id: 9eb3f6
name: Image filename is accessible name for image
rule_type: atomic
description: |
  This rule checks that image elements that use their source filename as their accessible name do so without loss of information to the user.
accessibility_requirements:
  wcag20:1.1.1: # Non-Text Content (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G94: # Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G95: # Providing short text alternatives that provide a brief description of the non-text content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Language
acknowledgements:
  authors:
    - Bryn Anderson
---

## Applicability

The rule applies to any HTML `input` element with a [`type`](https://html.spec.whatwg.org/#states-of-the-type-attribute) of `image`, or any HTML element with the [semantic role](#semantic-role) of `img`, that is [included in the accessibility tree][], and has an [accessible name][] that is equivalent to the [filename](#filename) specified in the `src` attribute. Difference in letter casing, and forward and trailing [whitespace](#whitespace) should be ignored.

## Expectation

Each test target has an [accessible name][] that serves an equivalent purpose to the [non-text content](https://www.w3.org/TR/WCAG21/#dfn-non-text-content).

## Assumptions

This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F30)

## Test Cases

### Passed

#### Passed Example 1

The `img` element's [accessible name][] uses the filename which accurately describes the image.

```html
<html lang="en">
	<img src="https://www.w3.org/WAI/demos/bad/img/w3c" alt="w3c" />
</html>
```

#### Passed Example 2

The `img` element's [accessible name][] includes the filename, which in combination with the text content of the `a` element accurately describes the image.

```html
<html lang="en">
	<a href="https://www.w3.org/WAI/demos/bad/img/w3c.png" download
		>Download <img src="https://www.w3.org/WAI/demos/bad/img/w3c.png" alt="w3c.png"
	/></a>
</html>
```

### Failed

#### Failed Example 1

The `img` element's [accessible name][] matches the image filename. However the presence of the file extension in the [accessible name][] is redundant and results in the [accessible name][] not accurately describing the image.

```html
<html lang="en">
	<img src="https://www.w3.org/WAI/demos/bad/img/w3c.png" alt="w3c.png" />
</html>
```

#### Failed Example 2

The `input` element with a `type` of `image` has an [accessible name][] that matches the filename. However the presence of the file extension in the [accessible name][] is redundant and results in the [accessible name][] not accurately describing the image.

```html
<html lang="en">
	<input type="image" src="https://www.w3.org/WAI/demos/bad/before/img/top_weather.gif" alt="top_weather.gif" />
</html>
```

### Inapplicable

#### Inapplicable Example 1

The `img` element doesn't have the semantic role of image.

```html
<html lang="en">
	<img role="presentation" alt="" />
</html>
```

#### Inapplicable Example 2

The `img` element is not [included in the accessibility tree][].

```html
<html lang="en">
	<img style="display:none;" alt="" />
</html>
```

#### Inapplicable Example 3

The `img` element's [accessible name][] is not equivalent to the file name specified in the `src` attribute.

```html
<html lang="en">
	<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="modanna lily" />
</html>
```

#### Inapplicable Example 4

The `img` element's `alt` attribute matches the filename but is overridden by the `aria-label` value which takes precedence in the [accessible name][] calculation.

```html
<html lang="en">
	<img
		src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg"
		alt="teaser_right2.jpg"
		aria-label="modanna lily"
	/>
</html>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'

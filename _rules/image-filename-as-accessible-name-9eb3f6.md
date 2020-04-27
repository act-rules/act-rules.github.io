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
acknowledgments:
  authors:
    - Bryn Anderson
  image:
    - The picture of Nyhavn used in examples is authored by [Jorge Franganillo](https://500px.com/franganillo), licensed under the [Creative Commons Attribution 3.0 Unported](https://creativecommons.org/licenses/by/3.0/deed.en) license.
---

## Applicability

The rule applies to any HTML element with the [semantic role][] of `img` or any HTML `input` element with a [`type`][type] of `image` when each of the following is true:

- the image is [included in the accessibility tree][]; and
- the image has an [accessible name][] that is equivalent to the [filename][] specified in the `src` attribute. Difference in letter casing, leading and trailing [whitespace][] should be ignored.

## Expectation

Each test target has an [accessible name][] that serves an equivalent purpose to the [non-text content][].

## Assumptions

This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F30)
- [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G94)
- [G95: Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95)

## Test Cases

### Passed

#### Passed Example 1

This `img` element has an [accessible name][] equivalent to the filename. The [accessible name][] accurately describes the image.

```html
<html lang="en">
	<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/copenhagen" alt="copenhagen" />
</html>
```

#### Passed Example 2

This `img` element has an [accessible name][] equivalent to the filename. Because the image is used in a download link, the presence of the file extension is a relevant part of its description.

```html
<html lang="en">
	<a href="/test-assets/image-filename-as-accessible-name-9eb3f6/copenhagen.jpeg" download
		>Download <img src="/test-assets/image-filename-as-accessible-name-9eb3f6/copenhagen.jpeg" alt="copenhagen.jpeg"
	/></a>
</html>
```

#### Passed Example 3

This image button has an [accessible name][] equivalent to the filename. The [accessible name][] accurately describes the purpose of the button.

```html
<html lang="en">
	<input type="image" src="test-assets/image-filename-as-accessible-name-9eb3f6/login" alt="login" />
</html>
```

### Failed

#### Failed Example 1

This `img` element has [accessible name][] matching the image filename. The name is just a checksum and does not describe the image.

```html
<html lang="en">
	<img
		src="/test-assets/image-filename-as-accessible-name-9eb3f6/94251e110d24a4c2b6e6ce76e7203374"
		alt="94251e110d24a4c2b6e6ce76e7203374"
	/>
</html>
```

#### Failed Example 2

This `img` element has [accessible name][] matching the image filename. The presence of the file extension in the [accessible name][] is confusing and results in the [accessible name][] not accurately describing the image.

```html
<html lang="en">
	<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/copenhagen.jpeg" alt="copenhagen.jpeg" />
</html>
```

#### Failed Example 3

This `input` element with a `type` of `image` has a [semantic role][] of `img` and an [accessible name][] matching the filename. The presence of the file extension in the [accessible name][] is confusing and results in the [accessible name][] not accurately describing the image.

```html
<html lang="en">
	<input type="image" src="test-assets/image-filename-as-accessible-name-9eb3f6/login.png" alt="login.png" />
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `img` element has a [semantic role][] of `presentation`, not `img`.

```html
<html lang="en">
	<img role="presentation" alt="" />
</html>
```

#### Inapplicable Example 2

This `img` element is not [included in the accessibility tree][].

```html
<html lang="en">
	<img style="display:none;" alt="" />
</html>
```

#### Inapplicable Example 3

This `img` element has an [accessible name][] which is not equivalent to the filename.

```html
<html lang="en">
	<img src="https://www.w3.org/WAI/demos/bad/after/img/teaser_right2.jpg" alt="modanna lily" />
</html>
```

#### Inapplicable Example 4

This `img` element has an [accessible name][] which is not equivalent to the filename because the `aria-label` value takes precedence over the `alt` value in the [accessible name][] calculation.

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
[filename]: #filename 'Definition of filename'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[non-text content]: https://www.w3.org/TR/WCAG21/#dfn-non-text-content
[semantic role]: #semantic-role 'Definition of semantic role'
[type]: https://html.spec.whatwg.org/#states-of-the-type-attribute
[whitespace]: #whitespace 'Definition of whitespace'

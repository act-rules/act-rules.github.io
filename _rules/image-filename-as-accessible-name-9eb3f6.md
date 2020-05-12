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
  - Accessibility Tree
  - DOM Tree
  - CSS Styling
  - Language
acknowledgments:
  authors:
    - Bryn Anderson
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'alt-require'
---

## Applicability

The rule applies to any HTML element that is [included in the accessibility tree][] and has a non-empty (`""`) [accessible name][], for which one of the following is true:

- **img**: the element is an `img` with an [accessible name][] that is equivalent to the [filename][] of at least one of the [image sources][] in its [source set][]; or
- **input image**: the element is an `input` element in the [Image Button][] state with an [accessible name][] that is equivalent to the [filename][] specified in its `src` attribute.

When comparing [accessible name][] and [filename][], difference in letter casing, leading and trailing [whitespace][] should be ignored.

**Note:** The content of the [source set][] is computed according to the [Algorithm to update the source set][update source set]. It essentially contains the `src`, and `srcset` attributes, as well as preceding `source` siblings with the same `picture` parent.

## Expectation

Each test target has an [accessible name][] that serves an equivalent purpose to the [non-text content][]. If there are several [image sources][], then the [accessible name][] must accurately describe all of them.

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
	<img src="https://www.w3.org/WAI/demos/bad/img/w3c" alt="w3c" />
</html>
```

#### Passed Example 2

This `img` element has an [accessible name][] equivalent to the filename. The [accessible name][] in combination with the text content of the `a` element accurately describes the image.

```html
<html lang="en">
	<a href="https://www.w3.org/WAI/demos/bad/img/w3c.png" download
		>Download <img src="https://www.w3.org/WAI/demos/bad/img/w3c.png" alt="w3c.png"
	/></a>
</html>
```

#### Passed Example 3

This `img` element has 3 [image sources][] for [device-pixel-ratio][]-based selection, through its `src` and `srcset` attributes. Its [accessible name][] is equivalent to the [filename][] of one of its [image sources][] and accurately describes each of them.

**Note:** All images used as [image sources][] in this example are actually copies of the same image, thus making the [image source][image sources] selection a bit artificial and only for the purpose of illustrating the rule.

```html
<html lang="en">
	<img
		src="test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg"
		srcset="
			test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn 1.5x,
			test-assets/image-filename-as-accessible-name-9eb3f6/paris  2x
		"
		alt="Nyhavn"
	/>
</html>
```

#### Passed Example 4

This `img` element has 3 [image sources][] for [Art direction][]-based selection, through its `src` attribute and its siblings `source` elements with the same `picture` parent. Its [accessible name][] is equivalent to the [filename][] of one of its [image sources][] and accurately describes each of them.

**Note:** All images used as [image sources][] in this example are actually copies of the same image, thus making the [image source][image sources] selection a bit artificial and only for the purpose of illustrating the rule.

```html
<html lang="en">
	<picture>
		<source media="(min-width: 45em)" srcset="test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn" />
		<source media="(min-width: 32em)" srcset="test-assets/image-filename-as-accessible-name-9eb3f6/paris" />
		<img src="test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg" alt="Nyhavn" />
	</picture>
</html>
```

### Failed

#### Failed Example 1

This `img` element has [accessible name][] matching the image filename. The presence of the file extension in the [accessible name][] is redundant and results in the [accessible name][] not accurately describing the image.

```html
<html lang="en">
	<img src="https://www.w3.org/WAI/demos/bad/img/w3c.png" alt="w3c.png" />
</html>
```

#### Failed Example 2

This `input` element with a `type` of `image` has a [semantic role][] of `img` and an [accessible name][] matching the filename. The presence of the file extension in the [accessible name][] is redundant and results in the [accessible name][] not accurately describing the image.

```html
<html lang="en">
	<input type="image" src="https://www.w3.org/WAI/demos/bad/before/img/top_weather.gif" alt="top_weather.gif" />
</html>
```

#### Failed Example 3

This `img` element has 3 [image sources][] for [Art direction][]-based selection, through its `src` attribute and its siblings `source` elements with the same `picture` parent. Its [accessible name][] is equivalent to the [filename][] of one of its [image sources][] but does not describe the second one (`pain`).

**Note:** Two of the images used as [image sources][] in this example are actually copies of the same image, thus making the [image source][image sources] selection a bit artificial and only for the purpose of illustrating the rule.

```html
<html lang="en">
	<picture>
		<source media="(min-width: 45em)" srcset="test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn" />
		<source media="(min-width: 32em)" srcset="test-assets/image-filename-as-accessible-name-9eb3f6/pain" />
		<img src="test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg" alt="Nyhavn" />
	</picture>
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
[art direction]: https://html.spec.whatwg.org/multipage/images.html#art-direction 'Illustration of art direction'
[device-pixel-ratio]: https://html.spec.whatwg.org/multipage/images.html#device-pixel-ratio 'Illustration of device-pixel-ratio'
[filename]: #filename 'Definition of filename'
[image button]: https://html.spec.whatwg.org/multipage/input.html#image-button-state-(type=image) 'Definition of the Image Button state'
[image sources]: https://html.spec.whatwg.org/multipage/images.html#image-source 'Definition of image source'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[non-text content]: https://www.w3.org/TR/WCAG21/#dfn-non-text-content
[semantic role]: #semantic-role 'Definition of semantic role'
[source set]: https://html.spec.whatwg.org/multipage/images.html#source-set 'Definition of source set'
[update source set]: https://html.spec.whatwg.org/multipage/images.html#update-the-source-set 'Algorithm to update the source set'
[whitespace]: #whitespace 'Definition of whitespace'

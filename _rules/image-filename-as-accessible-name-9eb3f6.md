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
    - Jean-Yves Moyen
  previous_authors:
    - Bryn Anderson
  funding:
    - WAI-Tools
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'alt-require'
assets:
  - The picture of Nyhavn (Copenhagen) is authored by [Jorge Franganillo](https://500px.com/franganillo), licensed under the [Creative Commons Attribution 3.0 Unported](https://creativecommons.org/licenses/by/3.0/deed.en) license.
  - The picture of bread is a public domain [picture by Bicanski](https://pixnio.com/media/bread-breakfast-fresh-homemade-wheat).
deprecated: |
  This rule has been deprecated and superseded by Rule [Image accessible name is descriptive](https://www.w3.org/WAI/standards-guidelines/act/rules/qt1vmo/). This rule is not maintained anymore and should not be used.
---

## Applicability

This rule applies to any [HTML element][] that is [included in the accessibility tree][] and has a non-empty (`""`) [accessible name][], for which one of the following is true:

- **img**: the element is an `img` with an [accessible name][] that is equivalent to the [filename][] of at least one of the [image sources][] in its [source set][]; or
- **input image**: the element is an `input` element in the [Image Button][] state with an [accessible name][] that is equivalent to the [filename][] specified in its `src` attribute.

When comparing [accessible name][] and [filename][], difference in letter casing, leading and trailing [whitespace][] should be ignored.

## Expectation

Each test target has an [accessible name][] that serves an equivalent purpose to the [non-text content][]. If there are several [image sources][], then the [accessible name][] must accurately describe all of them.

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

It is fairly common for content management systems (CMS) or other tools to default the alt-text of an image to its filename if no alt-text is provided. However, these names are usually not descriptive (often due to the presence of the file extension). This rule uses this heuristic to pinpoint cases where the [accessible name][] should be looked at by human testers. This rule does not automatically decide in which case a filename is correct (notably, it does not automatically decide whether adding the file extension is acceptable).

### Bibliography

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/WAI/WCAG22/Techniques/failures/F30)
- [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/WAI/WCAG22/Techniques/general/G94)
- [G95: Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG22/Techniques/general/G95)

## Test Cases

### Passed

#### Passed Example 1

This `img` element has an [accessible name][] equivalent to the filename (ignoring letter casing). The [accessible name][] accurately describes the image.

```html
<html lang="en">
	<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn" alt="Nyhavn" />
</html>
```

#### Passed Example 2

This `img` element has an [accessible name][] equivalent to the filename. Because the image is used in a download link, the presence of the file extension is a relevant part of its description.

```html
<html lang="en">
	<a href="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg" download
		>Download <img src="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg" alt="nyhavn.jpeg"
	/></a>
</html>
```

#### Passed Example 3

This image button has an [accessible name][] equivalent to the filename. The [accessible name][] accurately describes the purpose of the button.

```html
<html lang="en">
	<input type="image" src="/test-assets/image-filename-as-accessible-name-9eb3f6/login" alt="login" />
</html>
```

#### Passed Example 4

This `img` element has an [accessible name][] equivalent to the filename. The [accessible name][] accurately describes the image in the language of the element (French, same as the language of the page).

```html
<html lang="fr">
	<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/pain" alt="pain" />
</html>
```

#### Passed Example 5

This `img` element has 3 [image sources][] for [device-pixel-ratio][]-based selection, through its `src` and `srcset` attributes. Its [accessible name][] is equivalent to the [filename][] of one of its [image sources][] and accurately describes each of them.

```html
<html lang="en">
	<img
		src="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg"
		srcset="
			/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn 1.5x,
			/test-assets/image-filename-as-accessible-name-9eb3f6/paris  2x
		"
		alt="Nyhavn"
	/>
</html>
```

#### Passed Example 6

This `img` element has 3 [image sources][] for [Art direction][]-based selection, through its `src` attribute and its siblings `source` elements with the same `picture` parent. Its [accessible name][] is equivalent to the [filename][] of one of its [image sources][] and accurately describes each of them.

```html
<html lang="en">
	<picture>
		<source media="(min-width: 1000px)" srcset="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn" />
		<source media="(min-width: 320px)" srcset="/test-assets/image-filename-as-accessible-name-9eb3f6/paris" />
		<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg" alt="Nyhavn" />
	</picture>
</html>
```

### Failed

#### Failed Example 1

This `img` element has [accessible name][] matching the image filename (ignoring letter casing). The name does not describe the image.

```html
<html lang="en">
	<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/paris" alt="Paris" />
</html>
```

#### Failed Example 2

This `img` element has [accessible name][] matching the image filename. The name is just a checksum and does not describe the image.

```html
<html lang="en">
	<img
		src="/test-assets/image-filename-as-accessible-name-9eb3f6/94251e110d24a4c2b6e6ce76e7203374"
		alt="94251e110d24a4c2b6e6ce76e7203374"
	/>
</html>
```

#### Failed Example 3

This `img` element has [accessible name][] matching the image filename. The presence of the file extension in the [accessible name][] is confusing and results in the [accessible name][] not accurately describing the image.

```html
<html lang="en">
	<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg" alt="nyhavn.jpeg" />
</html>
```

#### Failed Example 4

This image button has an [accessible name][] matching the filename. The presence of the file extension in the [accessible name][] is confusing and results in the [accessible name][] not accurately describing the image.

```html
<html lang="en">
	<input type="image" src="/test-assets/image-filename-as-accessible-name-9eb3f6/login.png" alt="login.png" />
</html>
```

#### Failed Example 5

This `img` element has 3 [image sources][] for [Art direction][]-based selection, through its `src` attribute and its siblings `source` elements with the same `picture` parent. Its [accessible name][] is equivalent to the [filename][] of one of its [image sources][] but does not describe the second one (`pain`).

```html
<html lang="en">
	<picture>
		<source media="(min-width: 1000px)" srcset="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn" />
		<source media="(min-width: 320px)" srcset="/test-assets/image-filename-as-accessible-name-9eb3f6/pain" />
		<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg" alt="Nyhavn" />
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
	<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/94251e110d24a4c2b6e6ce76e7203374" alt="Nyhavn" />
</html>
```

#### Inapplicable Example 4

This `img` element has an [accessible name][] which is not equivalent to the filename because the `aria-label` value takes precedence over the `alt` value in the [accessible name][] calculation.

```html
<html lang="en">
	<img
		src="/test-assets/image-filename-as-accessible-name-9eb3f6/94251e110d24a4c2b6e6ce76e7203374"
		alt="94251e110d24a4c2b6e6ce76e7203374"
		aria-label="Nyhavn"
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
[non-text content]: https://www.w3.org/TR/WCAG22/#dfn-non-text-content
[semantic role]: #semantic-role 'Definition of semantic role'
[source set]: https://html.spec.whatwg.org/multipage/images.html#source-set 'Definition of source set'
[whitespace]: #whitespace 'Definition of whitespace'
[html element]: #namespaced-element

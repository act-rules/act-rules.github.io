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

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `img` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

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
[explicit role]: #explicit-role 'Definition of Explicit Role'
[filename]: #filename 'Definition of filename'
[focusable]: #focusable 'Definition of focusable'
[global]: https://www.w3.org/TR/wai-aria-1.1/#global_states 'Definition of Global ARIA States and Properties'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[non-text content]: https://www.w3.org/TR/WCAG21/#dfn-non-text-content
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[property]: https://www.w3.org/TR/wai-aria/#dfn-property 'Definition of ARIA Property'
[semantic role]: #semantic-role 'Definition of semantic role'
[type]: https://html.spec.whatwg.org/#states-of-the-type-attribute
[whitespace]: #whitespace 'Definition of whitespace'

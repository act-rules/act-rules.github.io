---
id: ac7dc6
name: '`video` element visual-only content has description track'
rule_type: atomic
description: |
  This rule checks that description tracks that come with non-streaming `video` elements, without audio, are descriptive.
accessibility_requirements:
  wcag-technique:H96: # Using the track element to provide audio descriptions
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Visual output
  - Language
acknowledgments:
  authors:
    - Brian Bors
    - Wilco Fiers
---

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video does not contain audio and contains a `track` element with a `kind` [attribute value][] of `descriptions`.

## Expectation

The visual information of each test target is described with a description `track` element that has the same language as the video or the same language as the page.

## Assumptions

- A mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).
- The language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.
- No [user style sheets](https://drafts.csswg.org/css-cascade/#cascade-origin-user) are used and no changes to the [user agent default style sheet](https://drafts.csswg.org/css-cascade/#cascade-origin-ua) are in place, otherwise the test cases might have different outcomes of the ones presented here. 

## Accessibility Support

Currently the description track is not supported by most assistive technologies. Video players may be able to work around the lack of support for the description track by using aria-live but few do this today.

## Background

- Multiple description `track` elements may be useful for different languages, but at least one must match the language of the video or the language of the page.
- [Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)
- [H96: Using the track element to provide audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/html/H96)

## Test Cases

### Passed

#### Passed Example 1

This `video` element, which has no audio, has a `track` element with descriptions.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
		<track kind="descriptions" src="/test-assets/rabbit-video/descriptions.vtt" />
	</video>
</html>
```

### Failed

#### Failed Example 1

This `video` element, which has no audio, has a `track` element with incorrect descriptions.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
		<track kind="descriptions" src="/test-assets/rabbit-video/incorrect-descriptions.vtt" />
	</video>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `video` element has audio.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
		<track kind="descriptions" src="/test-assets/rabbit-video/descriptions.vtt" />
	</video>
</html>
```

#### Inapplicable Example 2

This `video` element is not [visible][].

```html
<html lang="en">
	<video controls style="display: none;">
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
		<track kind="descriptions" src="/test-assets/rabbit-video/descriptions.vtt" />
	</video>
</html>
```

#### Inapplicable Example 3

This `video` element, which has no audio, does not have a `track` element.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
	</video>
</html>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[visible]: #visible 'Definition of visible'

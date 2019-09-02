---
id: ac7dc6
name: Video only element has description track
rule_type: atomic
description: |
  This rule checks that description tracks that come with non-streaming `video` elements, without audio, are descriptive.
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Visual output
authors:
  - Wilco Fiers
  - Brian Bors
---

## Applicability

The rule applies to any [non-streaming](#non-streaming-media-element) `video` element [visible](#visible) where the video doesn't contain audio and does contain a `track` element with a `kind="descriptions"` attribute.

## Expectation

The visual information of each test target is described with a description `track` element that has the same language as the video or the same language as the page.

_Note_: Multiple description `track` elements may be useful for different languages, but at least one must match the language of the video or the language of the page.

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

## Accessibility Support

Currently the description track is not supported by most assistive technology. Video players may be able to work around the lack of support for the description track by using aria-live but few do this today.

## Background

- [Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)
- [H96: Using the track element to provide audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/html/H96)

## Test Cases

### Passed

#### Passed Example 1

A video only element with a track element that contains descriptions.

```html
<video controls>
	<source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
	<track kind="descriptions" src="rabbit-video-descriptions.vtt" />
</video>
```

### Failed

#### Failed Example 1

A video only element with a track element that contains incorrect descriptions.

```html
<video controls>
	<source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
	<track kind="descriptions" src="rabbit-video-incorrect-descriptions.vtt" />
</video>
```

### Inapplicable

#### Inapplicable Example 1

A video only element without a track element.

```html
<video controls>
	<source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 2

A video only element that is not visible on the page.

```html
<video controls style="display: none;">
	<source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
	<track kind="descriptions" src="rabbit-video-descriptions.vtt" />
</video>
```

#### Inapplicable Example 3

A video element with audio.

```html
<video controls>
	<source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
	<track kind="descriptions" src="rabbit-video-descriptions.vtt" />
</video>
```

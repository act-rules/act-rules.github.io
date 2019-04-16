---
id: d7ba54
name: video only has audio alternative
rule_type: atomic
description: |
  Non-streaming `video` elements without audio must have an audio alternative
test_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Visual output
authors:
  - Brian Bors
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming](#non-streaming) `video` element [visible](#visible) where the video doesn't contains audio.

### Expectation

The visual information of each test target is available through an audio track.

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [G166:Providing audio that describes the important video content and describing it as such](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G166)

## Test Cases

### Passed

#### Pass example 1

A video element without audio has a separate audio track that describes the visual information.

```html
<video controls>
	<source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>

<audio controls>
	<source
		src="../test-assets/rabbit-video/audio-description.mp3"
		type="audio/mpeg"
	/>
</audio>
```

### Failed

#### Fail example 1

A video element without an audio track.

```html
<video controls>
	<source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

#### Fail example 2

A video element without audio has a separate audio track that incorrectly describes the visual information.

```html
<video controls>
	<source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>

<audio controls>
	<source
		src="../test-assets/rabbit-video/incorrect-audio-description.mp3"
		type="audio/mpeg"
	/>
</audio>
```

### Inapplicable

#### Inapplicable example 1

A video element with audio.

```html
<video controls>
	<source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Inapplicable example 2

A video element without sound that is not visible on the page.

```html
<video controls style="display: none;">
	<source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

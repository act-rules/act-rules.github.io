---
id: d7ba54
name: Video element visual-only content has audio track alternative
rule_type: atomic
description: |
  Non-streaming `video` elements without audio must have an audio alternative.
accessibility_requirements:
  wcag-technique:G166: # Providing audio that describes the important video content and describing it as such
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
  funding:
    - WAI-Tools
  assets:
    - Rabbit video is © copyright 2008, Blender Foundation / [www.bigbuckbunny.org](https://www.bigbuckbunny.org)
---

## Applicability

This rule applies to any [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video does not contain audio.

## Expectation

The visual information of each test target is available through an audio track.

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded)
- [G166: Providing audio that describes the important video content and describing it as such](https://www.w3.org/WAI/WCAG22/Techniques/general/G166)

## Test Cases

### Passed

#### Passed Example 1

This `video` element, which has no audio, has a separate audio track that describes the visual information.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
	</video>

	<audio controls>
		<source src="/test-assets/rabbit-video/audio-description.mp3" type="audio/mpeg" />
	</audio>
</html>
```

### Failed

#### Failed Example 1

This `video` element, which has no audio, does not have an audio track describing the visual information.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
	</video>
</html>
```

#### Failed Example 2

This `video` element, which has no audio, has a separate audio track that incorrectly describes the visual information.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
	</video>

	<audio controls>
		<source src="/test-assets/rabbit-video/incorrect-audio-description.mp3" type="audio/mpeg" />
	</audio>
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
	</video>
</html>
```

[visible]: #visible 'Definition of visible'

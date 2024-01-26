---
id: 1ea59c
name: Video element visual content has audio description
rule_type: atomic
description: |
  This rule checks that non-streaming `video` elements have all visual information also contained in the audio.
accessibility_requirements:
  wcag-technique:G8: # Providing a movie with extended audio descriptions
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G78: # Providing a second, user-selectable, audio track that includes audio descriptions
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G173: # Providing a version of a movie with audio descriptions
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
  funding:
    - WAI-Tools
  assets:
    - Rabbit video is © copyright 2008, Blender Foundation / [www.bigbuckbunny.org](https://www.bigbuckbunny.org)
---

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video contains audio.

## Expectation

The visual information of each test target is available through its audio, or through an audio description track.

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

## Accessibility Support

There are only a few implementations of video players (without third party technologies) that support audio description tracks at the time of writing.

## Background

### Bibliography

- [Understanding Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded)
- [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G78)
- [G173: Providing a version of a movie with audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G173)
- [G8: Providing a movie with extended audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G8)

## Test Cases

### Passed

#### Passed Example 1

A video element with a voiceover that describes the visual information.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video-with-voiceover.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video-with-voiceover.webm" type="video/webm" />
	</video>
</html>
```

#### Passed Example 2

A video element with an audio description.

```html
<html lang="en">
	<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.min.css" />
	<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-skin/highlights-blue.css" />
	<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/transcript.css" />

	<figure id="ozplayer-1-container" class="ozplayer-container">
		<div data-controls="stack" class="ozplayer" id="ozplayer-1">
			<video controls="controls" preload="none">
				<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
			</video>
			<audio data-default="default" preload="none">
				<source src="/test-assets/rabbit-video/audio-description.mp3" type="audio/mp3" />
			</audio>
		</div>
	</figure>

	<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/mediaelement.min.js"></script>
	<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.free.js"></script>
	<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-lang/en.js"></script>
	<script src="https://ozplayer.global.ssl.fastly.net/3.3/config.js"></script>
</html>
```

**Note:** The ozplayer implementation is only an example and is not meant as an endorsement of the ozplayer.

### Failed

#### Failed Example 1

A video element without an audio description.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
	</video>
</html>
```

#### Failed Example 2

A video element with an incorrect audio description.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video-with-incorrect-voiceover.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video-with-incorrect-voiceover.webm" type="video/webm" />
	</video>
</html>
```

#### Failed Example 3

A video element with an incorrect audio description.

```html
<html lang="en">
	<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.min.css" />
	<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-skin/highlights-blue.css" />
	<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/transcript.css" />

	<figure id="ozplayer-1-container" class="ozplayer-container">
		<div data-controls="stack" class="ozplayer" id="ozplayer-1">
			<video controls="controls" preload="none">
				<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
			</video>
			<audio data-default="default" preload="none">
				<source src="/test-assets/rabbit-video/incorrect-audio-description.mp3" type="audio/mp3" />
			</audio>
		</div>
	</figure>

	<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/mediaelement.min.js"></script>
	<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.free.js"></script>
	<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-lang/en.js"></script>
	<script src="https://ozplayer.global.ssl.fastly.net/3.3/config.js"></script>
</html>
```

**Note:** The ozplayer implementation is only an example and is not meant as an endorsement of the ozplayer.

### Inapplicable

#### Inapplicable Example 1

A video element without audio.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
	</video>
</html>
```

#### Inapplicable Example 2

A video element that is not [visible][].

```html
<html lang="en">
	<video controls style="display: none;">
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
	</video>
</html>
```

[visible]: #visible 'Definition of visible'

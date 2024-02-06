---
id: c3232f
name: Video element visual-only content has accessible alternative
rule_type: composite
description: |
  This rule checks that `video` elements without audio have an alternative available.
accessibility_requirements:
  wcag20:1.2.1: # Audio-only and Video-only (Prerecorded) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G159: # Providing an alternative for time-based media for video-only content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G166: # Providing audio that describes the important video content and describing it as such
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - fd26cf
  - ee13b5
  - d7ba54
acknowledgments:
  authors:
    - Brian Bors
    - John Hicks
    - Rafal Charlampowicz
    - Wilco Fiers
  funding:
    - WAI-Tools
  assets:
    - Rabbit video is © copyright 2008, Blender Foundation / [www.bigbuckbunny.org](https://www.bigbuckbunny.org)
    - Web Accessibility Perspective videos by W3C WAI.
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'tag-pair'
---

## Applicability

This rule applies to any [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video does not contain audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [`Video` Element Visual-Only Content Is Media Alternative For Text](https://www.w3.org/WAI/standards-guidelines/act/rules/fd26cf/)
- [`Video` Element Visual-Only Content Has Transcript](https://www.w3.org/WAI/standards-guidelines/act/rules/ee13b5/)
- [`Video` Element Visual-Only Content Has Audio Track Alternative](https://www.w3.org/WAI/standards-guidelines/act/rules/d7ba54/)

## Assumptions

- A mechanism is available to start the video and the video element is not simply used to display the [poster](https://html.spec.whatwg.org/multipage/media.html#attr-video-poster).
- The language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

The HTML `video` element can also have a `track` element that provides an audio description. This should provide assistive technologies with a timed text description of visual information in a video. However, there is no native support in any major browser for this technique. Technique [H96: Using the track element to provide audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/html/H96) can not be relied upon to conform to [1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/WCAG22/#audio-only-and-video-only-prerecorded).

## Background

### Bibliography

- [Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded)
- [G159: Providing an alternative for time-based media for video-only content](https://www.w3.org/WAI/WCAG22/Techniques/general/G159.html)
- [G166: Providing audio that describes the important video content and describing it as such](https://www.w3.org/WAI/WCAG22/Techniques/general/G166.html)

## Test Cases

### Passed

#### Passed Example 1

This `video` element, which has no audio, has a text transcript available on the same page. Thus, it passes rule [`Video` Element Visual-Only Content Has Transcript](https://www.w3.org/WAI/standards-guidelines/act/rules/ee13b5/).

```html
<html lang="en">
<video controls>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat rabbit climbing out of a hole in the ground.
He stretches, yawns, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Passed Example 2

This `video` element, which has no audio, has a separate audio track that describes the visual information. Thus, it passes rule [`Video` Element Visual-Only Content Has Audio Track Alternative](https://www.w3.org/WAI/standards-guidelines/act/rules/d7ba54/).

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

#### Passed Example 3

This `video` element, which has no audio, is a media alternative for the text in the page and labeled as such. Thus, it passes rule [`Video` Element Visual-Only Content Is Media Alternative For Text](https://www.w3.org/WAI/standards-guidelines/act/rules/fd26cf/).

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
</html>
```

### Failed

#### Failed Example 1

This `video` element, which has no audio, has a transcript which does not convey the information included in the video-only content. The transcript is available through a link on the same page.

```html
<html lang="en">
<video controls>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video/incorrect-transcript.html">Transcript</a>
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

#### Failed Example 3

This `video` element, which has no audio, is a media alternative for the text in the page but it is not labeled as such.

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG.
	</p>
	<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
</html>
```

#### Failed Example 4

This `video` element, which has no audio, has a `track` element with descriptions. The description track is not supported.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
		<track kind="descriptions" src="/test-assets/rabbit-video/descriptions.vtt" />
	</video>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `video` element has audio.

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
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

[visible]: #visible 'Definition of visible'

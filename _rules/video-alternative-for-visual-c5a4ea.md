---
id: c5a4ea
name: Video element visual content has accessible alternative
rule_type: composite
description: |
  This rule checks that `video` elements with audio have an alternative for the video content as audio or as text.
accessibility_requirements:
  wcag20:1.2.3: # Audio Description or Media Alternative (Prerecorded) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:1.2.5: # Audio Description (Prerecorded) (AA)
    secondary: This success criterion is **more strict** than this rule. This is because the rule allows a media alternative in place of audio description. Some of the passed examples do not satisfy this success criterion.
  wcag20:1.2.8: # Media Alternative (Prerecorded) (AAA)
    secondary: This success criterion is **more strict** than this rule. This is because the rule allows audio description in place of a media alternative. Some of the passed examples do not satisfy this success criterion.
  wcag-technique:G8: # Providing a movie with extended audio descriptions
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G69: # Providing an alternative for time based media
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
input_rules:
  - 1ea59c
  - 1a02b0
  - ab4d13
acknowledgments:
  authors:
    - Brian Bors
    - Wilco Fiers
  funding:
    - WAI-Tools
  assets:
    - Rabbit video is © copyright 2008, Blender Foundation / [www.bigbuckbunny.org](https://www.bigbuckbunny.org)
    - Web Accessibility Perspective videos by W3C WAI.
---

## Test Procedure

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][], where the video contains audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [`Video` Element Visual Content Has Audio Description](https://www.w3.org/WAI/standards-guidelines/act/rules/1ea59c/)
- [`Video` Element Visual Content Has Transcript](https://www.w3.org/WAI/standards-guidelines/act/rules/1a02b0/)
- [`Video` Element Content Is Media Alternative For Text](https://www.w3.org/WAI/standards-guidelines/act/rules/ab4d13/)

## Assumptions

- This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

The HTML `video` element can also have a `track` element that provides an audio description. This should provide assistive technologies with a timed text description of visual information in a video. However, there is no native support in any major browser for this technique. Technique [H96: Using the track element to provide audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/html/H96) can not be relied upon to conform to [1.2.3: Audio Description or Media Alternative (Prerecorded)][sc123].

## Background

### Bibliography

- [Understanding Success Criterion 1.2.5: Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html)
- [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G78)
- [G173: Providing a version of a movie with audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G173)
- [G8: Providing a movie with extended audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G8)

## Test Cases

### Passed

#### Passed Example 1

This `video` element has an audio description because it has voiceover that describes the visual information.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video-with-voiceover.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video-with-voiceover.webm" type="video/webm" />
	</video>
</html>
```

#### Passed Example 2

A video element with a link to a text transcript.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
	</video>
	<a href="/test-assets/rabbit-video/transcript.html">Transcript</a>
</html>
```

#### Passed Example 3

This video element describes some of the text on the same page. The text identifies the video as an alternative.

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

### Failed

#### Failed Example 1

This `video` element has an incorrect audio description.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video-with-incorrect-voiceover.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video-with-incorrect-voiceover.webm" type="video/webm" />
	</video>
</html>
```

#### Failed Example 2

A video element with a link to an incorrect text transcript on a different page.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
	</video>
	<a href="/test-assets/rabbit-video/incorrect-transcript.html">Transcript</a>
</html>
```

#### Failed Example 3

A video element that describes some of the text on the same page. The video contains more information than the text does.

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Either through preference or
		circumstance. This is solved by keyboard compatibility. Keyboard compatibility is described in WCAG. See the video
		below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
</html>
```

#### Failed Example 4

A video element with a description track element. Description tracks are not supported.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
		<track kind="descriptions" src="/test-assets/rabbit-video/descriptions.vtt" />
	</video>
</html>
```

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
[sc123]: https://www.w3.org/TR/WCAG22/#audio-description-or-media-alternative-prerecorded 'WCAG 2.2, Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded)'

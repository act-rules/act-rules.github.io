---
id: 1ec09b
name: '`video` element visual content has strict accessible alternative'
rule_type: composite
description: |
  This rule checks that `video` elements with audio have audio description.
accessibility_requirements:
  wcag20:1.2.5: # Audio Description (Prerecorded) (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
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
  wcag-technique:H96: # Using the track element to provide audio descriptions
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - 1ea59c
  - ab4d13
  - f196ce
acknowledgments:
  authors:
    - Wilco Fiers
    - Brian Bors
---

## Applicability

The rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][], where the video contains audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [`Video` Element Visual Content Has Audio Description](https://act-rules.github.io/rules/1ea59c)
- [`Video` Element Content Is Media Alternative For Text](https://act-rules.github.io/rules/ab4d13)
- [`Video` Element Visual Content Has Description Track](https://act-rules.github.io/rules/f196ce)

## Assumptions

- This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

See [Video element audio described: accessibility support](https://act-rules.github.io/rules/1ea59c#accessibility-support).
See [Video element description track: accessibility support](https://act-rules.github.io/rules/f196ce#accessibility-support).

## Background

- [Understanding Success Criterion 1.2.5: Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html)
- [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G78)
- [H96: Using the track element to provide audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/html/H96)
- [G173: Providing a version of a movie with audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G173)
- [G8: Providing a movie with extended audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G8)

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

A video element with a track element that contains descriptions.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
		<track kind="descriptions" src="/test-assets/rabbit-video/descriptions.vtt" />
	</video>
</html>
```

#### Passed Example 3

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative.

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

A video element with an incorrect audio description.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video-with-incorrect-voiceover.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video-with-incorrect-voiceover.webm" type="video/webm" />
	</video>
</html>
```

#### Failed Example 2

A video element with a track element that contains incorrect descriptions.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
		<track kind="descriptions" src="/test-assets/rabbit-video/incorrect-descriptions.vtt" />
	</video>
</html>
```

#### Failed Example 3

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

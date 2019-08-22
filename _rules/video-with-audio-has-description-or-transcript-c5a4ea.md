---
id: c5a4ea
name: Video with audio has audio descriptions or transcript
rule_type: composite
description: |
  This rule checks that `video` elements with audio have an alternative for the video content as audio or as text.
accessibility_requirements:
  wcag20:1.2.3: # Audio Description or Media Alternative (Prerecorded) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - 1ea59c
  - 1a02b0
  - f196ce
  - ab4d13
authors:
  - Wilco Fiers
  - Brian Bors
---

## Test Procedure

## Applicability

The rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][], where the video contains audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [Video element audio described](https://act-rules.github.io/rules/1ea59c)
- [Video element transcript](https://act-rules.github.io/rules/1a02b0)
- [Video element description track](https://act-rules.github.io/rules/f196ce)
- [Video as a media alternative for text](https://act-rules.github.io/rules/ab4d13)

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

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
<video controls>
	<source src="../test-assets/rabbit-video/video-with-voiceover.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video-with-voiceover.webm" type="video/webm" />
</video>
```

#### Passed Example 2

A video element with a link to a text transcript.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm"/>
</video>
<a href="../test-assets/rabbit-video/transcript.html">Transcript</p>
```

#### Passed Example 3

A video element with a track element that contains descriptions.

```html
<video controls>
	<source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
	<track kind="descriptions" src="../test-assets/rabbit-video/descriptions.vtt" />
</video>
```

#### Passed Example 4

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative.

```html
<p>
	Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the keyboard
	to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility. Keyboard
	compatibility is described in WCAG. See the video below to watch the same information again in video form.
</p>
<video src="../test-assets/perspective-video/perspective-video.mp4" controls></video>
```

### Failed

#### Failed Example 1

A video element with an incorrect audio description.

```html
<video controls>
	<source src="../test-assets/rabbit-video/video-with-incorrect-voiceover.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video-with-incorrect-voiceover.webm" type="video/webm" />
</video>
```

#### Failed Example 2

A video element with a link to an incorrect text transcript on a different page.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
<a href="../test-assets/rabbit-video/incorrect-transcript.html">Transcript</p>
```

#### Failed Example 3

A video element with a track element that contains incorrect descriptions.

```html
<video controls>
	<source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
	<track kind="descriptions" src="../test-assets/rabbit-video/incorrect-descriptions.vtt" />
</video>
```

#### Failed Example 4

A video element that describes some of the text on the same page. The video contains more information than the text does.

```html
<p>
	Not being able to use your computer because your mouse doesn't work, is frustrating. Either through preference or
	circumstance. This is solved by keyboard compatibility. Keyboard compatibility is described in WCAG. See the video
	below to watch the same information again in video form.
</p>
<video src="../test-assets/perspective-video/perspective-video.mp4" controls></video>
```

### Inapplicable

#### Inapplicable Example 1

A video element without audio.

```html
<video controls>
	<source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 2

A video element that is not [visible][].

```html
<video controls style="display: none;">
	<source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

[visible]: #visible "Definition of visible"
---
name: video with audio has audio descriptions or transcript
rule_type: composite
description: |
  This rule checks video elements with audio have an alternative for the video content as audio or as text.

success_criterion:
- 1.2.3 # Audio Description or Media Alternative (Prerecorded)

atomic_rules:
- SC1-2-video-audio-description
- SC1-2-video-transcript
- SC1-2-video-description-track
- SC1-2-video-media-alternative

authors:
- Wilco Fiers
- Brian Bors
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming](#non-streaming) `video` element [visible](#visible), where the video contains audio.

### Expectation

For each test target, the outcome of at least one of the following rules is passed:

- [video element audio described](https://auto-wcag.github.io/auto-wcag/rules/SC1-2-video-audio-description.html)
- [video element transcript](https://auto-wcag.github.io/auto-wcag/rules/SC1-2-video-transcript.html)
- [Video element description track](https://auto-wcag.github.io/auto-wcag/rules/SC1-2-video-description-track.html)
- [Video as a media alternative for text](https://auto-wcag.github.io/auto-wcag/rules/SC1-2-video-media-alternative.html)

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the poster.

## Accessibility support

See [Video element description track: accessibility support](https://auto-wcag.github.io/auto-wcag/rules/SC1-2-Video-description-track.html#accessibility-support.html).
See [Video with audio has audio description: accessibility support](https://auto-wcag.github.io/auto-wcag/rules/SC1-2-video-audio-description.html#accessibility-support.html).

## Background

- [Understanding Success Criterion 1.2.5: Audio Description (Prerecorded)
](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html)
- [G78: Providing a second, user-selectable, audio track that includes audio descriptions
](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G78)
- [H96: Using the track element to provide audio descriptions
](https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/H96)
- [G173: Providing a version of a movie with audio descriptions
](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G173)
- [G8: Providing a movie with extended audio descriptions
](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G8)

## Test Cases

### Passed

#### Pass example 1

A video element with a voiceover that describes the visual information.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video-with-voiceover.mp4" type="video/mp4"/>
  <source src="../test-assets/rabbit-video/video-with-voiceover.webm" type="video/webm"/>
</video>
```

#### Pass example 2

A video element with a link to a text transcript.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm"/>
</video>
<a href="../test-assets/rabbit-video/transcript.html">Transcript</p>
```

#### Pass example 3

A video element with a track element that contains descriptions.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4"/>
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm"/>
  <track kind="descriptions" src="../test-assets/rabbit-video/descriptions.vtt"/>
</video>
```

#### Pass example 4

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative.

```html
<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.
  See the video below to watch the same information again in video form.</p>
<video src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls>
</video>
```

### Failed

#### Fail example 1

A video element with an incorrect audio description.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video-with-incorrect-voiceover.mp4" type="video/mp4"/>
  <source src="../test-assets/rabbit-video/video-with-incorrect-voiceover.webm" type="video/webm"/>
</video>
```

#### Fail example 2

A video element with a link to an incorrect text transcript on a different page.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
<a href="../test-assets/rabbit-video/incorrect-transcript.html">Transcript</p>
```

#### Fail example 3

A video element with a track element that contains incorrect descriptions.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
  <track kind="descriptions" src="../test-assets/rabbit-video/incorrect-descriptions.vtt">
</video>
```

#### Fail example 4

A video element that describes some of the text on the same page. The video contains more information than the text does.

```html
<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.
  See the video below to watch the same information again in video form.</p>
<video src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls>
</video>
```

### Inapplicable

#### Inapplicable example 1

A video element without audio.

```html
<video controls>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

#### Inapplicable example 2

A video element that is not visible on the page.

```html
<video controls style="display: none;">
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

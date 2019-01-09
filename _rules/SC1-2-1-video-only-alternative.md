---
name: video only has an accessibile alternative
rule_type: composite
description: |
  This rule checks if video elements without audio have an alternative available

success_criterion:
- 1.2.1 # Audio-only and Video-only (Prerecorded)

atomic_rules:
- SC1-2-1-media-alternative-video
- SC1-2-1-video-only-description-track
- SC1-2-1-video-only-element-transcript
- SC1-2-1-video-only-audio-alternative

authors:
- Wilco Fiers
- Brian Bors
- John Hicks
- Rafal Charlampowicz
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming](#non-streaming) `video` element [visible](#visible), where the video doesn't contain audio.

### Expectation

For each test target, the outcome of at least one of the following rules is passed:

- [Media alternative video](https://auto-wcag.github.io/auto-wcag/rules/SC1-2-1-media-alternative-video.html)
- [Video only description track](https://auto-wcag.github.io/auto-wcag/rules/SC1-2-1-video-only-description-track.html)
- [Video only element transcript](https://auto-wcag.github.io/auto-wcag/rules/SC1-2-1-video-only-element-transcript.html)
- [Video only audio alternative](https://auto-wcag.github.io/auto-wcag/rules/SC1-2-1-video-only-audio-alternative.html)

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

## Accessibility support

See [Video only element description track: accessibility support](https://auto-wcag.github.io/auto-wcag/rules/SC1-2-1-Video-only-description-track.html#accessibility-support).

## Background

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [H96:Using the track element to provide audio descriptions](https://www.w3.org/TR/WCAG20-TECHS/H96.html) 

## Test Cases

### Passed

#### Pass example 1

A video element without audio. The text on the page labels the video as an alternative.

```html
<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.
  See the video below to watch the same information again in video form.</p>
<video data-rule-target src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls>
</video>
```

#### Pass example 2

A video only element with a track element that contains descriptions.

```html
<video controls>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
  <track kind="descriptions" src="rabbit-video-descriptions.vtt" />
</video>
```

#### Pass example 3

A silent video element with a text transcript on the same page.

```html
<video controls data-rule-target>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat rabbit climbing out of a hole in the ground. 
He stretches, yaws, and then starts walking. 
Then he stops to scratch his bottom.</p>
```

#### Pass example 4

A video element without audio has a separate audio track that describes the visual information.

```html
<video controls>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>

<audio controls>
  <source src="../test-assets/rabbit-video/audio-description.mp3" type="audio/mpeg">
</audio>
```

### Failed

#### Fail example 1

A video element that describes some of the text on the same page. The text on the page does not label the video as an alternative.

```html
<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.</p>
<video data-rule-target src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls>
</video>
```

#### Fail example 2

A video only element with a track element that contains incorrect descriptions.

```html
<video controls>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
  <track kind="descriptions" src="rabbit-video-incorrect-descriptions.vtt" />
</video>
```

#### Fail example 3

A silent video element with a link to an incorrect text transcript on a different page.

```html
<video controls data-rule-target>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video-incorrect-transcript.html">Transcript</p>
```

#### Fail example 4

A video element without audio has a separate audio track that incorrectly describes the visual information.

```html
<video controls>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>

<audio controls>
  <source src="../test-assets/rabbit-video/incorrect-audio-description.mp3" type="audio/mpeg">
</audio>
```

### Inapplicable

#### Inapplicable example 1

A video element with audio.

```html
<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.
  See the video below to watch the same information again in video form.</p>
<video data-rule-target src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls>
</video>
```

#### Inapplicable example 2

A video only element that is not visible on the page.

```html
<video controls style="display: none;">
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
  <track kind="descriptions" src="rabbit-video-descriptions.vtt" />
</video>
```

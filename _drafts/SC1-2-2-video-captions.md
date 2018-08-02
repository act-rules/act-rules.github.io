---
name: video captions
description: |
  Captions are available for audio information in non-streaming `video` elements.

success_criterion:
- 1.2.2 # Captions (Prerecorded)

test_aspects:
- DOM Tree
- CSS Styling
- [Audio output]{#audio-output}
- [Visual output]{#audio-output}

authors:
- Wilco Fiers
- Brian Bors
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming](#non-streaming) `video` element [visible on the page](#visible-on-the-page) where the video contains [audio](#audio).

### Expectation

For each test target, audio information that is not expressed visually in the video, is available through [captions](#captions).

*Note*: Captions can be either embedded in the video file itself or can be made available trough a separate track.

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the poster.

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html
- https://www.w3.org/TR/WCAG20-TECHS/G93.html
- https://www.w3.org/TR/WCAG20-TECHS/G87.html
- https://www.w3.org/TR/WCAG20-TECHS/H95.html

## Test Cases

### Passed

```html
<!-- A video element that has captions for all the audio backed into it.-->
<video src="../test-assets/perspective-video/perspective-video-with-captions.mp4" controls></video>
```

```html
<!-- A video element with an associated track element that contain captions for all the audio.-->
<video src="../test-assets/perspective-video/perspective-video.mp4" controls>
  <track src="/test-assets/perspective-video/perspective-caption.vtt" kind="captions">
</video>
```

### Failed

```html
<!-- A video element with any form of captions.-->
<video src="../test-assets/perspective-video/perspective-video.mp4" controls></video>
```

```html
<!-- A video element with an associated track element that contain incorrect captions.-->
<video src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls>
  <track src="/test-assets/perspective-video/perspective-incorrect-caption.vtt" kind="captions">
</video>
```

```html
<!-- A video element with a text on the same page that described the audio in the video.-->
<p>The video below shows a man working on a keyboard. A voiceover is heard 
  saying the following text: Web accessibility perspectives. Keyboard 
  compatibility. Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance.</p>
<video src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls>
</video>
```

```html
<!-- A video element with an explicitly associated text on the same page that described the audio in the video.-->
<p id="text">The video below shows a man working on a keyboard. A voiceover is heard 
  saying the following text: Web accessibility perspectives. Keyboard 
  compatibility. Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance.</p>
<video src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls ariadescribedby="text">
</video>
```

### Inapplicable

```html
<!-- A video element without audio.-->
<video src="../test-assets/perspective-video/perspective-video-silent.mp4" controls></video>
```

```html
<!-- A video element without that is not visible on the page.-->
<video src="../test-assets/perspective-video/perspective-video.mp4" controls style="display: none;"></video>
```

[audio output]: ../pages/algorithms/audio-output.html
[visual output]: ../pages/algorithms/video-output.html
[non-streaming]: ../pages/algorithms/non-streaming.html
[visible on the page]: ../pages/algorithms/visible-on-the-page.html
[audio]: https://www.w3.org/TR/WCAG20/#audiodef
[captions]: https://www.w3.org/TR/WCAG20/#captionsdef

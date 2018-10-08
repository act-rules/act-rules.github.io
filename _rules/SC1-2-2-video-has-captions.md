---
name: video has captions
description: |
  Captions are available for audio information in non-streaming `video` elements.

success_criterion:
- 1.2.2 # Captions (Prerecorded)

test_aspects:
- DOM Tree
- CSS Styling
- Audio output
- Visual output

authors:
- Wilco Fiers
- Brian Bors
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming](#non-streaming) `video` element [visible on the page](#visible-on-the-page) where the video contains [audio](#audio).

### Expectation

For each test target, audio information that is not conveyed visually in the video, is available through [captions](#captions).

*Note*: Captions can be either embedded in the video file itself or can be made available trough a separate track.

## Assumptions

This rule assumes that the video element is used to play a video (for example, not only used to display an  image), and that there is a mechanism to start the video.

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html
- https://www.w3.org/TR/WCAG20-TECHS/G93.html
- https://www.w3.org/TR/WCAG20-TECHS/G87.html
- https://www.w3.org/TR/WCAG20-TECHS/H95.html

## Test Cases

### Passed example 1

A video element that has captions for all the audio backed into it.

```html
<video src="../test-assets/perspective-video/perspective-video-with-captions.mp4" controls></video>
```

### Passed example 2

A video element with an associated track element that contain captions for all the audio.

```html
<video src="../test-assets/perspective-video/perspective-video.mp4" controls>
  <track src="/test-assets/perspective-video/perspective-caption.vtt" kind="captions">
</video>
```

### Failure example 1

A video element with any form of captions.

```html
<video src="../test-assets/perspective-video/perspective-video.mp4" controls></video>
```

### Failure example 2

A video element with an associated track element that contain incorrect captions.

```html
<video src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls>
  <track src="/test-assets/perspective-video/perspective-incorrect-caption.vtt" kind="captions">
</video>
```

### Failure example 3

A video element with a text on the same page that described the audio in the video.

```html
<p>The video below shows a man working on a keyboard. A voiceover is heard 
  saying the following text: Web accessibility perspectives. Keyboard 
  compatibility. Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance.</p>
<video src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls>
</video>
```

### Failure example 4

A video element with an explicitly associated text on the same page that described the audio in the video.

```html
<p id="text">The video below shows a man working on a keyboard. A voiceover is heard 
  saying the following text: Web accessibility perspectives. Keyboard 
  compatibility. Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance.</p>
<video src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls ariadescribedby="text">
</video>
```

### Inapplicable example 1

A video element without audio.

```html
<video src="../test-assets/perspective-video/perspective-video-silent.mp4" controls></video>
```

### Inapplicable example 2

A video element without that is not visible on the page.

```html
<video src="../test-assets/perspective-video/perspective-video.mp4" controls style="display: none;"></video>
```
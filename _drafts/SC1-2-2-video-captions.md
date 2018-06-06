---
name: video captions
description: |
  Captions are available for audio information in non-streaming `video` elements.

success_criterion:
- 1.2.2 # Captions (Prerecorded)

test_aspects:
- DOM Tree
- CSS Styling
- [Audio output][]
- [Visual output][]

authors:
- Wilco Fiers
- Brian Bors
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming][] `video` element [visible on the page][] where the video contains [audio][].

### Expectation

Of each test target, audio information that is not expressed visually in the video, is available through [captions][].

*Note*: Captions can be either embedded in the video file itself or can be made available trough a separate track.

## Assumptions

*There are currently no assumptions*

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
<video src="../test-assets/perspective-video/perspective-video-with-captions.mp4" controls></video>
```

```html
<video src="../test-assets/perspective-video/perspective-video.mp4" controls>
  <track src="/test-assets/perspective-video/perspective-caption.vtt" kind="captions">
</video>
```

### Failed

```html
<video src="../test-assets/perspective-video/perspective-video.mp4" controls></video>
```

```html
<video src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls>
  <track src="/test-assets/perspective-video/perspective-incorrect-caption.vtt" kind="captions">
</video>
```

### Inapplicable

```html
<video src="../test-assets/perspective-video/perspective-video-silent.mp4" controls></video>
```

```html
<video src="../test-assets/perspective-video/perspective-video.mp4" controls style="display: none;"></video>
```

[audio output]: ../pages/algorithms/audio-output.html
[visual output]: ../pages/algorithms/video-output.html
[non-streaming]: ../pages/algorithms/non-streaming.html
[visible on the page]: ../pages/algorithms/visible-on-the-page.html
[audio]: https://www.w3.org/TR/WCAG20/#audiodef
[captions]: https://www.w3.org/TR/WCAG20/#captionsdef
